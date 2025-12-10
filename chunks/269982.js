n.d(t, { Z: () => m });
var r = n(54381);
n(473749);
var i = n(979554),
    l = n(481060),
    a = n(906732),
    s = n(436774),
    o = n(474936),
    c = n(388032),
    d = n(178368);
function u(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            r = Object.keys(n);
        "function" == typeof Object.getOwnPropertySymbols &&
            (r = r.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                }),
            )),
            r.forEach(function (t) {
                var r;
                (r = n[t]),
                    t in e
                        ? Object.defineProperty(e, t, {
                              value: r,
                              enumerable: !0,
                              configurable: !0,
                              writable: !0,
                          })
                        : (e[t] = r);
            });
    }
    return e;
}
function m(e) {
    let { product: t, onClose: m } = e,
        { newestAnalyticsLocation: p } = (0, a.ZP)(),
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
        : (0, r.jsxs)("div", {
              className: d.nitroUpsellContainer,
              children: [
                  (0, r.jsx)(l.SrA, {
                      className: d.nitroWheel,
                      size: "md",
                      color: s.JX.PREMIUM_TIER_2,
                  }),
                  (0, r.jsx)(l.Text, {
                      className: d.nitroText,
                      variant: "text-md/medium",
                      children:
                          h === o.cd.AVATAR_DECORATION_MODAL_UPSELL
                              ? c.intl.format(c.t["aFR/EI"], {
                                    onClick: () => {
                                        (0, l.ZDy)(async () => {
                                            let { default: e } = await n.e("43360").then(n.bind(n, 73415));
                                            return (t) =>
                                                (0, r.jsx)(
                                                    e,
                                                    u(
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
                                              let { default: e } = await n.e("43360").then(n.bind(n, 73415));
                                              return (t) =>
                                                  (0, r.jsx)(
                                                      e,
                                                      u(
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
                                                let { default: e } = await n.e("43360").then(n.bind(n, 73415));
                                                return (t) =>
                                                    (0, r.jsx)(
                                                        e,
                                                        u(
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
