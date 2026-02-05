n.d(t, { A: () => N });
var i = n(478437),
    l = n(311907),
    s = n(811024),
    a = n(933958),
    r = n(969151),
    o = n(297334),
    d = n(508654),
    c = n(233993),
    u = n(446600),
    h = n(95701),
    A = n(616356),
    g = n(961350),
    m = n(734057),
    p = n(71393),
    _ = n(576705),
    x = n(994500),
    f = n(309010),
    E = n(543465),
    C = n(977997),
    I = n(661191),
    S = n(652215);
function b(e, t) {
    let n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : _.A;
    return null != e && e.type !== i.r.GUILD_STAGE_VOICE && t !== e.id && n.canBasicChannel(S.hVb.VIEW_CHANNEL, e);
}
function N(e) {
    let t = (0, l.bG)([E.Ay], () => E.Ay.isMuted(e)),
        n = (0, d.BP)(e),
        i = (0, l.yK)([a.Ay, x.A], () =>
            a.Ay.getEmbeddedActivitiesForGuild(e).filter(
                (e) => !(0, o.PH)([...e.userIds], x.A.getBlockedOrIgnoredIDs()),
            ),
        ),
        S = (0, r.H)(i[0]?.location),
        N = (0, s.Gp)(S),
        {
            guildHasVoice: T,
            guildHasVideo: j,
            selectedVoiceChannelHasVideo: v,
        } = (0, l.cf)([f.A, C.A, p.A, _.A, m.A], () => {
            let n = f.A.getVoiceChannelId(),
                i = p.A.getGuild(e)?.afkChannelId,
                l = C.A.getUsersWithVideo(e),
                s = (0, o.hs)(C.A.getVoiceStates(e));
            return {
                guildHasVoice: (() => {
                    if (t) return !1;
                    for (let e in s) if (b(m.A.getBasicChannel(s[e].channelId), i ?? void 0, _.A)) return !0;
                    return !1;
                })(),
                guildHasVideo: (() => {
                    if (t) return !1;
                    for (let e of l) if (b(m.A.getBasicChannel(s[e]?.channelId), i ?? void 0, _.A)) return !0;
                    return !1;
                })(),
                selectedVoiceChannelHasVideo: null != n && C.A.hasVideo(n),
            };
        }, [e, t]),
        y = g.default.getId();
    return (0, l.cf)([f.A, m.A, a.Ay, u.A, A.A, _.A], () => {
        let l = f.A.getVoiceChannelId(),
            s = m.A.getChannel(l)?.guild_id === e,
            d = !1,
            g = !1,
            p = !1,
            x = !1,
            E = !1,
            C = !1;
        if (!s && t)
            return {
                audio: d,
                video: x,
                screenshare: E,
                liveStage: p,
                activeEvent: g,
                activity: C,
                isCurrentUserConnected: !1,
            };
        let S = I.default.keys(u.A.getStageInstancesByGuild(e)).some((e) => {
                let t = m.A.getChannel(e);
                return null != t && _.A.can(c.Gk, t);
            }),
            b = s && (m.A.getChannel(l)?.isGuildStageVoice() ?? !1),
            R = !!s && null != A.A.getActiveStreamForUser(y, e),
            O = (0, o.Mt)(A.A.getAllApplicationStreams()).some((t) => t.guildId === e),
            L = s && v,
            D = (() => {
                if (N) return i.length > 0;
                for (let e of i) {
                    let t = m.A.getChannel((0, r.H)(e.location));
                    if (null != t && (0, h.gV)(t.type)) return !0;
                }
                return !1;
            })(),
            M = a.Ay.getEmbeddedActivitiesForGuild(e).length > 0;
        return (
            s
                ? ((d = !0), (g = n?.channel_id === l), (p = b), (x = L), (E = R), (C = M))
                : ((d = T), (g = null != n), (p = S), (x = j), (E = O), (C = D)),
            {
                audio: d,
                video: x,
                screenshare: E,
                liveStage: p,
                activeEvent: g,
                activity: C,
                isCurrentUserConnected: s || b,
            }
        );
    }, [e, t, v, y, N, i, n, T, j]);
}
