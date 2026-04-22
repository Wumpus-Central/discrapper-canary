"use strict";
n.d(t, { q: () => T, t: () => S });
var r = n(627968),
    i = n(64700),
    s = n(503698),
    a = n.n(s),
    o = n(517738),
    l = n(110259),
    u = n(66455),
    d = n(607399),
    c = n(844222),
    _ = n(717421),
    f = n(866323),
    E = n(765671),
    h = n(919796),
    p = n(989395),
    m = n(688810),
    g = n(346381);
let A = { mass: 1, tension: 300, friction: 28, clamp: !0 };
function I(e, t) {
    return (n) => {
        if (0 === n) return "auto";
        let r = "forwards" === t.current,
            i = n > 0,
            s = !1;
        return (
            i && r && "left" === e && (s = !0),
            i && !r && "right" === e && (s = !0),
            !i && r && "right" === e && (s = !0),
            i || r || "left" !== e || (s = !0),
            s ? `${100 * Math.abs(n)}%` : "auto"
        );
    };
}
function T(e) {
    return null;
}
function S(e) {
    var t, n;
    let { contentDisplay: s, fadeInOut: T = !1, disableDefaultTransformStyling: S, ...y } = e,
        N = {},
        { analyticsLocations: O } = (0, m.Ay)();
    i.Children.forEach(y.children, (e, t) => {
        N[e.props.id] = {
            children: e.props.children,
            impressionName: e.props.impressionName,
            impressionProperties: e.props.impressionProperties,
            index: t,
        };
    });
    let R = y.activeSlide,
        v = (0, h.A)(y.activeSlide),
        C =
            y.directionOverride ??
            ((t = null != v ? N[v] : null),
            (n = N[R]),
            null == t ? null : t.index > n.index ? "backwards" : t.index < n.index ? "forwards" : null),
        { reducedMotion: b } = i.useContext(c.C),
        D = i.useContext(p.A),
        L = N[R].impressionName,
        w = { ...N[R].impressionProperties, location_stack: O };
    D({ type: l.ImpressionTypes.MODAL, name: L, properties: w, _stackContext: { isSlide: !0 } });
    let { ref: M, width: P = 0, height: U = 0 } = (0, E.Ay)(R),
        k = { ...A, ...y.springConfig, ...(b.enabled ? { clamp: !0 } : null) },
        x = (0, _.z)(
            { width: y.width ?? P, height: U, config: k },
            null == v ? "animate-never" : "respect-motion-settings",
        ),
        G = (0, f.p)(
            R,
            {
                value: 0,
                from: { value: 1 },
                enter: { value: 0 },
                leave: { value: -1 },
                config: k,
                onRest: (e, t) => {
                    let { item: n } = t;
                    n === R && null != y.onSlideReady && y.onSlideReady(n);
                },
            },
            null == v ? "animate-never" : "respect-motion-settings",
        ),
        V = (0, u.A)(C),
        { width: F, centered: B = !0 } = y,
        H =
            d.Fr && !y.shouldUseMediaQueriesForSizing
                ? "100%"
                : x.width.to((e) => ("string" == typeof e ? e : Math.round(e))),
        Y = d.Fr && !y.shouldUseMediaQueriesForSizing ? "100%" : x.height.to((e) => Math.round(e)),
        W = i.useMemo(
            () =>
                d.Fr
                    ? {}
                    : B
                      ? { transform: S ? void 0 : "translate3d(0, -50%, 0) scale(1.0, 1.0)", top: "50%" }
                      : { transform: S ? void 0 : "scale(1.0, 1.0)" },
            [B, S],
        ),
        j = d.Fr ? {} : { overflow: y.overflow ?? "hidden" },
        K = i.useMemo(
            () => ({ width: d.Fr && !y.shouldUseMediaQueriesForSizing ? "100%" : F }),
            [y.shouldUseMediaQueriesForSizing, F],
        );
    return (0, r.jsx)(o.animated.div, {
        style: { position: "relative", minWidth: H, minHeight: Y, ...j },
        children: G((e, t, n) => {
            let { key: i } = n,
                l = { opacity: e.value.to((e) => 1 - Math.abs(e)) };
            return (0, r.jsx)(
                o.animated.div,
                {
                    ref: t === R ? M : null,
                    style: {
                        position: "absolute",
                        display: s,
                        flexDirection: "column",
                        backfaceVisibility: "hidden",
                        ...K,
                        ...W,
                        ...(b.enabled
                            ? l
                            : { left: e.value.to(I("left", V)), right: e.value.to(I("right", V)), ...(T && l) }),
                    },
                    className: a()({ [g.o]: y.shouldUseMediaQueriesForSizing }),
                    children: N[t].children,
                },
                i,
            );
        }),
    });
}
