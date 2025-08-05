n.d(t, {
    Q: () => k,
    Z: () => F
});
var r = n(255367),
    i = n(73800),
    l = n(512722),
    a = n.n(l),
    s = n(990547),
    o = n(442837),
    c = n(481060),
    d = n(475179),
    u = n(239091),
    h = n(872810),
    p = n(40851),
    f = n(100527),
    g = n(906732),
    m = n(213609),
    b = n(358221),
    _ = n(795318),
    y = n(258609),
    j = n(569545),
    O = n(102172),
    x = n(352978),
    v = n(880395),
    C = n(670188),
    E = n(199902),
    Z = n(314897),
    I = n(430824),
    S = n(496675),
    P = n(979651),
    T = n(88751),
    N = n(252132),
    w = n(248400),
    R = n(981631),
    A = n(354459),
    D = n(820573);
function L(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            r = Object.keys(n);
        ('function' == typeof Object.getOwnPropertySymbols &&
            (r = r.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                })
            )),
            r.forEach(function (t) {
                var r;
                ((r = n[t]),
                    t in e
                        ? Object.defineProperty(e, t, {
                              value: r,
                              enumerable: !0,
                              configurable: !0,
                              writable: !0
                          })
                        : (e[t] = r));
            }));
    }
    return e;
}
function M(e, t) {
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
let k = 16 / 9,
    U = (e) => {
        let { stageParticipant: t, rtcParticipant: n, channel: l, guildId: a, user: s, width: o, isModerator: d, onContextMenu: u, inPopout: h } = e,
            p = i.useRef(null),
            { reducedMotion: f } = i.useContext(c.Sfi),
            { blocked: g, ignored: m, id: b } = t;
        return (0, r.jsx)(C.Z, {
            targetElementRef: p,
            user: s,
            guildId: a,
            channelId: l.id,
            clickTrap: !0,
            children: (e) =>
                (0, r.jsx)(
                    c.P3F,
                    M(
                        L(
                            {
                                innerRef: p,
                                onContextMenu: (e) => u(n, e)
                            },
                            e
                        ),
                        {
                            children: (0, r.jsx)(
                                N.Z,
                                {
                                    participant: n,
                                    aspectRatio: k,
                                    blocked: g,
                                    ignored: m,
                                    channel: l,
                                    className: D.tile,
                                    inCall: !0,
                                    inPopout: h,
                                    pulseSpeakingIndicator: !f.enabled,
                                    width: o,
                                    onContextMenu: u,
                                    children: d && (0, r.jsx)(w.Z, {})
                                },
                                b
                            )
                        }
                    )
                )
        });
    },
    G = (e) => {
        let { stageParticipant: t, rtcParticipant: n, channel: l, width: a, isModerator: s, onContextMenu: u, inPopout: p } = e,
            { reducedMotion: f } = i.useContext(c.Sfi),
            { id: g, blocked: m, ignored: _ } = t,
            v = (0, o.Wu)([E.Z], () => E.Z.getAllActiveStreams(), []),
            { selectedParticipant: C, largeStream: Z } = (0, o.cj)([b.Z], () => ({
                selectedParticipant: null != l ? b.Z.getSelectedParticipant(l.id) : null,
                largeStream: null != l && b.Z.getStageStreamSize(l.id)
            })),
            T = i.useCallback(
                (e, t) => {
                    if (e.type === A.fO.STREAM && 0 === v.filter((t) => (0, j.V9)(t) === e.id && t.state !== R.jm8.ENDED).length) {
                        if (!(0, O.p9)(l, P.Z, I.Z, S.Z, y.Z)[0]) return;
                        (0, h.rn)((0, j.my)(e.id), { forceMultiple: t.shiftKey });
                    }
                    (null == C ? void 0 : C.id) === e.id ? (Z ? (d.Z.selectParticipant(l.id, null), d.Z.updateStageStreamSize(l.id, !1)) : d.Z.updateStageStreamSize(l.id, !0)) : (d.Z.updateStageStreamSize(l.id, !1), d.Z.selectParticipant(l.id, e.id));
                },
                [v, l, C, Z]
            );
        return (0, r.jsx)(
            N.Z,
            {
                participant: n,
                aspectRatio: k,
                fit: n.type === A.fO.USER ? x.L.COVER : void 0,
                blocked: m,
                ignored: _,
                channel: l,
                className: D.tile,
                inCall: !0,
                inPopout: p,
                onClick: T,
                onContextMenu: u,
                pulseSpeakingIndicator: !f.enabled,
                width: a,
                children: s && n.type === A.fO.USER && (0, r.jsx)(w.Z, {})
            },
            g
        );
    },
    F = i.memo(function (e) {
        var t;
        let { participant: i, channel: l, width: c } = e,
            { newestAnalyticsLocation: d } = (0, g.ZP)(f.Z.STAGE_TILE),
            h = (0, p.bp)(),
            y = l.getGuildId(),
            j = Z.default.getId();
        a()(null != y, 'Channel cannot be guildless');
        let { user: O } = i,
            x = (0, o.e7)([b.Z], () => b.Z.getParticipant(l.id, i.id), [l.id, i.id]),
            C = (0, o.e7)([T.ZP], () => T.ZP.isModerator(O.id, l.id), [l.id, O.id]);
        if (null == x || x.type === A.fO.ACTIVITY) return null;
        let E = (e) => {
                (0, m.h)({
                    type: s.ImpressionTypes.MENU,
                    name: s.ImpressionNames.CALL_TILE_CONTEXT_MENU,
                    properties: {
                        location: 'StageTile',
                        is_tile_owner: O.id === j,
                        tile_type: e
                    }
                });
            },
            I = (e, t, i, a) => {
                switch (e.type) {
                    case A.fO.HIDDEN_STREAM:
                    case A.fO.STREAM:
                        (E(A.TH.STREAM),
                            (0, u.jW)(
                                t,
                                async () => {
                                    let { default: t } = await n.e('22183').then(n.bind(n, 987281));
                                    return (n) =>
                                        (0, r.jsx)(
                                            t,
                                            M(L({}, n), {
                                                stream: e.stream,
                                                appContext: h,
                                                exitFullscreen: () => {},
                                                onInteraction: (0, _.u)('StreamContextMenu', d, {
                                                    entrypoint: a,
                                                    targetUserId: O.id,
                                                    tileType: A.TH.STREAM
                                                })
                                            })
                                        );
                                },
                                { context: h }
                            ));
                        return;
                    case A.fO.USER:
                    default:
                        if ((E(A.TH.USER), i))
                            return (0, v.D)(t, O, l, { context: h }, (e, t) =>
                                (0, _.o)({
                                    menuName: e,
                                    menuItemProps: t,
                                    entrypoint: A.A5.THREE_DOT,
                                    targetUserId: O.id,
                                    location: d,
                                    tileType: A.TH.USER
                                })
                            );
                        (0, u.jW)(
                            t,
                            async () => {
                                let { default: e } = await Promise.all([n.e('79695'), n.e('98783'), n.e('8982'), n.e('7717'), n.e('74800')]).then(n.bind(n, 757387));
                                return (t) =>
                                    (0, r.jsx)(
                                        e,
                                        M(L({}, t), {
                                            user: O,
                                            guildId: y,
                                            channel: l,
                                            showMediaItems: !0,
                                            showStageChannelItems: !0,
                                            showChatItems: !1,
                                            onInteraction: (0, _.u)('GuildChannelUserContextMenu', d, {
                                                targetUserId: O.id,
                                                tileType: A.TH.USER
                                            })
                                        })
                                    );
                            },
                            { context: h }
                        );
                }
            };
        return x.type !== A.fO.USER || (null == (t = x.voiceState) ? void 0 : t.selfVideo)
            ? (0, r.jsx)(G, {
                  stageParticipant: i,
                  rtcParticipant: x,
                  channel: l,
                  guildId: y,
                  user: O,
                  width: c,
                  isModerator: C,
                  onContextMenu: I,
                  inPopout: h === R.IlC.POPOUT
              })
            : (0, r.jsx)(U, {
                  stageParticipant: i,
                  rtcParticipant: x,
                  channel: l,
                  guildId: y,
                  user: O,
                  width: c,
                  isModerator: C,
                  onContextMenu: I,
                  inPopout: h === R.IlC.POPOUT
              });
    });
