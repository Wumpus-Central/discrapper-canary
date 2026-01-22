n.d(t, {
    A: () => F,
    i: () => k,
});
var r = n(627968),
    l = n(64700),
    i = n(284009),
    a = n.n(i),
    s = n(110259),
    o = n(311907),
    c = n(397927),
    u = n(367513),
    d = n(442433),
    f = n(401843),
    p = n(793574),
    h = n(688810),
    b = n(139286),
    g = n(313961),
    m = n(480890),
    A = n(643501),
    y = n(652896),
    O = n(279250),
    j = n(267102),
    v = n(401901),
    x = n(326567),
    E = n(342296),
    _ = n(616356),
    C = n(961350),
    S = n(71393),
    I = n(576705),
    N = n(977997),
    T = n(312006),
    P = n(704384),
    w = n(289105),
    R = n(652215),
    D = n(806931),
    M = n(742149);

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

function G(e, t) {
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
                channel: i,
                guildId: a,
                user: s,
                width: o,
                isModerator: u,
                onContextMenu: d,
                popoutType: f,
            } = e,
            p = l.useRef(null),
            { reducedMotion: h } = l.useContext(c.CZY),
            { blocked: b, ignored: g, id: m } = t;
        return (0, r.jsx)(E.A, {
            targetElementRef: p,
            user: s,
            guildId: a,
            channelId: i.id,
            clickTrap: !0,
            children: (e) =>
                (0, r.jsx)(
                    c.DUT,
                    G(
                        L(
                            {
                                innerRef: p,
                                onContextMenu: (e) => d(n, e),
                            },
                            e,
                        ),
                        {
                            children: (0, r.jsx)(
                                P.A,
                                {
                                    participant: n,
                                    aspectRatio: k,
                                    blocked: b,
                                    ignored: g,
                                    channel: i,
                                    className: M.V,
                                    inCall: !0,
                                    popoutType: f,
                                    pulseSpeakingIndicator: !h.enabled,
                                    width: o,
                                    onContextMenu: d,
                                    children: u && (0, r.jsx)(w.A, {}),
                                },
                                m,
                            ),
                        },
                    ),
                ),
        });
    },
    V = (e) => {
        let {
                stageParticipant: t,
                rtcParticipant: n,
                channel: i,
                width: a,
                isModerator: s,
                onContextMenu: d,
                popoutType: p,
            } = e,
            { reducedMotion: h } = l.useContext(c.CZY),
            { id: b, blocked: m, ignored: j } = t,
            x = (0, o.yK)([_.A], () => _.A.getAllActiveStreams(), []),
            { selectedParticipant: E, largeStream: C } = (0, o.cf)([g.A], () => ({
                selectedParticipant: null != i ? g.A.getSelectedParticipant(i.id) : null,
                largeStream: null != i && g.A.getStageStreamSize(i.id),
            })),
            T = l.useCallback(
                (e, t) => {
                    if (
                        e.type === D.lp.STREAM &&
                        0 === x.filter((t) => (0, y._z)(t) === e.id && t.state !== R.XYD.ENDED).length
                    ) {
                        if (!(0, O.eo)(i, N.A, S.A, I.A, A.default)[0]) return;
                        (0, f.A9)((0, y.Iy)(e.id), {
                            forceMultiple: t.shiftKey,
                        });
                    }
                    (null == E ? void 0 : E.id) === e.id
                        ? C
                            ? (u.A.selectParticipant(i.id, null), u.A.updateStageStreamSize(i.id, !1))
                            : u.A.updateStageStreamSize(i.id, !0)
                        : (u.A.updateStageStreamSize(i.id, !1), u.A.selectParticipant(i.id, e.id));
                },
                [x, i, E, C],
            );
        return (0, r.jsx)(
            P.A,
            {
                participant: n,
                aspectRatio: k,
                fit: n.type === D.lp.USER ? v.$.COVER : void 0,
                blocked: m,
                ignored: j,
                channel: i,
                className: M.V,
                inCall: !0,
                popoutType: p,
                onClick: T,
                onContextMenu: d,
                pulseSpeakingIndicator: !h.enabled,
                width: a,
                children: s && n.type === D.lp.USER && (0, r.jsx)(w.A, {}),
            },
            b,
        );
    },
    F = l.memo(function (e) {
        var t;
        let { participant: l, channel: i, width: c, popoutType: u } = e,
            { newestAnalyticsLocation: f } = (0, h.Ay)(p.A.STAGE_TILE),
            A = (0, j.Us)(),
            y = i.getGuildId(),
            O = C.default.getId();
        a()(null != y, "Channel cannot be guildless");
        let { user: v } = l,
            E = (0, o.bG)([g.A], () => g.A.getParticipant(i.id, l.id), [i.id, l.id]),
            _ = (0, o.bG)([T.Ay], () => T.Ay.isModerator(v.id, i.id), [i.id, v.id]);
        if (null == E || E.type === D.lp.ACTIVITY) return null;
        let S = (e) => {
                (0, b.x)({
                    type: s.ImpressionTypes.MENU,
                    name: s.ImpressionNames.CALL_TILE_CONTEXT_MENU,
                    properties: {
                        location: "StageTile",
                        is_tile_owner: v.id === O,
                        tile_type: e,
                    },
                });
            },
            I = (e, t, l, a) => {
                switch (e.type) {
                    case D.lp.HIDDEN_STREAM:
                    case D.lp.STREAM:
                        S(D.qs.STREAM),
                            (0, d.L3)(
                                t,
                                async () => {
                                    let { default: t } = await n.e("66692").then(n.bind(n, 796175));
                                    return (n) =>
                                        (0, r.jsx)(
                                            t,
                                            G(L({}, n), {
                                                stream: e.stream,
                                                appContext: A,
                                                exitFullscreen: () => {},
                                                onInteraction: (0, m.s)("StreamContextMenu", f, {
                                                    entrypoint: a,
                                                    targetUserId: v.id,
                                                    tileType: D.qs.STREAM,
                                                }),
                                            }),
                                        );
                                },
                                {
                                    context: A,
                                },
                            );
                        return;
                    case D.lp.USER:
                    default:
                        if ((S(D.qs.USER), l))
                            return (0, x.r)(
                                t,
                                v,
                                i,
                                {
                                    context: A,
                                },
                                (e, t) =>
                                    (0, m.Y)({
                                        menuName: e,
                                        menuItemProps: t,
                                        entrypoint: D.GK.THREE_DOT,
                                        targetUserId: v.id,
                                        location: f,
                                        tileType: D.qs.USER,
                                    }),
                            );
                        (0, d.L3)(
                            t,
                            async () => {
                                let { default: e } = await Promise.all([
                                    n.e("97262"),
                                    n.e("29534"),
                                    n.e("55296"),
                                    n.e("84841"),
                                    n.e("91609"),
                                ]).then(n.bind(n, 107632));
                                return (t) =>
                                    (0, r.jsx)(
                                        e,
                                        G(L({}, t), {
                                            user: v,
                                            guildId: y,
                                            channel: i,
                                            showMediaItems: !0,
                                            showStageChannelItems: !0,
                                            showChatItems: !1,
                                            onInteraction: (0, m.s)("GuildChannelUserContextMenu", f, {
                                                targetUserId: v.id,
                                                tileType: D.qs.USER,
                                            }),
                                        }),
                                    );
                            },
                            {
                                context: A,
                            },
                        );
                }
            };
        return E.type !== D.lp.USER || (null == (t = E.voiceState) ? void 0 : t.selfVideo)
            ? (0, r.jsx)(V, {
                  stageParticipant: l,
                  rtcParticipant: E,
                  channel: i,
                  guildId: y,
                  user: v,
                  width: c,
                  isModerator: _,
                  onContextMenu: I,
                  popoutType: u,
              })
            : (0, r.jsx)(U, {
                  stageParticipant: l,
                  rtcParticipant: E,
                  channel: i,
                  guildId: y,
                  user: v,
                  width: c,
                  isModerator: _,
                  onContextMenu: I,
                  popoutType: u,
              });
    });
