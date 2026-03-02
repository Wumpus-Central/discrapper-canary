n.d(e, { default: () => L });
var a = n(627968);
n(64700);
var i = n(87719),
    r = n(414345),
    s = n(244975),
    o = n(788868),
    c = n(652215),
    l = n(985018),
    d = n(736975);
function L(t) {
    let { channel: e, onClose: n, ...L } = t,
        u = l.intl.format(l.t.AVVUse, {
            onLearnMore: function () {
                n(), (0, i.e)();
            },
        });
    return (0, r.g1)({ location: "PremiumMessageLengthUpsell" })
        ? (0, a.jsx)(s.F, {
              title: l.intl.string(l.t.SeL3ec),
              subtitle: u,
              graphic: { src: d.A, type: "image" },
              secondaryCTA: l.intl.string(l.t["13/7kX"]),
              onSecondaryClick: n,
              onClose: n,
              ...L,
          })
        : (0, a.jsx)(s.A, {
              artURL: d.A,
              type: o.e.MESSAGE_LENGTH_UPSELL,
              title: l.intl.string(l.t.SeL3ec),
              body: u,
              glowUp: u,
              analyticsSource: {
                  page:
                      e?.getGuildId() != null
                          ? c.liQ.GUILD_CHANNEL
                          : e?.isGroupDM() || e?.isPrivate()
                            ? c.liQ.DM_CHANNEL
                            : null,
              },
              analyticsLocation: { section: c.JJy.MESSAGE_LENGTH_UPSELL_MODAL, object: c.ZSU.BUTTON_CTA },
              onClose: n,
              ...L,
          });
}
