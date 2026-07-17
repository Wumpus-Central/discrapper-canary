n.d(t, { A: () => D });
var a = n(627968);
n(64700);
var r = n(503698),
    s = n.n(r),
    i = n(17928),
    l = n(297264),
    u = n(315629),
    o = n(935462),
    c = n(508770),
    d = n(316915),
    m = n(166532),
    f = n(615310),
    p = n(834730),
    g = n(147925),
    x = n(375708),
    A = n(89892);
function h(e) {
    let { breadcrumb: t, isActiveBreadcrumb: n, isFinalBreadcrumb: r, separatorClassName: i } = e;
    return (0, a.jsxs)(
        "div",
        {
            "aria-current": n ? "step" : void 0,
            className: s()(A.hj, { [A.jQ]: r }),
            children: [
                (0, a.jsx)(p.E, {
                    variant: "text-sm/medium",
                    color: n ? "text-strong" : "text-muted",
                    children: t.label,
                }),
                r
                    ? null
                    : (0, a.jsx)(g.A, { "aria-hidden": !0, className: s()(A.LJ, i), direction: g.A.Directions.RIGHT }),
            ],
        },
        t.id,
    );
}
let b = function (e) {
    let { breadcrumbs: t, activeId: n, className: r, separatorClassName: i } = e;
    return (0, a.jsx)("nav", {
        "aria-label": x.intl.string(x.t.TfxqUO),
        className: s()(A.jD, r),
        children: t.map((e, r) =>
            (0, a.jsx)(
                h,
                {
                    breadcrumb: e,
                    isActiveBreadcrumb: e.id === n,
                    isFinalBreadcrumb: r === t.length - 1,
                    separatorClassName: i,
                },
                e.id,
            ),
        ),
    });
};
var C = n(573359),
    L = n(422936),
    y = n(234419),
    _ = n(795269),
    v = n(202541),
    T = n(503110);
let E = function (e) {
    let { discountAmount: t } = e,
        n = (0, y.V)(),
        r = null != n && n.trial_id === v.Dw,
        s = x.intl.string(x.t.IBYG5U);
    return (
        void 0 !== t
            ? (s = x.intl.formatToPlainString(x.t.iiLbvu, { percent: t }))
            : r && (s = x.intl.string(x.t.gtNqJQ)),
        (0, a.jsx)("div", { className: T.f, children: (0, a.jsx)(_.R, { text: s }) })
    );
};
var I = n(88001),
    N = n(955212),
    j = n(967744),
    S = n(232266),
    P = n(243002),
    k = n(303930),
    M = n(241988);
function R(e) {
    let { isOneStepCheckout: t, headerText: n, step: r, filteredBreadcrumbs: s } = e;
    if (t)
        return (0, a.jsx)("div", {
            className: N.r9,
            children: (0, a.jsx)(l.D, { variant: "heading-md/bold", children: n }),
        });
    let i = s.length > 1;
    return (0, a.jsxs)("div", {
        className: N.go,
        children: [
            (0, a.jsx)(l.D, { variant: "text-lg/semibold", children: n }),
            i && (0, a.jsx)(b, { activeId: r, breadcrumbs: s }),
        ],
    });
}
function w(e) {
    let { isTier2: t } = e,
        n = t ? P : "/assets/947416a0e8a7172a.svg";
    return (0, a.jsxs)(a.Fragment, {
        children: [
            (0, a.jsx)("img", { src: t ? S : "/assets/792ab98da2b21b02.svg", alt: "", className: N.mR }),
            (0, a.jsx)("img", { src: n, alt: "", className: N.dz }),
            (0, a.jsx)("img", { src: n, alt: "", className: N.lM }),
        ],
    });
}
let D = function (e) {
    let {
            hideCloseButton: t = !1,
            hideCloseOnFullScreen: n,
            onClose: r,
            upgradeToPremiumType: p,
            isEligibleForTrial: g = !1,
            showTrialBadge: A = !1,
            showDiscountBadge: h = !1,
            isPremiumGroupPurchase: b = !1,
            forceBrandRefreshHeader: y = !1,
        } = e,
        _ = p === v.PremiumTypes.TIER_2,
        T = (0, L.O)(),
        S = T?.discount?.amount,
        { startedPaymentFlowWithPaymentSources: P, isInOneStepSubscriptionCheckout: D } = (0, d.t4)((e) => ({
            startedPaymentFlowWithPaymentSources: e.startedPaymentFlowWithPaymentSources,
            isInOneStepSubscriptionCheckout: e.getIsInOneStepSubscriptionCheckout({ isTrial: g }),
        })),
        U = (0, i.bG)([C.A], () => C.A.isDisplayingWowMomentConfirmation),
        { step: O, breadcrumbsData: G } = (0, f.Ay)();
    if (!y && (null == G || 0 === G.length)) return null;
    let B = (G ?? []).flatMap((e) => {
        let t = e.useBreadcrumbLabel(g),
            n = e.sectionHeaderText;
        return null != t ? { id: e.id, label: t, sectionHeaderText: n } : [];
    });
    if (!y && 0 === B.length) return null;
    let F = (B = B.filter((e) => {
            if (b && e.id === m.pn.PLAN_SELECT) return !1;
            let t = e.id !== m.pn.ADD_PAYMENT_STEPS,
                n = e.id === m.pn.ADD_PAYMENT_STEPS && !P;
            return !g || t || n;
        })).find((e) => e.id === O),
        W = F?.sectionHeaderText?.() ?? F?.label,
        H = (null == O || O !== m.pn.PLAN_SELECT) && null != W && null != O,
        V = D && H && O === m.pn.REVIEW,
        Y = _ ? "nitro-pink" : "nitro-green",
        K = b ? (0, I.DP)() : _ ? x.intl.string(x.t.lG6a5x) : x.intl.string(x.t["t9uG/o"]),
        z = N.kL,
        Z = s()(N.N1, j.headerGradient);
    return U
        ? (0, a.jsx)("div", { className: z, children: (0, a.jsx)(u.h, { color: Y, className: Z }) })
        : (0, a.jsxs)("div", {
              className: z,
              children: [
                  (0, a.jsxs)(u.h, {
                      color: Y,
                      className: s()(Z, { [N.s1]: !H }),
                      children: [
                          (0, a.jsx)(w, { isTier2: _ }),
                          !t &&
                              (0, a.jsx)(o.s_, {
                                  "data-migration-pending": !0,
                                  hideOnFullscreen: n,
                                  onClick: r,
                                  className: N.Ep,
                              }),
                          (0, a.jsx)("img", { src: _ ? M : k, alt: "", className: V ? N.i_ : N.kX }),
                          (0, a.jsxs)("div", {
                              className: N.FS,
                              children: [
                                  b &&
                                      (0, a.jsx)("div", {
                                          className: N.$N,
                                          children: (0, a.jsx)(c.E, { type: "beta", variant: "expressive" }),
                                      }),
                                  (0, a.jsx)(l.D, {
                                      variant: "display-md",
                                      color: "text-strong",
                                      className: N.cf,
                                      children: K,
                                  }),
                              ],
                          }),
                      ],
                  }),
                  (A || h) && (0, a.jsx)(E, { discountAmount: S }),
                  H && (0, a.jsx)(R, { isOneStepCheckout: D, headerText: W, step: O, filteredBreadcrumbs: B }),
              ],
          });
};
