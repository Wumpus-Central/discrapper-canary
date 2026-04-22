t.d(a, { default: () => w });
var i = t(627968),
    r = t(64700),
    n = t(284009),
    l = t.n(n),
    s = t(224640),
    o = t(430993),
    c = t(534514),
    d = t(834730),
    _ = t(772707),
    u = t(403581),
    m = t(189213),
    f = t(311907),
    I = t(821609),
    S = t(964486),
    b = t(975807),
    p = t(512213),
    N = t(303136),
    P = t(639289),
    g = t(976860),
    x = t(287809),
    U = t(954571),
    A = t(676279),
    O = t(677185),
    h = t(88001),
    E = t(652215),
    R = t(963458),
    C = t(985018),
    T = t(86582),
    v = t(42085),
    y = t(49402),
    G = t(27753),
    L = t(136300);
let B = {
    [h.Hy.BILLING_SUBSCRIPTION_GROUP_USER_ON_COOLDOWN]: 1,
    [h.Hy.BILLING_SUBSCRIPTION_GROUP_USER_ACTIVE_BOOSTS]: 2,
    [h.Hy.BILLING_SUBSCRIPTION_GROUP_USER_BOOST_ONLY]: 2,
    [h.Hy.BILLING_SUBSCRIPTION_GROUP_USER_HAS_FRACTIONAL_NITRO]: 5,
    [h.Hy.UNKNOWN_USER]: 3,
    [h.Hy.BILLING_SUBSCRIPTION_GROUP_USER_ON_GIFT_SUBSCRIPTION]: 6,
    [h.Hy.BILLING_SUBSCRIPTION_GROUP_USER_INVALID_SUBSCRIPTION]: 7,
    [h.Hy.BILLING_SUBSCRIPTION_GROUP_USER_HAS_MOBILE_SUBSCRIPTION]: 8,
    [h.Hy.BILLING_SUBSCRIPTION_GROUP_USER_ACCOUNT_TOO_YOUNG]: 9,
    [h.Hy.BILLING_SUBSCRIPTION_GROUP_USER_HAS_INELIGIBLE_PLAN]: 10,
    [h.Hy.BILLING_SUBSCRIPTION_GROUP_INVITE_ALREADY_ACCEPTED]: 11,
    [h.Hy.BILLING_SUBSCRIPTION_GROUP_USER_ALREADY_IN_GROUP]: 12,
    [h.Hy.BILLING_SUBSCRIPTION_GROUP_USER_IS_BOT]: 13,
};
function j(e) {
    let { onClose: a, isExistingSub: t, premiumGroupPrimaryName: r, currentUser: n, ...l } = e,
        _ = (0, A.TM)() ? v.A : y.A;
    return (0, i.jsx)(s.d, {
        ...l,
        onClose: a,
        children: (0, i.jsx)(o.c, {
            children: (0, i.jsxs)("div", {
                className: T.hQ,
                children: [
                    (0, i.jsx)("div", { className: T.ZB }),
                    (0, i.jsx)(c.D, {
                        className: T.wx,
                        variant: "display-md",
                        color: "text-strong",
                        children: C.intl.string(C.t.QWljxE),
                    }),
                    (0, i.jsxs)("div", {
                        className: T.Dz,
                        children: [
                            (0, i.jsx)(N.A, {
                                fallbackImage: G.A,
                                className: T.d9,
                                children: (0, i.jsx)("source", { src: _ }),
                            }),
                            (0, i.jsx)(p.A, {
                                user: n,
                                isHighlighted: !0,
                                nameplate: null,
                                nameplateData: n.nameplate,
                                className: T.M4,
                                nameplatePreviewSize: "large",
                            }),
                        ],
                    }),
                    (0, i.jsx)("div", {
                        className: T.FS,
                        children: (0, i.jsx)(d.E, {
                            variant: "text-md/medium",
                            color: "text-muted",
                            children: C.intl.format(t ? R.default.axh0pl : R.default["+KAArL"], {
                                premiumGroupProductName: (0, h.DP)(),
                                primaryName: r,
                            }),
                        }),
                    }),
                    (0, i.jsx)("div", {
                        className: T.qr,
                        children: (0, i.jsx)(I.$, {
                            variant: "primary",
                            fullWidth: !0,
                            text: C.intl.string(R.default.EL9m2H),
                            onClick: () => {
                                a(), (0, g.pX)(E.BVt.APPLICATION_STORE);
                            },
                        }),
                    }),
                ],
            }),
        }),
    });
}
function M(e) {
    let {
            setModalState: a,
            onClose: t,
            premiumGroupSubscriptionId: n,
            premiumGroupInviteId: l,
            isExistingSub: s,
            premiumGroupPrimaryName: o,
            currentUser: c,
            setError: d,
            ...m
        } = e,
        f = (0, h.DP)(),
        [I, p] = (0, r.useState)(!1);
    (0, S.Ay)(() => {
        U.default.track(E.HAw.PREMIUM_GROUP_ACCEPT_INVITE_MODAL_VIEWED, {
            invite_id: l,
            subscription_id: n,
            is_existing_sub: s,
        });
    });
    let N = async () => {
        U.default.track(E.HAw.PREMIUM_GROUP_ACCEPT_INVITE_CTA_CLICKED, {
            invite_id: l,
            subscription_id: n,
            is_existing_sub: s,
        }),
            p(!0);
        let e = await (0, O.wc)(n, c.id, l);
        if ((p(!1), e.ok)) a(1);
        else {
            var t;
            let i = null == (t = e.body?.code) ? 0 : (B[t] ?? 0);
            U.default.track(E.HAw.PREMIUM_GROUP_ACCEPT_INVITE_ERROR, {
                invite_id: l,
                subscription_id: n,
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
                })(i),
                error_code: e.body?.code,
            }),
                d(i),
                a(2);
        }
    };
    return (0, i.jsx)(_.k, {
        ...m,
        onClose: t,
        gradientColor: "nitro-pink",
        badge: { type: "beta", variant: "expressive" },
        graphic: { src: L.A, type: "image" },
        title: C.intl.formatToPlainString(s ? R.default["0Yxz12"] : R.default.UjA5k8, { premiumGroupProductName: f }),
        subtitle: C.intl.format(s ? R.default.YjSsdH : R.default.qkFeBP, {
            premiumGroupProductName: f,
            cooldownMonths: h.wl,
            primaryName: o,
        }),
        actions: [
            {
                text: C.intl.string(R.default["IO+nlU"]),
                onClick: () => {
                    (0, b.A)(h.TE);
                },
                variant: "secondary",
            },
            { text: C.intl.string(R.default.odQeh3), onClick: N, variant: "expressive", icon: u.t, loading: I },
        ],
    });
}
function k(e) {
    let a,
        t,
        { error: r, onClose: n, ...l } = e,
        s = (0, h.DP)();
    switch (r) {
        case 1:
            (a = C.intl.formatToPlainString(R.default["wMo6/n"], { premiumGroupProductName: s })),
                (t = C.intl.formatToPlainString(R.default.C08r8L, {
                    premiumGroupProductName: s,
                    cooldownMonths: h.wl,
                }));
            break;
        case 2:
            (a = C.intl.formatToPlainString(R.default["Um4ml+"], { premiumGroupProductName: s })),
                (t = C.intl.string(R.default.Fm8iss));
            break;
        case 3:
            (a = C.intl.string(R.default.yGTLxP)),
                (t = C.intl.formatToPlainString(R.default["7/qtoL"], { premiumGroupProductName: s }));
            break;
        case 4:
            (a = C.intl.formatToPlainString(R.default["S+UfpQ"], { premiumGroupProductName: s })),
                (t = C.intl.formatToPlainString(R.default.AKYhx6, {
                    premiumGroupProductName: s,
                    countryName: (0, h.mU)(),
                }));
            break;
        case 5:
            (a = C.intl.formatToPlainString(R.default.anKEqI, { premiumGroupProductName: s })),
                (t = C.intl.formatToPlainString(R.default["67BbUf"], { premiumGroupProductName: s }));
            break;
        case 6:
            (a = C.intl.formatToPlainString(R.default.VH7zHG, { premiumGroupProductName: s })),
                (t = C.intl.string(R.default.s47Jqb));
            break;
        case 7:
            (a = C.intl.formatToPlainString(R.default.agSoQJ, { premiumGroupProductName: s })),
                (t = C.intl.formatToPlainString(R.default.YhJsq4, { premiumGroupProductName: s }));
            break;
        default:
            (a = C.intl.formatToPlainString(R.default["Kpg/uU"], { premiumGroupProductName: s })),
                (t = C.intl.formatToPlainString(R.default.GrEzlX, { premiumGroupProductName: s }));
    }
    return (0, i.jsx)(m.Modal, {
        size: "md",
        title: a,
        subtitle: t,
        onClose: n,
        actions: [
            {
                text: C.intl.string(R.default["IO+nlU"]),
                variant: "secondary",
                onClick: () => {
                    (0, b.A)(h.TE);
                },
            },
        ],
        ...l,
    });
}
function w(e) {
    let {
            premiumGroupSubscriptionId: a,
            premiumGroupInviteId: t,
            isExistingSub: n,
            premiumGroupPrimaryName: s,
            ...o
        } = e,
        [c, d] = (0, r.useState)(0),
        [_, u] = (0, r.useState)(null),
        m = (0, f.bG)([x.default], () => x.default.getCurrentUser());
    l()(null != m, "UserSettingsProfileCustomization: user cannot be undefined");
    let I = null;
    switch (c) {
        case 0:
            I = (0, i.jsx)(M, {
                setModalState: d,
                premiumGroupSubscriptionId: a,
                premiumGroupInviteId: t,
                isExistingSub: n,
                premiumGroupPrimaryName: s,
                currentUser: m,
                setError: u,
                ...o,
            });
            break;
        case 1:
            I = (0, i.jsx)(j, { ...o, isExistingSub: n, premiumGroupPrimaryName: s, currentUser: m });
            break;
        case 2:
            I = (0, i.jsx)(k, { error: _, ...o });
    }
    return (0, i.jsx)(P.A, {
        isConfirmationStep: 1 === c,
        isEligibleForWowMoment: !0,
        shouldPrefetchWowMoment: !0,
        children: I,
    });
}
