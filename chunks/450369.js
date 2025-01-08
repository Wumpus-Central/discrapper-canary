n.d(t, {
    Q: function () {
        return R;
    }
});
var i = n(200651),
    l = n(192379),
    r = n(512722),
    a = n.n(r),
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
    C = n(569545),
    x = n(102172),
    v = n(352978),
    _ = n(184301),
    I = n(347475),
    E = n(199902),
    b = n(314897),
    Z = n(430824),
    N = n(496675),
    S = n(979651),
    T = n(88751),
    j = n(252132),
    A = n(248400),
    y = n(981631),
    P = n(354459),
    M = n(235537);
let R = 16 / 9,
    L = (e) => {
        let { stageParticipant: t, rtcParticipant: n, channel: r, guildId: a, user: s, width: o, isModerator: d, onContextMenu: u, inPopout: h } = e,
            { reducedMotion: p } = l.useContext(c.AccessibilityPreferencesContext),
            { blocked: m, ignored: f, id: g } = t;
        return (0, i.jsx)(c.Popout, {
            preload:
                null == n
                    ? void 0
                    : () =>
                          (0, _.Z)(n.user, {
                              guildId: r.guild_id,
                              channelId: r.id
                          }),
            renderPopout: (e) =>
                (0, i.jsx)(I.Z, {
                    ...e,
                    guildId: a,
                    channelId: r.id,
                    userId: s.id
                }),
            position: 'right',
            spacing: 8,
            children: (e) =>
                (0, i.jsx)(c.Clickable, {
                    onContextMenu: (e) => u(n, e),
                    ...e,
                    children: (0, i.jsx)(
                        j.Z,
                        {
                            participant: n,
                            aspectRatio: R,
                            blocked: m,
                            ignored: f,
                            channel: r,
                            className: M.tile,
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
        let { stageParticipant: t, rtcParticipant: n, channel: r, width: a, isModerator: s, onContextMenu: u, inPopout: p } = e,
            { reducedMotion: m } = l.useContext(c.AccessibilityPreferencesContext),
            { id: _, blocked: I, ignored: b } = t,
            T = (0, o.Wu)([E.Z], () => E.Z.getAllActiveStreams(), []),
            { selectedParticipant: L, largeStream: k } = (0, o.cj)([f.Z], () => ({
                selectedParticipant: null != r ? f.Z.getSelectedParticipant(r.id) : null,
                largeStream: null != r && f.Z.getStageStreamSize(r.id)
            })),
            O = l.useCallback(
                (e, t) => {
                    if (e.type === P.fO.STREAM && 0 === T.filter((t) => (0, C.V9)(t) === e.id && t.state !== y.jm8.ENDED).length) {
                        if (!(0, x.p9)(r, S.Z, Z.Z, N.Z, g.Z)[0]) return;
                        (0, h.rn)((0, C.my)(e.id), { forceMultiple: t.shiftKey });
                    }
                    (null == L ? void 0 : L.id) === e.id ? (k ? (d.Z.selectParticipant(r.id, null), d.Z.updateStageStreamSize(r.id, !1)) : d.Z.updateStageStreamSize(r.id, !0)) : (d.Z.updateStageStreamSize(r.id, !1), d.Z.selectParticipant(r.id, e.id));
                },
                [T, r, L, k]
            );
        return (0, i.jsx)(
            j.Z,
            {
                participant: n,
                aspectRatio: R,
                fit: n.type === P.fO.USER ? v.L.COVER : void 0,
                blocked: I,
                ignored: b,
                channel: r,
                className: M.tile,
                inCall: !0,
                inPopout: p,
                onClick: O,
                onContextMenu: u,
                paused: !1,
                pulseSpeakingIndicator: !m.enabled,
                width: a,
                children: s && n.type === P.fO.USER && (0, i.jsx)(A.Z, {})
            },
            _
        );
    };
t.Z = l.memo(function (e) {
    var t;
    let { participant: l, channel: r, width: c } = e,
        d = (0, p.bp)(),
        h = r.getGuildId(),
        g = b.default.getId();
    a()(null != h, 'Channel cannot be guildless');
    let { user: C } = l,
        x = (0, o.e7)([f.Z], () => f.Z.getParticipant(r.id, l.id), [r.id, l.id]),
        v = (0, o.e7)([T.ZP], () => T.ZP.isModerator(C.id, r.id), [r.id, C.id]);
    if (null == x || x.type === P.fO.ACTIVITY) return null;
    let _ = (e) => {
            (0, m.h)({
                type: s.ImpressionTypes.MENU,
                name: s.ImpressionNames.CALL_TILE_CONTEXT_MENU,
                properties: {
                    is_tile_owner: C.id === g,
                    tile_type: e
                }
            });
        },
        I = (e, t) => {
            switch (e.type) {
                case P.fO.HIDDEN_STREAM:
                case P.fO.STREAM:
                    _(P.TH.STREAM),
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
                    _(P.TH.USER),
                        (0, u.jW)(
                            t,
                            async () => {
                                let { default: e } = await Promise.all([n.e('79695'), n.e('92453'), n.e('13125'), n.e('64899')]).then(n.bind(n, 757387));
                                return (t) =>
                                    (0, i.jsx)(e, {
                                        ...t,
                                        user: C,
                                        guildId: h,
                                        channel: r,
                                        showMediaItems: !0,
                                        showStageChannelItems: !0,
                                        showChatItems: !1
                                    });
                            },
                            { context: d }
                        );
            }
        },
        E = x.type === P.fO.USER && !(null === (t = x.voiceState) || void 0 === t ? void 0 : t.selfVideo);
    return (0, i.jsx)(i.Fragment, {
        children: E
            ? (0, i.jsx)(L, {
                  stageParticipant: l,
                  rtcParticipant: x,
                  channel: r,
                  guildId: h,
                  user: C,
                  width: c,
                  isModerator: v,
                  onContextMenu: I,
                  inPopout: d === y.IlC.POPOUT
              })
            : (0, i.jsx)(k, {
                  stageParticipant: l,
                  rtcParticipant: x,
                  channel: r,
                  guildId: h,
                  user: C,
                  width: c,
                  isModerator: v,
                  onContextMenu: I,
                  inPopout: d === y.IlC.POPOUT
              })
    });
});
