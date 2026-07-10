t.d(i, { q: () => b, t: () => x });
var r = t(627968),
    n = t(64700),
    s = t(503698),
    o = t.n(s),
    l = t(580929),
    a = t(562708),
    d = t(66455),
    u = t(607399),
    p = t(844222),
    c = t(717421),
    h = t(866323),
    m = t(765671),
    f = t(919796),
    v = t(989395),
    g = t(688810),
    w = t(346381);
let y = { mass: 1, tension: 300, friction: 28, clamp: !0 };
function M(e, i) {
    return (t) => {
        if (0 === t) return "auto";
        let r = "forwards" === i.current,
            n = t > 0,
            s = !1;
        return (
            n && r && "left" === e && (s = !0),
            n && !r && "right" === e && (s = !0),
            !n && r && "right" === e && (s = !0),
            n || r || "left" !== e || (s = !0),
            s ? `${100 * Math.abs(t)}%` : "auto"
        );
    };
}
function b(e) {
    return null;
}
function x(e) {
    var i, t;
    let { contentDisplay: s, fadeInOut: b = !1, disableDefaultTransformStyling: x, slideWrapperClassName: F, ...S } = e,
        k = {},
        { analyticsLocations: C } = (0, g.Ay)();
    n.Children.forEach(S.children, (e, i) => {
        k[e.props.id] = {
            children: e.props.children,
            impressionName: e.props.impressionName,
            impressionProperties: e.props.impressionProperties,
            index: i,
        };
    });
    let z = S.activeSlide,
        A = (0, f.A)(S.activeSlide),
        Q =
            S.directionOverride ??
            ((i = null != A ? k[A] : null),
            (t = k[z]),
            null == i ? null : i.index > t.index ? "backwards" : i.index < t.index ? "forwards" : null),
        { reducedMotion: U } = n.useContext(p.C),
        N = n.useContext(v.A),
        _ = k[z].impressionName,
        P = { ...k[z].impressionProperties, location_stack: C };
    N({ type: a.ImpressionTypes.MODAL, name: _, properties: P, _stackContext: { isSlide: !0 } });
    let { ref: R, width: j = 0, height: D = 0 } = (0, m.Ay)(z),
        O = { ...y, ...S.springConfig, ...(U.enabled ? { clamp: !0 } : null) },
        q = (0, c.z)(
            { width: S.width ?? j, height: D, config: O },
            null == A ? "animate-never" : "respect-motion-settings",
        ),
        E = (0, h.p)(
            z,
            {
                value: 0,
                from: { value: 1 },
                enter: { value: 0 },
                leave: { value: -1 },
                config: O,
                onRest: (e, i) => {
                    let { item: t } = i;
                    t === z && null != S.onSlideReady && S.onSlideReady(t);
                },
            },
            null == A ? "animate-never" : "respect-motion-settings",
        ),
        H = (0, d.A)(Q),
        { width: I, centered: L = !0 } = S,
        T =
            u.Fr && !S.shouldUseMediaQueriesForSizing
                ? "100%"
                : q.width.to((e) => ("string" == typeof e ? e : Math.round(e))),
        V = u.Fr && !S.shouldUseMediaQueriesForSizing ? "100%" : q.height.to((e) => Math.round(e)),
        W = n.useMemo(
            () =>
                u.Fr
                    ? {}
                    : L
                      ? { transform: x ? void 0 : "translate3d(0, -50%, 0) scale(1.0, 1.0)", top: "50%" }
                      : { transform: x ? void 0 : "scale(1.0, 1.0)" },
            [L, x],
        ),
        $ = u.Fr ? {} : { overflow: S.overflow ?? "hidden" },
        B = n.useMemo(
            () => ({ width: u.Fr && !S.shouldUseMediaQueriesForSizing ? "100%" : I }),
            [S.shouldUseMediaQueriesForSizing, I],
        );
    return (0, r.jsx)(l.animated.div, {
        style: { position: "relative", minWidth: T, minHeight: V, ...$ },
        children: E((e, i, t) => {
            let { key: n } = t,
                a = { opacity: e.value.to((e) => 1 - Math.abs(e)) };
            return (0, r.jsx)(
                l.animated.div,
                {
                    ref: i === z ? R : null,
                    style: {
                        position: "absolute",
                        display: s,
                        flexDirection: "column",
                        backfaceVisibility: "hidden",
                        ...B,
                        ...W,
                        ...(U.enabled
                            ? a
                            : { left: e.value.to(M("left", H)), right: e.value.to(M("right", H)), ...(b && a) }),
                    },
                    className: o()({ [w.o]: S.shouldUseMediaQueriesForSizing }, F),
                    children: k[i].children,
                },
                n,
            );
        }),
    });
}
