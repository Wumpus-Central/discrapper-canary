n.d(t, { Z: () => y });
var r = n(54381),
    i = n(473749),
    l = n(467721),
    a = n(442837),
    o = n(780384),
    c = n(481060),
    s = n(598006),
    u = n(435064),
    d = n(39604),
    f = n(175470),
    p = n(569545),
    m = n(314910),
    _ = n(565063);
function g(e) {
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
let v = { visibility: "hidden" },
    b = {
        precision: 0.0001,
        duration: 300,
    },
    h = {
        tension: 150,
        friction: 20,
        precision: 0.0001,
        bounce: 0,
    },
    E = { duration: 1000 };
function y(e) {
    let { stream: t, popoutType: n } = e,
        { reducedMotion: y } = i.useContext(o.Sf),
        S = (0, i.useRef)(null),
        O = f.n.getState().clipsButtonRef,
        C = (0, p.V9)(t),
        w = (0, a.e7)([u.Z], () => u.Z.getActiveAnimation()),
        I = (0, a.Wu)([u.Z], () => u.Z.getStreamClipAnimations(C)),
        P = (0, i.useRef)(void 0);
    i.useEffect(
        () => () => {
            (0, d.Gh)(C);
        },
        [C],
    );
    let j = (e) => {
            if (n !== s.P.NO_POPOUT) return v;
            let t = null == O ? void 0 : O.getBoundingClientRect();
            if (((P.current = t), e.timestamp !== w || null == t)) return v;
            let { top: r, left: i } = t;
            return {
                top: r + 36,
                left: i - 216,
                height: 151,
                width: 268,
            };
        },
        x = (0, i.useRef)(null),
        Z = (0, c.Yzy)(
            I,
            {
                keys: (e) => e.timestamp,
                ref: x,
                from: { opacity: 0.2 },
                enter: { opacity: 0 },
                config: b,
            },
            "animate-always",
        ),
        R = (0, i.useRef)(null),
        T = (0, c.Yzy)(
            I,
            {
                ref: R,
                keys: (e) => e.timestamp,
                from: (e) =>
                    g(
                        {
                            position: "fixed",
                            visibility: "hidden",
                            opacity: 1,
                        },
                        y.enabled
                            ? j(e)
                            : (() => {
                                  var e;
                                  if (n !== s.P.NO_POPOUT) return v;
                                  let t = null == (e = S.current) ? void 0 : e.getBoundingClientRect();
                                  return null == t
                                      ? v
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
                        j(e),
                    ),
                ],
                leave: g(
                    { opacity: 0 },
                    !y.enabled &&
                        g(
                            {
                                height: 0,
                                width: 0,
                            },
                            (() => {
                                if (null != P.current)
                                    return {
                                        top: P.current.top + 12,
                                        left: P.current.left + 12,
                                    };
                            })(),
                        ),
                ),
                config: y.enabled ? E : h,
                onRest: (e, t) => {
                    null != t.item &&
                        null != I.find((e) => e.timestamp === t.item.timestamp) &&
                        (0, d.Gh)(C, t.item.timestamp);
                },
            },
            "animate-always",
        );
    return (
        (0, l.useChain)([x, R], [0, 0.1], 3000),
        (0, r.jsxs)(r.Fragment, {
            children: [
                (0, r.jsx)("div", {
                    className: _.hidden,
                    ref: S,
                }),
                Z(
                    (e, t) =>
                        null != t &&
                        (0, r.jsx)(l.animated.div, {
                            className: _.whiteFlash,
                            style: e,
                        }),
                ),
                (0, r.jsx)(m.ZP, {
                    children: (0, r.jsx)("div", {
                        className: _.hidden,
                        children: T(
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
