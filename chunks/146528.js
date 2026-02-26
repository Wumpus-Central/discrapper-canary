n.d(t, { A: () => V });
var i = n(627968),
    s = n(64700),
    a = n(503698),
    l = n.n(a),
    r = n(311907),
    o = n(827734),
    c = n(990078),
    d = n(397927),
    u = n(384904),
    _ = n(912851),
    m = n(793574),
    A = n(688810),
    g = n(178856),
    h = n(915089),
    x = n(465932),
    p = n(263063),
    E = n(543767),
    C = n(420139),
    T = n(976860),
    S = n(780964),
    I = n(12901),
    f = n(840065),
    N = n(295405),
    b = n(379082),
    j = n(710144),
    v = n(815332),
    O = n(568286),
    R = n(638182),
    y = n(652215),
    P = n(746080),
    L = n(355097),
    D = n(985018),
    M = n(162580);
let G = (e) => {
        let { label: t, value: n, showInfoIcon: s, infoIconTooltipText: a } = e;
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
                                text: a,
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
            [s] = (0, E.Kq)({
                subscriptionId: t.id,
                renewal: !0,
                analyticsLocations: n,
                analyticsLocation: m.A.GUILD_ROLE_SUBSCRIPTION_PAYMENT_SOURCE_WITH_INVOICE,
            }),
            a = (0, r.bG)([N.A], () => N.A.hasFetchedPaymentSources);
        return null != s && a
            ? (0, i.jsx)(C.A, { subscription: t, currentInvoicePreview: s, dropdownClassName: M.Nw })
            : (0, i.jsx)(d.y$y, {});
    },
    k = (e) => {
        let {
            isTrial: t,
            isCancelled: n,
            isResubscribing: s,
            shouldHideRoleSubscriptionEntryPoints: a,
            onCancelSubscriptionClick: l,
            onResubscribeClick: r,
            onChangePlanClick: o,
        } = e;
        return n && (t || a)
            ? null
            : (0, i.jsx)(d.D0$, {
                  label: D.intl.string(D.t["4neDM+"]),
                  children: (0, i.jsx)("div", {
                      className: M.__invalid_rowButtons,
                      children: n
                          ? (0, i.jsx)(d.Button, {
                                variant: "primary",
                                text: D.intl.string(D.t.y3mAE4),
                                onClick: r,
                                loading: s,
                            })
                          : (0, i.jsxs)(i.Fragment, {
                                children: [
                                    !t && !a && (0, i.jsx)(g.A, { label: D.intl.string(D.t.FRbWR8), onClick: o }),
                                    (0, i.jsx)(g.A, { label: D.intl.string(D.t.Dx0lF7), onClick: l }),
                                ],
                            }),
                  }),
              });
    },
    V = (e) => {
        let { subscription: t } = e,
            {
                listing: n,
                groupListing: a,
                guild: r,
                expanded: m,
                handleToggleExpanded: g,
                subscriptionInfo: E,
            } = (0, b.A)(t),
            [C, N] = s.useState(!1),
            V = (0, h.GV)(),
            { analyticsLocations: H } = (0, A.Ay)(),
            { shouldHideGuildPurchaseEntryPoints: w } = (0, x.MH)(r?.id),
            B = t?.isPurchasedViaAppleGeneric;
        if (null == a || null == n || null == E) return null;
        let Y = async () => {
                try {
                    N(!0), await u.QP(t, H), (0, R.q)();
                } finally {
                    N(!1);
                }
            },
            {
                isCancelled: F,
                isPastDue: z,
                subscriptionPrice: W,
                memberSince: K,
                nextRenewalDate: Z,
                nextRenewalLabel: q,
                isTrial: X,
            } = E,
            Q = n.soft_deleted || null == r || B;
        return (0, i.jsxs)("div", {
            className: M.kL,
            children: [
                (0, i.jsx)(j.A, {
                    onClick: g,
                    className: M.N1,
                    children: (e) => {
                        let { areaRef: t, handleStopPropagation: s } = e;
                        return (0, i.jsxs)(i.Fragment, {
                            children: [
                                null != r && (0, i.jsx)(p.Ay, { guild: r, active: !0, size: p.Ay.Sizes.MEDIUM }),
                                (0, i.jsxs)("div", {
                                    className: M.if,
                                    children: [
                                        (0, i.jsx)(d.Text, {
                                            variant: "text-md/medium",
                                            className: M.J5,
                                            children: null != r ? r.name : D.intl.string(D.t["He+cmd"]),
                                        }),
                                        (0, i.jsxs)("div", {
                                            className: M.xp,
                                            children: [
                                                (0, i.jsx)(d.Text, {
                                                    variant: "text-sm/normal",
                                                    className: M.KR,
                                                    children: n.name,
                                                }),
                                                F
                                                    ? (0, i.jsx)(d.LpS, { text: D.intl.string(D.t["7uFZGt"]) })
                                                    : X
                                                      ? (0, i.jsx)(d.LpS, {
                                                            text: D.intl.string(D.t["6anton"]),
                                                            color: o.A.unsafe_rawColors.BRAND_500.css,
                                                        })
                                                      : z
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
                                                B
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
                                    "aria-controls": V,
                                    "aria-expanded": m,
                                    focusProps: { ringTarget: t },
                                    children: (0, i.jsx)(d.abt, {
                                        size: "md",
                                        color: "currentColor",
                                        className: l()(M.D6, { [M.S7]: m }),
                                    }),
                                }),
                            ],
                        });
                    },
                }),
                m
                    ? (0, i.jsxs)("div", {
                          id: V,
                          children: [
                              (0, i.jsx)("div", { className: M.yF }),
                              (0, i.jsx)(v.A, { groupListingId: a.id, subscription: t, className: M.kE }),
                              (0, i.jsxs)("div", {
                                  className: M.Zx,
                                  children: [
                                      (0, i.jsx)(G, { label: q, value: Z }),
                                      (0, i.jsx)(G, {
                                          label: D.intl.string(D.t.dltUMH),
                                          value: W,
                                          showInfoIcon: X,
                                          infoIconTooltipText: X ? D.intl.string(D.t["/q6fpa"]) : void 0,
                                      }),
                                      (0, i.jsx)(G, { label: D.intl.string(D.t.AOcwWB), value: K }),
                                  ],
                              }),
                              (0, i.jsx)(d.hKd, { size: 16 }),
                              !F &&
                                  !B &&
                                  (0, i.jsx)(d.D0$, {
                                      label: D.intl.string(D.t.wmMFvA),
                                      children: (0, i.jsx)(U, { subscription: t }),
                                  }),
                              !Q &&
                                  (0, i.jsx)(k, {
                                      isTrial: X,
                                      isCancelled: F,
                                      isResubscribing: C,
                                      shouldHideRoleSubscriptionEntryPoints: w,
                                      onCancelSubscriptionClick: () => {
                                          null != r && (0, O.q)({ groupListing: a, listing: n, subscription: t });
                                      },
                                      onChangePlanClick: () => {
                                          null != r &&
                                              ((0, T.pX)(y.BVt.CHANNEL(r.id, P.VV.ROLE_SUBSCRIPTIONS)),
                                              (0, I.default)(),
                                              _.A.show(
                                                  y.kqX.BACK_TO_PREVIOUS_SCREEN,
                                                  void 0,
                                                  D.intl.string(D.t.DvbaM4),
                                                  () =>
                                                      (0, f.openUserSettings)(S.X.SUBSCRIPTIONS_PANEL, {
                                                          section: y.nc_.SUBSCRIPTIONS,
                                                          subsection: L.nR,
                                                      }),
                                              ));
                                      },
                                      onResubscribeClick: Y,
                                  }),
                          ],
                      })
                    : null,
            ],
        });
    };
