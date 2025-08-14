n.d(t, { Z: () => I });
var r = n(255367),
    i = n(73800),
    o = n(717976),
    a = n(442837),
    s = n(780384),
    l = n(481060),
    c = n(435064),
    u = n(39604),
    d = n(175470),
    f = n(569545),
    _ = n(314910),
    p = n(565063);
function h(e, t, n) {
    return (
        t in e
            ? Object.defineProperty(e, t, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0,
              })
            : (e[t] = n),
        e
    );
}
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
                h(e, t, n[t]);
            });
    }
    return e;
}
let g = 3000,
    E = 0.1,
    b = { visibility: "hidden" },
    y = {
        precision: 0.0001,
        duration: 300,
    },
    O = {
        tension: 150,
        friction: 20,
        precision: 0.0001,
        bounce: 0,
    },
    v = { duration: 1000 };
function I(e) {
    let { stream: t, inPopout: n } = e,
        { reducedMotion: h } = i.useContext(s.Sf),
        I = (0, i.useRef)(null),
        T = d.n.getState().clipsButtonRef,
        S = (0, f.V9)(t),
        A = (0, a.e7)([c.Z], () => c.Z.getActiveAnimation()),
        N = (0, a.Wu)([c.Z], () => c.Z.getStreamClipAnimations(S)),
        C = (0, i.useRef)(void 0);
    i.useEffect(
        () => () => {
            (0, u.Gh)(S);
        },
        [S],
    );
    let R = () => {
            var e;
            let t = null == (e = I.current) ? void 0 : e.getBoundingClientRect();
            return null == t || n
                ? b
                : {
                      width: t.width,
                      height: t.height,
                      top: t.top,
                      left: t.left,
                  };
        },
        P = (e) => {
            let t = null == T ? void 0 : T.getBoundingClientRect();
            if (((C.current = t), e.timestamp !== A || null == t || n)) return b;
            let { top: r, left: i } = t;
            return {
                top: r + 36,
                left: i - 216,
                height: 151,
                width: 268,
            };
        },
        w = () => {
            if (null != C.current)
                return {
                    top: C.current.top + 12,
                    left: C.current.left + 12,
                };
        },
        D = (0, i.useRef)(null),
        L = (0, l.Yzy)(
            N,
            {
                keys: (e) => e.timestamp,
                ref: D,
                from: { opacity: 0.2 },
                enter: { opacity: 0 },
                config: y,
            },
            "animate-always",
        ),
        x = (0, i.useRef)(null),
        M = (0, l.Yzy)(
            N,
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
                        h.enabled ? P(e) : R(),
                    ),
                enter: (e) => [
                    m(
                        {
                            opacity: 1,
                            visibility: "visible",
                        },
                        P(e),
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
                            w(),
                        ),
                ),
                config: h.enabled ? v : O,
                onRest: (e, t) => {
                    null != t.item &&
                        null != N.find((e) => e.timestamp === t.item.timestamp) &&
                        (0, u.Gh)(S, t.item.timestamp);
                },
            },
            "animate-always",
        );
    return (
        (0, o.useChain)([D, x], [0, E], g),
        (0, r.jsxs)(r.Fragment, {
            children: [
                (0, r.jsx)("div", {
                    className: p.hidden,
                    ref: I,
                }),
                L(
                    (e, t) =>
                        null != t &&
                        (0, r.jsx)(o.animated.div, {
                            className: p.whiteFlash,
                            style: e,
                        }),
                ),
                (0, r.jsx)(_.ZP, {
                    children: (0, r.jsx)("div", {
                        className: p.hidden,
                        children: M(
                            (e, t, n, i) =>
                                (null == t ? void 0 : t.thumbnail) != null &&
                                (0, r.jsx)(o.animated.img, {
                                    src: t.thumbnail,
                                    className: p.movingImage,
                                    style: e,
                                }),
                        ),
                    }),
                }),
            ],
        })
    );
}
