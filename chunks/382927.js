r.d(t, { default: () => M }), r(388685);
var n = r(54381),
    a = r(473749),
    i = r(512722),
    o = r.n(i),
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
    g = r(526167),
    S = r(80721),
    x = r(282793),
    v = r(981631),
    I = r(353149),
    y = r(388032),
    h = r(544165),
    C = r(530641),
    j = r(491567),
    w = r(419698),
    N = r(568368);
function E(e) {
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
function T(e, t) {
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
function U(e, t) {
    if (null == e) return {};
    var r,
        n,
        a = (function (e, t) {
            if (null == e) return {};
            var r,
                n,
                a = {},
                i = Object.keys(e);
            for (n = 0; n < i.length; n++) (r = i[n]), t.indexOf(r) >= 0 || (a[r] = e[r]);
            return a;
        })(e, t);
    if (Object.getOwnPropertySymbols) {
        var i = Object.getOwnPropertySymbols(e);
        for (n = 0; n < i.length; n++)
            (r = i[n]), !(t.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(e, r) && (a[r] = e[r]);
    }
    return a;
}
let G = {
    [x.YW.BILLING_SUBSCRIPTION_GROUP_USER_ON_COOLDOWN]: 1,
    [x.YW.BILLING_SUBSCRIPTION_GROUP_USER_ACTIVE_BOOSTS]: 2,
    [x.YW.BILLING_SUBSCRIPTION_GROUP_USER_BOOST_ONLY]: 2,
    [x.YW.BILLING_SUBSCRIPTION_GROUP_USER_HAS_FRACTIONAL_NITRO]: 5,
    [x.YW.UNKNOWN_USER]: 3,
};
function k(e) {
    var { onClose: t, isExistingSub: r, premiumGroupPrimaryName: a, currentUser: i } = e,
        o = U(e, ["onClose", "isExistingSub", "premiumGroupPrimaryName", "currentUser"]);
    let u = (0, l.e7)([f.Z], () => f.Z.useReducedMotion),
        d = (0, g.rO)() ? C.Z : j.Z;
    return (0, n.jsx)(
        s.IX,
        T(E({}, o), {
            onClose: t,
            children: (0, n.jsxs)(s.fef, {
                children: [
                    (0, n.jsx)("div", { className: h.wumpusContainer }),
                    (0, n.jsx)(s.X6q, {
                        className: h.header,
                        variant: "display-md",
                        color: "text-strong",
                        children: y.intl.string(y.t.QWljxE),
                    }),
                    (0, n.jsxs)("div", {
                        className: h.nameplatePreviewContainer,
                        children: [
                            u
                                ? (0, n.jsx)("img", {
                                      src: w.Z,
                                      alt: "",
                                      className: h.nameplateGlow,
                                  })
                                : (0, n.jsx)(p.Z, {
                                      playsInline: !0,
                                      muted: !0,
                                      autoPlay: !0,
                                      loop: !0,
                                      className: h.nameplateGlow,
                                      children: (0, n.jsx)("source", { src: d }),
                                  }),
                            (0, n.jsx)(m.Z, {
                                user: i,
                                isHighlighted: !0,
                                nameplate: null,
                                nameplateData: i.nameplate,
                                className: h.nameplatePreview,
                                nameplatePreviewSize: "large",
                            }),
                        ],
                    }),
                    (0, n.jsx)("div", {
                        className: h.textContainer,
                        children: (0, n.jsx)(s.xvT, {
                            variant: "text-md/medium",
                            color: "text-muted",
                            children: y.intl.format(r ? I.default.axh0pl : I.default["+KAArL"], {
                                premiumGroupProductName: (0, x.sO)(),
                                primaryName: a,
                            }),
                        }),
                    }),
                    (0, n.jsx)("div", {
                        className: h.footer,
                        children: (0, n.jsx)(c.zxk, {
                            variant: "primary",
                            fullWidth: !0,
                            text: y.intl.string(I.default.EL9m2H),
                            onClick: () => {
                                t(), (0, _.uL)(v.Z5c.APPLICATION_STORE);
                            },
                        }),
                    }),
                ],
            }),
        }),
    );
}
function R(e) {
    var {
            setModalState: t,
            onClose: r,
            premiumGroupSubscriptionId: i,
            premiumGroupInviteId: o,
            isExistingSub: l,
            premiumGroupPrimaryName: c,
            currentUser: f,
            setError: p,
        } = e,
        m = U(e, [
            "setModalState",
            "onClose",
            "premiumGroupSubscriptionId",
            "premiumGroupInviteId",
            "isExistingSub",
            "premiumGroupPrimaryName",
            "currentUser",
            "setError",
        ]);
    let b = (0, x.sO)(),
        [_, O] = (0, a.useState)(!1);
    (0, u.ZP)(() => {
        P.default.track(v.rMx.PREMIUM_GROUP_ACCEPT_INVITE_MODAL_VIEWED, {
            invite_id: o,
            subscription_id: i,
            is_existing_sub: l,
        });
    });
    let g = async () => {
        P.default.track(v.rMx.PREMIUM_GROUP_ACCEPT_INVITE_CTA_CLICKED, {
            invite_id: o,
            subscription_id: i,
            is_existing_sub: l,
        }),
            O(!0);
        let e = await (0, S.r7)(i, f.id, o);
        if ((O(!1), e.ok)) t(1);
        else {
            var r, n, a;
            let s = null == (n = null == (r = e.body) ? void 0 : r.code) ? 0 : null != (a = G[n]) ? a : 0;
            P.default.track(v.rMx.PREMIUM_GROUP_ACCEPT_INVITE_ERROR, {
                invite_id: o,
                subscription_id: i,
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
        T(E({}, m), {
            onClose: r,
            gradientColor: "nitro-pink",
            badge: {
                type: "beta",
                variant: "expressive",
            },
            graphic: {
                src: N.Z,
                type: "image",
            },
            title: y.intl.formatToPlainString(l ? I.default["0Yxz12"] : I.default.UjA5k8, {
                premiumGroupProductName: b,
            }),
            subtitle: y.intl.format(l ? I.default.YjSsdH : I.default.qkFeBP, {
                premiumGroupProductName: b,
                cooldownMonths: x.T9,
                primaryName: c,
            }),
            actions: [
                {
                    text: y.intl.string(I.default["IO+nlU"]),
                    onClick: () => {
                        (0, d.Z)(x.j3);
                    },
                    variant: "secondary",
                },
                {
                    text: y.intl.string(I.default.odQeh3),
                    onClick: g,
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
    var { error: a, onClose: i } = e,
        o = U(e, ["error", "onClose"]);
    let l = (0, x.sO)();
    switch (a) {
        case 1:
            (t = y.intl.formatToPlainString(I.default["wMo6/n"], { premiumGroupProductName: l })),
                (r = y.intl.formatToPlainString(I.default.C08r8L, {
                    premiumGroupProductName: l,
                    cooldownMonths: x.T9,
                }));
            break;
        case 2:
            (t = y.intl.formatToPlainString(I.default["Um4ml+"], { premiumGroupProductName: l })),
                (r = y.intl.string(I.default.Fm8iss));
            break;
        case 3:
            (t = y.intl.string(I.default.yGTLxP)),
                (r = y.intl.formatToPlainString(I.default["7/qtoL"], { premiumGroupProductName: l }));
            break;
        case 4:
            (t = y.intl.formatToPlainString(I.default["S+UfpQ"], { premiumGroupProductName: l })),
                (r = y.intl.formatToPlainString(I.default.AKYhx6, {
                    premiumGroupProductName: l,
                    countryName: (0, x.sf)(),
                }));
            break;
        case 5:
            (t = y.intl.formatToPlainString(I.default.anKEqI, { premiumGroupProductName: l })),
                (r = y.intl.formatToPlainString(I.default["67BbUf"], { premiumGroupProductName: l }));
            break;
        default:
            (t = y.intl.formatToPlainString(I.default["Kpg/uU"], { premiumGroupProductName: l })),
                (r = y.intl.formatToPlainString(I.default.GrEzlX, { premiumGroupProductName: l }));
    }
    return (0, n.jsx)(
        s.Modal,
        E(
            {
                size: "md",
                title: t,
                subtitle: r,
                onClose: i,
                actions: [
                    {
                        text: y.intl.string(I.default["IO+nlU"]),
                        variant: "secondary",
                        onClick: () => {
                            (0, d.Z)(x.j3);
                        },
                    },
                ],
            },
            o,
        ),
    );
}
function M(e) {
    var { premiumGroupSubscriptionId: t, premiumGroupInviteId: r, isExistingSub: i, premiumGroupPrimaryName: s } = e,
        c = U(e, ["premiumGroupSubscriptionId", "premiumGroupInviteId", "isExistingSub", "premiumGroupPrimaryName"]);
    let [u, d] = (0, a.useState)(0),
        [f, p] = (0, a.useState)(null),
        m = (0, l.e7)([O.default], () => O.default.getCurrentUser());
    o()(null != m, "UserSettingsProfileCustomization: user cannot be undefined");
    let _ = null;
    switch (u) {
        case 0:
            _ = (0, n.jsx)(
                R,
                E(
                    {
                        setModalState: d,
                        premiumGroupSubscriptionId: t,
                        premiumGroupInviteId: r,
                        isExistingSub: i,
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
                k,
                T(E({}, c), {
                    isExistingSub: i,
                    premiumGroupPrimaryName: s,
                    currentUser: m,
                }),
            );
            break;
        case 2:
            _ = (0, n.jsx)(L, E({ error: f }, c));
    }
    return (0, n.jsx)(b.Z, {
        isConfirmationStep: 1 === u,
        isEligibleForWowMoment: !0,
        shouldPrefetchWowMoment: !0,
        children: _,
    });
}
