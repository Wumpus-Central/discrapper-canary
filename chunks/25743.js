n.d(t, { A: () => w });
var s = n(477900);
n(582128);
var r = n(503698),
    i = n.n(r),
    l = n(17928),
    a = n(935462),
    u = n(297264),
    c = n(315629),
    o = n(508770),
    d = n(883645),
    m = n(87725),
    f = n(166532),
    p = n(834730),
    x = n(147925),
    g = n(375708),
    v = n(16060);
function A(e) {
    let { breadcrumb: t, isActiveBreadcrumb: n, isFinalBreadcrumb: r, separatorClassName: l } = e;
    return (0, s.jsxs)(
        "div",
        {
            "aria-current": n ? "step" : void 0,
            className: i()(v.hj, { [v.jQ]: r }),
            children: [
                (0, s.jsx)(p.E, {
                    variant: "text-sm/medium",
                    color: n ? "text-strong" : "text-muted",
                    children: t.label,
                }),
                r
                    ? null
                    : (0, s.jsx)(x.A, { "aria-hidden": !0, className: i()(v.LJ, l), direction: x.A.Directions.RIGHT }),
            ],
        },
        t.id,
    );
}
let h = function (e) {
    let { breadcrumbs: t, activeId: n, className: r, separatorClassName: l } = e;
    return (0, s.jsx)("nav", {
        "aria-label": g.intl.string(g.t.TfxqUO),
        className: i()(v.jD, r),
        children: t.map((e, r) =>
            (0, s.jsx)(
                A,
                {
                    breadcrumb: e,
                    isActiveBreadcrumb: e.id === n,
                    isFinalBreadcrumb: r === t.length - 1,
                    separatorClassName: l,
                },
                e.id,
            ),
        ),
    });
};
var L = n(573359),
    C = n(724651),
    T = n(732280),
    I = n(795269),
    E = n(202541),
    y = n(194222);
let b = function (e) {
    let { discountAmount: t } = e,
        n = (0, T.V)(),
        r = null != n && n.trial_id === E.Dw,
        i = g.intl.string(g.t.IBYG5U);
    return (
        void 0 !== t
            ? (i = g.intl.formatToPlainString(g.t.iiLbvu, { percent: t }))
            : r && (i = g.intl.string(g.t.gtNqJQ)),
        (0, s.jsx)("div", { className: y.f, children: (0, s.jsx)(I.R, { text: i }) })
    );
};
var j = n(88001),
    N = n(741140),
    S = n(617736),
    P = n(232266),
    _ = n(243002),
    M = n(303930),
    R = n(241988);
function D(e) {
    let { isOneStepCheckout: t, headerText: n, step: r, filteredBreadcrumbs: i } = e;
    if (t)
        return (0, s.jsx)("div", {
            className: N.r9,
            children: (0, s.jsx)(u.D, { variant: "heading-md/bold", children: n }),
        });
    let l = i.length > 1;
    return (0, s.jsxs)("div", {
        className: N.go,
        children: [
            (0, s.jsx)(u.D, { variant: "text-lg/semibold", children: n }),
            l && (0, s.jsx)(h, { activeId: r, breadcrumbs: i }),
        ],
    });
}
function U(e) {
    let { isTier2: t } = e,
        n = t ? _ : "/assets/947416a0e8a7172a.svg";
    return (0, s.jsxs)(s.Fragment, {
        children: [
            (0, s.jsx)("img", { src: t ? P : "/assets/792ab98da2b21b02.svg", alt: "", className: N.mR }),
            (0, s.jsx)("img", { src: n, alt: "", className: N.dz }),
            (0, s.jsx)("img", { src: n, alt: "", className: N.lM }),
        ],
    });
}
let w = function (e) {
    let {
            hideCloseButton: t = !1,
            hideCloseOnFullScreen: n,
            onClose: r,
            upgradeToPremiumType: p,
            isEligibleForTrial: x = !1,
            showTrialBadge: v = !1,
            showDiscountBadge: A = !1,
            isPremiumGroupPurchase: h = !1,
            forceBrandRefreshHeader: T = !1,
        } = e,
        I = p === E.PremiumTypes.TIER_2,
        y = (0, C.O)(),
        P = y?.discount?.amount,
        { startedPaymentFlowWithPaymentSources: _, isInOneStepSubscriptionCheckout: w } = (0, m.t4)((e) => ({
            startedPaymentFlowWithPaymentSources: e.startedPaymentFlowWithPaymentSources,
            isInOneStepSubscriptionCheckout: e.getIsInOneStepSubscriptionCheckout({ isTrial: x }),
        })),
        O = (0, l.bG)([L.A], () => L.A.isDisplayingWowMomentConfirmation),
        { step: k, breadcrumbsData: W } = (0, d.Ay)();
    if (!T && (null == W || 0 === W.length)) return null;
    let F = (W ?? []).flatMap((e) => {
        let t = e.useBreadcrumbLabel(x),
            n = e.sectionHeaderText;
        return null != t ? { id: e.id, label: t, sectionHeaderText: n } : [];
    });
    if (!T && 0 === F.length) return null;
    let G = (F = F.filter((e) => {
            if (h && e.id === f.pn.PLAN_SELECT) return !1;
            let t = e.id !== f.pn.ADD_PAYMENT_STEPS,
                n = e.id === f.pn.ADD_PAYMENT_STEPS && !_;
            return !x || t || n;
        })).find((e) => e.id === k),
        H = G?.sectionHeaderText?.() ?? G?.label,
        B = (null == k || k !== f.pn.PLAN_SELECT) && null != H && null != k,
        Y = w && B && k === f.pn.REVIEW,
        V = I ? "nitro-pink" : "nitro-green",
        K = h ? (0, j.DP)() : I ? g.intl.string(g.t.lG6a5x) : g.intl.string(g.t["t9uG/o"]),
        z = N.kL,
        Z = i()(N.N1, S.headerGradient);
    return O
        ? (0, s.jsx)("div", { className: z, children: (0, s.jsx)(c.h, { color: V, className: Z }) })
        : (0, s.jsxs)("div", {
              className: z,
              children: [
                  (0, s.jsxs)(c.h, {
                      color: V,
                      className: i()(Z, { [N.s1]: !B }),
                      children: [
                          (0, s.jsx)(U, { isTier2: I }),
                          !t &&
                              (0, s.jsx)(a.s_, {
                                  "data-migration-pending": !0,
                                  hideOnFullscreen: n,
                                  onClick: r,
                                  className: N.Ep,
                              }),
                          (0, s.jsx)("img", { src: I ? R : M, alt: "", className: Y ? N.i_ : N.kX }),
                          (0, s.jsxs)("div", {
                              className: N.FS,
                              children: [
                                  h &&
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
                  (v || A) && (0, s.jsx)(b, { discountAmount: P }),
                  B && (0, s.jsx)(D, { isOneStepCheckout: w, headerText: H, step: k, filteredBreadcrumbs: F }),
              ],
          });
};
