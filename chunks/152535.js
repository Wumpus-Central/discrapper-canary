n.d(t, { A: () => g });
var i = n(627968),
    l = n(64700),
    s = n(533781),
    a = n(265872),
    r = n(688810),
    o = n(384059),
    d = n(421773),
    c = n(729081),
    u = n(709562),
    h = n(376086),
    A = n(985018);
function g(e) {
    let { channel: t, themeable: n, whichPopoutIsOpen: g, setWhichPopoutIsOpen: m } = e,
        { parentAnalyticsLocation: p } = (0, r.Ay)(),
        _ = l.useRef(null),
        { isHovered: x, setIsHovered: f, onMouseEnter: E, onMouseLeave: C } = (0, d.A)(200, 300),
        {
            Component: I,
            play: S,
            events: { onMouseEnter: b, onMouseLeave: N },
        } = (0, s.T)(),
        T = l.useCallback(
            (e) => {
                "focus" !== e.type && (E(), b());
            },
            [E, b],
        ),
        j = l.useCallback(() => {
            null == g && (C(), N());
        }, [C, N, g]),
        v = l.useCallback(() => {
            (0, o.X)(p, o.O.GIFTING),
                g === h.P.GIFTING ? (m?.(void 0), C()) : (null != g ? (S(), E()) : S(), m?.(h.P.GIFTING));
        }, [E, C, p, S, m, g]);
    return (0, i.jsx)(a.Y, {
        targetElementRef: _,
        shouldShow: (x && (g === h.P.GIFTING || null == g)) || g === h.P.GIFTING,
        animation: a.Y.Animation.FADE,
        animationPosition: "top",
        position: "top",
        align: "center",
        spacing: 16,
        onRequestClose: () => {
            f(!1), m?.(void 0);
        },
        renderPopout: (e) => {
            let { closePopout: n } = e;
            return (0, i.jsx)(c.A, { channel: t, closePopout: n, isHovered: x, onMouseEnter: E, onMouseLeave: C });
        },
        children: () =>
            (0, i.jsx)(u.l, {
                ref: _,
                isTrayButton: !0,
                themeable: n,
                "aria-label": A.intl.string(A.t.PEjaCx),
                iconComponent: I,
                onClick: v,
                onMouseEnter: T,
                onMouseLeave: j,
                isActive: x || g === h.P.GIFTING,
                color: x || g === h.P.GIFTING ? "primaryDark" : void 0,
            }),
    });
}
