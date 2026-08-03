i.d(n, { default: () => u });
var a = i(477900);
i(582128);
var l = i(976860),
    o = i(174459),
    r = i(831318),
    c = i(652215);
i(811233);
var e = i(375708),
    s = i(936037);
function u(t) {
    let { onClose: n, isReminder: i = !1, limit: u, ...p } = t,
        _ = i ? 50 : 200;
    return (0, a.jsx)(r.A, {
        title:
            null == u
                ? e.intl.string(e.t.w4DRbZ)
                : e.intl.formatToPlainString(i ? e.t["cpj9o/"] : e.t.Oxm3Sq, { premiumMax: _ }),
        subtitle:
            null == u
                ? e.intl.string(e.t.F6u3E3)
                : e.intl.formatToPlainString(i ? e.t.IwWQgO : e.t.sgXqR1, { max: u, premiumMax: _ }),
        graphic: { src: s, type: "image" },
        badgeType: "beta",
        secondaryCTA: e.intl.string(e.t.PcTCB7),
        onSecondaryClick: function () {
            o.default.track(c.HAw.PREMIUM_PROMOTION_OPENED, {
                location_section: c.JJy.PREMIUM_FOR_LATER_UPSELL_MODAL,
                location_object: c.ZSU.NAVIGATION_LINK,
            }),
                n(),
                (0, l.pX)(c.BVt.APPLICATION_STORE);
        },
        onClose: n,
        ...p,
    });
}
