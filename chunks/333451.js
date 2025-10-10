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
    b = t(388032),
    x = t(22706);
function M(e) {
    let { shouldUpsellFromNoneTier: n } = e,
        t = (0, a.e7)([S.default], () => S.default.locale);
    return (0, i.jsxs)("div", {
        className: x.perksList,
        children: [
            (0, i.jsx)(h.Z, {
                icon: u.Ucv,
                iconClassName: x.perkIconGuild,
                description: b.intl.formatToPlainString(b.t.sQBgs7, { numFreeGuildSubscriptions: O.cb }),
                color: u.TVs.unsafe_rawColors.GUILD_BOOSTING_PINK.css,
            }),
            (0, i.jsx)(h.Z, {
                icon: u.Ucv,
                iconClassName: x.perkIconGuild,
                description: b.intl.formatToPlainString(b.t["1A6vXl"], { percent: (0, y.T3)(t, O.Rr / 100) }),
                color: u.TVs.unsafe_rawColors.GUILD_BOOSTING_PINK.css,
            }),
            n
                ? (0, i.jsx)(h.Z, {
                      icon: u.EO4,
                      iconClassName: x.perkIconChatPerks,
                      description: b.intl.string(b.t.Z9b2x8),
                  })
                : null,
            (0, i.jsx)(h.Z, {
                icon: u.hGI,
                iconClassName: x.perkIconStream,
                description: b.intl.string(b.t["8dqG5O"]),
            }),
            (0, i.jsx)(h.Z, {
                icon: u.rG2,
                iconClassName: x.perkIconUpload,
                description: b.intl.string(b.t.cBorIy),
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
            priceOptions: L,
        } = e,
        { analyticsLocations: j, sourceAnalyticsLocations: C } = (0, p.ZP)(d.Z.GUILD_BOOSTING_PREMIUM_UPSELL),
        { theme: A } = (0, u.TCT)(),
        k = (0, o.ap)(A) ? c.zx.Colors.PRIMARY : c.zx.Colors.WHITE,
        R = null == t || null == t.premiumSubscriptionType,
        v = f.ZP.getPrice(O.Xh.PREMIUM_MONTH_TIER_2, !1, !1, L),
        D = (0, I.T4)(v.amount, v.currency),
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
                    className: x.content,
                    children: [
                        (0, i.jsx)(u.olH, {
                            "data-migration-pending": !0,
                            onClick: r,
                            className: x.closeButton,
                        }),
                        U && (0, i.jsx)(_.dz, { className: x.premiumTrialBadge }),
                        (0, i.jsx)("div", { className: s()(x.upsellImage, { [x.upsellImageWithTrialOffer]: U }) }),
                        (0, i.jsx)("div", {
                            className: x.bodyText,
                            children:
                                null != w
                                    ? b.intl.string(b.t.AoSzEh)
                                    : b.intl.format(b.t["7vePZW"], { monthlyPrice: D }),
                        }),
                        (0, i.jsx)(M, { shouldUpsellFromNoneTier: R }),
                    ],
                }),
                (0, i.jsxs)(u.mzw, {
                    "data-migration-pending": !0,
                    align: m.Z.Align.CENTER,
                    justify: m.Z.Justify.END,
                    children: [
                        (0, i.jsxs)("div", {
                            className: x.footerRight,
                            children: [
                                (0, i.jsx)(c.zx, {
                                    "data-migration-pending": !0,
                                    look: c.zx.Looks.LINK,
                                    color: k,
                                    onClick: h,
                                    children: b.intl.string(b.t["SI/adn"]),
                                }),
                                (0, i.jsx)(u.zxk, {
                                    variant: "active",
                                    text: null != w ? b.intl.string(b.t["Gd/XHB"]) : b.intl.string(b.t.p2moio),
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
                            className: x.backStep,
                            children: (0, i.jsx)(c.zx, {
                                "data-migration-pending": !0,
                                color: k,
                                look: c.zx.Looks.LINK,
                                size: c.zx.Sizes.NONE,
                                onClick: () => a(),
                                children: b.intl.string(b.t["13/7kZ"]),
                            }),
                        }),
                    ],
                }),
            ],
        })
    );
}
