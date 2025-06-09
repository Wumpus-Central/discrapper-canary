n.d(t, {
    Q: () => D,
    Z: () => F
});
var r = n(255367),
    i = n(73800),
    l = n(512722),
    a = n.n(l),
    o = n(990547),
    s = n(442837),
    c = n(481060),
    u = n(475179),
    d = n(239091),
    p = n(872810),
    h = n(40851),
    f = n(100527),
    m = n(906732),
    g = n(213609),
    b = n(358221),
    _ = n(795318),
    y = n(258609),
    C = n(569545),
    x = n(102172),
    v = n(352978),
    j = n(880395),
    O = n(670188),
    E = n(199902),
    I = n(314897),
    P = n(430824),
    S = n(496675),
    Z = n(979651),
    N = n(88751),
    T = n(252132),
    A = n(248400),
    w = n(981631),
    R = n(354459),
    M = n(820573);
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
    U = (e) => {
        let { stageParticipant: t, rtcParticipant: n, channel: l, guildId: a, user: o, width: s, isModerator: u, onContextMenu: d, inPopout: p } = e,
            h = i.useRef(null),
            { reducedMotion: f } = i.useContext(c.Sfi),
            { blocked: m, ignored: g, id: b } = t;
        return (0, r.jsx)(O.Z, {
            targetElementRef: h,
            user: o,
            guildId: a,
            channelId: l.id,
            clickTrap: !0,
            children: (e) =>
                (0, r.jsx)(
                    c.P3F,
                    L(
                        k(
                            {
                                innerRef: h,
                                onContextMenu: (e) => d(n, e)
                            },
                            e
                        ),
                        {
                            children: (0, r.jsx)(
                                T.Z,
                                {
                                    participant: n,
                                    aspectRatio: D,
                                    blocked: m,
                                    ignored: g,
                                    channel: l,
                                    className: M.tile,
                                    inCall: !0,
                                    inPopout: p,
                                    pulseSpeakingIndicator: !f.enabled,
                                    width: s,
                                    onContextMenu: d,
                                    children: u && (0, r.jsx)(A.Z, {})
                                },
                                b
                            )
                        }
                    )
                )
        });
    },
    B = (e) => {
        let { stageParticipant: t, rtcParticipant: n, channel: l, width: a, isModerator: o, onContextMenu: d, inPopout: h } = e,
            { reducedMotion: f } = i.useContext(c.Sfi),
            { id: m, blocked: g, ignored: _ } = t,
            j = (0, s.Wu)([E.Z], () => E.Z.getAllActiveStreams(), []),
            { selectedParticipant: O, largeStream: I } = (0, s.cj)([b.Z], () => ({
                selectedParticipant: null != l ? b.Z.getSelectedParticipant(l.id) : null,
                largeStream: null != l && b.Z.getStageStreamSize(l.id)
            })),
            N = i.useCallback(
                (e, t) => {
                    if (e.type === R.fO.STREAM && 0 === j.filter((t) => (0, C.V9)(t) === e.id && t.state !== w.jm8.ENDED).length) {
                        if (!(0, x.p9)(l, Z.Z, P.Z, S.Z, y.Z)[0]) return;
                        (0, p.rn)((0, C.my)(e.id), { forceMultiple: t.shiftKey });
                    }
                    (null == O ? void 0 : O.id) === e.id ? (I ? (u.Z.selectParticipant(l.id, null), u.Z.updateStageStreamSize(l.id, !1)) : u.Z.updateStageStreamSize(l.id, !0)) : (u.Z.updateStageStreamSize(l.id, !1), u.Z.selectParticipant(l.id, e.id));
                },
                [j, l, O, I]
            );
        return (0, r.jsx)(
            T.Z,
            {
                participant: n,
                aspectRatio: D,
                fit: n.type === R.fO.USER ? v.L.COVER : void 0,
                blocked: g,
                ignored: _,
                channel: l,
                className: M.tile,
                inCall: !0,
                inPopout: h,
                onClick: N,
                onContextMenu: d,
                pulseSpeakingIndicator: !f.enabled,
                width: a,
                children: o && n.type === R.fO.USER && (0, r.jsx)(A.Z, {})
            },
            m
        );
    },
    F = i.memo(function (e) {
        var t;
        let { participant: i, channel: l, width: c } = e,
            { newestAnalyticsLocation: u } = (0, m.ZP)(f.Z.STAGE_TILE),
            p = (0, h.bp)(),
            y = l.getGuildId(),
            C = I.default.getId();
        a()(null != y, 'Channel cannot be guildless');
        let { user: x } = i,
            v = (0, s.e7)([b.Z], () => b.Z.getParticipant(l.id, i.id), [l.id, i.id]),
            O = (0, s.e7)([N.ZP], () => N.ZP.isModerator(x.id, l.id), [l.id, x.id]);
        if (null == v || v.type === R.fO.ACTIVITY) return null;
        let E = (e) => {
                (0, g.h)({
                    type: o.ImpressionTypes.MENU,
                    name: o.ImpressionNames.CALL_TILE_CONTEXT_MENU,
                    properties: {
                        location: 'StageTile',
                        is_tile_owner: x.id === C,
                        tile_type: e
                    }
                });
            },
            P = (e, t, i, a) => {
                switch (e.type) {
                    case R.fO.HIDDEN_STREAM:
                    case R.fO.STREAM:
                        E(R.TH.STREAM),
                            (0, d.jW)(
                                t,
                                async () => {
                                    let { default: t } = await n.e('22183').then(n.bind(n, 987281));
                                    return (n) =>
                                        (0, r.jsx)(
                                            t,
                                            L(k({}, n), {
                                                stream: e.stream,
                                                appContext: p,
                                                exitFullscreen: () => {},
                                                onInteraction: (0, _.u)('StreamContextMenu', u, {
                                                    entrypoint: a,
                                                    targetUserId: x.id,
                                                    tileType: R.TH.STREAM
                                                })
                                            })
                                        );
                                },
                                { context: p }
                            );
                        return;
                    case R.fO.USER:
                    default:
                        if ((E(R.TH.USER), i))
                            return (0, j.D)(t, x, l, { context: p }, (e, t) =>
                                (0, _.o)({
                                    menuName: e,
                                    menuItemProps: t,
                                    entrypoint: R.A5.THREE_DOT,
                                    targetUserId: x.id,
                                    location: u,
                                    tileType: R.TH.USER
                                })
                            );
                        (0, d.jW)(
                            t,
                            async () => {
                                let { default: e } = await Promise.all([n.e('79695'), n.e('98783'), n.e('97589'), n.e('7717'), n.e('74800')]).then(n.bind(n, 757387));
                                return (t) =>
                                    (0, r.jsx)(
                                        e,
                                        L(k({}, t), {
                                            user: x,
                                            guildId: y,
                                            channel: l,
                                            showMediaItems: !0,
                                            showStageChannelItems: !0,
                                            showChatItems: !1,
                                            onInteraction: (0, _.u)('GuildChannelUserContextMenu', u, {
                                                targetUserId: x.id,
                                                tileType: R.TH.USER
                                            })
                                        })
                                    );
                            },
                            { context: p }
                        );
                }
            };
        return v.type !== R.fO.USER || (null == (t = v.voiceState) ? void 0 : t.selfVideo)
            ? (0, r.jsx)(B, {
                  stageParticipant: i,
                  rtcParticipant: v,
                  channel: l,
                  guildId: y,
                  user: x,
                  width: c,
                  isModerator: O,
                  onContextMenu: P,
                  inPopout: p === w.IlC.POPOUT
              })
            : (0, r.jsx)(U, {
                  stageParticipant: i,
                  rtcParticipant: v,
                  channel: l,
                  guildId: y,
                  user: x,
                  width: c,
                  isModerator: O,
                  onContextMenu: P,
                  inPopout: p === w.IlC.POPOUT
              });
    });
