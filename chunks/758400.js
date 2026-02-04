n.d(t, {
    Ay: () => en,
    Hy: () => ee,
    Sb: () => et,
    TC: () => Q,
}),
    n(896048);
var r = n(627968),
    i = n(64700),
    l = n(503698),
    s = n.n(l),
    a = n(284009),
    o = n.n(a),
    c = n(989349),
    d = n.n(c),
    u = n(607399),
    _ = n(311907),
    p = n(827734),
    m = n(397927),
    g = n(73153),
    A = n(793574),
    f = n(688810),
    b = n(701273),
    h = n(531260),
    E = n(235986),
    O = n(769015),
    x = n(532794),
    C = n(780964),
    S = n(840065),
    T = n(832946),
    I = n(287809),
    N = n(954571),
    y = n(975571),
    v = n(927578),
    j = n(83617),
    P = n(543767),
    R = n(526292),
    D = n(155984),
    L = n(131168),
    w = n(726532),
    M = n(947418),
    G = n(687944),
    U = n(327479),
    k = n(538511),
    B = n(420139),
    H = n(434395),
    V = n(788868),
    F = n(652215),
    Y = n(601107),
    W = n(985018),
    K = n(595654);

function z(e) {
    let t,
        {
            subscription: n,
            renewalInvoicePreview: i,
            fractionalPremiumInfo: l,
            fromStandaloneBillingPage: a = !0,
            className: c,
        } = e,
        d = (0, _.bG)([I.default], () => {
            let e = I.default.getCurrentUser();
            return o()(null != e, "GuildBoostingHeader: currentUser cannot be undefined"), e;
        });
    if (0 === (0, v.bx)(n.additionalPlans)) return null;
    let { status: p } = n,
        g = (0, v.$k)(n);
    if (g) t = K.v2;
    else
        switch (p) {
            case F.Dmq.PAST_DUE:
            case F.Dmq.ACCOUNT_HOLD:
            case F.Dmq.BILLING_RETRY:
                t = K.P7;
                break;
            case F.Dmq.PAUSE_PENDING:
            case F.Dmq.PAUSED:
                t = n.pauseReason !== Y.qf.FRACTIONAL_PREMIUM ? K.C7 : K.wG;
                break;
            default:
                t = K.wG;
        }
    return (0, r.jsxs)(r.Fragment, {
        children: [
            (0, r.jsxs)("div", {
                className: s()(t, c),
                children: [
                    (0, r.jsx)("div", {
                        className: K.Kq,
                    }),
                    (0, r.jsx)("div", {
                        className: K.OL,
                    }),
                    (0, r.jsxs)("div", {
                        className: K.eC,
                        children: [
                            (0, r.jsx)("div", {
                                className: s()(K.Ab, {
                                    [K.aD]: g,
                                }),
                            }),
                            (0, r.jsx)("div", {
                                children: (0, v.Uf)({
                                    subscription: n,
                                    renewalInvoicePreview: i,
                                    user: d,
                                    fractionalPremiumInfo: l,
                                }),
                            }),
                        ],
                    }),
                    a &&
                        (0, r.jsx)(U.A, {
                            onClick: () =>
                                (0, S.openUserSettings)(C.X.PREMIUM_GUILD_SUBSCRIPTIONS_PANEL, {
                                    section: F.nc_.GUILD_BOOSTING,
                                }),
                            text: W.intl.string(W.t["NQ5g/U"]),
                        }),
                ],
            }),
            !a &&
                (0, r.jsx)(m.Text, {
                    className: K.yW,
                    variant: "text-sm/normal",
                    children: W.intl.format(u.Fr ? W.t.uxYBEa : W.t.k6haR9, {
                        openAppHook: () => (0, b.A)("app"),
                    }),
                }),
        ],
    });
}

function Z() {
    return (
        i.useEffect(() => {
            N.default.track(F.HAw.TOOLTIP_VIEWED, {
                type: "subscription_settings_missing_payment_method",
            });
        }, []),
        (0, r.jsxs)("div", {
            className: K.Zz,
            children: [
                (0, r.jsx)(m.EpV, {
                    size: "custom",
                    width: 20,
                    height: 20,
                    className: K.Sh,
                    color: p.A.unsafe_rawColors.YELLOW_260.css,
                }),
                (0, r.jsx)(m.Text, {
                    className: K.Cy,
                    variant: "text-sm/normal",
                    children: W.intl.string(W.t.xFHEMa),
                }),
            ],
        })
    );
}

