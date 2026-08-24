"use strict";
n.d(t, { A: () => B }), n(321073);
var i = n(478437),
    r = n(17928),
    a = n(52133),
    s = n(228366),
    l = n(811024),
    o = n(933958),
    d = n(969151),
    c = n(297334),
    u = n(890615),
    _ = n(710195),
    E = n(698441),
    A = n(508654),
    h = n(446600),
    I = n(95701),
    f = n(616356),
    p = n(280450),
    T = n(734057),
    m = n(71393),
    g = n(576705),
    S = n(994500),
    N = n(309010),
    C = n(543465),
    O = n(977997),
    R = n(935208),
    L = n(581895),
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
    U = -1;
function w() {
    return 0 !== v.size && (b++, M++, !0);
}
function G(e) {
    if (null == e || e === y.ME) return !1;
    M++;
    let t = v.get(e);
    return null != t && ((t.version = -1), !0);
}
function x() {
    return 0 !== v.size && (v.clear(), b++, M++, !0);
}
function k(e, t, n, r) {
    if (null == t) return !1;
    let a = T.A.getBasicChannel(t);
    return (
        null != a &&
        a.type !== i.r.GUILD_STAGE_VOICE &&
        n !== a.id &&
        !!g.A.canBasicChannel(y.hVb.VIEW_CHANNEL, a) &&
        (!r || !C.Ay.isGuildOrCategoryOrChannelMuted(e, t))
    );
}
function F(e) {
    let { guild: t } = e,
        n = w();
    return v.delete(t.id), n;
}
class V extends r.Ay.Store {
    static displayName = "GuildMediaStateStore";
    initialize() {
        this.waitFor(_.A, f.A, p.default, T.A, o.Ay, E.Ay, m.A, g.A, S.A, N.Ay, h.A, C.Ay, O.A),
            this.syncWith([_.A, f.A, T.A, o.Ay, E.Ay, m.A, g.A, S.A, N.Ay, h.A, C.Ay], w);
    }
    getGuildMediaState(e) {
        let t = v.get(e);
        if (null != t && t.version === b) return t.value;
        let n = (function (e) {
                let t = (function () {
                        if (null != P && U === M) return P;
                        let e = N.Ay.getVoiceChannelId(),
                            t = null != e ? T.A.getChannel(e) : null,
                            n = S.A.getBlockedOrIgnoredIDs(),
                            i = new Map();
                        for (let e of f.A.getAllApplicationStreams()) {
                            if (null == e.guildId || n.has(e.ownerId)) continue;
                            let t = i.get(e.guildId);
                            null != t ? t.push(e.channelId) : i.set(e.guildId, [e.channelId]);
                        }
                        return (
                            (P = {
                                skipMutedVcs: (0, L.f)("GuildMediaStateStore"),
                                currentUserId: p.default.getId(),
                                selectedVoiceChannelId: e,
                                selectedVoiceGuildId: t?.guild_id,
                                selectedVoiceChannelHasVideo: null != e && O.A.hasVideo(e),
                                isSelectedVoiceChannelStage: t?.isGuildStageVoice() ?? !1,
                                blockedOrIgnoredUserIds: n,
                                streamChannelIdsByGuild: i,
                            }),
                            (U = M),
                            P
                        );
                    })(),
                    n = C.Ay.isMuted(e),
                    i = t.selectedVoiceGuildId === e;
                if (!i && n) return D;
                let r = o.Ay.getEmbeddedActivitiesForGuild(e);
                if (i) {
                    let n = t.isSelectedVoiceChannelStage;
                    return {
                        audio: !0,
                        video: t.selectedVoiceChannelHasVideo,
                        screenshare: null != f.A.getActiveStreamForUser(t.currentUserId, e),
                        liveStage: n,
                        activeEvent: (0, A.wX)(e)?.channel_id === t.selectedVoiceChannelId,
                        activity: r.length > 0,
                        isCurrentUserConnected: !0,
                    };
                }
                let a =
                        0 === t.blockedOrIgnoredUserIds.size
                            ? r
                            : r.filter((e) => !(0, c.PH)([...e.userIds], t.blockedOrIgnoredUserIds)),
                    s = m.A.getGuild(e)?.afkChannelId,
                    _ = O.A.getVoiceStates(e),
                    E = !1,
                    y = !1;
                for (let n in _)
                    if (!t.blockedOrIgnoredUserIds.has(n) && k(e, _[n].channelId, s, t.skipMutedVcs)) {
                        E = !0;
                        break;
                    }
                for (let n of O.A.getUsersWithVideo(e))
                    if (!t.blockedOrIgnoredUserIds.has(n) && k(e, _[n]?.channelId, s, t.skipMutedVcs)) {
                        y = !0;
                        break;
                    }
                let v = t.streamChannelIdsByGuild.get(e),
                    b = null != v && v.some((n) => !t.skipMutedVcs || !C.Ay.isGuildOrCategoryOrChannelMuted(e, n)),
                    w = R.default.keys(h.A.getStageInstancesByGuild(e)).some((e) => {
                        let t = T.A.getBasicChannel(e);
                        return null != t && (0, u.A)(t, g.A);
                    }),
                    G = (0, d.H)(a[0]?.location),
                    x = (0, l.pE)(T.A.getChannel(G))
                        ? a.length > 0
                        : a.some((e) => {
                              let t = T.A.getChannel((0, d.H)(e.location));
                              return null != t && (0, I.gV)(t.type);
                          });
                return {
                    audio: E,
                    video: y,
                    screenshare: b,
                    liveStage: w,
                    activeEvent: null != (0, A.wX)(e),
                    activity: x,
                    isCurrentUserConnected: !1,
                };
            })(e),
            i = null != t && (0, a.A)(t.value, n) ? t.value : n;
        return v.set(e, { value: i, version: b }), i;
    }
}
let B = new V(s.h, {
    CONNECTION_OPEN: x,
    CONNECTION_OPEN_SUPPLEMENTAL: x,
    CONNECTION_CLOSED: x,
    OVERLAY_INITIALIZE: x,
    LOGOUT: x,
    GUILD_CREATE: F,
    GUILD_DELETE: F,
    VOICE_STATE_UPDATES: function (e) {
        let { voiceStates: t } = e,
            n = !1;
        for (let { guildId: e } of t) n = G(e) || n;
        return n;
    },
    PASSIVE_UPDATE_V2: function (e) {
        let { guildId: t } = e;
        return G(t);
    },
});
