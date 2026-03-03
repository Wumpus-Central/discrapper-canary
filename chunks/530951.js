i.d(n, { default: () => L });
var s = i(627968);
i(64700);
var e = i(976860),
    c = i(954571),
    a = i(414345),
    o = i(244975),
    r = i(788868),
    l = i(652215),
    _ = i(985018),
    u = i(774911),
    E = i(936037);
function A() {
    return (0, s.jsx)("div", { className: u.J, children: (0, s.jsx)("img", { src: E, className: u.s, alt: "" }) });
}
function L(t) {
    let { onClose: n, source: i, ...u } = t;
    function L() {
        c.default.track(l.HAw.PREMIUM_PROMOTION_OPENED, {
            location_section: l.JJy.PREMIUM_FOR_LATER_UPSELL_MODAL,
            location_object: l.ZSU.NAVIGATION_LINK,
        }),
            n(),
            (0, e.pX)(l.BVt.APPLICATION_STORE);
    }
    return (0, a.g1)({ location: "PremiumForLaterUpsell" })
        ? (0, s.jsx)(o.F, {
              title: _.intl.string(_.t.w4DRbZ),
              subtitle: _.intl.string(_.t.F6u3E3),
              graphic: { src: E, type: "image" },
              secondaryCTA: _.intl.string(_.t.PcTCB7),
              onSecondaryClick: L,
              onClose: n,
              ...u,
          })
        : (0, s.jsx)(o.A, {
              artElement: (0, s.jsx)(A, {}),
              type: r.e.FOR_LATER_MODAL_UPSELL,
              title: _.intl.string(_.t.w4DRbZ),
              body: _.intl.string(_.t.F6u3E3),
              glowUp: _.intl.string(_.t.F6u3E3),
              secondaryCTA: _.intl.string(_.t.PcTCB7),
              onSecondaryClick: L,
              showEnhancedUpsell: !0,
              analyticsSource: i,
              analyticsLocation: { section: l.JJy.PREMIUM_FOR_LATER_UPSELL_MODAL, object: l.ZSU.BUTTON_CTA },
              onClose: n,
              ...u,
          });
}
