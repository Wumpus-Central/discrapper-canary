n.d(t, {
    A: () => v,
});
var l = n(627968),
    r = n(64700),
    i = n(92674),
    a = n(311907),
    s = n(582754),
    o = n(397927),
    c = n(164617),
    u = n(274372),
    d = n(399925),
    h = n(361157),
    p = n(652896),
    f = n(750506),
    m = n(353839);

function g(e) {
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
let A = {
        visibility: "hidden",
    },
    b = {
        precision: 1e-4,
        duration: 300,
    },
    _ = {
        tension: 150,
        friction: 20,
        precision: 1e-4,
        bounce: 0,
    },
    y = {
        duration: 1e3,
    };

function v(e) {
    let { stream: t, popoutType: n } = e,
        { reducedMotion: v } = r.useContext(s.CZ),
        E = (0, r.useRef)(null),
        O = h.K.getState().clipsButtonRef,
        C = (0, p._z)(t),
        S = (0, a.bG)([u.A], () => u.A.getActiveAnimation()),
        x = (0, a.yK)([u.A], () => u.A.getStreamClipAnimations(C)),
        j = (0, r.useRef)(void 0);
    r.useEffect(
        () => () => {
            (0, d.MI)(C);
        },
        [C],
    );
    let I = (e) => {
            if (n !== c.N.NO_POPOUT) return A;
            let t = null == O ? void 0 : O.getBoundingClientRect();
            if (((j.current = t), e.timestamp !== S || null == t)) return A;
            let { top: l, left: r } = t;
            return {
                top: l + 36,
                left: r - 216,
                height: 151,
                width: 268,
            };
        },
        T = (0, r.useRef)(null),
        N = (0, o.pnh)(
            x,
            {
                keys: (e) => e.timestamp,
                ref: T,
                from: {
                    opacity: 0.2,
                },
                enter: {
                    opacity: 0,
                },
                config: b,
            },
            "animate-always",
        ),
        P = (0, r.useRef)(null),
        w = (0, o.pnh)(
            x,
            {
                ref: P,
                keys: (e) => e.timestamp,
                from: (e) =>
                    g(
                        {
                            position: "fixed",
                            visibility: "hidden",
                            opacity: 1,
                        },
                        v.enabled
                            ? I(e)
                            : (() => {
                                  var e;
                                  if (n !== c.N.NO_POPOUT) return A;
                                  let t = null == (e = E.current) ? void 0 : e.getBoundingClientRect();
                                  return null == t
                                      ? A
                                      : {
                                            width: t.width,
                                            height: t.height,
                                            top: t.top,
                                            left: t.left,
                                        };
                              })(),
                    ),
                enter: (e) => [
                    g(
                        {
                            opacity: 1,
                            visibility: "visible",
                        },
                        I(e),
                    ),
                ],
                leave: g(
                    {
                        opacity: 0,
                    },
                    !v.enabled &&
                        g(
                            {
                                height: 0,
                                width: 0,
                            },
                            (() => {
                                if (null != j.current)
                                    return {
                                        top: j.current.top + 12,
                                        left: j.current.left + 12,
                                    };
                            })(),
                        ),
                ),
                config: v.enabled ? y : _,
                onRest: (e, t) => {
                    null != t.item &&
                        null != x.find((e) => e.timestamp === t.item.timestamp) &&
                        (0, d.MI)(C, t.item.timestamp);
                },
            },
            "animate-always",
        );
    return (
        (0, i.useChain)([T, P], [0, 0.1], 3e3),
        (0, l.jsxs)(l.Fragment, {
            children: [
                (0, l.jsx)("div", {
                    className: m.R,
                    ref: E,
                }),
                N(
                    (e, t) =>
                        null != t &&
                        (0, l.jsx)(i.animated.div, {
                            className: m.w5,
                            style: e,
                        }),
                ),
                (0, l.jsx)(f.Ay, {
                    children: (0, l.jsx)("div", {
                        className: m.R,
                        children: w(
                            (e, t, n, r) =>
                                (null == t ? void 0 : t.thumbnail) != null &&
                                (0, l.jsx)(i.animated.img, {
                                    src: t.thumbnail,
                                    className: m.yI,
                                    style: e,
                                }),
                        ),
                    }),
                }),
            ],
        })
    );
}
