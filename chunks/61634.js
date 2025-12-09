n.d(t, { Z: () => S }), n(388685);
var r = n(106351),
    i = n(442837),
    l = n(595519),
    o = n(317381),
    a = n(16609),
    s = n(470883),
    c = n(554747),
    u = n(146085),
    d = n(427679),
    f = n(131704),
    h = n(199902),
    p = n(314897),
    g = n(592125),
    m = n(430824),
    b = n(496675),
    _ = n(699516),
    y = n(944486),
    O = n(9156),
    v = n(979651),
    j = n(709054),
    x = n(209114),
    C = n(981631);
function E(e, t) {
    let n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : b.Z;
    return null != e && e.type !== r.d.GUILD_STAGE_VOICE && t !== e.id && n.canBasicChannel(C.S7T.VIEW_CHANNEL, e);
}
function S(e) {
    var t;
    let n = (0, i.e7)([O.ZP], () => O.ZP.isMuted(e)),
        r = x.Z.useConfig({ location: "useGuildMediaState" }).enabled,
        C = n && !r,
        S = (0, c.k5)(e),
        I = (0, i.Wu)([o.ZP, _.Z], () =>
            o.ZP.getEmbeddedActivitiesForGuild(e).filter(
                (e) => !(0, s.BA)([...e.userIds], _.Z.getBlockedOrIgnoredIDs()),
            ),
        ),
        P = (0, a.p)(null == (t = I[0]) ? void 0 : t.location),
        N = (0, l.NX)(P),
        {
            guildHasVoice: Z,
            guildHasVideo: w,
            selectedVoiceChannelHasVideo: T,
        } = (0, i.cj)([y.Z, v.Z, m.Z, b.Z, g.Z], () => {
            var t;
            let n = y.Z.getVoiceChannelId(),
                r = null == (t = m.Z.getGuild(e)) ? void 0 : t.afkChannelId,
                i = v.Z.getUsersWithVideo(e),
                l = (0, s.DX)(v.Z.getVoiceStates(e));
            return {
                guildHasVoice: (() => {
                    if (C) return !1;
                    for (let e in l) if (E(g.Z.getBasicChannel(l[e].channelId), null != r ? r : void 0, b.Z)) return !0;
                    return !1;
                })(),
                guildHasVideo: (() => {
                    if (C) return !1;
                    for (let t of i) {
                        var e;
                        if (
                            E(
                                g.Z.getBasicChannel(null == (e = l[t]) ? void 0 : e.channelId),
                                null != r ? r : void 0,
                                b.Z,
                            )
                        )
                            return !0;
                    }
                    return !1;
                })(),
                selectedVoiceChannelHasVideo: null != n && v.Z.hasVideo(n),
            };
        }, [e, C]),
        A = p.default.getId();
    return (0, i.cj)([y.Z, g.Z, o.ZP, d.Z, h.Z, b.Z], () => {
        var t, n, r;
        let i = y.Z.getVoiceChannelId(),
            l = (null == (t = g.Z.getChannel(i)) ? void 0 : t.guild_id) === e,
            c = !1,
            p = !1,
            m = !1,
            _ = !1,
            O = !1,
            v = !1;
        if (!l && C)
            return {
                audio: c,
                video: _,
                screenshare: O,
                liveStage: m,
                activeEvent: p,
                activity: v,
                isCurrentUserConnected: !1,
            };
        let x = j.default.keys(d.Z.getStageInstancesByGuild(e)).some((e) => {
                let t = g.Z.getChannel(e);
                return null != t && b.Z.can(u.gl, t);
            }),
            E = l && null != (r = null == (n = g.Z.getChannel(i)) ? void 0 : n.isGuildStageVoice()) && r,
            P = !!l && null != h.Z.getActiveStreamForUser(A, e),
            R = (0, s.aK)(h.Z.getAllApplicationStreams()).some((t) => t.guildId === e),
            D = l && T,
            L = (() => {
                if (N) return I.length > 0;
                for (let e of I) {
                    let t = g.Z.getChannel((0, a.p)(e.location));
                    if (null != t && (0, f.vd)(t.type)) return !0;
                }
                return !1;
            })(),
            M = o.ZP.getEmbeddedActivitiesForGuild(e).length > 0;
        return (
            l
                ? ((c = !0), (p = (null == S ? void 0 : S.channel_id) === i), (m = E), (_ = D), (O = P), (v = M))
                : ((c = Z), (p = null != S), (m = x), (_ = w), (O = R), (v = L)),
            {
                audio: c,
                video: _,
                screenshare: O,
                liveStage: m,
                activeEvent: p,
                activity: v,
                isCurrentUserConnected: l || E,
            }
        );
    }, [e, C, T, A, N, I, S, Z, w]);
}
