"use strict";
r.d(t, { A: () => p });
var i = r(627968);
r(64700);
var n = r(575593),
    s = r(192308),
    a = r(403581),
    l = r(834730),
    c = r(404374),
    o = r(788868),
    d = r(985018),
    u = r(485466);
function p(e) {
    let { itemType: t, onClose: p } = e,
        _ =
            t === n.R.AVATAR_DECORATION
                ? o.e.AVATAR_DECORATION_MODAL_UPSELL
                : t === n.R.PROFILE_EFFECT
                  ? o.e.PROFILE_EFFECT_MODAL_UPSELL
                  : t === n.R.NAMEPLATE
                    ? o.e.NAMEPLATE_MODAL_UPSELL
                    : null;
    return null == _
        ? null
        : (0, i.jsxs)("div", {
              className: u.hc,
              children: [
                  (0, i.jsx)(a.t, { className: u.ax, size: "md", color: c.k0.PREMIUM_TIER_2 }),
                  (0, i.jsx)(l.E, {
                      className: u.cf,
                      variant: "text-md/medium",
                      children:
                          _ === o.e.AVATAR_DECORATION_MODAL_UPSELL
                              ? d.intl.format(d.t["aFR/EI"], {
                                    onClick: () => {
                                        (0, s.openModalLazy)(async () => {
                                            let { default: e } = await Promise.all([r.e("64864"), r.e("699")]).then(
                                                r.bind(r, 948265),
                                            );
                                            return (t) =>
                                                (0, i.jsx)(e, {
                                                    premiumUpsellType: _,
                                                    title: d.intl.string(d.t.JI7uhc),
                                                    body: d.intl.string(d.t["5XvsdZ"]),
                                                    onSecondaryClick: p,
                                                    ...t,
                                                });
                                        });
                                    },
                                })
                              : _ === o.e.PROFILE_EFFECT_MODAL_UPSELL
                                ? d.intl.format(d.t.eWNONM, {
                                      onClick: () => {
                                          (0, s.openModalLazy)(async () => {
                                              let { default: e } = await Promise.all([r.e("64864"), r.e("699")]).then(
                                                  r.bind(r, 948265),
                                              );
                                              return (t) =>
                                                  (0, i.jsx)(e, {
                                                      premiumUpsellType: _,
                                                      title: d.intl.string(d.t.sYm15X),
                                                      body: d.intl.string(d.t["Hza+Bu"]),
                                                      onSecondaryClick: p,
                                                      ...t,
                                                  });
                                          });
                                      },
                                  })
                                : _ === o.e.NAMEPLATE_MODAL_UPSELL
                                  ? d.intl.format(d.t.G6b8TF, {
                                        onClick: () => {
                                            (0, s.openModalLazy)(async () => {
                                                let { default: e } = await Promise.all([r.e("64864"), r.e("699")]).then(
                                                    r.bind(r, 948265),
                                                );
                                                return (t) =>
                                                    (0, i.jsx)(e, {
                                                        premiumUpsellType: _,
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
