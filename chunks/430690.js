"use strict";
n.d(t, { q: () => T, t: () => S });
var r = n(627968),
    i = n(64700),
    s = n(503698),
    a = n.n(s),
    o = n(442215),
    l = n(110259),
    u = n(66455),
    c = n(607399),
    d = n(158954),
    _ = n(397927),
    f = n(765671),
    p = n(919796),
    h = n(989395),
    m = n(688810),
    E = n(234266);
let g = { mass: 1, tension: 300, friction: 28, clamp: !0 };
function A(e, t) {
    return null == e ? null : e.index > t.index ? "backwards" : e.index < t.index ? "forwards" : null;
}
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
    let { contentDisplay: t, fadeInOut: n = !1, disableDefaultTransformStyling: s, ...T } = e,
        S = {},
        { analyticsLocations: y } = (0, m.Ay)();
    i.Children.forEach(T.children, (e, t) => {
        S[e.props.id] = {
            children: e.props.children,
            impressionName: e.props.impressionName,
            impressionProperties: e.props.impressionProperties,
            index: t,
        };
    });
    let v = T.activeSlide,
        N = (0, p.A)(T.activeSlide),
        C = T.directionOverride ?? A(null != N ? S[N] : null, S[v]),
        { reducedMotion: b } = i.useContext(d.CZY),
        R = i.useContext(h.A),
        O = S[v].impressionName,
        D = { ...S[v].impressionProperties, location_stack: y };
    R({ type: l.ImpressionTypes.MODAL, name: O, properties: D, _stackContext: { isSlide: !0 } });
    let { ref: L, width: w = 0, height: x = 0 } = (0, f.Ay)(v),
        M = { ...g, ...T.springConfig, ...(b.enabled ? { clamp: !0 } : null) },
        P = (0, _.zhh)(
            { width: T.width ?? w, height: x, config: M },
            null == N ? "animate-never" : "respect-motion-settings",
        ),
        k = (0, _.pnh)(
            v,
            {
                value: 0,
                from: { value: 1 },
                enter: { value: 0 },
                leave: { value: -1 },
                config: M,
                onRest: (e, t) => {
                    let { item: n } = t;
                    n === v && null != T.onSlideReady && T.onSlideReady(n);
                },
            },
            null == N ? "animate-never" : "respect-motion-settings",
        ),
        U = (0, u.A)(C),
        { width: G, centered: F = !0 } = T,
        V =
            c.Fr && !T.shouldUseMediaQueriesForSizing
                ? "100%"
                : P.width.to((e) => ("string" == typeof e ? e : Math.round(e))),
        B = c.Fr && !T.shouldUseMediaQueriesForSizing ? "100%" : P.height.to((e) => Math.round(e)),
        H = i.useMemo(
            () =>
                c.Fr
                    ? {}
                    : F
                      ? { transform: s ? void 0 : "translate3d(0, -50%, 0) scale(1.0, 1.0)", top: "50%" }
                      : { transform: s ? void 0 : "scale(1.0, 1.0)" },
            [F, s],
        ),
        j = c.Fr ? {} : { overflow: T.overflow ?? "hidden" },
        Y = i.useMemo(
            () => ({ width: c.Fr && !T.shouldUseMediaQueriesForSizing ? "100%" : G }),
            [T.shouldUseMediaQueriesForSizing, G],
        );
    return (0, r.jsx)(o.animated.div, {
        style: { position: "relative", minWidth: V, minHeight: B, ...j },
        children: k((e, i, s) => {
            let { key: l } = s,
                u = { opacity: e.value.to((e) => 1 - Math.abs(e)) };
            return (0, r.jsx)(
                o.animated.div,
                {
                    ref: i === v ? L : null,
                    style: {
                        position: "absolute",
                        display: t,
                        flexDirection: "column",
                        backfaceVisibility: "hidden",
                        ...Y,
                        ...H,
                        ...(b.enabled
                            ? u
                            : { left: e.value.to(I("left", U)), right: e.value.to(I("right", U)), ...(n && u) }),
                    },
                    className: a()({ [E.o]: T.shouldUseMediaQueriesForSizing }),
                    children: S[i].children,
                },
                l,
            );
        }),
    });
}
