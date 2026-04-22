n.d(t, { A: () => R });
var a = n(627968);
n(64700);
var r = n(503698),
    l = n.n(r),
    i = n(534514),
    s = n(834730),
    o = n(315629),
    u = n(935462),
    c = n(508770),
    d = n(742810),
    m = n(584160),
    p = n(156312),
    _ = n(166532),
    f = n(615310),
    g = n(800471),
    b = n(109913),
    v = n(422936),
    x = n(179775),
    h = n(788868),
    I = n(88001),
    A = n(985018),
    y = n(955212),
    T = n(967744),
    E = n(944496),
    C = n(51148),
    P = n(232266),
    L = n(243002),
    S = n(303930),
    N = n(241988);
function j(e) {
    let { isOneStepCheckout: t, headerText: n, step: r, filteredBreadcrumbs: l } = e;
    if (t)
        return (0, a.jsx)("div", {
            className: y.r9,
            children: (0, a.jsx)(i.D, { variant: "heading-md/bold", children: n }),
        });
    let o = l.length > 1;
    return (0, a.jsxs)("div", {
        className: y.go,
        children: [
            (0, a.jsx)(s.E, { variant: "text-lg/semibold", children: n }),
            o && (0, a.jsx)(b.A, { activeId: r, breadcrumbs: l }),
        ],
    });
}
function M(e) {
    let { isTier2: t } = e,
        n = t ? L : C;
    return (0, a.jsxs)(a.Fragment, {
        children: [
            (0, a.jsx)("img", { src: t ? P : E, alt: "", className: y.mR }),
            (0, a.jsx)("img", { src: n, alt: "", className: y.dz }),
            (0, a.jsx)("img", { src: n, alt: "", className: y.lM }),
        ],
    });
}
let R = function (e) {
    let {
            hideCloseButton: t = !1,
            hideCloseOnFullScreen: n,
            onClose: r,
            upgradeToPremiumType: i,
            isEligibleForTrial: b = !1,
            showTrialBadge: E = !1,
            showDiscountBadge: C = !1,
            isPremiumGroupPurchase: P = !1,
            forceBrandRefreshHeader: L = !1,
        } = e,
        R = i === h.PremiumTypes.TIER_2,
        k = (0, g.lp)(b),
        D = (0, v.O)(),
        O = D?.discount?.amount,
        { startedPaymentFlowWithPaymentSourcesRef: w, isDisplayingWowMomentConfirmation: U } = (0, p.P5)(),
        { step: B, breadcrumbsData: G } = (0, f.Ay)(),
        F = (0, d.D7)({ location: "PremiumPaymentHeader" });
    if (!L && (null == G || 0 === G.length)) return null;
    let H = (G ?? []).flatMap((e) => {
        let t = e.useBreadcrumbLabel(b),
            n = e.sectionHeaderText;
        return null != t ? { id: e.id, label: t, sectionHeaderText: n } : [];
    });
    if (!L && 0 === H.length) return null;
    let W = (H = H.filter((e) => {
            if (P && e.id === _.pn.PLAN_SELECT) return !1;
            let t = e.id !== _.pn.ADD_PAYMENT_STEPS,
                n = e.id === _.pn.ADD_PAYMENT_STEPS && !w.current;
            return !b || t || n;
        })).find((e) => e.id === B),
        Y = W?.sectionHeaderText?.() ?? W?.label,
        V = !(F && null != B && m.M.includes(B)) && null != Y && null != B,
        z = k && V && B === _.pn.REVIEW,
        q = R ? "nitro-pink" : "nitro-green",
        K = P ? (0, I.DP)() : R ? A.intl.string(A.t.lG6a5x) : A.intl.string(A.t["t9uG/o"]),
        $ = y.kL,
        Q = l()(y.N1, T.headerGradient);
    return U
        ? (0, a.jsx)("div", { className: $, children: (0, a.jsx)(o.h, { color: q, className: Q }) })
        : (0, a.jsxs)("div", {
              className: $,
              children: [
                  (0, a.jsxs)(o.h, {
                      color: q,
                      className: l()(Q, { [y.s1]: !V }),
                      children: [
                          (0, a.jsx)(M, { isTier2: R }),
                          !t &&
                              (0, a.jsx)(u.s_, {
                                  "data-migration-pending": !0,
                                  hideOnFullscreen: n,
                                  onClick: r,
                                  className: y.Ep,
                              }),
                          (0, a.jsx)("img", { src: R ? N : S, alt: "", className: z ? y.i_ : y.kX }),
                          (0, a.jsxs)("div", {
                              className: y.FS,
                              children: [
                                  P &&
                                      (0, a.jsx)("div", {
                                          className: y.$N,
                                          children: (0, a.jsx)(c.E, { type: "beta", variant: "expressive" }),
                                      }),
                                  (0, a.jsx)(s.E, {
                                      variant: "display-md",
                                      color: "text-strong",
                                      className: y.cf,
                                      children: K,
                                  }),
                              ],
                          }),
                      ],
                  }),
                  (E || C) && (0, a.jsx)(x.A, { discountAmount: O }),
                  V && (0, a.jsx)(j, { isOneStepCheckout: k, headerText: Y, step: B, filteredBreadcrumbs: H }),
              ],
          });
};
