a.d(t, { A: () => p });
var n = a(627968);
a(64700);
var l = a(575593),
    i = a(192308),
    r = a(403581),
    s = a(834730),
    o = a(404374),
    c = a(788868),
    d = a(985018),
    u = a(485466);
function p(e) {
    let { itemType: t, onClose: p } = e,
        h =
            t === l.R.AVATAR_DECORATION
                ? c.e.AVATAR_DECORATION_MODAL_UPSELL
                : t === l.R.PROFILE_EFFECT
                  ? c.e.PROFILE_EFFECT_MODAL_UPSELL
                  : t === l.R.NAMEPLATE
                    ? c.e.NAMEPLATE_MODAL_UPSELL
                    : null;
    return null == h
        ? null
        : (0, n.jsxs)("div", {
              className: u.hc,
              children: [
                  (0, n.jsx)(r.t, { className: u.ax, size: "md", color: o.k0.PREMIUM_TIER_2 }),
                  (0, n.jsx)(s.E, {
                      className: u.cf,
                      variant: "text-md/medium",
                      children:
                          h === c.e.AVATAR_DECORATION_MODAL_UPSELL
                              ? d.intl.format(d.t["aFR/EI"], {
                                    onClick: () => {
                                        (0, i.openModalLazy)(async () => {
                                            let { default: e } = await a.e("64864").then(a.bind(a, 948265));
                                            return (t) =>
                                                (0, n.jsx)(e, {
                                                    premiumUpsellType: h,
                                                    title: d.intl.string(d.t.JI7uhc),
                                                    body: d.intl.string(d.t["5XvsdZ"]),
                                                    onSecondaryClick: p,
                                                    ...t,
                                                });
                                        });
                                    },
                                })
                              : h === c.e.PROFILE_EFFECT_MODAL_UPSELL
                                ? d.intl.format(d.t.eWNONM, {
                                      onClick: () => {
                                          (0, i.openModalLazy)(async () => {
                                              let { default: e } = await a.e("64864").then(a.bind(a, 948265));
                                              return (t) =>
                                                  (0, n.jsx)(e, {
                                                      premiumUpsellType: h,
                                                      title: d.intl.string(d.t.sYm15X),
                                                      body: d.intl.string(d.t["Hza+Bu"]),
                                                      onSecondaryClick: p,
                                                      ...t,
                                                  });
                                          });
                                      },
                                  })
                                : h === c.e.NAMEPLATE_MODAL_UPSELL
                                  ? d.intl.format(d.t.G6b8TF, {
                                        onClick: () => {
                                            (0, i.openModalLazy)(async () => {
                                                let { default: e } = await a.e("64864").then(a.bind(a, 948265));
                                                return (t) =>
                                                    (0, n.jsx)(e, {
                                                        premiumUpsellType: h,
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
