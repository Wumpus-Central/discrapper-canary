n.d(t, {
    A: () => C,
}),
    n(114821),
    n(339614);
var r = n(627968);
n(64700);
var i = n(503698),
    a = n.n(i),
    s = n(397927),
    o = n(608805),
    l = n(156312),
    c = n(166532),
    u = n(800471),
    d = n(109913),
    f = n(422936),
    p = n(179775),
    _ = n(788868),
    h = n(88001),
    m = n(985018),
    g = n(763979),
    E = n(944496),
    y = n(51148),
    b = n(232266),
    O = n(243002),
    v = n(303930),
    A = n(241988);

function I(e) {
    let { isOneStepCheckout: t, headerText: n, step: i, filteredBreadcrumbs: a } = e;
    if (t)
        return (0, r.jsx)("div", {
            className: g.r9,
            children: (0, r.jsx)(s.Heading, {
                variant: "heading-md/bold",
                children: n,
            }),
        });
    let o = a.length > 1;
    return (0, r.jsxs)("div", {
        className: g.go,
        children: [
            (0, r.jsx)(s.Text, {
                variant: "text-lg/semibold",
                children: n,
            }),
            o &&
                (0, r.jsx)(d.A, {
                    activeId: i,
                    breadcrumbs: a,
                }),
        ],
    });
}

function S(e) {
    let { isTier2: t } = e,
        n = t ? b : E,
        i = t ? O : y;
    return (0, r.jsxs)(r.Fragment, {
        children: [
            (0, r.jsx)("img", {
                src: n,
                alt: "",
                className: g.mR,
            }),
            (0, r.jsx)("img", {
                src: i,
                alt: "",
                className: g.dz,
            }),
            (0, r.jsx)("img", {
                src: i,
                alt: "",
                className: g.lM,
            }),
        ],
    });
}
let T = (e, t) => (t ? (0, h.DP)() : e ? m.intl.string(m.t.lG6a5x) : m.intl.string(m.t["t9uG/o"])),
    C = function (e) {
        var t, n, i;
        let {
                hideCloseButton: d = !1,
                hideCloseOnFullScreen: h,
                onClose: m,
                upgradeToPremiumType: E,
                isEligibleForTrial: y = !1,
                showTrialBadge: b = !1,
                showDiscountBadge: O = !1,
                isPremiumGroupPurchase: C = !1,
            } = e,
            N = E === _.PremiumTypes.TIER_2,
            w = (0, u.lp)(y),
            R = (0, f.O)(),
            P = null == R || null == (n = R.discount) ? void 0 : n.amount,
            { enabled: D } = (0, o.T0)({
                location: "PremiumBrandRefreshPaymentHeader",
            }),
            x = N ? A : v,
            {
                step: L,
                breadcrumbs: j,
                startedPaymentFlowWithPaymentSourcesRef: M,
                isDisplayingWowMomentConfirmation: k,
            } = (0, l.P5)();
        if (null == j || 0 === j.length) return null;
        let U = j.flatMap((e) => {
            let t = e.useBreadcrumbLabel(y),
                n = e.sectionHeaderText;
            return null != t
                ? {
                      id: e.id,
                      label: t,
                      sectionHeaderText: n,
                  }
                : [];
        });
        if (0 === U.length) return null;
        let G = (U = U.filter((e) => {
                if (C && e.id === c.pn.PLAN_SELECT) return !1;
                let t = e.id !== c.pn.ADD_PAYMENT_STEPS,
                    n = e.id === c.pn.ADD_PAYMENT_STEPS && !M.current;
                return !y || (y && (t || n));
            })).find((e) => e.id === L),
            V =
                null != (t = null == G || null == (i = G.sectionHeaderText) ? void 0 : i.call(G))
                    ? t
                    : null == G
                      ? void 0
                      : G.label,
            F = !D && null != V && null != L,
            B = w && F && L === c.pn.REVIEW,
            H = N ? "nitro-pink" : "nitro-green",
            Y = T(N, C);
        return k
            ? (0, r.jsx)("div", {
                  className: g.kL,
                  children: (0, r.jsx)(s.hLv, {
                      color: H,
                      className: g.N1,
                  }),
              })
            : (0, r.jsxs)("div", {
                  className: g.kL,
                  children: [
                      (0, r.jsxs)(s.hLv, {
                          color: H,
                          className: a()(g.N1, {
                              [g.s1]: !F,
                          }),
                          children: [
                              (0, r.jsx)(S, {
                                  isTier2: N,
                              }),
                              !d &&
                                  (0, r.jsx)(s.s_y, {
                                      "data-migration-pending": !0,
                                      hideOnFullscreen: h,
                                      onClick: m,
                                      className: g.Ep,
                                  }),
                              (0, r.jsx)("img", {
                                  src: x,
                                  alt: "",
                                  className: B ? g.i_ : g.kX,
                              }),
                              (0, r.jsxs)("div", {
                                  className: g.FS,
                                  children: [
                                      C &&
                                          (0, r.jsx)("div", {
                                              className: g.$N,
                                              children: (0, r.jsx)(s.Exy, {
                                                  type: "beta",
                                                  variant: "expressive",
                                              }),
                                          }),
                                      (0, r.jsx)(s.Text, {
                                          variant: "display-md",
                                          color: "text-strong",
                                          className: g.cf,
                                          children: Y,
                                      }),
                                  ],
                              }),
                          ],
                      }),
                      (b || O) &&
                          (0, r.jsx)(p.A, {
                              discountAmount: P,
                          }),
                      F &&
                          (0, r.jsx)(I, {
                              isOneStepCheckout: w,
                              headerText: V,
                              step: L,
                              filteredBreadcrumbs: U,
                          }),
                      B &&
                          (0, r.jsx)("div", {
                              className: g.uo,
                              children: (0, r.jsx)("div", {
                                  className: g.dQ,
                              }),
                          }),
                  ],
              });
    };
