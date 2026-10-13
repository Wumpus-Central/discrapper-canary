s.d(t, { A: () => w });
var n = s(477900);
s(582128);
var r = s(503698),
    a = s.n(r),
    i = s(17928),
    l = s(935462),
    o = s(297264),
    c = s(315629),
    u = s(62010),
    d = s(883645),
    m = s(504560),
    E = s(166532),
    p = s(834730),
    _ = s(147925),
    L = s(660183),
    A = s(629979);
function h(e) {
    let { breadcrumb: t, isActiveBreadcrumb: s, isFinalBreadcrumb: r, separatorClassName: i } = e;
    return (0, n.jsxs)(
        "div",
        {
            "aria-current": s ? "step" : void 0,
            className: a()(A.hj, { [A.jQ]: r }),
            children: [
                (0, n.jsx)(p.E, {
                    variant: "text-sm/medium",
                    color: s ? "text-strong" : "text-muted",
                    children: t.label,
                }),
                r
                    ? null
                    : (0, n.jsx)(_.A, { "aria-hidden": !0, className: a()(A.LJ, i), direction: _.A.Directions.RIGHT }),
            ],
        },
        t.id,
    );
}
let N = function (e) {
    let { breadcrumbs: t, activeId: s, className: r, separatorClassName: i } = e;
    return (0, n.jsx)("nav", {
        "aria-label": L.intl.string(L.t.TfxqUO),
        className: a()(A.jD, r),
        children: t.map((e, r) =>
            (0, n.jsx)(
                h,
                {
                    breadcrumb: e,
                    isActiveBreadcrumb: e.id === s,
                    isFinalBreadcrumb: r === t.length - 1,
                    separatorClassName: i,
                },
                e.id,
            ),
        ),
    });
};
var S = s(573359),
    I = s(724651),
    T = s(732280),
    C = s(795269),
    f = s(221549);
let x = function (e) {
    let { discountAmount: t } = e,
        s = (0, T.V)(),
        r = null != s && s.isReferralTrial,
        a = L.intl.string(L.t.IBYG5U);
    return (
        void 0 !== t
            ? (a = L.intl.formatToPlainString(L.t.iiLbvu, { percent: t }))
            : r && (a = L.intl.string(L.t.gtNqJQ)),
        (0, n.jsx)("div", { className: f.f, children: (0, n.jsx)(C.R, { text: a }) })
    );
};
var g = s(202541),
    j = s(88001),
    y = s(910705),
    R = s(592551),
    O = s(232266),
    D = s(243002),
    P = s(303930),
    v = s(241988);
function M(e) {
    let { isOneStepCheckout: t, headerText: s, step: r, filteredBreadcrumbs: a } = e;
    if (t)
        return (0, n.jsx)("div", {
            className: y.r9,
            children: (0, n.jsx)(o.D, { variant: "heading-md/bold", children: s }),
        });
    let i = a.length > 1;
    return (0, n.jsxs)("div", {
        className: y.go,
        children: [
            (0, n.jsx)(o.D, { variant: "text-lg/semibold", children: s }),
            i && (0, n.jsx)(N, { activeId: r, breadcrumbs: a }),
        ],
    });
}
function b(e) {
    let { isTier2: t } = e,
        s = t ? D : "/assets/947416a0e8a7172a.svg";
    return (0, n.jsxs)(n.Fragment, {
        children: [
            (0, n.jsx)("img", { src: t ? O : "/assets/792ab98da2b21b02.svg", alt: "", className: y.mR }),
            (0, n.jsx)("img", { src: s, alt: "", className: y.dz }),
            (0, n.jsx)("img", { src: s, alt: "", className: y.lM }),
        ],
    });
}
let w = function (e) {
    let {
            hideCloseButton: t = !1,
            hideCloseOnFullScreen: s,
            onClose: r,
            upgradeToPremiumType: p,
            isEligibleForTrial: _ = !1,
            showTrialBadge: A = !1,
            showDiscountBadge: h = !1,
            isPremiumGroupPurchase: N = !1,
            forceBrandRefreshHeader: T = !1,
        } = e,
        C = p === g.PremiumTypes.TIER_2,
        f = (0, I.O)(),
        O = f?.discount?.amount,
        { startedPaymentFlowWithPaymentSources: D, isInOneStepSubscriptionCheckout: w } = (0, m.t4)((e) => ({
            startedPaymentFlowWithPaymentSources: e.startedPaymentFlowWithPaymentSources,
            isInOneStepSubscriptionCheckout: e.getIsInOneStepSubscriptionCheckout({ isTrial: _ }),
        })),
        U = (0, i.bG)([S.A], () => S.A.isDisplayingWowMomentConfirmation),
        { step: B, breadcrumbsData: F } = (0, d.Ay)();
    if (!T && (null == F || 0 === F.length)) return null;
    let G = (F ?? []).flatMap((e) => {
        let t = e.useBreadcrumbLabel(_),
            s = e.sectionHeaderText;
        return null != t ? { id: e.id, label: t, sectionHeaderText: s } : [];
    });
    if (!T && 0 === G.length) return null;
    let k = (G = G.filter((e) => {
            if (N && e.id === E.pn.PLAN_SELECT) return !1;
            let t = e.id !== E.pn.ADD_PAYMENT_STEPS,
                s = e.id === E.pn.ADD_PAYMENT_STEPS && !D;
            return !_ || t || s;
        })).find((e) => e.id === B),
        V = k?.sectionHeaderText?.() ?? k?.label,
        H = (null == B || B !== E.pn.PLAN_SELECT) && null != V && null != B,
        W = w && H && B === E.pn.REVIEW,
        Y = C ? "nitro-pink" : "nitro-green",
        z = N ? (0, j.DP)() : C ? L.intl.string(L.t.lG6a5x) : L.intl.string(L.t["t9uG/o"]),
        K = y.kL,
        X = a()(y.N1, R.headerGradient);
    return U
        ? (0, n.jsx)("div", { className: K, children: (0, n.jsx)(c.h, { color: Y, className: X }) })
        : (0, n.jsxs)("div", {
              className: K,
              children: [
                  (0, n.jsxs)(c.h, {
                      color: Y,
                      className: a()(X, { [y.s1]: !H }),
                      children: [
                          (0, n.jsx)(b, { isTier2: C }),
                          !t &&
                              (0, n.jsx)(l.s_, {
                                  "data-migration-pending": !0,
                                  hideOnFullscreen: s,
                                  onClick: r,
                                  className: y.Ep,
                              }),
                          (0, n.jsx)("img", { src: C ? v : P, alt: "", className: W ? y.i_ : y.kX }),
                          (0, n.jsxs)("div", {
                              className: y.FS,
                              children: [
                                  N &&
                                      (0, n.jsx)("div", {
                                          className: y.$N,
                                          children: (0, n.jsx)(u.E, { type: "beta", variant: "expressive" }),
                                      }),
                                  (0, n.jsx)(o.D, {
                                      variant: "nitro-sm",
                                      color: "text-strong",
                                      className: y.cf,
                                      children: z,
                                  }),
                              ],
                          }),
                      ],
                  }),
                  (A || h) && (0, n.jsx)(x, { discountAmount: O }),
                  H && (0, n.jsx)(M, { isOneStepCheckout: w, headerText: V, step: B, filteredBreadcrumbs: G }),
              ],
          });
};
