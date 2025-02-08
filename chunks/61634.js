n.d(t, { Z: () => E }), n(47120);
var i = n(106351),
    l = n(442837),
    r = n(595519),
    a = n(317381),
    o = n(16609),
    s = n(470883),
    c = n(750881),
    d = n(554747),
    u = n(146085),
    h = n(427679),
    p = n(131704),
    g = n(199902),
    m = n(314897),
    f = n(592125),
    _ = n(430824),
    v = n(496675),
    C = n(699516),
    x = n(944486),
    Z = n(9156),
    I = n(979651),
    b = n(709054),
    S = n(981631);
function N(e, t) {
    let n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : v.Z;
    return null != e && e.type !== i.d.GUILD_STAGE_VOICE && t !== e.id && n.canBasicChannel(S.S7T.VIEW_CHANNEL, e);
}
function E(e) {
    var t;
    let n = (0, l.e7)([Z.ZP], () => Z.ZP.isMuted(e)),
        i = (0, d.k5)(e),
        { enabled: S } = (0, c.bA)('use-guild-media-state'),
        E = (0, l.Wu)([a.ZP, C.Z], () => {
            let t = a.ZP.getEmbeddedActivitiesForGuild(e);
            return S ? t.filter((e) => !(0, s.BA)([...e.userIds], C.Z.getBlockedOrIgnoredIDs())) : t;
        }),
        j = (0, o.p)(null === (t = E[0]) || void 0 === t ? void 0 : t.location),
        y = (0, r.NX)(j),
        {
            guildHasVoice: P,
            guildHasVideo: T,
            selectedVoiceChannelHasVideo: A
        } = (0, l.cj)(
            [x.Z, I.Z, _.Z, v.Z, f.Z],
            () => {
                var t;
                let i = x.Z.getVoiceChannelId(),
                    l = null === (t = _.Z.getGuild(e)) || void 0 === t ? void 0 : t.afkChannelId,
                    r = I.Z.getUsersWithVideo(e),
                    a = S ? (0, s.DX)(I.Z.getVoiceStates(e)) : I.Z.getVoiceStates(e);
                return {
                    guildHasVoice: (() => {
                        if (n) return !1;
                        for (let e in a) if (N(f.Z.getBasicChannel(a[e].channelId), null != l ? l : void 0, v.Z)) return !0;
                        return !1;
                    })(),
                    guildHasVideo: (() => {
                        if (n) return !1;
                        for (let t of r) {
                            var e;
                            if (N(f.Z.getBasicChannel(null === (e = a[t]) || void 0 === e ? void 0 : e.channelId), null != l ? l : void 0, v.Z)) return !0;
                        }
                        return !1;
                    })(),
                    selectedVoiceChannelHasVideo: null != i && I.Z.hasVideo(i)
                };
            },
            [S, e, n]
        ),
        w = m.default.getId();
    return (0, l.cj)(
        [x.Z, f.Z, a.ZP, h.Z, g.Z, v.Z],
        () => {
            var t, l, r;
            let c = x.Z.getVoiceChannelId(),
                d = (null === (t = f.Z.getChannel(c)) || void 0 === t ? void 0 : t.guild_id) === e,
                m = !1,
                _ = !1,
                C = !1,
                Z = !1,
                I = !1,
                N = !1;
            if (!d && n)
                return {
                    audio: m,
                    video: Z,
                    screenshare: I,
                    liveStage: C,
                    activeEvent: _,
                    activity: N,
                    isCurrentUserConnected: !1
                };
            let j = b.default.keys(h.Z.getStageInstancesByGuild(e)).some((e) => {
                    let t = f.Z.getChannel(e);
                    return null != t && v.Z.can(u.gl, t);
                }),
                R = d && null !== (r = null === (l = f.Z.getChannel(c)) || void 0 === l ? void 0 : l.isGuildStageVoice()) && void 0 !== r && r,
                L = !!d && null != g.Z.getActiveStreamForUser(w, e),
                M = (S ? (0, s.aK)(g.Z.getAllApplicationStreams()) : g.Z.getAllApplicationStreams()).some((t) => t.guildId === e),
                D = d && A,
                G = (() => {
                    if (y) return E.length > 0;
                    for (let e of E) {
                        let t = f.Z.getChannel((0, o.p)(e.location));
                        if (null != t && (0, p.vd)(t.type)) return !0;
                    }
                    return !1;
                })(),
                k = a.ZP.getEmbeddedActivitiesForGuild(e).length > 0;
            return (
                d ? ((m = !0), (_ = (null == i ? void 0 : i.channel_id) === c), (C = R), (Z = D), (I = L), (N = k)) : ((m = P), (_ = null != i), (C = j), (Z = T), (I = M), (N = G)),
                {
                    audio: m,
                    video: Z,
                    screenshare: I,
                    liveStage: C,
                    activeEvent: _,
                    activity: N,
                    isCurrentUserConnected: d || R
                }
            );
        },
        [e, n, S, A, w, y, E, i, P, T]
    );
}
