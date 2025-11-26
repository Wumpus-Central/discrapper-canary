r.d(t, { default: () => U }), r(388685);
var n = r(54381),
    a = r(473749),
    i = r(512722),
    o = r.n(i),
    s = r(793030),
    l = r(442837),
    c = r(159691),
    u = r(782568),
    d = r(607070),
    f = r(70097),
    m = r(566697),
    p = r(518727),
    b = r(703656),
    y = r(594174),
    h = r(526167),
    g = r(80721),
    P = r(282793),
    S = r(981631),
    j = r(606097),
    v = r(388032),
    x = r(807021),
    w = r(667325),
    O = r(552039),
    _ = r(445161),
    C = r(255870);
function I(e) {
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
function k(e) {
    var { onClose: t, isExistingSub: r, premiumGroupPrimaryName: a, currentUser: i } = e,
        o = E(e, ["onClose", "isExistingSub", "premiumGroupPrimaryName", "currentUser"]);
    let u = (0, l.e7)([d.Z], () => d.Z.useReducedMotion),
        p = (0, h.rO)() ? w.Z : O.Z;
    return (0, n.jsx)(
        s.IX,
        N(I({}, o), {
            onClose: t,
            children: (0, n.jsxs)(s.fef, {
                children: [
                    (0, n.jsx)("div", { className: x.wumpusContainer }),
                    (0, n.jsx)(s.X6q, {
                        className: x.header,
                        variant: "display-md",
                        color: "header-primary",
                        children: v.intl.string(v.t.QWljxE),
                    }),
                    (0, n.jsxs)("div", {
                        className: x.nameplatePreviewContainer,
                        children: [
                            u
                                ? (0, n.jsx)("img", {
                                      src: _.Z,
                                      alt: "",
                                      className: x.nameplateGlow,
                                  })
                                : (0, n.jsx)(f.Z, {
                                      playsInline: !0,
                                      muted: !0,
                                      autoPlay: !0,
                                      loop: !0,
                                      className: x.nameplateGlow,
                                      children: (0, n.jsx)("source", { src: p }),
                                  }),
                            (0, n.jsx)(m.Z, {
                                user: i,
                                isHighlighted: !0,
                                nameplate: null,
                                nameplateData: i.nameplate,
                                className: x.nameplatePreview,
                                nameplatePreviewSize: "large",
                            }),
                        ],
                    }),
                    (0, n.jsx)("div", {
                        className: x.textContainer,
                        children: v.intl.format(r ? j.default.axh0pl : j.default["+KAArL"], {
                            premiumGroupProductName: (0, P.sO)(),
                            primaryName: a,
                        }),
                    }),
                    (0, n.jsx)("div", {
                        className: x.footer,
                        children: (0, n.jsx)(c.zxk, {
                            variant: "primary",
                            fullWidth: !0,
                            text: v.intl.string(j.default.EL9m2H),
                            onClick: () => {
                                t(), (0, b.uL)(S.Z5c.APPLICATION_STORE);
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
            isExistingSub: o,
            premiumGroupPrimaryName: l,
            currentUser: c,
            setError: d,
        } = e,
        f = E(e, [
            "setModalState",
            "onClose",
            "premiumGroupSubscriptionId",
            "isExistingSub",
            "premiumGroupPrimaryName",
            "currentUser",
            "setError",
        ]);
    let m = (0, P.sO)(),
        [p, b] = (0, a.useState)(!1),
        y = async () => {
            b(!0);
            try {
                await (0, g.r7)(i, c.id), t(1);
            } catch (e) {
                d(0), t(2);
            } finally {
                b(!1);
            }
        };
    return (0, n.jsx)(
        s.ExpressiveModal,
        N(I({}, f), {
            onClose: r,
            gradientColor: "nitro-pink",
            badge: { type: "beta" },
            graphic: {
                src: C.Z,
                type: "image",
            },
            title: v.intl.formatToPlainString(o ? j.default["0Yxz12"] : j.default.UjA5k8, {
                premiumGroupProductName: m,
            }),
            subtitle: v.intl.format(o ? j.default.YjSsdH : j.default.qkFeBP, {
                premiumGroupProductName: m,
                cooldownMonths: P.T9,
                primaryName: l,
            }),
            actions: [
                {
                    text: v.intl.string(j.default["IO+nlU"]),
                    onClick: () => {
                        (0, u.Z)(P.j3);
                    },
                    variant: "secondary",
                },
                {
                    text: v.intl.string(j.default.odQeh3),
                    onClick: y,
                    variant: "expressive",
                    icon: s.SrA,
                    loading: p,
                },
            ],
        }),
    );
}
function G(e) {
    let t, r;
    var { error: a, onClose: i } = e,
        o = E(e, ["error", "onClose"]);
    let l = (0, P.sO)();
    switch (a) {
        case 1:
            (t = v.intl.formatToPlainString(j.default["wMo6/n"], { premiumGroupProductName: l })),
                (r = v.intl.formatToPlainString(j.default.C08r8L, {
                    premiumGroupProductName: l,
                    cooldownMonths: P.T9,
                }));
            break;
        case 2:
            (t = v.intl.formatToPlainString(j.default["Um4ml+"], { premiumGroupProductName: l })),
                (r = v.intl.string(j.default.Fm8iss));
            break;
        case 3:
            (t = v.intl.string(j.default.yGTLxP)),
                (r = v.intl.formatToPlainString(j.default["7/qtoL"], { premiumGroupProductName: l }));
            break;
        case 4:
            (t = v.intl.formatToPlainString(j.default["S+UfpQ"], { premiumGroupProductName: l })),
                (r = v.intl.formatToPlainString(j.default.AKYhx6, {
                    premiumGroupProductName: l,
                    countryName: (0, P.sf)(),
                }));
            break;
        case 5:
            (t = v.intl.formatToPlainString(j.default.anKEqI, { premiumGroupProductName: l })),
                (r = v.intl.formatToPlainString(j.default["67BbUf"], { premiumGroupProductName: l }));
            break;
        default:
            (t = v.intl.formatToPlainString(j.default["Kpg/uU"], { premiumGroupProductName: l })),
                (r = v.intl.formatToPlainString(j.default.GrEzlX, { premiumGroupProductName: l }));
    }
    return (0, n.jsx)(
        s.Modal,
        I(
            {
                size: "md",
                title: t,
                subtitle: r,
                onClose: i,
                actions: [
                    {
                        text: v.intl.string(j.default["IO+nlU"]),
                        variant: "secondary",
                        onClick: () => {
                            (0, u.Z)(P.j3);
                        },
                    },
                ],
            },
            o,
        ),
    );
}
function U(e) {
    var { premiumGroupSubscriptionId: t, isExistingSub: r, premiumGroupPrimaryName: i } = e,
        s = E(e, ["premiumGroupSubscriptionId", "isExistingSub", "premiumGroupPrimaryName"]);
    let [c, u] = (0, a.useState)(0),
        [d, f] = (0, a.useState)(null),
        m = (0, l.e7)([y.default], () => y.default.getCurrentUser());
    o()(null != m, "UserSettingsProfileCustomization: user cannot be undefined");
    let b = null;
    switch (c) {
        case 0:
            b = (0, n.jsx)(
                T,
                I(
                    {
                        setModalState: u,
                        premiumGroupSubscriptionId: t,
                        isExistingSub: r,
                        premiumGroupPrimaryName: i,
                        currentUser: m,
                        setError: f,
                    },
                    s,
                ),
            );
            break;
        case 1:
            b = (0, n.jsx)(
                k,
                N(I({}, s), {
                    isExistingSub: r,
                    premiumGroupPrimaryName: i,
                    currentUser: m,
                }),
            );
            break;
        case 2:
            b = (0, n.jsx)(G, I({ error: d }, s));
    }
    return (0, n.jsx)(p.Z, {
        isConfirmationStep: 1 === c,
        isEligibleForWowMoment: !0,
        shouldPrefetchWowMoment: !0,
        children: b,
    });
}
