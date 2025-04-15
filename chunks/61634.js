n.d(t, { Z: () => x }), n(388685);
var r = n(106351),
    i = n(442837),
    l = n(595519),
    o = n(317381),
    s = n(16609),
    a = n(470883),
    c = n(750881),
    u = n(554747),
    d = n(146085),
    h = n(427679),
    p = n(131704),
    f = n(199902),
    g = n(314897),
    m = n(592125),
    b = n(430824),
    _ = n(496675),
    y = n(699516),
    v = n(944486),
    O = n(9156),
    C = n(979651),
    S = n(709054),
    j = n(981631);
function E(e, t) {
    let n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : _.Z;
    return null != e && e.type !== r.d.GUILD_STAGE_VOICE && t !== e.id && n.canBasicChannel(j.S7T.VIEW_CHANNEL, e);
}
function x(e) {
    var t;
    let n = (0, i.e7)([O.ZP], () => O.ZP.isMuted(e)),
        r = (0, u.k5)(e),
        { enabled: j } = (0, c.bA)('use-guild-media-state'),
        x = (0, i.Wu)([o.ZP, y.Z], () => {
            let t = o.ZP.getEmbeddedActivitiesForGuild(e);
            return j ? t.filter((e) => !(0, a.BA)([...e.userIds], y.Z.getBlockedOrIgnoredIDs())) : t;
        }),
        N = (0, s.pY)(null == (t = x[0]) ? void 0 : t.location),
        I = (0, l.NX)(N),
        {
            guildHasVoice: P,
            guildHasVideo: w,
            selectedVoiceChannelHasVideo: Z
        } = (0, i.cj)(
            [v.Z, C.Z, b.Z, _.Z, m.Z],
            () => {
                var t;
                let r = v.Z.getVoiceChannelId(),
                    i = null == (t = b.Z.getGuild(e)) ? void 0 : t.afkChannelId,
                    l = C.Z.getUsersWithVideo(e),
                    o = j ? (0, a.DX)(C.Z.getVoiceStates(e)) : C.Z.getVoiceStates(e);
                return {
                    guildHasVoice: (() => {
                        if (n) return !1;
                        for (let e in o) if (E(m.Z.getBasicChannel(o[e].channelId), null != i ? i : void 0, _.Z)) return !0;
                        return !1;
                    })(),
                    guildHasVideo: (() => {
                        if (n) return !1;
                        for (let t of l) {
                            var e;
                            if (E(m.Z.getBasicChannel(null == (e = o[t]) ? void 0 : e.channelId), null != i ? i : void 0, _.Z)) return !0;
                        }
                        return !1;
                    })(),
                    selectedVoiceChannelHasVideo: null != r && C.Z.hasVideo(r)
                };
            },
            [j, e, n]
        ),
        T = g.default.getId();
    return (0, i.cj)(
        [v.Z, m.Z, o.ZP, h.Z, f.Z, _.Z],
        () => {
            var t, i, l;
            let c = v.Z.getVoiceChannelId(),
                u = (null == (t = m.Z.getChannel(c)) ? void 0 : t.guild_id) === e,
                g = !1,
                b = !1,
                y = !1,
                O = !1,
                C = !1,
                E = !1;
            if (!u && n)
                return {
                    audio: g,
                    video: O,
                    screenshare: C,
                    liveStage: y,
                    activeEvent: b,
                    activity: E,
                    isCurrentUserConnected: !1
                };
            let N = S.default.keys(h.Z.getStageInstancesByGuild(e)).some((e) => {
                    let t = m.Z.getChannel(e);
                    return null != t && _.Z.can(d.gl, t);
                }),
                A = u && null != (l = null == (i = m.Z.getChannel(c)) ? void 0 : i.isGuildStageVoice()) && l,
                R = !!u && null != f.Z.getActiveStreamForUser(T, e),
                D = (j ? (0, a.aK)(f.Z.getAllApplicationStreams()) : f.Z.getAllApplicationStreams()).some((t) => t.guildId === e),
                L = u && Z,
                k = (() => {
                    if (I) return x.length > 0;
                    for (let e of x) {
                        let t = m.Z.getChannel((0, s.pY)(e.location));
                        if (null != t && (0, p.vd)(t.type)) return !0;
                    }
                    return !1;
                })(),
                M = o.ZP.getEmbeddedActivitiesForGuild(e).length > 0;
            return (
                u ? ((g = !0), (b = (null == r ? void 0 : r.channel_id) === c), (y = A), (O = L), (C = R), (E = M)) : ((g = P), (b = null != r), (y = N), (O = w), (C = D), (E = k)),
                {
                    audio: g,
                    video: O,
                    screenshare: C,
                    liveStage: y,
                    activeEvent: b,
                    activity: E,
                    isCurrentUserConnected: u || A
                }
            );
        },
        [e, n, j, Z, T, I, x, r, P, w]
    );
}
