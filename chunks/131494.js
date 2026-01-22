n.d(t, {
    A: () => _,
}),
    n(896048);
var r = n(478437),
    l = n(311907),
    i = n(811024),
    a = n(933958),
    s = n(969151),
    o = n(297334),
    c = n(508654),
    u = n(233993),
    d = n(446600),
    f = n(95701),
    p = n(616356),
    h = n(961350),
    b = n(734057),
    g = n(71393),
    m = n(576705),
    A = n(994500),
    y = n(309010),
    O = n(543465),
    j = n(977997),
    v = n(661191),
    x = n(652215);

function E(e, t) {
    let n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : m.A;
    return null != e && e.type !== r.r.GUILD_STAGE_VOICE && t !== e.id && n.canBasicChannel(x.hVb.VIEW_CHANNEL, e);
}

function _(e) {
    var t;
    let n = (0, l.bG)([O.Ay], () => O.Ay.isMuted(e)),
        r = (0, c.BP)(e),
        x = (0, l.yK)([a.Ay, A.A], () =>
            a.Ay.getEmbeddedActivitiesForGuild(e).filter(
                (e) => !(0, o.PH)([...e.userIds], A.A.getBlockedOrIgnoredIDs()),
            ),
        ),
        _ = (0, s.H)(null == (t = x[0]) ? void 0 : t.location),
        C = (0, i.Gp)(_),
        {
            guildHasVoice: S,
            guildHasVideo: I,
            selectedVoiceChannelHasVideo: N,
        } = (0, l.cf)([y.A, j.A, g.A, m.A, b.A], () => {
            var t;
            let r = y.A.getVoiceChannelId(),
                l = null == (t = g.A.getGuild(e)) ? void 0 : t.afkChannelId,
                i = j.A.getUsersWithVideo(e),
                a = (0, o.hs)(j.A.getVoiceStates(e));
            return {
                guildHasVoice: (() => {
                    if (n) return !1;
                    for (let e in a) if (E(b.A.getBasicChannel(a[e].channelId), null != l ? l : void 0, m.A)) return !0;
                    return !1;
                })(),
                guildHasVideo: (() => {
                    if (n) return !1;
                    for (let t of i) {
                        var e;
                        if (
                            E(
                                b.A.getBasicChannel(null == (e = a[t]) ? void 0 : e.channelId),
                                null != l ? l : void 0,
                                m.A,
                            )
                        )
                            return !0;
                    }
                    return !1;
                })(),
                selectedVoiceChannelHasVideo: null != r && j.A.hasVideo(r),
            };
        }, [e, n]),
        T = h.default.getId();
    return (0, l.cf)([y.A, b.A, a.Ay, d.A, p.A, m.A], () => {
        var t, l, i;
        let c = y.A.getVoiceChannelId(),
            h = (null == (l = b.A.getChannel(c)) ? void 0 : l.guild_id) === e,
            g = !1,
            A = !1,
            O = !1,
            j = !1,
            E = !1,
            _ = !1;
        if (!h && n)
            return {
                audio: g,
                video: j,
                screenshare: E,
                liveStage: O,
                activeEvent: A,
                activity: _,
                isCurrentUserConnected: !1,
            };
        let P = v.default.keys(d.A.getStageInstancesByGuild(e)).some((e) => {
                let t = b.A.getChannel(e);
                return null != t && m.A.can(u.Gk, t);
            }),
            w = h && null != (t = null == (i = b.A.getChannel(c)) ? void 0 : i.isGuildStageVoice()) && t,
            R = !!h && null != p.A.getActiveStreamForUser(T, e),
            D = (0, o.Mt)(p.A.getAllApplicationStreams()).some((t) => t.guildId === e),
            M = h && N,
            L = (() => {
                if (C) return x.length > 0;
                for (let e of x) {
                    let t = b.A.getChannel((0, s.H)(e.location));
                    if (null != t && (0, f.gV)(t.type)) return !0;
                }
                return !1;
            })(),
            G = a.Ay.getEmbeddedActivitiesForGuild(e).length > 0;
        return (
            h
                ? ((g = !0), (A = (null == r ? void 0 : r.channel_id) === c), (O = w), (j = M), (E = R), (_ = G))
                : ((g = S), (A = null != r), (O = P), (j = I), (E = D), (_ = L)),
            {
                audio: g,
                video: j,
                screenshare: E,
                liveStage: O,
                activeEvent: A,
                activity: _,
                isCurrentUserConnected: h || w,
            }
        );
    }, [e, n, N, T, C, x, r, S, I]);
}
