t.d(n, {
    A: () => j,
});
var l = t(627968),
    i = t(64700),
    r = t(503698),
    s = t.n(r),
    a = t(311907),
    o = t(582754),
    c = t(421380),
    u = t(397927),
    d = t(793574),
    p = t(688810),
    m = t(235986),
    _ = t(532794),
    E = t(234419),
    b = t(811611),
    P = t(901017),
    A = t(773669),
    y = t(954571),
    f = t(252424),
    g = t(927578),
    S = t(580630),
    N = t(652215),
    I = t(788868),
    O = t(985018),
    M = t(993605);

function h(e) {
    let { shouldUpsellFromNoneTier: n } = e,
        t = (0, a.bG)([A.default], () => A.default.locale);
    return (0, l.jsxs)("div", {
        className: M.mH,
        children: [
            (0, l.jsx)(P.A, {
                icon: u._Jp,
                iconClassName: M.pl,
                description: O.intl.formatToPlainString(O.t.sQBgs2, {
                    numFreeGuildSubscriptions: I.M4,
                }),
                color: u.LU0.unsafe_rawColors.GUILD_BOOSTING_PINK.css,
            }),
            (0, l.jsx)(P.A, {
                icon: u._Jp,
                iconClassName: M.pl,
                description: O.intl.formatToPlainString(O.t["1A6vXi"], {
                    percent: (0, f.l9)(t, I.oX / 100),
                }),
                color: u.LU0.unsafe_rawColors.GUILD_BOOSTING_PINK.css,
            }),
            n
                ? (0, l.jsx)(P.A, {
                      icon: u.nm2,
                      iconClassName: M.zO,
                      description: O.intl.string(O.t.Z9b2x2),
                  })
                : null,
            (0, l.jsx)(P.A, {
                icon: u.Fzq,
                iconClassName: M.Kg,
                description: O.intl.string(O.t["8dqG5E"]),
            }),
            (0, l.jsx)(P.A, {
                icon: u.JMY,
                iconClassName: M.$z,
                description: O.intl.string(O.t.cBorIy),
            }),
        ],
    });
}

