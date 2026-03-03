n.d(e, { default: () => u });
var a = n(627968);
n(64700);
var i = n(87719),
    r = n(414345),
    o = n(244975),
    s = n(788868),
    c = n(652215),
    d = n(985018),
    l = n(451067),
    p = n(196436);
function u(t) {
    let { onClose: e, analyticsSource: n, onLearnMore: u, ...C } = t,
        _ = s.pe.TIER_2,
        A = d.intl.format(d.t.hDMlqD, {
            onLearnMore: function () {
                u?.(), e(), (0, i.e)();
            },
        });
    return (0, r.g1)({ location: "PremiumVideoBackgroundsUpsell" })
        ? (0, a.jsx)(o.F, {
              title: d.intl.string(d.t.fHqiDW),
              subtitle: A,
              graphic: { src: p.A, type: "image" },
              onSecondaryClick: e,
              secondaryCTA: d.intl.string(d.t["13/7kX"]),
              onClose: e,
              subscriptionTier: _,
              ...C,
          })
        : (0, a.jsx)(o.A, {
              artURL: p.A,
              artContainerClassName: l.z,
              type: s.e.VIDEO_BACKGROUNDS_MODAL,
              title: d.intl.string(d.t.fHqiDW),
              body: A,
              glowUp: A,
              analyticsSource: n,
              analyticsLocation: { page: c.liQ.PREMIUM_UPSELL_MODAL_VIDEO_BACKGROUNDS, object: c.ZSU.BUTTON_CTA },
              onClose: e,
              subscriptionTier: _,
              ...C,
          });
}
