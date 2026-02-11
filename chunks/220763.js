n.d(t, { default: () => u });
var i = n(627968);
n(64700);
var a = n(87719),
    s = n(414345),
    l = n(244975),
    o = n(788868),
    r = n(652215),
    c = n(985018),
    d = n(736975);
function u(e) {
    let { channel: t, onClose: n, ...u } = e,
        p = c.intl.format(c.t.AVVUse, {
            onLearnMore: function () {
                n(), (0, a.e)();
            },
        });
    return (0, s.g)({ location: "PremiumMessageLengthUpsell" })
        ? (0, i.jsx)(l.F, {
              title: c.intl.string(c.t.SeL3ec),
              subtitle: p,
              graphic: { src: d.A, type: "image" },
              secondaryCTA: c.intl.string(c.t["13/7kX"]),
              onSecondaryClick: n,
              onClose: n,
              ...u,
          })
        : (0, i.jsx)(l.A, {
              artURL: d.A,
              type: o.e.MESSAGE_LENGTH_UPSELL,
              title: c.intl.string(c.t.SeL3ec),
              body: p,
              glowUp: p,
              analyticsSource: {
                  page:
                      t?.getGuildId() != null
                          ? r.liQ.GUILD_CHANNEL
                          : t?.isGroupDM() || t?.isPrivate()
                            ? r.liQ.DM_CHANNEL
                            : null,
              },
              analyticsLocation: { section: r.JJy.MESSAGE_LENGTH_UPSELL_MODAL, object: r.ZSU.BUTTON_CTA },
              onClose: n,
              ...u,
          });
}
