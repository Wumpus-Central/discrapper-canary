"use strict";
n.d(t, { q: () => T, t: () => S });
var i = n(627968),
    r = n(64700),
    s = n(503698),
    a = n.n(s),
    o = n(18005),
    l = n(562708),
    u = n(66455),
    c = n(607399),
    d = n(844222),
    _ = n(717421),
    h = n(866323),
    f = n(765671),
    p = n(919796),
    E = n(989395),
    m = n(688810),
    g = n(346381);
let A = { mass: 1, tension: 300, friction: 28, clamp: !0 };
function I(e, t) {
    return (n) => {
        if (0 === n) return "auto";
        let i = "forwards" === t.current,
            r = n > 0,
            s = !1;
        return (
            r && i && "left" === e && (s = !0),
            r && !i && "right" === e && (s = !0),
            !r && i && "right" === e && (s = !0),
            r || i || "left" !== e || (s = !0),
            s ? `${100 * Math.abs(n)}%` : "auto"
        );
    };
}
function T(e) {
    return null;
}
function S(e) {
    var t, n;
    let { contentDisplay: s, fadeInOut: T = !1, disableDefaultTransformStyling: S, slideWrapperClassName: y, ...C } = e,
        N = {},
        { analyticsLocations: v } = (0, m.Ay)();
    r.Children.forEach(C.children, (e, t) => {
        N[e.props.id] = {
            children: e.props.children,
            impressionName: e.props.impressionName,
            impressionProperties: e.props.impressionProperties,
            index: t,
        };
    });
    let R = C.activeSlide,
        O = (0, p.A)(C.activeSlide),
        b =
            C.directionOverride ??
            ((t = null != O ? N[O] : null),
            (n = N[R]),
            null == t ? null : t.index > n.index ? "backwards" : t.index < n.index ? "forwards" : null),
        { reducedMotion: D } = r.useContext(d.C),
        L = r.useContext(E.A),
        w = N[R].impressionName,
        M = { ...N[R].impressionProperties, location_stack: v };
    L({ type: l.ImpressionTypes.MODAL, name: w, properties: M, _stackContext: { isSlide: !0 } });
    let { ref: P, width: x = 0, height: k = 0 } = (0, f.Ay)(R),
        U = { ...A, ...C.springConfig, ...(D.enabled ? { clamp: !0 } : null) },
        G = (0, _.z)(
            { width: C.width ?? x, height: k, config: U },
            null == O ? "animate-never" : "respect-motion-settings",
        ),
        F = (0, h.p)(
            R,
            {
                value: 0,
                from: { value: 1 },
                enter: { value: 0 },
                leave: { value: -1 },
                config: U,
                onRest: (e, t) => {
                    let { item: n } = t;
                    n === R && null != C.onSlideReady && C.onSlideReady(n);
                },
            },
            null == O ? "animate-never" : "respect-motion-settings",
        ),
        V = (0, u.A)(b),
        { width: B, centered: j = !0 } = C,
        H =
            c.Fr && !C.shouldUseMediaQueriesForSizing
                ? "100%"
                : G.width.to((e) => ("string" == typeof e ? e : Math.round(e))),
        Y = c.Fr && !C.shouldUseMediaQueriesForSizing ? "100%" : G.height.to((e) => Math.round(e)),
        W = r.useMemo(
            () =>
                c.Fr
                    ? {}
                    : j
                      ? { transform: S ? void 0 : "translate3d(0, -50%, 0) scale(1.0, 1.0)", top: "50%" }
                      : { transform: S ? void 0 : "scale(1.0, 1.0)" },
            [j, S],
        ),
        K = c.Fr ? {} : { overflow: C.overflow ?? "hidden" },
        $ = r.useMemo(
            () => ({ width: c.Fr && !C.shouldUseMediaQueriesForSizing ? "100%" : B }),
            [C.shouldUseMediaQueriesForSizing, B],
        );
    return (0, i.jsx)(o.animated.div, {
        style: { position: "relative", minWidth: H, minHeight: Y, ...K },
        children: F((e, t, n) => {
            let { key: r } = n,
                l = { opacity: e.value.to((e) => 1 - Math.abs(e)) };
            return (0, i.jsx)(
                o.animated.div,
                {
                    ref: t === R ? P : null,
                    style: {
                        position: "absolute",
                        display: s,
                        flexDirection: "column",
                        backfaceVisibility: "hidden",
                        ...$,
                        ...W,
                        ...(D.enabled
                            ? l
                            : { left: e.value.to(I("left", V)), right: e.value.to(I("right", V)), ...(T && l) }),
                    },
                    className: a()({ [g.o]: C.shouldUseMediaQueriesForSizing }, y),
                    children: N[t].children,
                },
                r,
            );
        }),
    });
}
