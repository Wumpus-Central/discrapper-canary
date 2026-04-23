l.d(t, { A: () => m });
var a = l(627968);
l(64700);
var s = l(575593),
    r = l(192308),
    i = l(403581),
    n = l(834730),
    c = l(404374),
    d = l(788868),
    o = l(985018),
    u = l(485466);
function m(e) {
    let { itemType: t, onClose: m } = e,
        p =
            t === s.R.AVATAR_DECORATION
                ? d.e.AVATAR_DECORATION_MODAL_UPSELL
                : t === s.R.PROFILE_EFFECT
                  ? d.e.PROFILE_EFFECT_MODAL_UPSELL
                  : t === s.R.NAMEPLATE
                    ? d.e.NAMEPLATE_MODAL_UPSELL
                    : null;
    return null == p
        ? null
        : (0, a.jsxs)("div", {
              className: u.hc,
              children: [
                  (0, a.jsx)(i.t, { className: u.ax, size: "md", color: c.k0.PREMIUM_TIER_2 }),
                  (0, a.jsx)(n.E, {
                      className: u.cf,
                      variant: "text-md/medium",
                      children:
                          p === d.e.AVATAR_DECORATION_MODAL_UPSELL
                              ? o.intl.format(o.t["aFR/EI"], {
                                    onClick: () => {
                                        (0, r.openModalLazy)(async () => {
                                            let { default: e } = await l.e("64864").then(l.bind(l, 948265));
                                            return (t) =>
                                                (0, a.jsx)(e, {
                                                    premiumUpsellType: p,
                                                    title: o.intl.string(o.t.JI7uhc),
                                                    body: o.intl.string(o.t["5XvsdZ"]),
                                                    onSecondaryClick: m,
                                                    ...t,
                                                });
                                        });
                                    },
                                })
                              : p === d.e.PROFILE_EFFECT_MODAL_UPSELL
                                ? o.intl.format(o.t.eWNONM, {
                                      onClick: () => {
                                          (0, r.openModalLazy)(async () => {
                                              let { default: e } = await l.e("64864").then(l.bind(l, 948265));
                                              return (t) =>
                                                  (0, a.jsx)(e, {
                                                      premiumUpsellType: p,
                                                      title: o.intl.string(o.t.sYm15X),
                                                      body: o.intl.string(o.t["Hza+Bu"]),
                                                      onSecondaryClick: m,
                                                      ...t,
                                                  });
                                          });
                                      },
                                  })
                                : p === d.e.NAMEPLATE_MODAL_UPSELL
                                  ? o.intl.format(o.t.G6b8TF, {
                                        onClick: () => {
                                            (0, r.openModalLazy)(async () => {
                                                let { default: e } = await l.e("64864").then(l.bind(l, 948265));
                                                return (t) =>
                                                    (0, a.jsx)(e, {
                                                        premiumUpsellType: p,
                                                        title: o.intl.string(o.t.k7UN4k),
                                                        body: o.intl.string(o.t["0/QPxO"]),
                                                        onSecondaryClick: m,
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
