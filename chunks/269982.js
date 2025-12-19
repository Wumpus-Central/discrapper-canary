n.d(t, { Z: () => f });
var r = n(54381);
n(473749);
var i = n(979554),
    l = n(481060),
    o = n(906732),
    s = n(436774),
    c = n(474936),
    a = n(388032),
    u = n(583470);
function d(e) {
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
function f(e) {
    let { itemType: t, onClose: f } = e,
        { newestAnalyticsLocation: p } = (0, o.ZP)(),
        m =
            t === i.Z.AVATAR_DECORATION
                ? c.cd.AVATAR_DECORATION_MODAL_UPSELL
                : t === i.Z.PROFILE_EFFECT
                  ? c.cd.PROFILE_EFFECT_MODAL_UPSELL
                  : t === i.Z.NAMEPLATE
                    ? c.cd.NAMEPLATE_MODAL_UPSELL
                    : null;
    return null == m
        ? null
        : (0, r.jsxs)("div", {
              className: u.nitroUpsellContainer,
              children: [
                  (0, r.jsx)(l.SrA, {
                      className: u.nitroWheel,
                      size: "md",
                      color: s.JX.PREMIUM_TIER_2,
                  }),
                  (0, r.jsx)(l.Text, {
                      className: u.nitroText,
                      variant: "text-md/medium",
                      children:
                          m === c.cd.AVATAR_DECORATION_MODAL_UPSELL
                              ? a.intl.format(a.t["aFR/EI"], {
                                    onClick: () => {
                                        (0, l.ZDy)(async () => {
                                            let { default: e } = await n.e("43360").then(n.bind(n, 73415));
                                            return (t) =>
                                                (0, r.jsx)(
                                                    e,
                                                    d(
                                                        {
                                                            premiumUpsellType: m,
                                                            title: a.intl.string(a.t.JI7uhc),
                                                            body: a.intl.string(a.t["5XvsdZ"]),
                                                            glowUp: a.intl.string(a.t["5XvsdZ"]),
                                                            analyticsSource: p,
                                                            onSecondaryClick: f,
                                                        },
                                                        t,
                                                    ),
                                                );
                                        });
                                    },
                                })
                              : m === c.cd.PROFILE_EFFECT_MODAL_UPSELL
                                ? a.intl.format(a.t.eWNONM, {
                                      onClick: () => {
                                          (0, l.ZDy)(async () => {
                                              let { default: e } = await n.e("43360").then(n.bind(n, 73415));
                                              return (t) =>
                                                  (0, r.jsx)(
                                                      e,
                                                      d(
                                                          {
                                                              premiumUpsellType: m,
                                                              title: a.intl.string(a.t.sYm15X),
                                                              body: a.intl.string(a.t["Hza+Bu"]),
                                                              glowUp: a.intl.string(a.t["Hza+Bu"]),
                                                              analyticsSource: p,
                                                              onSecondaryClick: f,
                                                          },
                                                          t,
                                                      ),
                                                  );
                                          });
                                      },
                                  })
                                : m === c.cd.NAMEPLATE_MODAL_UPSELL
                                  ? a.intl.format(a.t.G6b8TF, {
                                        onClick: () => {
                                            (0, l.ZDy)(async () => {
                                                let { default: e } = await n.e("43360").then(n.bind(n, 73415));
                                                return (t) =>
                                                    (0, r.jsx)(
                                                        e,
                                                        d(
                                                            {
                                                                premiumUpsellType: m,
                                                                title: a.intl.string(a.t.k7UN4k),
                                                                body: a.intl.string(a.t["0/QPxO"]),
                                                                glowUp: a.intl.string(a.t["0/QPxO"]),
                                                                analyticsSource: p,
                                                                onSecondaryClick: f,
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
