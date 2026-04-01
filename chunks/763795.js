"use strict";
n.d(t, { A: () => D });
var r = n(627968);
n(64700);
var i = n(503698),
    s = n.n(i),
    a = n(397927),
    o = n(742810),
    l = n(584160),
    u = n(156312),
    c = n(166532),
    d = n(615310),
    _ = n(800471),
    f = n(109913),
    p = n(422936),
    h = n(179775),
    m = n(788868),
    E = n(88001),
    g = n(985018),
    A = n(98748),
    I = n(110992),
    T = n(944496),
    S = n(51148),
    y = n(232266),
    v = n(243002),
    N = n(303930),
    C = n(241988);
function R(e) {
    let { isOneStepCheckout: t, headerText: n, step: i, filteredBreadcrumbs: s } = e;
    if (t)
        return (0, r.jsx)("div", {
            className: A.r9,
            children: (0, r.jsx)(a.Heading, { variant: "heading-md/bold", children: n }),
        });
    let o = s.length > 1;
    return (0, r.jsxs)("div", {
        className: A.go,
        children: [
            (0, r.jsx)(a.Text, { variant: "text-lg/semibold", children: n }),
            o && (0, r.jsx)(f.A, { activeId: i, breadcrumbs: s }),
        ],
    });
}
function O(e) {
    let { isTier2: t } = e,
        n = t ? y : T,
        i = t ? v : S;
    return (0, r.jsxs)(r.Fragment, {
        children: [
            (0, r.jsx)("img", { src: n, alt: "", className: A.mR }),
            (0, r.jsx)("img", { src: i, alt: "", className: A.dz }),
            (0, r.jsx)("img", { src: i, alt: "", className: A.lM }),
        ],
    });
}
let b = (e, t) => (t ? (0, E.DP)() : e ? g.intl.string(g.t.lG6a5x) : g.intl.string(g.t["t9uG/o"])),
    D = function (e) {
        let {
                hideCloseButton: t = !1,
                hideCloseOnFullScreen: n,
                onClose: i,
                upgradeToPremiumType: f,
                isEligibleForTrial: E = !1,
                showTrialBadge: g = !1,
                showDiscountBadge: T = !1,
                isPremiumGroupPurchase: S = !1,
                forceBrandRefreshHeader: y = !1,
            } = e,
            v = f === m.PremiumTypes.TIER_2,
            D = (0, _.lp)(E),
            L = (0, p.O)(),
            w = L?.discount?.amount,
            M = v ? C : N,
            { startedPaymentFlowWithPaymentSourcesRef: x, isDisplayingWowMomentConfirmation: P } = (0, u.P5)(),
            { step: k, breadcrumbsData: U } = (0, d.Ay)(),
            G = (0, o.D7)({ location: "PremiumPaymentHeader" });
        if (!y && (null == U || 0 === U.length)) return null;
        let F = (U ?? []).flatMap((e) => {
            let t = e.useBreadcrumbLabel(E),
                n = e.sectionHeaderText;
            return null != t ? { id: e.id, label: t, sectionHeaderText: n } : [];
        });
        if (!y && 0 === F.length) return null;
        let V = (F = F.filter((e) => {
                if (S && e.id === c.pn.PLAN_SELECT) return !1;
                let t = e.id !== c.pn.ADD_PAYMENT_STEPS,
                    n = e.id === c.pn.ADD_PAYMENT_STEPS && !x.current;
                return !E || t || n;
            })).find((e) => e.id === k),
            B = V?.sectionHeaderText?.() ?? V?.label,
            H = !(G && null != k && l.M.includes(k)) && null != B && null != k,
            j = D && H && k === c.pn.REVIEW,
            Y = v ? "nitro-pink" : "nitro-green",
            W = b(v, S),
            K = A.kL,
            $ = s()(A.N1, I.headerGradient);
        return P
            ? (0, r.jsx)("div", { className: K, children: (0, r.jsx)(a.hLv, { color: Y, className: $ }) })
            : (0, r.jsxs)("div", {
                  className: K,
                  children: [
                      (0, r.jsxs)(a.hLv, {
                          color: Y,
                          className: s()($, { [A.s1]: !H }),
                          children: [
                              (0, r.jsx)(O, { isTier2: v }),
                              !t &&
                                  (0, r.jsx)(a.s_y, {
                                      "data-migration-pending": !0,
                                      hideOnFullscreen: n,
                                      onClick: i,
                                      className: A.Ep,
                                  }),
                              (0, r.jsx)("img", { src: M, alt: "", className: j ? A.i_ : A.kX }),
                              (0, r.jsxs)("div", {
                                  className: A.FS,
                                  children: [
                                      S &&
                                          (0, r.jsx)("div", {
                                              className: A.$N,
                                              children: (0, r.jsx)(a.Exy, { type: "beta", variant: "expressive" }),
                                          }),
                                      (0, r.jsx)(a.Text, {
                                          variant: "display-md",
                                          color: "text-strong",
                                          className: A.cf,
                                          children: W,
                                      }),
                                  ],
                              }),
                          ],
                      }),
                      (g || T) && (0, r.jsx)(h.A, { discountAmount: w }),
                      H && (0, r.jsx)(R, { isOneStepCheckout: D, headerText: B, step: k, filteredBreadcrumbs: F }),
                  ],
              });
    };
