n.d(t, {
    Z: function () {
        return E;
    }
}),
    n(47120);
var i = n(106351),
    l = n(442837),
    r = n(595519),
    a = n(317381),
    o = n(16609),
    s = n(470883),
    c = n(750881),
    u = n(554747),
    d = n(146085),
    h = n(427679),
    p = n(131704),
    f = n(199902),
    m = n(314897),
    g = n(592125),
    v = n(430824),
    C = n(496675),
    x = n(699516),
    I = n(944486),
    _ = n(9156),
    Z = n(979651),
    b = n(709054),
    S = n(981631);
function N(e, t) {
    let n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : C.Z;
    return null != e && e.type !== i.d.GUILD_STAGE_VOICE && t !== e.id && n.canBasicChannel(S.S7T.VIEW_CHANNEL, e);
}
function E(e) {
    var t;
    let n = (0, l.e7)([_.ZP], () => _.ZP.isMuted(e)),
        i = (0, u.k5)(e),
        { enabled: S } = (0, c.bA)('use-guild-media-state'),
        E = (0, l.Wu)([a.ZP, x.Z], () => {
            let t = a.ZP.getEmbeddedActivitiesForGuild(e);
            return S ? t.filter((e) => !(0, s.BA)([...e.userIds], x.Z.getBlockedOrIgnoredIDs())) : t;
        }),
        y = (0, o.p)(null === (t = E[0]) || void 0 === t ? void 0 : t.location),
        j = (0, r.NX)(y),
        {
            guildHasVoice: T,
            guildHasVideo: P,
            selectedVoiceChannelHasVideo: A
        } = (0, l.cj)(
            [I.Z, Z.Z, v.Z, C.Z, g.Z],
            () => {
                var t;
                let i = I.Z.getVoiceChannelId(),
                    l = null === (t = v.Z.getGuild(e)) || void 0 === t ? void 0 : t.afkChannelId,
                    r = Z.Z.getUsersWithVideo(e),
                    a = S ? (0, s.DX)(Z.Z.getVoiceStates(e)) : Z.Z.getVoiceStates(e),
                    o = (() => {
                        if (n) return !1;
                        for (let e in a) if (N(g.Z.getBasicChannel(a[e].channelId), null != l ? l : void 0, C.Z)) return !0;
                        return !1;
                    })();
                return {
                    guildHasVoice: o,
                    guildHasVideo: (() => {
                        if (n) return !1;
                        for (let t of r) {
                            var e;
                            if (N(g.Z.getBasicChannel(null === (e = a[t]) || void 0 === e ? void 0 : e.channelId), null != l ? l : void 0, C.Z)) return !0;
                        }
                        return !1;
                    })(),
                    selectedVoiceChannelHasVideo: null != i && Z.Z.hasVideo(i)
                };
            },
            [S, e, n]
        ),
        w = m.default.getId();
    return (0, l.cj)(
        [I.Z, g.Z, a.ZP, h.Z, f.Z, C.Z],
        () => {
            var t, l, r;
            let c = I.Z.getVoiceChannelId(),
                u = (null === (t = g.Z.getChannel(c)) || void 0 === t ? void 0 : t.guild_id) === e,
                m = !1,
                v = !1,
                x = !1,
                _ = !1,
                Z = !1,
                N = !1;
            if (!u && n)
                return {
                    audio: m,
                    video: _,
                    screenshare: Z,
                    liveStage: x,
                    activeEvent: v,
                    activity: N,
                    isCurrentUserConnected: !1
                };
            let y = b.default.keys(h.Z.getStageInstancesByGuild(e)).some((e) => {
                    let t = g.Z.getChannel(e);
                    return null != t && C.Z.can(d.gl, t);
                }),
                M = u && null !== (r = null === (l = g.Z.getChannel(c)) || void 0 === l ? void 0 : l.isGuildStageVoice()) && void 0 !== r && r,
                L = !!u && null != f.Z.getActiveStreamForUser(w, e),
                R = (S ? (0, s.aK)(f.Z.getAllApplicationStreams()) : f.Z.getAllApplicationStreams()).some((t) => t.guildId === e),
                D = u && A,
                G = (() => {
                    if (j) return E.length > 0;
                    for (let e of E) {
                        let t = g.Z.getChannel((0, o.p)(e.location));
                        if (null != t && (0, p.vd)(t.type)) return !0;
                    }
                    return !1;
                })(),
                B = a.ZP.getEmbeddedActivitiesForGuild(e).length > 0;
            return (
                u ? ((m = !0), (v = (null == i ? void 0 : i.channel_id) === c), (x = M), (_ = D), (Z = L), (N = B)) : ((m = T), (v = null != i), (x = y), (_ = P), (Z = R), (N = G)),
                {
                    audio: m,
                    video: _,
                    screenshare: Z,
                    liveStage: x,
                    activeEvent: v,
                    activity: N,
                    isCurrentUserConnected: u || M
                }
            );
        },
        [e, n, S, A, w, j, E, i, T, P]
    );
}
