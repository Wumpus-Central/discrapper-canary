s.d(n, { default: () => L });
var e = s(627968);
s(64700);
var i = s(976860),
    a = s(954571),
    c = s(244975),
    o = s(788868),
    r = s(652215),
    _ = s(985018),
    l = s(774911),
    E = s(936037);
function A() {
    return (0, e.jsx)("div", { className: l.J, children: (0, e.jsx)("img", { src: E, className: l.s, alt: "" }) });
}
function L(t) {
    let { onClose: n, source: s, ...l } = t;
    return (0, e.jsx)(c.A, {
        artElement: (0, e.jsx)(A, {}),
        type: o.e.FOR_LATER_MODAL_UPSELL,
        title: _.intl.string(_.t.w4DRbZ),
        body: _.intl.string(_.t.F6u3E3),
        glowUp: _.intl.string(_.t.F6u3E3),
        secondaryCTA: _.intl.string(_.t.PcTCB7),
        onSecondaryClick: function () {
            a.default.track(r.HAw.PREMIUM_PROMOTION_OPENED, {
                location_section: r.JJy.PREMIUM_FOR_LATER_UPSELL_MODAL,
                location_object: r.ZSU.NAVIGATION_LINK,
            }),
                n(),
                (0, i.pX)(r.BVt.APPLICATION_STORE);
        },
        showEnhancedUpsell: !0,
        analyticsSource: s,
        analyticsLocation: { section: r.JJy.PREMIUM_FOR_LATER_UPSELL_MODAL, object: r.ZSU.BUTTON_CTA },
        onClose: n,
        ...l,
    });
}
