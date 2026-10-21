n.d(t, { A: () => f });
var i = n(477900);
n(582128);
var a = n(877624),
    r = n(793574),
    l = n(920050),
    s = n(757036),
    o = n(933730),
    d = n(60163),
    c = n(685477),
    u = n(973507),
    m = n(105292);
function f(e) {
    let { targetElementRef: t, dismissPopover: n, children: f } = e,
        g = (0, s.L)(),
        { assetUrl: b } = (0, d.A)(a.C.OUTBOUND_PROMOTION_POPOVER);
    return (0, i.jsx)(o.A, {
        targetElementRef: t,
        dismissPopover: n,
        title: m.intl.string(u.default.E1sPHw),
        body: [m.intl.string(u.default.yTYUJw)],
        assetUrl: null != b ? b : void 0,
        ctaType: g ? o.g.NAVIGATE_TO_PERK : o.g.OPEN_PAYMENT_MODAL,
        ctaTextOverride: g ? m.intl.string(c.default.vlafDc) : void 0,
        perkCardId: l.CODE_BLURPLE_CARD_ID,
        analyticsLocation: r.A.CODE_BLURPLE_PREMIUM_TAB_POPOVER,
        children: f,
    });
}
