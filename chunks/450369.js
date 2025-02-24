n.d(t, {
    Q: () => D,
    Z: () => B
});
var r = n(200651),
    i = n(192379),
    l = n(512722),
    o = n.n(l),
    a = n(990547),
    s = n(442837),
    c = n(481060),
    u = n(475179),
    d = n(239091),
    p = n(872810),
    h = n(40851),
    f = n(213609),
    m = n(358221),
    g = n(682901),
    b = n(795318),
    _ = n(258609),
    C = n(569545),
    v = n(102172),
    y = n(352978),
    x = n(880395),
    j = n(184301),
    O = n(347475),
    E = n(199902),
    N = n(314897),
    I = n(430824),
    P = n(496675),
    S = n(979651),
    Z = n(88751),
    T = n(252132),
    A = n(248400),
    w = n(981631),
    R = n(354459),
    M = n(379005);
function k(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            r = Object.keys(n);
        'function' == typeof Object.getOwnPropertySymbols &&
            (r = r.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                })
            )),
            r.forEach(function (t) {
                var r;
                (r = n[t]),
                    t in e
                        ? Object.defineProperty(e, t, {
                              value: r,
                              enumerable: !0,
                              configurable: !0,
                              writable: !0
                          })
                        : (e[t] = r);
            });
    }
    return e;
}
function L(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : (function (e, t) {
                  var n = Object.keys(e);
                  if (Object.getOwnPropertySymbols) {
                      var r = Object.getOwnPropertySymbols(e);
                      n.push.apply(n, r);
                  }
                  return n;
              })(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
let D = 16 / 9,
    W = (e) => {
        let { stageParticipant: t, rtcParticipant: n, channel: l, guildId: o, user: a, width: s, isModerator: u, onContextMenu: d, inPopout: p } = e,
            { reducedMotion: h } = i.useContext(c.Sfi),
            { blocked: f, ignored: m, id: g } = t;
        return (0, r.jsx)(c.yRy, {
            preload:
                null == n
                    ? void 0
                    : () =>
                          (0, j.Z)(n.user, {
                              guildId: l.guild_id,
                              channelId: l.id
                          }),
            renderPopout: (e) =>
                (0, r.jsx)(
                    O.Z,
                    L(k({}, e), {
                        guildId: o,
                        channelId: l.id,
                        userId: a.id
                    })
                ),
            position: 'right',
            spacing: 8,
            children: (e) =>
                (0, r.jsx)(
                    c.P3F,
                    L(k({ onContextMenu: (e) => d(n, e) }, e), {
                        children: (0, r.jsx)(
                            T.Z,
                            {
                                participant: n,
                                aspectRatio: D,
                                blocked: f,
                                ignored: m,
                                channel: l,
                                className: M.tile,
                                inCall: !0,
                                inPopout: p,
                                paused: !1,
                                pulseSpeakingIndicator: !h.enabled,
                                width: s,
                                onContextMenu: d,
                                children: u && (0, r.jsx)(A.Z, {})
                            },
                            g
                        )
                    })
                )
        });
    },
    U = (e) => {
        let { stageParticipant: t, rtcParticipant: n, channel: l, width: o, isModerator: a, onContextMenu: d, inPopout: h } = e,
            { reducedMotion: f } = i.useContext(c.Sfi),
            { id: g, blocked: b, ignored: x } = t,
            j = (0, s.Wu)([E.Z], () => E.Z.getAllActiveStreams(), []),
            { selectedParticipant: O, largeStream: N } = (0, s.cj)([m.Z], () => ({
                selectedParticipant: null != l ? m.Z.getSelectedParticipant(l.id) : null,
                largeStream: null != l && m.Z.getStageStreamSize(l.id)
            })),
            Z = i.useCallback(
                (e, t) => {
                    if (e.type === R.fO.STREAM && 0 === j.filter((t) => (0, C.V9)(t) === e.id && t.state !== w.jm8.ENDED).length) {
                        if (!(0, v.p9)(l, S.Z, I.Z, P.Z, _.Z)[0]) return;
                        (0, p.rn)((0, C.my)(e.id), { forceMultiple: t.shiftKey });
                    }
                    (null == O ? void 0 : O.id) === e.id ? (N ? (u.Z.selectParticipant(l.id, null), u.Z.updateStageStreamSize(l.id, !1)) : u.Z.updateStageStreamSize(l.id, !0)) : (u.Z.updateStageStreamSize(l.id, !1), u.Z.selectParticipant(l.id, e.id));
                },
                [j, l, O, N]
            );
        return (0, r.jsx)(
            T.Z,
            {
                participant: n,
                aspectRatio: D,
                fit: n.type === R.fO.USER ? y.L.COVER : void 0,
                blocked: b,
                ignored: x,
                channel: l,
                className: M.tile,
                inCall: !0,
                inPopout: h,
                onClick: Z,
                onContextMenu: d,
                paused: !1,
                pulseSpeakingIndicator: !f.enabled,
                width: o,
                children: a && n.type === R.fO.USER && (0, r.jsx)(A.Z, {})
            },
            g
        );
    },
    B = i.memo(function (e) {
        var t;
        let { participant: i, channel: l, width: c } = e,
            u = (0, h.bp)(),
            p = l.getGuildId(),
            _ = N.default.getId(),
            { enabled: C } = (0, g.Z)({ location: 'StageTile' });
        o()(null != p, 'Channel cannot be guildless');
        let { user: v } = i,
            y = (0, s.e7)([m.Z], () => m.Z.getParticipant(l.id, i.id), [l.id, i.id]),
            j = (0, s.e7)([Z.ZP], () => Z.ZP.isModerator(v.id, l.id), [l.id, v.id]);
        if (null == y || y.type === R.fO.ACTIVITY || y.type === R.fO.PRESENCE_EMBEDDED_ACTIVITY) return null;
        let O = (e) => {
                (0, f.h)({
                    type: a.ImpressionTypes.MENU,
                    name: a.ImpressionNames.CALL_TILE_CONTEXT_MENU,
                    properties: {
                        location: 'StageTile',
                        is_tile_owner: v.id === _,
                        tile_type: e
                    }
                });
            },
            E = (e, t, i, o) => {
                switch (e.type) {
                    case R.fO.HIDDEN_STREAM:
                    case R.fO.STREAM:
                        O(R.TH.STREAM),
                            (0, d.jW)(
                                t,
                                async () => {
                                    let { default: t } = await n.e('22183').then(n.bind(n, 987281));
                                    return (n) =>
                                        (0, r.jsx)(
                                            t,
                                            L(k({}, n), {
                                                stream: e.stream,
                                                appContext: u,
                                                exitFullscreen: () => {},
                                                onInteraction: (0, b.u)('StreamContextMenu', 'StageTile', {
                                                    entrypoint: o,
                                                    targetUserId: v.id,
                                                    tileType: R.TH.STREAM
                                                })
                                            })
                                        );
                                },
                                { context: u }
                            );
                        return;
                    case R.fO.USER:
                    default:
                        if ((O(R.TH.USER), C && i))
                            return (0, x.D)(t, v, l, { context: u }, (e, t) =>
                                (0, b.o)({
                                    menuName: e,
                                    menuItemProps: t,
                                    entrypoint: R.A5.THREE_DOT,
                                    targetUserId: v.id,
                                    location: 'StageTile',
                                    tileType: R.TH.USER
                                })
                            );
                        (0, d.jW)(
                            t,
                            async () => {
                                let { default: e } = await Promise.all([n.e('79695'), n.e('98783'), n.e('97589'), n.e('7717'), n.e('83944')]).then(n.bind(n, 757387));
                                return (t) =>
                                    (0, r.jsx)(
                                        e,
                                        L(k({}, t), {
                                            user: v,
                                            guildId: p,
                                            channel: l,
                                            showMediaItems: !0,
                                            showStageChannelItems: !0,
                                            showChatItems: !1,
                                            onInteraction: (0, b.u)('GuildChannelUserContextMenu', 'StageTile', {
                                                targetUserId: v.id,
                                                tileType: R.TH.USER
                                            })
                                        })
                                    );
                            },
                            { context: u }
                        );
                }
            },
            I = y.type === R.fO.USER && !(null === (t = y.voiceState) || void 0 === t ? void 0 : t.selfVideo);
        return (0, r.jsx)(r.Fragment, {
            children: I
                ? (0, r.jsx)(W, {
                      stageParticipant: i,
                      rtcParticipant: y,
                      channel: l,
                      guildId: p,
                      user: v,
                      width: c,
                      isModerator: j,
                      onContextMenu: E,
                      inPopout: u === w.IlC.POPOUT
                  })
                : (0, r.jsx)(U, {
                      stageParticipant: i,
                      rtcParticipant: y,
                      channel: l,
                      guildId: p,
                      user: v,
                      width: c,
                      isModerator: j,
                      onContextMenu: E,
                      inPopout: u === w.IlC.POPOUT
                  })
        });
    });
