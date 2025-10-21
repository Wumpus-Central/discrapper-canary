t.d(n, { Z: () => T });
var i = t(951288),
    l = t(647438),
    r = t(120356),
    s = t.n(r),
    a = t(442837),
    o = t(780384),
    c = t(755721),
    u = t(481060),
    d = t(100527),
    p = t(906732),
    m = t(600164),
    E = t(963249),
    P = t(639119),
    _ = t(165583),
    h = t(263954),
    S = t(706454),
    g = t(626135),
    y = t(930153),
    f = t(74538),
    I = t(937615),
    N = t(981631),
    O = t(474936),
    M = t(388032),
    b = t(697485);
function L(e) {
    let { shouldUpsellFromNoneTier: n } = e,
        t = (0, a.e7)([S.default], () => S.default.locale);
    return (0, i.jsxs)("div", {
        className: b.perksList,
        children: [
            (0, i.jsx)(h.Z, {
                icon: u.Ucv,
                iconClassName: b.perkIconGuild,
                description: M.intl.formatToPlainString(M.t.sQBgs7, { numFreeGuildSubscriptions: O.cb }),
                color: u.TVs.unsafe_rawColors.GUILD_BOOSTING_PINK.css,
            }),
            (0, i.jsx)(h.Z, {
                icon: u.Ucv,
                iconClassName: b.perkIconGuild,
                description: M.intl.formatToPlainString(M.t["1A6vXl"], { percent: (0, y.T3)(t, O.Rr / 100) }),
                color: u.TVs.unsafe_rawColors.GUILD_BOOSTING_PINK.css,
            }),
            n
                ? (0, i.jsx)(h.Z, {
                      icon: u.EO4,
                      iconClassName: b.perkIconChatPerks,
                      description: M.intl.string(M.t.Z9b2x8),
                  })
                : null,
            (0, i.jsx)(h.Z, {
                icon: u.hGI,
                iconClassName: b.perkIconStream,
                description: M.intl.string(M.t["8dqG5O"]),
            }),
            (0, i.jsx)(h.Z, {
                icon: u.rG2,
                iconClassName: b.perkIconUpload,
                description: M.intl.string(M.t.cBorIy),
            }),
        ],
    });
}
function T(e) {
    var n;
    let {
            premiumSubscriptionPlan: t,
            onClose: r,
            onBack: a,
            onSkip: h,
            onSubscriptionConfirmation: S,
            analyticsLocation: y,
            analyticsSourceLocation: T,
            priceOptions: x,
        } = e,
        { analyticsLocations: j, sourceAnalyticsLocations: C } = (0, p.ZP)(d.Z.GUILD_BOOSTING_PREMIUM_UPSELL),
        { theme: A } = (0, u.TCT)(),
        R = (0, o.ap)(A) ? c.zx.Colors.PRIMARY : c.zx.Colors.WHITE,
        v = null == t || null == t.premiumSubscriptionType,
        k = f.ZP.getPrice(O.Xh.PREMIUM_MONTH_TIER_2, !1, !1, x),
        D = (0, I.T4)(k.amount, k.currency),
        Z = (0, P.N)(),
        w = null == Z ? void 0 : Z.trial_id,
        U = (null == Z || null == (n = Z.subscription_trial) ? void 0 : n.sku_id) === O.Si.TIER_2;
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
                    className: b.content,
                    children: [
                        (0, i.jsx)(u.olH, {
                            "data-migration-pending": !0,
                            onClick: r,
                            className: b.closeButton,
                        }),
                        U && (0, i.jsx)(_.dz, { className: b.premiumTrialBadge }),
                        (0, i.jsx)("div", { className: s()(b.upsellImage, { [b.upsellImageWithTrialOffer]: U }) }),
                        (0, i.jsx)("div", {
                            className: b.bodyText,
                            children:
                                null != w
                                    ? M.intl.string(M.t.AoSzEh)
                                    : M.intl.format(M.t["7vePZW"], { monthlyPrice: D }),
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
                            className: b.footerRight,
                            children: [
                                (0, i.jsx)(c.zx, {
                                    "data-migration-pending": !0,
                                    look: c.zx.Looks.LINK,
                                    color: R,
                                    onClick: h,
                                    children: M.intl.string(M.t["SI/adn"]),
                                }),
                                (0, i.jsx)(u.Button, {
                                    variant: "active",
                                    text: null != w ? M.intl.string(M.t["Gd/XHB"]) : M.intl.string(M.t.p2moio),
                                    type: "submit",
                                    onClick: () => {
                                        var e, n;
                                        r(),
                                            (0, E.Z)({
                                                initialPlanId: null,
                                                subscriptionTier: O.Si.TIER_2,
                                                analyticsLocations: j,
                                                analyticsObject:
                                                    ((e = (function (e) {
                                                        for (var n = 1; n < arguments.length; n++) {
                                                            var t = null != arguments[n] ? arguments[n] : {},
                                                                i = Object.keys(t);
                                                            "function" == typeof Object.getOwnPropertySymbols &&
                                                                (i = i.concat(
                                                                    Object.getOwnPropertySymbols(t).filter(
                                                                        function (e) {
                                                                            return Object.getOwnPropertyDescriptor(t, e)
                                                                                .enumerable;
                                                                        },
                                                                    ),
                                                                )),
                                                                i.forEach(function (n) {
                                                                    var i;
                                                                    (i = t[n]),
                                                                        n in e
                                                                            ? Object.defineProperty(e, n, {
                                                                                  value: i,
                                                                                  enumerable: !0,
                                                                                  configurable: !0,
                                                                                  writable: !0,
                                                                              })
                                                                            : (e[n] = i);
                                                                });
                                                        }
                                                        return e;
                                                    })({}, y)),
                                                    (n = n = { section: N.jXE.PREMIUM_GUILD_PURCHASE_MODAL }),
                                                    Object.getOwnPropertyDescriptors
                                                        ? Object.defineProperties(
                                                              e,
                                                              Object.getOwnPropertyDescriptors(n),
                                                          )
                                                        : (function (e, n) {
                                                              var t = Object.keys(e);
                                                              if (Object.getOwnPropertySymbols) {
                                                                  var i = Object.getOwnPropertySymbols(e);
                                                                  t.push.apply(t, i);
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
                                                analyticsSourceLocation: T,
                                                onSubscriptionConfirmation: S,
                                                trialId: w,
                                            });
                                    },
                                }),
                            ],
                        }),
                        (0, i.jsx)("div", {
                            className: b.backStep,
                            children: (0, i.jsx)(c.zx, {
                                "data-migration-pending": !0,
                                color: R,
                                look: c.zx.Looks.LINK,
                                size: c.zx.Sizes.NONE,
                                onClick: () => a(),
                                children: M.intl.string(M.t["13/7kZ"]),
                            }),
                        }),
                    ],
                }),
            ],
        })
    );
}