function X() {
    return (
        i.useEffect(() => {
            N.default.track(F.HAw.TOOLTIP_VIEWED, {
                type: "subscription_settings_invalid_payment_method",
            });
        }, []),
        (0, r.jsxs)("div", {
            className: K.Zz,
            children: [
                (0, r.jsx)(m.EpV, {
                    size: "custom",
                    width: 20,
                    height: 20,
                    className: K.Sh,
                    color: p.A.unsafe_rawColors.RED_360.css,
                }),
                (0, r.jsx)(m.Text, {
                    className: K.Cy,
                    variant: "text-sm/normal",
                    children: W.intl.string(W.t["j+nuQZ"]),
                }),
            ],
        })
    );
}

function q(e) {
    let { daysPastDue: t, subscription: n, openInvoiceId: l } = e,
        { analyticsLocations: s } = (0, f.Ay)(A.A.PAST_DUE_ONE_TIME_PAYMENT_METHOD_BANNER);
    return (
        i.useEffect(() => {
            N.default.track(F.HAw.TOOLTIP_VIEWED, {
                type: "subscription_settings_invalid_payment_method",
            });
        }, []),
        (0, r.jsxs)("div", {
            className: K.Zz,
            children: [
                (0, r.jsx)(m.EpV, {
                    size: "custom",
                    width: 20,
                    height: 20,
                    className: K.Sh,
                    color: p.A.unsafe_rawColors.YELLOW_260.css,
                }),
                (0, r.jsx)(m.Text, {
                    className: K.Cy,
                    variant: "text-sm/normal",
                    children: W.intl.format(W.t["0nbf/G"], {
                        daysPastDue: t,
                        paymentModalRedirect: () => {
                            (0, x.A)({
                                initialPlanId: n.planIdFromItems,
                                openInvoiceId: l,
                                analyticsLocations: s,
                            });
                        },
                    }),
                }),
            ],
        })
    );
}

function J(e) {
    let { subscription: t, renewalInvoicePreview: n, openInvoice: i, className: l, fractionalPremiumInfo: a } = e;
    return (0, r.jsxs)("div", {
        className: s()(K.KF, l),
        children: [
            (0, r.jsx)(m.Heading, {
                variant: "heading-md/semibold",
                className: K.QL,
                children: W.intl.string(W.t.KXQjfc),
            }),
            (0, r.jsx)("div", {
                children: v.Ay.getBillingInformationString(t, n, i, !1, a),
            }),
        ],
    });
}

function Q() {
    let e = (0, _.bG)([I.default], () => I.default.getCurrentUser()),
        t = null != e && e.isPremiumGroupMember();
    return (0, r.jsxs)("div", {
        children: [
            (0, r.jsx)(m.Heading, {
                variant: "heading-lg/semibold",
                className: K.Gf,
                children: W.intl.string(W.t["/gs+Pz"]),
            }),
            (0, r.jsx)("p", {
                className: K.yV,
                children: W.intl.string(W.t.D8UpUo),
            }),
            !t &&
                (0, r.jsx)(m.ZpM, {
                    className: K.wb,
                    type: m.ZpM.Types.CUSTOM,
                    children: (0, r.jsxs)(E.A, {
                        align: E.A.Align.CENTER,
                        children: [
                            (0, r.jsx)(O.A, {
                                game: null,
                                size: O.M.SMALL,
                                className: K.pV,
                            }),
                            (0, r.jsx)("span", {
                                className: K.O,
                                children: W.intl.string(W.t.xCRgr1),
                            }),
                        ],
                    }),
                }),
            t &&
                (0, r.jsx)(w.i, {
                    currentUser: e,
                }),
        ],
    });
}

