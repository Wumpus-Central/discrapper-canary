n.d(t, { Z: () => h });
var r = n(951288),
    i = n(647438),
    l = n(137317),
    a = n(442837),
    o = n(780384),
    c = n(481060),
    s = n(435064),
    u = n(39604),
    d = n(175470),
    f = n(569545),
    p = n(314910),
    _ = n(565063);
function m(e) {
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
let b = { visibility: "hidden" },
    E = {
        precision: 0.0001,
        duration: 300,
    },
    g = {
        tension: 150,
        friction: 20,
        precision: 0.0001,
        bounce: 0,
    },
    v = { duration: 1000 };
function h(e) {
    let { stream: t, inPopout: n } = e,
        { reducedMotion: h } = i.useContext(o.Sf),
        S = (0, i.useRef)(null),
        y = d.n.getState().clipsButtonRef,
        O = (0, f.V9)(t),
        I = (0, a.e7)([s.Z], () => s.Z.getActiveAnimation()),
        C = (0, a.Wu)([s.Z], () => s.Z.getStreamClipAnimations(O)),
        w = (0, i.useRef)(void 0);
    i.useEffect(
        () => () => {
            (0, u.Gh)(O);
        },
        [O],
    );
    let j = (e) => {
            let t = null == y ? void 0 : y.getBoundingClientRect();
            if (((w.current = t), e.timestamp !== I || null == t || n)) return b;
            let { top: r, left: i } = t;
            return {
                top: r + 36,
                left: i - 216,
                height: 151,
                width: 268,
            };
        },
        Z = (0, i.useRef)(null),
        P = (0, c.Yzy)(
            C,
            {
                keys: (e) => e.timestamp,
                ref: Z,
                from: { opacity: 0.2 },
                enter: { opacity: 0 },
                config: E,
            },
            "animate-always",
        ),
        x = (0, i.useRef)(null),
        A = (0, c.Yzy)(
            C,
            {
                ref: x,
                keys: (e) => e.timestamp,
                from: (e) =>
                    m(
                        {
                            position: "fixed",
                            visibility: "hidden",
                            opacity: 1,
                        },
                        h.enabled
                            ? j(e)
                            : (() => {
                                  var e;
                                  let t = null == (e = S.current) ? void 0 : e.getBoundingClientRect();
                                  return null == t || n
                                      ? b
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
                    !h.enabled &&
                        m(
                            {
                                height: 0,
                                width: 0,
                            },
                            (() => {
                                if (null != w.current)
                                    return {
                                        top: w.current.top + 12,
                                        left: w.current.left + 12,
                                    };
                            })(),
                        ),
                ),
                config: h.enabled ? v : g,
                onRest: (e, t) => {
                    null != t.item &&
                        null != C.find((e) => e.timestamp === t.item.timestamp) &&
                        (0, u.Gh)(O, t.item.timestamp);
                },
            },
            "animate-always",
        );
    return (
        (0, l.useChain)([Z, x], [0, 0.1], 3000),
        (0, r.jsxs)(r.Fragment, {
            children: [
                (0, r.jsx)("div", {
                    className: _.hidden,
                    ref: S,
                }),
                P(
                    (e, t) =>
                        null != t &&
                        (0, r.jsx)(l.animated.div, {
                            className: _.whiteFlash,
                            style: e,
                        }),
                ),
                (0, r.jsx)(p.ZP, {
                    children: (0, r.jsx)("div", {
                        className: _.hidden,
                        children: A(
                            (e, t, n, i) =>
                                (null == t ? void 0 : t.thumbnail) != null &&
                                (0, r.jsx)(l.animated.img, {
                                    src: t.thumbnail,
                                    className: _.movingImage,
                                    style: e,
                                }),
                        ),
                    }),
                }),
            ],
        })
    );
}
