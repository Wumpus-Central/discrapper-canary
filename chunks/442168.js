n.d(t, { Z: () => S });
var r = n(200651),
    l = n(192379),
    i = n(642128),
    a = n(442837),
    o = n(780384),
    s = n(481060),
    u = n(435064),
    c = n(39604),
    d = n(175470),
    f = n(569545),
    m = n(314910),
    p = n(83773);
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
    b = { duration: 1000 };
function S(e) {
    let { stream: t, inPopout: n } = e,
        { reducedMotion: S } = l.useContext(o.Sf),
        y = (0, l.useRef)(null),
        O = d.n.getState().clipsButtonRef,
        Z = (0, f.V9)(t),
        I = (0, a.e7)([u.Z], () => u.Z.getActiveAnimation()),
        j = (0, a.Wu)([u.Z], () => u.Z.getStreamClipAnimations(Z)),
        x = (0, l.useRef)();
    l.useEffect(
        () => () => {
            (0, c.Gh)(Z);
        },
        [Z]
    );
    let N = () => {
            var e;
            let t = null == (e = y.current) ? void 0 : e.getBoundingClientRect();
            return null == t || n
                ? E
                : {
                      width: t.width,
                      height: t.height,
                      top: t.top,
                      left: t.left
                  };
        },
        _ = (e) => {
            let t = null == O ? void 0 : O.getBoundingClientRect();
            if (((x.current = t), e.timestamp !== I || null == t || n)) return E;
            let { top: r, left: l } = t;
            return {
                top: r + 36,
                left: l - 216,
                height: 151,
                width: 268
            };
        },
        w = (0, l.useRef)(null),
        P = (0, s.Yzy)(
            j,
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
        A = (0, s.Yzy)(
            j,
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
                        S.enabled ? _(e) : N()
                    ),
                enter: (e) => [
                    g(
                        {
                            opacity: 1,
                            visibility: 'visible'
                        },
                        _(e)
                    )
                ],
                leave: g(
                    { opacity: 0 },
                    !S.enabled &&
                        g(
                            {
                                height: 0,
                                width: 0
                            },
                            (() => {
                                if (null != x.current)
                                    return {
                                        top: x.current.top + 12,
                                        left: x.current.left + 12
                                    };
                            })()
                        )
                ),
                config: S.enabled ? b : v,
                onRest: (e, t) => {
                    null != t.item && null != j.find((e) => e.timestamp === t.item.timestamp) && (0, c.Gh)(Z, t.item.timestamp);
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
                P(
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
                        children: A(
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
