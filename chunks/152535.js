"use strict";
n.d(t, { A: () => p });
var i = n(627968),
    s = n(64700),
    l = n(533781),
    r = n(265872),
    a = n(688810),
    o = n(384059),
    c = n(421773),
    d = n(729081),
    u = n(709562),
    h = n(376086),
    A = n(985018);
function p(e) {
    let { channel: t, themeable: n, whichPopoutIsOpen: p, setWhichPopoutIsOpen: g } = e,
        { parentAnalyticsLocation: m } = (0, a.Ay)(),
        _ = s.useRef(null),
        { isHovered: f, setIsHovered: x, onMouseEnter: C, onMouseLeave: E } = (0, c.A)(200, 300),
        {
            Component: I,
            play: b,
            events: { onMouseEnter: N, onMouseLeave: S },
        } = (0, l.T)(),
        T = s.useCallback(
            (e) => {
                "focus" !== e.type && (C(), N());
            },
            [C, N],
        ),
        v = s.useCallback(() => {
            null == p && (E(), S());
        }, [E, S, p]),
        y = s.useCallback(() => {
            (0, o.X)(m, o.O.GIFTING),
                p === h.P.GIFTING ? (g?.(void 0), E()) : (null != p ? (b(), C()) : b(), g?.(h.P.GIFTING));
        }, [C, E, m, b, g, p]);
    return (0, i.jsx)(r.Y, {
        targetElementRef: _,
        shouldShow: (f && (p === h.P.GIFTING || null == p)) || p === h.P.GIFTING,
        animation: r.Y.Animation.FADE,
        animationPosition: "top",
        position: "top",
        align: "center",
        spacing: 16,
        onRequestClose: () => {
            x(!1), g?.(void 0);
        },
        renderPopout: (e) => {
            let { closePopout: n } = e;
            return (0, i.jsx)(d.A, { channel: t, closePopout: n, isHovered: f, onMouseEnter: C, onMouseLeave: E });
        },
        children: () =>
            (0, i.jsx)(u.l, {
                ref: _,
                isTrayButton: !0,
                themeable: n,
                "aria-label": A.intl.string(A.t.PEjaCx),
                iconComponent: I,
                onClick: y,
                onMouseEnter: T,
                onMouseLeave: v,
                isActive: f || p === h.P.GIFTING,
                color: f || p === h.P.GIFTING ? "primaryDark" : void 0,
            }),
    });
}
