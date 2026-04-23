l.d(t, { A: () => m });
var r = l(627968);
l(64700);
var a = l(575593),
    s = l(192308),
    n = l(403581),
    i = l(834730),
    c = l(404374),
    o = l(788868),
    u = l(985018),
    d = l(135642);
function m(e) {
    let { itemType: t, onClose: m } = e,
        A =
            t === a.R.AVATAR_DECORATION
                ? o.e.AVATAR_DECORATION_MODAL_UPSELL
                : t === a.R.PROFILE_EFFECT
                  ? o.e.PROFILE_EFFECT_MODAL_UPSELL
                  : t === a.R.NAMEPLATE
                    ? o.e.NAMEPLATE_MODAL_UPSELL
                    : null;
    return null == A
        ? null
        : (0, r.jsxs)("div", {
              className: d.hc,
              children: [
                  (0, r.jsx)(n.t, { className: d.ax, size: "md", color: c.k0.PREMIUM_TIER_2 }),
                  (0, r.jsx)(i.E, {
                      className: d.cf,
                      variant: "text-md/medium",
                      children:
                          A === o.e.AVATAR_DECORATION_MODAL_UPSELL
                              ? u.intl.format(u.t["aFR/EI"], {
                                    onClick: () => {
                                        (0, s.openModalLazy)(async () => {
                                            let { default: e } = await Promise.all([l.e("64864"), l.e("699")]).then(
                                                l.bind(l, 948265),
                                            );
                                            return (t) =>
                                                (0, r.jsx)(e, {
                                                    premiumUpsellType: A,
                                                    title: u.intl.string(u.t.JI7uhc),
                                                    body: u.intl.string(u.t["5XvsdZ"]),
                                                    onSecondaryClick: m,
                                                    ...t,
                                                });
                                        });
                                    },
                                })
                              : A === o.e.PROFILE_EFFECT_MODAL_UPSELL
                                ? u.intl.format(u.t.eWNONM, {
                                      onClick: () => {
                                          (0, s.openModalLazy)(async () => {
                                              let { default: e } = await Promise.all([l.e("64864"), l.e("699")]).then(
                                                  l.bind(l, 948265),
                                              );
                                              return (t) =>
                                                  (0, r.jsx)(e, {
                                                      premiumUpsellType: A,
                                                      title: u.intl.string(u.t.sYm15X),
                                                      body: u.intl.string(u.t["Hza+Bu"]),
                                                      onSecondaryClick: m,
                                                      ...t,
                                                  });
                                          });
                                      },
                                  })
                                : A === o.e.NAMEPLATE_MODAL_UPSELL
                                  ? u.intl.format(u.t.G6b8TF, {
                                        onClick: () => {
                                            (0, s.openModalLazy)(async () => {
                                                let { default: e } = await Promise.all([l.e("64864"), l.e("699")]).then(
                                                    l.bind(l, 948265),
                                                );
                                                return (t) =>
                                                    (0, r.jsx)(e, {
                                                        premiumUpsellType: A,
                                                        title: u.intl.string(u.t.k7UN4k),
                                                        body: u.intl.string(u.t["0/QPxO"]),
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
