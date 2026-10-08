let i, r;
(n.d(t, { A: () => W }), n(321073));
var a = n(478437),
    s = n(17928),
    l = n(52133),
    o = n(73153),
    d = n(811024),
    c = n(933958),
    u = n(969151),
    _ = n(297334),
    E = n(890615),
    A = n(698441),
    h = n(508654),
    f = n(446600),
    I = n(95701),
    p = n(616356),
    T = n(280450),
    m = n(734057),
    g = n(71393),
    S = n(576705),
    N = n(994500),
    C = n(309010),
    O = n(543465),
    R = n(977997),
    L = n(935208),
    y = n(652215);
let D = Object.freeze({
        audio: !1,
        video: !1,
        screenshare: !1,
        liveStage: !1,
        activeEvent: !1,
        activity: !1,
        isCurrentUserConnected: !1,
    }),
    v = new Map(),
    b = 0,
    M = 0,
    P = null,
    U = -1,
    w = null,
    G = -1;
function x() {
    return 0 !== v.size && (b++, M++, !0);
}
function k(e) {
    if (null == e || e === y.ME) return !1;
    P?.selectedVoiceGuildId === e && M++;
    let t = v.get(e);
    return !(null == t || (t.version === b && t.value === D && O.Ay.isMuted(e))) && ((t.version = -1), !0);
}
function F() {
    return 0 !== v.size && (v.clear(), b++, M++, !0);
}
function B(e, t, n) {
    if (null == t) return !1;
    let i = m.A.getBasicChannel(t);
    return (
        null != i &&
        i.type !== a.r.GUILD_STAGE_VOICE &&
        n !== i.id &&
        !!S.A.canBasicChannel(y.hVb.VIEW_CHANNEL, i) &&
        !O.Ay.isGuildOrCategoryOrChannelMuted(e, t)
    );
}
function V() {
    let e = N.A.getBlockedOrIgnoredIDs();
    return e !== r && ((r = e), x());
}
function H() {
    let e = C.Ay.getVoiceChannelId();
    return e !== i && ((i = e), x());
}
class j extends s.Ay.Store {
    static displayName = "GuildMediaStateStore";
    initialize() {
        ((i = C.Ay.getVoiceChannelId()),
            (r = N.A.getBlockedOrIgnoredIDs()),
            this.waitFor(p.A, T.default, m.A, c.Ay, A.Ay, g.A, S.A, N.A, C.Ay, f.A, O.Ay, R.A),
            this.syncWith([p.A, m.A, c.Ay, A.Ay, g.A, S.A, f.A, O.Ay], x),
            this.syncWith([N.A], V),
            this.syncWith([C.Ay], H));
    }
    getGuildMediaState(e) {
        let t = v.get(e);
        if (null != t && t.version === b) return t.value;
        let n = (function (e) {
                let t = (function () {
                        if (null != P && U === M) return P;
                        let e = C.Ay.getVoiceChannelId(),
                            t = null != e ? m.A.getChannel(e) : null,
                            n = N.A.getBlockedOrIgnoredIDs();
                        return (
                            (P = {
                                currentUserId: T.default.getId(),
                                selectedVoiceChannelId: e,
                                selectedVoiceGuildId: t?.guild_id,
                                selectedVoiceChannelHasVideo: null != e && R.A.hasVideo(e),
                                isSelectedVoiceChannelStage: t?.isGuildStageVoice() ?? !1,
                                blockedOrIgnoredUserIds: n,
                                streamChannelIdsByGuild: (function (e) {
                                    if (null != w && G === b) return w;
                                    let t = new Map();
                                    for (let n of p.A.getAllApplicationStreams()) {
                                        if (null == n.guildId || e.has(n.ownerId)) continue;
                                        let i = t.get(n.guildId);
                                        null != i ? i.push(n.channelId) : t.set(n.guildId, [n.channelId]);
                                    }
                                    return ((w = t), (G = b), t);
                                })(n),
                            }),
                            (U = M),
                            P
                        );
                    })(),
                    n = O.Ay.isMuted(e),
                    i = t.selectedVoiceGuildId === e;
                if (!i && n) return D;
                let r = c.Ay.getEmbeddedActivitiesForGuild(e).filter((e) => {
                    let n = m.A.getBasicChannel((0, u.H)(e.location));
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
                        screenshare: null != p.A.getActiveStreamForUser(t.currentUserId, e),
                        liveStage: n,
                        activeEvent: (0, h.wX)(e)?.channel_id === t.selectedVoiceChannelId,
                        activity: r.length > 0,
                        isCurrentUserConnected: !0,
                    };
                }
                let s = g.A.getGuild(e)?.afkChannelId,
                    l = R.A.getVoiceStates(e),
                    o = !1,
                    A = !1;
                for (let n in l)
                    if (!t.blockedOrIgnoredUserIds.has(n) && B(e, l[n].channelId, s)) {
                        o = !0;
                        break;
                    }
                for (let n of R.A.getUsersWithVideo(e))
                    if (!t.blockedOrIgnoredUserIds.has(n) && B(e, l[n]?.channelId, s)) {
                        A = !0;
                        break;
                    }
                let y = t.streamChannelIdsByGuild.get(e),
                    v = null != y && y.some((t) => !O.Ay.isGuildOrCategoryOrChannelMuted(e, t)),
                    x = L.default.keys(f.A.getStageInstancesByGuild(e)).some((e) => {
                        let t = m.A.getBasicChannel(e);
                        return null != t && (0, E.A)(t, S.A);
                    }),
                    k = (0, u.H)(r[0]?.location),
                    F = (0, d.pE)(m.A.getChannel(k))
                        ? r.length > 0
                        : r.some((e) => {
                              let t = m.A.getChannel((0, u.H)(e.location));
                              return null != t && (0, I.gV)(t.type);
                          });
                return {
                    audio: o,
                    video: A,
                    screenshare: v,
                    liveStage: x,
                    activeEvent: null != (0, h.wX)(e),
                    activity: F,
                    isCurrentUserConnected: !1,
                };
            })(e),
            i = null != t && (0, l.A)(t.value, n) ? t.value : n;
        return (v.set(e, { value: i, version: b }), i);
    }
}
let W = new j(o.h, {
    CONNECTION_OPEN: function () {
        let e = x();
        for (let e of v.keys()) null == g.A.getGuild(e) && v.delete(e);
        return e;
    },
    CONNECTION_OPEN_SUPPLEMENTAL: x,
    CONNECTION_CLOSED: x,
    OVERLAY_INITIALIZE: F,
    LOGOUT: F,
    GUILD_CREATE: x,
    GUILD_DELETE: function (e) {
        let { guild: t } = e,
            n = x();
        return (v.delete(t.id), n);
    },
    VOICE_STATE_UPDATES: function (e) {
        let { voiceStates: t } = e,
            n = !1;
        for (let { guildId: e } of t) n = k(e) || n;
        return n;
    },
    PASSIVE_UPDATE_V2: function (e) {
        let { guildId: t, voiceStates: n, removedVoiceStateUsers: i } = e;
        return (0 !== n.length || 0 !== i.length) && k(t);
    },
});
