"use strict";
n.d(t, { q: () => g, t: () => S });
var i = n(627968),
    r = n(64700),
    a = n(503698),
    s = n.n(a),
    l = n(580929),
    o = n(562708),
    d = n(66455),
    c = n(607399),
    u = n(844222),
    _ = n(717421),
    E = n(866323),
    A = n(765671),
    h = n(919796),
    I = n(989395),
    f = n(688810),
    p = n(452365);
let T = { mass: 1, tension: 300, friction: 28, clamp: !0 };
function m(e, t) {
    return (n) => {
        if (0 === n) return "auto";
        let i = "forwards" === t.current,
            r = n > 0,
            a = !1;
        return (
            r && i && "left" === e && (a = !0),
            r && !i && "right" === e && (a = !0),
            !r && i && "right" === e && (a = !0),
            r || i || "left" !== e || (a = !0),
            a ? `${100 * Math.abs(n)}%` : "auto"
        );
    };
}
function g(e) {
    return null;
}
function S(e) {
    var t, n;
    let { contentDisplay: a, fadeInOut: g = !1, disableDefaultTransformStyling: S, slideWrapperClassName: N, ...C } = e,
        R = {},
        { analyticsLocations: O } = (0, f.Ay)();
    r.Children.forEach(C.children, (e, t) => {
        R[e.props.id] = {
            children: e.props.children,
            impressionName: e.props.impressionName,
            impressionProperties: e.props.impressionProperties,
            index: t,
        };
    });
    let L = C.activeSlide,
        D = (0, h.A)(C.activeSlide),
        y =
            C.directionOverride ??
            ((t = null != D ? R[D] : null),
            (n = R[L]),
            null == t ? null : t.index > n.index ? "backwards" : t.index < n.index ? "forwards" : null),
        { reducedMotion: v } = r.useContext(u.C),
        b = r.useContext(I.A),
        M = R[L].impressionName,
        P = { ...R[L].impressionProperties, location_stack: O };
    b({ type: o.ImpressionTypes.MODAL, name: M, properties: P, _stackContext: { isSlide: !0 } });
    let { ref: U, width: w = 0, height: G = 0 } = (0, A.Ay)(L),
        x = { ...T, ...C.springConfig, ...(v.enabled ? { clamp: !0 } : null) },
        k = (0, _.z)(
            { width: C.width ?? w, height: G, config: x },
            null == D ? "animate-never" : "respect-motion-settings",
        ),
        F = (0, E.p)(
            L,
            {
                value: 0,
                from: { value: 1 },
                enter: { value: 0 },
                leave: { value: -1 },
                config: x,
                onRest: (e, t) => {
                    let { item: n } = t;
                    n === L && null != C.onSlideReady && C.onSlideReady(n);
                },
            },
            null == D ? "animate-never" : "respect-motion-settings",
        ),
        V = (0, d.A)(y),
        { width: B, centered: H = !0 } = C,
        j =
            c.Fr && !C.shouldUseMediaQueriesForSizing
                ? "100%"
                : k.width.to((e) => ("string" == typeof e ? e : Math.round(e))),
        W = c.Fr && !C.shouldUseMediaQueriesForSizing ? "100%" : k.height.to((e) => Math.round(e)),
        Y = r.useMemo(
            () =>
                c.Fr
                    ? {}
                    : H
                      ? { transform: S ? void 0 : "translate3d(0, -50%, 0) scale(1.0, 1.0)", top: "50%" }
                      : { transform: S ? void 0 : "scale(1.0, 1.0)" },
            [H, S],
        ),
        K = c.Fr ? {} : { overflow: C.overflow ?? "hidden" },
        $ = r.useMemo(
            () => ({ width: c.Fr && !C.shouldUseMediaQueriesForSizing ? "100%" : B }),
            [C.shouldUseMediaQueriesForSizing, B],
        );
    return (0, i.jsx)(l.animated.div, {
        style: { position: "relative", minWidth: j, minHeight: W, ...K },
        children: F((e, t, n) => {
            let { key: r } = n,
                o = { opacity: e.value.to((e) => 1 - Math.abs(e)) };
            return (0, i.jsx)(
                l.animated.div,
                {
                    ref: t === L ? U : null,
                    style: {
                        position: "absolute",
                        display: a,
                        flexDirection: "column",
                        backfaceVisibility: "hidden",
                        ...$,
                        ...Y,
                        ...(v.enabled
                            ? o
                            : { left: e.value.to(m("left", V)), right: e.value.to(m("right", V)), ...(g && o) }),
                    },
                    className: s()({ [p.o]: C.shouldUseMediaQueriesForSizing }, N),
                    children: R[t].children,
                },
                r,
            );
        }),
    });
}
