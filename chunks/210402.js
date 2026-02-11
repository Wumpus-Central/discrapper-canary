n.d(t, { default: () => u });
var a = n(627968);
n(64700);
var i = n(87719),
    r = n(414345),
    s = n(244975),
    o = n(788868),
    c = n(652215),
    l = n(985018),
    d = n(451067),
    p = n(196436);
function u(e) {
    let { onClose: t, analyticsSource: n, onLearnMore: u, ...b } = e,
        g = o.pe.TIER_2,
        f = l.intl.format(l.t.hDMlqD, {
            onLearnMore: function () {
                u?.(), t(), (0, i.e)();
            },
        });
    return (0, r.g)({ location: "PremiumVideoBackgroundsUpsell" })
        ? (0, a.jsx)(s.F, {
              title: l.intl.string(l.t.fHqiDW),
              subtitle: f,
              graphic: { src: p.A, type: "image" },
              onSecondaryClick: t,
              secondaryCTA: l.intl.string(l.t["13/7kX"]),
              onClose: t,
              showEnhancedUpsell: !0,
              subscriptionTier: g,
              ...b,
          })
        : (0, a.jsx)(s.A, {
              artURL: p.A,
              artContainerClassName: d.z,
              type: o.e.VIDEO_BACKGROUNDS_MODAL,
              title: l.intl.string(l.t.fHqiDW),
              body: f,
              glowUp: f,
              analyticsSource: n,
              analyticsLocation: { page: c.liQ.PREMIUM_UPSELL_MODAL_VIDEO_BACKGROUNDS, object: c.ZSU.BUTTON_CTA },
              onClose: t,
              subscriptionTier: g,
              ...b,
          });
}
