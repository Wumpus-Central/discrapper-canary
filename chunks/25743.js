t.d(n, { A: () => H });
var s = t(627968);
t(64700);
var i = t(503698),
    r = t.n(i),
    l = t(17928),
    a = t(534514),
    c = t(315629),
    d = t(935462),
    u = t(508770),
    o = t(834730),
    L = t(742810),
    C = t(584160),
    m = t(571878),
    h = t(166532),
    p = t(615310),
    x = t(800471),
    g = t(147925),
    T = t(375708),
    E = t(89892);
function S(e) {
    let { breadcrumb: n, isActiveBreadcrumb: t, isFinalBreadcrumb: i, separatorClassName: l } = e;
    return (0, s.jsxs)(
        "div",
        {
            "aria-current": t ? "step" : void 0,
            className: r()(E.hj, { [E.jQ]: i }),
            children: [
                (0, s.jsx)(o.E, {
                    variant: "text-sm/medium",
                    color: t ? "text-strong" : "text-muted",
                    children: n.label,
                }),
                i
                    ? null
                    : (0, s.jsx)(g.A, { "aria-hidden": !0, className: r()(E.LJ, l), direction: g.A.Directions.RIGHT }),
            ],
        },
        n.id,
    );
}
let N = function (e) {
    let { breadcrumbs: n, activeId: t, className: i, separatorClassName: l } = e;
    return (0, s.jsx)("nav", {
        "aria-label": T.intl.string(T.t.TfxqUO),
        className: r()(E.jD, i),
        children: n.map((e, i) =>
            (0, s.jsx)(
                S,
                {
                    breadcrumb: e,
                    isActiveBreadcrumb: e.id === t,
                    isFinalBreadcrumb: i === n.length - 1,
                    separatorClassName: l,
                },
                e.id,
            ),
        ),
    });
};
var f = t(573359),
    j = t(422936),
    v = t(234419),
    P = t(795269),
    _ = t(788868),
    A = t(503110);
let I = (e) => {
    let { discountAmount: n } = e,
        t = (0, v.V)(),
        i = null != t && t.trial_id === _.Dw,
        r = T.intl.string(T.t.IBYG5U);
    return (
        void 0 !== n
            ? (r = T.intl.formatToPlainString(T.t.iiLbvu, { percent: n }))
            : i && (r = T.intl.string(T.t.gtNqJQ)),
        (0, s.jsx)("div", { className: A.f, children: (0, s.jsx)(P.R, { text: r }) })
    );
};
var R = t(88001),
    M = t(955212),
    y = t(967744),
    F = t(232266),
    b = t(243002),
    D = t(303930),
    B = t(241988);
function w(e) {
    let { isOneStepCheckout: n, headerText: t, step: i, filteredBreadcrumbs: r } = e;
    if (n)
        return (0, s.jsx)("div", {
            className: M.r9,
            children: (0, s.jsx)(a.D, { variant: "heading-md/bold", children: t }),
        });
    let l = r.length > 1;
    return (0, s.jsxs)("div", {
        className: M.go,
        children: [
            (0, s.jsx)(a.D, { variant: "text-lg/semibold", children: t }),
            l && (0, s.jsx)(N, { activeId: i, breadcrumbs: r }),
        ],
    });
}
function O(e) {
    let { isTier2: n } = e,
        t = n ? b : "/assets/947416a0e8a7172a.svg";
    return (0, s.jsxs)(s.Fragment, {
        children: [
            (0, s.jsx)("img", { src: n ? F : "/assets/792ab98da2b21b02.svg", alt: "", className: M.mR }),
            (0, s.jsx)("img", { src: t, alt: "", className: M.dz }),
            (0, s.jsx)("img", { src: t, alt: "", className: M.lM }),
        ],
    });
}
let H = function (e) {
    let {
            hideCloseButton: n = !1,
            hideCloseOnFullScreen: t,
            onClose: i,
            upgradeToPremiumType: a,
            isEligibleForTrial: g = !1,
            showTrialBadge: E = !1,
            showDiscountBadge: S = !1,
            isPremiumGroupPurchase: N = !1,
            forceBrandRefreshHeader: v = !1,
        } = e,
        P = a === _.PremiumTypes.TIER_2,
        A = (0, x.lp)(g),
        F = (0, j.O)(),
        b = F?.discount?.amount,
        H = (0, m.t4)((e) => e.startedPaymentFlowWithPaymentSources),
        W = (0, l.bG)([f.A], () => f.A.isDisplayingWowMomentConfirmation),
        { step: U, breadcrumbsData: k } = (0, p.Ay)(),
        Y = (0, L.D7)({ location: "PremiumPaymentHeader" });
    if (!v && (null == k || 0 === k.length)) return null;
    let z = (k ?? []).flatMap((e) => {
        let n = e.useBreadcrumbLabel(g),
            t = e.sectionHeaderText;
        return null != n ? { id: e.id, label: n, sectionHeaderText: t } : [];
    });
    if (!v && 0 === z.length) return null;
    let G = (z = z.filter((e) => {
            if (N && e.id === h.pn.PLAN_SELECT) return !1;
            let n = e.id !== h.pn.ADD_PAYMENT_STEPS,
                t = e.id === h.pn.ADD_PAYMENT_STEPS && !H;
            return !g || n || t;
        })).find((e) => e.id === U),
        V = G?.sectionHeaderText?.() ?? G?.label,
        q = !(Y && null != U && C.M.includes(U)) && null != V && null != U,
        J = A && q && U === h.pn.REVIEW,
        Q = P ? "nitro-pink" : "nitro-green",
        Z = N ? (0, R.DP)() : P ? T.intl.string(T.t.lG6a5x) : T.intl.string(T.t["t9uG/o"]),
        $ = M.kL,
        X = r()(M.N1, y.headerGradient);
    return W
        ? (0, s.jsx)("div", { className: $, children: (0, s.jsx)(c.h, { color: Q, className: X }) })
        : (0, s.jsxs)("div", {
              className: $,
              children: [
                  (0, s.jsxs)(c.h, {
                      color: Q,
                      className: r()(X, { [M.s1]: !q }),
                      children: [
                          (0, s.jsx)(O, { isTier2: P }),
                          !n &&
                              (0, s.jsx)(d.s_, {
                                  "data-migration-pending": !0,
                                  hideOnFullscreen: t,
                                  onClick: i,
                                  className: M.Ep,
                              }),
                          (0, s.jsx)("img", { src: P ? B : D, alt: "", className: J ? M.i_ : M.kX }),
                          (0, s.jsxs)("div", {
                              className: M.FS,
                              children: [
                                  N &&
                                      (0, s.jsx)("div", {
                                          className: M.$N,
                                          children: (0, s.jsx)(u.E, { type: "beta", variant: "expressive" }),
                                      }),
                                  (0, s.jsx)(o.E, {
                                      variant: "display-md",
                                      color: "text-strong",
                                      className: M.cf,
                                      children: Z,
                                  }),
                              ],
                          }),
                      ],
                  }),
                  (E || S) && (0, s.jsx)(I, { discountAmount: b }),
                  q && (0, s.jsx)(w, { isOneStepCheckout: A, headerText: V, step: U, filteredBreadcrumbs: z }),
              ],
          });
};
