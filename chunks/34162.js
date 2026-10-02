let i, r;
(n.d(t, { A: () => $ }), n(321073));
var a = n(478437),
    s = n(17928),
    l = n(52133),
    o = n(73153),
    d = n(811024),
    c = n(933958),
    u = n(969151),
    _ = n(297334),
    E = n(890615),
    A = n(710195),
    h = n(698441),
    I = n(508654),
    f = n(446600),
    p = n(95701),
    T = n(616356),
    m = n(280450),
    g = n(734057),
    S = n(71393),
    N = n(576705),
    C = n(994500),
    O = n(309010),
    R = n(543465),
    L = n(977997),
    y = n(935208),
    D = n(581895),
    v = n(652215);
let b = Object.freeze({
        audio: !1,
        video: !1,
        screenshare: !1,
        liveStage: !1,
        activeEvent: !1,
        activity: !1,
        isCurrentUserConnected: !1,
    }),
    M = new Map(),
    P = 0,
    U = 0,
    w = null,
    G = -1,
    x = null,
    k = -1;
function F() {
    return 0 !== M.size && (P++, U++, !0);
}
function B(e) {
    if (null == e || e === v.ME) return !1;
    w?.selectedVoiceGuildId === e && U++;
    let t = M.get(e);
    return !(null == t || (t.version === P && t.value === b && R.Ay.isMuted(e))) && ((t.version = -1), !0);
}
function V() {
    return 0 !== M.size && (M.clear(), P++, U++, !0);
}
function H(e, t, n, i) {
    if (null == t) return !1;
    let r = g.A.getBasicChannel(t);
    return (
        null != r &&
        r.type !== a.r.GUILD_STAGE_VOICE &&
        n !== r.id &&
        !!N.A.canBasicChannel(v.hVb.VIEW_CHANNEL, r) &&
        (!i || !R.Ay.isGuildOrCategoryOrChannelMuted(e, t))
    );
}
function j() {
    let e = C.A.getBlockedOrIgnoredIDs();
    return e !== r && ((r = e), F());
}
function W() {
    let e = O.Ay.getVoiceChannelId();
    return e !== i && ((i = e), F());
}
function Y(e) {
    let { guild: t } = e,
        n = F();
    return (M.delete(t.id), n);
}
class K extends s.Ay.Store {
    static displayName = "GuildMediaStateStore";
    initialize() {
        ((i = O.Ay.getVoiceChannelId()),
            (r = C.A.getBlockedOrIgnoredIDs()),
            this.waitFor(A.A, T.A, m.default, g.A, c.Ay, h.Ay, S.A, N.A, C.A, O.Ay, f.A, R.Ay, L.A),
            this.syncWith([A.A, T.A, g.A, c.Ay, h.Ay, S.A, N.A, f.A, R.Ay], F),
            this.syncWith([C.A], j),
            this.syncWith([O.Ay], W));
    }
    getGuildMediaState(e) {
        let t = M.get(e);
        if (null != t && t.version === P) return t.value;
        let n = (function (e) {
                let t = (function () {
                        if (null != w && G === U) return w;
                        let e = O.Ay.getVoiceChannelId(),
                            t = null != e ? g.A.getChannel(e) : null,
                            n = C.A.getBlockedOrIgnoredIDs();
                        return (
                            (w = {
                                skipMutedVcs: (0, D.f)("GuildMediaStateStore"),
                                currentUserId: m.default.getId(),
                                selectedVoiceChannelId: e,
                                selectedVoiceGuildId: t?.guild_id,
                                selectedVoiceChannelHasVideo: null != e && L.A.hasVideo(e),
                                isSelectedVoiceChannelStage: t?.isGuildStageVoice() ?? !1,
                                blockedOrIgnoredUserIds: n,
                                streamChannelIdsByGuild: (function (e) {
                                    if (null != x && k === P) return x;
                                    let t = new Map();
                                    for (let n of T.A.getAllApplicationStreams()) {
                                        if (null == n.guildId || e.has(n.ownerId)) continue;
                                        let i = t.get(n.guildId);
                                        null != i ? i.push(n.channelId) : t.set(n.guildId, [n.channelId]);
                                    }
                                    return ((x = t), (k = P), t);
                                })(n),
                            }),
                            (G = U),
                            w
                        );
                    })(),
                    n = R.Ay.isMuted(e),
                    i = t.selectedVoiceGuildId === e;
                if (!i && n) return b;
                let r = c.Ay.getEmbeddedActivitiesForGuild(e).filter((e) => {
                    let n = g.A.getBasicChannel((0, u.H)(e.location));
                    return (
                        n?.type !== a.r.GUILD_SPACE &&
                        (0 === t.blockedOrIgnoredUserIds.size || !(0, _.PH)([...e.userIds], t.blockedOrIgnoredUserIds))
                    );
                });
                if (i) {
                    let n = t.isSelectedVoiceChannelStage;
                    return {
                        audio: !0,
                        video: t.selectedVoiceChannelHasVideo,
                        screenshare: null != T.A.getActiveStreamForUser(t.currentUserId, e),
                        liveStage: n,
                        activeEvent: (0, I.wX)(e)?.channel_id === t.selectedVoiceChannelId,
                        activity: r.length > 0,
                        isCurrentUserConnected: !0,
                    };
                }
                let s = S.A.getGuild(e)?.afkChannelId,
                    l = L.A.getVoiceStates(e),
                    o = !1,
                    A = !1;
                for (let n in l)
                    if (!t.blockedOrIgnoredUserIds.has(n) && H(e, l[n].channelId, s, t.skipMutedVcs)) {
                        o = !0;
                        break;
                    }
                for (let n of L.A.getUsersWithVideo(e))
                    if (!t.blockedOrIgnoredUserIds.has(n) && H(e, l[n]?.channelId, s, t.skipMutedVcs)) {
                        A = !0;
                        break;
                    }
                let h = t.streamChannelIdsByGuild.get(e),
                    v = null != h && h.some((n) => !t.skipMutedVcs || !R.Ay.isGuildOrCategoryOrChannelMuted(e, n)),
                    M = y.default.keys(f.A.getStageInstancesByGuild(e)).some((e) => {
                        let t = g.A.getBasicChannel(e);
                        return null != t && (0, E.A)(t, N.A);
                    }),
                    F = (0, u.H)(r[0]?.location),
                    B = (0, d.pE)(g.A.getChannel(F))
                        ? r.length > 0
                        : r.some((e) => {
                              let t = g.A.getChannel((0, u.H)(e.location));
                              return null != t && (0, p.gV)(t.type);
                          });
                return {
                    audio: o,
                    video: A,
                    screenshare: v,
                    liveStage: M,
                    activeEvent: null != (0, I.wX)(e),
                    activity: B,
                    isCurrentUserConnected: !1,
                };
            })(e),
            i = null != t && (0, l.A)(t.value, n) ? t.value : n;
        return (M.set(e, { value: i, version: P }), i);
    }
}
let $ = new K(o.h, {
    CONNECTION_OPEN: V,
    CONNECTION_OPEN_SUPPLEMENTAL: V,
    CONNECTION_CLOSED: V,
    OVERLAY_INITIALIZE: V,
    LOGOUT: V,
    GUILD_CREATE: Y,
    GUILD_DELETE: Y,
    VOICE_STATE_UPDATES: function (e) {
        let { voiceStates: t } = e,
            n = !1;
        for (let { guildId: e } of t) n = B(e) || n;
        return n;
    },
    PASSIVE_UPDATE_V2: function (e) {
        let { guildId: t, voiceStates: n, removedVoiceStateUsers: i } = e;
        return (0 !== n.length || 0 !== i.length) && B(t);
    },
});
