t.d(n, { A: () => M });
var l = t(627968),
    i = t(64700),
    r = t(503698),
    s = t.n(r),
    a = t(311907),
    o = t(732955),
    c = t(397927),
    u = t(793574),
    p = t(688810),
    _ = t(532794),
    d = t(234419),
    m = t(811611),
    S = t(901017),
    E = t(773669),
    A = t(954571),
    P = t(252424),
    b = t(927578),
    g = t(580630),
    I = t(652215),
    y = t(788868),
    f = t(985018),
    x = t(993605);
function T(e) {
    let { shouldUpsellFromNoneTier: n } = e,
        t = (0, a.bG)([E.default], () => E.default.locale);
    return (0, l.jsxs)("div", {
        className: x.mH,
        children: [
            (0, l.jsx)(S.A, {
                icon: c._Jp,
                iconClassName: x.pl,
                description: f.intl.formatToPlainString(f.t.sQBgs2, { numFreeGuildSubscriptions: y.M4 }),
                color: c.LU0.unsafe_rawColors.GUILD_BOOSTING_PINK.css,
            }),
            (0, l.jsx)(S.A, {
                icon: c._Jp,
                iconClassName: x.pl,
                description: f.intl.formatToPlainString(f.t["1A6vXi"], { percent: (0, P.l9)(t, y.oX / 100) }),
                color: c.LU0.unsafe_rawColors.GUILD_BOOSTING_PINK.css,
            }),
            n ? (0, l.jsx)(S.A, { icon: c.nm2, iconClassName: x.zO, description: f.intl.string(f.t.Z9b2x2) }) : null,
            (0, l.jsx)(S.A, { icon: c.Fzq, iconClassName: x.Kg, description: f.intl.string(f.t["8dqG5E"]) }),
            (0, l.jsx)(S.A, { icon: c.JMY, iconClassName: x.$z, description: f.intl.string(f.t.cBorIy) }),
        ],
    });
}
function M(e) {
    let {
            premiumSubscriptionPlan: n,
            onClose: t,
            onBack: r,
            onSkip: a,
            onSubscriptionConfirmation: S,
            analyticsLocation: E,
            analyticsSourceLocation: P,
            priceOptions: M,
        } = e,
        { analyticsLocations: N, sourceAnalyticsLocations: h } = (0, p.Ay)(u.A.GUILD_BOOSTING_PREMIUM_UPSELL),
        C = null == n || null == n.premiumSubscriptionType,
        L = b.Ay.getPrice(y.gD.PREMIUM_MONTH_TIER_2, !1, !1, M),
        R = (0, g.$g)(L.amount, L.currency),
        j = (0, d.V)(),
        D = j?.trial_id,
        k = j?.subscription_trial?.sku_id === y.pe.TIER_2;
    return (
        i.useEffect(() => {
            A.default.track(I.HAw.PREMIUM_UPSELL_VIEWED, { type: y.e.GUILD_PREMIUM_UPSELL_MODAL, location_stack: h });
        }, [h]),
        (0, l.jsxs)(l.Fragment, {
            children: [
                (0, l.jsx)(c.s_y, { "data-migration-pending": !0, onClick: t, className: x.b }),
                (0, l.jsxs)(c.cwr, {
                    children: [
                        k && (0, l.jsx)(m.Vq, { className: x.Fg }),
                        (0, l.jsx)("div", { className: s()(x.Tn, { [x.NH]: k }) }),
                        (0, l.jsx)("div", {
                            className: x.G3,
                            children:
                                null != D
                                    ? f.intl.string(f.t.AoSzEr)
                                    : f.intl.format(f.t["7vePZb"], { monthlyPrice: R }),
                        }),
                        (0, l.jsx)(T, { shouldUpsellFromNoneTier: C }),
                    ],
                }),
                (0, l.jsx)(o.jlY, {
                    children: (0, l.jsxs)(c.BJc, {
                        direction: "horizontal",
                        align: "center",
                        justify: "space-between",
                        fullWidth: !0,
                        children: [
                            (0, l.jsx)(c.QWc, { text: f.intl.string(f.t["13/7kX"]), onClick: r, variant: "secondary" }),
                            (0, l.jsxs)(c.BJc, {
                                direction: "horizontal",
                                align: "center",
                                fullWidth: !1,
                                children: [
                                    (0, l.jsx)(c.QWc, {
                                        text: f.intl.string(f.t["SI/adm"]),
                                        onClick: a,
                                        variant: "secondary",
                                    }),
                                    (0, l.jsx)(c.Button, {
                                        variant: "active",
                                        text: null != D ? f.intl.string(f.t["Gd/XHF"]) : f.intl.string(f.t.p2moip),
                                        type: "submit",
                                        onClick: () => {
                                            t(),
                                                (0, _.A)({
                                                    initialPlanId: null,
                                                    subscriptionTier: y.pe.TIER_2,
                                                    analyticsLocations: N,
                                                    analyticsObject: {
                                                        ...E,
                                                        section: I.JJy.PREMIUM_GUILD_PURCHASE_MODAL,
                                                    },
                                                    analyticsSourceLocation: P,
                                                    onSubscriptionConfirmation: S,
                                                    trialId: D,
                                                });
                                        },
                                    }),
                                ],
                            }),
                        ],
                    }),
                }),
            ],
        })
    );
}
