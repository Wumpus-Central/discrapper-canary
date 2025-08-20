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
    f = n(199902),
    h = n(314897),
    g = n(592125),
    m = n(430824),
    b = n(496675),
    O = n(699516),
    _ = n(944486),
    y = n(9156),
    j = n(979651),
    v = n(709054),
    C = n(209114),
    x = n(981631);
function E(e, t) {
    let n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : b.Z;
    return null != e && e.type !== r.d.GUILD_STAGE_VOICE && t !== e.id && n.canBasicChannel(x.S7T.VIEW_CHANNEL, e);
}
function S(e) {
    var t;
    let n = (0, i.e7)([y.ZP], () => y.ZP.isMuted(e)),
        r = C.Z.useConfig({ location: "useGuildMediaState" }).enabled,
        x = n && !r,
        S = (0, c.k5)(e),
        I = (0, i.Wu)([o.ZP, O.Z], () =>
            o.ZP.getEmbeddedActivitiesForGuild(e).filter(
                (e) => !(0, s.BA)([...e.userIds], O.Z.getBlockedOrIgnoredIDs()),
            ),
        ),
        P = (0, a.p)(null == (t = I[0]) ? void 0 : t.location),
        N = (0, l.NX)(P),
        {
            guildHasVoice: w,
            guildHasVideo: Z,
            selectedVoiceChannelHasVideo: T,
        } = (0, i.cj)([_.Z, j.Z, m.Z, b.Z, g.Z], () => {
            var t;
            let n = _.Z.getVoiceChannelId(),
                r = null == (t = m.Z.getGuild(e)) ? void 0 : t.afkChannelId,
                i = j.Z.getUsersWithVideo(e),
                l = (0, s.DX)(j.Z.getVoiceStates(e));
            return {
                guildHasVoice: (() => {
                    if (x) return !1;
                    for (let e in l) if (E(g.Z.getBasicChannel(l[e].channelId), null != r ? r : void 0, b.Z)) return !0;
                    return !1;
                })(),
                guildHasVideo: (() => {
                    if (x) return !1;
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
        }, [e, x]),
        A = h.default.getId();
    return (0, i.cj)([_.Z, g.Z, o.ZP, d.Z, f.Z, b.Z], () => {
        var t, n, r;
        let i = _.Z.getVoiceChannelId(),
            l = (null == (t = g.Z.getChannel(i)) ? void 0 : t.guild_id) === e,
            c = !1,
            h = !1,
            m = !1,
            O = !1,
            y = !1,
            j = !1;
        if (!l && x)
            return {
                audio: c,
                video: O,
                screenshare: y,
                liveStage: m,
                activeEvent: h,
                activity: j,
                isCurrentUserConnected: !1,
            };
        let C = v.default.keys(d.Z.getStageInstancesByGuild(e)).some((e) => {
                let t = g.Z.getChannel(e);
                return null != t && b.Z.can(u.gl, t);
            }),
            E = l && null != (r = null == (n = g.Z.getChannel(i)) ? void 0 : n.isGuildStageVoice()) && r,
            P = !!l && null != f.Z.getActiveStreamForUser(A, e),
            R = (0, s.aK)(f.Z.getAllApplicationStreams()).some((t) => t.guildId === e),
            D = l && T,
            M = (() => {
                if (N) return I.length > 0;
                for (let e of I) {
                    let t = g.Z.getChannel((0, a.p)(e.location));
                    if (null != t && (0, p.vd)(t.type)) return !0;
                }
                return !1;
            })(),
            L = o.ZP.getEmbeddedActivitiesForGuild(e).length > 0;
        return (
            l
                ? ((c = !0), (h = (null == S ? void 0 : S.channel_id) === i), (m = E), (O = D), (y = P), (j = L))
                : ((c = w), (h = null != S), (m = C), (O = Z), (y = R), (j = M)),
            {
                audio: c,
                video: O,
                screenshare: y,
                liveStage: m,
                activeEvent: h,
                activity: j,
                isCurrentUserConnected: l || E,
            }
        );
    }, [e, x, T, A, N, I, S, w, Z]);
}
