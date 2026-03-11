n.d(t, { A: () => w });
var i = n(627968),
    s = n(64700),
    l = n(503698),
    a = n.n(l),
    r = n(311907),
    o = n(827734),
    d = n(990078),
    c = n(397927),
    u = n(384904),
    _ = n(912851),
    g = n(793574),
    m = n(688810),
    A = n(178856),
    h = n(915089),
    p = n(465932),
    x = n(263063),
    E = n(543767),
    T = n(420139),
    S = n(790284),
    C = n(976860),
    f = n(780964),
    I = n(12901),
    b = n(840065),
    N = n(295405),
    v = n(379082),
    j = n(710144),
    O = n(815332),
    R = n(568286),
    y = n(638182),
    P = n(652215),
    L = n(746080),
    D = n(355097),
    G = n(985018),
    M = n(185814);
let U = (e) => {
        let { label: t, value: n, showInfoIcon: s, infoIconTooltipText: l } = e;
        return (0, i.jsxs)("div", {
            className: M.L0,
            children: [
                (0, i.jsxs)("div", {
                    className: M.a5,
                    children: [
                        (0, i.jsx)(c.Heading, {
                            variant: "heading-deprecated-12/semibold",
                            className: M.HU,
                            children: t,
                        }),
                        s &&
                            (0, i.jsx)(d.m, {
                                text: l,
                                children: (0, i.jsx)(c.mir, { size: "xs", color: "currentColor", className: M.Mo }),
                            }),
                    ],
                }),
                (0, i.jsx)(c.Heading, { variant: "heading-xl/semibold", className: M.sx, children: n }),
            ],
        });
    },
    k = (e) => {
        let { subscription: t } = e,
            { analyticsLocations: n } = (0, m.Ay)(),
            [s] = (0, E.Kq)({
                subscriptionId: t.id,
                renewal: !0,
                analyticsLocations: n,
                analyticsLocation: g.A.GUILD_ROLE_SUBSCRIPTION_PAYMENT_SOURCE_WITH_INVOICE,
            }),
            l = (0, r.bG)([N.A], () => N.A.hasFetchedPaymentSources);
        return null != s && l
            ? (0, i.jsx)(T.A, { subscription: t, currentInvoicePreview: s, dropdownClassName: M.Nw })
            : (0, i.jsx)(c.y$y, {});
    },
    V = (e) => {
        let {
            isTrial: t,
            isCancelled: n,
            isResubscribing: s,
            shouldHideRoleSubscriptionEntryPoints: l,
            onCancelSubscriptionClick: a,
            onResubscribeClick: r,
            onChangePlanClick: o,
        } = e;
        return n && (t || l)
            ? null
            : (0, i.jsx)(c.D0$, {
                  label: G.intl.string(G.t["4neDM+"]),
                  children: (0, i.jsx)("div", {
                      className: M.__invalid_rowButtons,
                      children: n
                          ? (0, i.jsx)(c.Button, {
                                variant: "primary",
                                text: G.intl.string(G.t.y3mAE4),
                                onClick: r,
                                loading: s,
                            })
                          : (0, i.jsxs)(i.Fragment, {
                                children: [
                                    !t && !l && (0, i.jsx)(A.A, { label: G.intl.string(G.t.FRbWR8), onClick: o }),
                                    (0, i.jsx)(A.A, { label: G.intl.string(G.t.Dx0lF7), onClick: a }),
                                ],
                            }),
                  }),
              });
    },
    w = (e) => {
        let { subscription: t } = e,
            {
                listing: n,
                groupListing: l,
                guild: r,
                expanded: g,
                handleToggleExpanded: A,
                subscriptionInfo: E,
            } = (0, v.A)(t),
            [T, N] = s.useState(!1),
            w = (0, h.GV)(),
            { analyticsLocations: H } = (0, m.Ay)(),
            { shouldHideGuildPurchaseEntryPoints: B } = (0, p.MH)(r?.id),
            F = t?.isPurchasedViaAppleGeneric;
        if (null == l || null == n || null == E) return null;
        let Y = async () => {
                try {
                    N(!0), await u.QP(t, H), (0, y.q)();
                } finally {
                    N(!1);
                }
            },
            {
                isCancelled: z,
                isPastDue: X,
                subscriptionPrice: W,
                memberSince: K,
                nextRenewalDate: Z,
                nextRenewalLabel: q,
                isTrial: J,
            } = E,
            Q = n.soft_deleted || null == r || F;
        return (0, i.jsxs)("div", {
            className: M.kL,
            children: [
                (0, i.jsx)(j.A, {
                    onClick: A,
                    className: M.N1,
                    children: (e) => {
                        let { areaRef: t, handleStopPropagation: s } = e;
                        return (0, i.jsxs)(i.Fragment, {
                            children: [
                                null != r && (0, i.jsx)(x.Ay, { guild: r, active: !0, size: x.Ay.Sizes.MEDIUM }),
                                (0, i.jsxs)("div", {
                                    className: M.if,
                                    children: [
                                        (0, i.jsx)(c.Text, {
                                            variant: "text-md/medium",
                                            className: M.J5,
                                            children: null != r ? r.name : G.intl.string(G.t["He+cmd"]),
                                        }),
                                        (0, i.jsxs)("div", {
                                            className: M.xp,
                                            children: [
                                                (0, i.jsx)(c.Text, {
                                                    variant: "text-sm/normal",
                                                    className: M.KR,
                                                    children: n.name,
                                                }),
                                                z
                                                    ? (0, i.jsx)(c.LpS, { text: G.intl.string(G.t["7uFZGt"]) })
                                                    : J
                                                      ? (0, i.jsx)(c.LpS, {
                                                            text: G.intl.string(G.t["6anton"]),
                                                            color: o.A.unsafe_rawColors.BRAND_500.css,
                                                        })
                                                      : X
                                                        ? (0, i.jsx)(d.m, {
                                                              text: G.intl.string(G.t.eSuJE2),
                                                              children: (0, i.jsx)("div", {
                                                                  children: (0, i.jsx)(c.LpS, {
                                                                      className: M.qc,
                                                                      text: G.intl.string(G.t.NrRwIl),
                                                                      color: o.A.unsafe_rawColors.YELLOW_300.css,
                                                                  }),
                                                              }),
                                                          })
                                                        : null,
                                                F
                                                    ? (0, i.jsx)(d.m, {
                                                          text: G.intl.string(G.t.nv1IqK),
                                                          children: (0, i.jsx)("div", {
                                                              children: (0, i.jsx)(c.LpS, {
                                                                  text: G.intl.string(G.t["sBl3X/"]),
                                                                  color: o.A.colors.BACKGROUND_MOD_MUTED.css,
                                                              }),
                                                          }),
                                                      })
                                                    : null,
                                            ],
                                        }),
                                    ],
                                }),
                                (0, i.jsx)(c.DUT, {
                                    onClick: s(A),
                                    "aria-label": G.intl.string(G.t.e5eQOy),
                                    "aria-controls": w,
                                    "aria-expanded": g,
                                    focusProps: { ringTarget: t },
                                    children: (0, i.jsx)(c.abt, {
                                        size: "md",
                                        color: "currentColor",
                                        className: a()(M.D6, { [M.S7]: g }),
                                    }),
                                }),
                            ],
                        });
                    },
                }),
                g
                    ? (0, i.jsxs)("div", {
                          id: w,
                          children: [
                              (0, i.jsx)("div", { className: M.yF }),
                              (0, i.jsx)(O.A, { groupListingId: l.id, subscription: t, className: M.kE }),
                              (0, i.jsxs)("div", {
                                  className: M.Zx,
                                  children: [
                                      (0, i.jsx)(U, { label: q, value: Z }),
                                      (0, i.jsx)(U, {
                                          label: G.intl.string(G.t.dltUMH),
                                          value: W,
                                          showInfoIcon: J,
                                          infoIconTooltipText: J ? G.intl.string(G.t["/q6fpa"]) : void 0,
                                      }),
                                      (0, i.jsx)(U, { label: G.intl.string(G.t.AOcwWB), value: K }),
                                  ],
                              }),
                              (0, i.jsx)(c.hKd, { size: 16 }),
                              !z &&
                                  !F &&
                                  (0, i.jsx)(c.D0$, {
                                      label: G.intl.string(G.t.wmMFvA),
                                      children: (0, i.jsx)(k, { subscription: t }),
                                  }),
                              !Q &&
                                  (0, i.jsx)(V, {
                                      isTrial: J,
                                      isCancelled: z,
                                      isResubscribing: T,
                                      shouldHideRoleSubscriptionEntryPoints: B,
                                      onCancelSubscriptionClick: () => {
                                          null != r && (0, R.q)({ groupListing: l, listing: n, subscription: t });
                                      },
                                      onChangePlanClick: () => {
                                          null != r &&
                                              ((0, C.pX)(P.BVt.CHANNEL(r.id, L.VV.ROLE_SUBSCRIPTIONS)),
                                              (0, I.default)(),
                                              _.A.show(
                                                  P.kqX.BACK_TO_PREVIOUS_SCREEN,
                                                  void 0,
                                                  G.intl.string(G.t.DvbaM4),
                                                  () => {
                                                      S.A.setState({ subsection: D.nR }),
                                                          (0, b.openUserSettings)(f.X.SUBSCRIPTIONS_PANEL, {
                                                              section: P.nc_.SUBSCRIPTIONS,
                                                              subsection: D.nR,
                                                          });
                                                  },
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
