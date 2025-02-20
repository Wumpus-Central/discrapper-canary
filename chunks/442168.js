n.d(t, { Z: () => E });
var r = n(200651),
    l = n(192379),
    i = n(642128),
    a = n(442837),
    o = n(780384),
    s = n(481060),
    c = n(435064),
    u = n(39604),
    d = n(175470),
    f = n(569545),
    m = n(314910),
    p = n(430688);
function h(e) {
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
let v = { visibility: 'hidden' },
    g = {
        precision: 0.0001,
        duration: 300
    },
    b = {
        tension: 150,
        friction: 20,
        precision: 0.0001,
        bounce: 0
    },
    y = { duration: 1000 };
function E(e) {
    let { stream: t, inPopout: n } = e,
        { reducedMotion: E } = l.useContext(o.Sf),
        O = (0, l.useRef)(null),
        S = d.n.getState().clipsButtonRef,
        j = (0, f.V9)(t),
        x = (0, a.e7)([c.Z], () => c.Z.getActiveAnimation()),
        Z = (0, a.Wu)([c.Z], () => c.Z.getStreamClipAnimations(j)),
        w = (0, l.useRef)();
    l.useEffect(
        () => () => {
            (0, u.Gh)(j);
        },
        [j]
    );
    let C = () => {
            var e;
            let t = null === (e = O.current) || void 0 === e ? void 0 : e.getBoundingClientRect();
            return null == t || n
                ? v
                : {
                      width: t.width,
                      height: t.height,
                      top: t.top,
                      left: t.left
                  };
        },
        P = (e) => {
            let t = null == S ? void 0 : S.getBoundingClientRect();
            if (((w.current = t), e.timestamp !== x || null == t || n)) return v;
            let { top: r, left: l } = t;
            return {
                top: r + 36,
                left: l - 216,
                height: 151,
                width: 268
            };
        },
        N = (0, l.useRef)(null),
        I = (0, s.Yzy)(
            Z,
            {
                keys: (e) => e.timestamp,
                ref: N,
                from: { opacity: 0.2 },
                enter: { opacity: 0 },
                config: g
            },
            'animate-always'
        ),
        R = (0, l.useRef)(null),
        _ = (0, s.Yzy)(
            Z,
            {
                ref: R,
                keys: (e) => e.timestamp,
                from: (e) =>
                    h(
                        {
                            position: 'fixed',
                            visibility: 'hidden',
                            opacity: 1
                        },
                        E.enabled ? P(e) : C()
                    ),
                enter: (e) => [
                    h(
                        {
                            opacity: 1,
                            visibility: 'visible'
                        },
                        P(e)
                    )
                ],
                leave: h(
                    { opacity: 0 },
                    !E.enabled &&
                        h(
                            {
                                height: 0,
                                width: 0
                            },
                            (() => {
                                if (null != w.current)
                                    return {
                                        top: w.current.top + 12,
                                        left: w.current.left + 12
                                    };
                            })()
                        )
                ),
                config: E.enabled ? y : b,
                onRest: (e, t) => {
                    null != t.item && null != Z.find((e) => e.timestamp === t.item.timestamp) && (0, u.Gh)(j, t.item.timestamp);
                }
            },
            'animate-always'
        );
    return (
        (0, i.useChain)([N, R], [0, 0.1], 3000),
        (0, r.jsxs)(r.Fragment, {
            children: [
                (0, r.jsx)('div', {
                    className: p.hidden,
                    ref: O
                }),
                I(
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
                        children: _(
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
