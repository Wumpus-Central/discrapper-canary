r.d(t, {
    A: () => m,
});
var n = r(627968);
r(64700);
var l = r(575593),
    i = r(397927),
    a = r(688810),
    s = r(404374),
    c = r(788868),
    o = r(985018),
    u = r(682655);

function d(e) {
    for (var t = 1; t < arguments.length; t++) {
        var r = null != arguments[t] ? arguments[t] : {},
            n = Object.keys(r);
        "function" == typeof Object.getOwnPropertySymbols &&
            (n = n.concat(
                Object.getOwnPropertySymbols(r).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(r, e).enumerable;
                }),
            )),
            n.forEach(function (t) {
                var n;
                (n = r[t]),
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
        { newestAnalyticsLocation: p } = (0, a.Ay)(),
        x =
            t === l.R.AVATAR_DECORATION
                ? c.e.AVATAR_DECORATION_MODAL_UPSELL
                : t === l.R.PROFILE_EFFECT
                  ? c.e.PROFILE_EFFECT_MODAL_UPSELL
                  : t === l.R.NAMEPLATE
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
                      color: s.k0.PREMIUM_TIER_2,
                  }),
                  (0, n.jsx)(i.Text, {
                      className: u.cf,
                      variant: "text-md/medium",
                      children:
                          x === c.e.AVATAR_DECORATION_MODAL_UPSELL
                              ? o.intl.format(o.t["aFR/EI"], {
                                    onClick: () => {
                                        (0, i.mMO)(async () => {
                                            let { default: e } = await r.e("64864").then(r.bind(r, 948265));
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
                                              let { default: e } = await r.e("64864").then(r.bind(r, 948265));
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
                                                let { default: e } = await r.e("64864").then(r.bind(r, 948265));
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