function $(e) {
    let {
            subscription: t,
            analyticsLocation: n,
            paymentSource: i,
            busy: l,
            fromStandaloneBillingPage: a,
            showInvalidPaymentMethod: o,
            showNoPaymentMethod: c,
            fetchedCurrentInvoicePreview: d,
            fetchedRenewalInvoicePreview: u,
            fetchedOpenInvoice: _,
            isPremiumGroup: p,
        } = e,
        { analyticsLocations: g } = (0, f.Ay)(A.A.SUBSCRIPTION_DETAILS),
        b =
            null != d
                ? {}
                : {
                      subscriptionId: t.id,
                      renewal: !0,
                      analyticsLocations: g,
                      analyticsLocation: n,
                  },
        [E] = (0, P.Kq)(b);
    E = null != d ? d : E;
    let O =
            null != u
                ? {}
                : {
                      subscriptionId: t.id,
                      renewal: !0,
                      applyEntitlements: !0,
                      analyticsLocations: g,
                      analyticsLocation: n,
                  },
        [x] = (0, P.Kq)(O);
    x = null != u ? u : x;
    let C = (0, h.A)(),
        S = (0, L.p)(),
        T = (0, R.nf)(),
        I = v.Ay.isBaseSubscriptionCanceled(t),
        N = (0, M.v)(t, i);
    if (null == E || null == x) return (0, r.jsx)(m.y$y, {});
    let y = N ? (0, R.Bv)(x) : null,
        D = null != y || (null != T && (T.discountId === V.q || T.discountId === V.EG)),
        w =
            N && ((I && null != S) || (!I && D))
                ? (0, r.jsx)(G.A, {
                      subscription: t,
                      invoicePreview: x,
                      paymentSource: i,
                      discountOffer: S,
                      renewalChurnDiscountInfo: y,
                      discountInfo: T,
                      isLoading: l,
                      analyticsLocation: n,
                  })
                : (0, r.jsx)(k.A, {
                      subscription: t,
                      currentInvoicePreview: E,
                      renewalInvoicePreview: x,
                      paymentSource: i,
                      busy: l,
                      analyticsLocation: n,
                  });
    return (0, r.jsxs)(r.Fragment, {
        children: [
            (0, r.jsxs)("div", {
                className: K.fj,
                children: [
                    !p && w,
                    (0, r.jsx)(z, {
                        subscription: t,
                        renewalInvoicePreview: E,
                        fromStandaloneBillingPage: a,
                        className: K.td,
                        fractionalPremiumInfo: C,
                    }),
                ],
            }),
            (0, r.jsx)("div", {
                children: (0, r.jsx)(m.nVY, {
                    label: W.intl.string(W.t.Sb6wI1),
                    children: (0, r.jsxs)("div", {
                        className: K.zH,
                        children: [
                            (0, r.jsx)(J, {
                                subscription: t,
                                renewalInvoicePreview: x,
                                className: K.g4,
                                fractionalPremiumInfo: C,
                                openInvoice: _,
                            }),
                            (0, r.jsx)("div", {
                                className: s()(K.g4, {
                                    [K.sE]: o,
                                }),
                                children: (0, r.jsx)(m.D0$, {
                                    label:
                                        t.isPurchasedExternally && null != t.paymentGateway
                                            ? W.intl.formatToPlainString(W.t["rTk9v/"], {
                                                  paymentGatewayName: F.qmC[t.paymentGateway],
                                              })
                                            : W.intl.string(W.t.iRzXKd),
                                    children: (0, r.jsx)(B.A, {
                                        subscription: t,
                                        onPaymentSourceAdded: j.c_,
                                        highlightAddPaymentMethodButton: c || o,
                                        analyticsLocation: n,
                                        currentInvoicePreview: E,
                                        dropdownClassName: K.sp,
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
        i.useEffect(() => {
            N.default.track(F.HAw.TOOLTIP_VIEWED, {
                type: "subscription_settings_duplicate_subscriptions",
            });
        }, []),
        (0, r.jsxs)("div", {
            className: K.oU,
            children: [
                (0, r.jsx)(m.EpV, {
                    size: "custom",
                    width: 20,
                    height: 20,
                    color: p.A.unsafe_rawColors.RED_360.css,
                }),
                (0, r.jsx)(m.Text, {
                    className: K.dk,
                    variant: "text-sm/normal",
                    children: W.intl.format(W.t["6eXiiC"], {
                        helpCenterLink: y.A.getArticleURL(F.MVz.NITRO),
                    }),
                }),
            ],
        })
    );
}

function en(e) {
    var t;
    let n,
        {
            subscription: l,
            subscriptions: s,
            paymentSource: a,
            busy: o,
            fromStandaloneBillingPage: c = !0,
            analyticsLocation: u,
            shouldRefetchInvoicesOnSubscriptionUpdate: p,
        } = e;
    null != s && null != s[0] && (l = s[0]);
    let b = (0, _.bG)([I.default], () => I.default.getCurrentUser()),
        { analyticsLocations: h } = (0, f.Ay)(A.A.SUBSCRIPTION_DETAILS),
        E = (0, L.p)(),
        O = null != s ? s.slice(1) : [],
        [x, C] = i.useState(0);
    i.useEffect(() => {
        if (!p) return;
        let e = (e) => {
            e.subscription.id === l.id && C((e) => e + 1);
        };
        return (
            g.h.subscribe("BILLING_SUBSCRIPTION_UPDATE_SUCCESS", e),
            () => {
                g.h.unsubscribe("BILLING_SUBSCRIPTION_UPDATE_SUCCESS", e);
            }
        );
    }, [l.id, p]);
    let [S] = (0, P.Kq)({
            subscriptionId: l.id,
            renewal: !0,
            analyticsLocations: h,
            analyticsLocation: u,
            fetchKey: x,
        }),
        [N] = (0, P.Kq)({
            subscriptionId: l.id,
            renewal: !0,
            applyEntitlements: !0,
            analyticsLocations: h,
            analyticsLocation: u,
            userDiscountOfferId: null == E ? void 0 : E.id,
            fetchKey: x,
        }),
        y = null == a ? void 0 : a.invalid,
        v = (0, _.bG)([I.default], () => {
            var e;
            return null == (e = I.default.getCurrentUser()) ? void 0 : e.hasFreePremium();
        }),
        j = d()(l.currentPeriodEnd),
        R = null != l.paymentSourceId,
        M = null != (t = null == N ? void 0 : N.total) ? t : 0,
        G =
            !R &&
            M > 0 &&
            (7 >= j.diff(d()(), "days") || l.status === F.Dmq.PAST_DUE) &&
            !v &&
            !l.isPurchasedExternally,
        U = y && l.status === F.Dmq.PAST_DUE && !v && !l.isPurchasedExternally,
        k = (0, D.l)(),
        B = !v && k,
        V = (null == l ? void 0 : l.status) === F.Dmq.PAST_DUE,
        Y = V ? d()().diff(d()(l.currentPeriodStart), "days") : 0,
        z = null != b && b.isPremiumGroupPrimary(),
        J = l.hasAnyPremiumGroup,
        [Q] = (0, P.C8)({
            subscriptionId: l.id,
            preventFetch: !(B || V),
        });
    return null == S || null == N
        ? (0, r.jsx)(m.y$y, {})
        : (null != l.renewalMutations &&
              ((l.renewalMutations.planId !== l.planId && !(0, T.m1)(l.renewalMutations.planId)) ||
                  l.hasExternalPlanChange) &&
              (n = (0, r.jsx)(H.A, {
                  subscription: l,
                  renewalMutations: l.renewalMutations,
                  className: K.Il,
                  analyticsLocation: u,
              })),
          (0, r.jsxs)(m.nVY, {
              label: W.intl.string(W.t["/gs+Pz"]),
              description: W.intl.string(W.t.D8UpUo),
              children: [
                  G ? (0, r.jsx)(Z, {}) : null,
                  U ? (0, r.jsx)(X, {}) : null,
                  B && null != Q
                      ? (0, r.jsx)(q, {
                            daysPastDue: Y,
                            subscription: l,
                            openInvoiceId: Q.id,
                        })
                      : null,
                  z &&
                      J &&
                      (0, r.jsx)(w.j, {
                          subscription: l,
                          analyticsLocations: h,
                      }),
                  n,
                  (0, r.jsxs)("div", {
                      children: [
                          (0, r.jsx)("div", {
                              className: O.length > 0 ? K.HZ : K.__invalid_singleSubscription,
                              children: (0, r.jsx)($, {
                                  subscription: l,
                                  analyticsLocation: u,
                                  paymentSource: a,
                                  busy: o,
                                  fromStandaloneBillingPage: c,
                                  showNoPaymentMethod: G,
                                  showInvalidPaymentMethod: U,
                                  fetchedCurrentInvoicePreview: S,
                                  fetchedRenewalInvoicePreview: N,
                                  fetchedOpenInvoice: Q,
                                  isPremiumGroup: z,
                              }),
                          }),
                          O.map((e, t) =>
                              (0, r.jsxs)(
                                  "div",
                                  {
                                      className: K.HZ,
                                      children: [
                                          (0, r.jsx)(m.Heading, {
                                              variant: "heading-md/semibold",
                                              className: K.dd,
                                              children: "Duplicate Subscriptions",
                                          }),
                                          (0, r.jsx)($, {
                                              subscription: e,
                                              analyticsLocation: u,
                                              paymentSource: a,
                                              busy: o,
                                              fromStandaloneBillingPage: c,
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
