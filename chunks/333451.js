n.d(t, { Z: () => x });
var i = n(54381),
    l = n(473749),
    r = n(120356),
    o = n.n(r),
    a = n(442837),
    s = n(780384),
    c = n(755721),
    u = n(481060),
    p = n(100527),
    d = n(906732),
    m = n(600164),
    b = n(963249),
    _ = n(639119),
    E = n(165583),
    P = n(263954),
    f = n(706454),
    h = n(626135),
    g = n(930153),
    S = n(74538),
    y = n(937615),
    I = n(981631),
    N = n(474936),
    O = n(388032),
    M = n(421077);
function T(e) {
    let { shouldUpsellFromNoneTier: t } = e,
        n = (0, a.e7)([f.default], () => f.default.locale);
    return (0, i.jsxs)("div", {
        className: M.perksList,
        children: [
            (0, i.jsx)(P.Z, {
                icon: u.Ucv,
                iconClassName: M.perkIconGuild,
                description: O.intl.formatToPlainString(O.t.sQBgs2, { numFreeGuildSubscriptions: N.cb }),
                color: u.TVs.unsafe_rawColors.GUILD_BOOSTING_PINK.css,
            }),
            (0, i.jsx)(P.Z, {
                icon: u.Ucv,
                iconClassName: M.perkIconGuild,
                description: O.intl.formatToPlainString(O.t["1A6vXi"], { percent: (0, g.T3)(n, N.Rr / 100) }),
                color: u.TVs.unsafe_rawColors.GUILD_BOOSTING_PINK.css,
            }),
            t
                ? (0, i.jsx)(P.Z, {
                      icon: u.EO4,
                      iconClassName: M.perkIconChatPerks,
                      description: O.intl.string(O.t.Z9b2x2),
                  })
                : null,
            (0, i.jsx)(P.Z, {
                icon: u.hGI,
                iconClassName: M.perkIconStream,
                description: O.intl.string(O.t["8dqG5E"]),
            }),
            (0, i.jsx)(P.Z, {
                icon: u.rG2,
                iconClassName: M.perkIconUpload,
                description: O.intl.string(O.t.cBorIy),
            }),
        ],
    });
}
function x(e) {
    var t;
    let {
            premiumSubscriptionPlan: n,
            onClose: r,
            onBack: a,
            onSkip: P,
            onSubscriptionConfirmation: f,
            analyticsLocation: g,
            analyticsSourceLocation: x,
            priceOptions: k,
        } = e,
        { analyticsLocations: L, sourceAnalyticsLocations: C } = (0, d.ZP)(p.Z.GUILD_BOOSTING_PREMIUM_UPSELL),
        { theme: j } = (0, u.TCT)(),
        A = (0, s.ap)(j) ? c.zx.Colors.PRIMARY : c.zx.Colors.WHITE,
        R = null == n || null == n.premiumSubscriptionType,
        v = S.ZP.getPrice(N.Xh.PREMIUM_MONTH_TIER_2, !1, !1, k),
        D = (0, y.T4)(v.amount, v.currency),
        w = (0, _.N)(),
        Z = null == w ? void 0 : w.trial_id,
        U = (null == w || null == (t = w.subscription_trial) ? void 0 : t.sku_id) === N.Si.TIER_2;
    return (
        l.useEffect(() => {
            h.default.track(I.rMx.PREMIUM_UPSELL_VIEWED, {
                type: N.cd.GUILD_PREMIUM_UPSELL_MODAL,
                location_stack: C,
            });
        }, [C]),
        (0, i.jsxs)(i.Fragment, {
            children: [
                (0, i.jsxs)(u.hzk, {
                    "data-migration-pending": !0,
                    className: M.content,
                    children: [
                        (0, i.jsx)(u.olH, {
                            "data-migration-pending": !0,
                            onClick: r,
                            className: M.closeButton,
                        }),
                        U && (0, i.jsx)(E.dz, { className: M.premiumTrialBadge }),
                        (0, i.jsx)("div", { className: o()(M.upsellImage, { [M.upsellImageWithTrialOffer]: U }) }),
                        (0, i.jsx)("div", {
                            className: M.bodyText,
                            children:
                                null != Z
                                    ? O.intl.string(O.t.AoSzEr)
                                    : O.intl.format(O.t["7vePZb"], { monthlyPrice: D }),
                        }),
                        (0, i.jsx)(T, { shouldUpsellFromNoneTier: R }),
                    ],
                }),
                (0, i.jsxs)(u.mzw, {
                    "data-migration-pending": !0,
                    align: m.Z.Align.CENTER,
                    justify: m.Z.Justify.END,
                    children: [
                        (0, i.jsxs)("div", {
                            className: M.footerRight,
                            children: [
                                (0, i.jsx)(c.zx, {
                                    "data-migration-pending": !0,
                                    look: c.zx.Looks.LINK,
                                    color: A,
                                    onClick: P,
                                    children: O.intl.string(O.t["SI/adm"]),
                                }),
                                (0, i.jsx)(u.Button, {
                                    variant: "active",
                                    text: null != Z ? O.intl.string(O.t["Gd/XHF"]) : O.intl.string(O.t.p2moip),
                                    type: "submit",
                                    onClick: () => {
                                        var e, t;
                                        r(),
                                            (0, b.Z)({
                                                initialPlanId: null,
                                                subscriptionTier: N.Si.TIER_2,
                                                analyticsLocations: L,
                                                analyticsObject:
                                                    ((e = (function (e) {
                                                        for (var t = 1; t < arguments.length; t++) {
                                                            var n = null != arguments[t] ? arguments[t] : {},
                                                                i = Object.keys(n);
                                                            "function" == typeof Object.getOwnPropertySymbols &&
                                                                (i = i.concat(
                                                                    Object.getOwnPropertySymbols(n).filter(
                                                                        function (e) {
                                                                            return Object.getOwnPropertyDescriptor(n, e)
                                                                                .enumerable;
                                                                        },
                                                                    ),
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
                                                    })({}, g)),
                                                    (t = t = { section: I.jXE.PREMIUM_GUILD_PURCHASE_MODAL }),
                                                    Object.getOwnPropertyDescriptors
                                                        ? Object.defineProperties(
                                                              e,
                                                              Object.getOwnPropertyDescriptors(t),
                                                          )
                                                        : (function (e, t) {
                                                              var n = Object.keys(e);
                                                              if (Object.getOwnPropertySymbols) {
                                                                  var i = Object.getOwnPropertySymbols(e);
                                                                  n.push.apply(n, i);
                                                              }
                                                              return n;
                                                          })(Object(t)).forEach(function (n) {
                                                              Object.defineProperty(
                                                                  e,
                                                                  n,
                                                                  Object.getOwnPropertyDescriptor(t, n),
                                                              );
                                                          }),
                                                    e),
                                                analyticsSourceLocation: x,
                                                onSubscriptionConfirmation: f,
                                                trialId: Z,
                                            });
                                    },
                                }),
                            ],
                        }),
                        (0, i.jsx)("div", {
                            className: M.backStep,
                            children: (0, i.jsx)(c.zx, {
                                "data-migration-pending": !0,
                                color: A,
                                look: c.zx.Looks.LINK,
                                size: c.zx.Sizes.NONE,
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
