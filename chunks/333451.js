n.d(t, { Z: () => T });
var i = n(951288),
    l = n(647438),
    r = n(120356),
    s = n.n(r),
    a = n(442837),
    o = n(780384),
    c = n(755721),
    u = n(481060),
    d = n(100527),
    p = n(906732),
    m = n(600164),
    E = n(963249),
    P = n(639119),
    h = n(165583),
    _ = n(263954),
    S = n(706454),
    g = n(626135),
    y = n(930153),
    f = n(74538),
    I = n(937615),
    N = n(981631),
    O = n(474936),
    b = n(388032),
    M = n(697485);
function L(e) {
    let { shouldUpsellFromNoneTier: t } = e,
        n = (0, a.e7)([S.default], () => S.default.locale);
    return (0, i.jsxs)("div", {
        className: M.perksList,
        children: [
            (0, i.jsx)(_.Z, {
                icon: u.Ucv,
                iconClassName: M.perkIconGuild,
                description: b.intl.formatToPlainString(b.t.sQBgs2, { numFreeGuildSubscriptions: O.cb }),
                color: u.TVs.unsafe_rawColors.GUILD_BOOSTING_PINK.css,
            }),
            (0, i.jsx)(_.Z, {
                icon: u.Ucv,
                iconClassName: M.perkIconGuild,
                description: b.intl.formatToPlainString(b.t["1A6vXi"], { percent: (0, y.T3)(n, O.Rr / 100) }),
                color: u.TVs.unsafe_rawColors.GUILD_BOOSTING_PINK.css,
            }),
            t
                ? (0, i.jsx)(_.Z, {
                      icon: u.EO4,
                      iconClassName: M.perkIconChatPerks,
                      description: b.intl.string(b.t.Z9b2x2),
                  })
                : null,
            (0, i.jsx)(_.Z, {
                icon: u.hGI,
                iconClassName: M.perkIconStream,
                description: b.intl.string(b.t["8dqG5E"]),
            }),
            (0, i.jsx)(_.Z, {
                icon: u.rG2,
                iconClassName: M.perkIconUpload,
                description: b.intl.string(b.t.cBorIy),
            }),
        ],
    });
}
function T(e) {
    var t;
    let {
            premiumSubscriptionPlan: n,
            onClose: r,
            onBack: a,
            onSkip: _,
            onSubscriptionConfirmation: S,
            analyticsLocation: y,
            analyticsSourceLocation: T,
            priceOptions: x,
        } = e,
        { analyticsLocations: j, sourceAnalyticsLocations: C } = (0, p.ZP)(d.Z.GUILD_BOOSTING_PREMIUM_UPSELL),
        { theme: A } = (0, u.TCT)(),
        R = (0, o.ap)(A) ? c.zx.Colors.PRIMARY : c.zx.Colors.WHITE,
        v = null == n || null == n.premiumSubscriptionType,
        k = f.ZP.getPrice(O.Xh.PREMIUM_MONTH_TIER_2, !1, !1, x),
        D = (0, I.T4)(k.amount, k.currency),
        Z = (0, P.N)(),
        w = null == Z ? void 0 : Z.trial_id,
        U = (null == Z || null == (t = Z.subscription_trial) ? void 0 : t.sku_id) === O.Si.TIER_2;
    return (
        l.useEffect(() => {
            g.default.track(N.rMx.PREMIUM_UPSELL_VIEWED, {
                type: O.cd.GUILD_PREMIUM_UPSELL_MODAL,
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
                        U && (0, i.jsx)(h.dz, { className: M.premiumTrialBadge }),
                        (0, i.jsx)("div", { className: s()(M.upsellImage, { [M.upsellImageWithTrialOffer]: U }) }),
                        (0, i.jsx)("div", {
                            className: M.bodyText,
                            children:
                                null != w
                                    ? b.intl.string(b.t.AoSzEr)
                                    : b.intl.format(b.t["7vePZb"], { monthlyPrice: D }),
                        }),
                        (0, i.jsx)(L, { shouldUpsellFromNoneTier: v }),
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
                                    color: R,
                                    onClick: _,
                                    children: b.intl.string(b.t["SI/adm"]),
                                }),
                                (0, i.jsx)(u.Button, {
                                    variant: "active",
                                    text: null != w ? b.intl.string(b.t["Gd/XHF"]) : b.intl.string(b.t.p2moip),
                                    type: "submit",
                                    onClick: () => {
                                        var e, t;
                                        r(),
                                            (0, E.Z)({
                                                initialPlanId: null,
                                                subscriptionTier: O.Si.TIER_2,
                                                analyticsLocations: j,
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
                                                    })({}, y)),
                                                    (t = t = { section: N.jXE.PREMIUM_GUILD_PURCHASE_MODAL }),
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
                                                analyticsSourceLocation: T,
                                                onSubscriptionConfirmation: S,
                                                trialId: w,
                                            });
                                    },
                                }),
                            ],
                        }),
                        (0, i.jsx)("div", {
                            className: M.backStep,
                            children: (0, i.jsx)(c.zx, {
                                "data-migration-pending": !0,
                                color: R,
                                look: c.zx.Looks.LINK,
                                size: c.zx.Sizes.NONE,
                                onClick: () => a(),
                                children: b.intl.string(b.t["13/7kX"]),
                            }),
                        }),
                    ],
                }),
            ],
        })
    );
}
