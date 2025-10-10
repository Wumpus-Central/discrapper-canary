n.d(t, {
    G: () => k,
    Z: () => U,
}),
    n(388685),
    n(953529);
var r = n(951288),
    i = n(647438),
    a = n(533594),
    o = n(621082),
    s = n(442837),
    l = n(481060),
    c = n(355467),
    u = n(100527),
    d = n(906732),
    f = n(601911),
    _ = n(283836),
    p = n(887818),
    h = n(728345),
    m = n(565138),
    g = n(374649),
    E = n(908951),
    b = n(255078),
    y = n(430824),
    O = n(509545),
    v = n(55563),
    I = n(551428),
    T = n(937615),
    S = n(171246),
    A = n(889989),
    C = n(63487),
    N = n(547283),
    R = n(981631),
    P = n(388032),
    w = n(608848);
function D(e, t, n) {
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
                D(e, t, n[t]);
            });
    }
    return e;
}
function x(e, t) {
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
            : x(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
let j = "https://support.discord.com/hc/en-us";
var k = (function (e) {
    return (e[(e.LOADING = 0)] = "LOADING"), (e[(e.DONE = 1)] = "DONE"), (e[(e.ERROR = 2)] = "ERROR"), e;
})({});
function U(e) {
    var t, n, o, c, _;
    let { subscription: p, navigateToSwitchPlan: E, loadingState: b } = e,
        A = null == (t = p.metadata) ? void 0 : t.application_subscription_guild_id,
        { renewalMutations: N, planId: D } = p,
        {
            appId: L,
            plan: x,
            storeListing: M,
            price: j,
            isGuildSubscription: k,
            subscriptionForGuild: U,
            sku: Y,
            isCancelled: W,
            renewalPlan: K,
        } = (0, s.cj)([O.Z, v.Z, I.Z, y.Z], () => {
            let e,
                t = O.Z.get(D),
                n = null != t ? v.Z.get(t.skuId) : void 0,
                r = null == n ? void 0 : n.applicationId,
                i = null != t ? I.Z.getForSKU(t.skuId) : null,
                a = null != t ? (0, T.og)((0, T.T4)(t.price, t.currency), t.interval, t.intervalCount) : null,
                o = null != i && (0, S.KK)(i.skuFlags),
                s = o && null != A ? y.Z.getGuild(A) : void 0,
                l = (0, S.Jf)(p, n);
            if (!1 === l && null != N && N.items.length > 0) {
                var c;
                let t = N.items[0];
                e = null != (c = O.Z.get(t.planId)) ? c : void 0;
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
        }, [A, D, N, p]),
        { data: z } = (0, h.IX)(L),
        q = i.useMemo(() => (null != z ? (0, f.y)(z, 100) : null), [z]),
        X = null != (n = null == Y ? void 0 : Y.deleted) && n,
        Q = null != Y && (0, S.OL)(Y),
        J = p.status === R.O0b.PAST_DUE,
        { analyticsLocations: $ } = (0, d.ZP)(),
        [ee, et] = (0, g.ED)({
            subscriptionId: p.id,
            renewal: !0,
            analyticsLocations: $,
            analyticsLocation: u.Z.APP_SUBSCRIPTION_PAYMENT_SOURCE_WITH_INVOICE,
        }),
        en = (null == et ? void 0 : et.code) === 100062 && null != A && null == U,
        er = (0, C.p)(p.currentPeriodEnd),
        ei = 0 === b;
    return (0, r.jsxs)(a.l, {
        headerClassName: w.headerWrapper,
        header:
            !1 === ei
                ? (0, r.jsxs)(r.Fragment, {
                      children: [
                          (0, r.jsxs)("div", {
                              className: w.headerContent,
                              children: [
                                  null != q &&
                                      (0, r.jsx)(l.Eep, {
                                          src: q.href,
                                          imageClassName: w.appIcon,
                                          width: 40,
                                          height: 40,
                                      }),
                                  (0, r.jsxs)("div", {
                                      children: [
                                          (0, r.jsx)(l.X6q, {
                                              variant: "heading-md/semibold",
                                              children:
                                                  null != (o = null == z ? void 0 : z.name)
                                                      ? o
                                                      : P.intl.string(P.t["7kqy7e"]),
                                          }),
                                          (0, r.jsx)(l.Text, {
                                              variant: "text-sm/medium",
                                              color: "header-secondary",
                                              children:
                                                  null != (c = null == x ? void 0 : x.name)
                                                      ? c
                                                      : P.intl.string(P.t.sqkbMD),
                                          }),
                                      ],
                                  }),
                              ],
                          }),
                          (0, r.jsx)("div", {
                              className: w.headerButtons,
                              children:
                                  null != z &&
                                  null != M &&
                                  null != Y &&
                                  !1 === en &&
                                  (0, r.jsx)(F, {
                                      subscription: p,
                                      app: z,
                                      sku: Y,
                                      storeListing: M,
                                      isCancelled: W,
                                      navigateToSwitchPlan: E,
                                      renewalSkuId: null == K ? void 0 : K.skuId,
                                  }),
                          }),
                      ],
                  })
                : (0, r.jsx)(l.$jN, { type: l.RAz.PULSING_ELLIPSIS }),
        children: [
            W &&
                (0, r.jsx)(Z, {
                    type: "warning",
                    title: Q
                        ? P.intl.formatToPlainString(P.t.QOnM19, { subscriptionPeriodEnd: er })
                        : P.intl.formatToPlainString(P.t.HOaZu7, { subscriptionPeriodEnd: er }),
                }),
            en &&
                (0, r.jsx)(Z, {
                    type: "warning",
                    title: P.intl.formatToPlainString(P.t.HOaZu7, { subscriptionPeriodEnd: er }),
                }),
            J &&
                (0, r.jsx)(Z, {
                    type: "danger",
                    title: P.intl.string(P.t.fvOqBg),
                }),
            (0, r.jsxs)("div", {
                className: w.details,
                children: [
                    (0, r.jsx)(B, {
                        title: P.intl.string(P.t["5D/KEB"]),
                        content: k
                            ? (0, r.jsxs)(r.Fragment, {
                                  children: [
                                      (0, r.jsxs)("span", {
                                          className: w.subscriptionTypeRow,
                                          children: [(0, r.jsx)(l.QTo, { size: "xs" }), P.intl.string(P.t.QjL3vr)],
                                      }),
                                      null != U &&
                                          (0, r.jsxs)("span", {
                                              className: w.guildSubscriptionContentRow,
                                              children: [
                                                  (0, r.jsx)(l.Text, {
                                                      variant: "text-sm/normal",
                                                      color: "text-muted",
                                                      children: P.intl.format(P.t["7ZD8p6"], { guildName: U.name }),
                                                  }),
                                                  (0, r.jsx)(m.Z, {
                                                      guild: U,
                                                      size: m.Z.Sizes.MINI,
                                                  }),
                                              ],
                                          }),
                                  ],
                              })
                            : (0, r.jsxs)("span", {
                                  className: w.subscriptionTypeRow,
                                  children: [(0, r.jsx)(l.tBG, { size: "xs" }), P.intl.string(P.t["6anEVl"])],
                              }),
                    }),
                    null != j &&
                        (0, r.jsx)(B, {
                            title: P.intl.string(P.t.KI7ER0),
                            content: j,
                        }),
                    (0, r.jsx)(B, {
                        title: P.intl.string(P.t.dnUzb2),
                        content: (0, C.p)(null != (_ = p.createdAt) ? _ : p.currentPeriodStart),
                    }),
                    (0, r.jsx)(G, {
                        isCancelled: W,
                        subscriptionPeriodEnd: er,
                        renewalPlan: K,
                    }),
                ],
            }),
            (0, r.jsx)(H, {
                subscription: p,
                currentInvoicePreview: ee,
                loadingState: b,
                isDeleted: X,
                isCancelled: W,
            }),
            null != z &&
                (null == M ? void 0 : M.benefits) != null &&
                M.benefits.length > 0 &&
                (0, r.jsx)(V, {
                    appId: z.id,
                    listingBenefits: M.benefits,
                }),
        ],
    });
}
function G(e) {
    let { isCancelled: t, subscriptionPeriodEnd: n, renewalPlan: i } = e;
    if (null != i) {
        let e = (0, T.og)((0, T.T4)(i.price, i.currency), i.interval, i.intervalCount);
        return (0, r.jsx)(B, {
            title: P.intl.string(P.t.hIhAMz),
            content: (0, r.jsxs)(r.Fragment, {
                children: [
                    (0, r.jsx)(l.Text, {
                        variant: "text-sm/medium",
                        children: n,
                    }),
                    (0, r.jsx)(l.Text, {
                        variant: "text-sm/normal",
                        children: P.intl.format(P.t.MCLbvr, {
                            planName: i.name,
                            price: e,
                        }),
                    }),
                ],
            }),
        });
    }
    return (0, r.jsx)(B, {
        title: t ? P.intl.string(P.t.enxcAg) : P.intl.string(P.t["Ms+6Zm"]),
        content: n,
    });
}
function B(e) {
    let { title: t, content: n } = e;
    return (0, r.jsxs)("div", {
        className: w.row,
        children: [
            (0, r.jsx)(l.Text, {
                variant: "text-sm/medium",
                children: t,
            }),
            (0, r.jsx)(l.Text, {
                variant: "text-sm/medium",
                className: w.rowContent,
                children: n,
            }),
        ],
    });
}
function Z(e) {
    let { type: t, title: n } = e,
        i = "warning" === t;
    return (0, r.jsx)(l.Wn, {
        messageType: i ? l.QYI.WARNING : l.QYI.ERROR,
        className: w.noticeBanner,
        children: (0, r.jsx)(l.Text, {
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
            subscription: u,
            isCancelled: f,
            guild: p,
            renewalSkuId: h,
            navigateToSwitchPlan: m,
        } = e,
        g = (0, S.OL)(o),
        { analyticsLocations: E } = (0, d.ZP)(),
        [y, O] = i.useState(!1),
        I = (0, _.q)(t.id),
        T = (0, s.e7)([v.Z], () => v.Z.getParentSKU(a.skuId), [a.skuId]),
        A = i.useMemo(() => (null == T ? [] : (0, N.$)(a.id, T, I.subscriptions)), [a.id, I, T]),
        C = 0 !== A.length,
        R = () => {
            (0, l.ZDy)(async () => {
                let { default: e } = await n.e("6284").then(n.bind(n, 257514));
                return (n) =>
                    (0, r.jsx)(
                        e,
                        M(L({}, n), {
                            application: t,
                            storeListing: a,
                            subscription: u,
                            guild: p,
                        }),
                    );
            });
        },
        D = async () => {
            try {
                O(!0);
                let { subscription: e } = await (0, c.pl)(u, E);
                if (null == e) return;
                (0, l.ZDy)(async () => {
                    let { default: t } = await n.e("18879").then(n.bind(n, 389262));
                    return (n) =>
                        (0, r.jsx)(
                            t,
                            M(L({}, n), {
                                storeListing: a,
                                subscription: b.Z.createFromServer(e),
                            }),
                        );
                });
            } finally {
                O(!1);
            }
        };
    return (0, r.jsxs)("div", {
        className: w.managementBtns,
        children: [
            g
                ? null
                : f
                  ? (0, r.jsx)(l.zxk, {
                        variant: "secondary",
                        size: "sm",
                        text: P.intl.string(P.t.QtMnkZ),
                        onClick: D,
                        loading: y,
                    })
                  : (0, r.jsx)(l.zxk, {
                        variant: "secondary",
                        size: "sm",
                        text: P.intl.string(P.t["E8G/tr"]),
                        onClick: R,
                    }),
            C &&
                null != T &&
                !1 === f &&
                (0, r.jsx)(l.zxk, {
                    variant: "primary",
                    size: "sm",
                    text: P.intl.string(P.t.R74ZBQ),
                    onClick: () => {
                        m({
                            currentSubscription: u,
                            alternativeListings: A,
                            app: t,
                            subscriptionGroup: T,
                            currentListing: a,
                            renewalSkuId: h,
                        });
                    },
                }),
        ],
    });
}
function V(e) {
    let { appId: t, listingBenefits: n } = e;
    return (0, r.jsx)(p.Z, {
        children: (e) =>
            (0, r.jsxs)("div", {
                className: w.benefits,
                children: [
                    (0, r.jsxs)("div", {
                        className: w.benefitsHeader,
                        children: [
                            e &&
                                (0, r.jsx)(l.Text, {
                                    variant: "text-sm/semibold",
                                    children: P.intl.string(P.t["mORL6+"]),
                                }),
                            (0, r.jsx)(p.Z.Toggle, {
                                className: w.benefitsBtn,
                                text: e ? P.intl.string(P.t.gsbFAw) : P.intl.string(P.t.Iwjfxc),
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
                                      icon: (0, A.n)(t, s),
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
function H(e) {
    let { subscription: t, currentInvoicePreview: n, loadingState: i, isDeleted: a, isCancelled: o } = e;
    return null == n
        ? null
        : 0 === i
          ? (0, r.jsxs)("div", {
                className: w.payment,
                children: [
                    (0, r.jsx)(l.vwX, { children: P.intl.string(P.t.azZaZW) }),
                    (0, r.jsx)(l.$jN, { type: l.RAz.PULSING_ELLIPSIS }),
                ],
            })
          : 2 === i
            ? (0, r.jsx)("div", {
                  className: w.payment,
                  children: (0, r.jsxs)(l.qXd, {
                      color: l.DM8.DANGER,
                      style: { borderRadius: 0 },
                      children: [
                          P.intl.format(P.t.IIHUUF, { subscriptionId: t.id }),
                          (0, r.jsx)("br", {}),
                          P.intl.format(P.t.fh65ER, { helpLink: j }),
                      ],
                  }),
              })
            : (0, r.jsxs)("div", {
                  className: w.payment,
                  children: [
                      (0, r.jsx)(l.vwX, { children: P.intl.string(P.t.azZaZW) }),
                      (0, r.jsx)(E.Z, {
                          subscription: t,
                          currentInvoicePreview: n,
                          disabled: a || o,
                      }),
                  ],
              });
}
