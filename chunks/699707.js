n.d(t, { A: () => I }), n(896048);
var r = n(627968),
    l = n(64700),
    i = n(503698),
    a = n.n(i),
    s = n(432022),
    o = n(397927),
    c = n(475743),
    u = n(216418),
    d = n(80051),
    f = n(961350),
    p = n(430452),
    h = n(203982),
    b = n(220144),
    g = n(175203),
    m = n(306852),
    A = n(947580),
    y = n(163432),
    O = n(652215),
    j = n(806931),
    v = n(403264),
    x = n(542411);
function E(e) {
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
function _(e, t) {
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
            selectedParticipant: M,
            showParticipants: L = !0,
            className: G,
            width: k,
            height: U,
            layout: V,
            idle: F,
        } = e,
        H = p.A.getVideoComponent(),
        B = f.default.getId(),
        [K, W] = l.useState(null),
        z = (0, c.A)(K),
        [Y, q] = l.useState(!0),
        [X, J] = l.useState(!1),
        Q = M.type === j.lp.ACTIVITY,
        Z = (0, u.A)(Q ? M.applicationId : void 0),
        $ = !Q && null != M.streamId,
        ee = U <= 2 * S + 144,
        et = L && !ee,
        en = (0, c.A)(et),
        er = V === O.DUB.MINIMUM || V === O.DUB.NORMAL,
        el = !ee && (!er || Q),
        ei = (0, b.A)(el, 100),
        ea = (null != (t = (0, c.A)(M.id)) ? t : M.id) !== M.id,
        es = 0;
    (Q || et) && (es += 72), Q && !et && (el ? (es += 48) : (es += 8)), et && (es += 0.5 * S + 8);
    let eo = l.useMemo(
            () => (Q && Z ? k / (U - 2 * es) : $ && null != K && K.width > 0 && K.height > 0 ? K.width / K.height : C),
            [$, K, Q, k, U, es, Z],
        ),
        ec = U - 2 * es,
        eu = Q && Z ? k : ec * eo,
        ed = Math.floor(Math.min(k, eu) / eo),
        ef = U > k / eo + 72 + S + 8;
    n = et || Q ? (et ? -16 : -8) : 40 + Math.max(0, 72 - (U - ed) / 2);
    let ep = 8 + Math.max(0, 72 - (U - ed) / 2);
    l.useEffect(() => {
        let e = setTimeout(() => {
            q(!1);
        }, 250);
        return () => {
            clearTimeout(e);
        };
    }, []);
    let eh = Y || null == z,
        eb = eh ? "animate-never" : "animate-always",
        eg = (0, o.zhh)(
            {
                value: +!!et,
                delay: ef || !et ? 0 : 100,
                config: _(E({}, s.config.stiff), { clamp: !0 }),
                onStart: () => J(!0),
                onChange: () => h._.dispatch(O.jej.REMEASURE_TARGET),
                onRest: () => {
                    J(!1), h._.dispatch(O.jej.REMEASURE_TARGET);
                },
            },
            eb,
        ),
        em = (0, o.zhh)(
            {
                value: +!!et,
                config: _(E({}, s.config.stiff), { clamp: !0 }),
            },
            eb,
        ),
        eA = (0, o.zhh)(
            {
                value: eu,
                config: _(E({}, s.config.stiff), { clamp: !0 }),
            },
            (en === et && em.value.idle && !ei) || ea || eh ? "animate-never" : "animate-always",
        ),
        ey = (0, o.zhh)(
            {
                value: n,
                config: _(E({}, s.config.stiff), { clamp: !0 }),
            },
            eb,
        ),
        eO = (0, o.pnh)(
            M,
            {
                keys: (e) => (null == e ? void 0 : e.id),
                config: _(E({}, s.config.stiff), { clamp: !0 }),
                initial: null,
                from: { opacity: 0 },
                enter: { opacity: 1 },
                leave: { opacity: 0 },
            },
            eb,
        ),
        ej = l.useCallback((e) => {
            W(e), q(!1);
        }, []),
        ev = et ? [] : (0, A.Cf)(T, M, B),
        { visibleParticipants: ex, participantTileWidth: eE } = (0, y.i4)(k, P);
    return (0, r.jsxs)("div", {
        className: a()(x.zr, v.tR, G),
        children: [
            (0, r.jsxs)("div", {
                className: x.QX,
                style: { opacity: $ && Y ? 0 : 1 },
                children: [
                    (0, r.jsxs)(s.animated.div, {
                        className: x.pc,
                        style: { top: em.value.to((e) => (-e * S) / 2) },
                        children: [
                            (0, r.jsx)(s.animated.div, {
                                style: { width: eA.value },
                                className: x.tN,
                                children: (0, r.jsx)("div", {
                                    className: v.xS,
                                    style: { aspectRatio: eo },
                                    children: eO((e, t, n) => {
                                        let { key: l } = n;
                                        return null != t
                                            ? (0, r.jsx)(
                                                  s.animated.div,
                                                  {
                                                      className: v.qX,
                                                      style: e,
                                                      children: (0, r.jsx)(g.Ay, {
                                                          focused: !0,
                                                          noBorder: eu >= k || ec >= U,
                                                          channel: D,
                                                          className: v.JS,
                                                          videoComponent: H,
                                                          width: k,
                                                          participant: t,
                                                          onClick: i,
                                                          onDoubleClick: N,
                                                          onContextMenu: I,
                                                          onVideoResize: ej,
                                                          inCall: R,
                                                          popoutType: w,
                                                          controlsBottom: ep,
                                                      }),
                                                  },
                                                  l,
                                              )
                                            : null;
                                    }),
                                }),
                            }),
                            el
                                ? (0, r.jsx)(s.animated.div, {
                                      className: a()(x.$l, { [x.N7]: F }),
                                      style: { bottom: ey.value },
                                      children: (0, r.jsx)(d.A, {
                                          channelId: D.id,
                                          isParticipantsOpen: L,
                                          isVertical: !0,
                                      }),
                                  })
                                : null,
                        ],
                    }),
                    (0, r.jsx)(s.animated.div, {
                        className: x.Vx,
                        style: {
                            translateY: eg.value.to((e) => (e * S) / 2),
                            opacity: eg.value,
                            visibility: eg.value.to((e) => (0 === e ? "hidden" : "visible")),
                        },
                        children: (0, r.jsx)(y.Ay, {
                            channel: D,
                            onClick: i,
                            onContextMenu: I,
                            onDoubleClick: N,
                            participants: ex,
                            participantTileWidth: eE,
                            selectedParticipantId: M.id,
                            inCall: R,
                            popoutType: w,
                            paused: X || !L,
                        }),
                    }),
                ],
            }),
            ev.length > 0
                ? (0, r.jsx)(m.A, {
                      onContextMenuParticipant: I,
                      width: k,
                      height: U,
                      channel: D,
                      participants: ev,
                      onSelectParticipant: i,
                  })
                : null,
        ],
    });
}
