var i = n(477900);
n(582128);
var a = n(517352),
    l = n(793574),
    r = n(920050),
    s = n(757036),
    o = n(933730),
    d = n(60163),
    c = n(116716),
    u = n(770300),
    f = n(792996);
n.d(
    t,
    {},
    {
        A: function (e) {
            let { targetElementRef: t, dismissPopover: n, children: m } = e,
                g = (0, s.L)(),
                { assetUrl: b } = (0, d.A)(a.oW.OUTBOUND_PROMOTION_POPOVER);
            return (0, i.jsx)(o.A, {
                targetElementRef: t,
                dismissPopover: n,
                title: f.intl.string(u.default.E1sPHw),
                body: [f.intl.string(u.default.yTYUJw)],
                assetUrl: null != b ? b : void 0,
                ctaType: g ? o.g.NAVIGATE_TO_PERK : o.g.OPEN_PAYMENT_MODAL,
                ctaTextOverride: g ? f.intl.string(c.default.vlafDc) : void 0,
                perkCardId: r.CODE_BLURPLE_CARD_ID,
                analyticsLocation: l.A.CODE_BLURPLE_PREMIUM_TAB_POPOVER,
                children: m,
            });
        },
    },
);
