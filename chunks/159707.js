a.d(t, { default: () => y });
var n = a(627968),
    i = a(64700),
    r = a(284009),
    s = a.n(r),
    l = a(158954),
    o = a(311907),
    c = a(732955),
    d = a(964486),
    _ = a(975807),
    u = a(775602),
    f = a(607470),
    I = a(550111),
    m = a(639289),
    S = a(976860),
    p = a(287809),
    P = a(954571),
    b = a(676279),
    N = a(677185),
    U = a(88001),
    O = a(652215),
    R = a(519412),
    T = a(985018),
    C = a(329491),
    g = a(42085),
    E = a(49402),
    A = a(27753),
    x = a(136300);
let h = {
    [U.Hy.BILLING_SUBSCRIPTION_GROUP_USER_ON_COOLDOWN]: 1,
    [U.Hy.BILLING_SUBSCRIPTION_GROUP_USER_ACTIVE_BOOSTS]: 2,
    [U.Hy.BILLING_SUBSCRIPTION_GROUP_USER_BOOST_ONLY]: 2,
    [U.Hy.BILLING_SUBSCRIPTION_GROUP_USER_HAS_FRACTIONAL_NITRO]: 5,
    [U.Hy.UNKNOWN_USER]: 3,
    [U.Hy.BILLING_SUBSCRIPTION_GROUP_USER_ON_GIFT_SUBSCRIPTION]: 6,
    [U.Hy.BILLING_SUBSCRIPTION_GROUP_USER_INVALID_SUBSCRIPTION]: 7,
    [U.Hy.BILLING_SUBSCRIPTION_GROUP_USER_HAS_MOBILE_SUBSCRIPTION]: 8,
    [U.Hy.BILLING_SUBSCRIPTION_GROUP_USER_ACCOUNT_TOO_YOUNG]: 9,
    [U.Hy.BILLING_SUBSCRIPTION_GROUP_USER_HAS_INELIGIBLE_PLAN]: 10,
    [U.Hy.BILLING_SUBSCRIPTION_GROUP_INVITE_ALREADY_ACCEPTED]: 11,
    [U.Hy.BILLING_SUBSCRIPTION_GROUP_USER_ALREADY_IN_GROUP]: 12,
    [U.Hy.BILLING_SUBSCRIPTION_GROUP_USER_IS_BOT]: 13,
};
function G(e) {
    let { onClose: t, isExistingSub: a, premiumGroupPrimaryName: i, currentUser: r, ...s } = e,
        d = (0, o.bG)([u.A], () => u.A.useReducedMotion),
        _ = (0, b.TM)() ? g.A : E.A;
    return (0, n.jsx)(l.dWK, {
        ...s,
        onClose: t,
        children: (0, n.jsx)(l.cwr, {
            children: (0, n.jsxs)("div", {
                className: C.hQ,
                children: [
                    (0, n.jsx)("div", { className: C.ZB }),
                    (0, n.jsx)(l.DZT, {
                        className: C.wx,
                        variant: "display-md",
                        color: "text-strong",
                        children: T.intl.string(T.t.QWljxE),
                    }),
                    (0, n.jsxs)("div", {
                        className: C.Dz,
                        children: [
                            d
                                ? (0, n.jsx)("img", { src: A.A, alt: "", className: C.d9 })
                                : (0, n.jsx)(f.A, {
                                      playsInline: !0,
                                      muted: !0,
                                      autoPlay: !0,
                                      loop: !0,
                                      className: C.d9,
                                      children: (0, n.jsx)("source", { src: _ }),
                                  }),
                            (0, n.jsx)(I.A, {
                                user: r,
                                isHighlighted: !0,
                                nameplate: null,
                                nameplateData: r.nameplate,
                                className: C.M4,
                                nameplatePreviewSize: "large",
                            }),
                        ],
                    }),
                    (0, n.jsx)("div", {
                        className: C.FS,
                        children: (0, n.jsx)(l.EYj, {
                            variant: "text-md/medium",
                            color: "text-muted",
                            children: T.intl.format(a ? R.default.axh0pl : R.default["+KAArL"], {
                                premiumGroupProductName: (0, U.DP)(),
                                primaryName: i,
                            }),
                        }),
                    }),
                    (0, n.jsx)("div", {
                        className: C.qr,
                        children: (0, n.jsx)(c.$nd, {
                            variant: "primary",
                            fullWidth: !0,
                            text: T.intl.string(R.default.EL9m2H),
                            onClick: () => {
                                t(), (0, S.pX)(O.BVt.APPLICATION_STORE);
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
        m = (0, U.DP)(),
        [S, p] = (0, i.useState)(!1);
    (0, d.Ay)(() => {
        P.default.track(O.HAw.PREMIUM_GROUP_ACCEPT_INVITE_MODAL_VIEWED, {
            invite_id: s,
            subscription_id: r,
            is_existing_sub: o,
        });
    });
    let b = async () => {
        P.default.track(O.HAw.PREMIUM_GROUP_ACCEPT_INVITE_CTA_CLICKED, {
            invite_id: s,
            subscription_id: r,
            is_existing_sub: o,
        }),
            p(!0);
        let e = await (0, N.wc)(r, u.id, s);
        if ((p(!1), e.ok)) t(1);
        else {
            var a;
            let n = null == (a = e.body?.code) ? 0 : (h[a] ?? 0);
            P.default.track(O.HAw.PREMIUM_GROUP_ACCEPT_INVITE_ERROR, {
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
        graphic: { src: x.A, type: "image" },
        title: T.intl.formatToPlainString(o ? R.default["0Yxz12"] : R.default.UjA5k8, { premiumGroupProductName: m }),
        subtitle: T.intl.format(o ? R.default.YjSsdH : R.default.qkFeBP, {
            premiumGroupProductName: m,
            cooldownMonths: U.wl,
            primaryName: c,
        }),
        actions: [
            {
                text: T.intl.string(R.default["IO+nlU"]),
                onClick: () => {
                    (0, _.A)(U.TE);
                },
                variant: "secondary",
            },
            { text: T.intl.string(R.default.odQeh3), onClick: b, variant: "expressive", icon: l.tvc, loading: S },
        ],
    });
}
function B(e) {
    let t,
        a,
        { error: i, onClose: r, ...s } = e,
        o = (0, U.DP)();
    switch (i) {
        case 1:
            (t = T.intl.formatToPlainString(R.default["wMo6/n"], { premiumGroupProductName: o })),
                (a = T.intl.formatToPlainString(R.default.C08r8L, {
                    premiumGroupProductName: o,
                    cooldownMonths: U.wl,
                }));
            break;
        case 2:
            (t = T.intl.formatToPlainString(R.default["Um4ml+"], { premiumGroupProductName: o })),
                (a = T.intl.string(R.default.Fm8iss));
            break;
        case 3:
            (t = T.intl.string(R.default.yGTLxP)),
                (a = T.intl.formatToPlainString(R.default["7/qtoL"], { premiumGroupProductName: o }));
            break;
        case 4:
            (t = T.intl.formatToPlainString(R.default["S+UfpQ"], { premiumGroupProductName: o })),
                (a = T.intl.formatToPlainString(R.default.AKYhx6, {
                    premiumGroupProductName: o,
                    countryName: (0, U.mU)(),
                }));
            break;
        case 5:
            (t = T.intl.formatToPlainString(R.default.anKEqI, { premiumGroupProductName: o })),
                (a = T.intl.formatToPlainString(R.default["67BbUf"], { premiumGroupProductName: o }));
            break;
        case 6:
            (t = T.intl.formatToPlainString(R.default.VH7zHG, { premiumGroupProductName: o })),
                (a = T.intl.string(R.default.s47Jqb));
            break;
        case 7:
            (t = T.intl.formatToPlainString(R.default.agSoQJ, { premiumGroupProductName: o })),
                (a = T.intl.formatToPlainString(R.default.YhJsq4, { premiumGroupProductName: o }));
            break;
        default:
            (t = T.intl.formatToPlainString(R.default["Kpg/uU"], { premiumGroupProductName: o })),
                (a = T.intl.formatToPlainString(R.default.GrEzlX, { premiumGroupProductName: o }));
    }
    return (0, n.jsx)(l.Modal, {
        size: "md",
        title: t,
        subtitle: a,
        onClose: r,
        actions: [
            {
                text: T.intl.string(R.default["IO+nlU"]),
                variant: "secondary",
                onClick: () => {
                    (0, _.A)(U.TE);
                },
            },
        ],
        ...s,
    });
}
function y(e) {
    let {
            premiumGroupSubscriptionId: t,
            premiumGroupInviteId: a,
            isExistingSub: r,
            premiumGroupPrimaryName: l,
            ...c
        } = e,
        [d, _] = (0, i.useState)(0),
        [u, f] = (0, i.useState)(null),
        I = (0, o.bG)([p.default], () => p.default.getCurrentUser());
    s()(null != I, "UserSettingsProfileCustomization: user cannot be undefined");
    let S = null;
    switch (d) {
        case 0:
            S = (0, n.jsx)(L, {
                setModalState: _,
                premiumGroupSubscriptionId: t,
                premiumGroupInviteId: a,
                isExistingSub: r,
                premiumGroupPrimaryName: l,
                currentUser: I,
                setError: f,
                ...c,
            });
            break;
        case 1:
            S = (0, n.jsx)(G, { ...c, isExistingSub: r, premiumGroupPrimaryName: l, currentUser: I });
            break;
        case 2:
            S = (0, n.jsx)(B, { error: u, ...c });
    }
    return (0, n.jsx)(m.A, {
        isConfirmationStep: 1 === d,
        isEligibleForWowMoment: !0,
        shouldPrefetchWowMoment: !0,
        children: S,
    });
}
