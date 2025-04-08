n.d(t, {
    Q: () => W,
    Z: () => H
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
    f = n(100527),
    m = n(906732),
    g = n(213609),
    b = n(358221),
    _ = n(795318),
    C = n(258609),
    y = n(569545),
    x = n(102172),
    v = n(352978),
    j = n(880395),
    O = n(670188),
    E = n(221241),
    N = n(199902),
    I = n(314897),
    P = n(430824),
    S = n(496675),
    Z = n(979651),
    T = n(88751),
    A = n(252132),
    w = n(248400),
    R = n(981631),
    k = n(354459),
    M = n(820573);
function L(e) {
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
function D(e, t) {
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
let W = 16 / 9,
    U = (e) => {
        let { stageParticipant: t, rtcParticipant: n, channel: l, guildId: o, user: a, width: s, isModerator: u, onContextMenu: d, inPopout: p } = e,
            { reducedMotion: h } = i.useContext(c.Sfi),
            { blocked: f, ignored: m, id: g } = t;
        return (0, r.jsx)(O.Z, {
            user: a,
            guildId: o,
            channelId: l.id,
            clickTrap: !0,
            children: (e) =>
                (0, r.jsx)(
                    c.P3F,
                    D(L({ onContextMenu: (e) => d(n, e) }, e), {
                        children: (0, r.jsx)(
                            A.Z,
                            {
                                participant: n,
                                aspectRatio: W,
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
                                children: u && (0, r.jsx)(w.Z, {})
                            },
                            g
                        )
                    })
                )
        });
    },
    B = (e) => {
        let { stageParticipant: t, rtcParticipant: n, channel: l, width: o, isModerator: a, onContextMenu: d, inPopout: h } = e,
            { reducedMotion: f } = i.useContext(c.Sfi),
            { id: m, blocked: g, ignored: _ } = t,
            j = (0, s.Wu)([N.Z], () => N.Z.getAllActiveStreams(), []),
            { selectedParticipant: O, largeStream: E } = (0, s.cj)([b.Z], () => ({
                selectedParticipant: null != l ? b.Z.getSelectedParticipant(l.id) : null,
                largeStream: null != l && b.Z.getStageStreamSize(l.id)
            })),
            I = i.useCallback(
                (e, t) => {
                    if (e.type === k.fO.STREAM && 0 === j.filter((t) => (0, y.V9)(t) === e.id && t.state !== R.jm8.ENDED).length) {
                        if (!(0, x.p9)(l, Z.Z, P.Z, S.Z, C.Z)[0]) return;
                        (0, p.rn)((0, y.my)(e.id), { forceMultiple: t.shiftKey });
                    }
                    (null == O ? void 0 : O.id) === e.id ? (E ? (u.Z.selectParticipant(l.id, null), u.Z.updateStageStreamSize(l.id, !1)) : u.Z.updateStageStreamSize(l.id, !0)) : (u.Z.updateStageStreamSize(l.id, !1), u.Z.selectParticipant(l.id, e.id));
                },
                [j, l, O, E]
            );
        return (0, r.jsx)(
            A.Z,
            {
                participant: n,
                aspectRatio: W,
                fit: n.type === k.fO.USER ? v.L.COVER : void 0,
                blocked: g,
                ignored: _,
                channel: l,
                className: M.tile,
                inCall: !0,
                inPopout: h,
                onClick: I,
                onContextMenu: d,
                paused: !1,
                pulseSpeakingIndicator: !f.enabled,
                width: o,
                children: a && n.type === k.fO.USER && (0, r.jsx)(w.Z, {})
            },
            m
        );
    },
    H = i.memo(function (e) {
        var t;
        let { participant: i, channel: l, width: c } = e,
            { newestAnalyticsLocation: u } = (0, m.ZP)(f.Z.STAGE_TILE),
            p = (0, h.bp)(),
            C = l.getGuildId(),
            y = I.default.getId(),
            { simplifiedSettingsEnabled: x } = (0, E.Z)({ location: 'StageTile' });
        o()(null != C, 'Channel cannot be guildless');
        let { user: v } = i,
            O = (0, s.e7)([b.Z], () => b.Z.getParticipant(l.id, i.id), [l.id, i.id]),
            N = (0, s.e7)([T.ZP], () => T.ZP.isModerator(v.id, l.id), [l.id, v.id]);
        if (null == O || O.type === k.fO.ACTIVITY || O.type === k.fO.PRESENCE_EMBEDDED_ACTIVITY) return null;
        let P = (e) => {
                (0, g.h)({
                    type: a.ImpressionTypes.MENU,
                    name: a.ImpressionNames.CALL_TILE_CONTEXT_MENU,
                    properties: {
                        location: 'StageTile',
                        is_tile_owner: v.id === y,
                        tile_type: e
                    }
                });
            },
            S = (e, t, i, o) => {
                switch (e.type) {
                    case k.fO.HIDDEN_STREAM:
                    case k.fO.STREAM:
                        P(k.TH.STREAM),
                            (0, d.jW)(
                                t,
                                async () => {
                                    let { default: t } = await n.e('22183').then(n.bind(n, 987281));
                                    return (n) =>
                                        (0, r.jsx)(
                                            t,
                                            D(L({}, n), {
                                                stream: e.stream,
                                                appContext: p,
                                                exitFullscreen: () => {},
                                                onInteraction: (0, _.u)('StreamContextMenu', u, {
                                                    entrypoint: o,
                                                    targetUserId: v.id,
                                                    tileType: k.TH.STREAM
                                                })
                                            })
                                        );
                                },
                                { context: p }
                            );
                        return;
                    case k.fO.USER:
                    default:
                        if ((P(k.TH.USER), x && i))
                            return (0, j.D)(t, v, l, { context: p }, (e, t) =>
                                (0, _.o)({
                                    menuName: e,
                                    menuItemProps: t,
                                    entrypoint: k.A5.THREE_DOT,
                                    targetUserId: v.id,
                                    location: u,
                                    tileType: k.TH.USER
                                })
                            );
                        (0, d.jW)(
                            t,
                            async () => {
                                let { default: e } = await Promise.all([n.e('79695'), n.e('98783'), n.e('97589'), n.e('7717'), n.e('74800')]).then(n.bind(n, 757387));
                                return (t) =>
                                    (0, r.jsx)(
                                        e,
                                        D(L({}, t), {
                                            user: v,
                                            guildId: C,
                                            channel: l,
                                            showMediaItems: !0,
                                            showStageChannelItems: !0,
                                            showChatItems: !1,
                                            onInteraction: (0, _.u)('GuildChannelUserContextMenu', u, {
                                                targetUserId: v.id,
                                                tileType: k.TH.USER
                                            })
                                        })
                                    );
                            },
                            { context: p }
                        );
                }
            };
        return O.type !== k.fO.USER || (null == (t = O.voiceState) ? void 0 : t.selfVideo)
            ? (0, r.jsx)(B, {
                  stageParticipant: i,
                  rtcParticipant: O,
                  channel: l,
                  guildId: C,
                  user: v,
                  width: c,
                  isModerator: N,
                  onContextMenu: S,
                  inPopout: p === R.IlC.POPOUT
              })
            : (0, r.jsx)(U, {
                  stageParticipant: i,
                  rtcParticipant: O,
                  channel: l,
                  guildId: C,
                  user: v,
                  width: c,
                  isModerator: N,
                  onContextMenu: S,
                  inPopout: p === R.IlC.POPOUT
              });
    });
