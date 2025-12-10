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
    p = n(600164),
    _ = n(963249),
    m = n(639119),
    h = n(165583),
    g = n(263954),
    E = n(706454),
    b = n(626135),
    y = n(930153),
    O = n(74538),
    v = n(937615),
    S = n(981631),
    I = n(474936),
    T = n(388032),
    C = n(22706);
function A(e, t, n) {
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
                A(e, t, n[t]);
            });
    }
    return e;
}
function P(e, t) {
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
function R(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : P(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
function D(e) {
    let { shouldUpsellFromNoneTier: t } = e,
        n = (0, s.e7)([E.default], () => E.default.locale);
    return (0, r.jsxs)("div", {
        className: C.perksList,
        children: [
            (0, r.jsx)(g.Z, {
                icon: u.Ucv,
                iconClassName: C.perkIconGuild,
                description: T.intl.formatToPlainString(T.t.sQBgs2, { numFreeGuildSubscriptions: I.cb }),
                color: u.TVs.unsafe_rawColors.GUILD_BOOSTING_PINK.css,
            }),
            (0, r.jsx)(g.Z, {
                icon: u.Ucv,
                iconClassName: C.perkIconGuild,
                description: T.intl.formatToPlainString(T.t["1A6vXi"], { percent: (0, y.T3)(n, I.Rr / 100) }),
                color: u.TVs.unsafe_rawColors.GUILD_BOOSTING_PINK.css,
            }),
            t
                ? (0, r.jsx)(g.Z, {
                      icon: u.EO4,
                      iconClassName: C.perkIconChatPerks,
                      description: T.intl.string(T.t.Z9b2x2),
                  })
                : null,
            (0, r.jsx)(g.Z, {
                icon: u.hGI,
                iconClassName: C.perkIconStream,
                description: T.intl.string(T.t["8dqG5E"]),
            }),
            (0, r.jsx)(g.Z, {
                icon: u.rG2,
                iconClassName: C.perkIconUpload,
                description: T.intl.string(T.t.cBorIy),
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
            analyticsSourceLocation: A,
            priceOptions: P,
        } = e,
        { analyticsLocations: w, sourceAnalyticsLocations: x } = (0, f.ZP)(d.Z.GUILD_BOOSTING_PREMIUM_UPSELL),
        { theme: L } = (0, u.TCT)(),
        j = (0, l.ap)(L) ? c.zx.Colors.PRIMARY : c.zx.Colors.WHITE,
        M = null == n || null == n.premiumSubscriptionType,
        k = O.ZP.getPrice(I.Xh.PREMIUM_MONTH_TIER_2, !1, !1, P),
        U = (0, v.T4)(k.amount, k.currency),
        G = (0, m.N)(),
        Z = null == G ? void 0 : G.trial_id,
        B = (null == G || null == (t = G.subscription_trial) ? void 0 : t.sku_id) === I.Si.TIER_2;
    return (
        i.useEffect(() => {
            b.default.track(S.rMx.PREMIUM_UPSELL_VIEWED, {
                type: I.cd.GUILD_PREMIUM_UPSELL_MODAL,
                location_stack: x,
            });
        }, [x]),
        (0, r.jsxs)(r.Fragment, {
            children: [
                (0, r.jsxs)(u.hzk, {
                    "data-migration-pending": !0,
                    className: C.content,
                    children: [
                        (0, r.jsx)(u.olH, {
                            "data-migration-pending": !0,
                            onClick: a,
                            className: C.closeButton,
                        }),
                        B && (0, r.jsx)(h.dz, { className: C.premiumTrialBadge }),
                        (0, r.jsx)("div", { className: o()(C.upsellImage, { [C.upsellImageWithTrialOffer]: B }) }),
                        (0, r.jsx)("div", {
                            className: C.bodyText,
                            children:
                                null != Z
                                    ? T.intl.string(T.t.AoSzEr)
                                    : T.intl.format(T.t["7vePZb"], { monthlyPrice: U }),
                        }),
                        (0, r.jsx)(D, { shouldUpsellFromNoneTier: M }),
                    ],
                }),
                (0, r.jsxs)(u.mzw, {
                    "data-migration-pending": !0,
                    align: p.Z.Align.CENTER,
                    justify: p.Z.Justify.END,
                    children: [
                        (0, r.jsxs)("div", {
                            className: C.footerRight,
                            children: [
                                (0, r.jsx)(c.zx, {
                                    "data-migration-pending": !0,
                                    look: c.zx.Looks.LINK,
                                    color: j,
                                    onClick: g,
                                    children: T.intl.string(T.t["SI/adm"]),
                                }),
                                (0, r.jsx)(u.Button, {
                                    variant: "active",
                                    text: null != Z ? T.intl.string(T.t["Gd/XHF"]) : T.intl.string(T.t.p2moip),
                                    type: "submit",
                                    onClick: () => {
                                        a(),
                                            (0, _.Z)({
                                                initialPlanId: null,
                                                subscriptionTier: I.Si.TIER_2,
                                                analyticsLocations: w,
                                                analyticsObject: R(N({}, y), {
                                                    section: S.jXE.PREMIUM_GUILD_PURCHASE_MODAL,
                                                }),
                                                analyticsSourceLocation: A,
                                                onSubscriptionConfirmation: E,
                                                trialId: Z,
                                            });
                                    },
                                }),
                            ],
                        }),
                        (0, r.jsx)("div", {
                            className: C.backStep,
                            children: (0, r.jsx)(c.zx, {
                                "data-migration-pending": !0,
                                color: j,
                                look: c.zx.Looks.LINK,
                                size: c.zx.Sizes.NONE,
                                onClick: () => s(),
                                children: T.intl.string(T.t["13/7kX"]),
                            }),
                        }),
                    ],
                }),
            ],
        })
    );
}
