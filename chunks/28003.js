"use strict";
n.d(t, { A: () => b });
var r = n(627968);
n(64700);
var i = n(503698),
    s = n.n(i),
    a = n(397927),
    o = n(608805),
    l = n(584160),
    u = n(156312),
    c = n(166532),
    d = n(800471),
    _ = n(109913),
    f = n(422936),
    p = n(179775),
    h = n(788868),
    m = n(88001),
    E = n(985018),
    g = n(558733),
    A = n(52379),
    I = n(944496),
    T = n(51148),
    S = n(232266),
    y = n(243002),
    v = n(303930),
    N = n(241988);
function C(e) {
    let { isOneStepCheckout: t, headerText: n, step: i, filteredBreadcrumbs: s } = e;
    if (t)
        return (0, r.jsx)("div", {
            className: g.r9,
            children: (0, r.jsx)(a.Heading, { variant: "heading-md/bold", children: n }),
        });
    let o = s.length > 1;
    return (0, r.jsxs)("div", {
        className: g.go,
        children: [
            (0, r.jsx)(a.Text, { variant: "text-lg/semibold", children: n }),
            o && (0, r.jsx)(_.A, { activeId: i, breadcrumbs: s }),
        ],
    });
}
function R(e) {
    let { isTier2: t } = e,
        n = t ? S : I,
        i = t ? y : T;
    return (0, r.jsxs)(r.Fragment, {
        children: [
            (0, r.jsx)("img", { src: n, alt: "", className: g.mR }),
            (0, r.jsx)("img", { src: i, alt: "", className: g.dz }),
            (0, r.jsx)("img", { src: i, alt: "", className: g.lM }),
        ],
    });
}
let O = (e, t) => (t ? (0, m.DP)() : e ? E.intl.string(E.t.lG6a5x) : E.intl.string(E.t["t9uG/o"])),
    b = function (e) {
        let {
                hideCloseButton: t = !1,
                hideCloseOnFullScreen: n,
                onClose: i,
                upgradeToPremiumType: _,
                isEligibleForTrial: m = !1,
                showTrialBadge: E = !1,
                showDiscountBadge: I = !1,
                isPremiumGroupPurchase: T = !1,
                forceBrandRefreshHeader: S = !1,
            } = e,
            y = _ === h.PremiumTypes.TIER_2,
            b = (0, d.lp)(m),
            D = (0, f.O)(),
            L = D?.discount?.amount,
            w = y ? N : v,
            {
                step: M,
                breadcrumbs: x,
                startedPaymentFlowWithPaymentSourcesRef: P,
                isDisplayingWowMomentConfirmation: k,
            } = (0, u.P5)(),
            U = (0, o.D7)({ location: "PremiumBrandRefreshPaymentHeader" });
        if (!S && (null == x || 0 === x.length)) return null;
        let G = (x ?? []).flatMap((e) => {
            let t = e.useBreadcrumbLabel(m),
                n = e.sectionHeaderText;
            return null != t ? { id: e.id, label: t, sectionHeaderText: n } : [];
        });
        if (!S && 0 === G.length) return null;
        let F = (G = G.filter((e) => {
                if (T && e.id === c.pn.PLAN_SELECT) return !1;
                let t = e.id !== c.pn.ADD_PAYMENT_STEPS,
                    n = e.id === c.pn.ADD_PAYMENT_STEPS && !P.current;
                return !m || t || n;
            })).find((e) => e.id === M),
            V = F?.sectionHeaderText?.() ?? F?.label,
            B = !(U && null != M && l.M.includes(M)) && null != V && null != M,
            H = b && B && M === c.pn.REVIEW,
            j = y ? "nitro-pink" : "nitro-green",
            Y = O(y, T),
            W = g.kL,
            K = s()(g.N1, A.headerGradient);
        return k
            ? (0, r.jsx)("div", { className: W, children: (0, r.jsx)(a.hLv, { color: j, className: K }) })
            : (0, r.jsxs)("div", {
                  className: W,
                  children: [
                      (0, r.jsxs)(a.hLv, {
                          color: j,
                          className: s()(K, { [g.s1]: !B }),
                          children: [
                              (0, r.jsx)(R, { isTier2: y }),
                              !t &&
                                  (0, r.jsx)(a.s_y, {
                                      "data-migration-pending": !0,
                                      hideOnFullscreen: n,
                                      onClick: i,
                                      className: g.Ep,
                                  }),
                              (0, r.jsx)("img", { src: w, alt: "", className: H ? g.i_ : g.kX }),
                              (0, r.jsxs)("div", {
                                  className: g.FS,
                                  children: [
                                      T &&
                                          (0, r.jsx)("div", {
                                              className: g.$N,
                                              children: (0, r.jsx)(a.Exy, { type: "beta", variant: "expressive" }),
                                          }),
                                      (0, r.jsx)(a.Text, {
                                          variant: "display-md",
                                          color: "text-strong",
                                          className: g.cf,
                                          children: Y,
                                      }),
                                  ],
                              }),
                          ],
                      }),
                      (E || I) && (0, r.jsx)(p.A, { discountAmount: L }),
                      B && (0, r.jsx)(C, { isOneStepCheckout: b, headerText: V, step: M, filteredBreadcrumbs: G }),
                  ],
              });
    };
