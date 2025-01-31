n.d(t, {
    Q: () => M,
    Z: () => O
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
    g = n(258609),
    _ = n(569545),
    C = n(102172),
    x = n(352978),
    v = n(184301),
    E = n(347475),
    I = n(199902),
    b = n(314897),
    Z = n(430824),
    N = n(496675),
    T = n(979651),
    S = n(88751),
    j = n(252132),
    A = n(248400),
    y = n(981631),
    P = n(354459),
    R = n(235537);
let M = 16 / 9,
    L = (e) => {
        let { stageParticipant: t, rtcParticipant: n, channel: a, guildId: r, user: s, width: o, isModerator: d, onContextMenu: u, inPopout: h } = e,
            { reducedMotion: p } = l.useContext(c.Sfi),
            { blocked: m, ignored: f, id: g } = t;
        return (0, i.jsx)(c.yRy, {
            preload:
                null == n
                    ? void 0
                    : () =>
                          (0, v.Z)(n.user, {
                              guildId: a.guild_id,
                              channelId: a.id
                          }),
            renderPopout: (e) =>
                (0, i.jsx)(E.Z, {
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
                        j.Z,
                        {
                            participant: n,
                            aspectRatio: M,
                            blocked: m,
                            ignored: f,
                            channel: a,
                            className: R.tile,
                            inCall: !0,
                            inPopout: h,
                            paused: !1,
                            pulseSpeakingIndicator: !p.enabled,
                            width: o,
                            children: d && (0, i.jsx)(A.Z, {})
                        },
                        g
                    )
                })
        });
    },
    k = (e) => {
        let { stageParticipant: t, rtcParticipant: n, channel: a, width: r, isModerator: s, onContextMenu: u, inPopout: p } = e,
            { reducedMotion: m } = l.useContext(c.Sfi),
            { id: v, blocked: E, ignored: b } = t,
            S = (0, o.Wu)([I.Z], () => I.Z.getAllActiveStreams(), []),
            { selectedParticipant: L, largeStream: k } = (0, o.cj)([f.Z], () => ({
                selectedParticipant: null != a ? f.Z.getSelectedParticipant(a.id) : null,
                largeStream: null != a && f.Z.getStageStreamSize(a.id)
            })),
            O = l.useCallback(
                (e, t) => {
                    if (e.type === P.fO.STREAM && 0 === S.filter((t) => (0, _.V9)(t) === e.id && t.state !== y.jm8.ENDED).length) {
                        if (!(0, C.p9)(a, T.Z, Z.Z, N.Z, g.Z)[0]) return;
                        (0, h.rn)((0, _.my)(e.id), { forceMultiple: t.shiftKey });
                    }
                    (null == L ? void 0 : L.id) === e.id ? (k ? (d.Z.selectParticipant(a.id, null), d.Z.updateStageStreamSize(a.id, !1)) : d.Z.updateStageStreamSize(a.id, !0)) : (d.Z.updateStageStreamSize(a.id, !1), d.Z.selectParticipant(a.id, e.id));
                },
                [S, a, L, k]
            );
        return (0, i.jsx)(
            j.Z,
            {
                participant: n,
                aspectRatio: M,
                fit: n.type === P.fO.USER ? x.L.COVER : void 0,
                blocked: E,
                ignored: b,
                channel: a,
                className: R.tile,
                inCall: !0,
                inPopout: p,
                onClick: O,
                onContextMenu: u,
                paused: !1,
                pulseSpeakingIndicator: !m.enabled,
                width: r,
                children: s && n.type === P.fO.USER && (0, i.jsx)(A.Z, {})
            },
            v
        );
    },
    O = l.memo(function (e) {
        var t;
        let { participant: l, channel: a, width: c } = e,
            d = (0, p.bp)(),
            h = a.getGuildId(),
            g = b.default.getId();
        r()(null != h, 'Channel cannot be guildless');
        let { user: _ } = l,
            C = (0, o.e7)([f.Z], () => f.Z.getParticipant(a.id, l.id), [a.id, l.id]),
            x = (0, o.e7)([S.ZP], () => S.ZP.isModerator(_.id, a.id), [a.id, _.id]);
        if (null == C || C.type === P.fO.ACTIVITY || C.type === P.fO.PRESENCE_EMBEDDED_ACTIVITY) return null;
        let v = (e) => {
                (0, m.h)({
                    type: s.ImpressionTypes.MENU,
                    name: s.ImpressionNames.CALL_TILE_CONTEXT_MENU,
                    properties: {
                        location: 'StageTile',
                        is_tile_owner: _.id === g,
                        tile_type: e
                    }
                });
            },
            E = (e, t) => {
                switch (e.type) {
                    case P.fO.HIDDEN_STREAM:
                    case P.fO.STREAM:
                        v(P.TH.STREAM),
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
                    case P.fO.USER:
                    default:
                        v(P.TH.USER),
                            (0, u.jW)(
                                t,
                                async () => {
                                    let { default: e } = await Promise.all([n.e('79695'), n.e('98783'), n.e('13125'), n.e('64899')]).then(n.bind(n, 757387));
                                    return (t) =>
                                        (0, i.jsx)(e, {
                                            ...t,
                                            user: _,
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
            I = C.type === P.fO.USER && !(null === (t = C.voiceState) || void 0 === t ? void 0 : t.selfVideo);
        return (0, i.jsx)(i.Fragment, {
            children: I
                ? (0, i.jsx)(L, {
                      stageParticipant: l,
                      rtcParticipant: C,
                      channel: a,
                      guildId: h,
                      user: _,
                      width: c,
                      isModerator: x,
                      onContextMenu: E,
                      inPopout: d === y.IlC.POPOUT
                  })
                : (0, i.jsx)(k, {
                      stageParticipant: l,
                      rtcParticipant: C,
                      channel: a,
                      guildId: h,
                      user: _,
                      width: c,
                      isModerator: x,
                      onContextMenu: E,
                      inPopout: d === y.IlC.POPOUT
                  })
        });
    });
