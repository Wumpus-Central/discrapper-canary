n.d(t, { A: () => _ });
var i = n(627968),
    l = n(64700),
    s = n(533781),
    a = n(265872),
    r = n(688810),
    o = n(384059),
    c = n(421773),
    d = n(729081),
    u = n(709562),
    h = n(376086),
    A = n(985018);
function _(e) {
    let { channel: t, themeable: n, whichPopoutIsOpen: _, setWhichPopoutIsOpen: m } = e,
        { parentAnalyticsLocation: g } = (0, r.Ay)(),
        p = l.useRef(null),
        { isHovered: f, setIsHovered: x, onMouseEnter: E, onMouseLeave: I } = (0, c.A)(200, 300),
        {
            Component: C,
            play: N,
            events: { onMouseEnter: T, onMouseLeave: S },
        } = (0, s.T)(),
        b = l.useCallback(
            (e) => {
                "focus" !== e.type && (E(), T());
            },
            [E, T],
        ),
        y = l.useCallback(() => {
            null == _ && (I(), S());
        }, [I, S, _]),
        v = l.useCallback(() => {
            (0, o.X)(g, o.O.GIFTING),
                _ === h.P.GIFTING ? (m?.(void 0), I()) : (null != _ ? (N(), E()) : N(), m?.(h.P.GIFTING));
        }, [E, I, g, N, m, _]);
    return (0, i.jsx)(a.Y, {
        targetElementRef: p,
        shouldShow: (f && (_ === h.P.GIFTING || null == _)) || _ === h.P.GIFTING,
        animation: a.Y.Animation.FADE,
        animationPosition: "top",
        position: "top",
        align: "center",
        spacing: 16,
        onRequestClose: () => {
            x(!1), m?.(void 0);
        },
        renderPopout: (e) => {
            let { closePopout: n } = e;
            return (0, i.jsx)(d.A, { channel: t, closePopout: n, isHovered: f, onMouseEnter: E, onMouseLeave: I });
        },
        children: () =>
            (0, i.jsx)(u.l, {
                ref: p,
                isTrayButton: !0,
                themeable: n,
                "aria-label": A.intl.string(A.t.PEjaCx),
                iconComponent: C,
                onClick: v,
                onMouseEnter: b,
                onMouseLeave: y,
                isActive: f || _ === h.P.GIFTING,
                color: f || _ === h.P.GIFTING ? "primaryDark" : void 0,
            }),
    });
}
