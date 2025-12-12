n.d(t, {
    H: () => N,
    M: () => A,
});
var r = n(54381),
    i = n(473749),
    a = n(120356),
    o = n.n(a),
    s = n(467721),
    l = n(990547),
    c = n(872175),
    u = n(873546),
    d = n(793030),
    f = n(481060),
    p = n(393238),
    _ = n(699682),
    m = n(793903),
    h = n(906732),
    g = n(30929);
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
function b(e) {
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
function y(e, t) {
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
            : y(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
function v(e, t) {
    if (null == e) return {};
    var n,
        r,
        i = S(e, t);
    if (Object.getOwnPropertySymbols) {
        var a = Object.getOwnPropertySymbols(e);
        for (r = 0; r < a.length; r++)
            (n = a[r]), !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n]);
    }
    return i;
}
function S(e, t) {
    if (null == e) return {};
    var n,
        r,
        i = {},
        a = Object.keys(e);
    for (r = 0; r < a.length; r++) (n = a[r]), t.indexOf(n) >= 0 || (i[n] = e[n]);
    return i;
}
let I = {
    mass: 1,
    tension: 300,
    friction: 28,
    clamp: !0,
};
function T(e, t) {
    return null == e ? null : e.index > t.index ? "backwards" : e.index < t.index ? "forwards" : null;
}
function C(e, t) {
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
function A(e) {
    return null;
}
function N(e) {
    var t,
        n,
        a,
        { contentDisplay: E, fadeInOut: y = !1 } = e,
        S = v(e, ["contentDisplay", "fadeInOut"]);
    let A = {},
        { analyticsLocations: N } = (0, h.ZP)();
    i.Children.forEach(S.children, (e, t) => {
        A[e.props.id] = {
            children: e.props.children,
            impressionName: e.props.impressionName,
            impressionProperties: e.props.impressionProperties,
            index: t,
        };
    });
    let P = S.activeSlide,
        R = (0, _.Z)(S.activeSlide),
        w = null != (t = S.directionOverride) ? t : T(null != R ? A[R] : null, A[P]),
        { reducedMotion: D } = i.useContext(d.Sfi),
        x = i.useContext(m.Z),
        L = A[P].impressionName,
        j = O(b({}, A[P].impressionProperties), { location_stack: N });
    x({
        type: l.ImpressionTypes.MODAL,
        name: L,
        properties: j,
        _stackContext: { isSlide: !0 },
    });
    let { ref: M, width: k = 0, height: U = 0 } = (0, p.ZP)(P),
        G = b({}, I, S.springConfig, D.enabled ? { clamp: !0 } : null),
        Z = (0, f.q_F)(
            {
                width: null != (n = S.width) ? n : k,
                height: U,
                config: G,
            },
            null == R ? "animate-never" : "respect-motion-settings",
        ),
        F = (0, f.Yzy)(
            P,
            {
                value: 0,
                from: { value: 1 },
                enter: { value: 0 },
                leave: { value: -1 },
                config: G,
                onRest: (e, t) => {
                    let { item: n } = t;
                    n === P && null != S.onSlideReady && S.onSlideReady(n);
                },
            },
            null == R ? "animate-never" : "respect-motion-settings",
        ),
        B = (0, c.Z)(w),
        { width: V, centered: H = !0 } = S,
        Y =
            u.tq && !S.shouldUseMediaQueriesForSizing
                ? "100%"
                : Z.width.to((e) => ("string" == typeof e ? e : Math.round(e))),
        W = u.tq && !S.shouldUseMediaQueriesForSizing ? "100%" : Z.height.to((e) => Math.round(e)),
        K = u.tq
            ? {}
            : H
              ? {
                    transform: "translate3d(0, -50%, 0) scale(1.0, 1.0)",
                    top: "50%",
                }
              : { transform: "scale(1.0, 1.0)" },
        z = u.tq ? {} : { overflow: null != (a = S.overflow) ? a : "hidden" },
        q = i.useMemo(
            () => ({ width: u.tq && !S.shouldUseMediaQueriesForSizing ? "100%" : V }),
            [S.shouldUseMediaQueriesForSizing, V],
        );
    return (0, r.jsx)(s.animated.div, {
        style: b(
            {
                position: "relative",
                minWidth: Y,
                minHeight: W,
            },
            z,
        ),
        className: o()({ [g.outerAnimatedDivDynamicSizing]: S.shouldUseMediaQueriesForSizing }),
        children: F((e, t, n) => {
            let { key: i } = n,
                a = { opacity: e.value.to((e) => 1 - Math.abs(e)) };
            return (0, r.jsx)(
                s.animated.div,
                {
                    ref: t === P ? M : null,
                    style: b(
                        {
                            position: "absolute",
                            display: E,
                            flexDirection: "column",
                            backfaceVisibility: "hidden",
                        },
                        q,
                        K,
                        D.enabled
                            ? a
                            : b(
                                  {
                                      left: e.value.to(C("left", B)),
                                      right: e.value.to(C("right", B)),
                                  },
                                  y && a,
                              ),
                    ),
                    className: o()({ [g.innerAnimatedDivDynamicSizing]: S.shouldUseMediaQueriesForSizing }),
                    children: A[t].children,
                },
                i,
            );
        }),
    });
}
