n.d(e, { A: () => m });
var l = n(477900);
n(582128);
var r = n(575593),
    i = n(192308),
    s = n(403581),
    a = n(834730),
    o = n(404374),
    c = n(202541),
    u = n(375708),
    d = n(180985);
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
        : (0, l.jsxs)("div", {
              className: d.hc,
              children: [
                  (0, l.jsx)(s.t, { className: d.ax, size: "md", color: o.k0.PREMIUM_TIER_2 }),
                  (0, l.jsx)(a.E, {
                      className: d.cf,
                      variant: "text-md/medium",
                      children: (function () {
                          if (null == x) return null;
                          switch (x) {
                              case c.e.AVATAR_DECORATION_MODAL_UPSELL:
                                  return u.intl.format(u.t["aFR/EI"], {
                                      onClick: () => {
                                          (0, i.openModalLazy)(async () => {
                                              let { default: t } = await Promise.all([
                                                  n.e("93513"),
                                                  n.e("764864"),
                                              ]).then(n.bind(n, 393027));
                                              return (e) =>
                                                  (0, l.jsx)(t, {
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
                                              let { default: t } = await Promise.all([
                                                  n.e("93513"),
                                                  n.e("764864"),
                                              ]).then(n.bind(n, 393027));
                                              return (e) =>
                                                  (0, l.jsx)(t, {
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
                                              let { default: t } = await Promise.all([
                                                  n.e("93513"),
                                                  n.e("764864"),
                                              ]).then(n.bind(n, 393027));
                                              return (e) =>
                                                  (0, l.jsx)(t, {
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
