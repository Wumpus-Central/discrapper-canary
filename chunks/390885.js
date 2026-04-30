a.d(e, { default: () => v });
var i = a(627968),
    n = a(64700),
    r = a(284009),
    s = a.n(r),
    l = a(224640),
    o = a(430993),
    c = a(534514),
    d = a(834730),
    _ = a(772707),
    u = a(403581),
    I = a(189213),
    S = a(17928),
    f = a(821609),
    m = a(964486),
    P = a(975807),
    N = a(344346),
    U = a(303136),
    p = a(639289),
    O = a(976860),
    b = a(287809),
    R = a(954571),
    T = a(676279),
    g = a(751877),
    C = a(88001),
    E = a(652215),
    L = a(466919),
    G = a(985018),
    h = a(651702),
    x = a(49402);
let B = {
    [C.Hy.BILLING_SUBSCRIPTION_GROUP_USER_ON_COOLDOWN]: 1,
    [C.Hy.BILLING_SUBSCRIPTION_GROUP_USER_ACTIVE_BOOSTS]: 2,
    [C.Hy.BILLING_SUBSCRIPTION_GROUP_USER_BOOST_ONLY]: 2,
    [C.Hy.BILLING_SUBSCRIPTION_GROUP_USER_HAS_FRACTIONAL_NITRO]: 5,
    [C.Hy.UNKNOWN_USER]: 3,
    [C.Hy.BILLING_SUBSCRIPTION_GROUP_USER_ON_GIFT_SUBSCRIPTION]: 6,
    [C.Hy.BILLING_SUBSCRIPTION_GROUP_USER_INVALID_SUBSCRIPTION]: 7,
    [C.Hy.BILLING_SUBSCRIPTION_GROUP_USER_HAS_MOBILE_SUBSCRIPTION]: 8,
    [C.Hy.BILLING_SUBSCRIPTION_GROUP_USER_ACCOUNT_TOO_YOUNG]: 9,
    [C.Hy.BILLING_SUBSCRIPTION_GROUP_USER_HAS_INELIGIBLE_PLAN]: 10,
    [C.Hy.BILLING_SUBSCRIPTION_GROUP_INVITE_ALREADY_ACCEPTED]: 11,
    [C.Hy.BILLING_SUBSCRIPTION_GROUP_USER_ALREADY_IN_GROUP]: 12,
    [C.Hy.BILLING_SUBSCRIPTION_GROUP_USER_IS_BOT]: 13,
};
function A(t) {
    let { onClose: e, isExistingSub: a, premiumGroupPrimaryName: n, currentUser: r, ...s } = t,
        _ = (0, T.TM)()
            ? "https://cdn.discordapp.com/assets/content/6f1af775556f31ba3974e07284f40d22447cbda5a6bbbb8ca186194b286063e3.mov"
            : x.A;
    return (0, i.jsx)(l.d, {
        ...s,
        onClose: e,
        children: (0, i.jsx)(o.c, {
            children: (0, i.jsxs)("div", {
                className: h.hQ,
                children: [
                    (0, i.jsx)("div", { className: h.ZB }),
                    (0, i.jsx)(c.D, {
                        className: h.wx,
                        variant: "display-md",
                        color: "text-strong",
                        children: G.intl.string(G.t.QWljxE),
                    }),
                    (0, i.jsxs)("div", {
                        className: h.Dz,
                        children: [
                            (0, i.jsx)(U.A, {
                                fallbackImage:
                                    "https://cdn.discordapp.com/assets/content/b0bb3929d31ac9ae0bf431b4b92ee6c334165d518a03e286a9d664691750ad04.png",
                                className: h.d9,
                                children: (0, i.jsx)("source", { src: _ }),
                            }),
                            (0, i.jsx)(N.A, {
                                user: r,
                                isHighlighted: !0,
                                nameplate: null,
                                nameplateData: r.nameplate,
                                className: h.M4,
                                nameplatePreviewSize: "large",
                            }),
                        ],
                    }),
                    (0, i.jsx)("div", {
                        className: h.FS,
                        children: (0, i.jsx)(d.E, {
                            variant: "text-md/medium",
                            color: "text-muted",
                            children: G.intl.format(a ? L.default.axh0pl : L.default["+KAArL"], {
                                premiumGroupProductName: (0, C.DP)(),
                                primaryName: n,
                            }),
                        }),
                    }),
                    (0, i.jsx)("div", {
                        className: h.qr,
                        children: (0, i.jsx)(f.$, {
                            variant: "primary",
                            fullWidth: !0,
                            text: G.intl.string(L.default.EL9m2H),
                            onClick: () => {
                                e(), (0, O.pX)(E.BVt.APPLICATION_STORE);
                            },
                        }),
                    }),
                ],
            }),
        }),
    });
}
function y(t) {
    let {
            setModalState: e,
            onClose: a,
            premiumGroupSubscriptionId: r,
            premiumGroupInviteId: s,
            isExistingSub: l,
            premiumGroupPrimaryName: o,
            currentUser: c,
            setError: d,
            ...I
        } = t,
        S = (0, C.DP)(),
        [f, N] = (0, n.useState)(!1);
    (0, m.Ay)(() => {
        R.default.track(E.HAw.PREMIUM_GROUP_ACCEPT_INVITE_MODAL_VIEWED, {
            invite_id: s,
            subscription_id: r,
            is_existing_sub: l,
        });
    });
    let U = async () => {
        R.default.track(E.HAw.PREMIUM_GROUP_ACCEPT_INVITE_CTA_CLICKED, {
            invite_id: s,
            subscription_id: r,
            is_existing_sub: l,
        }),
            N(!0);
        let t = await (0, g.wc)(r, c.id, s);
        if ((N(!1), t.ok)) e(1);
        else {
            var a;
            let i = null == (a = t.body?.code) ? 0 : (B[a] ?? 0);
            R.default.track(E.HAw.PREMIUM_GROUP_ACCEPT_INVITE_ERROR, {
                invite_id: s,
                subscription_id: r,
                error_type: (function (t) {
                    switch (t) {
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
                error_code: t.body?.code,
            }),
                d(i),
                e(2);
        }
    };
    return (0, i.jsx)(_.k, {
        ...I,
        onClose: a,
        gradientColor: "nitro-pink",
        badge: { type: "beta", variant: "expressive" },
        graphic: {
            src: "https://cdn.discordapp.com/assets/content/e73f685093cfc29d516c588ba27f23a1e03e9dbe02edcbe92a7ac79170c1931d.png",
            type: "image",
        },
        title: G.intl.formatToPlainString(l ? L.default["0Yxz12"] : L.default.UjA5k8, { premiumGroupProductName: S }),
        subtitle: G.intl.format(l ? L.default.YjSsdH : L.default.qkFeBP, {
            premiumGroupProductName: S,
            cooldownMonths: C.wl,
            primaryName: o,
        }),
        actions: [
            {
                text: G.intl.string(L.default["IO+nlU"]),
                onClick: () => {
                    (0, P.A)(C.TE);
                },
                variant: "secondary",
            },
            { text: G.intl.string(L.default.odQeh3), onClick: U, variant: "expressive", icon: u.t, loading: f },
        ],
    });
}
function k(t) {
    let e,
        a,
        { error: n, onClose: r, ...s } = t,
        l = (0, C.DP)();
    switch (n) {
        case 1:
            (e = G.intl.formatToPlainString(L.default["wMo6/n"], { premiumGroupProductName: l })),
                (a = G.intl.formatToPlainString(L.default.C08r8L, {
                    premiumGroupProductName: l,
                    cooldownMonths: C.wl,
                }));
            break;
        case 2:
            (e = G.intl.formatToPlainString(L.default["Um4ml+"], { premiumGroupProductName: l })),
                (a = G.intl.string(L.default.Fm8iss));
            break;
        case 3:
            (e = G.intl.string(L.default.yGTLxP)),
                (a = G.intl.formatToPlainString(L.default["7/qtoL"], { premiumGroupProductName: l }));
            break;
        case 4:
            (e = G.intl.formatToPlainString(L.default["S+UfpQ"], { premiumGroupProductName: l })),
                (a = G.intl.formatToPlainString(L.default.AKYhx6, {
                    premiumGroupProductName: l,
                    countryName: (0, C.mU)(),
                }));
            break;
        case 5:
            (e = G.intl.formatToPlainString(L.default.anKEqI, { premiumGroupProductName: l })),
                (a = G.intl.formatToPlainString(L.default["67BbUf"], { premiumGroupProductName: l }));
            break;
        case 6:
            (e = G.intl.formatToPlainString(L.default.VH7zHG, { premiumGroupProductName: l })),
                (a = G.intl.string(L.default.s47Jqb));
            break;
        case 7:
            (e = G.intl.formatToPlainString(L.default.agSoQJ, { premiumGroupProductName: l })),
                (a = G.intl.formatToPlainString(L.default.YhJsq4, { premiumGroupProductName: l }));
            break;
        default:
            (e = G.intl.formatToPlainString(L.default["Kpg/uU"], { premiumGroupProductName: l })),
                (a = G.intl.formatToPlainString(L.default.GrEzlX, { premiumGroupProductName: l }));
    }
    return (0, i.jsx)(I.Modal, {
        size: "md",
        title: e,
        subtitle: a,
        onClose: r,
        actions: [
            {
                text: G.intl.string(L.default["IO+nlU"]),
                variant: "secondary",
                onClick: () => {
                    (0, P.A)(C.TE);
                },
            },
        ],
        ...s,
    });
}
function v(t) {
    let {
            premiumGroupSubscriptionId: e,
            premiumGroupInviteId: a,
            isExistingSub: r,
            premiumGroupPrimaryName: l,
            ...o
        } = t,
        [c, d] = (0, n.useState)(0),
        [_, u] = (0, n.useState)(null),
        I = (0, S.bG)([b.default], () => b.default.getCurrentUser());
    s()(null != I, "UserSettingsProfileCustomization: user cannot be undefined");
    let f = null;
    switch (c) {
        case 0:
            f = (0, i.jsx)(y, {
                setModalState: d,
                premiumGroupSubscriptionId: e,
                premiumGroupInviteId: a,
                isExistingSub: r,
                premiumGroupPrimaryName: l,
                currentUser: I,
                setError: u,
                ...o,
            });
            break;
        case 1:
            f = (0, i.jsx)(A, { ...o, isExistingSub: r, premiumGroupPrimaryName: l, currentUser: I });
            break;
        case 2:
            f = (0, i.jsx)(k, { error: _, ...o });
    }
    return (0, i.jsx)(p.A, {
        isConfirmationStep: 1 === c,
        isEligibleForWowMoment: !0,
        shouldPrefetchWowMoment: !0,
        children: f,
    });
}
