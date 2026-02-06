"use strict";
n.d(t, { A: () => u });
var r = n(627968);
n(64700);
var i = n(397927),
    a = n(979474),
    s = n(4103),
    o = n(652215),
    l = n(985018);
function u(e) {
    let { user: t, analyticsLocations: n, confettiEnabled: u = !0 } = e,
        { giftButtonRef: c, handleMouseEnter: d } = (0, s.A)({ enabled: u }),
        { openGiftModal: _ } = (0, a.$)({
            giftRecipient: t,
            analyticsLocations: n,
            analyticsObject: {
                page: o.liQ.USER_PROFILE,
                section: o.JJy.USER_PROFILE,
                object: o.ZSU.BUTTON_ICON,
                objectType: o.AnalyticsObjectTypes.GIFT,
            },
            location: "gift-button-with-confetti",
        });
    return (0, r.jsx)("div", {
        ref: c,
        onMouseEnter: d,
        children: (0, r.jsx)(i.K0, {
            size: "sm",
            variant: "icon-only",
            icon: i.okO,
            "aria-label": l.intl.string(l.t.PEjaCx),
            onClick: _,
        }),
    });
}
