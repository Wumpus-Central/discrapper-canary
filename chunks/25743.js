t.d(n, { A: () => O });
var s = t(627968);
t(64700);
var r = t(503698),
    i = t.n(r),
    l = t(534514),
    a = t(315629),
    c = t(935462),
    u = t(508770),
    d = t(834730),
    L = t(742810),
    o = t(584160),
    C = t(536302),
    m = t(166532),
    h = t(615310),
    p = t(800471),
    x = t(147925),
    g = t(375708),
    T = t(89892);
function E(e) {
    let { breadcrumb: n, isActiveBreadcrumb: t, isFinalBreadcrumb: r, separatorClassName: l } = e;
    return (0, s.jsxs)(
        "div",
        {
            "aria-current": t ? "step" : void 0,
            className: i()(T.hj, { [T.jQ]: r }),
            children: [
                (0, s.jsx)(d.E, {
                    variant: "text-sm/medium",
                    color: t ? "text-strong" : "text-muted",
                    children: n.label,
                }),
                r
                    ? null
                    : (0, s.jsx)(x.A, { "aria-hidden": !0, className: i()(T.LJ, l), direction: x.A.Directions.RIGHT }),
            ],
        },
        n.id,
    );
}
let S = function (e) {
    let { breadcrumbs: n, activeId: t, className: r, separatorClassName: l } = e;
    return (0, s.jsx)("nav", {
        "aria-label": g.intl.string(g.t.TfxqUO),
        className: i()(T.jD, r),
        children: n.map((e, r) =>
            (0, s.jsx)(
                E,
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
var N = t(422936),
    j = t(234419),
    f = t(795269),
    v = t(788868),
    _ = t(503110);
let I = (e) => {
    let { discountAmount: n } = e,
        t = (0, j.V)(),
        r = null != t && t.trial_id === v.Dw,
        i = g.intl.string(g.t.IBYG5U);
    return (
        void 0 !== n
            ? (i = g.intl.formatToPlainString(g.t.iiLbvu, { percent: n }))
            : r && (i = g.intl.string(g.t.gtNqJQ)),
        (0, s.jsx)("div", { className: _.f, children: (0, s.jsx)(f.R, { text: i }) })
    );
};
var P = t(88001),
    R = t(955212),
    A = t(967744),
    M = t(232266),
    y = t(243002),
    b = t(303930),
    F = t(241988);
function D(e) {
    let { isOneStepCheckout: n, headerText: t, step: r, filteredBreadcrumbs: i } = e;
    if (n)
        return (0, s.jsx)("div", {
            className: R.r9,
            children: (0, s.jsx)(l.D, { variant: "heading-md/bold", children: t }),
        });
    let a = i.length > 1;
    return (0, s.jsxs)("div", {
        className: R.go,
        children: [
            (0, s.jsx)(l.D, { variant: "text-lg/semibold", children: t }),
            a && (0, s.jsx)(S, { activeId: r, breadcrumbs: i }),
        ],
    });
}
function B(e) {
    let { isTier2: n } = e,
        t = n ? y : "/assets/947416a0e8a7172a.svg";
    return (0, s.jsxs)(s.Fragment, {
        children: [
            (0, s.jsx)("img", { src: n ? M : "/assets/792ab98da2b21b02.svg", alt: "", className: R.mR }),
            (0, s.jsx)("img", { src: t, alt: "", className: R.dz }),
            (0, s.jsx)("img", { src: t, alt: "", className: R.lM }),
        ],
    });
}
let O = function (e) {
    let {
            hideCloseButton: n = !1,
            hideCloseOnFullScreen: t,
            onClose: r,
            upgradeToPremiumType: l,
            isEligibleForTrial: x = !1,
            showTrialBadge: T = !1,
            showDiscountBadge: E = !1,
            isPremiumGroupPurchase: S = !1,
            forceBrandRefreshHeader: j = !1,
        } = e,
        f = l === v.PremiumTypes.TIER_2,
        _ = (0, p.lp)(x),
        M = (0, N.O)(),
        y = M?.discount?.amount,
        { startedPaymentFlowWithPaymentSourcesRef: O, isDisplayingWowMomentConfirmation: w } = (0, C.P5)(),
        { step: H, breadcrumbsData: U } = (0, h.Ay)(),
        Y = (0, L.D7)({ location: "PremiumPaymentHeader" });
    if (!j && (null == U || 0 === U.length)) return null;
    let k = (U ?? []).flatMap((e) => {
        let n = e.useBreadcrumbLabel(x),
            t = e.sectionHeaderText;
        return null != n ? { id: e.id, label: n, sectionHeaderText: t } : [];
    });
    if (!j && 0 === k.length) return null;
    let z = (k = k.filter((e) => {
            if (S && e.id === m.pn.PLAN_SELECT) return !1;
            let n = e.id !== m.pn.ADD_PAYMENT_STEPS,
                t = e.id === m.pn.ADD_PAYMENT_STEPS && !O.current;
            return !x || n || t;
        })).find((e) => e.id === H),
        W = z?.sectionHeaderText?.() ?? z?.label,
        G = !(Y && null != H && o.M.includes(H)) && null != W && null != H,
        q = _ && G && H === m.pn.REVIEW,
        V = f ? "nitro-pink" : "nitro-green",
        J = S ? (0, P.DP)() : f ? g.intl.string(g.t.lG6a5x) : g.intl.string(g.t["t9uG/o"]),
        Q = R.kL,
        Z = i()(R.N1, A.headerGradient);
    return w
        ? (0, s.jsx)("div", { className: Q, children: (0, s.jsx)(a.h, { color: V, className: Z }) })
        : (0, s.jsxs)("div", {
              className: Q,
              children: [
                  (0, s.jsxs)(a.h, {
                      color: V,
                      className: i()(Z, { [R.s1]: !G }),
                      children: [
                          (0, s.jsx)(B, { isTier2: f }),
                          !n &&
                              (0, s.jsx)(c.s_, {
                                  "data-migration-pending": !0,
                                  hideOnFullscreen: t,
                                  onClick: r,
                                  className: R.Ep,
                              }),
                          (0, s.jsx)("img", { src: f ? F : b, alt: "", className: q ? R.i_ : R.kX }),
                          (0, s.jsxs)("div", {
                              className: R.FS,
                              children: [
                                  S &&
                                      (0, s.jsx)("div", {
                                          className: R.$N,
                                          children: (0, s.jsx)(u.E, { type: "beta", variant: "expressive" }),
                                      }),
                                  (0, s.jsx)(d.E, {
                                      variant: "display-md",
                                      color: "text-strong",
                                      className: R.cf,
                                      children: J,
                                  }),
                              ],
                          }),
                      ],
                  }),
                  (T || E) && (0, s.jsx)(I, { discountAmount: y }),
                  G && (0, s.jsx)(D, { isOneStepCheckout: _, headerText: W, step: H, filteredBreadcrumbs: k }),
              ],
          });
};
