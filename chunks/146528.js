n.d(t, { A: () => V });
var i = n(627968),
    s = n(64700),
    l = n(503698),
    a = n.n(l),
    r = n(311907),
    o = n(827734),
    d = n(990078),
    c = n(397927),
    u = n(384904),
    m = n(912851),
    g = n(793574),
    _ = n(688810),
    x = n(178856),
    A = n(915089),
    h = n(465932),
    p = n(263063),
    T = n(543767),
    f = n(420139),
    S = n(790284),
    E = n(976860),
    b = n(780964),
    C = n(12901),
    N = n(840065),
    v = n(295405),
    I = n(379082),
    j = n(710144),
    y = n(815332),
    O = n(568286),
    R = n(638182),
    P = n(652215),
    L = n(746080),
    D = n(355097),
    G = n(985018),
    M = n(943138);
let k = (e) => {
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
    U = (e) => {
        let { subscription: t } = e,
            { analyticsLocations: n } = (0, _.Ay)(),
            [s] = (0, T.Kq)({
                subscriptionId: t.id,
                renewal: !0,
                analyticsLocations: n,
                analyticsLocation: g.A.GUILD_ROLE_SUBSCRIPTION_PAYMENT_SOURCE_WITH_INVOICE,
            }),
            l = (0, r.bG)([v.A], () => v.A.hasFetchedPaymentSources);
        return null != s && l
            ? (0, i.jsx)(f.A, { subscription: t, currentInvoicePreview: s, dropdownClassName: M.Nw })
            : (0, i.jsx)(c.y$y, {});
    },
    w = (e) => {
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
                                    !t && !l && (0, i.jsx)(x.A, { label: G.intl.string(G.t.FRbWR8), onClick: o }),
                                    (0, i.jsx)(x.A, { label: G.intl.string(G.t.Dx0lF7), onClick: a }),
                                ],
                            }),
                  }),
              });
    },
    V = (e) => {
        let { subscription: t } = e,
            {
                listing: n,
                groupListing: l,
                guild: r,
                expanded: g,
                handleToggleExpanded: x,
                subscriptionInfo: T,
            } = (0, I.A)(t),
            [f, v] = s.useState(!1),
            V = (0, A.GV)(),
            { analyticsLocations: B } = (0, _.Ay)(),
            { shouldHideGuildPurchaseEntryPoints: F } = (0, h.MH)(r?.id),
            H = t?.isPurchasedViaAppleGeneric;
        if (null == l || null == n || null == T) return null;
        let z = async () => {
                try {
                    v(!0), await u.QP(t, B), (0, R.q)();
                } finally {
                    v(!1);
                }
            },
            {
                isCancelled: Y,
                isPastDue: X,
                subscriptionPrice: K,
                memberSince: W,
                nextRenewalDate: Z,
                nextRenewalLabel: q,
                isTrial: Q,
            } = T,
            J = n.soft_deleted || null == r || H;
        return (0, i.jsxs)("div", {
            className: M.kL,
            children: [
                (0, i.jsx)(j.A, {
                    onClick: x,
                    className: M.N1,
                    children: (e) => {
                        let { areaRef: t, handleStopPropagation: s } = e;
                        return (0, i.jsxs)(i.Fragment, {
                            children: [
                                null != r && (0, i.jsx)(p.Ay, { guild: r, active: !0, size: p.Ay.Sizes.MEDIUM }),
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
                                                Y
                                                    ? (0, i.jsx)(c.LpS, { text: G.intl.string(G.t["7uFZGt"]) })
                                                    : Q
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
                                                H
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
                                    onClick: s(x),
                                    "aria-label": G.intl.string(G.t.e5eQOy),
                                    "aria-controls": V,
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
                          id: V,
                          children: [
                              (0, i.jsx)("div", { className: M.yF }),
                              (0, i.jsx)(y.A, { groupListingId: l.id, subscription: t, className: M.kE }),
                              (0, i.jsxs)("div", {
                                  className: M.Zx,
                                  children: [
                                      (0, i.jsx)(k, { label: q, value: Z }),
                                      (0, i.jsx)(k, {
                                          label: G.intl.string(G.t.dltUMH),
                                          value: K,
                                          showInfoIcon: Q,
                                          infoIconTooltipText: Q ? G.intl.string(G.t["/q6fpa"]) : void 0,
                                      }),
                                      (0, i.jsx)(k, { label: G.intl.string(G.t.AOcwWB), value: W }),
                                  ],
                              }),
                              (0, i.jsx)(c.hKd, { size: 16 }),
                              !Y &&
                                  !H &&
                                  (0, i.jsx)(c.D0$, {
                                      label: G.intl.string(G.t.wmMFvA),
                                      children: (0, i.jsx)(U, { subscription: t }),
                                  }),
                              !J &&
                                  (0, i.jsx)(w, {
                                      isTrial: Q,
                                      isCancelled: Y,
                                      isResubscribing: f,
                                      shouldHideRoleSubscriptionEntryPoints: F,
                                      onCancelSubscriptionClick: () => {
                                          null != r && (0, O.q)({ groupListing: l, listing: n, subscription: t });
                                      },
                                      onChangePlanClick: () => {
                                          null != r &&
                                              ((0, E.pX)(P.BVt.CHANNEL(r.id, L.VV.ROLE_SUBSCRIPTIONS)),
                                              (0, C.default)(),
                                              m.A.show(
                                                  P.kqX.BACK_TO_PREVIOUS_SCREEN,
                                                  void 0,
                                                  G.intl.string(G.t.DvbaM4),
                                                  () => {
                                                      S.A.setState({ subsection: D.nR }),
                                                          (0, N.openUserSettings)(b.X.SUBSCRIPTIONS_PANEL);
                                                  },
                                              ));
                                      },
                                      onResubscribeClick: z,
                                  }),
                          ],
                      })
                    : null,
            ],
        });
    };
