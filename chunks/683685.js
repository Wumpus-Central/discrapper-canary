var i = n(477900);
n(582128);
var a = n(517352),
    r = n(793574),
    l = n(920050),
    o = n(757036),
    s = n(933730),
    d = n(60163),
    c = n(116716),
    u = n(770300),
    m = n(792996);
n.d(
    t,
    {},
    {
        A: function (e) {
            let { targetElementRef: t, dismissPopover: n, children: f } = e,
                g = (0, o.L)(),
                { assetUrl: b } = (0, d.A)(a.oW.OUTBOUND_PROMOTION_POPOVER);
            return (0, i.jsx)(s.A, {
                targetElementRef: t,
                dismissPopover: n,
                title: m.intl.string(u.default.E1sPHw),
                body: [m.intl.string(u.default.yTYUJw)],
                assetUrl: null != b ? b : void 0,
                ctaType: g ? s.g.NAVIGATE_TO_PERK : s.g.OPEN_PAYMENT_MODAL,
                ctaTextOverride: g ? m.intl.string(c.default.vlafDc) : void 0,
                perkCardId: l.CODE_BLURPLE_CARD_ID,
                analyticsLocation: r.A.CODE_BLURPLE_PREMIUM_TAB_POPOVER,
                children: f,
            });
        },
    },
);
