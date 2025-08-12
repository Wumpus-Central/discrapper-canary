n.d(t, { Z: () => x }), n(388685);
var r = n(106351),
    i = n(442837),
    l = n(595519),
    o = n(317381),
    s = n(16609),
    a = n(470883),
    c = n(554747),
    u = n(146085),
    d = n(427679),
    h = n(131704),
    p = n(199902),
    f = n(314897),
    g = n(592125),
    m = n(430824),
    b = n(496675),
    O = n(699516),
    _ = n(944486),
    y = n(9156),
    C = n(979651),
    v = n(709054),
    j = n(209114),
    E = n(981631);
function S(e, t) {
    let n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : b.Z;
    return null != e && e.type !== r.d.GUILD_STAGE_VOICE && t !== e.id && n.canBasicChannel(E.S7T.VIEW_CHANNEL, e);
}
function x(e) {
    var t;
    let n = (0, i.e7)([y.ZP], () => y.ZP.isMuted(e)),
        r = j.Z.useConfig({ location: "useGuildMediaState" }).enabled,
        E = n && !r,
        x = (0, c.k5)(e),
        I = (0, i.Wu)([o.ZP, O.Z], () =>
            o.ZP.getEmbeddedActivitiesForGuild(e).filter(
                (e) => !(0, a.BA)([...e.userIds], O.Z.getBlockedOrIgnoredIDs()),
            ),
        ),
        P = (0, s.p)(null == (t = I[0]) ? void 0 : t.location),
        N = (0, l.NX)(P),
        {
            guildHasVoice: w,
            guildHasVideo: Z,
            selectedVoiceChannelHasVideo: T,
        } = (0, i.cj)([_.Z, C.Z, m.Z, b.Z, g.Z], () => {
            var t;
            let n = _.Z.getVoiceChannelId(),
                r = null == (t = m.Z.getGuild(e)) ? void 0 : t.afkChannelId,
                i = C.Z.getUsersWithVideo(e),
                l = (0, a.DX)(C.Z.getVoiceStates(e));
            return {
                guildHasVoice: (() => {
                    if (E) return !1;
                    for (let e in l) if (S(g.Z.getBasicChannel(l[e].channelId), null != r ? r : void 0, b.Z)) return !0;
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
                                b.Z,
                            )
                        )
                            return !0;
                    }
                    return !1;
                })(),
                selectedVoiceChannelHasVideo: null != n && C.Z.hasVideo(n),
            };
        }, [e, E]),
        A = f.default.getId();
    return (0, i.cj)([_.Z, g.Z, o.ZP, d.Z, p.Z, b.Z], () => {
        var t, n, r;
        let i = _.Z.getVoiceChannelId(),
            l = (null == (t = g.Z.getChannel(i)) ? void 0 : t.guild_id) === e,
            c = !1,
            f = !1,
            m = !1,
            O = !1,
            y = !1,
            C = !1;
        if (!l && E)
            return {
                audio: c,
                video: O,
                screenshare: y,
                liveStage: m,
                activeEvent: f,
                activity: C,
                isCurrentUserConnected: !1,
            };
        let j = v.default.keys(d.Z.getStageInstancesByGuild(e)).some((e) => {
                let t = g.Z.getChannel(e);
                return null != t && b.Z.can(u.gl, t);
            }),
            S = l && null != (r = null == (n = g.Z.getChannel(i)) ? void 0 : n.isGuildStageVoice()) && r,
            P = !!l && null != p.Z.getActiveStreamForUser(A, e),
            R = (0, a.aK)(p.Z.getAllApplicationStreams()).some((t) => t.guildId === e),
            D = l && T,
            L = (() => {
                if (N) return I.length > 0;
                for (let e of I) {
                    let t = g.Z.getChannel((0, s.p)(e.location));
                    if (null != t && (0, h.vd)(t.type)) return !0;
                }
                return !1;
            })(),
            M = o.ZP.getEmbeddedActivitiesForGuild(e).length > 0;
        return (
            l
                ? ((c = !0), (f = (null == x ? void 0 : x.channel_id) === i), (m = S), (O = D), (y = P), (C = M))
                : ((c = w), (f = null != x), (m = j), (O = Z), (y = R), (C = L)),
            {
                audio: c,
                video: O,
                screenshare: y,
                liveStage: m,
                activeEvent: f,
                activity: C,
                isCurrentUserConnected: l || S,
            }
        );
    }, [e, E, T, A, N, I, x, w, Z]);
}
