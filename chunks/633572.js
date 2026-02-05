"use strict";
n.d(t, { A: () => c });
var r = n(627968),
    i = n(64700),
    a = n(397927),
    s = n(404036),
    o = n(4103),
    l = n(652215),
    u = n(985018);
function c(e) {
    let { user: t, analyticsLocations: n, confettiEnabled: c = !0 } = e,
        { giftButtonRef: d, handleMouseEnter: _ } = (0, o.A)({ enabled: c }),
        f = i.useCallback(() => {
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
        onMouseEnter: _,
        children: (0, r.jsx)(a.K0, {
            size: "sm",
            variant: "icon-only",
            icon: a.okO,
            "aria-label": u.intl.string(u.t.PEjaCx),
            onClick: f,
        }),
    });
}
