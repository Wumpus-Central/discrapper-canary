n.d(t, { A: () => u });
var r = n(627968),
    i = n(64700),
    a = n(397927),
    s = n(404036),
    o = n(4103),
    l = n(652215),
    c = n(985018);
function u(e) {
    let { user: t, analyticsLocations: n, confettiEnabled: u = !0 } = e,
        { giftButtonRef: d, handleMouseEnter: f } = (0, o.A)({ enabled: u }),
        p = i.useCallback(() => {
            (0, s.A)({
                giftRecipient: t,
                analyticsLocations: n,
                analyticsObject: {
                    page: l.liQ.USER_PROFILE,
                    section: l.JJy.USER_PROFILE,
                    object: l.ZSU.BUTTON_ICON,
                    objectType: l.AnalyticsObjectTypes.GIFT,
                },
            });
        }, [t, n]);
    return (0, r.jsx)("div", {
        ref: d,
        onMouseEnter: f,
        children: (0, r.jsx)(a.K0, {
            size: "sm",
            variant: "icon-only",
            icon: a.okO,
            "aria-label": c.intl.string(c.t.PEjaCx),
            onClick: p,
        }),
    });
}
