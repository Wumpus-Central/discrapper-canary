n.d(t, { Ay: () => ee, Hy: () => J, Sb: () => $, TC: () => q });
var i = n(627968),
    s = n(64700),
    l = n(503698),
    a = n.n(l),
    r = n(989349),
    o = n.n(r),
    d = n(311907),
    u = n(827734),
    c = n(695366),
    g = n(834730),
    m = n(534514),
    _ = n(359778),
    A = n(289873),
    h = n(270003),
    p = n(452027),
    x = n(73153),
    E = n(793574),
    T = n(688810),
    S = n(531260),
    f = n(235986),
    b = n(769015),
    C = n(532794),
    v = n(832946),
    N = n(287809),
    I = n(954571),
    y = n(975571),
    j = n(927578),
    O = n(83617),
    R = n(543767),
    L = n(526292),
    D = n(155984),
    P = n(131168),
    G = n(726532),
    M = n(947418),
    U = n(687944),
    k = n(972710),
    w = n(538511),
    V = n(420139),
    B = n(434395),
    F = n(788868),
    z = n(652215),
    H = n(985018),
    Y = n(633287);
function X() {
    return (
        s.useEffect(() => {
            I.default.track(z.HAw.TOOLTIP_VIEWED, { type: "subscription_settings_missing_payment_method" });
        }, []),
        (0, i.jsxs)("div", {
            className: Y.Zz,
            children: [
                (0, i.jsx)(c.E, {
                    size: "custom",
                    width: 20,
                    height: 20,
                    className: Y.Sh,
                    color: u.A.unsafe_rawColors.YELLOW_260.css,
                }),
                (0, i.jsx)(g.E, { className: Y.Cy, variant: "text-sm/normal", children: H.intl.string(H.t.xFHEMa) }),
            ],
        })
    );
}
function K() {
    return (
        s.useEffect(() => {
            I.default.track(z.HAw.TOOLTIP_VIEWED, { type: "subscription_settings_invalid_payment_method" });
        }, []),
        (0, i.jsxs)("div", {
            className: Y.Zz,
            children: [
                (0, i.jsx)(c.E, {
                    size: "custom",
                    width: 20,
                    height: 20,
                    className: Y.Sh,
                    color: u.A.unsafe_rawColors.RED_360.css,
                }),
                (0, i.jsx)(g.E, { className: Y.Cy, variant: "text-sm/normal", children: H.intl.string(H.t["j+nuQZ"]) }),
            ],
        })
    );
}
function W(e) {
    let { daysPastDue: t, subscription: n, openInvoiceId: l } = e,
        { analyticsLocations: a } = (0, T.Ay)(E.A.PAST_DUE_ONE_TIME_PAYMENT_METHOD_BANNER);
    return (
        s.useEffect(() => {
            I.default.track(z.HAw.TOOLTIP_VIEWED, { type: "subscription_settings_invalid_payment_method" });
        }, []),
        (0, i.jsxs)("div", {
            className: Y.Zz,
            children: [
                (0, i.jsx)(c.E, {
                    size: "custom",
                    width: 20,
                    height: 20,
                    className: Y.Sh,
                    color: u.A.unsafe_rawColors.YELLOW_260.css,
                }),
                (0, i.jsx)(g.E, {
                    className: Y.Cy,
                    variant: "text-sm/normal",
                    children: H.intl.format(H.t["0nbf/G"], {
                        daysPastDue: t,
                        paymentModalRedirect: () => {
                            (0, C.A)({ initialPlanId: n.planIdFromItems, openInvoiceId: l, analyticsLocations: a });
                        },
                    }),
                }),
            ],
        })
    );
}
function Z(e) {
    let { subscription: t, renewalInvoicePreview: n, openInvoice: s, className: l, fractionalPremiumInfo: r } = e;
    return (0, i.jsxs)("div", {
        className: a()(Y.KF, l),
        children: [
            (0, i.jsx)(m.D, { variant: "heading-md/semibold", className: Y.QL, children: H.intl.string(H.t.KXQjfc) }),
            (0, i.jsx)("div", { children: j.Ay.getBillingInformationString(t, n, s, !1, r) }),
        ],
    });
}
function q() {
    let e = (0, d.bG)([N.default], () => N.default.getCurrentUser()),
        t = null != e && e.isPremiumGroupMember();
    return (0, i.jsxs)("div", {
        children: [
            (0, i.jsx)(m.D, {
                variant: "heading-lg/semibold",
                className: Y.Gf,
                children: H.intl.string(H.t["/gs+Pz"]),
            }),
            (0, i.jsx)("p", { className: Y.yV, children: H.intl.string(H.t.D8UpUo) }),
            !t &&
                (0, i.jsx)(_.Z, {
                    className: Y.wb,
                    type: _.Z.Types.CUSTOM,
                    children: (0, i.jsxs)(f.A, {
                        align: f.A.Align.CENTER,
                        children: [
                            (0, i.jsx)(b.A, { game: null, size: b.M.SMALL, className: Y.pV }),
                            (0, i.jsx)("span", { className: Y.O, children: H.intl.string(H.t.xCRgr1) }),
                        ],
                    }),
                }),
            t && (0, i.jsx)(G.i, { currentUser: e }),
        ],
    });
}
function Q(e) {
    let {
            subscription: t,
            analyticsLocation: n,
            paymentSource: s,
            busy: l,
            fromStandaloneBillingPage: r,
            showInvalidPaymentMethod: o,
            showNoPaymentMethod: d,
            fetchedCurrentInvoicePreview: u,
            fetchedRenewalInvoicePreview: c,
            fetchedOpenInvoice: g,
            isPremiumGroup: m,
        } = e,
        { analyticsLocations: _ } = (0, T.Ay)(E.A.SUBSCRIPTION_DETAILS),
        x = null != u ? {} : { subscriptionId: t.id, renewal: !0, analyticsLocations: _, analyticsLocation: n },
        [f] = (0, R.Kq)(x);
    f = u ?? f;
    let b =
            null != c
                ? {}
                : {
                      subscriptionId: t.id,
                      renewal: !0,
                      applyEntitlements: !0,
                      analyticsLocations: _,
                      analyticsLocation: n,
                  },
        [C] = (0, R.Kq)(b);
    C = c ?? C;
    let v = (0, S.A)(),
        N = (0, P.p)(),
        I = (0, L.nf)(),
        y = j.Ay.isBaseSubscriptionCanceled(t),
        D = (0, M.v)(t, s);
    if (null == f || null == C) return (0, i.jsx)(A.y, {});
    let G = D ? (0, L.Bv)(C) : null,
        B = null != G || (null != I && (I.discountId === F.q || I.discountId === F.EG)),
        X =
            D && ((y && null != N) || (!y && B))
                ? (0, i.jsx)(U.A, {
                      subscription: t,
                      invoicePreview: C,
                      paymentSource: s,
                      discountOffer: N,
                      renewalChurnDiscountInfo: G,
                      discountInfo: I,
                      isLoading: l,
                      analyticsLocation: n,
                  })
                : (0, i.jsx)(w.A, {
                      subscription: t,
                      currentInvoicePreview: f,
                      renewalInvoicePreview: C,
                      paymentSource: s,
                      busy: l,
                      analyticsLocation: n,
                  });
    return (0, i.jsxs)(i.Fragment, {
        children: [
            (0, i.jsxs)("div", {
                className: Y.fj,
                children: [
                    !m && X,
                    (0, i.jsx)(k.C, {
                        subscription: t,
                        renewalInvoicePreview: f,
                        fromStandaloneBillingPage: r,
                        fractionalPremiumInfo: v,
                        analyticsLocation: n,
                    }),
                ],
            }),
            (0, i.jsx)("div", {
                children: (0, i.jsx)(h.n, {
                    label: H.intl.string(H.t.Sb6wI1),
                    children: (0, i.jsxs)("div", {
                        className: Y.zH,
                        children: [
                            (0, i.jsx)(Z, {
                                subscription: t,
                                renewalInvoicePreview: C,
                                className: Y.g4,
                                fractionalPremiumInfo: v,
                                openInvoice: g,
                            }),
                            (0, i.jsx)("div", {
                                className: a()(Y.g4, { [Y.sE]: o }),
                                children: (0, i.jsx)(p.D, {
                                    label:
                                        t.isPurchasedExternally && null != t.paymentGateway
                                            ? H.intl.formatToPlainString(H.t["rTk9v/"], {
                                                  paymentGatewayName: z.qmC[t.paymentGateway],
                                              })
                                            : H.intl.string(H.t.iRzXKd),
                                    children: (0, i.jsx)(V.A, {
                                        subscription: t,
                                        onPaymentSourceAdded: O.c_,
                                        highlightAddPaymentMethodButton: d || o,
                                        analyticsLocation: n,
                                        currentInvoicePreview: f,
                                        dropdownClassName: Y.sp,
                                    }),
                                }),
                            }),
                        ],
                    }),
                }),
            }),
        ],
    });
}
let J = new Set([z.Dmq.ACTIVE, z.Dmq.PAST_DUE, z.Dmq.CANCELED, z.Dmq.PAUSE_PENDING, z.Dmq.PAUSED]);
function $() {
    return (
        s.useEffect(() => {
            I.default.track(z.HAw.TOOLTIP_VIEWED, { type: "subscription_settings_duplicate_subscriptions" });
        }, []),
        (0, i.jsxs)("div", {
            className: Y.oU,
            children: [
                (0, i.jsx)(c.E, { size: "custom", width: 20, height: 20, color: u.A.unsafe_rawColors.RED_360.css }),
                (0, i.jsx)(g.E, {
                    className: Y.dk,
                    variant: "text-sm/normal",
                    children: H.intl.format(H.t["6eXiiC"], { helpCenterLink: y.A.getArticleURL(z.MVz.NITRO) }),
                }),
            ],
        })
    );
}
function ee(e) {
    let t,
        {
            subscription: n,
            subscriptions: l,
            paymentSource: a,
            busy: r,
            fromStandaloneBillingPage: u = !0,
            analyticsLocation: c,
            shouldRefetchInvoicesOnSubscriptionUpdate: g,
        } = e;
    null != l && null != l[0] && (n = l[0]);
    let _ = (0, d.bG)([N.default], () => N.default.getCurrentUser()),
        { analyticsLocations: p } = (0, T.Ay)(E.A.SUBSCRIPTION_DETAILS),
        S = (0, P.p)(),
        f = null != l ? l.slice(1) : [],
        [b, C] = s.useState(0);
    s.useEffect(() => {
        if (!g) return;
        let e = (e) => {
            e.subscription.id === n.id && C((e) => e + 1);
        };
        return (
            x.h.subscribe("BILLING_SUBSCRIPTION_UPDATE_SUCCESS", e),
            () => {
                x.h.unsubscribe("BILLING_SUBSCRIPTION_UPDATE_SUCCESS", e);
            }
        );
    }, [n.id, g]);
    let [I] = (0, R.Kq)({
            subscriptionId: n.id,
            renewal: !0,
            analyticsLocations: p,
            analyticsLocation: c,
            fetchKey: b,
        }),
        [y] = (0, R.Kq)({
            subscriptionId: n.id,
            renewal: !0,
            applyEntitlements: !0,
            analyticsLocations: p,
            analyticsLocation: c,
            userDiscountOfferId: S?.id,
            fetchKey: b,
        }),
        j = a?.invalid,
        O = (0, d.bG)([N.default], () => N.default.getCurrentUser()?.hasFreePremium()),
        L = o()(n.currentPeriodEnd),
        M = null != n.paymentSourceId,
        U = y?.total ?? 0,
        k =
            !M &&
            U > 0 &&
            (7 >= L.diff(o()(), "days") || n.status === z.Dmq.PAST_DUE) &&
            !O &&
            !n.isPurchasedExternally,
        w = j && n.status === z.Dmq.PAST_DUE && !O && !n.isPurchasedExternally,
        V = (0, D.l)(),
        F = !O && V,
        Z = n?.status === z.Dmq.PAST_DUE,
        q = Z ? o()().diff(o()(n.currentPeriodStart), "days") : 0,
        J = null != _ && _.isPremiumGroupPrimary(),
        $ = n.hasAnyPremiumGroup,
        [ee] = (0, R.C8)({ subscriptionId: n.id, preventFetch: !(F || Z) });
    return null == I || null == y
        ? (0, i.jsx)(A.y, {})
        : (null != n.renewalMutations &&
              ((n.renewalMutations.planId !== n.planId && !(0, v.m1)(n.renewalMutations.planId)) ||
                  n.hasExternalPlanChange) &&
              (t = (0, i.jsx)(B.A, {
                  subscription: n,
                  renewalMutations: n.renewalMutations,
                  className: Y.Il,
                  analyticsLocation: c,
              })),
          (0, i.jsxs)(h.n, {
              label: H.intl.string(H.t["/gs+Pz"]),
              description: H.intl.string(H.t.D8UpUo),
              children: [
                  k ? (0, i.jsx)(X, {}) : null,
                  w ? (0, i.jsx)(K, {}) : null,
                  F && null != ee ? (0, i.jsx)(W, { daysPastDue: q, subscription: n, openInvoiceId: ee.id }) : null,
                  J && $ && (0, i.jsx)(G.j, { subscription: n, analyticsLocations: p }),
                  t,
                  (0, i.jsxs)("div", {
                      children: [
                          (0, i.jsx)("div", {
                              className: f.length > 0 ? Y.HZ : Y.__invalid_singleSubscription,
                              children: (0, i.jsx)(Q, {
                                  subscription: n,
                                  analyticsLocation: c,
                                  paymentSource: a,
                                  busy: r,
                                  fromStandaloneBillingPage: u,
                                  showNoPaymentMethod: k,
                                  showInvalidPaymentMethod: w,
                                  fetchedCurrentInvoicePreview: I,
                                  fetchedRenewalInvoicePreview: y,
                                  fetchedOpenInvoice: ee,
                                  isPremiumGroup: J,
                              }),
                          }),
                          f.map((e, t) =>
                              (0, i.jsxs)(
                                  "div",
                                  {
                                      className: Y.HZ,
                                      children: [
                                          (0, i.jsx)(m.D, {
                                              variant: "heading-md/semibold",
                                              className: Y.dd,
                                              children: "Duplicate Subscriptions",
                                          }),
                                          (0, i.jsx)(Q, {
                                              subscription: e,
                                              analyticsLocation: c,
                                              paymentSource: a,
                                              busy: r,
                                              fromStandaloneBillingPage: u,
                                              showNoPaymentMethod: k,
                                              showInvalidPaymentMethod: w,
                                              fetchedCurrentInvoicePreview: null,
                                              fetchedRenewalInvoicePreview: null,
                                              fetchedOpenInvoice: null,
                                              isPremiumGroup: !1,
                                          }),
                                      ],
                                  },
                                  t,
                              ),
                          ),
                      ],
                  }),
              ],
          }));
}
