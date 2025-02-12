n.d(t, {
    Q: () => k,
    Z: () => w
});
var i = n(200651),
    l = n(192379),
    a = n(512722),
    r = n.n(a),
    s = n(990547),
    o = n(442837),
    c = n(481060),
    d = n(475179),
    u = n(239091),
    h = n(872810),
    p = n(40851),
    m = n(213609),
    f = n(358221),
    g = n(682901),
    _ = n(258609),
    C = n(569545),
    x = n(102172),
    v = n(352978),
    E = n(648384),
    I = n(184301),
    b = n(347475),
    Z = n(199902),
    N = n(314897),
    T = n(430824),
    S = n(496675),
    j = n(979651),
    y = n(88751),
    A = n(252132),
    P = n(248400),
    R = n(981631),
    M = n(354459),
    L = n(143783);
let k = 16 / 9,
    O = (e) => {
        let { stageParticipant: t, rtcParticipant: n, channel: a, guildId: r, user: s, width: o, isModerator: d, onContextMenu: u, inPopout: h } = e,
            { reducedMotion: p } = l.useContext(c.Sfi),
            { blocked: m, ignored: f, id: g } = t;
        return (0, i.jsx)(c.yRy, {
            preload:
                null == n
                    ? void 0
                    : () =>
                          (0, I.Z)(n.user, {
                              guildId: a.guild_id,
                              channelId: a.id
                          }),
            renderPopout: (e) =>
                (0, i.jsx)(b.Z, {
                    ...e,
                    guildId: r,
                    channelId: a.id,
                    userId: s.id
                }),
            position: 'right',
            spacing: 8,
            children: (e) =>
                (0, i.jsx)(c.P3F, {
                    onContextMenu: (e) => u(n, e),
                    ...e,
                    children: (0, i.jsx)(
                        A.Z,
                        {
                            participant: n,
                            aspectRatio: k,
                            blocked: m,
                            ignored: f,
                            channel: a,
                            className: L.tile,
                            inCall: !0,
                            inPopout: h,
                            paused: !1,
                            pulseSpeakingIndicator: !p.enabled,
                            width: o,
                            onContextMenu: u,
                            children: d && (0, i.jsx)(P.Z, {})
                        },
                        g
                    )
                })
        });
    },
    D = (e) => {
        let { stageParticipant: t, rtcParticipant: n, channel: a, width: r, isModerator: s, onContextMenu: u, inPopout: p } = e,
            { reducedMotion: m } = l.useContext(c.Sfi),
            { id: g, blocked: E, ignored: I } = t,
            b = (0, o.Wu)([Z.Z], () => Z.Z.getAllActiveStreams(), []),
            { selectedParticipant: N, largeStream: y } = (0, o.cj)([f.Z], () => ({
                selectedParticipant: null != a ? f.Z.getSelectedParticipant(a.id) : null,
                largeStream: null != a && f.Z.getStageStreamSize(a.id)
            })),
            O = l.useCallback(
                (e, t) => {
                    if (e.type === M.fO.STREAM && 0 === b.filter((t) => (0, C.V9)(t) === e.id && t.state !== R.jm8.ENDED).length) {
                        if (!(0, x.p9)(a, j.Z, T.Z, S.Z, _.Z)[0]) return;
                        (0, h.rn)((0, C.my)(e.id), { forceMultiple: t.shiftKey });
                    }
                    (null == N ? void 0 : N.id) === e.id ? (y ? (d.Z.selectParticipant(a.id, null), d.Z.updateStageStreamSize(a.id, !1)) : d.Z.updateStageStreamSize(a.id, !0)) : (d.Z.updateStageStreamSize(a.id, !1), d.Z.selectParticipant(a.id, e.id));
                },
                [b, a, N, y]
            );
        return (0, i.jsx)(
            A.Z,
            {
                participant: n,
                aspectRatio: k,
                fit: n.type === M.fO.USER ? v.L.COVER : void 0,
                blocked: E,
                ignored: I,
                channel: a,
                className: L.tile,
                inCall: !0,
                inPopout: p,
                onClick: O,
                onContextMenu: u,
                paused: !1,
                pulseSpeakingIndicator: !m.enabled,
                width: r,
                children: s && n.type === M.fO.USER && (0, i.jsx)(P.Z, {})
            },
            g
        );
    },
    w = l.memo(function (e) {
        var t;
        let { participant: l, channel: a, width: c } = e,
            d = (0, p.bp)(),
            h = a.getGuildId(),
            _ = N.default.getId(),
            { enabled: C } = (0, g.Z)({ location: 'StageTile' });
        r()(null != h, 'Channel cannot be guildless');
        let { user: x } = l,
            v = (0, o.e7)([f.Z], () => f.Z.getParticipant(a.id, l.id), [a.id, l.id]),
            I = (0, o.e7)([y.ZP], () => y.ZP.isModerator(x.id, a.id), [a.id, x.id]);
        if (null == v || v.type === M.fO.ACTIVITY || v.type === M.fO.PRESENCE_EMBEDDED_ACTIVITY) return null;
        let b = (e) => {
                (0, m.h)({
                    type: s.ImpressionTypes.MENU,
                    name: s.ImpressionNames.CALL_TILE_CONTEXT_MENU,
                    properties: {
                        location: 'StageTile',
                        is_tile_owner: x.id === _,
                        tile_type: e
                    }
                });
            },
            Z = (e, t, l) => {
                switch (e.type) {
                    case M.fO.HIDDEN_STREAM:
                    case M.fO.STREAM:
                        b(M.TH.STREAM),
                            (0, u.jW)(
                                t,
                                async () => {
                                    let { default: t } = await n.e('22183').then(n.bind(n, 987281));
                                    return (n) =>
                                        (0, i.jsx)(t, {
                                            ...n,
                                            stream: e.stream,
                                            appContext: d,
                                            exitFullscreen: () => {}
                                        });
                                },
                                { context: d }
                            );
                        return;
                    case M.fO.USER:
                    default:
                        if ((b(M.TH.USER), C && l)) return (0, E.p)(t, x, a, h, { context: d });
                        (0, u.jW)(
                            t,
                            async () => {
                                let { default: e } = await Promise.all([n.e('79695'), n.e('98783'), n.e('7717'), n.e('44475')]).then(n.bind(n, 757387));
                                return (t) =>
                                    (0, i.jsx)(e, {
                                        ...t,
                                        user: x,
                                        guildId: h,
                                        channel: a,
                                        showMediaItems: !0,
                                        showStageChannelItems: !0,
                                        showChatItems: !1
                                    });
                            },
                            { context: d }
                        );
                }
            },
            T = v.type === M.fO.USER && !(null === (t = v.voiceState) || void 0 === t ? void 0 : t.selfVideo);
        return (0, i.jsx)(i.Fragment, {
            children: T
                ? (0, i.jsx)(O, {
                      stageParticipant: l,
                      rtcParticipant: v,
                      channel: a,
                      guildId: h,
                      user: x,
                      width: c,
                      isModerator: I,
                      onContextMenu: Z,
                      inPopout: d === R.IlC.POPOUT
                  })
                : (0, i.jsx)(D, {
                      stageParticipant: l,
                      rtcParticipant: v,
                      channel: a,
                      guildId: h,
                      user: x,
                      width: c,
                      isModerator: I,
                      onContextMenu: Z,
                      inPopout: d === R.IlC.POPOUT
                  })
        });
    });
