r.d(t, { Z: () => m });
var n = r(54381);
r(473749);
var i = r(979554),
    l = r(481060),
    s = r(906732),
    a = r(436774),
    o = r(474936),
    c = r(388032),
    u = r(178368);
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
    let { product: t, onClose: m } = e,
        { newestAnalyticsLocation: p } = (0, s.ZP)(),
        h =
            t.type === i.Z.AVATAR_DECORATION
                ? o.cd.AVATAR_DECORATION_MODAL_UPSELL
                : t.type === i.Z.PROFILE_EFFECT
                  ? o.cd.PROFILE_EFFECT_MODAL_UPSELL
                  : t.type === i.Z.NAMEPLATE
                    ? o.cd.NAMEPLATE_MODAL_UPSELL
                    : null;
    return null == h
        ? null
        : (0, n.jsxs)("div", {
              className: u.nitroUpsellContainer,
              children: [
                  (0, n.jsx)(l.SrA, {
                      className: u.nitroWheel,
                      size: "md",
                      color: a.JX.PREMIUM_TIER_2,
                  }),
                  (0, n.jsx)(l.Text, {
                      className: u.nitroText,
                      variant: "text-md/medium",
                      children:
                          h === o.cd.AVATAR_DECORATION_MODAL_UPSELL
                              ? c.intl.format(c.t["aFR/EI"], {
                                    onClick: () => {
                                        (0, l.ZDy)(async () => {
                                            let { default: e } = await r.e("43360").then(r.bind(r, 73415));
                                            return (t) =>
                                                (0, n.jsx)(
                                                    e,
                                                    d(
                                                        {
                                                            premiumUpsellType: h,
                                                            title: c.intl.string(c.t.JI7uhc),
                                                            body: c.intl.string(c.t["5XvsdZ"]),
                                                            glowUp: c.intl.string(c.t["5XvsdZ"]),
                                                            analyticsSource: p,
                                                            onSecondaryClick: m,
                                                        },
                                                        t,
                                                    ),
                                                );
                                        });
                                    },
                                })
                              : h === o.cd.PROFILE_EFFECT_MODAL_UPSELL
                                ? c.intl.format(c.t.eWNONM, {
                                      onClick: () => {
                                          (0, l.ZDy)(async () => {
                                              let { default: e } = await r.e("43360").then(r.bind(r, 73415));
                                              return (t) =>
                                                  (0, n.jsx)(
                                                      e,
                                                      d(
                                                          {
                                                              premiumUpsellType: h,
                                                              title: c.intl.string(c.t.sYm15X),
                                                              body: c.intl.string(c.t["Hza+Bu"]),
                                                              glowUp: c.intl.string(c.t["Hza+Bu"]),
                                                              analyticsSource: p,
                                                              onSecondaryClick: m,
                                                          },
                                                          t,
                                                      ),
                                                  );
                                          });
                                      },
                                  })
                                : h === o.cd.NAMEPLATE_MODAL_UPSELL
                                  ? c.intl.format(c.t.G6b8TF, {
                                        onClick: () => {
                                            (0, l.ZDy)(async () => {
                                                let { default: e } = await r.e("43360").then(r.bind(r, 73415));
                                                return (t) =>
                                                    (0, n.jsx)(
                                                        e,
                                                        d(
                                                            {
                                                                premiumUpsellType: h,
                                                                title: c.intl.string(c.t.k7UN4k),
                                                                body: c.intl.string(c.t["0/QPxO"]),
                                                                glowUp: c.intl.string(c.t["0/QPxO"]),
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
