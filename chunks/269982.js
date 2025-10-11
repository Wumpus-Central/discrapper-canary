n.d(t, { Z: () => p });
var i = n(951288);
n(647438);
var r = n(979554),
    l = n(481060),
    a = n(906732),
    s = n(436774),
    o = n(474936),
    d = n(388032),
    c = n(178368);
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
        { newestAnalyticsLocation: _ } = (0, a.ZP)(),
        h =
            t.type === r.Z.AVATAR_DECORATION
                ? o.cd.AVATAR_DECORATION_MODAL_UPSELL
                : t.type === r.Z.PROFILE_EFFECT
                  ? o.cd.PROFILE_EFFECT_MODAL_UPSELL
                  : t.type === r.Z.NAMEPLATE
                    ? o.cd.NAMEPLATE_MODAL_UPSELL
                    : null;
    return null == h
        ? null
        : (0, i.jsxs)("div", {
              className: c.nitroUpsellContainer,
              children: [
                  (0, i.jsx)(l.SrA, {
                      className: c.nitroWheel,
                      size: "md",
                      color: s.JX.PREMIUM_TIER_2,
                  }),
                  (0, i.jsx)(l.Text, {
                      className: c.nitroText,
                      variant: "text-md/medium",
                      children:
                          h === o.cd.AVATAR_DECORATION_MODAL_UPSELL
                              ? d.intl.format(d.t["aFR/EB"], {
                                    onClick: () => {
                                        (0, l.ZDy)(async () => {
                                            let { default: e } = await n.e("43360").then(n.bind(n, 73415));
                                            return (t) =>
                                                (0, i.jsx)(
                                                    e,
                                                    u(
                                                        {
                                                            premiumUpsellType: h,
                                                            title: d.intl.string(d.t.JI7uhY),
                                                            body: d.intl.string(d.t["5XvsdX"]),
                                                            glowUp: d.intl.string(d.t["5XvsdX"]),
                                                            analyticsSource: _,
                                                            onSecondaryClick: p,
                                                        },
                                                        t,
                                                    ),
                                                );
                                        });
                                    },
                                })
                              : h === o.cd.PROFILE_EFFECT_MODAL_UPSELL
                                ? d.intl.format(d.t.eWNOND, {
                                      onClick: () => {
                                          (0, l.ZDy)(async () => {
                                              let { default: e } = await n.e("43360").then(n.bind(n, 73415));
                                              return (t) =>
                                                  (0, i.jsx)(
                                                      e,
                                                      u(
                                                          {
                                                              premiumUpsellType: h,
                                                              title: d.intl.string(d.t.sYm15e),
                                                              body: d.intl.string(d.t["Hza+Bg"]),
                                                              glowUp: d.intl.string(d.t["Hza+Bg"]),
                                                              analyticsSource: _,
                                                              onSecondaryClick: p,
                                                          },
                                                          t,
                                                      ),
                                                  );
                                          });
                                      },
                                  })
                                : h === o.cd.NAMEPLATE_MODAL_UPSELL
                                  ? d.intl.format(d.t.G6b8TE, {
                                        onClick: () => {
                                            (0, l.ZDy)(async () => {
                                                let { default: e } = await n.e("43360").then(n.bind(n, 73415));
                                                return (t) =>
                                                    (0, i.jsx)(
                                                        e,
                                                        u(
                                                            {
                                                                premiumUpsellType: h,
                                                                title: d.intl.string(d.t.k7UN4u),
                                                                body: d.intl.string(d.t["0/QPxM"]),
                                                                glowUp: d.intl.string(d.t["0/QPxM"]),
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
