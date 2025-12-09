n.d(t, {
    G: () => U,
    Z: () => G,
}),
    n(388685),
    n(953529);
var r = n(54381),
    i = n(473749),
    a = n(533594),
    o = n(621082),
    s = n(442837),
    l = n(681715),
    c = n(481060),
    u = n(355467),
    d = n(100527),
    f = n(906732),
    p = n(601911),
    _ = n(283836),
    m = n(887818),
    h = n(728345),
    g = n(565138),
    E = n(374649),
    b = n(908951),
    y = n(255078),
    O = n(430824),
    v = n(509545),
    S = n(55563),
    I = n(551428),
    T = n(937615),
    A = n(171246),
    C = n(889989),
    N = n(63487),
    P = n(547283),
    R = n(981631),
    D = n(388032),
    w = n(608848);
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
    let { subscription: _, navigateToSwitchPlan: m, loadingState: b } = e,
        y = null == (t = _.metadata) ? void 0 : t.application_subscription_guild_id,
        { renewalMutations: T, planId: C } = _,
        {
            appId: P,
            plan: x,
            storeListing: L,
            isGuildSubscription: j,
            subscriptionForGuild: M,
            sku: k,
            isCancelled: U,
            renewalPlan: G,
        } = (0, s.cj)([v.Z, S.Z, I.Z, O.Z], () => {
            let e,
                t = v.Z.get(C),
                n = null != t ? S.Z.get(t.skuId) : void 0,
                r = null == n ? void 0 : n.applicationId,
                i = null != t ? I.Z.getForSKU(t.skuId) : null,
                a = null != i && (0, A.KK)(i.skuFlags),
                o = a && null != y ? O.Z.getGuild(y) : void 0,
                s = (0, A.Jf)(_, n);
            if (!1 === s && null != T && T.items.length > 0) {
                var l;
                let t = T.items[0];
                e = null != (l = v.Z.get(t.planId)) ? l : void 0;
            }
            return {
                appId: r,
                isGuildSubscription: a,
                plan: t,
                sku: n,
                storeListing: i,
                subscriptionForGuild: o,
                isCancelled: s,
                renewalPlan: e,
            };
        }, [y, C, T, _]),
        { data: K } = (0, h.IX)(P),
        z = i.useMemo(() => (null != K ? (0, p.y)(K, 100) : null), [K]),
        q = null != (n = null == k ? void 0 : k.deleted) && n,
        Q = null != k && (0, A.OL)(k),
        X = _.status === R.O0b.PAST_DUE,
        { analyticsLocations: J } = (0, f.ZP)(),
        [$, ee] = (0, E.ED)({
            subscriptionId: _.id,
            renewal: !0,
            analyticsLocations: J,
            analyticsLocation: d.Z.APP_SUBSCRIPTION_PAYMENT_SOURCE_WITH_INVOICE,
        }),
        et = (null == ee ? void 0 : ee.code) === 100062 && null != y && null == M,
        en = (0, N.p)(_.currentPeriodEnd),
        er = 0 === b;
    return (0, r.jsxs)(a.l, {
        headerClassName: w.headerWrapper,
        header:
            !1 === er
                ? (0, r.jsxs)(r.Fragment, {
                      children: [
                          (0, r.jsxs)("div", {
                              className: w.headerContent,
                              children: [
                                  null != z &&
                                      (0, r.jsx)(c.Eep, {
                                          src: z.href,
                                          imageClassName: w.appIcon,
                                          width: 40,
                                          height: 40,
                                      }),
                                  (0, r.jsxs)("div", {
                                      children: [
                                          (0, r.jsx)(c.Heading, {
                                              variant: "heading-md/semibold",
                                              children:
                                                  null != (o = null == K ? void 0 : K.name)
                                                      ? o
                                                      : D.intl.string(D.t["7kqy7W"]),
                                          }),
                                          (0, r.jsx)(c.Text, {
                                              variant: "text-sm/medium",
                                              color: "text-default",
                                              children:
                                                  null != (l = null == x ? void 0 : x.name)
                                                      ? l
                                                      : D.intl.string(D.t.sqkbMK),
                                          }),
                                      ],
                                  }),
                              ],
                          }),
                          (0, r.jsx)("div", {
                              className: w.headerButtons,
                              children:
                                  null != K &&
                                  null != L &&
                                  null != k &&
                                  !1 === et &&
                                  (0, r.jsx)(H, {
                                      subscription: _,
                                      app: K,
                                      guild: M,
                                      sku: k,
                                      storeListing: L,
                                      isCancelled: U,
                                      navigateToSwitchPlan: m,
                                      renewalSkuId: null == G ? void 0 : G.skuId,
                                  }),
                          }),
                      ],
                  })
                : (0, r.jsx)(c.$jN, { type: c.RAz.PULSING_ELLIPSIS }),
        children: [
            U &&
                (0, r.jsx)(V, {
                    type: "warning",
                    title: Q
                        ? D.intl.formatToPlainString(D.t.QOnM1y, { subscriptionPeriodEnd: en })
                        : D.intl.formatToPlainString(D.t.HOaZu8, { subscriptionPeriodEnd: en }),
                }),
            et &&
                (0, r.jsx)(V, {
                    type: "warning",
                    title: D.intl.formatToPlainString(D.t.HOaZu8, { subscriptionPeriodEnd: en }),
                }),
            X &&
                (0, r.jsx)(V, {
                    type: "danger",
                    title: D.intl.string(D.t.fvOqBo),
                }),
            (0, r.jsxs)("div", {
                className: w.details,
                children: [
                    (0, r.jsx)(F, {
                        title: D.intl.string(D.t["5D/KEH"]),
                        content: j
                            ? (0, r.jsxs)(r.Fragment, {
                                  children: [
                                      (0, r.jsxs)("span", {
                                          className: w.subscriptionTypeRow,
                                          children: [(0, r.jsx)(c.QTo, { size: "xs" }), D.intl.string(D.t.QjL3vn)],
                                      }),
                                      null != M &&
                                          (0, r.jsxs)("span", {
                                              className: w.guildSubscriptionContentRow,
                                              children: [
                                                  (0, r.jsx)(c.Text, {
                                                      variant: "text-sm/normal",
                                                      color: "text-muted",
                                                      children: D.intl.format(D.t["7ZD8p1"], { guildName: M.name }),
                                                  }),
                                                  (0, r.jsx)(g.Z, {
                                                      guild: M,
                                                      size: g.Z.Sizes.MINI,
                                                  }),
                                              ],
                                          }),
                                  ],
                              })
                            : (0, r.jsxs)("span", {
                                  className: w.subscriptionTypeRow,
                                  children: [(0, r.jsx)(c.tBG, { size: "xs" }), D.intl.string(D.t["6anEVv"])],
                              }),
                    }),
                    (0, r.jsx)(Z, {
                        invoicePreview: $,
                        subscriptionPlan: x,
                    }),
                    (0, r.jsx)(F, {
                        title: D.intl.string(D.t.dnUzb6),
                        content: (0, N.p)(null != (u = _.createdAt) ? u : _.currentPeriodStart),
                    }),
                    (0, r.jsx)(B, {
                        isCancelled: U,
                        subscriptionPeriodEnd: en,
                        renewalPlan: G,
                    }),
                ],
            }),
            (0, r.jsx)(W, {
                subscription: _,
                currentInvoicePreview: $,
                loadingState: b,
                isDeleted: q,
                isCancelled: U,
            }),
            null != K &&
                (null == L ? void 0 : L.benefits) != null &&
                L.benefits.length > 0 &&
                (0, r.jsx)(Y, {
                    appId: K.id,
                    listingBenefits: L.benefits,
                }),
        ],
    });
}
function Z(e) {
    let { subscriptionPlan: t, invoicePreview: n } = e;
    if (null == t)
        return (0, r.jsx)(F, {
            title: D.intl.string(D.t.KI7ERx),
            content: "",
        });
    let i = (0, T.og)((0, T.T4)(t.price, t.currency), t.interval, t.intervalCount),
        a = null == n ? void 0 : n.findInvoiceItemByPlanId(t.id);
    if (null == a)
        return (0, r.jsx)(F, {
            title: D.intl.string(D.t.KI7ERx),
            content: i,
        });
    let o = (0, T.og)((0, T.T4)(a.subscriptionPlanPrice, t.currency), t.interval, t.intervalCount);
    return (0, r.jsx)(F, {
        title: D.intl.string(D.t.KI7ERx),
        content: (0, r.jsxs)(r.Fragment, {
            children: [
                (0, r.jsx)(c.Text, {
                    variant: "text-sm/semibold",
                    children: o,
                }),
                o !== i &&
                    (0, r.jsx)(l.u, {
                        text: D.intl.format(D.t["6DoE57"], { listPrice: i }),
                        position: "bottom",
                        children: (0, r.jsx)(c.Text, {
                            variant: "text-xs/medium",
                            color: "text-muted",
                            children: (0, r.jsx)("s", { children: i }),
                        }),
                    }),
            ],
        }),
    });
}
function B(e) {
    let { isCancelled: t, subscriptionPeriodEnd: n, renewalPlan: i } = e;
    if (null != i) {
        let e = (0, T.og)((0, T.T4)(i.price, i.currency), i.interval, i.intervalCount);
        return (0, r.jsx)(F, {
            title: D.intl.string(D.t.hIhAM3),
            content: (0, r.jsxs)(r.Fragment, {
                children: [
                    (0, r.jsx)(c.Text, {
                        variant: "text-sm/medium",
                        children: n,
                    }),
                    (0, r.jsx)(c.Text, {
                        variant: "text-sm/normal",
                        children: D.intl.format(D.t.MCLbvj, {
                            planName: i.name,
                            price: e,
                        }),
                    }),
                ],
            }),
        });
    }
    return (0, r.jsx)(F, {
        title: t ? D.intl.string(D.t.enxcAl) : D.intl.string(D.t["Ms+6Zq"]),
        content: n,
    });
}
function F(e) {
    let { title: t, content: n } = e;
    return (0, r.jsxs)("div", {
        className: w.row,
        children: [
            (0, r.jsx)(c.Text, {
                variant: "text-sm/medium",
                children: t,
            }),
            (0, r.jsx)(c.Text, {
                variant: "text-sm/medium",
                className: w.rowContent,
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
        className: w.noticeBanner,
        children: (0, r.jsx)(c.Text, {
            variant: "text-sm/normal",
            children: n,
        }),
    });
}
function H(e) {
    let {
            app: t,
            storeListing: a,
            sku: o,
            subscription: l,
            isCancelled: d,
            guild: p,
            renewalSkuId: m,
            navigateToSwitchPlan: h,
        } = e,
        g = (0, A.OL)(o),
        { analyticsLocations: E } = (0, f.ZP)(),
        [b, O] = i.useState(!1),
        v = (0, _.q)(t.id),
        I = (0, s.e7)([S.Z], () => S.Z.getParentSKU(a.skuId), [a.skuId]),
        T = i.useMemo(() => (null == I ? [] : (0, P.$)(a.id, I, v.subscriptions)), [a.id, v, I]),
        C = 0 !== T.length,
        N = () => {
            (0, c.ZDy)(async () => {
                let { default: e } = await n.e("6284").then(n.bind(n, 257514));
                return (n) =>
                    (0, r.jsx)(
                        e,
                        M(L({}, n), {
                            application: t,
                            storeListing: a,
                            subscription: l,
                            guild: p,
                        }),
                    );
            });
        },
        R = async () => {
            try {
                O(!0);
                let { subscription: e } = await (0, u.pl)(l, E);
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
                O(!1);
            }
        };
    return (0, r.jsxs)("div", {
        className: w.managementBtns,
        children: [
            g
                ? null
                : d
                  ? (0, r.jsx)(c.Button, {
                        variant: "secondary",
                        size: "sm",
                        text: D.intl.string(D.t.QtMnkW),
                        onClick: R,
                        loading: b,
                    })
                  : (0, r.jsx)(c.Button, {
                        variant: "secondary",
                        size: "sm",
                        text: D.intl.string(D.t["E8G/tr"]),
                        onClick: N,
                    }),
            C &&
                null != I &&
                !1 === d &&
                (0, r.jsx)(c.Button, {
                    variant: "primary",
                    size: "sm",
                    text: D.intl.string(D.t.R74ZBR),
                    onClick: () => {
                        h({
                            currentSubscription: l,
                            alternativeListings: T,
                            app: t,
                            subscriptionGroup: I,
                            currentListing: a,
                            renewalSkuId: m,
                        });
                    },
                }),
        ],
    });
}
function Y(e) {
    let { appId: t, listingBenefits: n } = e;
    return (0, r.jsx)(m.Z, {
        children: (e) =>
            (0, r.jsxs)("div", {
                className: w.benefits,
                children: [
                    (0, r.jsxs)("div", {
                        className: w.benefitsHeader,
                        children: [
                            e &&
                                (0, r.jsx)(c.Text, {
                                    variant: "text-sm/semibold",
                                    children: D.intl.string(D.t.mORL67),
                                }),
                            (0, r.jsx)(m.Z.Toggle, {
                                className: w.benefitsBtn,
                                text: e ? D.intl.string(D.t.gsbFAw) : D.intl.string(D.t.IwjfxV),
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
function W(e) {
    let { subscription: t, currentInvoicePreview: n, loadingState: i, isDeleted: a, isCancelled: o } = e;
    return null == n
        ? null
        : 0 === i
          ? (0, r.jsx)("div", {
                className: w.payment,
                children: (0, r.jsx)(c.gNt, {
                    label: D.intl.string(D.t.azZaZa),
                    children: (0, r.jsx)(c.$jN, { type: c.RAz.PULSING_ELLIPSIS }),
                }),
            })
          : 2 === i
            ? (0, r.jsx)("div", {
                  className: w.payment,
                  children: (0, r.jsxs)(c.qXd, {
                      color: c.DM8.DANGER,
                      style: { borderRadius: 0 },
                      children: [
                          D.intl.format(D.t.IIHUUF, { subscriptionId: t.id }),
                          (0, r.jsx)("br", {}),
                          D.intl.format(D.t.fh65ES, { helpLink: k }),
                      ],
                  }),
              })
            : (0, r.jsx)("div", {
                  className: w.payment,
                  children: (0, r.jsx)(c.gNt, {
                      label: D.intl.string(D.t.azZaZa),
                      children: (0, r.jsx)(b.Z, {
                          subscription: t,
                          currentInvoicePreview: n,
                          disabled: a || o,
                      }),
                  }),
              });
}
