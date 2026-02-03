n.d(t, {
    q: () => C,
    t: () => N,
});
var r = n(627968),
    i = n(64700),
    a = n(503698),
    o = n.n(a),
    s = n(92674),
    l = n(110259),
    c = n(66455),
    u = n(607399),
    d = n(158954),
    f = n(397927),
    p = n(765671),
    _ = n(919796),
    h = n(989395),
    m = n(688810),
    g = n(929376);

function E(e, t, n) {
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

function y(e) {
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
                E(e, t, n[t]);
            });
    }
    return e;
}

function b(e, t) {
    var n = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
        var r = Object.getOwnPropertySymbols(e);
        t &&
            (r = r.filter(function (t) {
                return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            n.push.apply(n, r);
    }
    return n;
}

function O(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : b(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}

function v(e, t) {
    if (null == e) return {};
    var n,
        r,
        i,
        a = {};
    if ("u" > typeof Reflect && Reflect.ownKeys) {
        for (i = 0, n = Reflect.ownKeys(e); i < n.length; i++)
            (r = n[i]), !(t.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(e, r) && (a[r] = e[r]);
        return a;
    }
    if (((a = A(e, t)), Object.getOwnPropertySymbols))
        for (i = 0, n = Object.getOwnPropertySymbols(e); i < n.length; i++)
            (r = n[i]), !(t.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(e, r) && (a[r] = e[r]);
    return a;
}

function A(e, t) {
    if (null == e) return {};
    var n,
        r,
        i = {},
        a = Object.getOwnPropertyNames(e);
    for (r = 0; r < a.length; r++)
        (n = a[r]), !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n]);
    return i;
}
let I = {
    mass: 1,
    tension: 300,
    friction: 28,
    clamp: !0,
};

function S(e, t) {
    return null == e ? null : e.index > t.index ? "backwards" : e.index < t.index ? "forwards" : null;
}

function T(e, t) {
    return (n) => {
        if (0 === n) return "auto";
        let r = "forwards" === t.current,
            i = n > 0,
            a = !1;
        return (
            i && r && "left" === e && (a = !0),
            i && !r && "right" === e && (a = !0),
            !i && r && "right" === e && (a = !0),
            i || r || "left" !== e || (a = !0),
            a ? "".concat(100 * Math.abs(n), "%") : "auto"
        );
    };
}

function C(e) {
    return null;
}

function N(e) {
    var t, n, a;
    let { contentDisplay: E, fadeInOut: b = !1 } = e,
        A = v(e, ["contentDisplay", "fadeInOut"]),
        C = {},
        { analyticsLocations: N } = (0, m.Ay)();
    i.Children.forEach(A.children, (e, t) => {
        C[e.props.id] = {
            children: e.props.children,
            impressionName: e.props.impressionName,
            impressionProperties: e.props.impressionProperties,
            index: t,
        };
    });
    let w = A.activeSlide,
        R = (0, _.A)(A.activeSlide),
        P = null != (t = A.directionOverride) ? t : S(null != R ? C[R] : null, C[w]),
        { reducedMotion: D } = i.useContext(d.CZY),
        L = i.useContext(h.A),
        x = C[w].impressionName,
        M = O(y({}, C[w].impressionProperties), {
            location_stack: N,
        });
    L({
        type: l.ImpressionTypes.MODAL,
        name: x,
        properties: M,
        _stackContext: {
            isSlide: !0,
        },
    });
    let { ref: j, width: k = 0, height: U = 0 } = (0, p.Ay)(w),
        G = y(
            {},
            I,
            A.springConfig,
            D.enabled
                ? {
                      clamp: !0,
                  }
                : null,
        ),
        V = (0, f.zhh)(
            {
                width: null != (n = A.width) ? n : k,
                height: U,
                config: G,
            },
            null == R ? "animate-never" : "respect-motion-settings",
        ),
        F = (0, f.pnh)(
            w,
            {
                value: 0,
                from: {
                    value: 1,
                },
                enter: {
                    value: 0,
                },
                leave: {
                    value: -1,
                },
                config: G,
                onRest: (e, t) => {
                    let { item: n } = t;
                    n === w && null != A.onSlideReady && A.onSlideReady(n);
                },
            },
            null == R ? "animate-never" : "respect-motion-settings",
        ),
        B = (0, c.A)(P),
        { width: H, centered: Y = !0 } = A,
        W =
            u.Fr && !A.shouldUseMediaQueriesForSizing
                ? "100%"
                : V.width.to((e) => ("string" == typeof e ? e : Math.round(e))),
        K = u.Fr && !A.shouldUseMediaQueriesForSizing ? "100%" : V.height.to((e) => Math.round(e)),
        z = u.Fr
            ? {}
            : Y
              ? {
                    transform: "translate3d(0, -50%, 0) scale(1.0, 1.0)",
                    top: "50%",
                }
              : {
                    transform: "scale(1.0, 1.0)",
                },
        q = u.Fr
            ? {}
            : {
                  overflow: null != (a = A.overflow) ? a : "hidden",
              },
        Z = i.useMemo(
            () => ({
                width: u.Fr && !A.shouldUseMediaQueriesForSizing ? "100%" : H,
            }),
            [A.shouldUseMediaQueriesForSizing, H],
        );
    return (0, r.jsx)(s.animated.div, {
        style: y(
            {
                position: "relative",
                minWidth: W,
                minHeight: K,
            },
            q,
        ),
        className: o()({
            [g.f]: A.shouldUseMediaQueriesForSizing,
        }),
        children: F((e, t, n) => {
            let { key: i } = n,
                a = {
                    opacity: e.value.to((e) => 1 - Math.abs(e)),
                };
            return (0, r.jsx)(
                s.animated.div,
                {
                    ref: t === w ? j : null,
                    style: y(
                        {
                            position: "absolute",
                            display: E,
                            flexDirection: "column",
                            backfaceVisibility: "hidden",
                        },
                        Z,
                        z,
                        D.enabled
                            ? a
                            : y(
                                  {
                                      left: e.value.to(T("left", B)),
                                      right: e.value.to(T("right", B)),
                                  },
                                  b && a,
                              ),
                    ),
                    className: o()({
                        [g.o]: A.shouldUseMediaQueriesForSizing,
                    }),
                    children: C[t].children,
                },
                i,
            );
        }),
    });
}
