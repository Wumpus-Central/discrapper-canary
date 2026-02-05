n.d(t, { A: () => d });
var l = n(627968);
n(64700);
var i = n(575593),
    s = n(397927),
    r = n(688810),
    a = n(404374),
    c = n(788868),
    o = n(985018),
    u = n(682655);
function d(e) {
    let { itemType: t, onClose: d } = e,
        { newestAnalyticsLocation: m } = (0, r.Ay)(),
        p =
            t === i.R.AVATAR_DECORATION
                ? c.e.AVATAR_DECORATION_MODAL_UPSELL
                : t === i.R.PROFILE_EFFECT
                  ? c.e.PROFILE_EFFECT_MODAL_UPSELL
                  : t === i.R.NAMEPLATE
                    ? c.e.NAMEPLATE_MODAL_UPSELL
                    : null;
    return null == p
        ? null
        : (0, l.jsxs)("div", {
              className: u.hc,
              children: [
                  (0, l.jsx)(s.tvc, { className: u.ax, size: "md", color: a.k0.PREMIUM_TIER_2 }),
                  (0, l.jsx)(s.Text, {
                      className: u.cf,
                      variant: "text-md/medium",
                      children:
                          p === c.e.AVATAR_DECORATION_MODAL_UPSELL
                              ? o.intl.format(o.t["aFR/EI"], {
                                    onClick: () => {
                                        (0, s.mMO)(async () => {
                                            let { default: e } = await n.e("64864").then(n.bind(n, 948265));
                                            return (t) =>
                                                (0, l.jsx)(e, {
                                                    premiumUpsellType: p,
                                                    title: o.intl.string(o.t.JI7uhc),
                                                    body: o.intl.string(o.t["5XvsdZ"]),
                                                    glowUp: o.intl.string(o.t["5XvsdZ"]),
                                                    analyticsSource: m,
                                                    onSecondaryClick: d,
                                                    ...t,
                                                });
                                        });
                                    },
                                })
                              : p === c.e.PROFILE_EFFECT_MODAL_UPSELL
                                ? o.intl.format(o.t.eWNONM, {
                                      onClick: () => {
                                          (0, s.mMO)(async () => {
                                              let { default: e } = await n.e("64864").then(n.bind(n, 948265));
                                              return (t) =>
                                                  (0, l.jsx)(e, {
                                                      premiumUpsellType: p,
                                                      title: o.intl.string(o.t.sYm15X),
                                                      body: o.intl.string(o.t["Hza+Bu"]),
                                                      glowUp: o.intl.string(o.t["Hza+Bu"]),
                                                      analyticsSource: m,
                                                      onSecondaryClick: d,
                                                      ...t,
                                                  });
                                          });
                                      },
                                  })
                                : p === c.e.NAMEPLATE_MODAL_UPSELL
                                  ? o.intl.format(o.t.G6b8TF, {
                                        onClick: () => {
                                            (0, s.mMO)(async () => {
                                                let { default: e } = await n.e("64864").then(n.bind(n, 948265));
                                                return (t) =>
                                                    (0, l.jsx)(e, {
                                                        premiumUpsellType: p,
                                                        title: o.intl.string(o.t.k7UN4k),
                                                        body: o.intl.string(o.t["0/QPxO"]),
                                                        glowUp: o.intl.string(o.t["0/QPxO"]),
                                                        analyticsSource: m,
                                                        onSecondaryClick: d,
                                                        ...t,
                                                    });
                                            });
                                        },
                                    })
                                  : void 0,
                  }),
              ],
          });
}
