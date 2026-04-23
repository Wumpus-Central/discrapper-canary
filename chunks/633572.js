"use strict";
n.d(t, { A: () => d });
var r = n(627968),
    i = n(64700),
    s = n(408278),
    a = n(597770),
    o = n(233971),
    l = n(4103),
    u = n(652215),
    c = n(985018);
function d(e) {
    let { user: t, analyticsLocations: n, confettiEnabled: d = !0, onClose: _ } = e,
        { giftButtonRef: f, handleMouseEnter: p } = (0, l.A)({ enabled: d }),
        { openGiftModal: h } = (0, o.$)({
            giftRecipient: t,
            analyticsLocations: n,
            analyticsObject: {
                page: u.liQ.USER_PROFILE,
                section: u.JJy.USER_PROFILE,
                object: u.ZSU.BUTTON_ICON,
                objectType: u.AnalyticsObjectTypes.GIFT,
            },
            location: "gift-button-with-confetti",
        }),
        E = i.useCallback(() => {
            h(), _?.();
        }, [h, _]);
    return (0, r.jsx)("div", {
        ref: f,
        onMouseEnter: p,
        children: (0, r.jsx)(s.K, {
            size: "sm",
            variant: "icon-only",
            icon: a.o,
            "aria-label": c.intl.string(c.t.PEjaCx),
            onClick: E,
        }),
    });
}
