n.d(t, {
    Q: () => k,
    Z: () => H,
});
var r = n(54381),
    i = n(473749),
    l = n(512722),
    a = n.n(l),
    s = n(990547),
    o = n(442837),
    c = n(481060),
    d = n(475179),
    u = n(239091),
    p = n(872810),
    h = n(100527),
    f = n(906732),
    g = n(213609),
    m = n(358221),
    b = n(795318),
    y = n(258609),
    O = n(569545),
    j = n(102172),
    x = n(728285),
    v = n(352978),
    C = n(880395),
    I = n(670188),
    _ = n(199902),
    S = n(314897),
    E = n(430824),
    Z = n(496675),
    P = n(979651),
    T = n(88751),
    N = n(252132),
    R = n(248400),
    w = n(981631),
    A = n(354459),
    D = n(688267);
function L(e) {
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
        let {
                stageParticipant: t,
                rtcParticipant: n,
                channel: l,
                guildId: a,
                user: s,
                width: o,
                isModerator: d,
                onContextMenu: u,
                popoutType: p,
            } = e,
            h = i.useRef(null),
            { reducedMotion: f } = i.useContext(c.Sfi),
            { blocked: g, ignored: m, id: b } = t;
        return (0, r.jsx)(I.Z, {
            targetElementRef: h,
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
                                innerRef: h,
                                onContextMenu: (e) => u(n, e),
                            },
                            e,
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
                                    popoutType: p,
                                    pulseSpeakingIndicator: !f.enabled,
                                    width: o,
                                    onContextMenu: u,
                                    children: d && (0, r.jsx)(R.Z, {}),
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
                isModerator: s,
                onContextMenu: u,
                popoutType: h,
            } = e,
            { reducedMotion: f } = i.useContext(c.Sfi),
            { id: g, blocked: b, ignored: x } = t,
            C = (0, o.Wu)([_.Z], () => _.Z.getAllActiveStreams(), []),
            { selectedParticipant: I, largeStream: S } = (0, o.cj)([m.Z], () => ({
                selectedParticipant: null != l ? m.Z.getSelectedParticipant(l.id) : null,
                largeStream: null != l && m.Z.getStageStreamSize(l.id),
            })),
            T = i.useCallback(
                (e, t) => {
                    if (
                        e.type === A.fO.STREAM &&
                        0 === C.filter((t) => (0, O.V9)(t) === e.id && t.state !== w.jm8.ENDED).length
                    ) {
                        if (!(0, j.p9)(l, P.Z, E.Z, Z.Z, y.default)[0]) return;
                        (0, p.rn)((0, O.my)(e.id), { forceMultiple: t.shiftKey });
                    }
                    (null == I ? void 0 : I.id) === e.id
                        ? S
                            ? (d.Z.selectParticipant(l.id, null), d.Z.updateStageStreamSize(l.id, !1))
                            : d.Z.updateStageStreamSize(l.id, !0)
                        : (d.Z.updateStageStreamSize(l.id, !1), d.Z.selectParticipant(l.id, e.id));
                },
                [C, l, I, S],
            );
        return (0, r.jsx)(
            N.Z,
            {
                participant: n,
                aspectRatio: k,
                fit: n.type === A.fO.USER ? v.L.COVER : void 0,
                blocked: b,
                ignored: x,
                channel: l,
                className: D.tile,
                inCall: !0,
                popoutType: h,
                onClick: T,
                onContextMenu: u,
                pulseSpeakingIndicator: !f.enabled,
                width: a,
                children: s && n.type === A.fO.USER && (0, r.jsx)(R.Z, {}),
            },
            g,
        );
    },
    H = i.memo(function (e) {
        var t;
        let { participant: i, channel: l, width: c, popoutType: d } = e,
            { newestAnalyticsLocation: p } = (0, f.ZP)(h.Z.STAGE_TILE),
            y = (0, x.bp)(),
            O = l.getGuildId(),
            j = S.default.getId();
        a()(null != O, "Channel cannot be guildless");
        let { user: v } = i,
            I = (0, o.e7)([m.Z], () => m.Z.getParticipant(l.id, i.id), [l.id, i.id]),
            _ = (0, o.e7)([T.ZP], () => T.ZP.isModerator(v.id, l.id), [l.id, v.id]);
        if (null == I || I.type === A.fO.ACTIVITY) return null;
        let E = (e) => {
                (0, g.h)({
                    type: s.ImpressionTypes.MENU,
                    name: s.ImpressionNames.CALL_TILE_CONTEXT_MENU,
                    properties: {
                        location: "StageTile",
                        is_tile_owner: v.id === j,
                        tile_type: e,
                    },
                });
            },
            Z = (e, t, i, a) => {
                switch (e.type) {
                    case A.fO.HIDDEN_STREAM:
                    case A.fO.STREAM:
                        E(A.TH.STREAM),
                            (0, u.jW)(
                                t,
                                async () => {
                                    let { default: t } = await n.e("22183").then(n.bind(n, 987281));
                                    return (n) =>
                                        (0, r.jsx)(
                                            t,
                                            M(L({}, n), {
                                                stream: e.stream,
                                                appContext: y,
                                                exitFullscreen: () => {},
                                                onInteraction: (0, b.u)("StreamContextMenu", p, {
                                                    entrypoint: a,
                                                    targetUserId: v.id,
                                                    tileType: A.TH.STREAM,
                                                }),
                                            }),
                                        );
                                },
                                { context: y },
                            );
                        return;
                    case A.fO.USER:
                    default:
                        if ((E(A.TH.USER), i))
                            return (0, C.D)(t, v, l, { context: y }, (e, t) =>
                                (0, b.o)({
                                    menuName: e,
                                    menuItemProps: t,
                                    entrypoint: A.A5.THREE_DOT,
                                    targetUserId: v.id,
                                    location: p,
                                    tileType: A.TH.USER,
                                }),
                            );
                        (0, u.jW)(
                            t,
                            async () => {
                                let { default: e } = await Promise.all([
                                    n.e("79695"),
                                    n.e("66165"),
                                    n.e("8982"),
                                    n.e("7717"),
                                    n.e("9393"),
                                ]).then(n.bind(n, 757387));
                                return (t) =>
                                    (0, r.jsx)(
                                        e,
                                        M(L({}, t), {
                                            user: v,
                                            guildId: O,
                                            channel: l,
                                            showMediaItems: !0,
                                            showStageChannelItems: !0,
                                            showChatItems: !1,
                                            onInteraction: (0, b.u)("GuildChannelUserContextMenu", p, {
                                                targetUserId: v.id,
                                                tileType: A.TH.USER,
                                            }),
                                        }),
                                    );
                            },
                            { context: y },
                        );
                }
            };
        return I.type !== A.fO.USER || (null == (t = I.voiceState) ? void 0 : t.selfVideo)
            ? (0, r.jsx)(G, {
                  stageParticipant: i,
                  rtcParticipant: I,
                  channel: l,
                  guildId: O,
                  user: v,
                  width: c,
                  isModerator: _,
                  onContextMenu: Z,
                  popoutType: d,
              })
            : (0, r.jsx)(U, {
                  stageParticipant: i,
                  rtcParticipant: I,
                  channel: l,
                  guildId: O,
                  user: v,
                  width: c,
                  isModerator: _,
                  onContextMenu: Z,
                  popoutType: d,
              });
    });
