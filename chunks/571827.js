l.d(e, { A: () => m });
var n = l(627968);
l(64700);
var r = l(575593),
    i = l(192308),
    s = l(403581),
    a = l(834730),
    o = l(404374),
    c = l(202541),
    u = l(375708),
    d = l(485466);
function m(t) {
    let { itemType: e, onClose: m } = t,
        x =
            e === r.R.AVATAR_DECORATION
                ? c.e.AVATAR_DECORATION_MODAL_UPSELL
                : e === r.R.PROFILE_EFFECT
                  ? c.e.PROFILE_EFFECT_MODAL_UPSELL
                  : e === r.R.NAMEPLATE
                    ? c.e.NAMEPLATE_MODAL_UPSELL
                    : null;
    return null == x
        ? null
        : (0, n.jsxs)("div", {
              className: d.hc,
              children: [
                  (0, n.jsx)(s.t, { className: d.ax, size: "md", color: o.k0.PREMIUM_TIER_2 }),
                  (0, n.jsx)(a.E, {
                      className: d.cf,
                      variant: "text-md/medium",
                      children: (function () {
                          if (null == x) return null;
                          switch (x) {
                              case c.e.AVATAR_DECORATION_MODAL_UPSELL:
                                  return u.intl.format(u.t["aFR/EI"], {
                                      onClick: () => {
                                          (0, i.openModalLazy)(async () => {
                                              let { default: t } = await Promise.all([l.e("93513"), l.e("64864")]).then(
                                                  l.bind(l, 393027),
                                              );
                                              return (e) =>
                                                  (0, n.jsx)(t, {
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
                                          (0, i.openModalLazy)(async () => {
                                              let { default: t } = await Promise.all([l.e("93513"), l.e("64864")]).then(
                                                  l.bind(l, 393027),
                                              );
                                              return (e) =>
                                                  (0, n.jsx)(t, {
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
                                          (0, i.openModalLazy)(async () => {
                                              let { default: t } = await Promise.all([l.e("93513"), l.e("64864")]).then(
                                                  l.bind(l, 393027),
                                              );
                                              return (e) =>
                                                  (0, n.jsx)(t, {
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
