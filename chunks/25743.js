t.d(s, { A: () => w });
var n = t(477900);
t(582128);
var i = t(503698),
    r = t.n(i),
    a = t(17928),
    l = t(935462),
    c = t(297264),
    u = t(315629),
    o = t(508770),
    m = t(883645),
    d = t(263532),
    C = t(166532),
    x = t(834730),
    p = t(147925),
    L = t(375708),
    f = t(629979);
function h(e) {
    let { breadcrumb: s, isActiveBreadcrumb: t, isFinalBreadcrumb: i, separatorClassName: a } = e;
    return (0, n.jsxs)(
        "div",
        {
            "aria-current": t ? "step" : void 0,
            className: r()(f.hj, { [f.jQ]: i }),
            children: [
                (0, n.jsx)(x.E, {
                    variant: "text-sm/medium",
                    color: t ? "text-strong" : "text-muted",
                    children: s.label,
                }),
                i
                    ? null
                    : (0, n.jsx)(p.A, { "aria-hidden": !0, className: r()(f.LJ, a), direction: p.A.Directions.RIGHT }),
            ],
        },
        s.id,
    );
}
let j = function (e) {
    let { breadcrumbs: s, activeId: t, className: i, separatorClassName: a } = e;
    return (0, n.jsx)("nav", {
        "aria-label": L.intl.string(L.t.TfxqUO),
        className: r()(f.jD, i),
        children: s.map((e, i) =>
            (0, n.jsx)(
                h,
                {
                    breadcrumb: e,
                    isActiveBreadcrumb: e.id === t,
                    isFinalBreadcrumb: i === s.length - 1,
                    separatorClassName: a,
                },
                e.id,
            ),
        ),
    });
};
var N = t(573359),
    T = t(724651),
    g = t(732280),
    A = t(795269),
    E = t(221549);
let v = function (e) {
    let { discountAmount: s } = e,
        t = (0, g.V)(),
        i = null != t && t.isReferralTrial,
        r = L.intl.string(L.t.IBYG5U);
    return (
        void 0 !== s
            ? (r = L.intl.formatToPlainString(L.t.iiLbvu, { percent: s }))
            : i && (r = L.intl.string(L.t.gtNqJQ)),
        (0, n.jsx)("div", { className: E.f, children: (0, n.jsx)(A.R, { text: r }) })
    );
};
var S = t(202541),
    I = t(88001),
    y = t(910705),
    _ = t(592551),
    M = t(232266),
    b = t(243002),
    P = t(303930),
    R = t(241988);
function U(e) {
    let { isOneStepCheckout: s, headerText: t, step: i, filteredBreadcrumbs: r } = e;
    if (s)
        return (0, n.jsx)("div", {
            className: y.r9,
            children: (0, n.jsx)(c.D, { variant: "heading-md/bold", children: t }),
        });
    let a = r.length > 1;
    return (0, n.jsxs)("div", {
        className: y.go,
        children: [
            (0, n.jsx)(c.D, { variant: "text-lg/semibold", children: t }),
            a && (0, n.jsx)(j, { activeId: i, breadcrumbs: r }),
        ],
    });
}
function D(e) {
    let { isTier2: s } = e,
        t = s ? b : "/assets/947416a0e8a7172a.svg";
    return (0, n.jsxs)(n.Fragment, {
        children: [
            (0, n.jsx)("img", { src: s ? M : "/assets/792ab98da2b21b02.svg", alt: "", className: y.mR }),
            (0, n.jsx)("img", { src: t, alt: "", className: y.dz }),
            (0, n.jsx)("img", { src: t, alt: "", className: y.lM }),
        ],
    });
}
let w = function (e) {
    let {
            hideCloseButton: s = !1,
            hideCloseOnFullScreen: t,
            onClose: i,
            upgradeToPremiumType: x,
            isEligibleForTrial: p = !1,
            showTrialBadge: f = !1,
            showDiscountBadge: h = !1,
            isPremiumGroupPurchase: j = !1,
            forceBrandRefreshHeader: g = !1,
        } = e,
        A = x === S.PremiumTypes.TIER_2,
        E = (0, T.O)(),
        M = E?.discount?.amount,
        { startedPaymentFlowWithPaymentSources: b, isInOneStepSubscriptionCheckout: w } = (0, d.t4)((e) => ({
            startedPaymentFlowWithPaymentSources: e.startedPaymentFlowWithPaymentSources,
            isInOneStepSubscriptionCheckout: e.getIsInOneStepSubscriptionCheckout({ isTrial: p }),
        })),
        F = (0, a.bG)([N.A], () => N.A.isDisplayingWowMomentConfirmation),
        { step: O, breadcrumbsData: k } = (0, m.Ay)();
    if (!g && (null == k || 0 === k.length)) return null;
    let H = (k ?? []).flatMap((e) => {
        let s = e.useBreadcrumbLabel(p),
            t = e.sectionHeaderText;
        return null != s ? { id: e.id, label: s, sectionHeaderText: t } : [];
    });
    if (!g && 0 === H.length) return null;
    let V = (H = H.filter((e) => {
            if (j && e.id === C.pn.PLAN_SELECT) return !1;
            let s = e.id !== C.pn.ADD_PAYMENT_STEPS,
                t = e.id === C.pn.ADD_PAYMENT_STEPS && !b;
            return !p || s || t;
        })).find((e) => e.id === O),
        B = V?.sectionHeaderText?.() ?? V?.label,
        W = (null == O || O !== C.pn.PLAN_SELECT) && null != B && null != O,
        z = w && W && O === C.pn.REVIEW,
        G = A ? "nitro-pink" : "nitro-green",
        K = j ? (0, I.DP)() : A ? L.intl.string(L.t.lG6a5x) : L.intl.string(L.t["t9uG/o"]),
        Y = y.kL,
        Z = r()(y.N1, _.headerGradient);
    return F
        ? (0, n.jsx)("div", { className: Y, children: (0, n.jsx)(u.h, { color: G, className: Z }) })
        : (0, n.jsxs)("div", {
              className: Y,
              children: [
                  (0, n.jsxs)(u.h, {
                      color: G,
                      className: r()(Z, { [y.s1]: !W }),
                      children: [
                          (0, n.jsx)(D, { isTier2: A }),
                          !s &&
                              (0, n.jsx)(l.s_, {
                                  "data-migration-pending": !0,
                                  hideOnFullscreen: t,
                                  onClick: i,
                                  className: y.Ep,
                              }),
                          (0, n.jsx)("img", { src: A ? R : P, alt: "", className: z ? y.i_ : y.kX }),
                          (0, n.jsxs)("div", {
                              className: y.FS,
                              children: [
                                  j &&
                                      (0, n.jsx)("div", {
                                          className: y.$N,
                                          children: (0, n.jsx)(o.E, { type: "beta", variant: "expressive" }),
                                      }),
                                  (0, n.jsx)(c.D, {
                                      variant: "nitro-sm",
                                      color: "text-strong",
                                      className: y.cf,
                                      children: K,
                                  }),
                              ],
                          }),
                      ],
                  }),
                  (f || h) && (0, n.jsx)(v, { discountAmount: M }),
                  W && (0, n.jsx)(U, { isOneStepCheckout: w, headerText: B, step: O, filteredBreadcrumbs: H }),
              ],
          });
};
