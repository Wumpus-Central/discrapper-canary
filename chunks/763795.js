"use strict";
n.d(t, { A: () => M });
var r = n(627968);
n(64700);
var i = n(503698),
    s = n.n(i),
    a = n(534514),
    o = n(834730),
    l = n(315629),
    u = n(935462),
    c = n(508770),
    d = n(742810),
    _ = n(584160),
    f = n(156312),
    p = n(166532),
    h = n(615310),
    E = n(800471),
    m = n(109913),
    g = n(422936),
    A = n(179775),
    I = n(788868),
    T = n(88001),
    S = n(985018),
    y = n(955212),
    N = n(967744),
    v = n(944496),
    C = n(51148),
    O = n(232266),
    R = n(243002),
    b = n(303930),
    D = n(241988);
function L(e) {
    let { isOneStepCheckout: t, headerText: n, step: i, filteredBreadcrumbs: s } = e;
    if (t)
        return (0, r.jsx)("div", {
            className: y.r9,
            children: (0, r.jsx)(a.D, { variant: "heading-md/bold", children: n }),
        });
    let l = s.length > 1;
    return (0, r.jsxs)("div", {
        className: y.go,
        children: [
            (0, r.jsx)(o.E, { variant: "text-lg/semibold", children: n }),
            l && (0, r.jsx)(m.A, { activeId: i, breadcrumbs: s }),
        ],
    });
}
function w(e) {
    let { isTier2: t } = e,
        n = t ? R : C;
    return (0, r.jsxs)(r.Fragment, {
        children: [
            (0, r.jsx)("img", { src: t ? O : v, alt: "", className: y.mR }),
            (0, r.jsx)("img", { src: n, alt: "", className: y.dz }),
            (0, r.jsx)("img", { src: n, alt: "", className: y.lM }),
        ],
    });
}
let M = function (e) {
    let {
            hideCloseButton: t = !1,
            hideCloseOnFullScreen: n,
            onClose: i,
            upgradeToPremiumType: a,
            isEligibleForTrial: m = !1,
            showTrialBadge: v = !1,
            showDiscountBadge: C = !1,
            isPremiumGroupPurchase: O = !1,
            forceBrandRefreshHeader: R = !1,
        } = e,
        M = a === I.PremiumTypes.TIER_2,
        P = (0, E.lp)(m),
        x = (0, g.O)(),
        k = x?.discount?.amount,
        { startedPaymentFlowWithPaymentSourcesRef: U, isDisplayingWowMomentConfirmation: G } = (0, f.P5)(),
        { step: F, breadcrumbsData: V } = (0, h.Ay)(),
        B = (0, d.D7)({ location: "PremiumPaymentHeader" });
    if (!R && (null == V || 0 === V.length)) return null;
    let H = (V ?? []).flatMap((e) => {
        let t = e.useBreadcrumbLabel(m),
            n = e.sectionHeaderText;
        return null != t ? { id: e.id, label: t, sectionHeaderText: n } : [];
    });
    if (!R && 0 === H.length) return null;
    let j = (H = H.filter((e) => {
            if (O && e.id === p.pn.PLAN_SELECT) return !1;
            let t = e.id !== p.pn.ADD_PAYMENT_STEPS,
                n = e.id === p.pn.ADD_PAYMENT_STEPS && !U.current;
            return !m || t || n;
        })).find((e) => e.id === F),
        Y = j?.sectionHeaderText?.() ?? j?.label,
        W = !(B && null != F && _.M.includes(F)) && null != Y && null != F,
        K = P && W && F === p.pn.REVIEW,
        $ = M ? "nitro-pink" : "nitro-green",
        z = O ? (0, T.DP)() : M ? S.intl.string(S.t.lG6a5x) : S.intl.string(S.t["t9uG/o"]),
        q = y.kL,
        X = s()(y.N1, N.headerGradient);
    return G
        ? (0, r.jsx)("div", { className: q, children: (0, r.jsx)(l.h, { color: $, className: X }) })
        : (0, r.jsxs)("div", {
              className: q,
              children: [
                  (0, r.jsxs)(l.h, {
                      color: $,
                      className: s()(X, { [y.s1]: !W }),
                      children: [
                          (0, r.jsx)(w, { isTier2: M }),
                          !t &&
                              (0, r.jsx)(u.s_, {
                                  "data-migration-pending": !0,
                                  hideOnFullscreen: n,
                                  onClick: i,
                                  className: y.Ep,
                              }),
                          (0, r.jsx)("img", { src: M ? D : b, alt: "", className: K ? y.i_ : y.kX }),
                          (0, r.jsxs)("div", {
                              className: y.FS,
                              children: [
                                  O &&
                                      (0, r.jsx)("div", {
                                          className: y.$N,
                                          children: (0, r.jsx)(c.E, { type: "beta", variant: "expressive" }),
                                      }),
                                  (0, r.jsx)(o.E, {
                                      variant: "display-md",
                                      color: "text-strong",
                                      className: y.cf,
                                      children: z,
                                  }),
                              ],
                          }),
                      ],
                  }),
                  (v || C) && (0, r.jsx)(A.A, { discountAmount: k }),
                  W && (0, r.jsx)(L, { isOneStepCheckout: P, headerText: Y, step: F, filteredBreadcrumbs: H }),
              ],
          });
};
