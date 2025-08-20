n.d(t, {
    G: () => U,
    Z: () => G,
}),
    n(388685),
    n(953529);
var r = n(951288),
    i = n(647438),
    a = n(561537),
    o = n(269210),
    s = n(442837),
    l = n(755721),
    c = n(481060),
    u = n(355467),
    d = n(100527),
    f = n(906732),
    _ = n(601911),
    p = n(283836),
    h = n(887818),
    m = n(728345),
    g = n(565138),
    E = n(374649),
    b = n(908951),
    y = n(255078),
    O = n(430824),
    v = n(509545),
    I = n(55563),
    T = n(551428),
    S = n(937615),
    A = n(171246),
    C = n(889989),
    N = n(63487),
    R = n(547283),
    P = n(981631),
    w = n(388032),
    D = n(608848);
function x(e, t, n) {
    return (
        t in e
            ? Object.defineProperty(e, t, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0,
              })
            : (e[t] = n),
        e
    );
}
function L(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            r = Object.keys(n);
        "function" == typeof Object.getOwnPropertySymbols &&
            (r = r.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                }),
            )),
            r.forEach(function (t) {
                x(e, t, n[t]);
            });
    }
    return e;
}
function j(e, t) {
    var n = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
        var r = Object.getOwnPropertySymbols(e);
        t &&
            (r = r.filter(function (t) {
                return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            n.push.apply(n, r);
    }
    return n;
}
function M(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : j(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
let k = "https://support.discord.com/hc/en-us";
var U = (function (e) {
    return (e[(e.LOADING = 0)] = "LOADING"), (e[(e.DONE = 1)] = "DONE"), (e[(e.ERROR = 2)] = "ERROR"), e;
})({});
function G(e) {
    var t, n, o, l, u;
    let { subscription: p, navigateToSwitchPlan: h, loadingState: b } = e,
        y = null == (t = p.metadata) ? void 0 : t.application_subscription_guild_id,
        { renewalMutations: C, planId: R } = p,
        {
            appId: x,
            plan: L,
            storeListing: j,
            price: M,
            isGuildSubscription: k,
            subscriptionForGuild: U,
            sku: G,
            isCancelled: W,
            renewalPlan: K,
        } = (0, s.cj)([v.Z, I.Z, T.Z, O.Z], () => {
            let e,
                t = v.Z.get(R),
                n = null != t ? I.Z.get(t.skuId) : void 0,
                r = null == n ? void 0 : n.applicationId,
                i = null != t ? T.Z.getForSKU(t.skuId) : null,
                a = null != t ? (0, S.og)((0, S.T4)(t.price, t.currency), t.interval, t.intervalCount) : null,
                o = null != i && (0, A.KK)(i.skuFlags),
                s = o && null != y ? O.Z.getGuild(y) : void 0,
                l = (0, A.Jf)(p, n);
            if (!1 === l && null != C && C.items.length > 0) {
                var c;
                let t = C.items[0];
                e = null != (c = v.Z.get(t.planId)) ? c : void 0;
            }
            return {
                appId: r,
                isGuildSubscription: o,
                plan: t,
                price: a,
                sku: n,
                storeListing: i,
                subscriptionForGuild: s,
                isCancelled: l,
                renewalPlan: e,
            };
        }, [y, R, C, p]),
        { data: z } = (0, m.IX)(x),
        q = i.useMemo(() => (null != z ? (0, _.y)(z, 100) : null), [z]),
        X = null != (n = null == G ? void 0 : G.deleted) && n,
        Q = null != G && (0, A.OL)(G),
        J = p.status === P.O0b.PAST_DUE,
        { analyticsLocations: $ } = (0, f.ZP)(),
        [ee, et] = (0, E.ED)({
            subscriptionId: p.id,
            renewal: !0,
            analyticsLocations: $,
            analyticsLocation: d.Z.APP_SUBSCRIPTION_PAYMENT_SOURCE_WITH_INVOICE,
        }),
        en = (null == et ? void 0 : et.code) === 100062 && null != y && null == U,
        er = (0, N.p)(p.currentPeriodEnd),
        ei = 0 === b;
    return (0, r.jsxs)(a.l, {
        headerClassName: D.headerWrapper,
        header:
            !1 === ei
                ? (0, r.jsxs)(r.Fragment, {
                      children: [
                          (0, r.jsxs)("div", {
                              className: D.headerContent,
                              children: [
                                  null != q &&
                                      (0, r.jsx)(c.Eep, {
                                          src: q.href,
                                          imageClassName: D.appIcon,
                                          width: 40,
                                          height: 40,
                                      }),
                                  (0, r.jsxs)("div", {
                                      children: [
                                          (0, r.jsx)(c.X6q, {
                                              variant: "heading-md/semibold",
                                              children:
                                                  null != (o = null == z ? void 0 : z.name)
                                                      ? o
                                                      : w.intl.string(w.t["7kqy7e"]),
                                          }),
                                          (0, r.jsx)(c.Text, {
                                              variant: "text-sm/medium",
                                              color: "header-secondary",
                                              children:
                                                  null != (l = null == L ? void 0 : L.name)
                                                      ? l
                                                      : w.intl.string(w.t.sqkbMD),
                                          }),
                                      ],
                                  }),
                              ],
                          }),
                          (0, r.jsx)("div", {
                              className: D.headerButtons,
                              children:
                                  null != z &&
                                  null != j &&
                                  null != G &&
                                  !1 === en &&
                                  (0, r.jsx)(F, {
                                      subscription: p,
                                      app: z,
                                      sku: G,
                                      storeListing: j,
                                      isCancelled: W,
                                      navigateToSwitchPlan: h,
                                      renewalSkuId: null == K ? void 0 : K.skuId,
                                  }),
                          }),
                      ],
                  })
                : (0, r.jsx)(c.$jN, { type: c.RAz.PULSING_ELLIPSIS }),
        children: [
            W &&
                (0, r.jsx)(V, {
                    type: "warning",
                    title: Q
                        ? w.intl.formatToPlainString(w.t.QOnM19, { subscriptionPeriodEnd: er })
                        : w.intl.formatToPlainString(w.t.HOaZu7, { subscriptionPeriodEnd: er }),
                }),
            en &&
                (0, r.jsx)(V, {
                    type: "warning",
                    title: w.intl.formatToPlainString(w.t.HOaZu7, { subscriptionPeriodEnd: er }),
                }),
            J &&
                (0, r.jsx)(V, {
                    type: "danger",
                    title: w.intl.string(w.t.fvOqBg),
                }),
            (0, r.jsxs)("div", {
                className: D.details,
                children: [
                    (0, r.jsx)(Z, {
                        title: w.intl.string(w.t["5D/KEB"]),
                        content: k
                            ? (0, r.jsxs)(r.Fragment, {
                                  children: [
                                      (0, r.jsxs)("span", {
                                          className: D.subscriptionTypeRow,
                                          children: [(0, r.jsx)(c.QTo, { size: "xs" }), w.intl.string(w.t.QjL3vr)],
                                      }),
                                      null != U &&
                                          (0, r.jsxs)("span", {
                                              className: D.guildSubscriptionContentRow,
                                              children: [
                                                  (0, r.jsx)(c.Text, {
                                                      variant: "text-sm/normal",
                                                      color: "text-muted",
                                                      children: w.intl.format(w.t["7ZD8p6"], { guildName: U.name }),
                                                  }),
                                                  (0, r.jsx)(g.Z, {
                                                      guild: U,
                                                      size: g.Z.Sizes.MINI,
                                                  }),
                                              ],
                                          }),
                                  ],
                              })
                            : (0, r.jsxs)("span", {
                                  className: D.subscriptionTypeRow,
                                  children: [(0, r.jsx)(c.tBG, { size: "xs" }), w.intl.string(w.t["6anEVl"])],
                              }),
                    }),
                    null != M &&
                        (0, r.jsx)(Z, {
                            title: w.intl.string(w.t.KI7ER0),
                            content: M,
                        }),
                    (0, r.jsx)(Z, {
                        title: w.intl.string(w.t.dnUzb2),
                        content: (0, N.p)(null != (u = p.createdAt) ? u : p.currentPeriodStart),
                    }),
                    (0, r.jsx)(B, {
                        isCancelled: W,
                        subscriptionPeriodEnd: er,
                        renewalPlan: K,
                    }),
                ],
            }),
            (0, r.jsx)(Y, {
                subscription: p,
                currentInvoicePreview: ee,
                loadingState: b,
                isDeleted: X,
                isCancelled: W,
            }),
            null != z &&
                (null == j ? void 0 : j.benefits) != null &&
                j.benefits.length > 0 &&
                (0, r.jsx)(H, {
                    appId: z.id,
                    listingBenefits: j.benefits,
                }),
        ],
    });
}
function B(e) {
    let { isCancelled: t, subscriptionPeriodEnd: n, renewalPlan: i } = e;
    if (null != i) {
        let e = (0, S.og)((0, S.T4)(i.price, i.currency), i.interval, i.intervalCount);
        return (0, r.jsx)(Z, {
            title: w.intl.string(w.t.hIhAMz),
            content: (0, r.jsxs)(r.Fragment, {
                children: [
                    (0, r.jsx)(c.Text, {
                        variant: "text-sm/medium",
                        children: n,
                    }),
                    (0, r.jsx)(c.Text, {
                        variant: "text-sm/normal",
                        children: w.intl.format(w.t.MCLbvr, {
                            planName: i.name,
                            price: e,
                        }),
                    }),
                ],
            }),
        });
    }
    return (0, r.jsx)(Z, {
        title: t ? w.intl.string(w.t.enxcAg) : w.intl.string(w.t["Ms+6Zm"]),
        content: n,
    });
}
function Z(e) {
    let { title: t, content: n } = e;
    return (0, r.jsxs)("div", {
        className: D.row,
        children: [
            (0, r.jsx)(c.Text, {
                variant: "text-sm/medium",
                children: t,
            }),
            (0, r.jsx)(c.Text, {
                variant: "text-sm/medium",
                className: D.rowContent,
                children: n,
            }),
        ],
    });
}
function V(e) {
    let { type: t, title: n } = e,
        i = "warning" === t;
    return (0, r.jsx)(c.Wn, {
        messageType: i ? c.QYI.WARNING : c.QYI.ERROR,
        className: D.noticeBanner,
        children: (0, r.jsx)(c.Text, {
            variant: "text-sm/normal",
            children: n,
        }),
    });
}
function F(e) {
    let {
            app: t,
            storeListing: a,
            sku: o,
            subscription: d,
            isCancelled: _,
            guild: h,
            renewalSkuId: m,
            navigateToSwitchPlan: g,
        } = e,
        E = (0, A.OL)(o),
        { analyticsLocations: b } = (0, f.ZP)(),
        [O, v] = i.useState(!1),
        T = (0, p.q)(t.id),
        S = (0, s.e7)([I.Z], () => I.Z.getParentSKU(a.skuId), [a.skuId]),
        C = i.useMemo(() => (null == S ? [] : (0, R.$)(a.id, S, T.subscriptions)), [a.id, T, S]),
        N = 0 !== C.length,
        P = () => {
            (0, c.ZDy)(async () => {
                let { default: e } = await n.e("6284").then(n.bind(n, 257514));
                return (n) =>
                    (0, r.jsx)(
                        e,
                        M(L({}, n), {
                            application: t,
                            storeListing: a,
                            subscription: d,
                            guild: h,
                        }),
                    );
            });
        },
        x = async () => {
            try {
                v(!0);
                let { subscription: e } = await (0, u.pl)(d, b);
                if (null == e) return;
                (0, c.ZDy)(async () => {
                    let { default: t } = await n.e("18879").then(n.bind(n, 389262));
                    return (n) =>
                        (0, r.jsx)(
                            t,
                            M(L({}, n), {
                                storeListing: a,
                                subscription: y.Z.createFromServer(e),
                            }),
                        );
                });
            } finally {
                v(!1);
            }
        };
    return (0, r.jsxs)("div", {
        className: D.managementBtns,
        children: [
            E
                ? null
                : _
                  ? (0, r.jsx)(c.zxk, {
                        variant: "secondary",
                        size: "sm",
                        text: w.intl.string(w.t.QtMnkZ),
                        onClick: x,
                        loading: O,
                    })
                  : (0, r.jsx)(l.zx, {
                        color: l.zx.Colors.CUSTOM,
                        size: l.zx.Sizes.SMALL,
                        className: D.secondaryBtn,
                        onClick: P,
                        children: w.intl.string(w.t["E8G/tr"]),
                    }),
            N &&
                null != S &&
                !1 === _ &&
                (0, r.jsx)(c.zxk, {
                    variant: "primary",
                    size: "sm",
                    text: w.intl.string(w.t.R74ZBQ),
                    onClick: () => {
                        g({
                            currentSubscription: d,
                            alternativeListings: C,
                            app: t,
                            subscriptionGroup: S,
                            currentListing: a,
                            renewalSkuId: m,
                        });
                    },
                }),
        ],
    });
}
function H(e) {
    let { appId: t, listingBenefits: n } = e;
    return (0, r.jsx)(h.Z, {
        children: (e) =>
            (0, r.jsxs)("div", {
                className: D.benefits,
                children: [
                    (0, r.jsxs)("div", {
                        className: D.benefitsHeader,
                        children: [
                            e &&
                                (0, r.jsx)(c.Text, {
                                    variant: "text-sm/semibold",
                                    children: w.intl.string(w.t["mORL6+"]),
                                }),
                            (0, r.jsx)(h.Z.Toggle, {
                                className: D.benefitsBtn,
                                text: e ? w.intl.string(w.t.gsbFAw) : w.intl.string(w.t.Iwjfxc),
                            }),
                        ],
                    }),
                    e
                        ? n.map((e) => {
                              let { id: n, name: i, description: a, icon: s } = e;
                              return (0, r.jsx)(
                                  o.Gm,
                                  {
                                      header: i,
                                      icon: (0, C.n)(t, s),
                                      description: a,
                                  },
                                  n,
                              );
                          })
                        : null,
                ],
            }),
    });
}
function Y(e) {
    let { subscription: t, currentInvoicePreview: n, loadingState: i, isDeleted: a, isCancelled: o } = e;
    return null == n
        ? null
        : 0 === i
          ? (0, r.jsxs)("div", {
                className: D.payment,
                children: [
                    (0, r.jsx)(c.vwX, { children: w.intl.string(w.t.azZaZW) }),
                    (0, r.jsx)(c.$jN, { type: c.RAz.PULSING_ELLIPSIS }),
                ],
            })
          : 2 === i
            ? (0, r.jsx)("div", {
                  className: D.payment,
                  children: (0, r.jsxs)(c.qXd, {
                      color: c.DM8.DANGER,
                      style: { borderRadius: 0 },
                      children: [
                          w.intl.format(w.t.IIHUUF, { subscriptionId: t.id }),
                          (0, r.jsx)("br", {}),
                          w.intl.format(w.t.fh65ER, { helpLink: k }),
                      ],
                  }),
              })
            : (0, r.jsxs)("div", {
                  className: D.payment,
                  children: [
                      (0, r.jsx)(c.vwX, { children: w.intl.string(w.t.azZaZW) }),
                      (0, r.jsx)(b.Z, {
                          subscription: t,
                          currentInvoicePreview: n,
                          disabled: a || o,
                      }),
                  ],
              });
}
