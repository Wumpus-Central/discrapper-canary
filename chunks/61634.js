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
    p = n(131704),
    h = n(199902),
    f = n(314897),
    g = n(592125),
    m = n(430824),
    b = n(496675),
    O = n(699516),
    y = n(944486),
    _ = n(9156),
    j = n(979651),
    v = n(709054),
    x = n(209114),
    C = n(981631);
function E(e, t) {
    let n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : b.Z;
    return null != e && e.type !== r.d.GUILD_STAGE_VOICE && t !== e.id && n.canBasicChannel(C.S7T.VIEW_CHANNEL, e);
}
function S(e) {
    var t;
    let n = (0, i.e7)([_.ZP], () => _.ZP.isMuted(e)),
        r = x.Z.useConfig({ location: "useGuildMediaState" }).enabled,
        C = n && !r,
        S = (0, c.k5)(e),
        P = (0, i.Wu)([o.ZP, O.Z], () =>
            o.ZP.getEmbeddedActivitiesForGuild(e).filter(
                (e) => !(0, s.BA)([...e.userIds], O.Z.getBlockedOrIgnoredIDs()),
            ),
        ),
        I = (0, a.p)(null == (t = P[0]) ? void 0 : t.location),
        N = (0, l.NX)(I),
        {
            guildHasVoice: w,
            guildHasVideo: Z,
            selectedVoiceChannelHasVideo: T,
        } = (0, i.cj)([y.Z, j.Z, m.Z, b.Z, g.Z], () => {
            var t;
            let n = y.Z.getVoiceChannelId(),
                r = null == (t = m.Z.getGuild(e)) ? void 0 : t.afkChannelId,
                i = j.Z.getUsersWithVideo(e),
                l = (0, s.DX)(j.Z.getVoiceStates(e));
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
                selectedVoiceChannelHasVideo: null != n && j.Z.hasVideo(n),
            };
        }, [e, C]),
        A = f.default.getId();
    return (0, i.cj)([y.Z, g.Z, o.ZP, d.Z, h.Z, b.Z], () => {
        var t, n, r;
        let i = y.Z.getVoiceChannelId(),
            l = (null == (t = g.Z.getChannel(i)) ? void 0 : t.guild_id) === e,
            c = !1,
            f = !1,
            m = !1,
            O = !1,
            _ = !1,
            j = !1;
        if (!l && C)
            return {
                audio: c,
                video: O,
                screenshare: _,
                liveStage: m,
                activeEvent: f,
                activity: j,
                isCurrentUserConnected: !1,
            };
        let x = v.default.keys(d.Z.getStageInstancesByGuild(e)).some((e) => {
                let t = g.Z.getChannel(e);
                return null != t && b.Z.can(u.gl, t);
            }),
            E = l && null != (r = null == (n = g.Z.getChannel(i)) ? void 0 : n.isGuildStageVoice()) && r,
            I = !!l && null != h.Z.getActiveStreamForUser(A, e),
            R = (0, s.aK)(h.Z.getAllApplicationStreams()).some((t) => t.guildId === e),
            D = l && T,
            M = (() => {
                if (N) return P.length > 0;
                for (let e of P) {
                    let t = g.Z.getChannel((0, a.p)(e.location));
                    if (null != t && (0, p.vd)(t.type)) return !0;
                }
                return !1;
            })(),
            L = o.ZP.getEmbeddedActivitiesForGuild(e).length > 0;
        return (
            l
                ? ((c = !0), (f = (null == S ? void 0 : S.channel_id) === i), (m = E), (O = D), (_ = I), (j = L))
                : ((c = w), (f = null != S), (m = x), (O = Z), (_ = R), (j = M)),
            {
                audio: c,
                video: O,
                screenshare: _,
                liveStage: m,
                activeEvent: f,
                activity: j,
                isCurrentUserConnected: l || E,
            }
        );
    }, [e, C, T, A, N, P, S, w, Z]);
}
