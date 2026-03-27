a.d(t, { default: () => B });
var n = a(627968),
    i = a(64700),
    r = a(284009),
    s = a.n(r),
    l = a(158954),
    o = a(311907),
    c = a(732955),
    _ = a(964486),
    d = a(975807),
    u = a(512213),
    f = a(303136),
    I = a(639289),
    S = a(976860),
    m = a(287809),
    P = a(954571),
    p = a(676279),
    b = a(677185),
    N = a(88001),
    U = a(652215),
    O = a(519412),
    R = a(985018),
    T = a(101574),
    C = a(42085),
    g = a(49402),
    E = a(27753),
    h = a(136300);
let x = {
    [N.Hy.BILLING_SUBSCRIPTION_GROUP_USER_ON_COOLDOWN]: 1,
    [N.Hy.BILLING_SUBSCRIPTION_GROUP_USER_ACTIVE_BOOSTS]: 2,
    [N.Hy.BILLING_SUBSCRIPTION_GROUP_USER_BOOST_ONLY]: 2,
    [N.Hy.BILLING_SUBSCRIPTION_GROUP_USER_HAS_FRACTIONAL_NITRO]: 5,
    [N.Hy.UNKNOWN_USER]: 3,
    [N.Hy.BILLING_SUBSCRIPTION_GROUP_USER_ON_GIFT_SUBSCRIPTION]: 6,
    [N.Hy.BILLING_SUBSCRIPTION_GROUP_USER_INVALID_SUBSCRIPTION]: 7,
    [N.Hy.BILLING_SUBSCRIPTION_GROUP_USER_HAS_MOBILE_SUBSCRIPTION]: 8,
    [N.Hy.BILLING_SUBSCRIPTION_GROUP_USER_ACCOUNT_TOO_YOUNG]: 9,
    [N.Hy.BILLING_SUBSCRIPTION_GROUP_USER_HAS_INELIGIBLE_PLAN]: 10,
    [N.Hy.BILLING_SUBSCRIPTION_GROUP_INVITE_ALREADY_ACCEPTED]: 11,
    [N.Hy.BILLING_SUBSCRIPTION_GROUP_USER_ALREADY_IN_GROUP]: 12,
    [N.Hy.BILLING_SUBSCRIPTION_GROUP_USER_IS_BOT]: 13,
};
function A(e) {
    let { onClose: t, isExistingSub: a, premiumGroupPrimaryName: i, currentUser: r, ...s } = e,
        o = (0, p.TM)() ? C.A : g.A;
    return (0, n.jsx)(l.dWK, {
        ...s,
        onClose: t,
        children: (0, n.jsx)(l.cwr, {
            children: (0, n.jsxs)("div", {
                className: T.hQ,
                children: [
                    (0, n.jsx)("div", { className: T.ZB }),
                    (0, n.jsx)(l.DZT, {
                        className: T.wx,
                        variant: "display-md",
                        color: "text-strong",
                        children: R.intl.string(R.t.QWljxE),
                    }),
                    (0, n.jsxs)("div", {
                        className: T.Dz,
                        children: [
                            (0, n.jsx)(f.A, {
                                fallbackImage: E.A,
                                className: T.d9,
                                children: (0, n.jsx)("source", { src: o }),
                            }),
                            (0, n.jsx)(u.A, {
                                user: r,
                                isHighlighted: !0,
                                nameplate: null,
                                nameplateData: r.nameplate,
                                className: T.M4,
                                nameplatePreviewSize: "large",
                            }),
                        ],
                    }),
                    (0, n.jsx)("div", {
                        className: T.FS,
                        children: (0, n.jsx)(l.EYj, {
                            variant: "text-md/medium",
                            color: "text-muted",
                            children: R.intl.format(a ? O.default.axh0pl : O.default["+KAArL"], {
                                premiumGroupProductName: (0, N.DP)(),
                                primaryName: i,
                            }),
                        }),
                    }),
                    (0, n.jsx)("div", {
                        className: T.qr,
                        children: (0, n.jsx)(c.$nd, {
                            variant: "primary",
                            fullWidth: !0,
                            text: R.intl.string(O.default.EL9m2H),
                            onClick: () => {
                                t(), (0, S.pX)(U.BVt.APPLICATION_STORE);
                            },
                        }),
                    }),
                ],
            }),
        }),
    });
}
function L(e) {
    let {
            setModalState: t,
            onClose: a,
            premiumGroupSubscriptionId: r,
            premiumGroupInviteId: s,
            isExistingSub: o,
            premiumGroupPrimaryName: c,
            currentUser: u,
            setError: f,
            ...I
        } = e,
        S = (0, N.DP)(),
        [m, p] = (0, i.useState)(!1);
    (0, _.Ay)(() => {
        P.default.track(U.HAw.PREMIUM_GROUP_ACCEPT_INVITE_MODAL_VIEWED, {
            invite_id: s,
            subscription_id: r,
            is_existing_sub: o,
        });
    });
    let T = async () => {
        P.default.track(U.HAw.PREMIUM_GROUP_ACCEPT_INVITE_CTA_CLICKED, {
            invite_id: s,
            subscription_id: r,
            is_existing_sub: o,
        }),
            p(!0);
        let e = await (0, b.wc)(r, u.id, s);
        if ((p(!1), e.ok)) t(1);
        else {
            var a;
            let n = null == (a = e.body?.code) ? 0 : (x[a] ?? 0);
            P.default.track(U.HAw.PREMIUM_GROUP_ACCEPT_INVITE_ERROR, {
                invite_id: s,
                subscription_id: r,
                error_type: (function (e) {
                    switch (e) {
                        case 1:
                            return "cooldown_not_over";
                        case 2:
                            return "has_server_boosts";
                        case 3:
                            return "invite_canceled";
                        case 4:
                            return "country_restriction";
                        case 5:
                            return "has_nitro_credits";
                        case 6:
                            return "has_gift_subscription";
                        case 7:
                            return "invalid_subscription";
                        case 8:
                            return "has_mobile_subscription";
                        case 9:
                            return "account_too_young";
                        case 10:
                            return "has_ineligible_plan";
                        case 11:
                            return "invite_already_accepted";
                        case 12:
                            return "already_in_group";
                        case 13:
                            return "is_bot";
                        default:
                            return "unknown";
                    }
                })(n),
                error_code: e.body?.code,
            }),
                f(n),
                t(2);
        }
    };
    return (0, n.jsx)(l.ExpressiveModal, {
        ...I,
        onClose: a,
        gradientColor: "nitro-pink",
        badge: { type: "beta", variant: "expressive" },
        graphic: { src: h.A, type: "image" },
        title: R.intl.formatToPlainString(o ? O.default["0Yxz12"] : O.default.UjA5k8, { premiumGroupProductName: S }),
        subtitle: R.intl.format(o ? O.default.YjSsdH : O.default.qkFeBP, {
            premiumGroupProductName: S,
            cooldownMonths: N.wl,
            primaryName: c,
        }),
        actions: [
            {
                text: R.intl.string(O.default["IO+nlU"]),
                onClick: () => {
                    (0, d.A)(N.TE);
                },
                variant: "secondary",
            },
            { text: R.intl.string(O.default.odQeh3), onClick: T, variant: "expressive", icon: l.tvc, loading: m },
        ],
    });
}
function G(e) {
    let t,
        a,
        { error: i, onClose: r, ...s } = e,
        o = (0, N.DP)();
    switch (i) {
        case 1:
            (t = R.intl.formatToPlainString(O.default["wMo6/n"], { premiumGroupProductName: o })),
                (a = R.intl.formatToPlainString(O.default.C08r8L, {
                    premiumGroupProductName: o,
                    cooldownMonths: N.wl,
                }));
            break;
        case 2:
            (t = R.intl.formatToPlainString(O.default["Um4ml+"], { premiumGroupProductName: o })),
                (a = R.intl.string(O.default.Fm8iss));
            break;
        case 3:
            (t = R.intl.string(O.default.yGTLxP)),
                (a = R.intl.formatToPlainString(O.default["7/qtoL"], { premiumGroupProductName: o }));
            break;
        case 4:
            (t = R.intl.formatToPlainString(O.default["S+UfpQ"], { premiumGroupProductName: o })),
                (a = R.intl.formatToPlainString(O.default.AKYhx6, {
                    premiumGroupProductName: o,
                    countryName: (0, N.mU)(),
                }));
            break;
        case 5:
            (t = R.intl.formatToPlainString(O.default.anKEqI, { premiumGroupProductName: o })),
                (a = R.intl.formatToPlainString(O.default["67BbUf"], { premiumGroupProductName: o }));
            break;
        case 6:
            (t = R.intl.formatToPlainString(O.default.VH7zHG, { premiumGroupProductName: o })),
                (a = R.intl.string(O.default.s47Jqb));
            break;
        case 7:
            (t = R.intl.formatToPlainString(O.default.agSoQJ, { premiumGroupProductName: o })),
                (a = R.intl.formatToPlainString(O.default.YhJsq4, { premiumGroupProductName: o }));
            break;
        default:
            (t = R.intl.formatToPlainString(O.default["Kpg/uU"], { premiumGroupProductName: o })),
                (a = R.intl.formatToPlainString(O.default.GrEzlX, { premiumGroupProductName: o }));
    }
    return (0, n.jsx)(l.Modal, {
        size: "md",
        title: t,
        subtitle: a,
        onClose: r,
        actions: [
            {
                text: R.intl.string(O.default["IO+nlU"]),
                variant: "secondary",
                onClick: () => {
                    (0, d.A)(N.TE);
                },
            },
        ],
        ...s,
    });
}
function B(e) {
    let {
            premiumGroupSubscriptionId: t,
            premiumGroupInviteId: a,
            isExistingSub: r,
            premiumGroupPrimaryName: l,
            ...c
        } = e,
        [_, d] = (0, i.useState)(0),
        [u, f] = (0, i.useState)(null),
        S = (0, o.bG)([m.default], () => m.default.getCurrentUser());
    s()(null != S, "UserSettingsProfileCustomization: user cannot be undefined");
    let P = null;
    switch (_) {
        case 0:
            P = (0, n.jsx)(L, {
                setModalState: d,
                premiumGroupSubscriptionId: t,
                premiumGroupInviteId: a,
                isExistingSub: r,
                premiumGroupPrimaryName: l,
                currentUser: S,
                setError: f,
                ...c,
            });
            break;
        case 1:
            P = (0, n.jsx)(A, { ...c, isExistingSub: r, premiumGroupPrimaryName: l, currentUser: S });
            break;
        case 2:
            P = (0, n.jsx)(G, { error: u, ...c });
    }
    return (0, n.jsx)(I.A, {
        isConfirmationStep: 1 === _,
        isEligibleForWowMoment: !0,
        shouldPrefetchWowMoment: !0,
        children: P,
    });
}
