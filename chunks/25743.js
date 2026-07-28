n.d(t, { A: () => D });
var s = n(477900);
n(582128);
var r = n(503698),
    i = n.n(r),
    a = n(17928),
    l = n(935462),
    u = n(297264),
    c = n(315629),
    o = n(508770),
    d = n(883645),
    m = n(316915),
    f = n(166532),
    p = n(834730),
    x = n(147925),
    g = n(375708),
    h = n(16060);
function v(e) {
    let { breadcrumb: t, isActiveBreadcrumb: n, isFinalBreadcrumb: r, separatorClassName: a } = e;
    return (0, s.jsxs)(
        "div",
        {
            "aria-current": n ? "step" : void 0,
            className: i()(h.hj, { [h.jQ]: r }),
            children: [
                (0, s.jsx)(p.E, {
                    variant: "text-sm/medium",
                    color: n ? "text-strong" : "text-muted",
                    children: t.label,
                }),
                r
                    ? null
                    : (0, s.jsx)(x.A, { "aria-hidden": !0, className: i()(h.LJ, a), direction: x.A.Directions.RIGHT }),
            ],
        },
        t.id,
    );
}
let A = function (e) {
    let { breadcrumbs: t, activeId: n, className: r, separatorClassName: a } = e;
    return (0, s.jsx)("nav", {
        "aria-label": g.intl.string(g.t.TfxqUO),
        className: i()(h.jD, r),
        children: t.map((e, r) =>
            (0, s.jsx)(
                v,
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
var C = n(573359),
    L = n(422936),
    y = n(732280),
    I = n(795269),
    T = n(202541),
    b = n(194222);
let E = function (e) {
    let { discountAmount: t } = e,
        n = (0, y.V)(),
        r = null != n && n.trial_id === T.Dw,
        i = g.intl.string(g.t.IBYG5U);
    return (
        void 0 !== t
            ? (i = g.intl.formatToPlainString(g.t.iiLbvu, { percent: t }))
            : r && (i = g.intl.string(g.t.gtNqJQ)),
        (0, s.jsx)("div", { className: b.f, children: (0, s.jsx)(I.R, { text: i }) })
    );
};
var j = n(88001),
    N = n(741140),
    S = n(617736),
    _ = n(232266),
    P = n(243002),
    M = n(303930),
    R = n(241988);
function w(e) {
    let { isOneStepCheckout: t, headerText: n, step: r, filteredBreadcrumbs: i } = e;
    if (t)
        return (0, s.jsx)("div", {
            className: N.r9,
            children: (0, s.jsx)(u.D, { variant: "heading-md/bold", children: n }),
        });
    let a = i.length > 1;
    return (0, s.jsxs)("div", {
        className: N.go,
        children: [
            (0, s.jsx)(u.D, { variant: "text-lg/semibold", children: n }),
            a && (0, s.jsx)(A, { activeId: r, breadcrumbs: i }),
        ],
    });
}
function U(e) {
    let { isTier2: t } = e,
        n = t ? P : "/assets/947416a0e8a7172a.svg";
    return (0, s.jsxs)(s.Fragment, {
        children: [
            (0, s.jsx)("img", { src: t ? _ : "/assets/792ab98da2b21b02.svg", alt: "", className: N.mR }),
            (0, s.jsx)("img", { src: n, alt: "", className: N.dz }),
            (0, s.jsx)("img", { src: n, alt: "", className: N.lM }),
        ],
    });
}
let D = function (e) {
    let {
            hideCloseButton: t = !1,
            hideCloseOnFullScreen: n,
            onClose: r,
            upgradeToPremiumType: p,
            isEligibleForTrial: x = !1,
            showTrialBadge: h = !1,
            showDiscountBadge: v = !1,
            isPremiumGroupPurchase: A = !1,
            forceBrandRefreshHeader: y = !1,
        } = e,
        I = p === T.PremiumTypes.TIER_2,
        b = (0, L.O)(),
        _ = b?.discount?.amount,
        { startedPaymentFlowWithPaymentSources: P, isInOneStepSubscriptionCheckout: D } = (0, m.t4)((e) => ({
            startedPaymentFlowWithPaymentSources: e.startedPaymentFlowWithPaymentSources,
            isInOneStepSubscriptionCheckout: e.getIsInOneStepSubscriptionCheckout({ isTrial: x }),
        })),
        k = (0, a.bG)([C.A], () => C.A.isDisplayingWowMomentConfirmation),
        { step: O, breadcrumbsData: F } = (0, d.Ay)();
    if (!y && (null == F || 0 === F.length)) return null;
    let W = (F ?? []).flatMap((e) => {
        let t = e.useBreadcrumbLabel(x),
            n = e.sectionHeaderText;
        return null != t ? { id: e.id, label: t, sectionHeaderText: n } : [];
    });
    if (!y && 0 === W.length) return null;
    let G = (W = W.filter((e) => {
            if (A && e.id === f.pn.PLAN_SELECT) return !1;
            let t = e.id !== f.pn.ADD_PAYMENT_STEPS,
                n = e.id === f.pn.ADD_PAYMENT_STEPS && !P;
            return !x || t || n;
        })).find((e) => e.id === O),
        B = G?.sectionHeaderText?.() ?? G?.label,
        H = (null == O || O !== f.pn.PLAN_SELECT) && null != B && null != O,
        Y = D && H && O === f.pn.REVIEW,
        V = I ? "nitro-pink" : "nitro-green",
        K = A ? (0, j.DP)() : I ? g.intl.string(g.t.lG6a5x) : g.intl.string(g.t["t9uG/o"]),
        z = N.kL,
        Z = i()(N.N1, S.headerGradient);
    return k
        ? (0, s.jsx)("div", { className: z, children: (0, s.jsx)(c.h, { color: V, className: Z }) })
        : (0, s.jsxs)("div", {
              className: z,
              children: [
                  (0, s.jsxs)(c.h, {
                      color: V,
                      className: i()(Z, { [N.s1]: !H }),
                      children: [
                          (0, s.jsx)(U, { isTier2: I }),
                          !t &&
                              (0, s.jsx)(l.s_, {
                                  "data-migration-pending": !0,
                                  hideOnFullscreen: n,
                                  onClick: r,
                                  className: N.Ep,
                              }),
                          (0, s.jsx)("img", { src: I ? R : M, alt: "", className: Y ? N.i_ : N.kX }),
                          (0, s.jsxs)("div", {
                              className: N.FS,
                              children: [
                                  A &&
                                      (0, s.jsx)("div", {
                                          className: N.$N,
                                          children: (0, s.jsx)(o.E, { type: "beta", variant: "expressive" }),
                                      }),
                                  (0, s.jsx)(u.D, {
                                      variant: "display-md",
                                      color: "text-strong",
                                      className: N.cf,
                                      children: K,
                                  }),
                              ],
                          }),
                      ],
                  }),
                  (h || v) && (0, s.jsx)(E, { discountAmount: _ }),
                  H && (0, s.jsx)(w, { isOneStepCheckout: D, headerText: B, step: O, filteredBreadcrumbs: W }),
              ],
          });
};
