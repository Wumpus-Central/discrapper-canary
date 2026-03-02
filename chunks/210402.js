n.d(e, { default: () => u });
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
function u(t) {
    let { onClose: e, analyticsSource: n, onLearnMore: u, ...C } = t,
        _ = o.pe.TIER_2,
        A = l.intl.format(l.t.hDMlqD, {
            onLearnMore: function () {
                u?.(), e(), (0, i.e)();
            },
        });
    return (0, r.g1)({ location: "PremiumVideoBackgroundsUpsell" })
        ? (0, a.jsx)(s.F, {
              title: l.intl.string(l.t.fHqiDW),
              subtitle: A,
              graphic: { src: p.A, type: "image" },
              onSecondaryClick: e,
              secondaryCTA: l.intl.string(l.t["13/7kX"]),
              onClose: e,
              showEnhancedUpsell: !0,
              subscriptionTier: _,
              ...C,
          })
        : (0, a.jsx)(s.A, {
              artURL: p.A,
              artContainerClassName: d.z,
              type: o.e.VIDEO_BACKGROUNDS_MODAL,
              title: l.intl.string(l.t.fHqiDW),
              body: A,
              glowUp: A,
              analyticsSource: n,
              analyticsLocation: { page: c.liQ.PREMIUM_UPSELL_MODAL_VIDEO_BACKGROUNDS, object: c.ZSU.BUTTON_CTA },
              onClose: e,
              subscriptionTier: _,
              ...C,
          });
}
