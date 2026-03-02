n.d(e, { default: () => p });
var c = n(627968);
n(64700);
var i = n(87719),
    o = n(414345),
    a = n(244975),
    s = n(788868),
    r = n(652215),
    l = n(985018),
    d = n(399703);
function p(t) {
    let { onClose: e, source: n, ...p } = t,
        b = l.intl.format(l.t.WMO9po, {
            onAndMore: function () {
                e(), (0, i.e)();
            },
        });
    return (0, o.g1)({ location: "PremiumGuildMemberProfileUpsell" })
        ? (0, c.jsx)(a.F, {
              title: l.intl.string(l.t.kOEBKP),
              subtitle: b,
              graphic: { src: d.A, type: "image" },
              secondaryCTA: l.intl.string(l.t["13/7kX"]),
              onSecondaryClick: e,
              onClose: e,
              ...p,
          })
        : (0, c.jsx)(a.A, {
              artURL: d.A,
              type: s.e.PREMIUM_GUILD_IDENTITY_MODAL,
              title: l.intl.string(l.t.kOEBKP),
              body: b,
              glowUp: b,
              analyticsSource: n,
              analyticsLocation: { section: r.JJy.PREMIUM_GUILD_MEMBER_PROFILE_UPSELL_MODAL, object: r.ZSU.BUTTON_CTA },
              onClose: e,
              ...p,
          });
}
