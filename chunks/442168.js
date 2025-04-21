n.d(t, { Z: () => b });
var r = n(200651),
    l = n(192379),
    i = n(200100),
    a = n(442837),
    o = n(780384),
    s = n(481060),
    u = n(435064),
    c = n(39604),
    d = n(175470),
    f = n(569545),
    m = n(314910),
    p = n(83773);
function E(e) {
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
let g = { visibility: 'hidden' },
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
        y = (0, l.useRef)(null),
        O = d.n.getState().clipsButtonRef,
        Z = (0, f.V9)(t),
        j = (0, a.e7)([u.Z], () => u.Z.getActiveAnimation()),
        I = (0, a.Wu)([u.Z], () => u.Z.getStreamClipAnimations(Z)),
        _ = (0, l.useRef)(void 0);
    l.useEffect(
        () => () => {
            (0, c.Gh)(Z);
        },
        [Z]
    );
    let P = () => {
            var e;
            let t = null == (e = y.current) ? void 0 : e.getBoundingClientRect();
            return null == t || n
                ? g
                : {
                      width: t.width,
                      height: t.height,
                      top: t.top,
                      left: t.left
                  };
        },
        x = (e) => {
            let t = null == O ? void 0 : O.getBoundingClientRect();
            if (((_.current = t), e.timestamp !== j || null == t || n)) return g;
            let { top: r, left: l } = t;
            return {
                top: r + 36,
                left: l - 216,
                height: 151,
                width: 268
            };
        },
        w = (0, l.useRef)(null),
        A = (0, s.Yzy)(
            I,
            {
                keys: (e) => e.timestamp,
                ref: w,
                from: { opacity: 0.2 },
                enter: { opacity: 0 },
                config: h
            },
            'animate-always'
        ),
        R = (0, l.useRef)(null),
        N = (0, s.Yzy)(
            I,
            {
                ref: R,
                keys: (e) => e.timestamp,
                from: (e) =>
                    E(
                        {
                            position: 'fixed',
                            visibility: 'hidden',
                            opacity: 1
                        },
                        b.enabled ? x(e) : P()
                    ),
                enter: (e) => [
                    E(
                        {
                            opacity: 1,
                            visibility: 'visible'
                        },
                        x(e)
                    )
                ],
                leave: E(
                    { opacity: 0 },
                    !b.enabled &&
                        E(
                            {
                                height: 0,
                                width: 0
                            },
                            (() => {
                                if (null != _.current)
                                    return {
                                        top: _.current.top + 12,
                                        left: _.current.left + 12
                                    };
                            })()
                        )
                ),
                config: b.enabled ? S : v,
                onRest: (e, t) => {
                    null != t.item && null != I.find((e) => e.timestamp === t.item.timestamp) && (0, c.Gh)(Z, t.item.timestamp);
                }
            },
            'animate-always'
        );
    return (
        (0, i.useChain)([w, R], [0, 0.1], 3000),
        (0, r.jsxs)(r.Fragment, {
            children: [
                (0, r.jsx)('div', {
                    className: p.hidden,
                    ref: y
                }),
                A(
                    (e, t) =>
                        null != t &&
                        (0, r.jsx)(i.animated.div, {
                            className: p.whiteFlash,
                            style: e
                        })
                ),
                (0, r.jsx)(m.ZP, {
                    children: (0, r.jsx)('div', {
                        className: p.hidden,
                        children: N(
                            (e, t, n, l) =>
                                (null == t ? void 0 : t.thumbnail) != null &&
                                (0, r.jsx)(i.animated.img, {
                                    src: t.thumbnail,
                                    className: p.movingImage,
                                    style: e
                                })
                        )
                    })
                })
            ]
        })
    );
}
