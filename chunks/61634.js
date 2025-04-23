n.d(t, { Z: () => S }), n(388685);
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
    y = n(699516),
    _ = n(944486),
    O = n(9156),
    v = n(979651),
    C = n(709054),
    j = n(981631);
function x(e, t) {
    let n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : b.Z;
    return null != e && e.type !== r.d.GUILD_STAGE_VOICE && t !== e.id && n.canBasicChannel(j.S7T.VIEW_CHANNEL, e);
}
function S(e) {
    var t;
    let n = (0, i.e7)([O.ZP], () => O.ZP.isMuted(e)),
        r = (0, c.k5)(e),
        j = (0, i.Wu)([o.ZP, y.Z], () => o.ZP.getEmbeddedActivitiesForGuild(e).filter((e) => !(0, a.BA)([...e.userIds], y.Z.getBlockedOrIgnoredIDs()))),
        S = (0, s.pY)(null == (t = j[0]) ? void 0 : t.location),
        E = (0, l.NX)(S),
        {
            guildHasVoice: P,
            guildHasVideo: I,
            selectedVoiceChannelHasVideo: w
        } = (0, i.cj)(
            [_.Z, v.Z, m.Z, b.Z, g.Z],
            () => {
                var t;
                let r = _.Z.getVoiceChannelId(),
                    i = null == (t = m.Z.getGuild(e)) ? void 0 : t.afkChannelId,
                    l = v.Z.getUsersWithVideo(e),
                    o = (0, a.DX)(v.Z.getVoiceStates(e));
                return {
                    guildHasVoice: (() => {
                        if (n) return !1;
                        for (let e in o) if (x(g.Z.getBasicChannel(o[e].channelId), null != i ? i : void 0, b.Z)) return !0;
                        return !1;
                    })(),
                    guildHasVideo: (() => {
                        if (n) return !1;
                        for (let t of l) {
                            var e;
                            if (x(g.Z.getBasicChannel(null == (e = o[t]) ? void 0 : e.channelId), null != i ? i : void 0, b.Z)) return !0;
                        }
                        return !1;
                    })(),
                    selectedVoiceChannelHasVideo: null != r && v.Z.hasVideo(r)
                };
            },
            [e, n]
        ),
        N = f.default.getId();
    return (0, i.cj)(
        [_.Z, g.Z, o.ZP, d.Z, p.Z, b.Z],
        () => {
            var t, i, l;
            let c = _.Z.getVoiceChannelId(),
                f = (null == (t = g.Z.getChannel(c)) ? void 0 : t.guild_id) === e,
                m = !1,
                y = !1,
                O = !1,
                v = !1,
                x = !1,
                S = !1;
            if (!f && n)
                return {
                    audio: m,
                    video: v,
                    screenshare: x,
                    liveStage: O,
                    activeEvent: y,
                    activity: S,
                    isCurrentUserConnected: !1
                };
            let Z = C.default.keys(d.Z.getStageInstancesByGuild(e)).some((e) => {
                    let t = g.Z.getChannel(e);
                    return null != t && b.Z.can(u.gl, t);
                }),
                T = f && null != (l = null == (i = g.Z.getChannel(c)) ? void 0 : i.isGuildStageVoice()) && l,
                A = !!f && null != p.Z.getActiveStreamForUser(N, e),
                R = (0, a.aK)(p.Z.getAllApplicationStreams()).some((t) => t.guildId === e),
                D = f && w,
                L = (() => {
                    if (E) return j.length > 0;
                    for (let e of j) {
                        let t = g.Z.getChannel((0, s.pY)(e.location));
                        if (null != t && (0, h.vd)(t.type)) return !0;
                    }
                    return !1;
                })(),
                k = o.ZP.getEmbeddedActivitiesForGuild(e).length > 0;
            return (
                f ? ((m = !0), (y = (null == r ? void 0 : r.channel_id) === c), (O = T), (v = D), (x = A), (S = k)) : ((m = P), (y = null != r), (O = Z), (v = I), (x = R), (S = L)),
                {
                    audio: m,
                    video: v,
                    screenshare: x,
                    liveStage: O,
                    activeEvent: y,
                    activity: S,
                    isCurrentUserConnected: f || T
                }
            );
        },
        [e, n, w, N, E, j, r, P, I]
    );
}
