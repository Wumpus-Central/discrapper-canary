r.d(t, { default: () => L });
var n = r(627968),
    s = r(64700),
    c = r(503698),
    i = r.n(c),
    l = r(311907),
    a = r(421380),
    o = r(397927),
    d = r(73153),
    f = r(384904),
    u = r(73825),
    p = r(160946),
    b = r(156312),
    m = r(166532),
    y = r(422936),
    j = r(234419),
    O = r(465794),
    x = r(811611),
    g = r(632638),
    P = r(901017),
    _ = r(773669),
    h = r(295405),
    v = r(252424),
    E = r(927578),
    S = r(580630),
    k = r(652215),
    C = r(788868),
    N = r(985018),
    w = r(158057);
let I = (e) => {
        let { locale: t } = e;
        return (0, n.jsxs)(n.Fragment, {
            children: [
                (0, n.jsx)(P.A, {
                    icon: o.tEP,
                    iconClassName: w.xy,
                    description: N.intl.string(N.t.uAfKTe),
                }),
                (0, n.jsx)(P.A, {
                    icon: o.vRF,
                    iconClassName: w.Jx,
                    description: N.intl.formatToPlainString(N.t.sWnv5M, {
                        numGuildSubscriptions: C.M4,
                        discountPercent: (0, v.l9)(t, C.oX / 100),
                    }),
                }),
                (0, n.jsx)(P.A, {
                    icon: o.nm2,
                    iconClassName: w.Zr,
                    description: N.intl.string(N.t.pqHIf7),
                }),
            ],
        });
    },
    R = (e) => {
        let { trialOffer: t, discountOffer: s, isLoading: c, price: a, onClose: d } = e,
            f = (0, l.bG)([_.default], () => _.default.locale),
            u = null != t || null != s;
        return (0, n.jsxs)("div", {
            className: w.iE,
            children: [
                (0, n.jsx)(o.s_y, {
                    "data-migration-pending": !0,
                    onClick: d,
                    className: w.b,
                }),
                u && (0, n.jsx)(x.Vq, { className: w.Fg }),
                (0, n.jsx)("img", {
                    className: i()(w.c8, { [w.mk]: u }),
                    src: r(377191),
                    alt: "",
                }),
                c
                    ? (0, n.jsx)(o.y$y, {})
                    : (0, n.jsxs)(n.Fragment, {
                          children: [
                              (0, n.jsx)(o.Text, {
                                  variant: "text-md/normal",
                                  className: w.R_,
                                  children:
                                      null == a
                                          ? (0, n.jsx)(o.y$y, { type: o.y$y.Type.PULSING_ELLIPSIS })
                                          : N.intl.format(N.t.TBsJfQ, {
                                                monthlyPrice: (0, S.$g)(a.amount, a.currency),
                                            }),
                              }),
                              (0, n.jsx)("div", {
                                  className: w.md,
                                  children: (0, n.jsx)(I, { locale: f }),
                              }),
                          ],
                      }),
            ],
        });
    },
    M = (e) => {
        let { trialOffer: t, discountOffer: r, onClose: s } = e,
            c = { section: k.JJy.STICKER_PREMIUM_TIER_2_UPSELL_MODAL };
        return (0, n.jsxs)(o.jlY, {
            "data-migration-pending": !0,
            className: w.qr,
            children: [
                (0, n.jsx)(o.Button, {
                    variant: "secondary",
                    size: "sm",
                    text: N.intl.string(N.t.cpT0Cq),
                    onClick: s,
                }),
                (0, n.jsx)(O.A, {
                    textOptions: { textOverride: null != t || null != r ? N.intl.string(N.t["Gd/XHF"]) : void 0 },
                    premiumModalAnalyticsLocation: c,
                    subscriptionTier: C.pe.TIER_2,
                    size: a.$n.Sizes.SMALL,
                    color: a.$n.Colors.GREEN,
                    onClick: () => {
                        s();
                    },
                }),
            ],
        });
    };
function L(e) {
    var t, r;
    let { onClose: c } = e,
        i = (function (e, t) {
            if (null == e) return {};
            var r,
                n,
                s,
                c = {};
            if ("u" > typeof Reflect && Reflect.ownKeys) {
                for (s = 0, r = Reflect.ownKeys(e); s < r.length; s++)
                    (n = r[s]),
                        !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (c[n] = e[n]);
                return c;
            }
            if (
                ((c = (function (e, t) {
                    if (null == e) return {};
                    var r,
                        n,
                        s = {},
                        c = Object.getOwnPropertyNames(e);
                    for (n = 0; n < c.length; n++)
                        (r = c[n]),
                            !(t.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(e, r) && (s[r] = e[r]);
                    return s;
                })(e, t)),
                Object.getOwnPropertySymbols)
            )
                for (s = 0, r = Object.getOwnPropertySymbols(e); s < r.length; s++)
                    (n = r[s]),
                        !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (c[n] = e[n]);
            return c;
        })(e, ["onClose"]),
        a = (0, p.Y)(),
        O = (0, l.bG)([h.A], () => h.A.hasFetchedPaymentSources),
        x = a && O,
        P = (0, j.V)(),
        _ = (0, y.O)();
    s.useEffect(() => {
        d.h.wait(() => {
            (0, f.$o)(), (0, u.zS)(null, null, k.tF5.DISCOVERY);
        });
    }, []);
    let v = x ? E.Ay.getDefaultPrice(C.gD.PREMIUM_MONTH_TIER_2) : null;
    return (0, n.jsx)(b.PaymentContextProvider, {
        activeSubscription: null,
        stepConfigs: [],
        skuIDs: [],
        children: (0, n.jsx)(
            o.EOs,
            ((t = (function (e) {
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
            })({ "data-migration-pending": !0 }, i)),
            (r = r =
                {
                    "aria-labelledby": "sticker-pack-premium-upsell-modal-header",
                    parentComponent: "StickerPackPremiumUpsellModal",
                    children: (0, n.jsx)(g.A, {
                        hideBreadcrumbs: !0,
                        body: (0, n.jsx)(R, {
                            trialOffer: P,
                            discountOffer: _,
                            isLoading: !x,
                            price: v,
                            onClose: c,
                        }),
                        footer: (0, n.jsx)(M, {
                            trialOffer: P,
                            discountOffer: _,
                            onClose: c,
                        }),
                        steps: [m.pn.PREMIUM_UPSELL],
                        currentStep: m.pn.PREMIUM_UPSELL,
                    }),
                }),
            Object.getOwnPropertyDescriptors
                ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(r))
                : (function (e, t) {
                      var r = Object.keys(e);
                      if (Object.getOwnPropertySymbols) {
                          var n = Object.getOwnPropertySymbols(e);
                          r.push.apply(r, n);
                      }
                      return r;
                  })(Object(r)).forEach(function (e) {
                      Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(r, e));
                  }),
            t),
        ),
    });
}
