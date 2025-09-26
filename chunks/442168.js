n.d(t, { Z: () => h });
var r = n(951288),
    i = n(647438),
    l = n(786920),
    a = n(442837),
    o = n(780384),
    c = n(481060),
    s = n(435064),
    u = n(39604),
    d = n(175470),
    f = n(569545),
    p = n(314910),
    m = n(565063);
function _(e) {
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
let g = { visibility: "hidden" },
    b = {
        precision: 0.0001,
        duration: 300,
    },
    v = {
        tension: 150,
        friction: 20,
        precision: 0.0001,
        bounce: 0,
    },
    E = { duration: 1000 };
function h(e) {
    let { stream: t, inPopout: n } = e,
        { reducedMotion: h } = i.useContext(o.Sf),
        y = (0, i.useRef)(null),
        S = d.n.getState().clipsButtonRef,
        O = (0, f.V9)(t),
        I = (0, a.e7)([s.Z], () => s.Z.getActiveAnimation()),
        w = (0, a.Wu)([s.Z], () => s.Z.getStreamClipAnimations(O)),
        j = (0, i.useRef)(void 0);
    i.useEffect(
        () => () => {
            (0, u.Gh)(O);
        },
        [O],
    );
    let C = (e) => {
            let t = null == S ? void 0 : S.getBoundingClientRect();
            if (((j.current = t), e.timestamp !== I || null == t || n)) return g;
            let { top: r, left: i } = t;
            return {
                top: r + 36,
                left: i - 216,
                height: 151,
                width: 268,
            };
        },
        P = (0, i.useRef)(null),
        Z = (0, c.Yzy)(
            w,
            {
                keys: (e) => e.timestamp,
                ref: P,
                from: { opacity: 0.2 },
                enter: { opacity: 0 },
                config: b,
            },
            "animate-always",
        ),
        x = (0, i.useRef)(null),
        A = (0, c.Yzy)(
            w,
            {
                ref: x,
                keys: (e) => e.timestamp,
                from: (e) =>
                    _(
                        {
                            position: "fixed",
                            visibility: "hidden",
                            opacity: 1,
                        },
                        h.enabled
                            ? C(e)
                            : (() => {
                                  var e;
                                  let t = null == (e = y.current) ? void 0 : e.getBoundingClientRect();
                                  return null == t || n
                                      ? g
                                      : {
                                            width: t.width,
                                            height: t.height,
                                            top: t.top,
                                            left: t.left,
                                        };
                              })(),
                    ),
                enter: (e) => [
                    _(
                        {
                            opacity: 1,
                            visibility: "visible",
                        },
                        C(e),
                    ),
                ],
                leave: _(
                    { opacity: 0 },
                    !h.enabled &&
                        _(
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
                config: h.enabled ? E : v,
                onRest: (e, t) => {
                    null != t.item &&
                        null != w.find((e) => e.timestamp === t.item.timestamp) &&
                        (0, u.Gh)(O, t.item.timestamp);
                },
            },
            "animate-always",
        );
    return (
        (0, l.useChain)([P, x], [0, 0.1], 3000),
        (0, r.jsxs)(r.Fragment, {
            children: [
                (0, r.jsx)("div", {
                    className: m.hidden,
                    ref: y,
                }),
                Z(
                    (e, t) =>
                        null != t &&
                        (0, r.jsx)(l.animated.div, {
                            className: m.whiteFlash,
                            style: e,
                        }),
                ),
                (0, r.jsx)(p.ZP, {
                    children: (0, r.jsx)("div", {
                        className: m.hidden,
                        children: A(
                            (e, t, n, i) =>
                                (null == t ? void 0 : t.thumbnail) != null &&
                                (0, r.jsx)(l.animated.img, {
                                    src: t.thumbnail,
                                    className: m.movingImage,
                                    style: e,
                                }),
                        ),
                    }),
                }),
            ],
        })
    );
}
