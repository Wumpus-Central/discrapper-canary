n.d(t, { A: () => Z });
var i = n(627968),
    s = n(64700),
    l = n(503698),
    a = n.n(l),
    r = n(311907),
    o = n(827734),
    d = n(990078),
    u = n(534514),
    c = n(885574),
    g = n(289873),
    m = n(452027),
    _ = n(821609),
    A = n(696986),
    h = n(777666),
    p = n(834730),
    x = n(939249),
    E = n(847374),
    T = n(912851),
    S = n(793574),
    f = n(688810),
    b = n(323082),
    C = n(178856),
    v = n(915089),
    N = n(465932),
    I = n(263063),
    y = n(543767),
    j = n(420139),
    O = n(790284),
    R = n(976860),
    L = n(780964),
    D = n(779733),
    P = n(858897),
    G = n(295405),
    M = n(379082),
    U = n(710144),
    k = n(815332),
    w = n(568286),
    V = n(638182),
    B = n(652215),
    F = n(746080),
    z = n(355097),
    H = n(985018),
    Y = n(47685);
let X = (e) => {
        let { label: t, value: n, showInfoIcon: s, infoIconTooltipText: l } = e;
        return (0, i.jsxs)("div", {
            className: Y.L0,
            children: [
                (0, i.jsxs)("div", {
                    className: Y.a5,
                    children: [
                        (0, i.jsx)(u.D, { variant: "heading-deprecated-12/semibold", className: Y.HU, children: t }),
                        s &&
                            (0, i.jsx)(d.m, {
                                text: l,
                                children: (0, i.jsx)(c.m, { size: "xs", color: "currentColor", className: Y.Mo }),
                            }),
                    ],
                }),
                (0, i.jsx)(u.D, { variant: "heading-xl/semibold", className: Y.sx, children: n }),
            ],
        });
    },
    K = (e) => {
        let { subscription: t } = e,
            { analyticsLocations: n } = (0, f.Ay)(),
            [s] = (0, y.Kq)({
                subscriptionId: t.id,
                renewal: !0,
                analyticsLocations: n,
                analyticsLocation: S.A.GUILD_ROLE_SUBSCRIPTION_PAYMENT_SOURCE_WITH_INVOICE,
            }),
            l = (0, r.bG)([G.A], () => G.A.hasFetchedPaymentSources);
        return null != s && l
            ? (0, i.jsx)(j.A, { subscription: t, currentInvoicePreview: s, dropdownClassName: Y.Nw })
            : (0, i.jsx)(g.y, {});
    },
    W = (e) => {
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
            : (0, i.jsx)(m.D, {
                  label: H.intl.string(H.t["4neDM+"]),
                  children: (0, i.jsx)("div", {
                      className: Y.__invalid_rowButtons,
                      children: n
                          ? (0, i.jsx)(_.$, {
                                variant: "primary",
                                text: H.intl.string(H.t.y3mAE4),
                                onClick: r,
                                loading: s,
                            })
                          : (0, i.jsxs)(i.Fragment, {
                                children: [
                                    !t && !l && (0, i.jsx)(C.A, { label: H.intl.string(H.t.FRbWR8), onClick: o }),
                                    (0, i.jsx)(C.A, { label: H.intl.string(H.t.Dx0lF7), onClick: a }),
                                ],
                            }),
                  }),
              });
    },
    Z = (e) => {
        let { subscription: t } = e,
            {
                listing: n,
                groupListing: l,
                guild: r,
                expanded: u,
                handleToggleExpanded: c,
                subscriptionInfo: g,
            } = (0, M.A)(t),
            [_, S] = s.useState(!1),
            C = (0, v.GV)(),
            { analyticsLocations: y } = (0, f.Ay)(),
            { shouldHideGuildPurchaseEntryPoints: j } = (0, N.MH)(r?.id),
            G = t?.isPurchasedViaAppleGeneric;
        if (null == l || null == n || null == g) return null;
        let Z = async () => {
                try {
                    S(!0), await b.QP(t, y), (0, V.q)();
                } finally {
                    S(!1);
                }
            },
            {
                isCancelled: q,
                isPastDue: Q,
                subscriptionPrice: J,
                memberSince: $,
                nextRenewalDate: ee,
                nextRenewalLabel: et,
                isTrial: en,
            } = g,
            ei = n.soft_deleted || null == r || G;
        return (0, i.jsxs)("div", {
            className: Y.kL,
            children: [
                (0, i.jsx)(U.A, {
                    onClick: c,
                    className: Y.N1,
                    children: (e) => {
                        let { areaRef: t, handleStopPropagation: s } = e;
                        return (0, i.jsxs)(i.Fragment, {
                            children: [
                                null != r && (0, i.jsx)(I.Ay, { guild: r, active: !0, size: I.Ay.Sizes.MEDIUM }),
                                (0, i.jsxs)("div", {
                                    className: Y.if,
                                    children: [
                                        (0, i.jsx)(p.E, {
                                            variant: "text-md/medium",
                                            className: Y.J5,
                                            children: null != r ? r.name : H.intl.string(H.t["He+cmd"]),
                                        }),
                                        (0, i.jsxs)("div", {
                                            className: Y.xp,
                                            children: [
                                                (0, i.jsx)(p.E, {
                                                    variant: "text-sm/normal",
                                                    className: Y.KR,
                                                    children: n.name,
                                                }),
                                                q
                                                    ? (0, i.jsx)(h.Lp, { text: H.intl.string(H.t["7uFZGt"]) })
                                                    : en
                                                      ? (0, i.jsx)(h.Lp, {
                                                            text: H.intl.string(H.t["6anton"]),
                                                            color: o.A.unsafe_rawColors.BRAND_500.css,
                                                        })
                                                      : Q
                                                        ? (0, i.jsx)(d.m, {
                                                              text: H.intl.string(H.t.eSuJE2),
                                                              children: (0, i.jsx)("div", {
                                                                  children: (0, i.jsx)(h.Lp, {
                                                                      className: Y.qc,
                                                                      text: H.intl.string(H.t.NrRwIl),
                                                                      color: o.A.unsafe_rawColors.YELLOW_300.css,
                                                                  }),
                                                              }),
                                                          })
                                                        : null,
                                                G
                                                    ? (0, i.jsx)(d.m, {
                                                          text: H.intl.string(H.t.nv1IqK),
                                                          children: (0, i.jsx)("div", {
                                                              children: (0, i.jsx)(h.Lp, {
                                                                  text: H.intl.string(H.t["sBl3X/"]),
                                                                  color: o.A.colors.BACKGROUND_MOD_MUTED.css,
                                                              }),
                                                          }),
                                                      })
                                                    : null,
                                            ],
                                        }),
                                    ],
                                }),
                                (0, i.jsx)(x.D, {
                                    onClick: s(c),
                                    "aria-label": H.intl.string(H.t.e5eQOy),
                                    "aria-controls": C,
                                    "aria-expanded": u,
                                    focusProps: { ringTarget: t },
                                    children: (0, i.jsx)(E.a, {
                                        size: "md",
                                        color: "currentColor",
                                        className: a()(Y.D6, { [Y.S7]: u }),
                                    }),
                                }),
                            ],
                        });
                    },
                }),
                u
                    ? (0, i.jsxs)("div", {
                          id: C,
                          children: [
                              (0, i.jsx)("div", { className: Y.yF }),
                              (0, i.jsx)(k.A, { groupListingId: l.id, subscription: t, className: Y.kE }),
                              (0, i.jsxs)("div", {
                                  className: Y.Zx,
                                  children: [
                                      (0, i.jsx)(X, { label: et, value: ee }),
                                      (0, i.jsx)(X, {
                                          label: H.intl.string(H.t.dltUMH),
                                          value: J,
                                          showInfoIcon: en,
                                          infoIconTooltipText: en ? H.intl.string(H.t["/q6fpa"]) : void 0,
                                      }),
                                      (0, i.jsx)(X, { label: H.intl.string(H.t.AOcwWB), value: $ }),
                                  ],
                              }),
                              (0, i.jsx)(A.h, { size: 16 }),
                              !q &&
                                  !G &&
                                  (0, i.jsx)(m.D, {
                                      label: H.intl.string(H.t.wmMFvA),
                                      children: (0, i.jsx)(K, { subscription: t }),
                                  }),
                              !ei &&
                                  (0, i.jsx)(W, {
                                      isTrial: en,
                                      isCancelled: q,
                                      isResubscribing: _,
                                      shouldHideRoleSubscriptionEntryPoints: j,
                                      onCancelSubscriptionClick: () => {
                                          null != r && (0, w.q)({ groupListing: l, listing: n, subscription: t });
                                      },
                                      onChangePlanClick: () => {
                                          null != r &&
                                              ((0, R.pX)(B.BVt.CHANNEL(r.id, F.VV.ROLE_SUBSCRIPTIONS)),
                                              (0, D.default)(),
                                              T.A.show(
                                                  B.kqX.BACK_TO_PREVIOUS_SCREEN,
                                                  void 0,
                                                  H.intl.string(H.t.DvbaM4),
                                                  () => {
                                                      O.A.setState({ subsection: z.nR }),
                                                          (0, P.openUserSettings)(L.X.SUBSCRIPTIONS_PANEL);
                                                  },
                                              ));
                                      },
                                      onResubscribeClick: Z,
                                  }),
                          ],
                      })
                    : null,
            ],
        });
    };
