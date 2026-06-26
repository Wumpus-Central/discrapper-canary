"use strict";
n.d(t, { A: () => G });
var i = n(627968);
n(64700);
var r = n(503698),
    s = n.n(r),
    a = n(17928),
    o = n(534514),
    l = n(315629),
    u = n(935462),
    c = n(508770),
    d = n(584160),
    _ = n(46332),
    h = n(166532),
    f = n(615310),
    p = n(800471),
    E = n(834730),
    m = n(147925),
    g = n(375708),
    A = n(89892);
function I(e) {
    let { breadcrumb: t, isActiveBreadcrumb: n, isFinalBreadcrumb: r, separatorClassName: a } = e;
    return (0, i.jsxs)(
        "div",
        {
            "aria-current": n ? "step" : void 0,
            className: s()(A.hj, { [A.jQ]: r }),
            children: [
                (0, i.jsx)(E.E, {
                    variant: "text-sm/medium",
                    color: n ? "text-strong" : "text-muted",
                    children: t.label,
                }),
                r
                    ? null
                    : (0, i.jsx)(m.A, { "aria-hidden": !0, className: s()(A.LJ, a), direction: m.A.Directions.RIGHT }),
            ],
        },
        t.id,
    );
}
let T = function (e) {
    let { breadcrumbs: t, activeId: n, className: r, separatorClassName: a } = e;
    return (0, i.jsx)("nav", {
        "aria-label": g.intl.string(g.t.TfxqUO),
        className: s()(A.jD, r),
        children: t.map((e, r) =>
            (0, i.jsx)(
                I,
                {
                    breadcrumb: e,
                    isActiveBreadcrumb: e.id === n,
                    isFinalBreadcrumb: r === t.length - 1,
                    separatorClassName: a,
                },
                e.id,
            ),
        ),
    });
};
var S = n(573359),
    y = n(422936),
    C = n(234419),
    N = n(795269),
    v = n(788868),
    R = n(503110);
let O = function (e) {
    let { discountAmount: t } = e,
        n = (0, C.V)(),
        r = null != n && n.trial_id === v.Dw,
        s = g.intl.string(g.t.IBYG5U);
    return (
        void 0 !== t
            ? (s = g.intl.formatToPlainString(g.t.iiLbvu, { percent: t }))
            : r && (s = g.intl.string(g.t.gtNqJQ)),
        (0, i.jsx)("div", { className: R.f, children: (0, i.jsx)(N.R, { text: s }) })
    );
};
var b = n(88001),
    D = n(955212),
    L = n(967744),
    w = n(232266),
    M = n(243002),
    P = n(303930),
    x = n(241988);
function k(e) {
    let { isOneStepCheckout: t, headerText: n, step: r, filteredBreadcrumbs: s } = e;
    if (t)
        return (0, i.jsx)("div", {
            className: D.r9,
            children: (0, i.jsx)(o.D, { variant: "heading-md/bold", children: n }),
        });
    let a = s.length > 1;
    return (0, i.jsxs)("div", {
        className: D.go,
        children: [
            (0, i.jsx)(o.D, { variant: "text-lg/semibold", children: n }),
            a && (0, i.jsx)(T, { activeId: r, breadcrumbs: s }),
        ],
    });
}
function U(e) {
    let { isTier2: t } = e,
        n = t ? M : "/assets/947416a0e8a7172a.svg";
    return (0, i.jsxs)(i.Fragment, {
        children: [
            (0, i.jsx)("img", { src: t ? w : "/assets/792ab98da2b21b02.svg", alt: "", className: D.mR }),
            (0, i.jsx)("img", { src: n, alt: "", className: D.dz }),
            (0, i.jsx)("img", { src: n, alt: "", className: D.lM }),
        ],
    });
}
let G = function (e) {
    let {
            hideCloseButton: t = !1,
            hideCloseOnFullScreen: n,
            onClose: r,
            upgradeToPremiumType: E,
            isEligibleForTrial: m = !1,
            showTrialBadge: A = !1,
            showDiscountBadge: I = !1,
            isPremiumGroupPurchase: T = !1,
            forceBrandRefreshHeader: C = !1,
        } = e,
        N = E === v.PremiumTypes.TIER_2,
        R = (0, p.lp)(m),
        w = (0, y.O)(),
        M = w?.discount?.amount,
        G = (0, _.t4)((e) => e.startedPaymentFlowWithPaymentSources),
        F = (0, a.bG)([S.A], () => S.A.isDisplayingWowMomentConfirmation),
        { step: V, breadcrumbsData: B } = (0, f.Ay)();
    if (!C && (null == B || 0 === B.length)) return null;
    let j = (B ?? []).flatMap((e) => {
        let t = e.useBreadcrumbLabel(m),
            n = e.sectionHeaderText;
        return null != t ? { id: e.id, label: t, sectionHeaderText: n } : [];
    });
    if (!C && 0 === j.length) return null;
    let H = (j = j.filter((e) => {
            if (T && e.id === h.pn.PLAN_SELECT) return !1;
            let t = e.id !== h.pn.ADD_PAYMENT_STEPS,
                n = e.id === h.pn.ADD_PAYMENT_STEPS && !G;
            return !m || t || n;
        })).find((e) => e.id === V),
        Y = H?.sectionHeaderText?.() ?? H?.label,
        W = !(null != V && d.MU.includes(V)) && null != Y && null != V,
        K = R && W && V === h.pn.REVIEW,
        $ = N ? "nitro-pink" : "nitro-green",
        z = T ? (0, b.DP)() : N ? g.intl.string(g.t.lG6a5x) : g.intl.string(g.t["t9uG/o"]),
        q = D.kL,
        Z = s()(D.N1, L.headerGradient);
    return F
        ? (0, i.jsx)("div", { className: q, children: (0, i.jsx)(l.h, { color: $, className: Z }) })
        : (0, i.jsxs)("div", {
              className: q,
              children: [
                  (0, i.jsxs)(l.h, {
                      color: $,
                      className: s()(Z, { [D.s1]: !W }),
                      children: [
                          (0, i.jsx)(U, { isTier2: N }),
                          !t &&
                              (0, i.jsx)(u.s_, {
                                  "data-migration-pending": !0,
                                  hideOnFullscreen: n,
                                  onClick: r,
                                  className: D.Ep,
                              }),
                          (0, i.jsx)("img", { src: N ? x : P, alt: "", className: K ? D.i_ : D.kX }),
                          (0, i.jsxs)("div", {
                              className: D.FS,
                              children: [
                                  T &&
                                      (0, i.jsx)("div", {
                                          className: D.$N,
                                          children: (0, i.jsx)(c.E, { type: "beta", variant: "expressive" }),
                                      }),
                                  (0, i.jsx)(o.D, {
                                      variant: "display-md",
                                      color: "text-strong",
                                      className: D.cf,
                                      children: z,
                                  }),
                              ],
                          }),
                      ],
                  }),
                  (A || I) && (0, i.jsx)(O, { discountAmount: M }),
                  W && (0, i.jsx)(k, { isOneStepCheckout: R, headerText: Y, step: V, filteredBreadcrumbs: j }),
              ],
          });
};
