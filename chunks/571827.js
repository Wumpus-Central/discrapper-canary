l.d(t, { A: () => m });
var n = l(627968);
l(64700);
var r = l(575593),
    i = l(397927),
    s = l(688810),
    a = l(404374),
    c = l(788868),
    o = l(985018),
    u = l(682655);
function d(e) {
    for (var t = 1; t < arguments.length; t++) {
        var l = null != arguments[t] ? arguments[t] : {},
            n = Object.keys(l);
        "function" == typeof Object.getOwnPropertySymbols &&
            (n = n.concat(
                Object.getOwnPropertySymbols(l).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(l, e).enumerable;
                }),
            )),
            n.forEach(function (t) {
                var n;
                (n = l[t]),
                    t in e
                        ? Object.defineProperty(e, t, {
                              value: n,
                              enumerable: !0,
                              configurable: !0,
                              writable: !0,
                          })
                        : (e[t] = n);
            });
    }
    return e;
}
function m(e) {
    let { itemType: t, onClose: m } = e,
        { newestAnalyticsLocation: p } = (0, s.Ay)(),
        x =
            t === r.R.AVATAR_DECORATION
                ? c.e.AVATAR_DECORATION_MODAL_UPSELL
                : t === r.R.PROFILE_EFFECT
                  ? c.e.PROFILE_EFFECT_MODAL_UPSELL
                  : t === r.R.NAMEPLATE
                    ? c.e.NAMEPLATE_MODAL_UPSELL
                    : null;
    return null == x
        ? null
        : (0, n.jsxs)("div", {
              className: u.hc,
              children: [
                  (0, n.jsx)(i.tvc, {
                      className: u.ax,
                      size: "md",
                      color: a.k0.PREMIUM_TIER_2,
                  }),
                  (0, n.jsx)(i.Text, {
                      className: u.cf,
                      variant: "text-md/medium",
                      children:
                          x === c.e.AVATAR_DECORATION_MODAL_UPSELL
                              ? o.intl.format(o.t["aFR/EI"], {
                                    onClick: () => {
                                        (0, i.mMO)(async () => {
                                            let { default: e } = await l.e("64864").then(l.bind(l, 948265));
                                            return (t) =>
                                                (0, n.jsx)(
                                                    e,
                                                    d(
                                                        {
                                                            premiumUpsellType: x,
                                                            title: o.intl.string(o.t.JI7uhc),
                                                            body: o.intl.string(o.t["5XvsdZ"]),
                                                            glowUp: o.intl.string(o.t["5XvsdZ"]),
                                                            analyticsSource: p,
                                                            onSecondaryClick: m,
                                                        },
                                                        t,
                                                    ),
                                                );
                                        });
                                    },
                                })
                              : x === c.e.PROFILE_EFFECT_MODAL_UPSELL
                                ? o.intl.format(o.t.eWNONM, {
                                      onClick: () => {
                                          (0, i.mMO)(async () => {
                                              let { default: e } = await l.e("64864").then(l.bind(l, 948265));
                                              return (t) =>
                                                  (0, n.jsx)(
                                                      e,
                                                      d(
                                                          {
                                                              premiumUpsellType: x,
                                                              title: o.intl.string(o.t.sYm15X),
                                                              body: o.intl.string(o.t["Hza+Bu"]),
                                                              glowUp: o.intl.string(o.t["Hza+Bu"]),
                                                              analyticsSource: p,
                                                              onSecondaryClick: m,
                                                          },
                                                          t,
                                                      ),
                                                  );
                                          });
                                      },
                                  })
                                : x === c.e.NAMEPLATE_MODAL_UPSELL
                                  ? o.intl.format(o.t.G6b8TF, {
                                        onClick: () => {
                                            (0, i.mMO)(async () => {
                                                let { default: e } = await l.e("64864").then(l.bind(l, 948265));
                                                return (t) =>
                                                    (0, n.jsx)(
                                                        e,
                                                        d(
                                                            {
                                                                premiumUpsellType: x,
                                                                title: o.intl.string(o.t.k7UN4k),
                                                                body: o.intl.string(o.t["0/QPxO"]),
                                                                glowUp: o.intl.string(o.t["0/QPxO"]),
                                                                analyticsSource: p,
                                                                onSecondaryClick: m,
                                                            },
                                                            t,
                                                        ),
                                                    );
                                            });
                                        },
                                    })
                                  : void 0,
                  }),
              ],
          });
}
