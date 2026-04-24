n.d(t, { A: () => p });
var a = n(627968);
n(64700);
var r = n(575593),
    i = n(192308),
    l = n(403581),
    s = n(834730),
    o = n(404374),
    c = n(788868),
    d = n(985018),
    u = n(485466);
function p(e) {
    let { itemType: t, onClose: p } = e,
        f =
            t === r.R.AVATAR_DECORATION
                ? c.e.AVATAR_DECORATION_MODAL_UPSELL
                : t === r.R.PROFILE_EFFECT
                  ? c.e.PROFILE_EFFECT_MODAL_UPSELL
                  : t === r.R.NAMEPLATE
                    ? c.e.NAMEPLATE_MODAL_UPSELL
                    : null;
    return null == f
        ? null
        : (0, a.jsxs)("div", {
              className: u.hc,
              children: [
                  (0, a.jsx)(l.t, { className: u.ax, size: "md", color: o.k0.PREMIUM_TIER_2 }),
                  (0, a.jsx)(s.E, {
                      className: u.cf,
                      variant: "text-md/medium",
                      children:
                          f === c.e.AVATAR_DECORATION_MODAL_UPSELL
                              ? d.intl.format(d.t["aFR/EI"], {
                                    onClick: () => {
                                        (0, i.openModalLazy)(async () => {
                                            let { default: e } = await Promise.all([n.e("64864"), n.e("699")]).then(
                                                n.bind(n, 948265),
                                            );
                                            return (t) =>
                                                (0, a.jsx)(e, {
                                                    premiumUpsellType: f,
                                                    title: d.intl.string(d.t.JI7uhc),
                                                    body: d.intl.string(d.t["5XvsdZ"]),
                                                    onSecondaryClick: p,
                                                    ...t,
                                                });
                                        });
                                    },
                                })
                              : f === c.e.PROFILE_EFFECT_MODAL_UPSELL
                                ? d.intl.format(d.t.eWNONM, {
                                      onClick: () => {
                                          (0, i.openModalLazy)(async () => {
                                              let { default: e } = await Promise.all([n.e("64864"), n.e("699")]).then(
                                                  n.bind(n, 948265),
                                              );
                                              return (t) =>
                                                  (0, a.jsx)(e, {
                                                      premiumUpsellType: f,
                                                      title: d.intl.string(d.t.sYm15X),
                                                      body: d.intl.string(d.t["Hza+Bu"]),
                                                      onSecondaryClick: p,
                                                      ...t,
                                                  });
                                          });
                                      },
                                  })
                                : f === c.e.NAMEPLATE_MODAL_UPSELL
                                  ? d.intl.format(d.t.G6b8TF, {
                                        onClick: () => {
                                            (0, i.openModalLazy)(async () => {
                                                let { default: e } = await Promise.all([n.e("64864"), n.e("699")]).then(
                                                    n.bind(n, 948265),
                                                );
                                                return (t) =>
                                                    (0, a.jsx)(e, {
                                                        premiumUpsellType: f,
                                                        title: d.intl.string(d.t.k7UN4k),
                                                        body: d.intl.string(d.t["0/QPxO"]),
                                                        onSecondaryClick: p,
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
