n.d(t, { Z: () => b });
var r = n(255367),
    l = n(73800),
    i = n(366594),
    a = n(442837),
    o = n(780384),
    u = n(481060),
    s = n(435064),
    c = n(39604),
    d = n(175470),
    f = n(569545),
    p = n(314910),
    m = n(269746);
function g(e) {
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
let E = { visibility: 'hidden' },
    h = {
        precision: 0.0001,
        duration: 300
    },
    v = {
        tension: 150,
        friction: 20,
        precision: 0.0001,
        bounce: 0
    },
    S = { duration: 1000 };
function b(e) {
    let { stream: t, inPopout: n } = e,
        { reducedMotion: b } = l.useContext(o.Sf),
        O = (0, l.useRef)(null),
        y = d.n.getState().clipsButtonRef,
        Z = (0, f.V9)(t),
        j = (0, a.e7)([s.Z], () => s.Z.getActiveAnimation()),
        _ = (0, a.Wu)([s.Z], () => s.Z.getStreamClipAnimations(Z)),
        I = (0, l.useRef)(void 0);
    l.useEffect(
        () => () => {
            (0, c.Gh)(Z);
        },
        [Z]
    );
    let w = () => {
            var e;
            let t = null == (e = O.current) ? void 0 : e.getBoundingClientRect();
            return null == t || n
                ? E
                : {
                      width: t.width,
                      height: t.height,
                      top: t.top,
                      left: t.left
                  };
        },
        P = (e) => {
            let t = null == y ? void 0 : y.getBoundingClientRect();
            if (((I.current = t), e.timestamp !== j || null == t || n)) return E;
            let { top: r, left: l } = t;
            return {
                top: r + 36,
                left: l - 216,
                height: 151,
                width: 268
            };
        },
        A = (0, l.useRef)(null),
        x = (0, u.Yzy)(
            _,
            {
                keys: (e) => e.timestamp,
                ref: A,
                from: { opacity: 0.2 },
                enter: { opacity: 0 },
                config: h
            },
            'animate-always'
        ),
        R = (0, l.useRef)(null),
        N = (0, u.Yzy)(
            _,
            {
                ref: R,
                keys: (e) => e.timestamp,
                from: (e) =>
                    g(
                        {
                            position: 'fixed',
                            visibility: 'hidden',
                            opacity: 1
                        },
                        b.enabled ? P(e) : w()
                    ),
                enter: (e) => [
                    g(
                        {
                            opacity: 1,
                            visibility: 'visible'
                        },
                        P(e)
                    )
                ],
                leave: g(
                    { opacity: 0 },
                    !b.enabled &&
                        g(
                            {
                                height: 0,
                                width: 0
                            },
                            (() => {
                                if (null != I.current)
                                    return {
                                        top: I.current.top + 12,
                                        left: I.current.left + 12
                                    };
                            })()
                        )
                ),
                config: b.enabled ? S : v,
                onRest: (e, t) => {
                    null != t.item && null != _.find((e) => e.timestamp === t.item.timestamp) && (0, c.Gh)(Z, t.item.timestamp);
                }
            },
            'animate-always'
        );
    return (
        (0, i.useChain)([A, R], [0, 0.1], 3000),
        (0, r.jsxs)(r.Fragment, {
            children: [
                (0, r.jsx)('div', {
                    className: m.hidden,
                    ref: O
                }),
                x(
                    (e, t) =>
                        null != t &&
                        (0, r.jsx)(i.animated.div, {
                            className: m.whiteFlash,
                            style: e
                        })
                ),
                (0, r.jsx)(p.ZP, {
                    children: (0, r.jsx)('div', {
                        className: m.hidden,
                        children: N(
                            (e, t, n, l) =>
                                (null == t ? void 0 : t.thumbnail) != null &&
                                (0, r.jsx)(i.animated.img, {
                                    src: t.thumbnail,
                                    className: m.movingImage,
                                    style: e
                                })
                        )
                    })
                })
            ]
        })
    );
}
