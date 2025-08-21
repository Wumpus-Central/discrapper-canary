n.d(t, { Z: () => L });
var i = n(951288),
    l = n(647438),
    r = n(120356),
    s = n.n(r),
    o = n(442837),
    a = n(780384),
    c = n(755721),
    u = n(481060),
    d = n(100527),
    p = n(906732),
    E = n(600164),
    m = n(963249),
    P = n(639119),
    _ = n(165583),
    h = n(263954),
    S = n(706454),
    y = n(626135),
    I = n(930153),
    f = n(74538),
    N = n(937615),
    g = n(981631),
    O = n(474936),
    b = n(388032),
    x = n(22706);
function M(e) {
    let { shouldUpsellFromNoneTier: t } = e,
        n = (0, o.e7)([S.default], () => S.default.locale);
    return (0, i.jsxs)("div", {
        className: x.perksList,
        children: [
            (0, i.jsx)(h.Z, {
                icon: u.$Eu,
                iconClassName: x.perkIconGuild,
                description: b.intl.formatToPlainString(b.t.sQBgs7, { numFreeGuildSubscriptions: O.cb }),
                color: u.TVs.unsafe_rawColors.GUILD_BOOSTING_PINK.css,
            }),
            (0, i.jsx)(h.Z, {
                icon: u.$Eu,
                iconClassName: x.perkIconGuild,
                description: b.intl.formatToPlainString(b.t["1A6vXl"], { percent: (0, I.T3)(n, O.Rr / 100) }),
                color: u.TVs.unsafe_rawColors.GUILD_BOOSTING_PINK.css,
            }),
            t
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
function L(e) {
    var t;
    let {
            premiumSubscriptionPlan: n,
            onClose: r,
            onBack: o,
            onSkip: h,
            onSubscriptionConfirmation: S,
            analyticsLocation: I,
            analyticsSourceLocation: L,
            priceOptions: T,
        } = e,
        { analyticsLocations: j, sourceAnalyticsLocations: C } = (0, p.ZP)(d.Z.GUILD_BOOSTING_PREMIUM_UPSELL),
        { theme: A } = (0, u.TCT)(),
        k = (0, a.ap)(A) ? c.zx.Colors.PRIMARY : c.zx.Colors.WHITE,
        R = null == n || null == n.premiumSubscriptionType,
        D = f.ZP.getPrice(O.Xh.PREMIUM_MONTH_TIER_2, !1, !1, T),
        v = (0, N.T4)(D.amount, D.currency),
        w = (0, P.N)(),
        Z = null == w ? void 0 : w.trial_id,
        U = (null == w || null == (t = w.subscription_trial) ? void 0 : t.sku_id) === O.Si.TIER_2;
    return (
        l.useEffect(() => {
            y.default.track(g.rMx.PREMIUM_UPSELL_VIEWED, {
                type: O.cd.GUILD_PREMIUM_UPSELL_MODAL,
                location_stack: C,
            });
        }, [C]),
        (0, i.jsxs)(i.Fragment, {
            children: [
                (0, i.jsxs)(u.hzk, {
                    className: x.content,
                    children: [
                        (0, i.jsx)(u.olH, {
                            onClick: r,
                            className: x.closeButton,
                        }),
                        U && (0, i.jsx)(_.dz, { className: x.premiumTrialBadge }),
                        (0, i.jsx)("div", { className: s()(x.upsellImage, { [x.upsellImageWithTrialOffer]: U }) }),
                        (0, i.jsx)("div", {
                            className: x.bodyText,
                            children:
                                null != Z
                                    ? b.intl.string(b.t.AoSzEh)
                                    : b.intl.format(b.t["7vePZW"], { monthlyPrice: v }),
                        }),
                        (0, i.jsx)(M, { shouldUpsellFromNoneTier: R }),
                    ],
                }),
                (0, i.jsxs)(u.mzw, {
                    align: E.Z.Align.CENTER,
                    justify: E.Z.Justify.END,
                    children: [
                        (0, i.jsxs)("div", {
                            className: x.footerRight,
                            children: [
                                (0, i.jsx)(c.zx, {
                                    look: c.zx.Looks.LINK,
                                    color: k,
                                    onClick: h,
                                    children: b.intl.string(b.t["SI/adn"]),
                                }),
                                (0, i.jsx)(u.zxk, {
                                    variant: "active",
                                    text: null != Z ? b.intl.string(b.t["Gd/XHB"]) : b.intl.string(b.t.p2moio),
                                    type: "submit",
                                    onClick: () => {
                                        var e, t;
                                        r(),
                                            (0, m.Z)({
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
                                                    })({}, I)),
                                                    (t = t = { section: g.jXE.PREMIUM_GUILD_PURCHASE_MODAL }),
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
                                                analyticsSourceLocation: L,
                                                onSubscriptionConfirmation: S,
                                                trialId: Z,
                                            });
                                    },
                                }),
                            ],
                        }),
                        (0, i.jsx)("div", {
                            className: x.backStep,
                            children: (0, i.jsx)(c.zx, {
                                color: k,
                                look: c.zx.Looks.LINK,
                                size: c.zx.Sizes.NONE,
                                onClick: () => o(),
                                children: b.intl.string(b.t["13/7kZ"]),
                            }),
                        }),
                    ],
                }),
            ],
        })
    );
}
