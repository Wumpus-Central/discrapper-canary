s.d(t, { A: () => w });
var n = s(477900);
s(582128);
var r = s(503698),
    a = s.n(r),
    i = s(855986),
    l = s(935462),
    o = s(534514),
    c = s(315629),
    u = s(805251),
    d = s(883645),
    m = s(316363),
    E = s(166532),
    p = s(834730),
    _ = s(147925),
    L = s(792996),
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
                    variant: "body-sm/medium",
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
    I = s(423814),
    T = s(77528),
    f = s(795269),
    C = s(221549);
let x = function (e) {
    let { discountAmount: t } = e,
        s = (0, T.V)(),
        r = null != s && s.isReferralTrial,
        a = L.intl.string(L.t.IBYG5U);
    return (
        void 0 !== t
            ? (a = L.intl.formatToPlainString(L.t.iiLbvu, { percent: t }))
            : r && (a = L.intl.string(L.t.gtNqJQ)),
        (0, n.jsx)("div", { className: C.f, children: (0, n.jsx)(f.R, { text: a }) })
    );
};
var g = s(682901),
    y = s(88001),
    j = s(910705),
    R = s(592551),
    O = s(232266),
    D = s(243002),
    P = s(303930),
    v = s(241988);
function M(e) {
    let { isOneStepCheckout: t, headerText: s, step: r, filteredBreadcrumbs: a } = e;
    if (t)
        return (0, n.jsx)("div", {
            className: j.r9,
            children: (0, n.jsx)(o.D, { variant: "heading-sm/semibold", children: s }),
        });
    let i = a.length > 1;
    return (0, n.jsxs)("div", {
        className: j.go,
        children: [
            (0, n.jsx)(o.D, { variant: "body-lg/semibold", children: s }),
            i && (0, n.jsx)(N, { activeId: r, breadcrumbs: a }),
        ],
    });
}
function b(e) {
    let { isTier2: t } = e,
        s = t ? D : "/assets/947416a0e8a7172a.svg";
    return (0, n.jsxs)(n.Fragment, {
        children: [
            (0, n.jsx)("img", { src: t ? O : "/assets/792ab98da2b21b02.svg", alt: "", className: j.mR }),
            (0, n.jsx)("img", { src: s, alt: "", className: j.dz }),
            (0, n.jsx)("img", { src: s, alt: "", className: j.lM }),
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
        f = p === g.PremiumTypes.TIER_2,
        C = (0, I.O)(),
        O = C?.discount?.amount,
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
        W = k?.sectionHeaderText?.() ?? k?.label,
        V = (null == B || B !== E.pn.PLAN_SELECT) && null != W && null != B,
        H = w && V && B === E.pn.REVIEW,
        Y = f ? "nitro-pink" : "nitro-green",
        z = N ? (0, y.DP)() : f ? L.intl.string(L.t.lG6a5x) : L.intl.string(L.t["t9uG/o"]),
        K = j.kL,
        X = a()(j.N1, R.headerGradient);
    return U
        ? (0, n.jsx)("div", { className: K, children: (0, n.jsx)(c.h, { color: Y, className: X }) })
        : (0, n.jsxs)("div", {
              className: K,
              children: [
                  (0, n.jsxs)(c.h, {
                      color: Y,
                      className: a()(X, { [j.s1]: !V }),
                      children: [
                          (0, n.jsx)(b, { isTier2: f }),
                          !t &&
                              (0, n.jsx)(l.s_, {
                                  "data-migration-pending": !0,
                                  hideOnFullscreen: s,
                                  onClick: r,
                                  className: j.Ep,
                              }),
                          (0, n.jsx)("img", { src: f ? v : P, alt: "", className: H ? j.i_ : j.kX }),
                          (0, n.jsxs)("div", {
                              className: j.FS,
                              children: [
                                  N &&
                                      (0, n.jsx)("div", {
                                          className: j.$N,
                                          children: (0, n.jsx)(u.E, { type: "beta", variant: "expressive" }),
                                      }),
                                  (0, n.jsx)(o.D, { variant: "nitro-sm", color: "text-strong", children: z }),
                              ],
                          }),
                      ],
                  }),
                  (A || h) && (0, n.jsx)(x, { discountAmount: O }),
                  V && (0, n.jsx)(M, { isOneStepCheckout: w, headerText: W, step: B, filteredBreadcrumbs: G }),
              ],
          });
};
