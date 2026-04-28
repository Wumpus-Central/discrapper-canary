l.d(t, { A: () => u });
var s = l(627968);
l(64700);
var n = l(575593),
    i = l(192308),
    r = l(403581),
    a = l(834730),
    o = l(404374),
    c = l(788868),
    A = l(985018),
    d = l(485466);
function u(e) {
    let { itemType: t, onClose: u } = e,
        E =
            t === n.R.AVATAR_DECORATION
                ? c.e.AVATAR_DECORATION_MODAL_UPSELL
                : t === n.R.PROFILE_EFFECT
                  ? c.e.PROFILE_EFFECT_MODAL_UPSELL
                  : t === n.R.NAMEPLATE
                    ? c.e.NAMEPLATE_MODAL_UPSELL
                    : null;
    return null == E
        ? null
        : (0, s.jsxs)("div", {
              className: d.hc,
              children: [
                  (0, s.jsx)(r.t, { className: d.ax, size: "md", color: o.k0.PREMIUM_TIER_2 }),
                  (0, s.jsx)(a.E, {
                      className: d.cf,
                      variant: "text-md/medium",
                      children:
                          E === c.e.AVATAR_DECORATION_MODAL_UPSELL
                              ? A.intl.format(A.t["aFR/EI"], {
                                    onClick: () => {
                                        (0, i.openModalLazy)(async () => {
                                            let { default: e } = await Promise.all([l.e("93513"), l.e("64864")]).then(
                                                l.bind(l, 948265),
                                            );
                                            return (t) =>
                                                (0, s.jsx)(e, {
                                                    premiumUpsellType: E,
                                                    title: A.intl.string(A.t.JI7uhc),
                                                    body: A.intl.string(A.t["5XvsdZ"]),
                                                    onSecondaryClick: u,
                                                    ...t,
                                                });
                                        });
                                    },
                                })
                              : E === c.e.PROFILE_EFFECT_MODAL_UPSELL
                                ? A.intl.format(A.t.eWNONM, {
                                      onClick: () => {
                                          (0, i.openModalLazy)(async () => {
                                              let { default: e } = await Promise.all([l.e("93513"), l.e("64864")]).then(
                                                  l.bind(l, 948265),
                                              );
                                              return (t) =>
                                                  (0, s.jsx)(e, {
                                                      premiumUpsellType: E,
                                                      title: A.intl.string(A.t.sYm15X),
                                                      body: A.intl.string(A.t["Hza+Bu"]),
                                                      onSecondaryClick: u,
                                                      ...t,
                                                  });
                                          });
                                      },
                                  })
                                : E === c.e.NAMEPLATE_MODAL_UPSELL
                                  ? A.intl.format(A.t.G6b8TF, {
                                        onClick: () => {
                                            (0, i.openModalLazy)(async () => {
                                                let { default: e } = await Promise.all([
                                                    l.e("93513"),
                                                    l.e("64864"),
                                                ]).then(l.bind(l, 948265));
                                                return (t) =>
                                                    (0, s.jsx)(e, {
                                                        premiumUpsellType: E,
                                                        title: A.intl.string(A.t.k7UN4k),
                                                        body: A.intl.string(A.t["0/QPxO"]),
                                                        onSecondaryClick: u,
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
