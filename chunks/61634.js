n.d(t, { Z: () => E }), n(47120);
var i = n(106351),
    l = n(442837),
    r = n(595519),
    o = n(317381),
    a = n(16609),
    s = n(470883),
    c = n(750881),
    d = n(554747),
    u = n(146085),
    h = n(427679),
    p = n(131704),
    m = n(199902),
    g = n(314897),
    f = n(592125),
    _ = n(430824),
    v = n(496675),
    C = n(699516),
    x = n(944486),
    I = n(9156),
    Z = n(979651),
    b = n(709054),
    S = n(981631);
function N(e, t) {
    let n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : v.Z;
    return null != e && e.type !== i.d.GUILD_STAGE_VOICE && t !== e.id && n.canBasicChannel(S.S7T.VIEW_CHANNEL, e);
}
function E(e) {
    var t;
    let n = (0, l.e7)([I.ZP], () => I.ZP.isMuted(e)),
        i = (0, d.k5)(e),
        { enabled: S } = (0, c.bA)('use-guild-media-state'),
        E = (0, l.Wu)([o.ZP, C.Z], () => {
            let t = o.ZP.getEmbeddedActivitiesForGuild(e);
            return S ? t.filter((e) => !(0, s.BA)([...e.userIds], C.Z.getBlockedOrIgnoredIDs())) : t;
        }),
        j = (0, a.pY)(null === (t = E[0]) || void 0 === t ? void 0 : t.location),
        y = (0, r.NX)(j),
        {
            guildHasVoice: T,
            guildHasVideo: A,
            selectedVoiceChannelHasVideo: P
        } = (0, l.cj)(
            [x.Z, Z.Z, _.Z, v.Z, f.Z],
            () => {
                var t;
                let i = x.Z.getVoiceChannelId(),
                    l = null === (t = _.Z.getGuild(e)) || void 0 === t ? void 0 : t.afkChannelId,
                    r = Z.Z.getUsersWithVideo(e),
                    o = S ? (0, s.DX)(Z.Z.getVoiceStates(e)) : Z.Z.getVoiceStates(e);
                return {
                    guildHasVoice: (() => {
                        if (n) return !1;
                        for (let e in o) if (N(f.Z.getBasicChannel(o[e].channelId), null != l ? l : void 0, v.Z)) return !0;
                        return !1;
                    })(),
                    guildHasVideo: (() => {
                        if (n) return !1;
                        for (let t of r) {
                            var e;
                            if (N(f.Z.getBasicChannel(null === (e = o[t]) || void 0 === e ? void 0 : e.channelId), null != l ? l : void 0, v.Z)) return !0;
                        }
                        return !1;
                    })(),
                    selectedVoiceChannelHasVideo: null != i && Z.Z.hasVideo(i)
                };
            },
            [S, e, n]
        ),
        R = g.default.getId();
    return (0, l.cj)(
        [x.Z, f.Z, o.ZP, h.Z, m.Z, v.Z],
        () => {
            var t, l, r;
            let c = x.Z.getVoiceChannelId(),
                d = (null === (t = f.Z.getChannel(c)) || void 0 === t ? void 0 : t.guild_id) === e,
                g = !1,
                _ = !1,
                C = !1,
                I = !1,
                Z = !1,
                N = !1;
            if (!d && n)
                return {
                    audio: g,
                    video: I,
                    screenshare: Z,
                    liveStage: C,
                    activeEvent: _,
                    activity: N,
                    isCurrentUserConnected: !1
                };
            let j = b.default.keys(h.Z.getStageInstancesByGuild(e)).some((e) => {
                    let t = f.Z.getChannel(e);
                    return null != t && v.Z.can(u.gl, t);
                }),
                w = d && null !== (r = null === (l = f.Z.getChannel(c)) || void 0 === l ? void 0 : l.isGuildStageVoice()) && void 0 !== r && r,
                L = !!d && null != m.Z.getActiveStreamForUser(R, e),
                M = (S ? (0, s.aK)(m.Z.getAllApplicationStreams()) : m.Z.getAllApplicationStreams()).some((t) => t.guildId === e),
                D = d && P,
                G = (() => {
                    if (y) return E.length > 0;
                    for (let e of E) {
                        let t = f.Z.getChannel((0, a.pY)(e.location));
                        if (null != t && (0, p.vd)(t.type)) return !0;
                    }
                    return !1;
                })(),
                k = o.ZP.getEmbeddedActivitiesForGuild(e).length > 0;
            return (
                d ? ((g = !0), (_ = (null == i ? void 0 : i.channel_id) === c), (C = w), (I = D), (Z = L), (N = k)) : ((g = T), (_ = null != i), (C = j), (I = A), (Z = M), (N = G)),
                {
                    audio: g,
                    video: I,
                    screenshare: Z,
                    liveStage: C,
                    activeEvent: _,
                    activity: N,
                    isCurrentUserConnected: d || w
                }
            );
        },
        [e, n, S, P, R, y, E, i, T, A]
    );
}
