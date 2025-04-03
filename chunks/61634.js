n.d(t, { Z: () => P }), n(47120);
var r = n(106351),
    i = n(442837),
    l = n(595519),
    o = n(317381),
    a = n(16609),
    s = n(470883),
    c = n(750881),
    u = n(554747),
    d = n(146085),
    p = n(427679),
    h = n(131704),
    f = n(199902),
    g = n(314897),
    m = n(592125),
    b = n(430824),
    y = n(496675),
    _ = n(699516),
    v = n(944486),
    O = n(9156),
    j = n(979651),
    x = n(709054),
    C = n(981631);
function S(e, t) {
    let n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : y.Z;
    return null != e && e.type !== r.d.GUILD_STAGE_VOICE && t !== e.id && n.canBasicChannel(C.S7T.VIEW_CHANNEL, e);
}
function P(e) {
    var t;
    let n = (0, i.e7)([O.ZP], () => O.ZP.isMuted(e)),
        r = (0, u.k5)(e),
        { enabled: C } = (0, c.bA)('use-guild-media-state'),
        P = (0, i.Wu)([o.ZP, _.Z], () => {
            let t = o.ZP.getEmbeddedActivitiesForGuild(e);
            return C ? t.filter((e) => !(0, s.BA)([...e.userIds], _.Z.getBlockedOrIgnoredIDs())) : t;
        }),
        I = (0, a.pY)(null == (t = P[0]) ? void 0 : t.location),
        N = (0, l.NX)(I),
        {
            guildHasVoice: Z,
            guildHasVideo: w,
            selectedVoiceChannelHasVideo: E
        } = (0, i.cj)(
            [v.Z, j.Z, b.Z, y.Z, m.Z],
            () => {
                var t;
                let r = v.Z.getVoiceChannelId(),
                    i = null == (t = b.Z.getGuild(e)) ? void 0 : t.afkChannelId,
                    l = j.Z.getUsersWithVideo(e),
                    o = C ? (0, s.DX)(j.Z.getVoiceStates(e)) : j.Z.getVoiceStates(e);
                return {
                    guildHasVoice: (() => {
                        if (n) return !1;
                        for (let e in o) if (S(m.Z.getBasicChannel(o[e].channelId), null != i ? i : void 0, y.Z)) return !0;
                        return !1;
                    })(),
                    guildHasVideo: (() => {
                        if (n) return !1;
                        for (let t of l) {
                            var e;
                            if (S(m.Z.getBasicChannel(null == (e = o[t]) ? void 0 : e.channelId), null != i ? i : void 0, y.Z)) return !0;
                        }
                        return !1;
                    })(),
                    selectedVoiceChannelHasVideo: null != r && j.Z.hasVideo(r)
                };
            },
            [C, e, n]
        ),
        T = g.default.getId();
    return (0, i.cj)(
        [v.Z, m.Z, o.ZP, p.Z, f.Z, y.Z],
        () => {
            var t, i, l;
            let c = v.Z.getVoiceChannelId(),
                u = (null == (t = m.Z.getChannel(c)) ? void 0 : t.guild_id) === e,
                g = !1,
                b = !1,
                _ = !1,
                O = !1,
                j = !1,
                S = !1;
            if (!u && n)
                return {
                    audio: g,
                    video: O,
                    screenshare: j,
                    liveStage: _,
                    activeEvent: b,
                    activity: S,
                    isCurrentUserConnected: !1
                };
            let I = x.default.keys(p.Z.getStageInstancesByGuild(e)).some((e) => {
                    let t = m.Z.getChannel(e);
                    return null != t && y.Z.can(d.gl, t);
                }),
                A = u && null != (l = null == (i = m.Z.getChannel(c)) ? void 0 : i.isGuildStageVoice()) && l,
                D = !!u && null != f.Z.getActiveStreamForUser(T, e),
                R = (C ? (0, s.aK)(f.Z.getAllApplicationStreams()) : f.Z.getAllApplicationStreams()).some((t) => t.guildId === e),
                L = u && E,
                k = (() => {
                    if (N) return P.length > 0;
                    for (let e of P) {
                        let t = m.Z.getChannel((0, a.pY)(e.location));
                        if (null != t && (0, h.vd)(t.type)) return !0;
                    }
                    return !1;
                })(),
                M = o.ZP.getEmbeddedActivitiesForGuild(e).length > 0;
            return (
                u ? ((g = !0), (b = (null == r ? void 0 : r.channel_id) === c), (_ = A), (O = L), (j = D), (S = M)) : ((g = Z), (b = null != r), (_ = I), (O = w), (j = R), (S = k)),
                {
                    audio: g,
                    video: O,
                    screenshare: j,
                    liveStage: _,
                    activeEvent: b,
                    activity: S,
                    isCurrentUserConnected: u || A
                }
            );
        },
        [e, n, C, E, T, N, P, r, Z, w]
    );
}
