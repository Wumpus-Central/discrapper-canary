n.d(t, { Ay: () => en, Hy: () => ee, Sb: () => et, TC: () => Q });
var i = n(627968),
    s = n(64700),
    r = n(503698),
    a = n.n(r),
    l = n(284009),
    o = n.n(l),
    c = n(989349),
    d = n.n(c),
    u = n(607399),
    _ = n(311907),
    m = n(827734),
    A = n(397927),
    g = n(73153),
    E = n(793574),
    h = n(688810),
    p = n(701273),
    C = n(531260),
    x = n(235986),
    T = n(769015),
    I = n(532794),
    S = n(780964),
    f = n(840065),
    N = n(832946),
    b = n(287809),
    R = n(954571),
    v = n(975571),
    O = n(927578),
    j = n(83617),
    P = n(543767),
    y = n(526292),
    L = n(155984),
    D = n(131168),
    M = n(726532),
    G = n(947418),
    U = n(687944),
    k = n(327479),
    B = n(538511),
    w = n(420139),
    H = n(434395),
    V = n(788868),
    F = n(652215),
    Y = n(601107),
    W = n(985018),
    z = n(595654);
function K(e) {
    let t,
        {
            subscription: n,
            renewalInvoicePreview: s,
            fractionalPremiumInfo: r,
            fromStandaloneBillingPage: l = !0,
            className: c,
        } = e,
        d = (0, _.bG)([b.default], () => {
            let e = b.default.getCurrentUser();
            return o()(null != e, "GuildBoostingHeader: currentUser cannot be undefined"), e;
        });
    if (0 === (0, O.bx)(n.additionalPlans)) return null;
    let { status: m } = n,
        g = (0, O.$k)(n);
    if (g) t = z.v2;
    else
        switch (m) {
            case F.Dmq.PAST_DUE:
            case F.Dmq.ACCOUNT_HOLD:
            case F.Dmq.BILLING_RETRY:
                t = z.P7;
                break;
            case F.Dmq.PAUSE_PENDING:
            case F.Dmq.PAUSED:
                t = n.pauseReason !== Y.qf.FRACTIONAL_PREMIUM ? z.C7 : z.wG;
                break;
            default:
                t = z.wG;
        }
    return (0, i.jsxs)(i.Fragment, {
        children: [
            (0, i.jsxs)("div", {
                className: a()(t, c),
                children: [
                    (0, i.jsx)("div", { className: z.Kq }),
                    (0, i.jsx)("div", { className: z.OL }),
                    (0, i.jsxs)("div", {
                        className: z.eC,
                        children: [
                            (0, i.jsx)("div", { className: a()(z.Ab, { [z.aD]: g }) }),
                            (0, i.jsx)("div", {
                                children: (0, O.Uf)({
                                    subscription: n,
                                    renewalInvoicePreview: s,
                                    user: d,
                                    fractionalPremiumInfo: r,
                                }),
                            }),
                        ],
                    }),
                    l &&
                        (0, i.jsx)(k.A, {
                            onClick: () =>
                                (0, f.openUserSettings)(S.X.PREMIUM_GUILD_SUBSCRIPTIONS_PANEL, {
                                    section: F.nc_.GUILD_BOOSTING,
                                }),
                            text: W.intl.string(W.t["NQ5g/U"]),
                        }),
                ],
            }),
            !l &&
                (0, i.jsx)(A.Text, {
                    className: z.yW,
                    variant: "text-sm/normal",
                    children: W.intl.format(u.Fr ? W.t.uxYBEa : W.t.k6haR9, { openAppHook: () => (0, p.A)("app") }),
                }),
        ],
    });
}
function Z() {
    return (
        s.useEffect(() => {
            R.default.track(F.HAw.TOOLTIP_VIEWED, { type: "subscription_settings_missing_payment_method" });
        }, []),
        (0, i.jsxs)("div", {
            className: z.Zz,
            children: [
                (0, i.jsx)(A.EpV, {
                    size: "custom",
                    width: 20,
                    height: 20,
                    className: z.Sh,
                    color: m.A.unsafe_rawColors.YELLOW_260.css,
                }),
                (0, i.jsx)(A.Text, { className: z.Cy, variant: "text-sm/normal", children: W.intl.string(W.t.xFHEMa) }),
            ],
        })
    );
}
function X() {
    return (
        s.useEffect(() => {
            R.default.track(F.HAw.TOOLTIP_VIEWED, { type: "subscription_settings_invalid_payment_method" });
        }, []),
        (0, i.jsxs)("div", {
            className: z.Zz,
            children: [
                (0, i.jsx)(A.EpV, {
                    size: "custom",
                    width: 20,
                    height: 20,
                    className: z.Sh,
                    color: m.A.unsafe_rawColors.RED_360.css,
                }),
                (0, i.jsx)(A.Text, {
                    className: z.Cy,
                    variant: "text-sm/normal",
                    children: W.intl.string(W.t["j+nuQZ"]),
                }),
            ],
        })
    );
}
function q(e) {
    let { daysPastDue: t, subscription: n, openInvoiceId: r } = e,
        { analyticsLocations: a } = (0, h.Ay)(E.A.PAST_DUE_ONE_TIME_PAYMENT_METHOD_BANNER);
    return (
        s.useEffect(() => {
            R.default.track(F.HAw.TOOLTIP_VIEWED, { type: "subscription_settings_invalid_payment_method" });
        }, []),
        (0, i.jsxs)("div", {
            className: z.Zz,
            children: [
                (0, i.jsx)(A.EpV, {
                    size: "custom",
                    width: 20,
                    height: 20,
                    className: z.Sh,
                    color: m.A.unsafe_rawColors.YELLOW_260.css,
                }),
                (0, i.jsx)(A.Text, {
                    className: z.Cy,
                    variant: "text-sm/normal",
                    children: W.intl.format(W.t["0nbf/G"], {
                        daysPastDue: t,
                        paymentModalRedirect: () => {
                            (0, I.A)({ initialPlanId: n.planIdFromItems, openInvoiceId: r, analyticsLocations: a });
                        },
                    }),
                }),
            ],
        })
    );
}
function J(e) {
    let { subscription: t, renewalInvoicePreview: n, openInvoice: s, className: r, fractionalPremiumInfo: l } = e;
    return (0, i.jsxs)("div", {
        className: a()(z.KF, r),
        children: [
            (0, i.jsx)(A.Heading, {
                variant: "heading-md/semibold",
                className: z.QL,
                children: W.intl.string(W.t.KXQjfc),
            }),
            (0, i.jsx)("div", { children: O.Ay.getBillingInformationString(t, n, s, !1, l) }),
        ],
    });
}
function Q() {
    let e = (0, _.bG)([b.default], () => b.default.getCurrentUser()),
        t = null != e && e.isPremiumGroupMember();
    return (0, i.jsxs)("div", {
        children: [
            (0, i.jsx)(A.Heading, {
                variant: "heading-lg/semibold",
                className: z.Gf,
                children: W.intl.string(W.t["/gs+Pz"]),
            }),
            (0, i.jsx)("p", { className: z.yV, children: W.intl.string(W.t.D8UpUo) }),
            !t &&
                (0, i.jsx)(A.ZpM, {
                    className: z.wb,
                    type: A.ZpM.Types.CUSTOM,
                    children: (0, i.jsxs)(x.A, {
                        align: x.A.Align.CENTER,
                        children: [
                            (0, i.jsx)(T.A, { game: null, size: T.M.SMALL, className: z.pV }),
                            (0, i.jsx)("span", { className: z.O, children: W.intl.string(W.t.xCRgr1) }),
                        ],
                    }),
                }),
            t && (0, i.jsx)(M.i, { currentUser: e }),
        ],
    });
}
function $(e) {
    let {
            subscription: t,
            analyticsLocation: n,
            paymentSource: s,
            busy: r,
            fromStandaloneBillingPage: l,
            showInvalidPaymentMethod: o,
            showNoPaymentMethod: c,
            fetchedCurrentInvoicePreview: d,
            fetchedRenewalInvoicePreview: u,
            fetchedOpenInvoice: _,
            isPremiumGroup: m,
        } = e,
        { analyticsLocations: g } = (0, h.Ay)(E.A.SUBSCRIPTION_DETAILS),
        p = null != d ? {} : { subscriptionId: t.id, renewal: !0, analyticsLocations: g, analyticsLocation: n },
        [x] = (0, P.Kq)(p);
    x = d ?? x;
    let T =
            null != u
                ? {}
                : {
                      subscriptionId: t.id,
                      renewal: !0,
                      applyEntitlements: !0,
                      analyticsLocations: g,
                      analyticsLocation: n,
                  },
        [I] = (0, P.Kq)(T);
    I = u ?? I;
    let S = (0, C.A)(),
        f = (0, D.p)(),
        N = (0, y.nf)(),
        b = O.Ay.isBaseSubscriptionCanceled(t),
        R = (0, G.v)(t, s);
    if (null == x || null == I) return (0, i.jsx)(A.y$y, {});
    let v = R ? (0, y.Bv)(I) : null,
        L = null != v || (null != N && (N.discountId === V.q || N.discountId === V.EG)),
        M =
            R && ((b && null != f) || (!b && L))
                ? (0, i.jsx)(U.A, {
                      subscription: t,
                      invoicePreview: I,
                      paymentSource: s,
                      discountOffer: f,
                      renewalChurnDiscountInfo: v,
                      discountInfo: N,
                      isLoading: r,
                      analyticsLocation: n,
                  })
                : (0, i.jsx)(B.A, {
                      subscription: t,
                      currentInvoicePreview: x,
                      renewalInvoicePreview: I,
                      paymentSource: s,
                      busy: r,
                      analyticsLocation: n,
                  });
    return (0, i.jsxs)(i.Fragment, {
        children: [
            (0, i.jsxs)("div", {
                className: z.fj,
                children: [
                    !m && M,
                    (0, i.jsx)(K, {
                        subscription: t,
                        renewalInvoicePreview: x,
                        fromStandaloneBillingPage: l,
                        className: z.td,
                        fractionalPremiumInfo: S,
                    }),
                ],
            }),
            (0, i.jsx)("div", {
                children: (0, i.jsx)(A.nVY, {
                    label: W.intl.string(W.t.Sb6wI1),
                    children: (0, i.jsxs)("div", {
                        className: z.zH,
                        children: [
                            (0, i.jsx)(J, {
                                subscription: t,
                                renewalInvoicePreview: I,
                                className: z.g4,
                                fractionalPremiumInfo: S,
                                openInvoice: _,
                            }),
                            (0, i.jsx)("div", {
                                className: a()(z.g4, { [z.sE]: o }),
                                children: (0, i.jsx)(A.D0$, {
                                    label:
                                        t.isPurchasedExternally && null != t.paymentGateway
                                            ? W.intl.formatToPlainString(W.t["rTk9v/"], {
                                                  paymentGatewayName: F.qmC[t.paymentGateway],
                                              })
                                            : W.intl.string(W.t.iRzXKd),
                                    children: (0, i.jsx)(w.A, {
                                        subscription: t,
                                        onPaymentSourceAdded: j.c_,
                                        highlightAddPaymentMethodButton: c || o,
                                        analyticsLocation: n,
                                        currentInvoicePreview: x,
                                        dropdownClassName: z.sp,
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
let ee = new Set([F.Dmq.ACTIVE, F.Dmq.PAST_DUE, F.Dmq.CANCELED, F.Dmq.PAUSE_PENDING, F.Dmq.PAUSED]);
function et() {
    return (
        s.useEffect(() => {
            R.default.track(F.HAw.TOOLTIP_VIEWED, { type: "subscription_settings_duplicate_subscriptions" });
        }, []),
        (0, i.jsxs)("div", {
            className: z.oU,
            children: [
                (0, i.jsx)(A.EpV, { size: "custom", width: 20, height: 20, color: m.A.unsafe_rawColors.RED_360.css }),
                (0, i.jsx)(A.Text, {
                    className: z.dk,
                    variant: "text-sm/normal",
                    children: W.intl.format(W.t["6eXiiC"], { helpCenterLink: v.A.getArticleURL(F.MVz.NITRO) }),
                }),
            ],
        })
    );
}
function en(e) {
    let t,
        {
            subscription: n,
            subscriptions: r,
            paymentSource: a,
            busy: l,
            fromStandaloneBillingPage: o = !0,
            analyticsLocation: c,
            shouldRefetchInvoicesOnSubscriptionUpdate: u,
        } = e;
    null != r && null != r[0] && (n = r[0]);
    let m = (0, _.bG)([b.default], () => b.default.getCurrentUser()),
        { analyticsLocations: p } = (0, h.Ay)(E.A.SUBSCRIPTION_DETAILS),
        C = (0, D.p)(),
        x = null != r ? r.slice(1) : [],
        [T, I] = s.useState(0);
    s.useEffect(() => {
        if (!u) return;
        let e = (e) => {
            e.subscription.id === n.id && I((e) => e + 1);
        };
        return (
            g.h.subscribe("BILLING_SUBSCRIPTION_UPDATE_SUCCESS", e),
            () => {
                g.h.unsubscribe("BILLING_SUBSCRIPTION_UPDATE_SUCCESS", e);
            }
        );
    }, [n.id, u]);
    let [S] = (0, P.Kq)({
            subscriptionId: n.id,
            renewal: !0,
            analyticsLocations: p,
            analyticsLocation: c,
            fetchKey: T,
        }),
        [f] = (0, P.Kq)({
            subscriptionId: n.id,
            renewal: !0,
            applyEntitlements: !0,
            analyticsLocations: p,
            analyticsLocation: c,
            userDiscountOfferId: C?.id,
            fetchKey: T,
        }),
        R = a?.invalid,
        v = (0, _.bG)([b.default], () => b.default.getCurrentUser()?.hasFreePremium()),
        O = d()(n.currentPeriodEnd),
        j = null != n.paymentSourceId,
        y = f?.total ?? 0,
        G =
            !j &&
            y > 0 &&
            (7 >= O.diff(d()(), "days") || n.status === F.Dmq.PAST_DUE) &&
            !v &&
            !n.isPurchasedExternally,
        U = R && n.status === F.Dmq.PAST_DUE && !v && !n.isPurchasedExternally,
        k = (0, L.l)(),
        B = !v && k,
        w = n?.status === F.Dmq.PAST_DUE,
        V = w ? d()().diff(d()(n.currentPeriodStart), "days") : 0,
        Y = null != m && m.isPremiumGroupPrimary(),
        K = n.hasAnyPremiumGroup,
        [J] = (0, P.C8)({ subscriptionId: n.id, preventFetch: !(B || w) });
    return null == S || null == f
        ? (0, i.jsx)(A.y$y, {})
        : (null != n.renewalMutations &&
              ((n.renewalMutations.planId !== n.planId && !(0, N.m1)(n.renewalMutations.planId)) ||
                  n.hasExternalPlanChange) &&
              (t = (0, i.jsx)(H.A, {
                  subscription: n,
                  renewalMutations: n.renewalMutations,
                  className: z.Il,
                  analyticsLocation: c,
              })),
          (0, i.jsxs)(A.nVY, {
              label: W.intl.string(W.t["/gs+Pz"]),
              description: W.intl.string(W.t.D8UpUo),
              children: [
                  G ? (0, i.jsx)(Z, {}) : null,
                  U ? (0, i.jsx)(X, {}) : null,
                  B && null != J ? (0, i.jsx)(q, { daysPastDue: V, subscription: n, openInvoiceId: J.id }) : null,
                  Y && K && (0, i.jsx)(M.j, { subscription: n, analyticsLocations: p }),
                  t,
                  (0, i.jsxs)("div", {
                      children: [
                          (0, i.jsx)("div", {
                              className: x.length > 0 ? z.HZ : z.__invalid_singleSubscription,
                              children: (0, i.jsx)($, {
                                  subscription: n,
                                  analyticsLocation: c,
                                  paymentSource: a,
                                  busy: l,
                                  fromStandaloneBillingPage: o,
                                  showNoPaymentMethod: G,
                                  showInvalidPaymentMethod: U,
                                  fetchedCurrentInvoicePreview: S,
                                  fetchedRenewalInvoicePreview: f,
                                  fetchedOpenInvoice: J,
                                  isPremiumGroup: Y,
                              }),
                          }),
                          x.map((e, t) =>
                              (0, i.jsxs)(
                                  "div",
                                  {
                                      className: z.HZ,
                                      children: [
                                          (0, i.jsx)(A.Heading, {
                                              variant: "heading-md/semibold",
                                              className: z.dd,
                                              children: "Duplicate Subscriptions",
                                          }),
                                          (0, i.jsx)($, {
                                              subscription: e,
                                              analyticsLocation: c,
                                              paymentSource: a,
                                              busy: l,
                                              fromStandaloneBillingPage: o,
                                              showNoPaymentMethod: G,
                                              showInvalidPaymentMethod: U,
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
