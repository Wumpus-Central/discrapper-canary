"use strict";
n.d(t, { A: () => c });
var r = n(627968),
    i = n(64700),
    s = n(397927),
    a = n(979474),
    o = n(4103),
    l = n(652215),
    u = n(985018);
function c(e) {
    let { user: t, analyticsLocations: n, confettiEnabled: c = !0, onClose: d } = e,
        { giftButtonRef: _, handleMouseEnter: f } = (0, o.A)({ enabled: c }),
        { openGiftModal: p } = (0, a.$)({
            giftRecipient: t,
            analyticsLocations: n,
            analyticsObject: {
                page: l.liQ.USER_PROFILE,
                section: l.JJy.USER_PROFILE,
                object: l.ZSU.BUTTON_ICON,
                objectType: l.AnalyticsObjectTypes.GIFT,
            },
            location: "gift-button-with-confetti",
        }),
        h = i.useCallback(() => {
            p(), d?.();
        }, [p, d]);
    return (0, r.jsx)("div", {
        ref: _,
        onMouseEnter: f,
        children: (0, r.jsx)(s.K0, {
            size: "sm",
            variant: "icon-only",
            icon: s.okO,
            "aria-label": u.intl.string(u.t.PEjaCx),
            onClick: h,
        }),
    });
}
