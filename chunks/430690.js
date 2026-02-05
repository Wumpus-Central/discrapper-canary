"use strict";
n.d(t, { q: () => T, t: () => y });
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
    p = n(919796),
    h = n(989395),
    m = n(688810),
    g = n(929376);
let E = { mass: 1, tension: 300, friction: 28, clamp: !0 };
function A(e, t) {
    return null == e ? null : e.index > t.index ? "backwards" : e.index < t.index ? "forwards" : null;
}
function I(e, t) {
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
function T(e) {
    return null;
}
function y(e) {
    let { contentDisplay: t, fadeInOut: n = !1, ...a } = e,
        T = {},
        { analyticsLocations: y } = (0, m.Ay)();
    i.Children.forEach(a.children, (e, t) => {
        T[e.props.id] = {
            children: e.props.children,
            impressionName: e.props.impressionName,
            impressionProperties: e.props.impressionProperties,
            index: t,
        };
    });
    let S = a.activeSlide,
        v = (0, p.A)(a.activeSlide),
        C = a.directionOverride ?? A(null != v ? T[v] : null, T[S]),
        { reducedMotion: b } = i.useContext(d.CZY),
        N = i.useContext(h.A),
        R = T[S].impressionName,
        O = { ...T[S].impressionProperties, location_stack: y };
    N({ type: l.ImpressionTypes.MODAL, name: R, properties: O, _stackContext: { isSlide: !0 } });
    let { ref: D, width: L = 0, height: w = 0 } = (0, f.Ay)(S),
        x = { ...E, ...a.springConfig, ...(b.enabled ? { clamp: !0 } : null) },
        P = (0, _.zhh)(
            { width: a.width ?? L, height: w, config: x },
            null == v ? "animate-never" : "respect-motion-settings",
        ),
        M = (0, _.pnh)(
            S,
            {
                value: 0,
                from: { value: 1 },
                enter: { value: 0 },
                leave: { value: -1 },
                config: x,
                onRest: (e, t) => {
                    let { item: n } = t;
                    n === S && null != a.onSlideReady && a.onSlideReady(n);
                },
            },
            null == v ? "animate-never" : "respect-motion-settings",
        ),
        k = (0, u.A)(C),
        { width: U, centered: G = !0 } = a,
        V =
            c.Fr && !a.shouldUseMediaQueriesForSizing
                ? "100%"
                : P.width.to((e) => ("string" == typeof e ? e : Math.round(e))),
        F = c.Fr && !a.shouldUseMediaQueriesForSizing ? "100%" : P.height.to((e) => Math.round(e)),
        B = c.Fr
            ? {}
            : G
              ? { transform: "translate3d(0, -50%, 0) scale(1.0, 1.0)", top: "50%" }
              : { transform: "scale(1.0, 1.0)" },
        j = c.Fr ? {} : { overflow: a.overflow ?? "hidden" },
        H = i.useMemo(
            () => ({ width: c.Fr && !a.shouldUseMediaQueriesForSizing ? "100%" : U }),
            [a.shouldUseMediaQueriesForSizing, U],
        );
    return (0, r.jsx)(o.animated.div, {
        style: { position: "relative", minWidth: V, minHeight: F, ...j },
        className: s()({ [g.f]: a.shouldUseMediaQueriesForSizing }),
        children: M((e, i, l) => {
            let { key: u } = l,
                c = { opacity: e.value.to((e) => 1 - Math.abs(e)) };
            return (0, r.jsx)(
                o.animated.div,
                {
                    ref: i === S ? D : null,
                    style: {
                        position: "absolute",
                        display: t,
                        flexDirection: "column",
                        backfaceVisibility: "hidden",
                        ...H,
                        ...B,
                        ...(b.enabled
                            ? c
                            : { left: e.value.to(I("left", k)), right: e.value.to(I("right", k)), ...(n && c) }),
                    },
                    className: s()({ [g.o]: a.shouldUseMediaQueriesForSizing }),
                    children: T[i].children,
                },
                u,
            );
        }),
    });
}
