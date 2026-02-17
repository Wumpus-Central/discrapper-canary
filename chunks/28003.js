"use strict";
n.d(t, { A: () => O });
var r = n(627968);
n(64700);
var i = n(503698),
    a = n.n(i),
    s = n(397927),
    o = n(608805),
    l = n(156312),
    u = n(166532),
    c = n(800471),
    d = n(109913),
    _ = n(422936),
    f = n(179775),
    h = n(788868),
    p = n(88001),
    g = n(985018),
    E = n(763979),
    A = n(22789),
    I = n(944496),
    T = n(51148),
    y = n(232266),
    S = n(243002),
    v = n(303930),
    C = n(241988);
function b(e) {
    let { isOneStepCheckout: t, headerText: n, step: i, filteredBreadcrumbs: a } = e;
    if (t)
        return (0, r.jsx)("div", {
            className: E.r9,
            children: (0, r.jsx)(s.Heading, { variant: "heading-md/bold", children: n }),
        });
    let o = a.length > 1;
    return (0, r.jsxs)("div", {
        className: E.go,
        children: [
            (0, r.jsx)(s.Text, { variant: "text-lg/semibold", children: n }),
            o && (0, r.jsx)(d.A, { activeId: i, breadcrumbs: a }),
        ],
    });
}
function N(e) {
    let { isTier2: t } = e,
        n = t ? y : I,
        i = t ? S : T;
    return (0, r.jsxs)(r.Fragment, {
        children: [
            (0, r.jsx)("img", { src: n, alt: "", className: E.mR }),
            (0, r.jsx)("img", { src: i, alt: "", className: E.dz }),
            (0, r.jsx)("img", { src: i, alt: "", className: E.lM }),
        ],
    });
}
let R = (e, t) => (t ? (0, p.DP)() : e ? g.intl.string(g.t.lG6a5x) : g.intl.string(g.t["t9uG/o"])),
    O = function (e) {
        let {
                hideCloseButton: t = !1,
                hideCloseOnFullScreen: n,
                onClose: i,
                upgradeToPremiumType: d,
                isEligibleForTrial: p = !1,
                showTrialBadge: g = !1,
                showDiscountBadge: I = !1,
                isPremiumGroupPurchase: T = !1,
            } = e,
            y = d === h.PremiumTypes.TIER_2,
            S = (0, c.lp)(p),
            O = (0, _.O)(),
            D = O?.discount?.amount,
            { enabled: L } = (0, o.T0)({ location: "PremiumBrandRefreshPaymentHeader" }),
            w = y ? C : v,
            {
                step: x,
                breadcrumbs: P,
                startedPaymentFlowWithPaymentSourcesRef: M,
                isDisplayingWowMomentConfirmation: k,
            } = (0, l.P5)();
        if (null == P || 0 === P.length) return null;
        let U = P.flatMap((e) => {
            let t = e.useBreadcrumbLabel(p),
                n = e.sectionHeaderText;
            return null != t ? { id: e.id, label: t, sectionHeaderText: n } : [];
        });
        if (0 === U.length) return null;
        let G = (U = U.filter((e) => {
                if (T && e.id === u.pn.PLAN_SELECT) return !1;
                let t = e.id !== u.pn.ADD_PAYMENT_STEPS,
                    n = e.id === u.pn.ADD_PAYMENT_STEPS && !M.current;
                return !p || (p && (t || n));
            })).find((e) => e.id === x),
            F = G?.sectionHeaderText?.() ?? G?.label,
            V = !(L && x === u.pn.REVIEW) && null != F && null != x,
            B = S && V && x === u.pn.REVIEW,
            j = y ? "nitro-pink" : "nitro-green",
            H = R(y, T);
        return k
            ? (0, r.jsx)("div", {
                  className: E.kL,
                  children: (0, r.jsx)(s.hLv, { color: j, className: a()(E.N1, A.headerGradient) }),
              })
            : (0, r.jsxs)("div", {
                  className: E.kL,
                  children: [
                      (0, r.jsxs)(s.hLv, {
                          color: j,
                          className: a()(E.N1, A.headerGradient, { [E.s1]: !V }),
                          children: [
                              (0, r.jsx)(N, { isTier2: y }),
                              !t &&
                                  (0, r.jsx)(s.s_y, {
                                      "data-migration-pending": !0,
                                      hideOnFullscreen: n,
                                      onClick: i,
                                      className: E.Ep,
                                  }),
                              (0, r.jsx)("img", { src: w, alt: "", className: B ? E.i_ : E.kX }),
                              (0, r.jsxs)("div", {
                                  className: E.FS,
                                  children: [
                                      T &&
                                          (0, r.jsx)("div", {
                                              className: E.$N,
                                              children: (0, r.jsx)(s.Exy, { type: "beta", variant: "expressive" }),
                                          }),
                                      (0, r.jsx)(s.Text, {
                                          variant: "display-md",
                                          color: "text-strong",
                                          className: E.cf,
                                          children: H,
                                      }),
                                  ],
                              }),
                          ],
                      }),
                      (g || I) && (0, r.jsx)(f.A, { discountAmount: D }),
                      V && (0, r.jsx)(b, { isOneStepCheckout: S, headerText: F, step: x, filteredBreadcrumbs: U }),
                  ],
              });
    };
