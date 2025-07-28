(n.d(t, { Z: () => S }), n(388685));
var r = n(106351),
    i = n(442837),
    l = n(595519),
    o = n(317381),
    a = n(16609),
    s = n(470883),
    c = n(554747),
    u = n(146085),
    d = n(427679),
    h = n(131704),
    p = n(199902),
    f = n(314897),
    g = n(592125),
    m = n(430824),
    b = n(496675),
    _ = n(699516),
    O = n(944486),
    y = n(9156),
    C = n(979651),
    v = n(709054),
    j = n(981631);
function E(e, t) {
    let n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : b.Z;
    return null != e && e.type !== r.d.GUILD_STAGE_VOICE && t !== e.id && n.canBasicChannel(j.S7T.VIEW_CHANNEL, e);
}
function S(e) {
    var t;
    let n = (0, i.e7)([y.ZP], () => y.ZP.isMuted(e)),
        r = (0, c.k5)(e),
        j = (0, i.Wu)([o.ZP, _.Z], () => o.ZP.getEmbeddedActivitiesForGuild(e).filter((e) => !(0, s.BA)([...e.userIds], _.Z.getBlockedOrIgnoredIDs()))),
        S = (0, a.p)(null == (t = j[0]) ? void 0 : t.location),
        x = (0, l.NX)(S),
        {
            guildHasVoice: I,
            guildHasVideo: P,
            selectedVoiceChannelHasVideo: N
        } = (0, i.cj)(
            [O.Z, C.Z, m.Z, b.Z, g.Z],
            () => {
                var t;
                let r = O.Z.getVoiceChannelId(),
                    i = null == (t = m.Z.getGuild(e)) ? void 0 : t.afkChannelId,
                    l = C.Z.getUsersWithVideo(e),
                    o = (0, s.DX)(C.Z.getVoiceStates(e));
                return {
                    guildHasVoice: (() => {
                        if (n) return !1;
                        for (let e in o) if (E(g.Z.getBasicChannel(o[e].channelId), null != i ? i : void 0, b.Z)) return !0;
                        return !1;
                    })(),
                    guildHasVideo: (() => {
                        if (n) return !1;
                        for (let t of l) {
                            var e;
                            if (E(g.Z.getBasicChannel(null == (e = o[t]) ? void 0 : e.channelId), null != i ? i : void 0, b.Z)) return !0;
                        }
                        return !1;
                    })(),
                    selectedVoiceChannelHasVideo: null != r && C.Z.hasVideo(r)
                };
            },
            [e, n]
        ),
        w = f.default.getId();
    return (0, i.cj)(
        [O.Z, g.Z, o.ZP, d.Z, p.Z, b.Z],
        () => {
            var t, i, l;
            let c = O.Z.getVoiceChannelId(),
                f = (null == (t = g.Z.getChannel(c)) ? void 0 : t.guild_id) === e,
                m = !1,
                _ = !1,
                y = !1,
                C = !1,
                E = !1,
                S = !1;
            if (!f && n)
                return {
                    audio: m,
                    video: C,
                    screenshare: E,
                    liveStage: y,
                    activeEvent: _,
                    activity: S,
                    isCurrentUserConnected: !1
                };
            let Z = v.default.keys(d.Z.getStageInstancesByGuild(e)).some((e) => {
                    let t = g.Z.getChannel(e);
                    return null != t && b.Z.can(u.gl, t);
                }),
                T = f && null != (l = null == (i = g.Z.getChannel(c)) ? void 0 : i.isGuildStageVoice()) && l,
                A = !!f && null != p.Z.getActiveStreamForUser(w, e),
                R = (0, s.aK)(p.Z.getAllApplicationStreams()).some((t) => t.guildId === e),
                D = f && N,
                L = (() => {
                    if (x) return j.length > 0;
                    for (let e of j) {
                        let t = g.Z.getChannel((0, a.p)(e.location));
                        if (null != t && (0, h.vd)(t.type)) return !0;
                    }
                    return !1;
                })(),
                M = o.ZP.getEmbeddedActivitiesForGuild(e).length > 0;
            return (
                f ? ((m = !0), (_ = (null == r ? void 0 : r.channel_id) === c), (y = T), (C = D), (E = A), (S = M)) : ((m = I), (_ = null != r), (y = Z), (C = P), (E = R), (S = L)),
                {
                    audio: m,
                    video: C,
                    screenshare: E,
                    liveStage: y,
                    activeEvent: _,
                    activity: S,
                    isCurrentUserConnected: f || T
                }
            );
        },
        [e, n, N, w, x, j, r, I, P]
    );
}
