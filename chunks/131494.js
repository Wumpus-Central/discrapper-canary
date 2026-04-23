n.d(t, { A: () => S });
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
    _ = n(961350),
    m = n(734057),
    g = n(71393),
    p = n(576705),
    f = n(994500),
    E = n(309010),
    x = n(543465),
    I = n(977997),
    C = n(661191),
    b = n(652215);
function N(e, t) {
    let n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : p.A;
    return null != e && e.type !== i.r.GUILD_STAGE_VOICE && t !== e.id && n.canBasicChannel(b.hVb.VIEW_CHANNEL, e);
}
function S(e) {
    let t = (0, l.bG)([x.Ay], () => x.Ay.isMuted(e)),
        n = (0, d.BP)(e),
        i = (0, l.yK)([a.Ay, f.A], () =>
            a.Ay.getEmbeddedActivitiesForGuild(e).filter(
                (e) => !(0, o.PH)([...e.userIds], f.A.getBlockedOrIgnoredIDs()),
            ),
        ),
        b = (0, r.H)(i[0]?.location),
        S = (0, s.Gp)(b),
        {
            guildHasVoice: v,
            guildHasVideo: T,
            selectedVoiceChannelHasVideo: y,
        } = (0, l.cf)([E.A, I.A, g.A, p.A, m.A], () => {
            let n = E.A.getVoiceChannelId(),
                i = g.A.getGuild(e)?.afkChannelId,
                l = I.A.getUsersWithVideo(e),
                s = (0, o.hs)(I.A.getVoiceStates(e));
            return {
                guildHasVoice: (() => {
                    if (t) return !1;
                    for (let e in s) if (N(m.A.getBasicChannel(s[e].channelId), i ?? void 0, p.A)) return !0;
                    return !1;
                })(),
                guildHasVideo: (() => {
                    if (t) return !1;
                    for (let e of l) if (N(m.A.getBasicChannel(s[e]?.channelId), i ?? void 0, p.A)) return !0;
                    return !1;
                })(),
                selectedVoiceChannelHasVideo: null != n && I.A.hasVideo(n),
            };
        }, [e, t]),
        j = _.default.getId();
    return (0, l.cf)([E.A, m.A, a.Ay, u.A, A.A, p.A], () => {
        let l = E.A.getVoiceChannelId(),
            s = m.A.getChannel(l)?.guild_id === e,
            d = !1,
            _ = !1,
            g = !1,
            f = !1,
            x = !1,
            I = !1;
        if (!s && t)
            return {
                audio: d,
                video: f,
                screenshare: x,
                liveStage: g,
                activeEvent: _,
                activity: I,
                isCurrentUserConnected: !1,
            };
        let b = C.default.keys(u.A.getStageInstancesByGuild(e)).some((e) => {
                let t = m.A.getChannel(e);
                return null != t && p.A.can(c.Gk, t);
            }),
            N = s && (m.A.getChannel(l)?.isGuildStageVoice() ?? !1),
            R = !!s && null != A.A.getActiveStreamForUser(j, e),
            L = (0, o.Mt)(A.A.getAllApplicationStreams()).some((t) => t.guildId === e),
            O = s && y,
            G = (() => {
                if (S) return i.length > 0;
                for (let e of i) {
                    let t = m.A.getChannel((0, r.H)(e.location));
                    if (null != t && (0, h.gV)(t.type)) return !0;
                }
                return !1;
            })(),
            M = a.Ay.getEmbeddedActivitiesForGuild(e).length > 0;
        return (
            s
                ? ((d = !0), (_ = n?.channel_id === l), (g = N), (f = O), (x = R), (I = M))
                : ((d = v), (_ = null != n), (g = b), (f = T), (x = L), (I = G)),
            {
                audio: d,
                video: f,
                screenshare: x,
                liveStage: g,
                activeEvent: _,
                activity: I,
                isCurrentUserConnected: s || N,
            }
        );
    }, [e, t, y, j, S, i, n, v, T]);
}
