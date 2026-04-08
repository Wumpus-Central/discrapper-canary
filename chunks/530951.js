i.d(c, { default: () => p });
var n = i(627968);
i(64700);
var s = i(976860),
    e = i(954571),
    a = i(244975),
    o = i(652215),
    r = i(985018),
    l = i(936037);
function p(t) {
    let { onClose: c, ...i } = t;
    return (0, n.jsx)(a.F, {
        title: r.intl.string(r.t.w4DRbZ),
        subtitle: r.intl.string(r.t.F6u3E3),
        graphic: { src: l, type: "image" },
        secondaryCTA: r.intl.string(r.t.PcTCB7),
        onSecondaryClick: function () {
            e.default.track(o.HAw.PREMIUM_PROMOTION_OPENED, {
                location_section: o.JJy.PREMIUM_FOR_LATER_UPSELL_MODAL,
                location_object: o.ZSU.NAVIGATION_LINK,
            }),
                c(),
                (0, s.pX)(o.BVt.APPLICATION_STORE);
        },
        onClose: c,
        ...i,
    });
}
