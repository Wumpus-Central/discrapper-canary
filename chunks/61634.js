n.d(t, { Z: () => I }), n(388685);
var r = n(106351),
    i = n(442837),
    l = n(595519),
    a = n(317381),
    o = n(16609),
    s = n(470883),
    c = n(554747),
    u = n(146085),
    d = n(427679),
    f = n(131704),
    h = n(199902),
    p = n(314897),
    g = n(592125),
    b = n(430824),
    m = n(496675),
    y = n(699516),
    O = n(944486),
    v = n(9156),
    j = n(979651),
    C = n(709054),
    x = n(209114),
    E = n(981631);
function S(e, t) {
    let n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : m.Z;
    return null != e && e.type !== r.d.GUILD_STAGE_VOICE && t !== e.id && n.canBasicChannel(E.S7T.VIEW_CHANNEL, e);
}
function I(e) {
    var t;
    let n = (0, i.e7)([v.ZP], () => v.ZP.isMuted(e)),
        r = x.Z.useConfig({ location: "useGuildMediaState" }).enabled,
        E = n && !r,
        I = (0, c.k5)(e),
        _ = (0, i.Wu)([a.ZP, y.Z], () =>
            a.ZP.getEmbeddedActivitiesForGuild(e).filter(
                (e) => !(0, s.BA)([...e.userIds], y.Z.getBlockedOrIgnoredIDs()),
            ),
        ),
        P = (0, o.p)(null == (t = _[0]) ? void 0 : t.location),
        N = (0, l.NX)(P),
        {
            guildHasVoice: Z,
            guildHasVideo: w,
            selectedVoiceChannelHasVideo: T,
        } = (0, i.cj)([O.Z, j.Z, b.Z, m.Z, g.Z], () => {
            var t;
            let n = O.Z.getVoiceChannelId(),
                r = null == (t = b.Z.getGuild(e)) ? void 0 : t.afkChannelId,
                i = j.Z.getUsersWithVideo(e),
                l = (0, s.DX)(j.Z.getVoiceStates(e));
            return {
                guildHasVoice: (() => {
                    if (E) return !1;
                    for (let e in l) if (S(g.Z.getBasicChannel(l[e].channelId), null != r ? r : void 0, m.Z)) return !0;
                    return !1;
                })(),
                guildHasVideo: (() => {
                    if (E) return !1;
                    for (let t of i) {
                        var e;
                        if (
                            S(
                                g.Z.getBasicChannel(null == (e = l[t]) ? void 0 : e.channelId),
                                null != r ? r : void 0,
                                m.Z,
                            )
                        )
                            return !0;
                    }
                    return !1;
                })(),
                selectedVoiceChannelHasVideo: null != n && j.Z.hasVideo(n),
            };
        }, [e, E]),
        A = p.default.getId();
    return (0, i.cj)([O.Z, g.Z, a.ZP, d.Z, h.Z, m.Z], () => {
        var t, n, r;
        let i = O.Z.getVoiceChannelId(),
            l = (null == (t = g.Z.getChannel(i)) ? void 0 : t.guild_id) === e,
            c = !1,
            p = !1,
            b = !1,
            y = !1,
            v = !1,
            j = !1;
        if (!l && E)
            return {
                audio: c,
                video: y,
                screenshare: v,
                liveStage: b,
                activeEvent: p,
                activity: j,
                isCurrentUserConnected: !1,
            };
        let x = C.default.keys(d.Z.getStageInstancesByGuild(e)).some((e) => {
                let t = g.Z.getChannel(e);
                return null != t && m.Z.can(u.gl, t);
            }),
            S = l && null != (r = null == (n = g.Z.getChannel(i)) ? void 0 : n.isGuildStageVoice()) && r,
            P = !!l && null != h.Z.getActiveStreamForUser(A, e),
            R = (0, s.aK)(h.Z.getAllApplicationStreams()).some((t) => t.guildId === e),
            D = l && T,
            M = (() => {
                if (N) return _.length > 0;
                for (let e of _) {
                    let t = g.Z.getChannel((0, o.p)(e.location));
                    if (null != t && (0, f.vd)(t.type)) return !0;
                }
                return !1;
            })(),
            L = a.ZP.getEmbeddedActivitiesForGuild(e).length > 0;
        return (
            l
                ? ((c = !0), (p = (null == I ? void 0 : I.channel_id) === i), (b = S), (y = D), (v = P), (j = L))
                : ((c = Z), (p = null != I), (b = x), (y = w), (v = R), (j = M)),
            {
                audio: c,
                video: y,
                screenshare: v,
                liveStage: b,
                activeEvent: p,
                activity: j,
                isCurrentUserConnected: l || S,
            }
        );
    }, [e, E, T, A, N, _, I, Z, w]);
}