function j(e) {
    var n;
    let {
            premiumSubscriptionPlan: t,
            onClose: r,
            onBack: a,
            onSkip: P,
            onSubscriptionConfirmation: A,
            analyticsLocation: f,
            analyticsSourceLocation: j,
            priceOptions: L,
        } = e,
        { analyticsLocations: T, sourceAnalyticsLocations: C } = (0, p.Ay)(d.A.GUILD_BOOSTING_PREMIUM_UPSELL),
        { theme: x } = (0, u.wRf)(),
        D = (0, o.qB)(x) ? c.$n.Colors.PRIMARY : c.$n.Colors.WHITE,
        R = null == t || null == t.premiumSubscriptionType,
        w = g.Ay.getPrice(I.gD.PREMIUM_MONTH_TIER_2, !1, !1, L),
        v = (0, S.$g)(w.amount, w.currency),
        k = (0, E.V)(),
        G = null == k ? void 0 : k.trial_id,
        U = (null == k || null == (n = k.subscription_trial) ? void 0 : n.sku_id) === I.pe.TIER_2;
    return (
        i.useEffect(() => {
            y.default.track(N.HAw.PREMIUM_UPSELL_VIEWED, {
                type: I.e.GUILD_PREMIUM_UPSELL_MODAL,
                location_stack: C,
            });
        }, [C]),
        (0, l.jsxs)(l.Fragment, {
            children: [
                (0, l.jsxs)(u.$mQ, {
                    "data-migration-pending": !0,
                    className: M.Qs,
                    children: [
                        (0, l.jsx)(u.s_y, {
                            "data-migration-pending": !0,
                            onClick: r,
                            className: M.b,
                        }),
                        U &&
                            (0, l.jsx)(b.Vq, {
                                className: M.Fg,
                            }),
                        (0, l.jsx)("div", {
                            className: s()(M.Tn, {
                                [M.NH]: U,
                            }),
                        }),
                        (0, l.jsx)("div", {
                            className: M.G3,
                            children:
                                null != G
                                    ? O.intl.string(O.t.AoSzEr)
                                    : O.intl.format(O.t["7vePZb"], {
                                          monthlyPrice: v,
                                      }),
                        }),
                        (0, l.jsx)(h, {
                            shouldUpsellFromNoneTier: R,
                        }),
                    ],
                }),
                (0, l.jsxs)(u.jlY, {
                    "data-migration-pending": !0,
                    align: m.A.Align.CENTER,
                    justify: m.A.Justify.END,
                    children: [
                        (0, l.jsxs)("div", {
                            className: M.wV,
                            children: [
                                (0, l.jsx)(c.$n, {
                                    "data-migration-pending": !0,
                                    look: c.$n.Looks.LINK,
                                    color: D,
                                    onClick: P,
                                    children: O.intl.string(O.t["SI/adm"]),
                                }),
                                (0, l.jsx)(u.Button, {
                                    variant: "active",
                                    text: null != G ? O.intl.string(O.t["Gd/XHF"]) : O.intl.string(O.t.p2moip),
                                    type: "submit",
                                    onClick: () => {
                                        var e, n;
                                        r(),
                                            (0, _.A)({
                                                initialPlanId: null,
                                                subscriptionTier: I.pe.TIER_2,
                                                analyticsLocations: T,
                                                analyticsObject:
                                                    ((e = (function (e) {
                                                        for (var n = 1; n < arguments.length; n++) {
                                                            var t = null != arguments[n] ? arguments[n] : {},
                                                                l = Object.keys(t);
                                                            "function" == typeof Object.getOwnPropertySymbols &&
                                                                (l = l.concat(
                                                                    Object.getOwnPropertySymbols(t).filter(
                                                                        function (e) {
                                                                            return Object.getOwnPropertyDescriptor(t, e)
                                                                                .enumerable;
                                                                        },
                                                                    ),
                                                                )),
                                                                l.forEach(function (n) {
                                                                    var l;
                                                                    (l = t[n]),
                                                                        n in e
                                                                            ? Object.defineProperty(e, n, {
                                                                                  value: l,
                                                                                  enumerable: !0,
                                                                                  configurable: !0,
                                                                                  writable: !0,
                                                                              })
                                                                            : (e[n] = l);
                                                                });
                                                        }
                                                        return e;
                                                    })({}, f)),
                                                    (n = n =
                                                        {
                                                            section: N.JJy.PREMIUM_GUILD_PURCHASE_MODAL,
                                                        }),
                                                    Object.getOwnPropertyDescriptors
                                                        ? Object.defineProperties(
                                                              e,
                                                              Object.getOwnPropertyDescriptors(n),
                                                          )
                                                        : (function (e, n) {
                                                              var t = Object.keys(e);
                                                              if (Object.getOwnPropertySymbols) {
                                                                  var l = Object.getOwnPropertySymbols(e);
                                                                  t.push.apply(t, l);
                                                              }
                                                              return t;
                                                          })(Object(n)).forEach(function (t) {
                                                              Object.defineProperty(
                                                                  e,
                                                                  t,
                                                                  Object.getOwnPropertyDescriptor(n, t),
                                                              );
                                                          }),
                                                    e),
                                                analyticsSourceLocation: j,
                                                onSubscriptionConfirmation: A,
                                                trialId: G,
                                            });
                                    },
                                }),
                            ],
                        }),
                        (0, l.jsx)("div", {
                            className: M.uA,
                            children: (0, l.jsx)(c.$n, {
                                "data-migration-pending": !0,
                                color: D,
                                look: c.$n.Looks.LINK,
                                size: c.$n.Sizes.NONE,
                                onClick: () => a(),
                                children: O.intl.string(O.t["13/7kX"]),
                            }),
                        }),
                    ],
                }),
            ],
        })
    );
}
