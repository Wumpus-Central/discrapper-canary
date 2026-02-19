"use strict";
n.d(t, { A: () => S });
var i = n(478437),
    s = n(311907),
    l = n(811024),
    r = n(933958),
    a = n(969151),
    o = n(297334),
    c = n(508654),
    d = n(233993),
    u = n(446600),
    h = n(95701),
    A = n(616356),
    p = n(961350),
    g = n(734057),
    m = n(71393),
    _ = n(576705),
    f = n(994500),
    x = n(309010),
    C = n(543465),
    E = n(977997),
    I = n(661191),
    b = n(652215);
function N(e, t) {
    let n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : _.A;
    return null != e && e.type !== i.r.GUILD_STAGE_VOICE && t !== e.id && n.canBasicChannel(b.hVb.VIEW_CHANNEL, e);
}
function S(e) {
    let t = (0, s.bG)([C.Ay], () => C.Ay.isMuted(e)),
        n = (0, c.BP)(e),
        i = (0, s.yK)([r.Ay, f.A], () =>
            r.Ay.getEmbeddedActivitiesForGuild(e).filter(
                (e) => !(0, o.PH)([...e.userIds], f.A.getBlockedOrIgnoredIDs()),
            ),
        ),
        b = (0, a.H)(i[0]?.location),
        S = (0, l.Gp)(b),
        {
            guildHasVoice: T,
            guildHasVideo: v,
            selectedVoiceChannelHasVideo: y,
        } = (0, s.cf)([x.A, E.A, m.A, _.A, g.A], () => {
            let n = x.A.getVoiceChannelId(),
                i = m.A.getGuild(e)?.afkChannelId,
                s = E.A.getUsersWithVideo(e),
                l = (0, o.hs)(E.A.getVoiceStates(e));
            return {
                guildHasVoice: (() => {
                    if (t) return !1;
                    for (let e in l) if (N(g.A.getBasicChannel(l[e].channelId), i ?? void 0, _.A)) return !0;
                    return !1;
                })(),
                guildHasVideo: (() => {
                    if (t) return !1;
                    for (let e of s) if (N(g.A.getBasicChannel(l[e]?.channelId), i ?? void 0, _.A)) return !0;
                    return !1;
                })(),
                selectedVoiceChannelHasVideo: null != n && E.A.hasVideo(n),
            };
        }, [e, t]),
        j = p.default.getId();
    return (0, s.cf)([x.A, g.A, r.Ay, u.A, A.A, _.A], () => {
        let s = x.A.getVoiceChannelId(),
            l = g.A.getChannel(s)?.guild_id === e,
            c = !1,
            p = !1,
            m = !1,
            f = !1,
            C = !1,
            E = !1;
        if (!l && t)
            return {
                audio: c,
                video: f,
                screenshare: C,
                liveStage: m,
                activeEvent: p,
                activity: E,
                isCurrentUserConnected: !1,
            };
        let b = I.default.keys(u.A.getStageInstancesByGuild(e)).some((e) => {
                let t = g.A.getChannel(e);
                return null != t && _.A.can(d.Gk, t);
            }),
            N = l && (g.A.getChannel(s)?.isGuildStageVoice() ?? !1),
            R = !!l && null != A.A.getActiveStreamForUser(j, e),
            O = (0, o.Mt)(A.A.getAllApplicationStreams()).some((t) => t.guildId === e),
            L = l && y,
            M = (() => {
                if (S) return i.length > 0;
                for (let e of i) {
                    let t = g.A.getChannel((0, a.H)(e.location));
                    if (null != t && (0, h.gV)(t.type)) return !0;
                }
                return !1;
            })(),
            D = r.Ay.getEmbeddedActivitiesForGuild(e).length > 0;
        return (
            l
                ? ((c = !0), (p = n?.channel_id === s), (m = N), (f = L), (C = R), (E = D))
                : ((c = T), (p = null != n), (m = b), (f = v), (C = O), (E = M)),
            {
                audio: c,
                video: f,
                screenshare: C,
                liveStage: m,
                activeEvent: p,
                activity: E,
                isCurrentUserConnected: l || N,
            }
        );
    }, [e, t, y, j, S, i, n, T, v]);
}
