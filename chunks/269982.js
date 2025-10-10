n.d(t, { Z: () => p });
var i = n(951288);
n(647438);
var r = n(979554),
    a = n(481060),
    l = n(906732),
    o = n(436774),
    s = n(474936),
    c = n(388032),
    d = n(178368);
function u(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            i = Object.keys(n);
        "function" == typeof Object.getOwnPropertySymbols &&
            (i = i.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                }),
            )),
            i.forEach(function (t) {
                var i;
                (i = n[t]),
                    t in e
                        ? Object.defineProperty(e, t, {
                              value: i,
                              enumerable: !0,
                              configurable: !0,
                              writable: !0,
                          })
                        : (e[t] = i);
            });
    }
    return e;
}
function p(e) {
    let { product: t, onClose: p } = e,
        { newestAnalyticsLocation: _ } = (0, l.ZP)(),
        m =
            t.type === r.Z.AVATAR_DECORATION
                ? s.cd.AVATAR_DECORATION_MODAL_UPSELL
                : t.type === r.Z.PROFILE_EFFECT
                  ? s.cd.PROFILE_EFFECT_MODAL_UPSELL
                  : t.type === r.Z.NAMEPLATE
                    ? s.cd.NAMEPLATE_MODAL_UPSELL
                    : null;
    return null == m
        ? null
        : (0, i.jsxs)("div", {
              className: d.nitroUpsellContainer,
              children: [
                  (0, i.jsx)(a.SrA, {
                      className: d.nitroWheel,
                      size: "md",
                      color: o.JX.PREMIUM_TIER_2,
                  }),
                  (0, i.jsx)(a.Text, {
                      className: d.nitroText,
                      variant: "text-md/medium",
                      children:
                          m === s.cd.AVATAR_DECORATION_MODAL_UPSELL
                              ? c.intl.format(c.t["aFR/EB"], {
                                    onClick: () => {
                                        (0, a.ZDy)(async () => {
                                            let { default: e } = await n.e("43360").then(n.bind(n, 73415));
                                            return (t) =>
                                                (0, i.jsx)(
                                                    e,
                                                    u(
                                                        {
                                                            premiumUpsellType: m,
                                                            title: c.intl.string(c.t.JI7uhY),
                                                            body: c.intl.string(c.t["5XvsdX"]),
                                                            glowUp: c.intl.string(c.t["5XvsdX"]),
                                                            analyticsSource: _,
                                                            onSecondaryClick: p,
                                                        },
                                                        t,
                                                    ),
                                                );
                                        });
                                    },
                                })
                              : m === s.cd.PROFILE_EFFECT_MODAL_UPSELL
                                ? c.intl.format(c.t.eWNOND, {
                                      onClick: () => {
                                          (0, a.ZDy)(async () => {
                                              let { default: e } = await n.e("43360").then(n.bind(n, 73415));
                                              return (t) =>
                                                  (0, i.jsx)(
                                                      e,
                                                      u(
                                                          {
                                                              premiumUpsellType: m,
                                                              title: c.intl.string(c.t.sYm15e),
                                                              body: c.intl.string(c.t["Hza+Bg"]),
                                                              glowUp: c.intl.string(c.t["Hza+Bg"]),
                                                              analyticsSource: _,
                                                              onSecondaryClick: p,
                                                          },
                                                          t,
                                                      ),
                                                  );
                                          });
                                      },
                                  })
                                : m === s.cd.NAMEPLATE_MODAL_UPSELL
                                  ? c.intl.format(c.t.G6b8TE, {
                                        onClick: () => {
                                            (0, a.ZDy)(async () => {
                                                let { default: e } = await n.e("43360").then(n.bind(n, 73415));
                                                return (t) =>
                                                    (0, i.jsx)(
                                                        e,
                                                        u(
                                                            {
                                                                premiumUpsellType: m,
                                                                title: c.intl.string(c.t.k7UN4u),
                                                                body: c.intl.string(c.t["0/QPxM"]),
                                                                glowUp: c.intl.string(c.t["0/QPxM"]),
                                                                analyticsSource: _,
                                                                onSecondaryClick: p,
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
