"use strict";
n.d(t, { q: () => T, t: () => S });
var i = n(627968),
    r = n(64700),
    s = n(503698),
    a = n.n(s),
    o = n(873174),
    l = n(562708),
    u = n(66455),
    c = n(607399),
    d = n(844222),
    _ = n(717421),
    f = n(866323),
    h = n(765671),
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
    let { contentDisplay: s, fadeInOut: T = !1, disableDefaultTransformStyling: S, slideWrapperClassName: N, ...y } = e,
        C = {},
        { analyticsLocations: v } = (0, m.Ay)();
    r.Children.forEach(y.children, (e, t) => {
        C[e.props.id] = {
            children: e.props.children,
            impressionName: e.props.impressionName,
            impressionProperties: e.props.impressionProperties,
            index: t,
        };
    });
    let O = y.activeSlide,
        R = (0, p.A)(y.activeSlide),
        b =
            y.directionOverride ??
            ((t = null != R ? C[R] : null),
            (n = C[O]),
            null == t ? null : t.index > n.index ? "backwards" : t.index < n.index ? "forwards" : null),
        { reducedMotion: D } = r.useContext(d.C),
        L = r.useContext(E.A),
        w = C[O].impressionName,
        M = { ...C[O].impressionProperties, location_stack: v };
    L({ type: l.ImpressionTypes.MODAL, name: w, properties: M, _stackContext: { isSlide: !0 } });
    let { ref: P, width: x = 0, height: U = 0 } = (0, h.Ay)(O),
        k = { ...A, ...y.springConfig, ...(D.enabled ? { clamp: !0 } : null) },
        G = (0, _.z)(
            { width: y.width ?? x, height: U, config: k },
            null == R ? "animate-never" : "respect-motion-settings",
        ),
        F = (0, f.p)(
            O,
            {
                value: 0,
                from: { value: 1 },
                enter: { value: 0 },
                leave: { value: -1 },
                config: k,
                onRest: (e, t) => {
                    let { item: n } = t;
                    n === O && null != y.onSlideReady && y.onSlideReady(n);
                },
            },
            null == R ? "animate-never" : "respect-motion-settings",
        ),
        V = (0, u.A)(b),
        { width: B, centered: H = !0 } = y,
        j =
            c.Fr && !y.shouldUseMediaQueriesForSizing
                ? "100%"
                : G.width.to((e) => ("string" == typeof e ? e : Math.round(e))),
        Y = c.Fr && !y.shouldUseMediaQueriesForSizing ? "100%" : G.height.to((e) => Math.round(e)),
        W = r.useMemo(
            () =>
                c.Fr
                    ? {}
                    : H
                      ? { transform: S ? void 0 : "translate3d(0, -50%, 0) scale(1.0, 1.0)", top: "50%" }
                      : { transform: S ? void 0 : "scale(1.0, 1.0)" },
            [H, S],
        ),
        K = c.Fr ? {} : { overflow: y.overflow ?? "hidden" },
        z = r.useMemo(
            () => ({ width: c.Fr && !y.shouldUseMediaQueriesForSizing ? "100%" : B }),
            [y.shouldUseMediaQueriesForSizing, B],
        );
    return (0, i.jsx)(o.animated.div, {
        style: { position: "relative", minWidth: j, minHeight: Y, ...K },
        children: F((e, t, n) => {
            let { key: r } = n,
                l = { opacity: e.value.to((e) => 1 - Math.abs(e)) };
            return (0, i.jsx)(
                o.animated.div,
                {
                    ref: t === O ? P : null,
                    style: {
                        position: "absolute",
                        display: s,
                        flexDirection: "column",
                        backfaceVisibility: "hidden",
                        ...z,
                        ...W,
                        ...(D.enabled
                            ? l
                            : { left: e.value.to(I("left", V)), right: e.value.to(I("right", V)), ...(T && l) }),
                    },
                    className: a()({ [g.o]: y.shouldUseMediaQueriesForSizing }, N),
                    children: C[t].children,
                },
                r,
            );
        }),
    });
}
