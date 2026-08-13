"use strict";
n.d(t, { T: () => N });
var i = n(477900),
    r = n(582128),
    a = n(503698),
    s = n.n(a),
    l = n(159265),
    o = n(505124),
    d = n(866665),
    c = n(43990),
    u = n(717421),
    _ = n(713608),
    E = n(918715),
    A = n(661531),
    h = n(271520),
    I = n(762555),
    f = n(16590),
    p = n(375708),
    T = n(111524);
function m(e) {
    let {
        leftPx: t,
        rightPx: n,
        setHoveredIndex: r,
        isAnimated: a,
        index: u,
        activated: _,
        expansionSpring: E,
        icon: h,
        tooltip: I,
    } = e;
    return (0, i.jsx)(d.m, {
        delay: 300,
        text: I,
        children: (0, i.jsx)(c.N, {
            theme: o.NJ.MIDNIGHT,
            children: (e) =>
                (0, i.jsx)(l.animated.div, {
                    className: s()(T.z, e),
                    onMouseEnter: () => r(u),
                    onMouseLeave: () => r(null),
                    style: {
                        left: a ? E.to((e) => t - e) : t,
                        right: n,
                        width: a ? E.to((e) => `${g + 2 * e}px`) : g,
                        height: a ? E.to((e) => `${g + 2 * e}px`) : g,
                    },
                    children: (0, i.jsx)(h, {
                        size: "custom",
                        width: "100%",
                        height: "100%",
                        color: _ ? A.A.colors.INTERACTIVE_ICON_ACTIVE : A.A.colors.INTERACTIVE_ICON_DEFAULT,
                    }),
                }),
        }),
    });
}
let g = 12,
    S = { tension: 500, friction: 30, clamp: !0 };
function N(e) {
    let [t, n] = r.useState(null),
        a = r.useRef(null),
        [{ expansion: s }, l] = (0, u.z)(() => ({
            expansion: 0,
            config: S,
            onRest: () => {
                null == a.current && n(null);
            },
        })),
        o = r.useCallback(
            (e) => {
                (a.current = e), null != e ? (n(e), l({ expansion: 4 })) : l({ expansion: 0 });
            },
            [l],
        ),
        d = h.A.useConfig({ location: "useClipTimelineIndicators" }).enableGameEventsOnPlayer,
        c = r.useMemo(() => (d ? e.filter((e) => null != e.game) : []), [e, d]),
        A = r.useMemo(() => c.map((e, t) => ({ index: t, timeSec: e.timestamp_ms / 1e3, widthPx: g, gapPx: 4 })), [c]),
        T = r.useCallback(
            (e, n) => {
                let r,
                    a,
                    l = t === e.index,
                    d = c[e.index];
                if (null == d) return null;
                let u = n > e.leftPx;
                switch (d.game.type) {
                    case I.Q_.MULTIKILL:
                        (a = p.intl.string(f.default.PMLPER)), (r = _.q);
                        break;
                    case I.Q_.KILL:
                        (r = _.q), (a = p.intl.string(f.default.fYdqnM));
                        break;
                    case I.Q_.DEATH:
                        (r = E.V), (a = p.intl.string(f.default.MhIx41));
                }
                return null == r || null == a
                    ? null
                    : (0, i.jsx)(m, {
                          ...e,
                          activated: u,
                          gapPx: 4,
                          tooltip: a,
                          expansionSpring: s,
                          setHoveredIndex: o,
                          isAnimated: l,
                          icon: r,
                      });
            },
            [t, c, o, s],
        );
    return { indicators: A, animatingIndex: t, expansionSpring: s, hoverExpansionPx: 4, renderIndicator: T };
}
