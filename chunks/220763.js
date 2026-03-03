n.d(e, { default: () => p });
var a = n(627968);
n(64700);
var i = n(87719),
    s = n(414345),
    r = n(244975),
    c = n(788868),
    o = n(652215),
    d = n(985018),
    l = n(736975),
    L = n(101280);
function p(t) {
    let { channel: e, onClose: n, ...p } = t,
        u = d.intl.format(d.t.AVVUse, {
            onLearnMore: function () {
                n(), (0, i.e)();
            },
        });
    return (0, s.g1)({ location: "PremiumMessageLengthUpsell" })
        ? (0, a.jsx)(r.F, {
              title: d.intl.string(d.t.SeL3ec),
              subtitle: u,
              graphic: { src: L.A, type: "image" },
              secondaryCTA: d.intl.string(d.t["13/7kX"]),
              onSecondaryClick: n,
              onClose: n,
              ...p,
          })
        : (0, a.jsx)(r.A, {
              artURL: l.A,
              type: c.e.MESSAGE_LENGTH_UPSELL,
              title: d.intl.string(d.t.SeL3ec),
              body: u,
              glowUp: u,
              analyticsSource: {
                  page:
                      e?.getGuildId() != null
                          ? o.liQ.GUILD_CHANNEL
                          : e?.isGroupDM() || e?.isPrivate()
                            ? o.liQ.DM_CHANNEL
                            : null,
              },
              analyticsLocation: { section: o.JJy.MESSAGE_LENGTH_UPSELL_MODAL, object: o.ZSU.BUTTON_CTA },
              onClose: n,
              ...p,
          });
}
