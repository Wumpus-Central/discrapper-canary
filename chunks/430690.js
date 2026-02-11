"use strict";
n.d(t, { q: () => y, t: () => S });
var r = n(627968),
    i = n(64700),
    a = n(503698),
    s = n.n(a),
    o = n(563495),
    l = n(110259),
    u = n(66455),
    c = n(607399),
    d = n(158954),
    _ = n(397927),
    f = n(765671),
    h = n(919796),
    p = n(989395),
    g = n(688810),
    E = n(234266);
let A = { mass: 1, tension: 300, friction: 28, clamp: !0 };
function I(e, t) {
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
            a ? `${100 * Math.abs(n)}%` : "auto"
        );
    };
}
function y(e) {
    return null;
}
function S(e) {
    let { contentDisplay: t, fadeInOut: n = !1, ...a } = e,
        y = {},
        { analyticsLocations: S } = (0, g.Ay)();
    i.Children.forEach(a.children, (e, t) => {
        y[e.props.id] = {
            children: e.props.children,
            impressionName: e.props.impressionName,
            impressionProperties: e.props.impressionProperties,
            index: t,
        };
    });
    let v = a.activeSlide,
        C = (0, h.A)(a.activeSlide),
        b = a.directionOverride ?? I(null != C ? y[C] : null, y[v]),
        { reducedMotion: N } = i.useContext(d.CZY),
        R = i.useContext(p.A),
        O = y[v].impressionName,
        D = { ...y[v].impressionProperties, location_stack: S };
    R({ type: l.ImpressionTypes.MODAL, name: O, properties: D, _stackContext: { isSlide: !0 } });
    let { ref: L, width: w = 0, height: x = 0 } = (0, f.Ay)(v),
        P = { ...A, ...a.springConfig, ...(N.enabled ? { clamp: !0 } : null) },
        M = (0, _.zhh)(
            { width: a.width ?? w, height: x, config: P },
            null == C ? "animate-never" : "respect-motion-settings",
        ),
        k = (0, _.pnh)(
            v,
            {
                value: 0,
                from: { value: 1 },
                enter: { value: 0 },
                leave: { value: -1 },
                config: P,
                onRest: (e, t) => {
                    let { item: n } = t;
                    n === v && null != a.onSlideReady && a.onSlideReady(n);
                },
            },
            null == C ? "animate-never" : "respect-motion-settings",
        ),
        U = (0, u.A)(b),
        { width: G, centered: F = !0 } = a,
        V =
            c.Fr && !a.shouldUseMediaQueriesForSizing
                ? "100%"
                : M.width.to((e) => ("string" == typeof e ? e : Math.round(e))),
        B = c.Fr && !a.shouldUseMediaQueriesForSizing ? "100%" : M.height.to((e) => Math.round(e)),
        j = c.Fr
            ? {}
            : F
              ? { transform: "translate3d(0, -50%, 0) scale(1.0, 1.0)", top: "50%" }
              : { transform: "scale(1.0, 1.0)" },
        H = c.Fr ? {} : { overflow: a.overflow ?? "hidden" },
        Y = i.useMemo(
            () => ({ width: c.Fr && !a.shouldUseMediaQueriesForSizing ? "100%" : G }),
            [a.shouldUseMediaQueriesForSizing, G],
        );
    return (0, r.jsx)(o.animated.div, {
        style: { position: "relative", minWidth: V, minHeight: B, ...H },
        className: s()({ [E.f]: a.shouldUseMediaQueriesForSizing }),
        children: k((e, i, l) => {
            let { key: u } = l,
                c = { opacity: e.value.to((e) => 1 - Math.abs(e)) };
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
                        ...j,
                        ...(N.enabled
                            ? c
                            : { left: e.value.to(T("left", U)), right: e.value.to(T("right", U)), ...(n && c) }),
                    },
                    className: s()({ [E.o]: a.shouldUseMediaQueriesForSizing }),
                    children: y[i].children,
                },
                u,
            );
        }),
    });
}
