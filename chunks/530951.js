s.d(n, { default: () => p });
var i = s(627968);
s(64700);
var e = s(976860),
    c = s(954571),
    a = s(414345),
    o = s(244975),
    l = s(788868),
    r = s(652215),
    _ = s(985018),
    E = s(774911),
    u = s(936037);
function d() {
    return (0, i.jsx)("div", { className: E.J, children: (0, i.jsx)("img", { src: u, className: E.s, alt: "" }) });
}
function p(t) {
    let { onClose: n, source: s, ...E } = t;
    function p() {
        c.default.track(r.HAw.PREMIUM_PROMOTION_OPENED, {
            location_section: r.JJy.PREMIUM_FOR_LATER_UPSELL_MODAL,
            location_object: r.ZSU.NAVIGATION_LINK,
        }),
            n(),
            (0, e.pX)(r.BVt.APPLICATION_STORE);
    }
    return (0, a.g1)({ location: "PremiumForLaterUpsell" })
        ? (0, i.jsx)(o.F, {
              title: _.intl.string(_.t.w4DRbZ),
              subtitle: _.intl.string(_.t.F6u3E3),
              graphic: { src: u, type: "image" },
              secondaryCTA: _.intl.string(_.t.PcTCB7),
              onSecondaryClick: p,
              showEnhancedUpsell: !0,
              onClose: n,
              ...E,
          })
        : (0, i.jsx)(o.A, {
              artElement: (0, i.jsx)(d, {}),
              type: l.e.FOR_LATER_MODAL_UPSELL,
              title: _.intl.string(_.t.w4DRbZ),
              body: _.intl.string(_.t.F6u3E3),
              glowUp: _.intl.string(_.t.F6u3E3),
              secondaryCTA: _.intl.string(_.t.PcTCB7),
              onSecondaryClick: p,
              showEnhancedUpsell: !0,
              analyticsSource: s,
              analyticsLocation: { section: r.JJy.PREMIUM_FOR_LATER_UPSELL_MODAL, object: r.ZSU.BUTTON_CTA },
              onClose: n,
              ...E,
          });
}
