l.d(t, { A: () => d });
var n = l(627968);
l(64700);
var s = l(575593),
    i = l(397927),
    r = l(404374),
    a = l(788868),
    c = l(985018),
    o = l(984586);
function d(e) {
    let { itemType: t, onClose: d } = e,
        u =
            t === s.R.AVATAR_DECORATION
                ? a.e.AVATAR_DECORATION_MODAL_UPSELL
                : t === s.R.PROFILE_EFFECT
                  ? a.e.PROFILE_EFFECT_MODAL_UPSELL
                  : t === s.R.NAMEPLATE
                    ? a.e.NAMEPLATE_MODAL_UPSELL
                    : null;
    return null == u
        ? null
        : (0, n.jsxs)("div", {
              className: o.hc,
              children: [
                  (0, n.jsx)(i.tvc, { className: o.ax, size: "md", color: r.k0.PREMIUM_TIER_2 }),
                  (0, n.jsx)(i.Text, {
                      className: o.cf,
                      variant: "text-md/medium",
                      children:
                          u === a.e.AVATAR_DECORATION_MODAL_UPSELL
                              ? c.intl.format(c.t["aFR/EI"], {
                                    onClick: () => {
                                        (0, i.mMO)(async () => {
                                            let { default: e } = await l.e("64864").then(l.bind(l, 948265));
                                            return (t) =>
                                                (0, n.jsx)(e, {
                                                    premiumUpsellType: u,
                                                    title: c.intl.string(c.t.JI7uhc),
                                                    body: c.intl.string(c.t["5XvsdZ"]),
                                                    onSecondaryClick: d,
                                                    ...t,
                                                });
                                        });
                                    },
                                })
                              : u === a.e.PROFILE_EFFECT_MODAL_UPSELL
                                ? c.intl.format(c.t.eWNONM, {
                                      onClick: () => {
                                          (0, i.mMO)(async () => {
                                              let { default: e } = await l.e("64864").then(l.bind(l, 948265));
                                              return (t) =>
                                                  (0, n.jsx)(e, {
                                                      premiumUpsellType: u,
                                                      title: c.intl.string(c.t.sYm15X),
                                                      body: c.intl.string(c.t["Hza+Bu"]),
                                                      onSecondaryClick: d,
                                                      ...t,
                                                  });
                                          });
                                      },
                                  })
                                : u === a.e.NAMEPLATE_MODAL_UPSELL
                                  ? c.intl.format(c.t.G6b8TF, {
                                        onClick: () => {
                                            (0, i.mMO)(async () => {
                                                let { default: e } = await l.e("64864").then(l.bind(l, 948265));
                                                return (t) =>
                                                    (0, n.jsx)(e, {
                                                        premiumUpsellType: u,
                                                        title: c.intl.string(c.t.k7UN4k),
                                                        body: c.intl.string(c.t["0/QPxO"]),
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
