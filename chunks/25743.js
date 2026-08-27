n.d(t, { A: () => w });
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
    m = n(87725),
    p = n(166532),
    f = n(834730),
    x = n(147925),
    v = n(375708),
    g = n(629979);
function C(e) {
    let { breadcrumb: t, isActiveBreadcrumb: n, isFinalBreadcrumb: r, separatorClassName: a } = e;
    return (0, s.jsxs)(
        "div",
        {
            "aria-current": n ? "step" : void 0,
            className: i()(g.hj, { [g.jQ]: r }),
            children: [
                (0, s.jsx)(f.E, {
                    variant: "text-sm/medium",
                    color: n ? "text-strong" : "text-muted",
                    children: t.label,
                }),
                r
                    ? null
                    : (0, s.jsx)(x.A, { "aria-hidden": !0, className: i()(g.LJ, a), direction: x.A.Directions.RIGHT }),
            ],
        },
        t.id,
    );
}
let h = function (e) {
    let { breadcrumbs: t, activeId: n, className: r, separatorClassName: a } = e;
    return (0, s.jsx)("nav", {
        "aria-label": v.intl.string(v.t.TfxqUO),
        className: i()(g.jD, r),
        children: t.map((e, r) =>
            (0, s.jsx)(
                C,
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
var L = n(573359),
    I = n(724651),
    T = n(732280),
    E = n(795269),
    j = n(221549);
let A = function (e) {
    let { discountAmount: t } = e,
        n = (0, T.V)(),
        r = null != n && n.isReferralTrial,
        i = v.intl.string(v.t.IBYG5U);
    return (
        void 0 !== t
            ? (i = v.intl.formatToPlainString(v.t.iiLbvu, { percent: t }))
            : r && (i = v.intl.string(v.t.gtNqJQ)),
        (0, s.jsx)("div", { className: j.f, children: (0, s.jsx)(E.R, { text: i }) })
    );
};
var N = n(202541),
    b = n(88001),
    S = n(910705),
    y = n(592551),
    P = n(232266),
    _ = n(243002),
    R = n(303930),
    M = n(241988);
function D(e) {
    let { isOneStepCheckout: t, headerText: n, step: r, filteredBreadcrumbs: i } = e;
    if (t)
        return (0, s.jsx)("div", {
            className: S.r9,
            children: (0, s.jsx)(u.D, { variant: "heading-md/bold", children: n }),
        });
    let a = i.length > 1;
    return (0, s.jsxs)("div", {
        className: S.go,
        children: [
            (0, s.jsx)(u.D, { variant: "text-lg/semibold", children: n }),
            a && (0, s.jsx)(h, { activeId: r, breadcrumbs: i }),
        ],
    });
}
function U(e) {
    let { isTier2: t } = e,
        n = t ? _ : "/assets/947416a0e8a7172a.svg";
    return (0, s.jsxs)(s.Fragment, {
        children: [
            (0, s.jsx)("img", { src: t ? P : "/assets/792ab98da2b21b02.svg", alt: "", className: S.mR }),
            (0, s.jsx)("img", { src: n, alt: "", className: S.dz }),
            (0, s.jsx)("img", { src: n, alt: "", className: S.lM }),
        ],
    });
}
let w = function (e) {
    let {
            hideCloseButton: t = !1,
            hideCloseOnFullScreen: n,
            onClose: r,
            upgradeToPremiumType: f,
            isEligibleForTrial: x = !1,
            showTrialBadge: g = !1,
            showDiscountBadge: C = !1,
            isPremiumGroupPurchase: h = !1,
            forceBrandRefreshHeader: T = !1,
        } = e,
        E = f === N.PremiumTypes.TIER_2,
        j = (0, I.O)(),
        P = j?.discount?.amount,
        { startedPaymentFlowWithPaymentSources: _, isInOneStepSubscriptionCheckout: w } = (0, m.t4)((e) => ({
            startedPaymentFlowWithPaymentSources: e.startedPaymentFlowWithPaymentSources,
            isInOneStepSubscriptionCheckout: e.getIsInOneStepSubscriptionCheckout({ isTrial: x }),
        })),
        O = (0, a.bG)([L.A], () => L.A.isDisplayingWowMomentConfirmation),
        { step: k, breadcrumbsData: W } = (0, d.Ay)();
    if (!T && (null == W || 0 === W.length)) return null;
    let F = (W ?? []).flatMap((e) => {
        let t = e.useBreadcrumbLabel(x),
            n = e.sectionHeaderText;
        return null != t ? { id: e.id, label: t, sectionHeaderText: n } : [];
    });
    if (!T && 0 === F.length) return null;
    let H = (F = F.filter((e) => {
            if (h && e.id === p.pn.PLAN_SELECT) return !1;
            let t = e.id !== p.pn.ADD_PAYMENT_STEPS,
                n = e.id === p.pn.ADD_PAYMENT_STEPS && !_;
            return !x || t || n;
        })).find((e) => e.id === k),
        B = H?.sectionHeaderText?.() ?? H?.label,
        G = (null == k || k !== p.pn.PLAN_SELECT) && null != B && null != k,
        V = w && G && k === p.pn.REVIEW,
        z = E ? "nitro-pink" : "nitro-green",
        Y = h ? (0, b.DP)() : E ? v.intl.string(v.t.lG6a5x) : v.intl.string(v.t["t9uG/o"]),
        K = S.kL,
        Z = i()(S.N1, y.headerGradient);
    return O
        ? (0, s.jsx)("div", { className: K, children: (0, s.jsx)(c.h, { color: z, className: Z }) })
        : (0, s.jsxs)("div", {
              className: K,
              children: [
                  (0, s.jsxs)(c.h, {
                      color: z,
                      className: i()(Z, { [S.s1]: !G }),
                      children: [
                          (0, s.jsx)(U, { isTier2: E }),
                          !t &&
                              (0, s.jsx)(l.s_, {
                                  "data-migration-pending": !0,
                                  hideOnFullscreen: n,
                                  onClick: r,
                                  className: S.Ep,
                              }),
                          (0, s.jsx)("img", { src: E ? M : R, alt: "", className: V ? S.i_ : S.kX }),
                          (0, s.jsxs)("div", {
                              className: S.FS,
                              children: [
                                  h &&
                                      (0, s.jsx)("div", {
                                          className: S.$N,
                                          children: (0, s.jsx)(o.E, { type: "beta", variant: "expressive" }),
                                      }),
                                  (0, s.jsx)(u.D, {
                                      variant: "display-md",
                                      color: "text-strong",
                                      className: S.cf,
                                      children: Y,
                                  }),
                              ],
                          }),
                      ],
                  }),
                  (g || C) && (0, s.jsx)(A, { discountAmount: P }),
                  G && (0, s.jsx)(D, { isOneStepCheckout: w, headerText: B, step: k, filteredBreadcrumbs: F }),
              ],
          });
};
