n.d(t, { Ay: () => Z, Hy: () => W, Sb: () => K, TC: () => F });
var i = n(627968),
    s = n(64700),
    a = n(503698),
    l = n.n(a),
    r = n(989349),
    o = n.n(r),
    c = n(311907),
    d = n(827734),
    u = n(397927),
    _ = n(73153),
    m = n(793574),
    A = n(688810),
    g = n(531260),
    h = n(235986),
    x = n(769015),
    p = n(532794),
    E = n(832946),
    C = n(287809),
    T = n(954571),
    S = n(975571),
    I = n(927578),
    f = n(83617),
    N = n(543767),
    b = n(526292),
    j = n(155984),
    v = n(131168),
    O = n(726532),
    R = n(947418),
    y = n(687944),
    P = n(972710),
    L = n(538511),
    D = n(420139),
    M = n(434395),
    G = n(788868),
    U = n(652215),
    k = n(985018),
    V = n(595654);
function H() {
    return (
        s.useEffect(() => {
            T.default.track(U.HAw.TOOLTIP_VIEWED, { type: "subscription_settings_missing_payment_method" });
        }, []),
        (0, i.jsxs)("div", {
            className: V.Zz,
            children: [
                (0, i.jsx)(u.EpV, {
                    size: "custom",
                    width: 20,
                    height: 20,
                    className: V.Sh,
                    color: d.A.unsafe_rawColors.YELLOW_260.css,
                }),
                (0, i.jsx)(u.Text, { className: V.Cy, variant: "text-sm/normal", children: k.intl.string(k.t.xFHEMa) }),
            ],
        })
    );
}
function w() {
    return (
        s.useEffect(() => {
            T.default.track(U.HAw.TOOLTIP_VIEWED, { type: "subscription_settings_invalid_payment_method" });
        }, []),
        (0, i.jsxs)("div", {
            className: V.Zz,
            children: [
                (0, i.jsx)(u.EpV, {
                    size: "custom",
                    width: 20,
                    height: 20,
                    className: V.Sh,
                    color: d.A.unsafe_rawColors.RED_360.css,
                }),
                (0, i.jsx)(u.Text, {
                    className: V.Cy,
                    variant: "text-sm/normal",
                    children: k.intl.string(k.t["j+nuQZ"]),
                }),
            ],
        })
    );
}
function B(e) {
    let { daysPastDue: t, subscription: n, openInvoiceId: a } = e,
        { analyticsLocations: l } = (0, A.Ay)(m.A.PAST_DUE_ONE_TIME_PAYMENT_METHOD_BANNER);
    return (
        s.useEffect(() => {
            T.default.track(U.HAw.TOOLTIP_VIEWED, { type: "subscription_settings_invalid_payment_method" });
        }, []),
        (0, i.jsxs)("div", {
            className: V.Zz,
            children: [
                (0, i.jsx)(u.EpV, {
                    size: "custom",
                    width: 20,
                    height: 20,
                    className: V.Sh,
                    color: d.A.unsafe_rawColors.YELLOW_260.css,
                }),
                (0, i.jsx)(u.Text, {
                    className: V.Cy,
                    variant: "text-sm/normal",
                    children: k.intl.format(k.t["0nbf/G"], {
                        daysPastDue: t,
                        paymentModalRedirect: () => {
                            (0, p.A)({ initialPlanId: n.planIdFromItems, openInvoiceId: a, analyticsLocations: l });
                        },
                    }),
                }),
            ],
        })
    );
}
function Y(e) {
    let { subscription: t, renewalInvoicePreview: n, openInvoice: s, className: a, fractionalPremiumInfo: r } = e;
    return (0, i.jsxs)("div", {
        className: l()(V.KF, a),
        children: [
            (0, i.jsx)(u.Heading, {
                variant: "heading-md/semibold",
                className: V.QL,
                children: k.intl.string(k.t.KXQjfc),
            }),
            (0, i.jsx)("div", { children: I.Ay.getBillingInformationString(t, n, s, !1, r) }),
        ],
    });
}
function F() {
    let e = (0, c.bG)([C.default], () => C.default.getCurrentUser()),
        t = null != e && e.isPremiumGroupMember();
    return (0, i.jsxs)("div", {
        children: [
            (0, i.jsx)(u.Heading, {
                variant: "heading-lg/semibold",
                className: V.Gf,
                children: k.intl.string(k.t["/gs+Pz"]),
            }),
            (0, i.jsx)("p", { className: V.yV, children: k.intl.string(k.t.D8UpUo) }),
            !t &&
                (0, i.jsx)(u.ZpM, {
                    className: V.wb,
                    type: u.ZpM.Types.CUSTOM,
                    children: (0, i.jsxs)(h.A, {
                        align: h.A.Align.CENTER,
                        children: [
                            (0, i.jsx)(x.A, { game: null, size: x.M.SMALL, className: V.pV }),
                            (0, i.jsx)("span", { className: V.O, children: k.intl.string(k.t.xCRgr1) }),
                        ],
                    }),
                }),
            t && (0, i.jsx)(O.i, { currentUser: e }),
        ],
    });
}
function z(e) {
    let {
            subscription: t,
            analyticsLocation: n,
            paymentSource: s,
            busy: a,
            fromStandaloneBillingPage: r,
            showInvalidPaymentMethod: o,
            showNoPaymentMethod: c,
            fetchedCurrentInvoicePreview: d,
            fetchedRenewalInvoicePreview: _,
            fetchedOpenInvoice: h,
            isPremiumGroup: x,
        } = e,
        { analyticsLocations: p } = (0, A.Ay)(m.A.SUBSCRIPTION_DETAILS),
        E = null != d ? {} : { subscriptionId: t.id, renewal: !0, analyticsLocations: p, analyticsLocation: n },
        [C] = (0, N.Kq)(E);
    C = d ?? C;
    let T =
            null != _
                ? {}
                : {
                      subscriptionId: t.id,
                      renewal: !0,
                      applyEntitlements: !0,
                      analyticsLocations: p,
                      analyticsLocation: n,
                  },
        [S] = (0, N.Kq)(T);
    S = _ ?? S;
    let j = (0, g.A)(),
        O = (0, v.p)(),
        M = (0, b.nf)(),
        H = I.Ay.isBaseSubscriptionCanceled(t),
        w = (0, R.v)(t, s);
    if (null == C || null == S) return (0, i.jsx)(u.y$y, {});
    let B = w ? (0, b.Bv)(S) : null,
        F = null != B || (null != M && (M.discountId === G.q || M.discountId === G.EG)),
        z =
            w && ((H && null != O) || (!H && F))
                ? (0, i.jsx)(y.A, {
                      subscription: t,
                      invoicePreview: S,
                      paymentSource: s,
                      discountOffer: O,
                      renewalChurnDiscountInfo: B,
                      discountInfo: M,
                      isLoading: a,
                      analyticsLocation: n,
                  })
                : (0, i.jsx)(L.A, {
                      subscription: t,
                      currentInvoicePreview: C,
                      renewalInvoicePreview: S,
                      paymentSource: s,
                      busy: a,
                      analyticsLocation: n,
                  });
    return (0, i.jsxs)(i.Fragment, {
        children: [
            (0, i.jsxs)("div", {
                className: V.fj,
                children: [
                    !x && z,
                    (0, i.jsx)(P.C, {
                        subscription: t,
                        renewalInvoicePreview: C,
                        fromStandaloneBillingPage: r,
                        fractionalPremiumInfo: j,
                        analyticsLocation: n,
                    }),
                ],
            }),
            (0, i.jsx)("div", {
                children: (0, i.jsx)(u.nVY, {
                    label: k.intl.string(k.t.Sb6wI1),
                    children: (0, i.jsxs)("div", {
                        className: V.zH,
                        children: [
                            (0, i.jsx)(Y, {
                                subscription: t,
                                renewalInvoicePreview: S,
                                className: V.g4,
                                fractionalPremiumInfo: j,
                                openInvoice: h,
                            }),
                            (0, i.jsx)("div", {
                                className: l()(V.g4, { [V.sE]: o }),
                                children: (0, i.jsx)(u.D0$, {
                                    label:
                                        t.isPurchasedExternally && null != t.paymentGateway
                                            ? k.intl.formatToPlainString(k.t["rTk9v/"], {
                                                  paymentGatewayName: U.qmC[t.paymentGateway],
                                              })
                                            : k.intl.string(k.t.iRzXKd),
                                    children: (0, i.jsx)(D.A, {
                                        subscription: t,
                                        onPaymentSourceAdded: f.c_,
                                        highlightAddPaymentMethodButton: c || o,
                                        analyticsLocation: n,
                                        currentInvoicePreview: C,
                                        dropdownClassName: V.sp,
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
let W = new Set([U.Dmq.ACTIVE, U.Dmq.PAST_DUE, U.Dmq.CANCELED, U.Dmq.PAUSE_PENDING, U.Dmq.PAUSED]);
function K() {
    return (
        s.useEffect(() => {
            T.default.track(U.HAw.TOOLTIP_VIEWED, { type: "subscription_settings_duplicate_subscriptions" });
        }, []),
        (0, i.jsxs)("div", {
            className: V.oU,
            children: [
                (0, i.jsx)(u.EpV, { size: "custom", width: 20, height: 20, color: d.A.unsafe_rawColors.RED_360.css }),
                (0, i.jsx)(u.Text, {
                    className: V.dk,
                    variant: "text-sm/normal",
                    children: k.intl.format(k.t["6eXiiC"], { helpCenterLink: S.A.getArticleURL(U.MVz.NITRO) }),
                }),
            ],
        })
    );
}
function Z(e) {
    let t,
        {
            subscription: n,
            subscriptions: a,
            paymentSource: l,
            busy: r,
            fromStandaloneBillingPage: d = !0,
            analyticsLocation: g,
            shouldRefetchInvoicesOnSubscriptionUpdate: h,
        } = e;
    null != a && null != a[0] && (n = a[0]);
    let x = (0, c.bG)([C.default], () => C.default.getCurrentUser()),
        { analyticsLocations: p } = (0, A.Ay)(m.A.SUBSCRIPTION_DETAILS),
        T = (0, v.p)(),
        S = null != a ? a.slice(1) : [],
        [I, f] = s.useState(0);
    s.useEffect(() => {
        if (!h) return;
        let e = (e) => {
            e.subscription.id === n.id && f((e) => e + 1);
        };
        return (
            _.h.subscribe("BILLING_SUBSCRIPTION_UPDATE_SUCCESS", e),
            () => {
                _.h.unsubscribe("BILLING_SUBSCRIPTION_UPDATE_SUCCESS", e);
            }
        );
    }, [n.id, h]);
    let [b] = (0, N.Kq)({
            subscriptionId: n.id,
            renewal: !0,
            analyticsLocations: p,
            analyticsLocation: g,
            fetchKey: I,
        }),
        [R] = (0, N.Kq)({
            subscriptionId: n.id,
            renewal: !0,
            applyEntitlements: !0,
            analyticsLocations: p,
            analyticsLocation: g,
            userDiscountOfferId: T?.id,
            fetchKey: I,
        }),
        y = l?.invalid,
        P = (0, c.bG)([C.default], () => C.default.getCurrentUser()?.hasFreePremium()),
        L = o()(n.currentPeriodEnd),
        D = null != n.paymentSourceId,
        G = R?.total ?? 0,
        Y =
            !D &&
            G > 0 &&
            (7 >= L.diff(o()(), "days") || n.status === U.Dmq.PAST_DUE) &&
            !P &&
            !n.isPurchasedExternally,
        F = y && n.status === U.Dmq.PAST_DUE && !P && !n.isPurchasedExternally,
        W = (0, j.l)(),
        K = !P && W,
        Z = n?.status === U.Dmq.PAST_DUE,
        q = Z ? o()().diff(o()(n.currentPeriodStart), "days") : 0,
        X = null != x && x.isPremiumGroupPrimary(),
        Q = n.hasAnyPremiumGroup,
        [J] = (0, N.C8)({ subscriptionId: n.id, preventFetch: !(K || Z) });
    return null == b || null == R
        ? (0, i.jsx)(u.y$y, {})
        : (null != n.renewalMutations &&
              ((n.renewalMutations.planId !== n.planId && !(0, E.m1)(n.renewalMutations.planId)) ||
                  n.hasExternalPlanChange) &&
              (t = (0, i.jsx)(M.A, {
                  subscription: n,
                  renewalMutations: n.renewalMutations,
                  className: V.Il,
                  analyticsLocation: g,
              })),
          (0, i.jsxs)(u.nVY, {
              label: k.intl.string(k.t["/gs+Pz"]),
              description: k.intl.string(k.t.D8UpUo),
              children: [
                  Y ? (0, i.jsx)(H, {}) : null,
                  F ? (0, i.jsx)(w, {}) : null,
                  K && null != J ? (0, i.jsx)(B, { daysPastDue: q, subscription: n, openInvoiceId: J.id }) : null,
                  X && Q && (0, i.jsx)(O.j, { subscription: n, analyticsLocations: p }),
                  t,
                  (0, i.jsxs)("div", {
                      children: [
                          (0, i.jsx)("div", {
                              className: S.length > 0 ? V.HZ : V.__invalid_singleSubscription,
                              children: (0, i.jsx)(z, {
                                  subscription: n,
                                  analyticsLocation: g,
                                  paymentSource: l,
                                  busy: r,
                                  fromStandaloneBillingPage: d,
                                  showNoPaymentMethod: Y,
                                  showInvalidPaymentMethod: F,
                                  fetchedCurrentInvoicePreview: b,
                                  fetchedRenewalInvoicePreview: R,
                                  fetchedOpenInvoice: J,
                                  isPremiumGroup: X,
                              }),
                          }),
                          S.map((e, t) =>
                              (0, i.jsxs)(
                                  "div",
                                  {
                                      className: V.HZ,
                                      children: [
                                          (0, i.jsx)(u.Heading, {
                                              variant: "heading-md/semibold",
                                              className: V.dd,
                                              children: "Duplicate Subscriptions",
                                          }),
                                          (0, i.jsx)(z, {
                                              subscription: e,
                                              analyticsLocation: g,
                                              paymentSource: l,
                                              busy: r,
                                              fromStandaloneBillingPage: d,
                                              showNoPaymentMethod: Y,
                                              showInvalidPaymentMethod: F,
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
