n.d(t, { A: () => B });
var i = n(627968),
    s = n(64700),
    r = n(503698),
    a = n.n(r),
    l = n(311907),
    o = n(827734),
    c = n(990078),
    d = n(397927),
    u = n(384904),
    _ = n(912851),
    m = n(793574),
    A = n(688810),
    g = n(178856),
    E = n(915089),
    h = n(465932),
    p = n(263063),
    C = n(543767),
    x = n(420139),
    T = n(976860),
    I = n(780964),
    S = n(12901),
    f = n(840065),
    N = n(295405),
    b = n(379082),
    R = n(710144),
    v = n(815332),
    O = n(568286),
    j = n(638182),
    P = n(652215),
    y = n(746080),
    L = n(355097),
    D = n(985018),
    M = n(185814);
let G = (e) => {
        let { label: t, value: n, showInfoIcon: s, infoIconTooltipText: r } = e;
        return (0, i.jsxs)("div", {
            className: M.L0,
            children: [
                (0, i.jsxs)("div", {
                    className: M.a5,
                    children: [
                        (0, i.jsx)(d.Heading, {
                            variant: "heading-deprecated-12/semibold",
                            className: M.HU,
                            children: t,
                        }),
                        s &&
                            (0, i.jsx)(c.m, {
                                text: r,
                                children: (0, i.jsx)(d.mir, { size: "xs", color: "currentColor", className: M.Mo }),
                            }),
                    ],
                }),
                (0, i.jsx)(d.Heading, { variant: "heading-xl/semibold", className: M.sx, children: n }),
            ],
        });
    },
    U = (e) => {
        let { subscription: t } = e,
            { analyticsLocations: n } = (0, A.Ay)(),
            [s] = (0, C.Kq)({
                subscriptionId: t.id,
                renewal: !0,
                analyticsLocations: n,
                analyticsLocation: m.A.GUILD_ROLE_SUBSCRIPTION_PAYMENT_SOURCE_WITH_INVOICE,
            }),
            r = (0, l.bG)([N.A], () => N.A.hasFetchedPaymentSources);
        return null != s && r
            ? (0, i.jsx)(x.A, { subscription: t, currentInvoicePreview: s, dropdownClassName: M.Nw })
            : (0, i.jsx)(d.y$y, {});
    },
    k = (e) => {
        let {
            isTrial: t,
            isCancelled: n,
            isResubscribing: s,
            shouldHideRoleSubscriptionEntryPoints: r,
            onCancelSubscriptionClick: a,
            onResubscribeClick: l,
            onChangePlanClick: o,
        } = e;
        return n && (t || r)
            ? null
            : (0, i.jsx)(d.D0$, {
                  label: D.intl.string(D.t["4neDM+"]),
                  children: (0, i.jsx)("div", {
                      className: M.__invalid_rowButtons,
                      children: n
                          ? (0, i.jsx)(d.Button, {
                                variant: "primary",
                                text: D.intl.string(D.t.y3mAE4),
                                onClick: l,
                                loading: s,
                            })
                          : (0, i.jsxs)(i.Fragment, {
                                children: [
                                    !t && !r && (0, i.jsx)(g.A, { label: D.intl.string(D.t.FRbWR8), onClick: o }),
                                    (0, i.jsx)(g.A, { label: D.intl.string(D.t.Dx0lF7), onClick: a }),
                                ],
                            }),
                  }),
              });
    },
    B = (e) => {
        let { subscription: t } = e,
            {
                listing: n,
                groupListing: r,
                guild: l,
                expanded: m,
                handleToggleExpanded: g,
                subscriptionInfo: C,
            } = (0, b.A)(t),
            [x, N] = s.useState(!1),
            B = (0, E.GV)(),
            { analyticsLocations: w } = (0, A.Ay)(),
            { shouldHideGuildPurchaseEntryPoints: H } = (0, h.MH)(l?.id),
            V = t?.isPurchasedViaAppleGeneric;
        if (null == r || null == n || null == C) return null;
        let F = async () => {
                try {
                    N(!0), await u.QP(t, w), (0, j.q)();
                } finally {
                    N(!1);
                }
            },
            {
                isCancelled: Y,
                isPastDue: W,
                subscriptionPrice: z,
                memberSince: K,
                nextRenewalDate: Z,
                nextRenewalLabel: X,
                isTrial: q,
            } = C,
            J = n.soft_deleted || null == l || V;
        return (0, i.jsxs)("div", {
            className: M.kL,
            children: [
                (0, i.jsx)(R.A, {
                    onClick: g,
                    className: M.N1,
                    children: (e) => {
                        let { areaRef: t, handleStopPropagation: s } = e;
                        return (0, i.jsxs)(i.Fragment, {
                            children: [
                                null != l && (0, i.jsx)(p.A, { guild: l, active: !0, size: p.A.Sizes.MEDIUM }),
                                (0, i.jsxs)("div", {
                                    className: M.if,
                                    children: [
                                        (0, i.jsx)(d.Text, {
                                            variant: "text-md/medium",
                                            className: M.J5,
                                            children: null != l ? l.name : D.intl.string(D.t["He+cmd"]),
                                        }),
                                        (0, i.jsxs)("div", {
                                            className: M.xp,
                                            children: [
                                                (0, i.jsx)(d.Text, {
                                                    variant: "text-sm/normal",
                                                    className: M.KR,
                                                    children: n.name,
                                                }),
                                                Y
                                                    ? (0, i.jsx)(d.LpS, { text: D.intl.string(D.t["7uFZGt"]) })
                                                    : q
                                                      ? (0, i.jsx)(d.LpS, {
                                                            text: D.intl.string(D.t["6anton"]),
                                                            color: o.A.unsafe_rawColors.BRAND_500.css,
                                                        })
                                                      : W
                                                        ? (0, i.jsx)(c.m, {
                                                              text: D.intl.string(D.t.eSuJE2),
                                                              children: (0, i.jsx)("div", {
                                                                  children: (0, i.jsx)(d.LpS, {
                                                                      className: M.qc,
                                                                      text: D.intl.string(D.t.NrRwIl),
                                                                      color: o.A.unsafe_rawColors.YELLOW_300.css,
                                                                  }),
                                                              }),
                                                          })
                                                        : null,
                                                V
                                                    ? (0, i.jsx)(c.m, {
                                                          text: D.intl.string(D.t.nv1IqK),
                                                          children: (0, i.jsx)("div", {
                                                              children: (0, i.jsx)(d.LpS, {
                                                                  text: D.intl.string(D.t["sBl3X/"]),
                                                                  color: o.A.colors.BACKGROUND_MOD_MUTED.css,
                                                              }),
                                                          }),
                                                      })
                                                    : null,
                                            ],
                                        }),
                                    ],
                                }),
                                (0, i.jsx)(d.DUT, {
                                    onClick: s(g),
                                    "aria-label": D.intl.string(D.t.e5eQOy),
                                    "aria-controls": B,
                                    "aria-expanded": m,
                                    focusProps: { ringTarget: t },
                                    children: (0, i.jsx)(d.abt, {
                                        size: "md",
                                        color: "currentColor",
                                        className: a()(M.D6, { [M.S7]: m }),
                                    }),
                                }),
                            ],
                        });
                    },
                }),
                m
                    ? (0, i.jsxs)("div", {
                          id: B,
                          children: [
                              (0, i.jsx)("div", { className: M.yF }),
                              (0, i.jsx)(v.A, { groupListingId: r.id, subscription: t, className: M.kE }),
                              (0, i.jsxs)("div", {
                                  className: M.Zx,
                                  children: [
                                      (0, i.jsx)(G, { label: X, value: Z }),
                                      (0, i.jsx)(G, {
                                          label: D.intl.string(D.t.dltUMH),
                                          value: z,
                                          showInfoIcon: q,
                                          infoIconTooltipText: q ? D.intl.string(D.t["/q6fpa"]) : void 0,
                                      }),
                                      (0, i.jsx)(G, { label: D.intl.string(D.t.AOcwWB), value: K }),
                                  ],
                              }),
                              (0, i.jsx)(d.hKd, { size: 16 }),
                              !Y &&
                                  !V &&
                                  (0, i.jsx)(d.D0$, {
                                      label: D.intl.string(D.t.wmMFvA),
                                      children: (0, i.jsx)(U, { subscription: t }),
                                  }),
                              !J &&
                                  (0, i.jsx)(k, {
                                      isTrial: q,
                                      isCancelled: Y,
                                      isResubscribing: x,
                                      shouldHideRoleSubscriptionEntryPoints: H,
                                      onCancelSubscriptionClick: () => {
                                          null != l && (0, O.q)({ groupListing: r, listing: n, subscription: t });
                                      },
                                      onChangePlanClick: () => {
                                          null != l &&
                                              ((0, T.pX)(P.BVt.CHANNEL(l.id, y.VV.ROLE_SUBSCRIPTIONS)),
                                              (0, S.default)(),
                                              _.A.show(
                                                  P.kqX.BACK_TO_PREVIOUS_SCREEN,
                                                  void 0,
                                                  D.intl.string(D.t.DvbaM4),
                                                  () =>
                                                      (0, f.openUserSettings)(I.X.SUBSCRIPTIONS_PANEL, {
                                                          section: P.nc_.SUBSCRIPTIONS,
                                                          subsection: L.nR,
                                                      }),
                                              ));
                                      },
                                      onResubscribeClick: F,
                                  }),
                          ],
                      })
                    : null,
            ],
        });
    };
