t.d(n, { A: () => x });
var i = t(627968),
    l = t(64700),
    r = t(503698),
    s = t.n(r),
    a = t(311907),
    o = t(582754),
    c = t(421380),
    u = t(397927),
    p = t(793574),
    _ = t(688810),
    d = t(235986),
    m = t(532794),
    E = t(234419),
    S = t(811611),
    A = t(901017),
    g = t(773669),
    P = t(954571),
    I = t(252424),
    b = t(927578),
    N = t(580630),
    f = t(652215),
    y = t(788868),
    T = t(985018),
    M = t(993605);
function C(e) {
    let { shouldUpsellFromNoneTier: n } = e,
        t = (0, a.bG)([g.default], () => g.default.locale);
    return (0, i.jsxs)("div", {
        className: M.mH,
        children: [
            (0, i.jsx)(A.A, {
                icon: u._Jp,
                iconClassName: M.pl,
                description: T.intl.formatToPlainString(T.t.sQBgs2, { numFreeGuildSubscriptions: y.M4 }),
                color: u.LU0.unsafe_rawColors.GUILD_BOOSTING_PINK.css,
            }),
            (0, i.jsx)(A.A, {
                icon: u._Jp,
                iconClassName: M.pl,
                description: T.intl.formatToPlainString(T.t["1A6vXi"], { percent: (0, I.l9)(t, y.oX / 100) }),
                color: u.LU0.unsafe_rawColors.GUILD_BOOSTING_PINK.css,
            }),
            n ? (0, i.jsx)(A.A, { icon: u.nm2, iconClassName: M.zO, description: T.intl.string(T.t.Z9b2x2) }) : null,
            (0, i.jsx)(A.A, { icon: u.Fzq, iconClassName: M.Kg, description: T.intl.string(T.t["8dqG5E"]) }),
            (0, i.jsx)(A.A, { icon: u.JMY, iconClassName: M.$z, description: T.intl.string(T.t.cBorIy) }),
        ],
    });
}
function x(e) {
    let {
            premiumSubscriptionPlan: n,
            onClose: t,
            onBack: r,
            onSkip: a,
            onSubscriptionConfirmation: A,
            analyticsLocation: g,
            analyticsSourceLocation: I,
            priceOptions: x,
        } = e,
        { analyticsLocations: L, sourceAnalyticsLocations: h } = (0, _.Ay)(p.A.GUILD_BOOSTING_PREMIUM_UPSELL),
        { theme: R } = (0, u.wRf)(),
        k = (0, o.qB)(R) ? c.$n.Colors.PRIMARY : c.$n.Colors.WHITE,
        D = null == n || null == n.premiumSubscriptionType,
        j = b.Ay.getPrice(y.gD.PREMIUM_MONTH_TIER_2, !1, !1, x),
        O = (0, N.$g)(j.amount, j.currency),
        v = (0, E.V)(),
        w = v?.trial_id,
        U = v?.subscription_trial?.sku_id === y.pe.TIER_2;
    return (
        l.useEffect(() => {
            P.default.track(f.HAw.PREMIUM_UPSELL_VIEWED, { type: y.e.GUILD_PREMIUM_UPSELL_MODAL, location_stack: h });
        }, [h]),
        (0, i.jsxs)(i.Fragment, {
            children: [
                (0, i.jsxs)(u.$mQ, {
                    "data-migration-pending": !0,
                    className: M.Qs,
                    children: [
                        (0, i.jsx)(u.s_y, { "data-migration-pending": !0, onClick: t, className: M.b }),
                        U && (0, i.jsx)(S.Vq, { className: M.Fg }),
                        (0, i.jsx)("div", { className: s()(M.Tn, { [M.NH]: U }) }),
                        (0, i.jsx)("div", {
                            className: M.G3,
                            children:
                                null != w
                                    ? T.intl.string(T.t.AoSzEr)
                                    : T.intl.format(T.t["7vePZb"], { monthlyPrice: O }),
                        }),
                        (0, i.jsx)(C, { shouldUpsellFromNoneTier: D }),
                    ],
                }),
                (0, i.jsxs)(u.jlY, {
                    "data-migration-pending": !0,
                    align: d.A.Align.CENTER,
                    justify: d.A.Justify.END,
                    children: [
                        (0, i.jsxs)("div", {
                            className: M.wV,
                            children: [
                                (0, i.jsx)(c.$n, {
                                    "data-migration-pending": !0,
                                    look: c.$n.Looks.LINK,
                                    color: k,
                                    onClick: a,
                                    children: T.intl.string(T.t["SI/adm"]),
                                }),
                                (0, i.jsx)(u.Button, {
                                    variant: "active",
                                    text: null != w ? T.intl.string(T.t["Gd/XHF"]) : T.intl.string(T.t.p2moip),
                                    type: "submit",
                                    onClick: () => {
                                        t(),
                                            (0, m.A)({
                                                initialPlanId: null,
                                                subscriptionTier: y.pe.TIER_2,
                                                analyticsLocations: L,
                                                analyticsObject: { ...g, section: f.JJy.PREMIUM_GUILD_PURCHASE_MODAL },
                                                analyticsSourceLocation: I,
                                                onSubscriptionConfirmation: A,
                                                trialId: w,
                                            });
                                    },
                                }),
                            ],
                        }),
                        (0, i.jsx)("div", {
                            className: M.uA,
                            children: (0, i.jsx)(c.$n, {
                                "data-migration-pending": !0,
                                color: k,
                                look: c.$n.Looks.LINK,
                                size: c.$n.Sizes.NONE,
                                onClick: () => r(),
                                children: T.intl.string(T.t["13/7kX"]),
                            }),
                        }),
                    ],
                }),
            ],
        })
    );
}
