t.d(n, { A: () => O });
var s = t(627968);
t(64700);
var r = t(503698),
    i = t.n(r),
    l = t(534514),
    a = t(834730),
    c = t(315629),
    u = t(935462),
    d = t(508770),
    L = t(742810),
    o = t(584160),
    C = t(834252),
    m = t(166532),
    h = t(615310),
    p = t(800471),
    x = t(147925),
    g = t(89892);
function E(e) {
    let { breadcrumb: n, isActiveBreadcrumb: t, isFinalBreadcrumb: r, separatorClassName: l } = e;
    return (0, s.jsxs)(
        "div",
        {
            className: i()(g.hj, { [g.jQ]: r }),
            children: [
                (0, s.jsx)(a.E, {
                    variant: "text-sm/medium",
                    color: t ? "text-strong" : "text-muted",
                    children: n.label,
                }),
                r ? null : (0, s.jsx)(x.A, { className: i()(g.LJ, l), direction: x.A.Directions.RIGHT }),
            ],
        },
        n.id,
    );
}
let T = function (e) {
    let { breadcrumbs: n, activeId: t, className: r, separatorClassName: l } = e;
    return (0, s.jsx)("div", {
        className: i()(g.jD, r),
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
var S = t(422936),
    N = t(234419),
    j = t(795269),
    f = t(788868),
    v = t(375708),
    _ = t(503110);
let I = (e) => {
    let { discountAmount: n } = e,
        t = (0, N.V)(),
        r = null != t && t.trial_id === f.Dw,
        i = v.intl.string(v.t.IBYG5U);
    return (
        void 0 !== n
            ? (i = v.intl.formatToPlainString(v.t.iiLbvu, { percent: n }))
            : r && (i = v.intl.string(v.t.gtNqJQ)),
        (0, s.jsx)("div", { className: _.f, children: (0, s.jsx)(j.R, { text: i }) })
    );
};
var P = t(88001),
    R = t(955212),
    A = t(967744),
    M = t(232266),
    y = t(243002),
    F = t(303930),
    b = t(241988);
function D(e) {
    let { isOneStepCheckout: n, headerText: t, step: r, filteredBreadcrumbs: i } = e;
    if (n)
        return (0, s.jsx)("div", {
            className: R.r9,
            children: (0, s.jsx)(l.D, { variant: "heading-md/bold", children: t }),
        });
    let c = i.length > 1;
    return (0, s.jsxs)("div", {
        className: R.go,
        children: [
            (0, s.jsx)(a.E, { variant: "text-lg/semibold", children: t }),
            c && (0, s.jsx)(T, { activeId: r, breadcrumbs: i }),
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
            showTrialBadge: g = !1,
            showDiscountBadge: E = !1,
            isPremiumGroupPurchase: T = !1,
            forceBrandRefreshHeader: N = !1,
        } = e,
        j = l === f.PremiumTypes.TIER_2,
        _ = (0, p.lp)(x),
        M = (0, S.O)(),
        y = M?.discount?.amount,
        { startedPaymentFlowWithPaymentSourcesRef: O, isDisplayingWowMomentConfirmation: w } = (0, C.P5)(),
        { step: H, breadcrumbsData: Y } = (0, h.Ay)(),
        k = (0, L.D7)({ location: "PremiumPaymentHeader" });
    if (!N && (null == Y || 0 === Y.length)) return null;
    let U = (Y ?? []).flatMap((e) => {
        let n = e.useBreadcrumbLabel(x),
            t = e.sectionHeaderText;
        return null != n ? { id: e.id, label: n, sectionHeaderText: t } : [];
    });
    if (!N && 0 === U.length) return null;
    let z = (U = U.filter((e) => {
            if (T && e.id === m.pn.PLAN_SELECT) return !1;
            let n = e.id !== m.pn.ADD_PAYMENT_STEPS,
                t = e.id === m.pn.ADD_PAYMENT_STEPS && !O.current;
            return !x || n || t;
        })).find((e) => e.id === H),
        W = z?.sectionHeaderText?.() ?? z?.label,
        G = !(k && null != H && o.M.includes(H)) && null != W && null != H,
        V = _ && G && H === m.pn.REVIEW,
        q = j ? "nitro-pink" : "nitro-green",
        J = T ? (0, P.DP)() : j ? v.intl.string(v.t.lG6a5x) : v.intl.string(v.t["t9uG/o"]),
        Q = R.kL,
        Z = i()(R.N1, A.headerGradient);
    return w
        ? (0, s.jsx)("div", { className: Q, children: (0, s.jsx)(c.h, { color: q, className: Z }) })
        : (0, s.jsxs)("div", {
              className: Q,
              children: [
                  (0, s.jsxs)(c.h, {
                      color: q,
                      className: i()(Z, { [R.s1]: !G }),
                      children: [
                          (0, s.jsx)(B, { isTier2: j }),
                          !n &&
                              (0, s.jsx)(u.s_, {
                                  "data-migration-pending": !0,
                                  hideOnFullscreen: t,
                                  onClick: r,
                                  className: R.Ep,
                              }),
                          (0, s.jsx)("img", { src: j ? b : F, alt: "", className: V ? R.i_ : R.kX }),
                          (0, s.jsxs)("div", {
                              className: R.FS,
                              children: [
                                  T &&
                                      (0, s.jsx)("div", {
                                          className: R.$N,
                                          children: (0, s.jsx)(d.E, { type: "beta", variant: "expressive" }),
                                      }),
                                  (0, s.jsx)(a.E, {
                                      variant: "display-md",
                                      color: "text-strong",
                                      className: R.cf,
                                      children: J,
                                  }),
                              ],
                          }),
                      ],
                  }),
                  (g || E) && (0, s.jsx)(I, { discountAmount: y }),
                  G && (0, s.jsx)(D, { isOneStepCheckout: _, headerText: W, step: H, filteredBreadcrumbs: U }),
              ],
          });
};
