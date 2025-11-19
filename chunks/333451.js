n.d(t, { Z: () => w });
var r = n(54381),
    i = n(473749),
    a = n(120356),
    o = n.n(a),
    s = n(442837),
    l = n(780384),
    c = n(755721),
    u = n(481060),
    d = n(100527),
    f = n(906732),
    _ = n(600164),
    p = n(963249),
    h = n(639119),
    m = n(165583),
    g = n(263954),
    E = n(706454),
    b = n(626135),
    y = n(930153),
    O = n(74538),
    v = n(937615),
    I = n(981631),
    T = n(474936),
    S = n(388032),
    A = n(697485);
function C(e, t, n) {
    return (
        t in e
            ? Object.defineProperty(e, t, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0,
              })
            : (e[t] = n),
        e
    );
}
function N(e) {
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
                C(e, t, n[t]);
            });
    }
    return e;
}
function R(e, t) {
    var n = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
        var r = Object.getOwnPropertySymbols(e);
        t &&
            (r = r.filter(function (t) {
                return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            n.push.apply(n, r);
    }
    return n;
}
function P(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : R(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
function D(e) {
    let { shouldUpsellFromNoneTier: t } = e,
        n = (0, s.e7)([E.default], () => E.default.locale);
    return (0, r.jsxs)("div", {
        className: A.perksList,
        children: [
            (0, r.jsx)(g.Z, {
                icon: u.Ucv,
                iconClassName: A.perkIconGuild,
                description: S.intl.formatToPlainString(S.t.sQBgs2, { numFreeGuildSubscriptions: T.cb }),
                color: u.TVs.unsafe_rawColors.GUILD_BOOSTING_PINK.css,
            }),
            (0, r.jsx)(g.Z, {
                icon: u.Ucv,
                iconClassName: A.perkIconGuild,
                description: S.intl.formatToPlainString(S.t["1A6vXi"], { percent: (0, y.T3)(n, T.Rr / 100) }),
                color: u.TVs.unsafe_rawColors.GUILD_BOOSTING_PINK.css,
            }),
            t
                ? (0, r.jsx)(g.Z, {
                      icon: u.EO4,
                      iconClassName: A.perkIconChatPerks,
                      description: S.intl.string(S.t.Z9b2x2),
                  })
                : null,
            (0, r.jsx)(g.Z, {
                icon: u.hGI,
                iconClassName: A.perkIconStream,
                description: S.intl.string(S.t["8dqG5E"]),
            }),
            (0, r.jsx)(g.Z, {
                icon: u.rG2,
                iconClassName: A.perkIconUpload,
                description: S.intl.string(S.t.cBorIy),
            }),
        ],
    });
}
function w(e) {
    var t;
    let {
            premiumSubscriptionPlan: n,
            onClose: a,
            onBack: s,
            onSkip: g,
            onSubscriptionConfirmation: E,
            analyticsLocation: y,
            analyticsSourceLocation: C,
            priceOptions: R,
        } = e,
        { analyticsLocations: w, sourceAnalyticsLocations: L } = (0, f.ZP)(d.Z.GUILD_BOOSTING_PREMIUM_UPSELL),
        { theme: x } = (0, u.TCT)(),
        M = (0, l.ap)(x) ? c.zx.Colors.PRIMARY : c.zx.Colors.WHITE,
        k = null == n || null == n.premiumSubscriptionType,
        j = O.ZP.getPrice(T.Xh.PREMIUM_MONTH_TIER_2, !1, !1, R),
        U = (0, v.T4)(j.amount, j.currency),
        G = (0, h.N)(),
        B = null == G ? void 0 : G.trial_id,
        Z = (null == G || null == (t = G.subscription_trial) ? void 0 : t.sku_id) === T.Si.TIER_2;
    return (
        i.useEffect(() => {
            b.default.track(I.rMx.PREMIUM_UPSELL_VIEWED, {
                type: T.cd.GUILD_PREMIUM_UPSELL_MODAL,
                location_stack: L,
            });
        }, [L]),
        (0, r.jsxs)(r.Fragment, {
            children: [
                (0, r.jsxs)(u.hzk, {
                    "data-migration-pending": !0,
                    className: A.content,
                    children: [
                        (0, r.jsx)(u.olH, {
                            "data-migration-pending": !0,
                            onClick: a,
                            className: A.closeButton,
                        }),
                        Z && (0, r.jsx)(m.dz, { className: A.premiumTrialBadge }),
                        (0, r.jsx)("div", { className: o()(A.upsellImage, { [A.upsellImageWithTrialOffer]: Z }) }),
                        (0, r.jsx)("div", {
                            className: A.bodyText,
                            children:
                                null != B
                                    ? S.intl.string(S.t.AoSzEr)
                                    : S.intl.format(S.t["7vePZb"], { monthlyPrice: U }),
                        }),
                        (0, r.jsx)(D, { shouldUpsellFromNoneTier: k }),
                    ],
                }),
                (0, r.jsxs)(u.mzw, {
                    "data-migration-pending": !0,
                    align: _.Z.Align.CENTER,
                    justify: _.Z.Justify.END,
                    children: [
                        (0, r.jsxs)("div", {
                            className: A.footerRight,
                            children: [
                                (0, r.jsx)(c.zx, {
                                    "data-migration-pending": !0,
                                    look: c.zx.Looks.LINK,
                                    color: M,
                                    onClick: g,
                                    children: S.intl.string(S.t["SI/adm"]),
                                }),
                                (0, r.jsx)(u.Button, {
                                    variant: "active",
                                    text: null != B ? S.intl.string(S.t["Gd/XHF"]) : S.intl.string(S.t.p2moip),
                                    type: "submit",
                                    onClick: () => {
                                        a(),
                                            (0, p.Z)({
                                                initialPlanId: null,
                                                subscriptionTier: T.Si.TIER_2,
                                                analyticsLocations: w,
                                                analyticsObject: P(N({}, y), {
                                                    section: I.jXE.PREMIUM_GUILD_PURCHASE_MODAL,
                                                }),
                                                analyticsSourceLocation: C,
                                                onSubscriptionConfirmation: E,
                                                trialId: B,
                                            });
                                    },
                                }),
                            ],
                        }),
                        (0, r.jsx)("div", {
                            className: A.backStep,
                            children: (0, r.jsx)(c.zx, {
                                "data-migration-pending": !0,
                                color: M,
                                look: c.zx.Looks.LINK,
                                size: c.zx.Sizes.NONE,
                                onClick: () => s(),
                                children: S.intl.string(S.t["13/7kX"]),
                            }),
                        }),
                    ],
                }),
            ],
        })
    );
}
