l.d(e, { A: () => m });
var r = l(627968);
l(64700);
var n = l(575593),
    s = l(192308),
    i = l(403581),
    a = l(834730),
    o = l(404374),
    c = l(788868),
    u = l(375708),
    d = l(485466);
function m(t) {
    let { itemType: e, onClose: m } = t,
        x =
            e === n.R.AVATAR_DECORATION
                ? c.e.AVATAR_DECORATION_MODAL_UPSELL
                : e === n.R.PROFILE_EFFECT
                  ? c.e.PROFILE_EFFECT_MODAL_UPSELL
                  : e === n.R.NAMEPLATE
                    ? c.e.NAMEPLATE_MODAL_UPSELL
                    : null;
    return null == x
        ? null
        : (0, r.jsxs)("div", {
              className: d.hc,
              children: [
                  (0, r.jsx)(i.t, { className: d.ax, size: "md", color: o.k0.PREMIUM_TIER_2 }),
                  (0, r.jsx)(a.E, {
                      className: d.cf,
                      variant: "text-md/medium",
                      children: (() => {
                          switch (x) {
                              case c.e.AVATAR_DECORATION_MODAL_UPSELL:
                                  return u.intl.format(u.t["aFR/EI"], {
                                      onClick: () => {
                                          (0, s.openModalLazy)(async () => {
                                              let { default: t } = await Promise.all([l.e("93513"), l.e("64864")]).then(
                                                  l.bind(l, 393027),
                                              );
                                              return (e) =>
                                                  (0, r.jsx)(t, {
                                                      premiumUpsellType: x,
                                                      title: u.intl.string(u.t.JI7uhc),
                                                      body: u.intl.string(u.t["5XvsdZ"]),
                                                      onSecondaryClick: m,
                                                      ...e,
                                                  });
                                          });
                                      },
                                  });
                              case c.e.PROFILE_EFFECT_MODAL_UPSELL:
                                  return u.intl.format(u.t.eWNONM, {
                                      onClick: () => {
                                          (0, s.openModalLazy)(async () => {
                                              let { default: t } = await Promise.all([l.e("93513"), l.e("64864")]).then(
                                                  l.bind(l, 393027),
                                              );
                                              return (e) =>
                                                  (0, r.jsx)(t, {
                                                      premiumUpsellType: x,
                                                      title: u.intl.string(u.t.sYm15X),
                                                      body: u.intl.string(u.t["Hza+Bu"]),
                                                      onSecondaryClick: m,
                                                      ...e,
                                                  });
                                          });
                                      },
                                  });
                              case c.e.NAMEPLATE_MODAL_UPSELL:
                                  return u.intl.format(u.t.G6b8TF, {
                                      onClick: () => {
                                          (0, s.openModalLazy)(async () => {
                                              let { default: t } = await Promise.all([l.e("93513"), l.e("64864")]).then(
                                                  l.bind(l, 393027),
                                              );
                                              return (e) =>
                                                  (0, r.jsx)(t, {
                                                      premiumUpsellType: x,
                                                      title: u.intl.string(u.t.k7UN4k),
                                                      body: u.intl.string(u.t["0/QPxO"]),
                                                      onSecondaryClick: m,
                                                      ...e,
                                                  });
                                          });
                                      },
                                  });
                              default:
                                  return null;
                          }
                      })(),
                  }),
              ],
          });
}
