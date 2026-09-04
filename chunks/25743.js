t.d(s, { A: () => O });
var n = t(477900);
t(582128);
var r = t(503698),
    a = t.n(r),
    i = t(17928),
    l = t(935462),
    c = t(297264),
    u = t(315629),
    o = t(508770),
    d = t(883645),
    m = t(206441),
    p = t(166532),
    x = t(834730),
    C = t(147925),
    L = t(375708),
    f = t(629979);
function h(e) {
    let { breadcrumb: s, isActiveBreadcrumb: t, isFinalBreadcrumb: r, separatorClassName: i } = e;
    return (0, n.jsxs)(
        "div",
        {
            "aria-current": t ? "step" : void 0,
            className: a()(f.hj, { [f.jQ]: r }),
            children: [
                (0, n.jsx)(x.E, {
                    variant: "text-sm/medium",
                    color: t ? "text-strong" : "text-muted",
                    children: s.label,
                }),
                r
                    ? null
                    : (0, n.jsx)(C.A, { "aria-hidden": !0, className: a()(f.LJ, i), direction: C.A.Directions.RIGHT }),
            ],
        },
        s.id,
    );
}
let g = function (e) {
    let { breadcrumbs: s, activeId: t, className: r, separatorClassName: i } = e;
    return (0, n.jsx)("nav", {
        "aria-label": L.intl.string(L.t.TfxqUO),
        className: a()(f.jD, r),
        children: s.map((e, r) =>
            (0, n.jsx)(
                h,
                {
                    breadcrumb: e,
                    isActiveBreadcrumb: e.id === t,
                    isFinalBreadcrumb: r === s.length - 1,
                    separatorClassName: i,
                },
                e.id,
            ),
        ),
    });
};
var E = t(573359),
    v = t(724651),
    N = t(732280),
    A = t(795269),
    I = t(221549);
let j = function (e) {
    let { discountAmount: s } = e,
        t = (0, N.V)(),
        r = null != t && t.isReferralTrial,
        a = L.intl.string(L.t.IBYG5U);
    return (
        void 0 !== s
            ? (a = L.intl.formatToPlainString(L.t.iiLbvu, { percent: s }))
            : r && (a = L.intl.string(L.t.gtNqJQ)),
        (0, n.jsx)("div", { className: I.f, children: (0, n.jsx)(A.R, { text: a }) })
    );
};
var T = t(202541),
    _ = t(88001),
    S = t(910705),
    y = t(592551),
    P = t(232266),
    b = t(243002),
    M = t(303930),
    R = t(241988);
function U(e) {
    let { isOneStepCheckout: s, headerText: t, step: r, filteredBreadcrumbs: a } = e;
    if (s)
        return (0, n.jsx)("div", {
            className: S.r9,
            children: (0, n.jsx)(c.D, { variant: "heading-md/bold", children: t }),
        });
    let i = a.length > 1;
    return (0, n.jsxs)("div", {
        className: S.go,
        children: [
            (0, n.jsx)(c.D, { variant: "text-lg/semibold", children: t }),
            i && (0, n.jsx)(g, { activeId: r, breadcrumbs: a }),
        ],
    });
}
function w(e) {
    let { isTier2: s } = e,
        t = s ? b : "/assets/947416a0e8a7172a.svg";
    return (0, n.jsxs)(n.Fragment, {
        children: [
            (0, n.jsx)("img", { src: s ? P : "/assets/792ab98da2b21b02.svg", alt: "", className: S.mR }),
            (0, n.jsx)("img", { src: t, alt: "", className: S.dz }),
            (0, n.jsx)("img", { src: t, alt: "", className: S.lM }),
        ],
    });
}
let O = function (e) {
    let {
            hideCloseButton: s = !1,
            hideCloseOnFullScreen: t,
            onClose: r,
            upgradeToPremiumType: x,
            isEligibleForTrial: C = !1,
            showTrialBadge: f = !1,
            showDiscountBadge: h = !1,
            isPremiumGroupPurchase: g = !1,
            forceBrandRefreshHeader: N = !1,
        } = e,
        A = x === T.PremiumTypes.TIER_2,
        I = (0, v.O)(),
        P = I?.discount?.amount,
        { startedPaymentFlowWithPaymentSources: b, isInOneStepSubscriptionCheckout: O } = (0, m.t4)((e) => ({
            startedPaymentFlowWithPaymentSources: e.startedPaymentFlowWithPaymentSources,
            isInOneStepSubscriptionCheckout: e.getIsInOneStepSubscriptionCheckout({ isTrial: C }),
        })),
        D = (0, i.bG)([E.A], () => E.A.isDisplayingWowMomentConfirmation),
        { step: k, breadcrumbsData: B } = (0, d.Ay)();
    if (!N && (null == B || 0 === B.length)) return null;
    let F = (B ?? []).flatMap((e) => {
        let s = e.useBreadcrumbLabel(C),
            t = e.sectionHeaderText;
        return null != s ? { id: e.id, label: s, sectionHeaderText: t } : [];
    });
    if (!N && 0 === F.length) return null;
    let G = (F = F.filter((e) => {
            if (g && e.id === p.pn.PLAN_SELECT) return !1;
            let s = e.id !== p.pn.ADD_PAYMENT_STEPS,
                t = e.id === p.pn.ADD_PAYMENT_STEPS && !b;
            return !C || s || t;
        })).find((e) => e.id === k),
        H = G?.sectionHeaderText?.() ?? G?.label,
        W = (null == k || k !== p.pn.PLAN_SELECT) && null != H && null != k,
        z = O && W && k === p.pn.REVIEW,
        V = A ? "nitro-pink" : "nitro-green",
        Y = g ? (0, _.DP)() : A ? L.intl.string(L.t.lG6a5x) : L.intl.string(L.t["t9uG/o"]),
        K = S.kL,
        Z = a()(S.N1, y.headerGradient);
    return D
        ? (0, n.jsx)("div", { className: K, children: (0, n.jsx)(u.h, { color: V, className: Z }) })
        : (0, n.jsxs)("div", {
              className: K,
              children: [
                  (0, n.jsxs)(u.h, {
                      color: V,
                      className: a()(Z, { [S.s1]: !W }),
                      children: [
                          (0, n.jsx)(w, { isTier2: A }),
                          !s &&
                              (0, n.jsx)(l.s_, {
                                  "data-migration-pending": !0,
                                  hideOnFullscreen: t,
                                  onClick: r,
                                  className: S.Ep,
                              }),
                          (0, n.jsx)("img", { src: A ? R : M, alt: "", className: z ? S.i_ : S.kX }),
                          (0, n.jsxs)("div", {
                              className: S.FS,
                              children: [
                                  g &&
                                      (0, n.jsx)("div", {
                                          className: S.$N,
                                          children: (0, n.jsx)(o.E, { type: "beta", variant: "expressive" }),
                                      }),
                                  (0, n.jsx)(c.D, {
                                      variant: "display-md",
                                      color: "text-strong",
                                      className: S.cf,
                                      children: Y,
                                  }),
                              ],
                          }),
                      ],
                  }),
                  (f || h) && (0, n.jsx)(j, { discountAmount: P }),
                  W && (0, n.jsx)(U, { isOneStepCheckout: O, headerText: H, step: k, filteredBreadcrumbs: F }),
              ],
          });
};
