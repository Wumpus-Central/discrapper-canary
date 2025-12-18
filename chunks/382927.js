r.d(t, { default: () => U }), r(388685);
var n = r(54381),
    a = r(473749),
    i = r(512722),
    o = r.n(i),
    l = r(793030),
    s = r(442837),
    c = r(159691),
    u = r(782568),
    f = r(607070),
    d = r(70097),
    m = r(566697),
    p = r(518727),
    b = r(703656),
    g = r(594174),
    y = r(526167),
    P = r(80721),
    x = r(282793),
    j = r(981631),
    h = r(353149),
    O = r(388032),
    S = r(544165),
    v = r(530641),
    w = r(491567),
    C = r(419698),
    k = r(568368);
function G(e) {
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
function N(e, t) {
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
function E(e, t) {
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
function I(e) {
    var { onClose: t, isExistingSub: r, premiumGroupPrimaryName: a, currentUser: i } = e,
        o = E(e, ["onClose", "isExistingSub", "premiumGroupPrimaryName", "currentUser"]);
    let u = (0, s.e7)([f.Z], () => f.Z.useReducedMotion),
        p = (0, y.rO)() ? v.Z : w.Z;
    return (0, n.jsx)(
        l.IX,
        N(G({}, o), {
            onClose: t,
            children: (0, n.jsxs)(l.fef, {
                children: [
                    (0, n.jsx)("div", { className: S.wumpusContainer }),
                    (0, n.jsx)(l.X6q, {
                        className: S.header,
                        variant: "display-md",
                        color: "text-strong",
                        children: O.intl.string(O.t.QWljxE),
                    }),
                    (0, n.jsxs)("div", {
                        className: S.nameplatePreviewContainer,
                        children: [
                            u
                                ? (0, n.jsx)("img", {
                                      src: C.Z,
                                      alt: "",
                                      className: S.nameplateGlow,
                                  })
                                : (0, n.jsx)(d.Z, {
                                      playsInline: !0,
                                      muted: !0,
                                      autoPlay: !0,
                                      loop: !0,
                                      className: S.nameplateGlow,
                                      children: (0, n.jsx)("source", { src: p }),
                                  }),
                            (0, n.jsx)(m.Z, {
                                user: i,
                                isHighlighted: !0,
                                nameplate: null,
                                nameplateData: i.nameplate,
                                className: S.nameplatePreview,
                                nameplatePreviewSize: "large",
                            }),
                        ],
                    }),
                    (0, n.jsx)("div", {
                        className: S.textContainer,
                        children: O.intl.format(r ? h.default.axh0pl : h.default["+KAArL"], {
                            premiumGroupProductName: (0, x.sO)(),
                            primaryName: a,
                        }),
                    }),
                    (0, n.jsx)("div", {
                        className: S.footer,
                        children: (0, n.jsx)(c.zxk, {
                            variant: "primary",
                            fullWidth: !0,
                            text: O.intl.string(h.default.EL9m2H),
                            onClick: () => {
                                t(), (0, b.uL)(j.Z5c.APPLICATION_STORE);
                            },
                        }),
                    }),
                ],
            }),
        }),
    );
}
function T(e) {
    var {
            setModalState: t,
            onClose: r,
            premiumGroupSubscriptionId: i,
            premiumGroupInviteId: o,
            isExistingSub: s,
            premiumGroupPrimaryName: c,
            currentUser: f,
            setError: d,
        } = e,
        m = E(e, [
            "setModalState",
            "onClose",
            "premiumGroupSubscriptionId",
            "premiumGroupInviteId",
            "isExistingSub",
            "premiumGroupPrimaryName",
            "currentUser",
            "setError",
        ]);
    let p = (0, x.sO)(),
        [b, g] = (0, a.useState)(!1),
        y = async () => {
            g(!0);
            try {
                await (0, P.r7)(i, f.id, o), t(1);
            } catch (e) {
                d(0), t(2);
            } finally {
                g(!1);
            }
        };
    return (0, n.jsx)(
        l.ExpressiveModal,
        N(G({}, m), {
            onClose: r,
            gradientColor: "nitro-pink",
            badge: { type: "beta" },
            graphic: {
                src: k.Z,
                type: "image",
            },
            title: O.intl.formatToPlainString(s ? h.default["0Yxz12"] : h.default.UjA5k8, {
                premiumGroupProductName: p,
            }),
            subtitle: O.intl.format(s ? h.default.YjSsdH : h.default.qkFeBP, {
                premiumGroupProductName: p,
                cooldownMonths: x.T9,
                primaryName: c,
            }),
            actions: [
                {
                    text: O.intl.string(h.default["IO+nlU"]),
                    onClick: () => {
                        (0, u.Z)(x.j3);
                    },
                    variant: "secondary",
                },
                {
                    text: O.intl.string(h.default.odQeh3),
                    onClick: y,
                    variant: "expressive",
                    icon: l.SrA,
                    loading: b,
                },
            ],
        }),
    );
}
function Z(e) {
    let t, r;
    var { error: a, onClose: i } = e,
        o = E(e, ["error", "onClose"]);
    let s = (0, x.sO)();
    switch (a) {
        case 1:
            (t = O.intl.formatToPlainString(h.default["wMo6/n"], { premiumGroupProductName: s })),
                (r = O.intl.formatToPlainString(h.default.C08r8L, {
                    premiumGroupProductName: s,
                    cooldownMonths: x.T9,
                }));
            break;
        case 2:
            (t = O.intl.formatToPlainString(h.default["Um4ml+"], { premiumGroupProductName: s })),
                (r = O.intl.string(h.default.Fm8iss));
            break;
        case 3:
            (t = O.intl.string(h.default.yGTLxP)),
                (r = O.intl.formatToPlainString(h.default["7/qtoL"], { premiumGroupProductName: s }));
            break;
        case 4:
            (t = O.intl.formatToPlainString(h.default["S+UfpQ"], { premiumGroupProductName: s })),
                (r = O.intl.formatToPlainString(h.default.AKYhx6, {
                    premiumGroupProductName: s,
                    countryName: (0, x.sf)(),
                }));
            break;
        case 5:
            (t = O.intl.formatToPlainString(h.default.anKEqI, { premiumGroupProductName: s })),
                (r = O.intl.formatToPlainString(h.default["67BbUf"], { premiumGroupProductName: s }));
            break;
        default:
            (t = O.intl.formatToPlainString(h.default["Kpg/uU"], { premiumGroupProductName: s })),
                (r = O.intl.formatToPlainString(h.default.GrEzlX, { premiumGroupProductName: s }));
    }
    return (0, n.jsx)(
        l.Modal,
        G(
            {
                size: "md",
                title: t,
                subtitle: r,
                onClose: i,
                actions: [
                    {
                        text: O.intl.string(h.default["IO+nlU"]),
                        variant: "secondary",
                        onClick: () => {
                            (0, u.Z)(x.j3);
                        },
                    },
                ],
            },
            o,
        ),
    );
}
function U(e) {
    var { premiumGroupSubscriptionId: t, premiumGroupInviteId: r, isExistingSub: i, premiumGroupPrimaryName: l } = e,
        c = E(e, ["premiumGroupSubscriptionId", "premiumGroupInviteId", "isExistingSub", "premiumGroupPrimaryName"]);
    let [u, f] = (0, a.useState)(0),
        [d, m] = (0, a.useState)(null),
        b = (0, s.e7)([g.default], () => g.default.getCurrentUser());
    o()(null != b, "UserSettingsProfileCustomization: user cannot be undefined");
    let y = null;
    switch (u) {
        case 0:
            y = (0, n.jsx)(
                T,
                G(
                    {
                        setModalState: f,
                        premiumGroupSubscriptionId: t,
                        premiumGroupInviteId: r,
                        isExistingSub: i,
                        premiumGroupPrimaryName: l,
                        currentUser: b,
                        setError: m,
                    },
                    c,
                ),
            );
            break;
        case 1:
            y = (0, n.jsx)(
                I,
                N(G({}, c), {
                    isExistingSub: i,
                    premiumGroupPrimaryName: l,
                    currentUser: b,
                }),
            );
            break;
        case 2:
            y = (0, n.jsx)(Z, G({ error: d }, c));
    }
    return (0, n.jsx)(p.Z, {
        isConfirmationStep: 1 === u,
        isEligibleForWowMoment: !0,
        shouldPrefetchWowMoment: !0,
        children: y,
    });
}
