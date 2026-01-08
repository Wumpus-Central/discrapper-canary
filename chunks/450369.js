n.d(t, {
    Q: () => L,
    Z: () => B,
});
var r = n(54381),
    i = n(473749),
    l = n(512722),
    a = n.n(l),
    o = n(990547),
    s = n(442837),
    c = n(481060),
    u = n(475179),
    d = n(239091),
    p = n(872810),
    f = n(100527),
    h = n(906732),
    g = n(213609),
    m = n(358221),
    b = n(795318),
    y = n(258609),
    v = n(569545),
    O = n(102172),
    j = n(728285),
    x = n(352978),
    C = n(880395),
    E = n(670188),
    S = n(199902),
    _ = n(314897),
    I = n(430824),
    P = n(496675),
    Z = n(979651),
    N = n(88751),
    T = n(252132),
    A = n(248400),
    w = n(981631),
    R = n(354459),
    D = n(688267);
function M(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            r = Object.keys(n);
        "function" == typeof Object.getOwnPropertySymbols &&
            (r = r.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                }),
            )),
            r.forEach(function (t) {
                var r;
                (r = n[t]),
                    t in e
                        ? Object.defineProperty(e, t, {
                              value: r,
                              enumerable: !0,
                              configurable: !0,
                              writable: !0,
                          })
                        : (e[t] = r);
            });
    }
    return e;
}
function k(e, t) {
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
let L = 16 / 9,
    U = (e) => {
        let {
                stageParticipant: t,
                rtcParticipant: n,
                channel: l,
                guildId: a,
                user: o,
                width: s,
                isModerator: u,
                onContextMenu: d,
                popoutType: p,
            } = e,
            f = i.useRef(null),
            { reducedMotion: h } = i.useContext(c.Sfi),
            { blocked: g, ignored: m, id: b } = t;
        return (0, r.jsx)(E.Z, {
            targetElementRef: f,
            user: o,
            guildId: a,
            channelId: l.id,
            clickTrap: !0,
            children: (e) =>
                (0, r.jsx)(
                    c.P3F,
                    k(
                        M(
                            {
                                innerRef: f,
                                onContextMenu: (e) => d(n, e),
                            },
                            e,
                        ),
                        {
                            children: (0, r.jsx)(
                                T.Z,
                                {
                                    participant: n,
                                    aspectRatio: L,
                                    blocked: g,
                                    ignored: m,
                                    channel: l,
                                    className: D.tile,
                                    inCall: !0,
                                    popoutType: p,
                                    pulseSpeakingIndicator: !h.enabled,
                                    width: s,
                                    onContextMenu: d,
                                    children: u && (0, r.jsx)(A.Z, {}),
                                },
                                b,
                            ),
                        },
                    ),
                ),
        });
    },
    G = (e) => {
        let {
                stageParticipant: t,
                rtcParticipant: n,
                channel: l,
                width: a,
                isModerator: o,
                onContextMenu: d,
                popoutType: f,
            } = e,
            { reducedMotion: h } = i.useContext(c.Sfi),
            { id: g, blocked: b, ignored: j } = t,
            C = (0, s.Wu)([S.Z], () => S.Z.getAllActiveStreams(), []),
            { selectedParticipant: E, largeStream: _ } = (0, s.cj)([m.Z], () => ({
                selectedParticipant: null != l ? m.Z.getSelectedParticipant(l.id) : null,
                largeStream: null != l && m.Z.getStageStreamSize(l.id),
            })),
            N = i.useCallback(
                (e, t) => {
                    if (
                        e.type === R.fO.STREAM &&
                        0 === C.filter((t) => (0, v.V9)(t) === e.id && t.state !== w.jm8.ENDED).length
                    ) {
                        if (!(0, O.p9)(l, Z.Z, I.Z, P.Z, y.default)[0]) return;
                        (0, p.rn)((0, v.my)(e.id), { forceMultiple: t.shiftKey });
                    }
                    (null == E ? void 0 : E.id) === e.id
                        ? _
                            ? (u.Z.selectParticipant(l.id, null), u.Z.updateStageStreamSize(l.id, !1))
                            : u.Z.updateStageStreamSize(l.id, !0)
                        : (u.Z.updateStageStreamSize(l.id, !1), u.Z.selectParticipant(l.id, e.id));
                },
                [C, l, E, _],
            );
        return (0, r.jsx)(
            T.Z,
            {
                participant: n,
                aspectRatio: L,
                fit: n.type === R.fO.USER ? x.L.COVER : void 0,
                blocked: b,
                ignored: j,
                channel: l,
                className: D.tile,
                inCall: !0,
                popoutType: f,
                onClick: N,
                onContextMenu: d,
                pulseSpeakingIndicator: !h.enabled,
                width: a,
                children: o && n.type === R.fO.USER && (0, r.jsx)(A.Z, {}),
            },
            g,
        );
    },
    B = i.memo(function (e) {
        var t;
        let { participant: i, channel: l, width: c, popoutType: u } = e,
            { newestAnalyticsLocation: p } = (0, h.ZP)(f.Z.STAGE_TILE),
            y = (0, j.bp)(),
            v = l.getGuildId(),
            O = _.default.getId();
        a()(null != v, "Channel cannot be guildless");
        let { user: x } = i,
            E = (0, s.e7)([m.Z], () => m.Z.getParticipant(l.id, i.id), [l.id, i.id]),
            S = (0, s.e7)([N.ZP], () => N.ZP.isModerator(x.id, l.id), [l.id, x.id]);
        if (null == E || E.type === R.fO.ACTIVITY) return null;
        let I = (e) => {
                (0, g.h)({
                    type: o.ImpressionTypes.MENU,
                    name: o.ImpressionNames.CALL_TILE_CONTEXT_MENU,
                    properties: {
                        location: "StageTile",
                        is_tile_owner: x.id === O,
                        tile_type: e,
                    },
                });
            },
            P = (e, t, i, a) => {
                switch (e.type) {
                    case R.fO.HIDDEN_STREAM:
                    case R.fO.STREAM:
                        I(R.TH.STREAM),
                            (0, d.jW)(
                                t,
                                async () => {
                                    let { default: t } = await n.e("22183").then(n.bind(n, 987281));
                                    return (n) =>
                                        (0, r.jsx)(
                                            t,
                                            k(M({}, n), {
                                                stream: e.stream,
                                                appContext: y,
                                                exitFullscreen: () => {},
                                                onInteraction: (0, b.u)("StreamContextMenu", p, {
                                                    entrypoint: a,
                                                    targetUserId: x.id,
                                                    tileType: R.TH.STREAM,
                                                }),
                                            }),
                                        );
                                },
                                { context: y },
                            );
                        return;
                    case R.fO.USER:
                    default:
                        if ((I(R.TH.USER), i))
                            return (0, C.D)(t, x, l, { context: y }, (e, t) =>
                                (0, b.o)({
                                    menuName: e,
                                    menuItemProps: t,
                                    entrypoint: R.A5.THREE_DOT,
                                    targetUserId: x.id,
                                    location: p,
                                    tileType: R.TH.USER,
                                }),
                            );
                        (0, d.jW)(
                            t,
                            async () => {
                                let { default: e } = await Promise.all([
                                    n.e("79695"),
                                    n.e("4040"),
                                    n.e("92524"),
                                    n.e("7717"),
                                    n.e("9393"),
                                ]).then(n.bind(n, 757387));
                                return (t) =>
                                    (0, r.jsx)(
                                        e,
                                        k(M({}, t), {
                                            user: x,
                                            guildId: v,
                                            channel: l,
                                            showMediaItems: !0,
                                            showStageChannelItems: !0,
                                            showChatItems: !1,
                                            onInteraction: (0, b.u)("GuildChannelUserContextMenu", p, {
                                                targetUserId: x.id,
                                                tileType: R.TH.USER,
                                            }),
                                        }),
                                    );
                            },
                            { context: y },
                        );
                }
            };
        return E.type !== R.fO.USER || (null == (t = E.voiceState) ? void 0 : t.selfVideo)
            ? (0, r.jsx)(G, {
                  stageParticipant: i,
                  rtcParticipant: E,
                  channel: l,
                  guildId: v,
                  user: x,
                  width: c,
                  isModerator: S,
                  onContextMenu: P,
                  popoutType: u,
              })
            : (0, r.jsx)(U, {
                  stageParticipant: i,
                  rtcParticipant: E,
                  channel: l,
                  guildId: v,
                  user: x,
                  width: c,
                  isModerator: S,
                  onContextMenu: P,
                  popoutType: u,
              });
    });
