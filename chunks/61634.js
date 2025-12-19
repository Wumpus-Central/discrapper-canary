n.d(t, { Z: () => S }), n(388685);
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
    x = n(981631);
function E(e, t) {
    let n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : m.Z;
    return null != e && e.type !== r.d.GUILD_STAGE_VOICE && t !== e.id && n.canBasicChannel(x.S7T.VIEW_CHANNEL, e);
}
function S(e) {
    var t;
    let n = (0, i.e7)([v.ZP], () => v.ZP.isMuted(e)),
        r = (0, c.k5)(e),
        x = (0, i.Wu)([a.ZP, y.Z], () =>
            a.ZP.getEmbeddedActivitiesForGuild(e).filter(
                (e) => !(0, s.BA)([...e.userIds], y.Z.getBlockedOrIgnoredIDs()),
            ),
        ),
        S = (0, o.p)(null == (t = x[0]) ? void 0 : t.location),
        I = (0, l.NX)(S),
        {
            guildHasVoice: _,
            guildHasVideo: P,
            selectedVoiceChannelHasVideo: N,
        } = (0, i.cj)([O.Z, j.Z, b.Z, m.Z, g.Z], () => {
            var t;
            let r = O.Z.getVoiceChannelId(),
                i = null == (t = b.Z.getGuild(e)) ? void 0 : t.afkChannelId,
                l = j.Z.getUsersWithVideo(e),
                a = (0, s.DX)(j.Z.getVoiceStates(e));
            return {
                guildHasVoice: (() => {
                    if (n) return !1;
                    for (let e in a) if (E(g.Z.getBasicChannel(a[e].channelId), null != i ? i : void 0, m.Z)) return !0;
                    return !1;
                })(),
                guildHasVideo: (() => {
                    if (n) return !1;
                    for (let t of l) {
                        var e;
                        if (
                            E(
                                g.Z.getBasicChannel(null == (e = a[t]) ? void 0 : e.channelId),
                                null != i ? i : void 0,
                                m.Z,
                            )
                        )
                            return !0;
                    }
                    return !1;
                })(),
                selectedVoiceChannelHasVideo: null != r && j.Z.hasVideo(r),
            };
        }, [e, n]),
        Z = p.default.getId();
    return (0, i.cj)([O.Z, g.Z, a.ZP, d.Z, h.Z, m.Z], () => {
        var t, i, l;
        let c = O.Z.getVoiceChannelId(),
            p = (null == (t = g.Z.getChannel(c)) ? void 0 : t.guild_id) === e,
            b = !1,
            y = !1,
            v = !1,
            j = !1,
            E = !1,
            S = !1;
        if (!p && n)
            return {
                audio: b,
                video: j,
                screenshare: E,
                liveStage: v,
                activeEvent: y,
                activity: S,
                isCurrentUserConnected: !1,
            };
        let w = C.default.keys(d.Z.getStageInstancesByGuild(e)).some((e) => {
                let t = g.Z.getChannel(e);
                return null != t && m.Z.can(u.gl, t);
            }),
            T = p && null != (l = null == (i = g.Z.getChannel(c)) ? void 0 : i.isGuildStageVoice()) && l,
            A = !!p && null != h.Z.getActiveStreamForUser(Z, e),
            R = (0, s.aK)(h.Z.getAllApplicationStreams()).some((t) => t.guildId === e),
            D = p && N,
            M = (() => {
                if (I) return x.length > 0;
                for (let e of x) {
                    let t = g.Z.getChannel((0, o.p)(e.location));
                    if (null != t && (0, f.vd)(t.type)) return !0;
                }
                return !1;
            })(),
            L = a.ZP.getEmbeddedActivitiesForGuild(e).length > 0;
        return (
            p
                ? ((b = !0), (y = (null == r ? void 0 : r.channel_id) === c), (v = T), (j = D), (E = A), (S = L))
                : ((b = _), (y = null != r), (v = w), (j = P), (E = R), (S = M)),
            {
                audio: b,
                video: j,
                screenshare: E,
                liveStage: v,
                activeEvent: y,
                activity: S,
                isCurrentUserConnected: p || T,
            }
        );
    }, [e, n, N, Z, I, x, r, _, P]);
}
