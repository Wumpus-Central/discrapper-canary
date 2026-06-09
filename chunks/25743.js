t.d(n, { A: () => O });
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
    L = t(584160),
    C = t(211159),
    m = t(166532),
    h = t(615310),
    p = t(800471),
    g = t(147925),
    x = t(375708),
    T = t(89892);
function S(e) {
    let { breadcrumb: n, isActiveBreadcrumb: t, isFinalBreadcrumb: i, separatorClassName: l } = e;
    return (0, s.jsxs)(
        "div",
        {
            "aria-current": t ? "step" : void 0,
            className: r()(T.hj, { [T.jQ]: i }),
            children: [
                (0, s.jsx)(o.E, {
                    variant: "text-sm/medium",
                    color: t ? "text-strong" : "text-muted",
                    children: n.label,
                }),
                i
                    ? null
                    : (0, s.jsx)(g.A, { "aria-hidden": !0, className: r()(T.LJ, l), direction: g.A.Directions.RIGHT }),
            ],
        },
        n.id,
    );
}
let E = function (e) {
    let { breadcrumbs: n, activeId: t, className: i, separatorClassName: l } = e;
    return (0, s.jsx)("nav", {
        "aria-label": x.intl.string(x.t.TfxqUO),
        className: r()(T.jD, i),
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
var N = t(573359),
    f = t(422936),
    j = t(234419),
    v = t(795269),
    _ = t(788868),
    A = t(503110);
let I = (e) => {
    let { discountAmount: n } = e,
        t = (0, j.V)(),
        i = null != t && t.trial_id === _.Dw,
        r = x.intl.string(x.t.IBYG5U);
    return (
        void 0 !== n
            ? (r = x.intl.formatToPlainString(x.t.iiLbvu, { percent: n }))
            : i && (r = x.intl.string(x.t.gtNqJQ)),
        (0, s.jsx)("div", { className: A.f, children: (0, s.jsx)(v.R, { text: r }) })
    );
};
var P = t(88001),
    R = t(955212),
    M = t(967744),
    y = t(232266),
    b = t(243002),
    F = t(303930),
    D = t(241988);
function B(e) {
    let { isOneStepCheckout: n, headerText: t, step: i, filteredBreadcrumbs: r } = e;
    if (n)
        return (0, s.jsx)("div", {
            className: R.r9,
            children: (0, s.jsx)(a.D, { variant: "heading-md/bold", children: t }),
        });
    let l = r.length > 1;
    return (0, s.jsxs)("div", {
        className: R.go,
        children: [
            (0, s.jsx)(a.D, { variant: "text-lg/semibold", children: t }),
            l && (0, s.jsx)(E, { activeId: i, breadcrumbs: r }),
        ],
    });
}
function w(e) {
    let { isTier2: n } = e,
        t = n ? b : "/assets/947416a0e8a7172a.svg";
    return (0, s.jsxs)(s.Fragment, {
        children: [
            (0, s.jsx)("img", { src: n ? y : "/assets/792ab98da2b21b02.svg", alt: "", className: R.mR }),
            (0, s.jsx)("img", { src: t, alt: "", className: R.dz }),
            (0, s.jsx)("img", { src: t, alt: "", className: R.lM }),
        ],
    });
}
let O = function (e) {
    let {
            hideCloseButton: n = !1,
            hideCloseOnFullScreen: t,
            onClose: i,
            upgradeToPremiumType: a,
            isEligibleForTrial: g = !1,
            showTrialBadge: T = !1,
            showDiscountBadge: S = !1,
            isPremiumGroupPurchase: E = !1,
            forceBrandRefreshHeader: j = !1,
        } = e,
        v = a === _.PremiumTypes.TIER_2,
        A = (0, p.lp)(g),
        y = (0, f.O)(),
        b = y?.discount?.amount,
        O = (0, C.t4)((e) => e.startedPaymentFlowWithPaymentSources),
        H = (0, l.bG)([N.A], () => N.A.isDisplayingWowMomentConfirmation),
        { step: W, breadcrumbsData: U } = (0, h.Ay)();
    if (!j && (null == U || 0 === U.length)) return null;
    let k = (U ?? []).flatMap((e) => {
        let n = e.useBreadcrumbLabel(g),
            t = e.sectionHeaderText;
        return null != n ? { id: e.id, label: n, sectionHeaderText: t } : [];
    });
    if (!j && 0 === k.length) return null;
    let Y = (k = k.filter((e) => {
            if (E && e.id === m.pn.PLAN_SELECT) return !1;
            let n = e.id !== m.pn.ADD_PAYMENT_STEPS,
                t = e.id === m.pn.ADD_PAYMENT_STEPS && !O;
            return !g || n || t;
        })).find((e) => e.id === W),
        z = Y?.sectionHeaderText?.() ?? Y?.label,
        G = !(null != W && L.M.includes(W)) && null != z && null != W,
        V = A && G && W === m.pn.REVIEW,
        q = v ? "nitro-pink" : "nitro-green",
        J = E ? (0, P.DP)() : v ? x.intl.string(x.t.lG6a5x) : x.intl.string(x.t["t9uG/o"]),
        Q = R.kL,
        Z = r()(R.N1, M.headerGradient);
    return H
        ? (0, s.jsx)("div", { className: Q, children: (0, s.jsx)(c.h, { color: q, className: Z }) })
        : (0, s.jsxs)("div", {
              className: Q,
              children: [
                  (0, s.jsxs)(c.h, {
                      color: q,
                      className: r()(Z, { [R.s1]: !G }),
                      children: [
                          (0, s.jsx)(w, { isTier2: v }),
                          !n &&
                              (0, s.jsx)(d.s_, {
                                  "data-migration-pending": !0,
                                  hideOnFullscreen: t,
                                  onClick: i,
                                  className: R.Ep,
                              }),
                          (0, s.jsx)("img", { src: v ? D : F, alt: "", className: V ? R.i_ : R.kX }),
                          (0, s.jsxs)("div", {
                              className: R.FS,
                              children: [
                                  E &&
                                      (0, s.jsx)("div", {
                                          className: R.$N,
                                          children: (0, s.jsx)(u.E, { type: "beta", variant: "expressive" }),
                                      }),
                                  (0, s.jsx)(o.E, {
                                      variant: "display-md",
                                      color: "text-strong",
                                      className: R.cf,
                                      children: J,
                                  }),
                              ],
                          }),
                      ],
                  }),
                  (T || S) && (0, s.jsx)(I, { discountAmount: b }),
                  G && (0, s.jsx)(B, { isOneStepCheckout: A, headerText: z, step: W, filteredBreadcrumbs: k }),
              ],
          });
};
