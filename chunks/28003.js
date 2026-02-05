"use strict";
n.d(t, { A: () => N });
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
    p = n(788868),
    h = n(88001),
    m = n(985018),
    g = n(763979),
    E = n(944496),
    A = n(51148),
    I = n(232266),
    T = n(243002),
    y = n(303930),
    S = n(241988);
function v(e) {
    let { isOneStepCheckout: t, headerText: n, step: i, filteredBreadcrumbs: a } = e;
    if (t)
        return (0, r.jsx)("div", {
            className: g.r9,
            children: (0, r.jsx)(s.Heading, { variant: "heading-md/bold", children: n }),
        });
    let o = a.length > 1;
    return (0, r.jsxs)("div", {
        className: g.go,
        children: [
            (0, r.jsx)(s.Text, { variant: "text-lg/semibold", children: n }),
            o && (0, r.jsx)(d.A, { activeId: i, breadcrumbs: a }),
        ],
    });
}
function C(e) {
    let { isTier2: t } = e,
        n = t ? I : E,
        i = t ? T : A;
    return (0, r.jsxs)(r.Fragment, {
        children: [
            (0, r.jsx)("img", { src: n, alt: "", className: g.mR }),
            (0, r.jsx)("img", { src: i, alt: "", className: g.dz }),
            (0, r.jsx)("img", { src: i, alt: "", className: g.lM }),
        ],
    });
}
let b = (e, t) => (t ? (0, h.DP)() : e ? m.intl.string(m.t.lG6a5x) : m.intl.string(m.t["t9uG/o"])),
    N = function (e) {
        let {
                hideCloseButton: t = !1,
                hideCloseOnFullScreen: n,
                onClose: i,
                upgradeToPremiumType: d,
                isEligibleForTrial: h = !1,
                showTrialBadge: m = !1,
                showDiscountBadge: E = !1,
                isPremiumGroupPurchase: A = !1,
            } = e,
            I = d === p.PremiumTypes.TIER_2,
            T = (0, c.lp)(h),
            N = (0, _.O)(),
            R = N?.discount?.amount,
            { enabled: O } = (0, o.T0)({ location: "PremiumBrandRefreshPaymentHeader" }),
            D = I ? S : y,
            {
                step: L,
                breadcrumbs: w,
                startedPaymentFlowWithPaymentSourcesRef: x,
                isDisplayingWowMomentConfirmation: P,
            } = (0, l.P5)();
        if (null == w || 0 === w.length) return null;
        let M = w.flatMap((e) => {
            let t = e.useBreadcrumbLabel(h),
                n = e.sectionHeaderText;
            return null != t ? { id: e.id, label: t, sectionHeaderText: n } : [];
        });
        if (0 === M.length) return null;
        let k = (M = M.filter((e) => {
                if (A && e.id === u.pn.PLAN_SELECT) return !1;
                let t = e.id !== u.pn.ADD_PAYMENT_STEPS,
                    n = e.id === u.pn.ADD_PAYMENT_STEPS && !x.current;
                return !h || (h && (t || n));
            })).find((e) => e.id === L),
            U = k?.sectionHeaderText?.() ?? k?.label,
            G = !O && null != U && null != L,
            V = T && G && L === u.pn.REVIEW,
            F = I ? "nitro-pink" : "nitro-green",
            B = b(I, A);
        return P
            ? (0, r.jsx)("div", { className: g.kL, children: (0, r.jsx)(s.hLv, { color: F, className: g.N1 }) })
            : (0, r.jsxs)("div", {
                  className: g.kL,
                  children: [
                      (0, r.jsxs)(s.hLv, {
                          color: F,
                          className: a()(g.N1, { [g.s1]: !G }),
                          children: [
                              (0, r.jsx)(C, { isTier2: I }),
                              !t &&
                                  (0, r.jsx)(s.s_y, {
                                      "data-migration-pending": !0,
                                      hideOnFullscreen: n,
                                      onClick: i,
                                      className: g.Ep,
                                  }),
                              (0, r.jsx)("img", { src: D, alt: "", className: V ? g.i_ : g.kX }),
                              (0, r.jsxs)("div", {
                                  className: g.FS,
                                  children: [
                                      A &&
                                          (0, r.jsx)("div", {
                                              className: g.$N,
                                              children: (0, r.jsx)(s.Exy, { type: "beta", variant: "expressive" }),
                                          }),
                                      (0, r.jsx)(s.Text, {
                                          variant: "display-md",
                                          color: "text-strong",
                                          className: g.cf,
                                          children: B,
                                      }),
                                  ],
                              }),
                          ],
                      }),
                      (m || E) && (0, r.jsx)(f.A, { discountAmount: R }),
                      G && (0, r.jsx)(v, { isOneStepCheckout: T, headerText: U, step: L, filteredBreadcrumbs: M }),
                      V && (0, r.jsx)("div", { className: g.uo, children: (0, r.jsx)("div", { className: g.dQ }) }),
                  ],
              });
    };
