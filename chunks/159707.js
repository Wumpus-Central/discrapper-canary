a.d(e, { default: () => y });
var i = a(627968),
    n = a(64700),
    r = a(284009),
    s = a.n(r),
    l = a(158954),
    o = a(311907),
    d = a(732955),
    c = a(964486),
    u = a(975807),
    f = a(775602),
    _ = a(607470),
    m = a(550111),
    p = a(639289),
    b = a(976860),
    S = a(287809),
    I = a(954571),
    P = a(676279),
    g = a(677185),
    x = a(88001),
    N = a(652215),
    T = a(519412),
    h = a(985018),
    U = a(329491),
    C = a(42085),
    O = a(49402),
    A = a(27753),
    E = a(136300);
let R = {
    [x.Hy.BILLING_SUBSCRIPTION_GROUP_USER_ON_COOLDOWN]: 1,
    [x.Hy.BILLING_SUBSCRIPTION_GROUP_USER_ACTIVE_BOOSTS]: 2,
    [x.Hy.BILLING_SUBSCRIPTION_GROUP_USER_BOOST_ONLY]: 2,
    [x.Hy.BILLING_SUBSCRIPTION_GROUP_USER_HAS_FRACTIONAL_NITRO]: 5,
    [x.Hy.UNKNOWN_USER]: 3,
    [x.Hy.BILLING_SUBSCRIPTION_GROUP_USER_ON_GIFT_SUBSCRIPTION]: 6,
    [x.Hy.BILLING_SUBSCRIPTION_GROUP_USER_INVALID_SUBSCRIPTION]: 7,
};
function v(t) {
    let { onClose: e, isExistingSub: a, premiumGroupPrimaryName: n, currentUser: r, ...s } = t,
        c = (0, o.bG)([f.A], () => f.A.useReducedMotion),
        u = (0, P.TM)() ? C.A : O.A;
    return (0, i.jsx)(l.dWK, {
        ...s,
        onClose: e,
        children: (0, i.jsx)(l.cwr, {
            children: (0, i.jsxs)("div", {
                className: U.hQ,
                children: [
                    (0, i.jsx)("div", { className: U.ZB }),
                    (0, i.jsx)(l.DZT, {
                        className: U.wx,
                        variant: "display-md",
                        color: "text-strong",
                        children: h.intl.string(h.t.QWljxE),
                    }),
                    (0, i.jsxs)("div", {
                        className: U.Dz,
                        children: [
                            c
                                ? (0, i.jsx)("img", { src: A.A, alt: "", className: U.d9 })
                                : (0, i.jsx)(_.A, {
                                      playsInline: !0,
                                      muted: !0,
                                      autoPlay: !0,
                                      loop: !0,
                                      className: U.d9,
                                      children: (0, i.jsx)("source", { src: u }),
                                  }),
                            (0, i.jsx)(m.A, {
                                user: r,
                                isHighlighted: !0,
                                nameplate: null,
                                nameplateData: r.nameplate,
                                className: U.M4,
                                nameplatePreviewSize: "large",
                            }),
                        ],
                    }),
                    (0, i.jsx)("div", {
                        className: U.FS,
                        children: (0, i.jsx)(l.EYj, {
                            variant: "text-md/medium",
                            color: "text-muted",
                            children: h.intl.format(a ? T.default.axh0pl : T.default["+KAArL"], {
                                premiumGroupProductName: (0, x.DP)(),
                                primaryName: n,
                            }),
                        }),
                    }),
                    (0, i.jsx)("div", {
                        className: U.qr,
                        children: (0, i.jsx)(d.$nd, {
                            variant: "primary",
                            fullWidth: !0,
                            text: h.intl.string(T.default.EL9m2H),
                            onClick: () => {
                                e(), (0, b.pX)(N.BVt.APPLICATION_STORE);
                            },
                        }),
                    }),
                ],
            }),
        }),
    });
}
function w(t) {
    let {
            setModalState: e,
            onClose: a,
            premiumGroupSubscriptionId: r,
            premiumGroupInviteId: s,
            isExistingSub: o,
            premiumGroupPrimaryName: d,
            currentUser: f,
            setError: _,
            ...m
        } = t,
        p = (0, x.DP)(),
        [b, S] = (0, n.useState)(!1);
    (0, c.Ay)(() => {
        I.default.track(N.HAw.PREMIUM_GROUP_ACCEPT_INVITE_MODAL_VIEWED, {
            invite_id: s,
            subscription_id: r,
            is_existing_sub: o,
        });
    });
    let P = async () => {
        I.default.track(N.HAw.PREMIUM_GROUP_ACCEPT_INVITE_CTA_CLICKED, {
            invite_id: s,
            subscription_id: r,
            is_existing_sub: o,
        }),
            S(!0);
        let t = await (0, g.wc)(r, f.id, s);
        if ((S(!1), t.ok)) e(1);
        else {
            var a;
            let i = null == (a = t.body?.code) ? 0 : (R[a] ?? 0);
            I.default.track(N.HAw.PREMIUM_GROUP_ACCEPT_INVITE_ERROR, {
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
                        default:
                            return "unknown";
                    }
                })(i),
            }),
                _(i),
                e(2);
        }
    };
    return (0, i.jsx)(l.ExpressiveModal, {
        ...m,
        onClose: a,
        gradientColor: "nitro-pink",
        badge: { type: "beta", variant: "expressive" },
        graphic: { src: E.A, type: "image" },
        title: h.intl.formatToPlainString(o ? T.default["0Yxz12"] : T.default.UjA5k8, { premiumGroupProductName: p }),
        subtitle: h.intl.format(o ? T.default.YjSsdH : T.default.qkFeBP, {
            premiumGroupProductName: p,
            cooldownMonths: x.wl,
            primaryName: d,
        }),
        actions: [
            {
                text: h.intl.string(T.default["IO+nlU"]),
                onClick: () => {
                    (0, u.A)(x.TE);
                },
                variant: "secondary",
            },
            { text: h.intl.string(T.default.odQeh3), onClick: P, variant: "expressive", icon: l.tvc, loading: b },
        ],
    });
}
function G(t) {
    let e,
        a,
        { error: n, onClose: r, ...s } = t,
        o = (0, x.DP)();
    switch (n) {
        case 1:
            (e = h.intl.formatToPlainString(T.default["wMo6/n"], { premiumGroupProductName: o })),
                (a = h.intl.formatToPlainString(T.default.C08r8L, {
                    premiumGroupProductName: o,
                    cooldownMonths: x.wl,
                }));
            break;
        case 2:
            (e = h.intl.formatToPlainString(T.default["Um4ml+"], { premiumGroupProductName: o })),
                (a = h.intl.string(T.default.Fm8iss));
            break;
        case 3:
            (e = h.intl.string(T.default.yGTLxP)),
                (a = h.intl.formatToPlainString(T.default["7/qtoL"], { premiumGroupProductName: o }));
            break;
        case 4:
            (e = h.intl.formatToPlainString(T.default["S+UfpQ"], { premiumGroupProductName: o })),
                (a = h.intl.formatToPlainString(T.default.AKYhx6, {
                    premiumGroupProductName: o,
                    countryName: (0, x.mU)(),
                }));
            break;
        case 5:
            (e = h.intl.formatToPlainString(T.default.anKEqI, { premiumGroupProductName: o })),
                (a = h.intl.formatToPlainString(T.default["67BbUf"], { premiumGroupProductName: o }));
            break;
        case 6:
            (e = h.intl.formatToPlainString(T.default.VH7zHG, { premiumGroupProductName: o })),
                (a = h.intl.string(T.default.s47Jqb));
            break;
        case 7:
            (e = h.intl.formatToPlainString(T.default.agSoQJ, { premiumGroupProductName: o })),
                (a = h.intl.formatToPlainString(T.default.YhJsq4, { premiumGroupProductName: o }));
            break;
        default:
            (e = h.intl.formatToPlainString(T.default["Kpg/uU"], { premiumGroupProductName: o })),
                (a = h.intl.formatToPlainString(T.default.GrEzlX, { premiumGroupProductName: o }));
    }
    return (0, i.jsx)(l.Modal, {
        size: "md",
        title: e,
        subtitle: a,
        onClose: r,
        actions: [
            {
                text: h.intl.string(T.default["IO+nlU"]),
                variant: "secondary",
                onClick: () => {
                    (0, u.A)(x.TE);
                },
            },
        ],
        ...s,
    });
}
function y(t) {
    let {
            premiumGroupSubscriptionId: e,
            premiumGroupInviteId: a,
            isExistingSub: r,
            premiumGroupPrimaryName: l,
            ...d
        } = t,
        [c, u] = (0, n.useState)(0),
        [f, _] = (0, n.useState)(null),
        m = (0, o.bG)([S.default], () => S.default.getCurrentUser());
    s()(null != m, "UserSettingsProfileCustomization: user cannot be undefined");
    let b = null;
    switch (c) {
        case 0:
            b = (0, i.jsx)(w, {
                setModalState: u,
                premiumGroupSubscriptionId: e,
                premiumGroupInviteId: a,
                isExistingSub: r,
                premiumGroupPrimaryName: l,
                currentUser: m,
                setError: _,
                ...d,
            });
            break;
        case 1:
            b = (0, i.jsx)(v, { ...d, isExistingSub: r, premiumGroupPrimaryName: l, currentUser: m });
            break;
        case 2:
            b = (0, i.jsx)(G, { error: f, ...d });
    }
    return (0, i.jsx)(p.A, {
        isConfirmationStep: 1 === c,
        isEligibleForWowMoment: !0,
        shouldPrefetchWowMoment: !0,
        children: b,
    });
}
