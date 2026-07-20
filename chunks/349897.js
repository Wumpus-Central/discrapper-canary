"use strict";
n.d(t, { T: () => p });
var i = n(627968),
    r = n(64700),
    a = n(523939),
    s = n(866665),
    l = n(717421),
    o = n(713608),
    d = n(918715),
    c = n(271520),
    u = n(762555),
    _ = n(788077),
    E = n(375708),
    A = n(603516);
function h(e) {
    let {
        leftPx: t,
        rightPx: n,
        setHoveredIndex: r,
        isAnimated: l,
        index: o,
        expansionSpring: d,
        icon: c,
        tooltip: u,
    } = e;
    return (0, i.jsx)(s.m, {
        delay: 300,
        text: u,
        children: (0, i.jsx)(a.animated.div, {
            className: A.z,
            onMouseEnter: () => r(o),
            onMouseLeave: () => r(null),
            style: {
                left: l ? d.to((e) => t - e) : t,
                right: n,
                width: l ? d.to((e) => `${I + 2 * e}px`) : I,
                height: l ? d.to((e) => `${I + 2 * e}px`) : I,
            },
            children: (0, i.jsx)(c, { size: "custom", width: "100%", height: "100%" }),
        }),
    });
}
let I = 12,
    f = { tension: 500, friction: 30, clamp: !0 };
function p(e) {
    let [t, n] = r.useState(null),
        a = r.useRef(null),
        [{ expansion: s }, A] = (0, l.z)(() => ({
            expansion: 0,
            config: f,
            onRest: () => {
                null == a.current && n(null);
            },
        })),
        p = r.useCallback(
            (e) => {
                (a.current = e), null != e ? (n(e), A({ expansion: 4 })) : A({ expansion: 0 });
            },
            [A],
        ),
        T = c.A.useConfig({ location: "useClipTimelineIndicators" }).enableGameEventsOnPlayer,
        m = r.useMemo(() => (T ? e.filter((e) => null != e.game) : []), [e, T]),
        g = r.useMemo(() => m.map((e, t) => ({ index: t, timeSec: e.timestamp_ms / 1e3, widthPx: I, gapPx: 4 })), [m]),
        S = r.useCallback(
            (e) => {
                let n,
                    r,
                    a = t === e.index,
                    l = m[e.index];
                if (null == l) return null;
                switch (l.game.type) {
                    case u.Q_.MULTIKILL:
                        (r = E.intl.string(_.default.PMLPER)), (n = o.q);
                        break;
                    case u.Q_.KILL:
                        (n = o.q), (r = E.intl.string(_.default.fYdqnM));
                        break;
                    case u.Q_.DEATH:
                        (n = d.V), (r = E.intl.string(_.default.MhIx41));
                }
                return null == n || null == r
                    ? null
                    : (0, i.jsx)(h, {
                          ...e,
                          gapPx: 4,
                          tooltip: r,
                          expansionSpring: s,
                          setHoveredIndex: p,
                          isAnimated: a,
                          icon: n,
                      });
            },
            [t, m, p, s],
        );
    return { indicators: g, animatingIndex: t, expansionSpring: s, hoverExpansionPx: 4, renderIndicator: S };
}
