t.d(n, { A: () => H });
var s = t(627968);
t(64700);
var r = t(503698),
    i = t.n(r),
    l = t(17928),
    a = t(534514),
    c = t(315629),
    u = t(935462),
    d = t(508770),
    o = t(834730),
    L = t(742810),
    C = t(584160),
    m = t(768050),
    h = t(166532),
    p = t(615310),
    x = t(800471),
    g = t(147925),
    T = t(375708),
    E = t(89892);
function S(e) {
    let { breadcrumb: n, isActiveBreadcrumb: t, isFinalBreadcrumb: r, separatorClassName: l } = e;
    return (0, s.jsxs)(
        "div",
        {
            "aria-current": t ? "step" : void 0,
            className: i()(E.hj, { [E.jQ]: r }),
            children: [
                (0, s.jsx)(o.E, {
                    variant: "text-sm/medium",
                    color: t ? "text-strong" : "text-muted",
                    children: n.label,
                }),
                r
                    ? null
                    : (0, s.jsx)(g.A, { "aria-hidden": !0, className: i()(E.LJ, l), direction: g.A.Directions.RIGHT }),
            ],
        },
        n.id,
    );
}
let N = function (e) {
    let { breadcrumbs: n, activeId: t, className: r, separatorClassName: l } = e;
    return (0, s.jsx)("nav", {
        "aria-label": T.intl.string(T.t.TfxqUO),
        className: i()(E.jD, r),
        children: n.map((e, r) =>
            (0, s.jsx)(
                S,
                {
                    breadcrumb: e,
                    isActiveBreadcrumb: e.id === t,
                    isFinalBreadcrumb: r === n.length - 1,
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
    _ = t(795269),
    A = t(788868),
    I = t(503110);
let P = (e) => {
    let { discountAmount: n } = e,
        t = (0, v.V)(),
        r = null != t && t.trial_id === A.Dw,
        i = T.intl.string(T.t.IBYG5U);
    return (
        void 0 !== n
            ? (i = T.intl.formatToPlainString(T.t.iiLbvu, { percent: n }))
            : r && (i = T.intl.string(T.t.gtNqJQ)),
        (0, s.jsx)("div", { className: I.f, children: (0, s.jsx)(_.R, { text: i }) })
    );
};
var R = t(88001),
    M = t(955212),
    y = t(967744),
    b = t(232266),
    D = t(243002),
    F = t(303930),
    B = t(241988);
function O(e) {
    let { isOneStepCheckout: n, headerText: t, step: r, filteredBreadcrumbs: i } = e;
    if (n)
        return (0, s.jsx)("div", {
            className: M.r9,
            children: (0, s.jsx)(a.D, { variant: "heading-md/bold", children: t }),
        });
    let l = i.length > 1;
    return (0, s.jsxs)("div", {
        className: M.go,
        children: [
            (0, s.jsx)(a.D, { variant: "text-lg/semibold", children: t }),
            l && (0, s.jsx)(N, { activeId: r, breadcrumbs: i }),
        ],
    });
}
function w(e) {
    let { isTier2: n } = e,
        t = n ? D : "/assets/947416a0e8a7172a.svg";
    return (0, s.jsxs)(s.Fragment, {
        children: [
            (0, s.jsx)("img", { src: n ? b : "/assets/792ab98da2b21b02.svg", alt: "", className: M.mR }),
            (0, s.jsx)("img", { src: t, alt: "", className: M.dz }),
            (0, s.jsx)("img", { src: t, alt: "", className: M.lM }),
        ],
    });
}
let H = function (e) {
    let {
            hideCloseButton: n = !1,
            hideCloseOnFullScreen: t,
            onClose: r,
            upgradeToPremiumType: a,
            isEligibleForTrial: g = !1,
            showTrialBadge: E = !1,
            showDiscountBadge: S = !1,
            isPremiumGroupPurchase: N = !1,
            forceBrandRefreshHeader: v = !1,
        } = e,
        _ = a === A.PremiumTypes.TIER_2,
        I = (0, x.lp)(g),
        b = (0, j.O)(),
        D = b?.discount?.amount,
        { startedPaymentFlowWithPaymentSourcesRef: H } = (0, m.P5)(),
        U = (0, l.bG)([f.A], () => f.A.isDisplayingWowMomentConfirmation),
        { step: Y, breadcrumbsData: k } = (0, p.Ay)(),
        W = (0, L.D7)({ location: "PremiumPaymentHeader" });
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
                t = e.id === h.pn.ADD_PAYMENT_STEPS && !H.current;
            return !g || n || t;
        })).find((e) => e.id === Y),
        q = G?.sectionHeaderText?.() ?? G?.label,
        V = !(W && null != Y && C.M.includes(Y)) && null != q && null != Y,
        J = I && V && Y === h.pn.REVIEW,
        Q = _ ? "nitro-pink" : "nitro-green",
        Z = N ? (0, R.DP)() : _ ? T.intl.string(T.t.lG6a5x) : T.intl.string(T.t["t9uG/o"]),
        $ = M.kL,
        X = i()(M.N1, y.headerGradient);
    return U
        ? (0, s.jsx)("div", { className: $, children: (0, s.jsx)(c.h, { color: Q, className: X }) })
        : (0, s.jsxs)("div", {
              className: $,
              children: [
                  (0, s.jsxs)(c.h, {
                      color: Q,
                      className: i()(X, { [M.s1]: !V }),
                      children: [
                          (0, s.jsx)(w, { isTier2: _ }),
                          !n &&
                              (0, s.jsx)(u.s_, {
                                  "data-migration-pending": !0,
                                  hideOnFullscreen: t,
                                  onClick: r,
                                  className: M.Ep,
                              }),
                          (0, s.jsx)("img", { src: _ ? B : F, alt: "", className: J ? M.i_ : M.kX }),
                          (0, s.jsxs)("div", {
                              className: M.FS,
                              children: [
                                  N &&
                                      (0, s.jsx)("div", {
                                          className: M.$N,
                                          children: (0, s.jsx)(d.E, { type: "beta", variant: "expressive" }),
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
                  (E || S) && (0, s.jsx)(P, { discountAmount: D }),
                  V && (0, s.jsx)(O, { isOneStepCheckout: I, headerText: q, step: Y, filteredBreadcrumbs: z }),
              ],
          });
};
