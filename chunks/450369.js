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
    g = n(795318),
    b = n(258609),
    _ = n(569545),
    C = n(102172),
    v = n(352978),
    y = n(880395),
    x = n(184301),
    j = n(347475),
    O = n(221241),
    N = n(199902),
    E = n(314897),
    I = n(430824),
    P = n(496675),
    S = n(979651),
    Z = n(88751),
    T = n(252132),
    A = n(248400),
    w = n(981631),
    R = n(354459),
    M = n(43830);
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
                          (0, x.Z)(n.user, {
                              guildId: l.guild_id,
                              channelId: l.id
                          }),
            renderPopout: (e) =>
                (0, r.jsx)(
                    j.Z,
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
            { id: g, blocked: y, ignored: x } = t,
            j = (0, s.Wu)([N.Z], () => N.Z.getAllActiveStreams(), []),
            { selectedParticipant: O, largeStream: E } = (0, s.cj)([m.Z], () => ({
                selectedParticipant: null != l ? m.Z.getSelectedParticipant(l.id) : null,
                largeStream: null != l && m.Z.getStageStreamSize(l.id)
            })),
            Z = i.useCallback(
                (e, t) => {
                    if (e.type === R.fO.STREAM && 0 === j.filter((t) => (0, _.V9)(t) === e.id && t.state !== w.jm8.ENDED).length) {
                        if (!(0, C.p9)(l, S.Z, I.Z, P.Z, b.Z)[0]) return;
                        (0, p.rn)((0, _.my)(e.id), { forceMultiple: t.shiftKey });
                    }
                    (null == O ? void 0 : O.id) === e.id ? (E ? (u.Z.selectParticipant(l.id, null), u.Z.updateStageStreamSize(l.id, !1)) : u.Z.updateStageStreamSize(l.id, !0)) : (u.Z.updateStageStreamSize(l.id, !1), u.Z.selectParticipant(l.id, e.id));
                },
                [j, l, O, E]
            );
        return (0, r.jsx)(
            T.Z,
            {
                participant: n,
                aspectRatio: D,
                fit: n.type === R.fO.USER ? v.L.COVER : void 0,
                blocked: y,
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
            b = E.default.getId(),
            { simplifiedSettingsEnabled: _ } = (0, O.Z)({ location: 'StageTile' });
        o()(null != p, 'Channel cannot be guildless');
        let { user: C } = i,
            v = (0, s.e7)([m.Z], () => m.Z.getParticipant(l.id, i.id), [l.id, i.id]),
            x = (0, s.e7)([Z.ZP], () => Z.ZP.isModerator(C.id, l.id), [l.id, C.id]);
        if (null == v || v.type === R.fO.ACTIVITY || v.type === R.fO.PRESENCE_EMBEDDED_ACTIVITY) return null;
        let j = (e) => {
                (0, f.h)({
                    type: a.ImpressionTypes.MENU,
                    name: a.ImpressionNames.CALL_TILE_CONTEXT_MENU,
                    properties: {
                        location: 'StageTile',
                        is_tile_owner: C.id === b,
                        tile_type: e
                    }
                });
            },
            N = (e, t, i, o) => {
                switch (e.type) {
                    case R.fO.HIDDEN_STREAM:
                    case R.fO.STREAM:
                        j(R.TH.STREAM),
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
                                                onInteraction: (0, g.u)('StreamContextMenu', 'StageTile', {
                                                    entrypoint: o,
                                                    targetUserId: C.id,
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
                        if ((j(R.TH.USER), _ && i))
                            return (0, y.D)(t, C, l, { context: u }, (e, t) =>
                                (0, g.o)({
                                    menuName: e,
                                    menuItemProps: t,
                                    entrypoint: R.A5.THREE_DOT,
                                    targetUserId: C.id,
                                    location: 'StageTile',
                                    tileType: R.TH.USER
                                })
                            );
                        (0, d.jW)(
                            t,
                            async () => {
                                let { default: e } = await Promise.all([n.e('79695'), n.e('98783'), n.e('97589'), n.e('7717'), n.e('22685')]).then(n.bind(n, 757387));
                                return (t) =>
                                    (0, r.jsx)(
                                        e,
                                        L(k({}, t), {
                                            user: C,
                                            guildId: p,
                                            channel: l,
                                            showMediaItems: !0,
                                            showStageChannelItems: !0,
                                            showChatItems: !1,
                                            onInteraction: (0, g.u)('GuildChannelUserContextMenu', 'StageTile', {
                                                targetUserId: C.id,
                                                tileType: R.TH.USER
                                            })
                                        })
                                    );
                            },
                            { context: u }
                        );
                }
            };
        return v.type !== R.fO.USER || (null === (t = v.voiceState) || void 0 === t ? void 0 : t.selfVideo)
            ? (0, r.jsx)(U, {
                  stageParticipant: i,
                  rtcParticipant: v,
                  channel: l,
                  guildId: p,
                  user: C,
                  width: c,
                  isModerator: x,
                  onContextMenu: N,
                  inPopout: u === w.IlC.POPOUT
              })
            : (0, r.jsx)(W, {
                  stageParticipant: i,
                  rtcParticipant: v,
                  channel: l,
                  guildId: p,
                  user: C,
                  width: c,
                  isModerator: x,
                  onContextMenu: N,
                  inPopout: u === w.IlC.POPOUT
              });
    });
