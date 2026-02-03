n.d(t, {
    A: () => I,
}),
    n(896048);
var r = n(627968),
    l = n(64700),
    i = n(503698),
    s = n.n(i),
    a = n(92674),
    o = n(397927),
    c = n(475743),
    u = n(216418),
    d = n(80051),
    p = n(961350),
    h = n(430452),
    g = n(203982),
    f = n(220144),
    m = n(175203),
    b = n(306852),
    A = n(947580),
    y = n(163432),
    O = n(652215),
    j = n(806931),
    x = n(403264),
    _ = n(542411);

function v(e) {
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

function E(e, t) {
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
let C = 16 / 9,
    S = 8 + y.Vp;

function I(e) {
    var t;
    let n,
        {
            onSelectParticipant: i,
            onContextMenuParticipant: I,
            onFullscreenParticipant: N,
            participants: T,
            filteredParticipants: P,
            popoutType: w,
            inCall: R,
            channel: D,
            selectedParticipant: L,
            showParticipants: M = !0,
            className: G,
            width: k,
            height: U,
            layout: V,
            idle: B,
        } = e,
        H = h.A.getVideoComponent(),
        F = p.default.getId(),
        [Y, K] = l.useState(null),
        W = (0, c.A)(Y),
        [z, X] = l.useState(!0),
        [q, J] = l.useState(!1),
        Q = L.type === j.lp.ACTIVITY,
        Z = (0, u.A)(Q ? L.applicationId : void 0),
        $ = !Q && null != L.streamId,
        ee = U <= 2 * S + 144,
        et = M && !ee,
        en = (0, c.A)(et),
        er = V === O.DUB.MINIMUM || V === O.DUB.NORMAL,
        el = !ee && (!er || Q),
        ei = (0, f.A)(el, 100),
        es = (null != (t = (0, c.A)(L.id)) ? t : L.id) !== L.id,
        ea = 0;
    (Q || et) && (ea += 72), Q && !et && (el ? (ea += 48) : (ea += 8)), et && (ea += 0.5 * S + 8);
    let eo = l.useMemo(
            () => (Q && Z ? k / (U - 2 * ea) : $ && null != Y && Y.width > 0 && Y.height > 0 ? Y.width / Y.height : C),
            [$, Y, Q, k, U, ea, Z],
        ),
        ec = U - 2 * ea,
        eu = Q && Z ? k : ec * eo,
        ed = Math.floor(Math.min(k, eu) / eo),
        ep = U > k / eo + 72 + S + 8;
    n = et || Q ? (et ? -16 : -8) : 40 + Math.max(0, 72 - (U - ed) / 2);
    let eh = 8 + Math.max(0, 72 - (U - ed) / 2);
    l.useEffect(() => {
        let e = setTimeout(() => {
            X(!1);
        }, 250);
        return () => {
            clearTimeout(e);
        };
    }, []);
    let eg = z || null == W,
        ef = eg ? "animate-never" : "animate-always",
        em = (0, o.zhh)(
            {
                value: +!!et,
                delay: ep || !et ? 0 : 100,
                config: E(v({}, a.config.stiff), {
                    clamp: !0,
                }),
                onStart: () => J(!0),
                onChange: () => g._.dispatch(O.jej.REMEASURE_TARGET),
                onRest: () => {
                    J(!1), g._.dispatch(O.jej.REMEASURE_TARGET);
                },
            },
            ef,
        ),
        eb = (0, o.zhh)(
            {
                value: +!!et,
                config: E(v({}, a.config.stiff), {
                    clamp: !0,
                }),
            },
            ef,
        ),
        eA = (0, o.zhh)(
            {
                value: eu,
                config: E(v({}, a.config.stiff), {
                    clamp: !0,
                }),
            },
            (en === et && eb.value.idle && !ei) || es || eg ? "animate-never" : "animate-always",
        ),
        ey = (0, o.zhh)(
            {
                value: n,
                config: E(v({}, a.config.stiff), {
                    clamp: !0,
                }),
            },
            ef,
        ),
        eO = (0, o.pnh)(
            L,
            {
                keys: (e) => (null == e ? void 0 : e.id),
                config: E(v({}, a.config.stiff), {
                    clamp: !0,
                }),
                initial: null,
                from: {
                    opacity: 0,
                },
                enter: {
                    opacity: 1,
                },
                leave: {
                    opacity: 0,
                },
            },
            ef,
        ),
        ej = l.useCallback((e) => {
            K(e), X(!1);
        }, []),
        ex = et ? [] : (0, A.Cf)(T, L, F),
        { visibleParticipants: e_, participantTileWidth: ev } = (0, y.i4)(k, P);
    return (0, r.jsxs)("div", {
        className: s()(_.zr, x.tR, G),
        children: [
            (0, r.jsxs)("div", {
                className: _.QX,
                style: {
                    opacity: $ && z ? 0 : 1,
                },
                children: [
                    (0, r.jsxs)(a.animated.div, {
                        className: _.pc,
                        style: {
                            top: eb.value.to((e) => (-e * S) / 2),
                        },
                        children: [
                            (0, r.jsx)(a.animated.div, {
                                style: {
                                    width: eA.value,
                                },
                                className: _.tN,
                                children: (0, r.jsx)("div", {
                                    className: x.xS,
                                    style: {
                                        aspectRatio: eo,
                                    },
                                    children: eO((e, t, n) => {
                                        let { key: l } = n;
                                        return null != t
                                            ? (0, r.jsx)(
                                                  a.animated.div,
                                                  {
                                                      className: x.qX,
                                                      style: e,
                                                      children: (0, r.jsx)(m.Ay, {
                                                          focused: !0,
                                                          noBorder: eu >= k || ec >= U,
                                                          channel: D,
                                                          className: x.JS,
                                                          videoComponent: H,
                                                          width: k,
                                                          participant: t,
                                                          onClick: i,
                                                          onDoubleClick: N,
                                                          onContextMenu: I,
                                                          onVideoResize: ej,
                                                          inCall: R,
                                                          popoutType: w,
                                                          controlsBottom: eh,
                                                      }),
                                                  },
                                                  l,
                                              )
                                            : null;
                                    }),
                                }),
                            }),
                            el
                                ? (0, r.jsx)(a.animated.div, {
                                      className: s()(_.$l, {
                                          [_.N7]: B,
                                      }),
                                      style: {
                                          bottom: ey.value,
                                      },
                                      children: (0, r.jsx)(d.A, {
                                          channelId: D.id,
                                          isParticipantsOpen: M,
                                          isVertical: !0,
                                      }),
                                  })
                                : null,
                        ],
                    }),
                    (0, r.jsx)(a.animated.div, {
                        className: _.Vx,
                        style: {
                            translateY: em.value.to((e) => (e * S) / 2),
                            opacity: em.value,
                            visibility: em.value.to((e) => (0 === e ? "hidden" : "visible")),
                        },
                        children: (0, r.jsx)(y.Ay, {
                            channel: D,
                            onClick: i,
                            onContextMenu: I,
                            onDoubleClick: N,
                            participants: e_,
                            participantTileWidth: ev,
                            selectedParticipantId: L.id,
                            inCall: R,
                            popoutType: w,
                            paused: q || !M,
                        }),
                    }),
                ],
            }),
            ex.length > 0
                ? (0, r.jsx)(b.A, {
                      onContextMenuParticipant: I,
                      width: k,
                      height: U,
                      channel: D,
                      participants: ex,
                      onSelectParticipant: i,
                  })
                : null,
        ],
    });
}
