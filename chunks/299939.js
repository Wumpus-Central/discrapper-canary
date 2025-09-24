n.d(t, { B: () => g }), n(953529);
var r = n(951288);
n(647438);
var o = n(481060),
    l = n(98278),
    a = n(740594),
    i = n(612659),
    s = n(626135),
    c = n(981631),
    d = n(474936),
    u = n(693450),
    p = n(388032),
    f = n(679101);
function m(e) {
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
function g(e) {
    let { onApply: t, onSurpriseMe: n, onClose: g, canApply: h } = e,
        b = (0, i.m)(d.p9.TIER_2),
        x = (0, r.jsx)(o.zxk, {
            variant: "secondary",
            size: "md",
            onClick: n,
            icon: o.$2U,
            text: p.intl.string(u.default.NOGFdn),
        }),
        j = (0, r.jsxs)("div", {
            className: f.subscriberButtonContainer,
            children: [
                x,
                (0, r.jsx)(o.ua7, {
                    text: p.intl.string(u.default.cVTpnp),
                    shouldShow: !h,
                    children: (e) => {
                        var n, l;
                        return (0, r.jsx)(
                            o.zxk,
                            ((n = m({}, e)),
                            (l = l =
                                {
                                    onClick: t,
                                    disabled: !h,
                                    text: p.intl.string(p.t["1Qm829"]),
                                    variant: "primary",
                                    size: "md",
                                    fullWidth: !0,
                                }),
                            Object.getOwnPropertyDescriptors
                                ? Object.defineProperties(n, Object.getOwnPropertyDescriptors(l))
                                : (function (e, t) {
                                      var n = Object.keys(e);
                                      if (Object.getOwnPropertySymbols) {
                                          var r = Object.getOwnPropertySymbols(e);
                                          n.push.apply(n, r);
                                      }
                                      return n;
                                  })(Object(l)).forEach(function (e) {
                                      Object.defineProperty(n, e, Object.getOwnPropertyDescriptor(l, e));
                                  }),
                            n),
                        );
                    },
                }),
            ],
        }),
        _ = (0, r.jsxs)("div", {
            className: f.upsell,
            children: [
                (0, r.jsxs)("div", {
                    className: f.descriptionContainer,
                    children: [
                        (0, r.jsx)(o.ua7, {
                            text: p.intl.string(p.t["5AFxuL"]),
                            children: (e) =>
                                (0, r.jsx)(
                                    o.SrA,
                                    m(
                                        {
                                            size: "md",
                                            color: o.TVs.colors.ICON_PRIMARY,
                                        },
                                        e,
                                    ),
                                ),
                        }),
                        (0, r.jsx)(o.Text, {
                            variant: "text-md/medium",
                            color: "text-default",
                            className: f.description,
                            children: p.intl.format(u.default.PWf0xc, {
                                onClickNitro: () => {
                                    s.default.track(c.rMx.DISPLAY_NAME_STYLES_NITRO_CLICKED), (0, l.$)(g);
                                },
                            }),
                        }),
                    ],
                }),
                (0, r.jsxs)("div", {
                    className: f.buttonContainer,
                    children: [
                        x,
                        (0, r.jsx)(a.Z, {
                            premiumModalAnalyticsLocation: {
                                section: c.jXE.DISPLAY_NAME_STYLES_MODAL_FOOTER,
                                object: c.qAy.PREMIUM_UPSELL_BUTTON,
                            },
                            subscriptionTier: d.Si.TIER_2,
                        }),
                    ],
                }),
            ],
        });
    return (0, r.jsx)(o.mzw, {
        "data-migration-pending": !0,
        className: f.footer,
        children: b ? j : _,
    });
}
