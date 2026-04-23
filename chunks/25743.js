n.d(t, { A: () => j });
var r = n(627968);
n(64700);
var a = n(503698),
    i = n.n(a),
    o = n(534514),
    l = n(834730),
    s = n(315629),
    d = n(935462),
    u = n(508770),
    c = n(742810),
    _ = n(584160),
    p = n(156312),
    C = n(166532),
    h = n(615310),
    E = n(800471),
    m = n(147925),
    A = n(89892);
function I(e) {
    let { breadcrumb: t, isActiveBreadcrumb: n, isFinalBreadcrumb: a, separatorClassName: o } = e;
    return (0, r.jsxs)(
        "div",
        {
            className: i()(A.hj, { [A.jQ]: a }),
            children: [
                (0, r.jsx)(l.E, {
                    variant: "text-sm/medium",
                    color: n ? "text-strong" : "text-muted",
                    children: t.label,
                }),
                a ? null : (0, r.jsx)(m.A, { className: i()(A.LJ, o), direction: m.A.Directions.RIGHT }),
            ],
        },
        t.id,
    );
}
let T = function (e) {
    let { breadcrumbs: t, activeId: n, className: a, separatorClassName: o } = e;
    return (0, r.jsx)("div", {
        className: i()(A.jD, a),
        children: t.map((e, a) =>
            (0, r.jsx)(
                I,
                {
                    breadcrumb: e,
                    isActiveBreadcrumb: e.id === n,
                    isFinalBreadcrumb: a === t.length - 1,
                    separatorClassName: o,
                },
                e.id,
            ),
        ),
    });
};
var y = n(422936),
    g = n(234419),
    S = n(795269),
    N = n(788868),
    f = n(985018),
    R = n(503110);
let L = (e) => {
    let { discountAmount: t } = e,
        n = (0, g.V)(),
        a = null != n && n.trial_id === N.Dw,
        i = f.intl.string(f.t.IBYG5U);
    return (
        void 0 !== t
            ? (i = f.intl.formatToPlainString(f.t.iiLbvu, { percent: t }))
            : a && (i = f.intl.string(f.t.gtNqJQ)),
        (0, r.jsx)("div", { className: R.f, children: (0, r.jsx)(S.R, { text: i }) })
    );
};
var O = n(88001),
    P = n(955212),
    b = n(967744),
    M = n(232266),
    x = n(243002),
    v = n(303930),
    U = n(241988);
function D(e) {
    let { isOneStepCheckout: t, headerText: n, step: a, filteredBreadcrumbs: i } = e;
    if (t)
        return (0, r.jsx)("div", {
            className: P.r9,
            children: (0, r.jsx)(o.D, { variant: "heading-md/bold", children: n }),
        });
    let s = i.length > 1;
    return (0, r.jsxs)("div", {
        className: P.go,
        children: [
            (0, r.jsx)(l.E, { variant: "text-lg/semibold", children: n }),
            s && (0, r.jsx)(T, { activeId: a, breadcrumbs: i }),
        ],
    });
}
function G(e) {
    let { isTier2: t } = e,
        n = t ? x : "/assets/947416a0e8a7172a.svg";
    return (0, r.jsxs)(r.Fragment, {
        children: [
            (0, r.jsx)("img", { src: t ? M : "/assets/792ab98da2b21b02.svg", alt: "", className: P.mR }),
            (0, r.jsx)("img", { src: n, alt: "", className: P.dz }),
            (0, r.jsx)("img", { src: n, alt: "", className: P.lM }),
        ],
    });
}
let j = function (e) {
    let {
            hideCloseButton: t = !1,
            hideCloseOnFullScreen: n,
            onClose: a,
            upgradeToPremiumType: o,
            isEligibleForTrial: m = !1,
            showTrialBadge: A = !1,
            showDiscountBadge: I = !1,
            isPremiumGroupPurchase: T = !1,
            forceBrandRefreshHeader: g = !1,
        } = e,
        S = o === N.PremiumTypes.TIER_2,
        R = (0, E.lp)(m),
        M = (0, y.O)(),
        x = M?.discount?.amount,
        { startedPaymentFlowWithPaymentSourcesRef: j, isDisplayingWowMomentConfirmation: w } = (0, p.P5)(),
        { step: B, breadcrumbsData: F } = (0, h.Ay)(),
        k = (0, c.D7)({ location: "PremiumPaymentHeader" });
    if (!g && (null == F || 0 === F.length)) return null;
    let V = (F ?? []).flatMap((e) => {
        let t = e.useBreadcrumbLabel(m),
            n = e.sectionHeaderText;
        return null != t ? { id: e.id, label: t, sectionHeaderText: n } : [];
    });
    if (!g && 0 === V.length) return null;
    let H = (V = V.filter((e) => {
            if (T && e.id === C.pn.PLAN_SELECT) return !1;
            let t = e.id !== C.pn.ADD_PAYMENT_STEPS,
                n = e.id === C.pn.ADD_PAYMENT_STEPS && !j.current;
            return !m || t || n;
        })).find((e) => e.id === B),
        K = H?.sectionHeaderText?.() ?? H?.label,
        W = !(k && null != B && _.M.includes(B)) && null != K && null != B,
        Y = R && W && B === C.pn.REVIEW,
        z = S ? "nitro-pink" : "nitro-green",
        J = T ? (0, O.DP)() : S ? f.intl.string(f.t.lG6a5x) : f.intl.string(f.t["t9uG/o"]),
        Q = P.kL,
        X = i()(P.N1, b.headerGradient);
    return w
        ? (0, r.jsx)("div", { className: Q, children: (0, r.jsx)(s.h, { color: z, className: X }) })
        : (0, r.jsxs)("div", {
              className: Q,
              children: [
                  (0, r.jsxs)(s.h, {
                      color: z,
                      className: i()(X, { [P.s1]: !W }),
                      children: [
                          (0, r.jsx)(G, { isTier2: S }),
                          !t &&
                              (0, r.jsx)(d.s_, {
                                  "data-migration-pending": !0,
                                  hideOnFullscreen: n,
                                  onClick: a,
                                  className: P.Ep,
                              }),
                          (0, r.jsx)("img", { src: S ? U : v, alt: "", className: Y ? P.i_ : P.kX }),
                          (0, r.jsxs)("div", {
                              className: P.FS,
                              children: [
                                  T &&
                                      (0, r.jsx)("div", {
                                          className: P.$N,
                                          children: (0, r.jsx)(u.E, { type: "beta", variant: "expressive" }),
                                      }),
                                  (0, r.jsx)(l.E, {
                                      variant: "display-md",
                                      color: "text-strong",
                                      className: P.cf,
                                      children: J,
                                  }),
                              ],
                          }),
                      ],
                  }),
                  (A || I) && (0, r.jsx)(L, { discountAmount: x }),
                  W && (0, r.jsx)(D, { isOneStepCheckout: R, headerText: K, step: B, filteredBreadcrumbs: V }),
              ],
          });
};
