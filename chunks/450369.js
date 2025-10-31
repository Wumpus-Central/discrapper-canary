n.d(t, {
    Q: () => k,
    Z: () => H,
});
var r = n(951288),
    i = n(647438),
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
    _ = n(258609),
    y = n(569545),
    x = n(102172),
    O = n(728285),
    j = n(352978),
    v = n(880395),
    C = n(670188),
    I = n(199902),
    S = n(314897),
    E = n(430824),
    Z = n(496675),
    P = n(979651),
    T = n(88751),
    N = n(252132),
    R = n(248400),
    w = n(981631),
    A = n(354459),
    D = n(375767);
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
        return (0, r.jsx)(C.Z, {
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
            { id: g, blocked: b, ignored: O } = t,
            v = (0, o.Wu)([I.Z], () => I.Z.getAllActiveStreams(), []),
            { selectedParticipant: C, largeStream: S } = (0, o.cj)([m.Z], () => ({
                selectedParticipant: null != l ? m.Z.getSelectedParticipant(l.id) : null,
                largeStream: null != l && m.Z.getStageStreamSize(l.id),
            })),
            T = i.useCallback(
                (e, t) => {
                    if (
                        e.type === A.fO.STREAM &&
                        0 === v.filter((t) => (0, y.V9)(t) === e.id && t.state !== w.jm8.ENDED).length
                    ) {
                        if (!(0, x.p9)(l, P.Z, E.Z, Z.Z, _.default)[0]) return;
                        (0, p.rn)((0, y.my)(e.id), { forceMultiple: t.shiftKey });
                    }
                    (null == C ? void 0 : C.id) === e.id
                        ? S
                            ? (d.Z.selectParticipant(l.id, null), d.Z.updateStageStreamSize(l.id, !1))
                            : d.Z.updateStageStreamSize(l.id, !0)
                        : (d.Z.updateStageStreamSize(l.id, !1), d.Z.selectParticipant(l.id, e.id));
                },
                [v, l, C, S],
            );
        return (0, r.jsx)(
            N.Z,
            {
                participant: n,
                aspectRatio: k,
                fit: n.type === A.fO.USER ? j.L.COVER : void 0,
                blocked: b,
                ignored: O,
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
            _ = (0, O.bp)(),
            y = l.getGuildId(),
            x = S.default.getId();
        a()(null != y, "Channel cannot be guildless");
        let { user: j } = i,
            C = (0, o.e7)([m.Z], () => m.Z.getParticipant(l.id, i.id), [l.id, i.id]),
            I = (0, o.e7)([T.ZP], () => T.ZP.isModerator(j.id, l.id), [l.id, j.id]);
        if (null == C || C.type === A.fO.ACTIVITY) return null;
        let E = (e) => {
                (0, g.h)({
                    type: s.ImpressionTypes.MENU,
                    name: s.ImpressionNames.CALL_TILE_CONTEXT_MENU,
                    properties: {
                        location: "StageTile",
                        is_tile_owner: j.id === x,
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
                                                appContext: _,
                                                exitFullscreen: () => {},
                                                onInteraction: (0, b.u)("StreamContextMenu", p, {
                                                    entrypoint: a,
                                                    targetUserId: j.id,
                                                    tileType: A.TH.STREAM,
                                                }),
                                            }),
                                        );
                                },
                                { context: _ },
                            );
                        return;
                    case A.fO.USER:
                    default:
                        if ((E(A.TH.USER), i))
                            return (0, v.D)(t, j, l, { context: _ }, (e, t) =>
                                (0, b.o)({
                                    menuName: e,
                                    menuItemProps: t,
                                    entrypoint: A.A5.THREE_DOT,
                                    targetUserId: j.id,
                                    location: p,
                                    tileType: A.TH.USER,
                                }),
                            );
                        (0, u.jW)(
                            t,
                            async () => {
                                let { default: e } = await Promise.all([
                                    n.e("79695"),
                                    n.e("98783"),
                                    n.e("8982"),
                                    n.e("7717"),
                                    n.e("52021"),
                                ]).then(n.bind(n, 757387));
                                return (t) =>
                                    (0, r.jsx)(
                                        e,
                                        M(L({}, t), {
                                            user: j,
                                            guildId: y,
                                            channel: l,
                                            showMediaItems: !0,
                                            showStageChannelItems: !0,
                                            showChatItems: !1,
                                            onInteraction: (0, b.u)("GuildChannelUserContextMenu", p, {
                                                targetUserId: j.id,
                                                tileType: A.TH.USER,
                                            }),
                                        }),
                                    );
                            },
                            { context: _ },
                        );
                }
            };
        return C.type !== A.fO.USER || (null == (t = C.voiceState) ? void 0 : t.selfVideo)
            ? (0, r.jsx)(G, {
                  stageParticipant: i,
                  rtcParticipant: C,
                  channel: l,
                  guildId: y,
                  user: j,
                  width: c,
                  isModerator: I,
                  onContextMenu: Z,
                  popoutType: d,
              })
            : (0, r.jsx)(U, {
                  stageParticipant: i,
                  rtcParticipant: C,
                  channel: l,
                  guildId: y,
                  user: j,
                  width: c,
                  isModerator: I,
                  onContextMenu: Z,
                  popoutType: d,
              });
    });
