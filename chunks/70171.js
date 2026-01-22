n.d(t, { A: () => E });
var l = n(627968),
    r = n(64700),
    i = n(432022),
    a = n(311907),
    s = n(582754),
    o = n(397927),
    c = n(164617),
    u = n(274372),
    d = n(399925),
    f = n(361157),
    p = n(652896),
    b = n(750506),
    g = n(353839);
function m(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            l = Object.keys(n);
        "function" == typeof Object.getOwnPropertySymbols &&
            (l = l.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                }),
            )),
            l.forEach(function (t) {
                var l;
                (l = n[t]),
                    t in e
                        ? Object.defineProperty(e, t, {
                              value: l,
                              enumerable: !0,
                              configurable: !0,
                              writable: !0,
                          })
                        : (e[t] = l);
            });
    }
    return e;
}
let h = { visibility: "hidden" },
    A = {
        precision: 0.0001,
        duration: 300,
    },
    y = {
        tension: 150,
        friction: 20,
        precision: 0.0001,
        bounce: 0,
    },
    _ = { duration: 1000 };
function E(e) {
    let { stream: t, popoutType: n } = e,
        { reducedMotion: E } = r.useContext(s.CZ),
        v = (0, r.useRef)(null),
        O = f.K.getState().clipsButtonRef,
        x = (0, p._z)(t),
        S = (0, a.bG)([u.A], () => u.A.getActiveAnimation()),
        N = (0, a.yK)([u.A], () => u.A.getStreamClipAnimations(x)),
        C = (0, r.useRef)(void 0);
    r.useEffect(
        () => () => {
            (0, d.MI)(x);
        },
        [x],
    );
    let j = (e) => {
            if (n !== c.N.NO_POPOUT) return h;
            let t = null == O ? void 0 : O.getBoundingClientRect();
            if (((C.current = t), e.timestamp !== S || null == t)) return h;
            let { top: l, left: r } = t;
            return {
                top: l + 36,
                left: r - 216,
                height: 151,
                width: 268,
            };
        },
        T = (0, r.useRef)(null),
        I = (0, o.pnh)(
            N,
            {
                keys: (e) => e.timestamp,
                ref: T,
                from: { opacity: 0.2 },
                enter: { opacity: 0 },
                config: A,
            },
            "animate-always",
        ),
        w = (0, r.useRef)(null),
        R = (0, o.pnh)(
            N,
            {
                ref: w,
                keys: (e) => e.timestamp,
                from: (e) =>
                    m(
                        {
                            position: "fixed",
                            visibility: "hidden",
                            opacity: 1,
                        },
                        E.enabled
                            ? j(e)
                            : (() => {
                                  var e;
                                  if (n !== c.N.NO_POPOUT) return h;
                                  let t = null == (e = v.current) ? void 0 : e.getBoundingClientRect();
                                  return null == t
                                      ? h
                                      : {
                                            width: t.width,
                                            height: t.height,
                                            top: t.top,
                                            left: t.left,
                                        };
                              })(),
                    ),
                enter: (e) => [
                    m(
                        {
                            opacity: 1,
                            visibility: "visible",
                        },
                        j(e),
                    ),
                ],
                leave: m(
                    { opacity: 0 },
                    !E.enabled &&
                        m(
                            {
                                height: 0,
                                width: 0,
                            },
                            (() => {
                                if (null != C.current)
                                    return {
                                        top: C.current.top + 12,
                                        left: C.current.left + 12,
                                    };
                            })(),
                        ),
                ),
                config: E.enabled ? _ : y,
                onRest: (e, t) => {
                    null != t.item &&
                        null != N.find((e) => e.timestamp === t.item.timestamp) &&
                        (0, d.MI)(x, t.item.timestamp);
                },
            },
            "animate-always",
        );
    return (
        (0, i.useChain)([T, w], [0, 0.1], 3000),
        (0, l.jsxs)(l.Fragment, {
            children: [
                (0, l.jsx)("div", {
                    className: g.R,
                    ref: v,
                }),
                I(
                    (e, t) =>
                        null != t &&
                        (0, l.jsx)(i.animated.div, {
                            className: g.w5,
                            style: e,
                        }),
                ),
                (0, l.jsx)(b.Ay, {
                    children: (0, l.jsx)("div", {
                        className: g.R,
                        children: R(
                            (e, t, n, r) =>
                                (null == t ? void 0 : t.thumbnail) != null &&
                                (0, l.jsx)(i.animated.img, {
                                    src: t.thumbnail,
                                    className: g.yI,
                                    style: e,
                                }),
                        ),
                    }),
                }),
            ],
        })
    );
}
