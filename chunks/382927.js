r.d(t, { default: () => M }), r(388685);
var n = r(54381),
    i = r(473749),
    a = r(512722),
    o = r.n(a),
    s = r(793030),
    l = r(442837),
    c = r(159691),
    u = r(493773),
    d = r(782568),
    f = r(607070),
    p = r(70097),
    m = r(566697),
    b = r(518727),
    _ = r(703656),
    O = r(594174),
    P = r(626135),
    S = r(526167),
    I = r(80721),
    g = r(282793),
    x = r(981631),
    v = r(353149),
    C = r(388032),
    y = r(544165),
    N = r(530641),
    h = r(491567),
    j = r(419698),
    U = r(568368);
function w(e) {
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
function E(e, t) {
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
function T(e, t) {
    if (null == e) return {};
    var r,
        n,
        i = (function (e, t) {
            if (null == e) return {};
            var r,
                n,
                i = {},
                a = Object.keys(e);
            for (n = 0; n < a.length; n++) (r = a[n]), t.indexOf(r) >= 0 || (i[r] = e[r]);
            return i;
        })(e, t);
    if (Object.getOwnPropertySymbols) {
        var a = Object.getOwnPropertySymbols(e);
        for (n = 0; n < a.length; n++)
            (r = a[n]), !(t.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(e, r) && (i[r] = e[r]);
    }
    return i;
}
let G = {
    [g.YW.BILLING_SUBSCRIPTION_GROUP_USER_ON_COOLDOWN]: 1,
    [g.YW.BILLING_SUBSCRIPTION_GROUP_USER_ACTIVE_BOOSTS]: 2,
    [g.YW.BILLING_SUBSCRIPTION_GROUP_USER_BOOST_ONLY]: 2,
    [g.YW.BILLING_SUBSCRIPTION_GROUP_USER_HAS_FRACTIONAL_NITRO]: 5,
    [g.YW.UNKNOWN_USER]: 3,
    [g.YW.BILLING_SUBSCRIPTION_GROUP_USER_ON_GIFT_SUBSCRIPTION]: 6,
    [g.YW.BILLING_SUBSCRIPTION_GROUP_USER_INVALID_SUBSCRIPTION]: 7,
};
function R(e) {
    var { onClose: t, isExistingSub: r, premiumGroupPrimaryName: i, currentUser: a } = e,
        o = T(e, ["onClose", "isExistingSub", "premiumGroupPrimaryName", "currentUser"]);
    let u = (0, l.e7)([f.Z], () => f.Z.useReducedMotion),
        d = (0, S.rO)() ? N.Z : h.Z;
    return (0, n.jsx)(
        s.IX,
        E(w({}, o), {
            onClose: t,
            children: (0, n.jsx)(s.fef, {
                children: (0, n.jsxs)("div", {
                    className: y.contentContainer,
                    children: [
                        (0, n.jsx)("div", { className: y.wumpusContainer }),
                        (0, n.jsx)(s.X6q, {
                            className: y.header,
                            variant: "display-md",
                            color: "text-strong",
                            children: C.intl.string(C.t.QWljxE),
                        }),
                        (0, n.jsxs)("div", {
                            className: y.nameplatePreviewContainer,
                            children: [
                                u
                                    ? (0, n.jsx)("img", {
                                          src: j.Z,
                                          alt: "",
                                          className: y.nameplateGlow,
                                      })
                                    : (0, n.jsx)(p.Z, {
                                          playsInline: !0,
                                          muted: !0,
                                          autoPlay: !0,
                                          loop: !0,
                                          className: y.nameplateGlow,
                                          children: (0, n.jsx)("source", { src: d }),
                                      }),
                                (0, n.jsx)(m.Z, {
                                    user: a,
                                    isHighlighted: !0,
                                    nameplate: null,
                                    nameplateData: a.nameplate,
                                    className: y.nameplatePreview,
                                    nameplatePreviewSize: "large",
                                }),
                            ],
                        }),
                        (0, n.jsx)("div", {
                            className: y.textContainer,
                            children: (0, n.jsx)(s.xvT, {
                                variant: "text-md/medium",
                                color: "text-muted",
                                children: C.intl.format(r ? v.default.axh0pl : v.default["+KAArL"], {
                                    premiumGroupProductName: (0, g.sO)(),
                                    primaryName: i,
                                }),
                            }),
                        }),
                        (0, n.jsx)("div", {
                            className: y.footer,
                            children: (0, n.jsx)(c.zxk, {
                                variant: "primary",
                                fullWidth: !0,
                                text: C.intl.string(v.default.EL9m2H),
                                onClick: () => {
                                    t(), (0, _.uL)(x.Z5c.APPLICATION_STORE);
                                },
                            }),
                        }),
                    ],
                }),
            }),
        }),
    );
}
function k(e) {
    var {
            setModalState: t,
            onClose: r,
            premiumGroupSubscriptionId: a,
            premiumGroupInviteId: o,
            isExistingSub: l,
            premiumGroupPrimaryName: c,
            currentUser: f,
            setError: p,
        } = e,
        m = T(e, [
            "setModalState",
            "onClose",
            "premiumGroupSubscriptionId",
            "premiumGroupInviteId",
            "isExistingSub",
            "premiumGroupPrimaryName",
            "currentUser",
            "setError",
        ]);
    let b = (0, g.sO)(),
        [_, O] = (0, i.useState)(!1);
    (0, u.ZP)(() => {
        P.default.track(x.rMx.PREMIUM_GROUP_ACCEPT_INVITE_MODAL_VIEWED, {
            invite_id: o,
            subscription_id: a,
            is_existing_sub: l,
        });
    });
    let S = async () => {
        P.default.track(x.rMx.PREMIUM_GROUP_ACCEPT_INVITE_CTA_CLICKED, {
            invite_id: o,
            subscription_id: a,
            is_existing_sub: l,
        }),
            O(!0);
        let e = await (0, I.r7)(a, f.id, o);
        if ((O(!1), e.ok)) t(1);
        else {
            var r, n, i;
            let s = null == (n = null == (r = e.body) ? void 0 : r.code) ? 0 : null != (i = G[n]) ? i : 0;
            P.default.track(x.rMx.PREMIUM_GROUP_ACCEPT_INVITE_ERROR, {
                invite_id: o,
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
                })(s),
            }),
                p(s),
                t(2);
        }
    };
    return (0, n.jsx)(
        s.ExpressiveModal,
        E(w({}, m), {
            onClose: r,
            gradientColor: "nitro-pink",
            badge: {
                type: "beta",
                variant: "expressive",
            },
            graphic: {
                src: U.Z,
                type: "image",
            },
            title: C.intl.formatToPlainString(l ? v.default["0Yxz12"] : v.default.UjA5k8, {
                premiumGroupProductName: b,
            }),
            subtitle: C.intl.format(l ? v.default.YjSsdH : v.default.qkFeBP, {
                premiumGroupProductName: b,
                cooldownMonths: g.T9,
                primaryName: c,
            }),
            actions: [
                {
                    text: C.intl.string(v.default["IO+nlU"]),
                    onClick: () => {
                        (0, d.Z)(g.j3);
                    },
                    variant: "secondary",
                },
                {
                    text: C.intl.string(v.default.odQeh3),
                    onClick: S,
                    variant: "expressive",
                    icon: s.SrA,
                    loading: _,
                },
            ],
        }),
    );
}
function L(e) {
    let t, r;
    var { error: i, onClose: a } = e,
        o = T(e, ["error", "onClose"]);
    let l = (0, g.sO)();
    switch (i) {
        case 1:
            (t = C.intl.formatToPlainString(v.default["wMo6/n"], { premiumGroupProductName: l })),
                (r = C.intl.formatToPlainString(v.default.C08r8L, {
                    premiumGroupProductName: l,
                    cooldownMonths: g.T9,
                }));
            break;
        case 2:
            (t = C.intl.formatToPlainString(v.default["Um4ml+"], { premiumGroupProductName: l })),
                (r = C.intl.string(v.default.Fm8iss));
            break;
        case 3:
            (t = C.intl.string(v.default.yGTLxP)),
                (r = C.intl.formatToPlainString(v.default["7/qtoL"], { premiumGroupProductName: l }));
            break;
        case 4:
            (t = C.intl.formatToPlainString(v.default["S+UfpQ"], { premiumGroupProductName: l })),
                (r = C.intl.formatToPlainString(v.default.AKYhx6, {
                    premiumGroupProductName: l,
                    countryName: (0, g.sf)(),
                }));
            break;
        case 5:
            (t = C.intl.formatToPlainString(v.default.anKEqI, { premiumGroupProductName: l })),
                (r = C.intl.formatToPlainString(v.default["67BbUf"], { premiumGroupProductName: l }));
            break;
        default:
            (t = C.intl.formatToPlainString(v.default["Kpg/uU"], { premiumGroupProductName: l })),
                (r = C.intl.formatToPlainString(v.default.GrEzlX, { premiumGroupProductName: l }));
    }
    return (0, n.jsx)(
        s.Modal,
        w(
            {
                size: "md",
                title: t,
                subtitle: r,
                onClose: a,
                actions: [
                    {
                        text: C.intl.string(v.default["IO+nlU"]),
                        variant: "secondary",
                        onClick: () => {
                            (0, d.Z)(g.j3);
                        },
                    },
                ],
            },
            o,
        ),
    );
}
function M(e) {
    var { premiumGroupSubscriptionId: t, premiumGroupInviteId: r, isExistingSub: a, premiumGroupPrimaryName: s } = e,
        c = T(e, ["premiumGroupSubscriptionId", "premiumGroupInviteId", "isExistingSub", "premiumGroupPrimaryName"]);
    let [u, d] = (0, i.useState)(0),
        [f, p] = (0, i.useState)(null),
        m = (0, l.e7)([O.default], () => O.default.getCurrentUser());
    o()(null != m, "UserSettingsProfileCustomization: user cannot be undefined");
    let _ = null;
    switch (u) {
        case 0:
            _ = (0, n.jsx)(
                k,
                w(
                    {
                        setModalState: d,
                        premiumGroupSubscriptionId: t,
                        premiumGroupInviteId: r,
                        isExistingSub: a,
                        premiumGroupPrimaryName: s,
                        currentUser: m,
                        setError: p,
                    },
                    c,
                ),
            );
            break;
        case 1:
            _ = (0, n.jsx)(
                R,
                E(w({}, c), {
                    isExistingSub: a,
                    premiumGroupPrimaryName: s,
                    currentUser: m,
                }),
            );
            break;
        case 2:
            _ = (0, n.jsx)(L, w({ error: f }, c));
    }
    return (0, n.jsx)(b.Z, {
        isConfirmationStep: 1 === u,
        isEligibleForWowMoment: !0,
        shouldPrefetchWowMoment: !0,
        children: _,
    });
}
