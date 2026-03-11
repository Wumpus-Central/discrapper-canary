l.d(t, { A: () => d });
var n = l(627968);
l(64700);
var s = l(575593),
    i = l(397927),
    r = l(688810),
    a = l(404374),
    c = l(788868),
    o = l(985018),
    u = l(682655);
function d(e) {
    let { itemType: t, onClose: d } = e,
        { newestAnalyticsLocation: m } = (0, r.Ay)(),
        p =
            t === s.R.AVATAR_DECORATION
                ? c.e.AVATAR_DECORATION_MODAL_UPSELL
                : t === s.R.PROFILE_EFFECT
                  ? c.e.PROFILE_EFFECT_MODAL_UPSELL
                  : t === s.R.NAMEPLATE
                    ? c.e.NAMEPLATE_MODAL_UPSELL
                    : null;
    return null == p
        ? null
        : (0, n.jsxs)("div", {
              className: u.hc,
              children: [
                  (0, n.jsx)(i.tvc, { className: u.ax, size: "md", color: a.k0.PREMIUM_TIER_2 }),
                  (0, n.jsx)(i.Text, {
                      className: u.cf,
                      variant: "text-md/medium",
                      children:
                          p === c.e.AVATAR_DECORATION_MODAL_UPSELL
                              ? o.intl.format(o.t["aFR/EI"], {
                                    onClick: () => {
                                        (0, i.mMO)(async () => {
                                            let { default: e } = await Promise.all([
                                                l.e("14138"),
                                                l.e("49924"),
                                                l.e("59701"),
                                                l.e("62396"),
                                            ]).then(l.bind(l, 948265));
                                            return (t) =>
                                                (0, n.jsx)(e, {
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
                                          (0, i.mMO)(async () => {
                                              let { default: e } = await Promise.all([
                                                  l.e("14138"),
                                                  l.e("49924"),
                                                  l.e("59701"),
                                                  l.e("62396"),
                                              ]).then(l.bind(l, 948265));
                                              return (t) =>
                                                  (0, n.jsx)(e, {
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
                                            (0, i.mMO)(async () => {
                                                let { default: e } = await Promise.all([
                                                    l.e("14138"),
                                                    l.e("49924"),
                                                    l.e("59701"),
                                                    l.e("62396"),
                                                ]).then(l.bind(l, 948265));
                                                return (t) =>
                                                    (0, n.jsx)(e, {
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
