n.d(t, { Z: () => v });
var r = n(255367),
    l = n(73800),
    i = n(524979),
    a = n(442837),
    u = n(780384),
    o = n(481060),
    s = n(435064),
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
    S = {
        tension: 150,
        friction: 20,
        precision: 0.0001,
        bounce: 0
    },
    O = { duration: 1000 };
function v(e) {
    let { stream: t, inPopout: n } = e,
        { reducedMotion: v } = l.useContext(u.Sf),
        b = (0, l.useRef)(null),
        I = d.n.getState().clipsButtonRef,
        _ = (0, f.V9)(t),
        y = (0, a.e7)([s.Z], () => s.Z.getActiveAnimation()),
        Z = (0, a.Wu)([s.Z], () => s.Z.getStreamClipAnimations(_)),
        A = (0, l.useRef)(void 0);
    l.useEffect(
        () => () => {
            (0, c.Gh)(_);
        },
        [_]
    );
    let N = () => {
            var e;
            let t = null == (e = b.current) ? void 0 : e.getBoundingClientRect();
            return null == t || n
                ? g
                : {
                      width: t.width,
                      height: t.height,
                      top: t.top,
                      left: t.left
                  };
        },
        R = (e) => {
            let t = null == I ? void 0 : I.getBoundingClientRect();
            if (((A.current = t), e.timestamp !== y || null == t || n)) return g;
            let { top: r, left: l } = t;
            return {
                top: r + 36,
                left: l - 216,
                height: 151,
                width: 268
            };
        },
        P = (0, l.useRef)(null),
        T = (0, o.Yzy)(
            Z,
            {
                keys: (e) => e.timestamp,
                ref: P,
                from: { opacity: 0.2 },
                enter: { opacity: 0 },
                config: h
            },
            'animate-always'
        ),
        j = (0, l.useRef)(null),
        C = (0, o.Yzy)(
            Z,
            {
                ref: j,
                keys: (e) => e.timestamp,
                from: (e) =>
                    E(
                        {
                            position: 'fixed',
                            visibility: 'hidden',
                            opacity: 1
                        },
                        v.enabled ? R(e) : N()
                    ),
                enter: (e) => [
                    E(
                        {
                            opacity: 1,
                            visibility: 'visible'
                        },
                        R(e)
                    )
                ],
                leave: E(
                    { opacity: 0 },
                    !v.enabled &&
                        E(
                            {
                                height: 0,
                                width: 0
                            },
                            (() => {
                                if (null != A.current)
                                    return {
                                        top: A.current.top + 12,
                                        left: A.current.left + 12
                                    };
                            })()
                        )
                ),
                config: v.enabled ? O : S,
                onRest: (e, t) => {
                    null != t.item && null != Z.find((e) => e.timestamp === t.item.timestamp) && (0, c.Gh)(_, t.item.timestamp);
                }
            },
            'animate-always'
        );
    return (
        (0, i.useChain)([P, j], [0, 0.1], 3000),
        (0, r.jsxs)(r.Fragment, {
            children: [
                (0, r.jsx)('div', {
                    className: p.hidden,
                    ref: b
                }),
                T(
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
                        children: C(
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
