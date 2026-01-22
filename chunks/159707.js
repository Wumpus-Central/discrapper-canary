r.d(t, { default: () => L }), r(896048);
var n = r(627968),
    i = r(64700),
    a = r(284009),
    s = r.n(a),
    o = r(158954),
    l = r(311907),
    c = r(732955),
    u = r(964486),
    d = r(975807),
    f = r(775602),
    p = r(607470),
    m = r(550111),
    b = r(639289),
    _ = r(976860),
    O = r(287809),
    S = r(954571),
    P = r(676279),
    g = r(677185),
    I = r(88001),
    y = r(652215),
    x = r(519412),
    N = r(985018),
    h = r(329491),
    j = r(42085),
    E = r(49402),
    T = r(27753),
    U = r(136300);
function v(e) {
    for (var t = 1; t < arguments.length; t++) {
        var r = null != arguments[t] ? arguments[t] : {},
            n = Object.keys(r);
        "function" == typeof Object.getOwnPropertySymbols &&
            (n = n.concat(
                Object.getOwnPropertySymbols(r).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(r, e).enumerable;
                }),
            )),
            n.forEach(function (t) {
                var n;
                (n = r[t]),
                    t in e
                        ? Object.defineProperty(e, t, {
                              value: n,
                              enumerable: !0,
                              configurable: !0,
                              writable: !0,
                          })
                        : (e[t] = n);
            });
    }
    return e;
}
function w(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : (function (e, t) {
                  var r = Object.keys(e);
                  if (Object.getOwnPropertySymbols) {
                      var n = Object.getOwnPropertySymbols(e);
                      r.push.apply(r, n);
                  }
                  return r;
              })(Object(t)).forEach(function (r) {
                  Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r));
              }),
        e
    );
}
function C(e, t) {
    if (null == e) return {};
    var r,
        n,
        i,
        a = {};
    if ("u" > typeof Reflect && Reflect.ownKeys) {
        for (i = 0, r = Reflect.ownKeys(e); i < r.length; i++)
            (n = r[i]), !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (a[n] = e[n]);
        return a;
    }
    if (
        ((a = (function (e, t) {
            if (null == e) return {};
            var r,
                n,
                i = {},
                a = Object.getOwnPropertyNames(e);
            for (n = 0; n < a.length; n++)
                (r = a[n]), !(t.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(e, r) && (i[r] = e[r]);
            return i;
        })(e, t)),
        Object.getOwnPropertySymbols)
    )
        for (i = 0, r = Object.getOwnPropertySymbols(e); i < r.length; i++)
            (n = r[i]), !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (a[n] = e[n]);
    return a;
}
let R = {
    [I.Hy.BILLING_SUBSCRIPTION_GROUP_USER_ON_COOLDOWN]: 1,
    [I.Hy.BILLING_SUBSCRIPTION_GROUP_USER_ACTIVE_BOOSTS]: 2,
    [I.Hy.BILLING_SUBSCRIPTION_GROUP_USER_BOOST_ONLY]: 2,
    [I.Hy.BILLING_SUBSCRIPTION_GROUP_USER_HAS_FRACTIONAL_NITRO]: 5,
    [I.Hy.UNKNOWN_USER]: 3,
    [I.Hy.BILLING_SUBSCRIPTION_GROUP_USER_ON_GIFT_SUBSCRIPTION]: 6,
    [I.Hy.BILLING_SUBSCRIPTION_GROUP_USER_INVALID_SUBSCRIPTION]: 7,
};
function A(e) {
    let { onClose: t, isExistingSub: r, premiumGroupPrimaryName: i, currentUser: a } = e,
        s = C(e, ["onClose", "isExistingSub", "premiumGroupPrimaryName", "currentUser"]),
        u = (0, l.bG)([f.A], () => f.A.useReducedMotion),
        d = (0, P.TM)() ? j.A : E.A;
    return (0, n.jsx)(
        o.dWK,
        w(v({}, s), {
            onClose: t,
            children: (0, n.jsx)(o.cwr, {
                children: (0, n.jsxs)("div", {
                    className: h.hQ,
                    children: [
                        (0, n.jsx)("div", { className: h.ZB }),
                        (0, n.jsx)(o.DZT, {
                            className: h.wx,
                            variant: "display-md",
                            color: "text-strong",
                            children: N.intl.string(N.t.QWljxE),
                        }),
                        (0, n.jsxs)("div", {
                            className: h.Dz,
                            children: [
                                u
                                    ? (0, n.jsx)("img", {
                                          src: T.A,
                                          alt: "",
                                          className: h.d9,
                                      })
                                    : (0, n.jsx)(p.A, {
                                          playsInline: !0,
                                          muted: !0,
                                          autoPlay: !0,
                                          loop: !0,
                                          className: h.d9,
                                          children: (0, n.jsx)("source", { src: d }),
                                      }),
                                (0, n.jsx)(m.A, {
                                    user: a,
                                    isHighlighted: !0,
                                    nameplate: null,
                                    nameplateData: a.nameplate,
                                    className: h.M4,
                                    nameplatePreviewSize: "large",
                                }),
                            ],
                        }),
                        (0, n.jsx)("div", {
                            className: h.FS,
                            children: (0, n.jsx)(o.EYj, {
                                variant: "text-md/medium",
                                color: "text-muted",
                                children: N.intl.format(r ? x.default.axh0pl : x.default["+KAArL"], {
                                    premiumGroupProductName: (0, I.DP)(),
                                    primaryName: i,
                                }),
                            }),
                        }),
                        (0, n.jsx)("div", {
                            className: h.qr,
                            children: (0, n.jsx)(c.$nd, {
                                variant: "primary",
                                fullWidth: !0,
                                text: N.intl.string(x.default.EL9m2H),
                                onClick: () => {
                                    t(), (0, _.pX)(y.BVt.APPLICATION_STORE);
                                },
                            }),
                        }),
                    ],
                }),
            }),
        }),
    );
}
function G(e) {
    let {
            setModalState: t,
            onClose: r,
            premiumGroupSubscriptionId: a,
            premiumGroupInviteId: s,
            isExistingSub: l,
            premiumGroupPrimaryName: c,
            currentUser: f,
            setError: p,
        } = e,
        m = C(e, [
            "setModalState",
            "onClose",
            "premiumGroupSubscriptionId",
            "premiumGroupInviteId",
            "isExistingSub",
            "premiumGroupPrimaryName",
            "currentUser",
            "setError",
        ]),
        b = (0, I.DP)(),
        [_, O] = (0, i.useState)(!1);
    (0, u.Ay)(() => {
        S.default.track(y.HAw.PREMIUM_GROUP_ACCEPT_INVITE_MODAL_VIEWED, {
            invite_id: s,
            subscription_id: a,
            is_existing_sub: l,
        });
    });
    let P = async () => {
        S.default.track(y.HAw.PREMIUM_GROUP_ACCEPT_INVITE_CTA_CLICKED, {
            invite_id: s,
            subscription_id: a,
            is_existing_sub: l,
        }),
            O(!0);
        let e = await (0, g.wc)(a, f.id, s);
        if ((O(!1), e.ok)) t(1);
        else {
            var r, n, i;
            let o = null == (n = null == (r = e.body) ? void 0 : r.code) ? 0 : null != (i = R[n]) ? i : 0;
            S.default.track(y.HAw.PREMIUM_GROUP_ACCEPT_INVITE_ERROR, {
                invite_id: s,
                subscription_id: a,
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
                        default:
                            return "unknown";
                    }
                })(o),
            }),
                p(o),
                t(2);
        }
    };
    return (0, n.jsx)(
        o.ExpressiveModal,
        w(v({}, m), {
            onClose: r,
            gradientColor: "nitro-pink",
            badge: {
                type: "beta",
                variant: "expressive",
            },
            graphic: {
                src: U.A,
                type: "image",
            },
            title: N.intl.formatToPlainString(l ? x.default["0Yxz12"] : x.default.UjA5k8, {
                premiumGroupProductName: b,
            }),
            subtitle: N.intl.format(l ? x.default.YjSsdH : x.default.qkFeBP, {
                premiumGroupProductName: b,
                cooldownMonths: I.wl,
                primaryName: c,
            }),
            actions: [
                {
                    text: N.intl.string(x.default["IO+nlU"]),
                    onClick: () => {
                        (0, d.A)(I.TE);
                    },
                    variant: "secondary",
                },
                {
                    text: N.intl.string(x.default.odQeh3),
                    onClick: P,
                    variant: "expressive",
                    icon: o.tvc,
                    loading: _,
                },
            ],
        }),
    );
}
function k(e) {
    let t,
        r,
        { error: i, onClose: a } = e,
        s = C(e, ["error", "onClose"]),
        l = (0, I.DP)();
    switch (i) {
        case 1:
            (t = N.intl.formatToPlainString(x.default["wMo6/n"], { premiumGroupProductName: l })),
                (r = N.intl.formatToPlainString(x.default.C08r8L, {
                    premiumGroupProductName: l,
                    cooldownMonths: I.wl,
                }));
            break;
        case 2:
            (t = N.intl.formatToPlainString(x.default["Um4ml+"], { premiumGroupProductName: l })),
                (r = N.intl.string(x.default.Fm8iss));
            break;
        case 3:
            (t = N.intl.string(x.default.yGTLxP)),
                (r = N.intl.formatToPlainString(x.default["7/qtoL"], { premiumGroupProductName: l }));
            break;
        case 4:
            (t = N.intl.formatToPlainString(x.default["S+UfpQ"], { premiumGroupProductName: l })),
                (r = N.intl.formatToPlainString(x.default.AKYhx6, {
                    premiumGroupProductName: l,
                    countryName: (0, I.mU)(),
                }));
            break;
        case 5:
            (t = N.intl.formatToPlainString(x.default.anKEqI, { premiumGroupProductName: l })),
                (r = N.intl.formatToPlainString(x.default["67BbUf"], { premiumGroupProductName: l }));
            break;
        case 6:
            (t = N.intl.formatToPlainString(x.default.VH7zHG, { premiumGroupProductName: l })),
                (r = N.intl.string(x.default.s47Jqb));
            break;
        case 7:
            (t = N.intl.formatToPlainString(x.default.agSoQJ, { premiumGroupProductName: l })),
                (r = N.intl.formatToPlainString(x.default.YhJsq4, { premiumGroupProductName: l }));
            break;
        default:
            (t = N.intl.formatToPlainString(x.default["Kpg/uU"], { premiumGroupProductName: l })),
                (r = N.intl.formatToPlainString(x.default.GrEzlX, { premiumGroupProductName: l }));
    }
    return (0, n.jsx)(
        o.Modal,
        v(
            {
                size: "md",
                title: t,
                subtitle: r,
                onClose: a,
                actions: [
                    {
                        text: N.intl.string(x.default["IO+nlU"]),
                        variant: "secondary",
                        onClick: () => {
                            (0, d.A)(I.TE);
                        },
                    },
                ],
            },
            s,
        ),
    );
}
function L(e) {
    let { premiumGroupSubscriptionId: t, premiumGroupInviteId: r, isExistingSub: a, premiumGroupPrimaryName: o } = e,
        c = C(e, ["premiumGroupSubscriptionId", "premiumGroupInviteId", "isExistingSub", "premiumGroupPrimaryName"]),
        [u, d] = (0, i.useState)(0),
        [f, p] = (0, i.useState)(null),
        m = (0, l.bG)([O.default], () => O.default.getCurrentUser());
    s()(null != m, "UserSettingsProfileCustomization: user cannot be undefined");
    let _ = null;
    switch (u) {
        case 0:
            _ = (0, n.jsx)(
                G,
                v(
                    {
                        setModalState: d,
                        premiumGroupSubscriptionId: t,
                        premiumGroupInviteId: r,
                        isExistingSub: a,
                        premiumGroupPrimaryName: o,
                        currentUser: m,
                        setError: p,
                    },
                    c,
                ),
            );
            break;
        case 1:
            _ = (0, n.jsx)(
                A,
                w(v({}, c), {
                    isExistingSub: a,
                    premiumGroupPrimaryName: o,
                    currentUser: m,
                }),
            );
            break;
        case 2:
            _ = (0, n.jsx)(k, v({ error: f }, c));
    }
    return (0, n.jsx)(b.A, {
        isConfirmationStep: 1 === u,
        isEligibleForWowMoment: !0,
        shouldPrefetchWowMoment: !0,
        children: _,
    });
}
