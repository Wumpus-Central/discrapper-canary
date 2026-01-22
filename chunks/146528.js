n.d(t, {
    A: () => G,
}),
    n(896048);
var r = n(627968),
    i = n(64700),
    a = n(503698),
    s = n.n(a),
    o = n(311907),
    l = n(827734),
    c = n(990078),
    u = n(397927),
    d = n(384904),
    f = n(912851),
    p = n(793574),
    _ = n(688810),
    h = n(178856),
    m = n(915089),
    g = n(465932),
    E = n(263063),
    b = n(543767),
    y = n(420139),
    O = n(976860),
    A = n(780964),
    v = n(12901),
    S = n(840065),
    I = n(295405),
    T = n(379082),
    C = n(710144),
    N = n(815332),
    R = n(568286),
    w = n(638182),
    P = n(652215),
    D = n(746080),
    x = n(355097),
    L = n(985018),
    j = n(185814);
let M = (e) => {
        let { label: t, value: n, showInfoIcon: i, infoIconTooltipText: a } = e;
        return (0, r.jsxs)("div", {
            className: j.L0,
            children: [
                (0, r.jsxs)("div", {
                    className: j.a5,
                    children: [
                        (0, r.jsx)(u.Heading, {
                            variant: "heading-deprecated-12/semibold",
                            className: j.HU,
                            children: t,
                        }),
                        i &&
                            (0, r.jsx)(c.m, {
                                text: a,
                                children: (0, r.jsx)(u.mir, {
                                    size: "xs",
                                    color: "currentColor",
                                    className: j.Mo,
                                }),
                            }),
                    ],
                }),
                (0, r.jsx)(u.Heading, {
                    variant: "heading-xl/semibold",
                    className: j.sx,
                    children: n,
                }),
            ],
        });
    },
    k = (e) => {
        let { subscription: t } = e,
            { analyticsLocations: n } = (0, _.Ay)(),
            [i] = (0, b.Kq)({
                subscriptionId: t.id,
                renewal: !0,
                analyticsLocations: n,
                analyticsLocation: p.A.GUILD_ROLE_SUBSCRIPTION_PAYMENT_SOURCE_WITH_INVOICE,
            }),
            a = (0, o.bG)([I.A], () => I.A.hasFetchedPaymentSources);
        return null != i && a
            ? (0, r.jsx)(y.A, {
                  subscription: t,
                  currentInvoicePreview: i,
                  dropdownClassName: j.Nw,
              })
            : (0, r.jsx)(u.y$y, {});
    },
    U = (e) => {
        let {
            isTrial: t,
            isCancelled: n,
            isResubscribing: i,
            shouldHideRoleSubscriptionEntryPoints: a,
            onCancelSubscriptionClick: s,
            onResubscribeClick: o,
            onChangePlanClick: l,
        } = e;
        return n && (t || a)
            ? null
            : (0, r.jsx)(u.D0$, {
                  label: L.intl.string(L.t["4neDM+"]),
                  children: (0, r.jsx)("div", {
                      className: j.__invalid_rowButtons,
                      children: n
                          ? (0, r.jsx)(u.Button, {
                                variant: "primary",
                                text: L.intl.string(L.t.y3mAE4),
                                onClick: o,
                                loading: i,
                            })
                          : (0, r.jsxs)(r.Fragment, {
                                children: [
                                    !t &&
                                        !a &&
                                        (0, r.jsx)(h.A, {
                                            label: L.intl.string(L.t.FRbWR8),
                                            onClick: l,
                                        }),
                                    (0, r.jsx)(h.A, {
                                        label: L.intl.string(L.t.Dx0lF7),
                                        onClick: s,
                                    }),
                                ],
                            }),
                  }),
              });
    },
    G = (e) => {
        let { subscription: t } = e,
            {
                listing: n,
                groupListing: a,
                guild: o,
                expanded: p,
                handleToggleExpanded: h,
                subscriptionInfo: b,
            } = (0, T.A)(t),
            [y, I] = i.useState(!1),
            G = (0, m.GV)(),
            { analyticsLocations: V } = (0, _.Ay)(),
            { shouldHideGuildPurchaseEntryPoints: F } = (0, g.MH)(null == o ? void 0 : o.id),
            B = null == t ? void 0 : t.isPurchasedViaAppleGeneric;
        if (null == a || null == n || null == b) return null;
        let H = () => {
                null != o &&
                    ((0, O.pX)(P.BVt.CHANNEL(o.id, D.VV.ROLE_SUBSCRIPTIONS)),
                    (0, v.default)(),
                    f.A.show(P.kqX.BACK_TO_PREVIOUS_SCREEN, void 0, L.intl.string(L.t.DvbaM4), () =>
                        (0, S.openUserSettings)(A.X.SUBSCRIPTIONS_PANEL, {
                            section: P.nc_.SUBSCRIPTIONS,
                            subsection: x.nR,
                        }),
                    ));
            },
            Y = () => {
                null != o &&
                    (0, R.q)({
                        groupListing: a,
                        listing: n,
                        subscription: t,
                    });
            },
            W = async () => {
                try {
                    I(!0), await d.QP(t, V), (0, w.q)();
                } finally {
                    I(!1);
                }
            },
            {
                isCancelled: K,
                isPastDue: z,
                subscriptionPrice: q,
                memberSince: X,
                nextRenewalDate: Z,
                nextRenewalLabel: Q,
                isTrial: $,
            } = b,
            J = n.soft_deleted || null == o || B,
            ee = () =>
                p
                    ? (0, r.jsxs)("div", {
                          id: G,
                          children: [
                              (0, r.jsx)("div", {
                                  className: j.yF,
                              }),
                              (0, r.jsx)(N.A, {
                                  groupListingId: a.id,
                                  subscription: t,
                                  className: j.kE,
                              }),
                              (0, r.jsxs)("div", {
                                  className: j.Zx,
                                  children: [
                                      (0, r.jsx)(M, {
                                          label: Q,
                                          value: Z,
                                      }),
                                      (0, r.jsx)(M, {
                                          label: L.intl.string(L.t.dltUMH),
                                          value: q,
                                          showInfoIcon: $,
                                          infoIconTooltipText: $ ? L.intl.string(L.t["/q6fpa"]) : void 0,
                                      }),
                                      (0, r.jsx)(M, {
                                          label: L.intl.string(L.t.AOcwWB),
                                          value: X,
                                      }),
                                  ],
                              }),
                              (0, r.jsx)(u.hKd, {
                                  size: 16,
                              }),
                              !K &&
                                  !B &&
                                  (0, r.jsx)(u.D0$, {
                                      label: L.intl.string(L.t.wmMFvA),
                                      children: (0, r.jsx)(k, {
                                          subscription: t,
                                      }),
                                  }),
                              !J &&
                                  (0, r.jsx)(U, {
                                      isTrial: $,
                                      isCancelled: K,
                                      isResubscribing: y,
                                      shouldHideRoleSubscriptionEntryPoints: F,
                                      onCancelSubscriptionClick: Y,
                                      onChangePlanClick: H,
                                      onResubscribeClick: W,
                                  }),
                          ],
                      })
                    : null,
            et = () =>
                K
                    ? (0, r.jsx)(u.LpS, {
                          text: L.intl.string(L.t["7uFZGt"]),
                      })
                    : $
                      ? (0, r.jsx)(u.LpS, {
                            text: L.intl.string(L.t["6anton"]),
                            color: l.A.unsafe_rawColors.BRAND_500.css,
                        })
                      : z
                        ? (0, r.jsx)(c.m, {
                              text: L.intl.string(L.t.eSuJE2),
                              children: (0, r.jsx)("div", {
                                  children: (0, r.jsx)(u.LpS, {
                                      className: j.qc,
                                      text: L.intl.string(L.t.NrRwIl),
                                      color: l.A.unsafe_rawColors.YELLOW_300.css,
                                  }),
                              }),
                          })
                        : null,
            en = () =>
                B
                    ? (0, r.jsx)(c.m, {
                          text: L.intl.string(L.t.nv1IqK),
                          children: (0, r.jsx)("div", {
                              children: (0, r.jsx)(u.LpS, {
                                  text: L.intl.string(L.t["sBl3X/"]),
                                  color: l.A.colors.BACKGROUND_MOD_MUTED.css,
                              }),
                          }),
                      })
                    : null;
        return (0, r.jsxs)("div", {
            className: j.kL,
            children: [
                (0, r.jsx)(C.A, {
                    onClick: h,
                    className: j.N1,
                    children: (e) => {
                        let { areaRef: t, handleStopPropagation: i } = e;
                        return (0, r.jsxs)(r.Fragment, {
                            children: [
                                null != o &&
                                    (0, r.jsx)(E.A, {
                                        guild: o,
                                        active: !0,
                                        size: E.A.Sizes.MEDIUM,
                                    }),
                                (0, r.jsxs)("div", {
                                    className: j.if,
                                    children: [
                                        (0, r.jsx)(u.Text, {
                                            variant: "text-md/medium",
                                            className: j.J5,
                                            children: null != o ? o.name : L.intl.string(L.t["He+cmd"]),
                                        }),
                                        (0, r.jsxs)("div", {
                                            className: j.xp,
                                            children: [
                                                (0, r.jsx)(u.Text, {
                                                    variant: "text-sm/normal",
                                                    className: j.KR,
                                                    children: n.name,
                                                }),
                                                et(),
                                                en(),
                                            ],
                                        }),
                                    ],
                                }),
                                (0, r.jsx)(u.DUT, {
                                    onClick: i(h),
                                    "aria-label": L.intl.string(L.t.e5eQOy),
                                    "aria-controls": G,
                                    "aria-expanded": p,
                                    focusProps: {
                                        ringTarget: t,
                                    },
                                    children: (0, r.jsx)(u.abt, {
                                        size: "md",
                                        color: "currentColor",
                                        className: s()(j.D6, {
                                            [j.S7]: p,
                                        }),
                                    }),
                                }),
                            ],
                        });
                    },
                }),
                ee(),
            ],
        });
    };
