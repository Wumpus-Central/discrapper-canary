n.d(t, {
    A: () => h,
});
var r = n(627968),
    l = n(64700),
    i = n(533781),
    a = n(265872),
    s = n(688810),
    o = n(384059),
    c = n(421773),
    u = n(729081),
    d = n(709562),
    f = n(376086),
    p = n(985018);

function h(e) {
    let { channel: t, themeable: n, whichPopoutIsOpen: h, setWhichPopoutIsOpen: b } = e,
        { parentAnalyticsLocation: g } = (0, s.Ay)(),
        m = l.useRef(null),
        { isHovered: A, setIsHovered: y, onMouseEnter: O, onMouseLeave: j } = (0, c.A)(200, 300),
        {
            Component: v,
            play: x,
            events: { onMouseEnter: E, onMouseLeave: _ },
        } = (0, i.T)(),
        C = l.useCallback(
            (e) => {
                "focus" !== e.type && (O(), E());
            },
            [O, E],
        ),
        S = l.useCallback(() => {
            null == h && (j(), _());
        }, [j, _, h]),
        I = l.useCallback(() => {
            (0, o.X)(g, o.O.GIFTING),
                h === f.P.GIFTING
                    ? (null == b || b(void 0), j())
                    : (null != h ? (x(), O()) : x(), null == b || b(f.P.GIFTING));
        }, [O, j, g, x, b, h]);
    return (0, r.jsx)(a.Y, {
        targetElementRef: m,
        shouldShow: (A && (h === f.P.GIFTING || null == h)) || h === f.P.GIFTING,
        animation: a.Y.Animation.FADE,
        animationPosition: "top",
        position: "top",
        align: "center",
        spacing: 16,
        onRequestClose: () => {
            y(!1), null == b || b(void 0);
        },
        renderPopout: (e) => {
            let { closePopout: n } = e;
            return (0, r.jsx)(u.A, {
                channel: t,
                closePopout: n,
                isHovered: A,
                onMouseEnter: O,
                onMouseLeave: j,
            });
        },
        children: () =>
            (0, r.jsx)(d.l, {
                ref: m,
                isTrayButton: !0,
                themeable: n,
                "aria-label": p.intl.string(p.t.PEjaCx),
                iconComponent: v,
                onClick: I,
                onMouseEnter: C,
                onMouseLeave: S,
                isActive: A || h === f.P.GIFTING,
                color: A || h === f.P.GIFTING ? "primaryDark" : void 0,
            }),
    });
}
