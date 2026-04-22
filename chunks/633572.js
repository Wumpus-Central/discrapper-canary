n.d(t, { A: () => d });
var a = n(627968),
    r = n(64700),
    l = n(408278),
    i = n(597770),
    o = n(233971),
    s = n(4103),
    c = n(652215),
    u = n(985018);
function d(e) {
    let { user: t, analyticsLocations: n, confettiEnabled: d = !0, onClose: f } = e,
        { giftButtonRef: _, handleMouseEnter: h } = (0, s.A)({ enabled: d }),
        { openGiftModal: A } = (0, o.$)({
            giftRecipient: t,
            analyticsLocations: n,
            analyticsObject: {
                page: c.liQ.USER_PROFILE,
                section: c.JJy.USER_PROFILE,
                object: c.ZSU.BUTTON_ICON,
                objectType: c.AnalyticsObjectTypes.GIFT,
            },
            location: "gift-button-with-confetti",
        }),
        p = r.useCallback(() => {
            A(), f?.();
        }, [A, f]);
    return (0, a.jsx)("div", {
        ref: _,
        onMouseEnter: h,
        children: (0, a.jsx)(l.K, {
            size: "sm",
            variant: "icon-only",
            icon: i.o,
            "aria-label": u.intl.string(u.t.PEjaCx),
            onClick: p,
        }),
    });
}
