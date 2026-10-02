t.d(s, { A: () => D });
var n = t(477900);
t(582128);
var r = t(503698),
    i = t.n(r),
    a = t(17928),
    l = t(935462),
    c = t(297264),
    u = t(315629),
    o = t(508770),
    m = t(883645),
    d = t(661899),
    C = t(166532),
    x = t(834730),
    L = t(147925),
    p = t(375708),
    f = t(629979);
function h(e) {
    let { breadcrumb: s, isActiveBreadcrumb: t, isFinalBreadcrumb: r, separatorClassName: a } = e;
    return (0, n.jsxs)(
        "div",
        {
            "aria-current": t ? "step" : void 0,
            className: i()(f.hj, { [f.jQ]: r }),
            children: [
                (0, n.jsx)(x.E, {
                    variant: "text-sm/medium",
                    color: t ? "text-strong" : "text-muted",
                    children: s.label,
                }),
                r
                    ? null
                    : (0, n.jsx)(L.A, { "aria-hidden": !0, className: i()(f.LJ, a), direction: L.A.Directions.RIGHT }),
            ],
        },
        s.id,
    );
}
let j = function (e) {
    let { breadcrumbs: s, activeId: t, className: r, separatorClassName: a } = e;
    return (0, n.jsx)("nav", {
        "aria-label": p.intl.string(p.t.TfxqUO),
        className: i()(f.jD, r),
        children: s.map((e, r) =>
            (0, n.jsx)(
                h,
                {
                    breadcrumb: e,
                    isActiveBreadcrumb: e.id === t,
                    isFinalBreadcrumb: r === s.length - 1,
                    separatorClassName: a,
                },
                e.id,
            ),
        ),
    });
};
var N = t(573359),
    A = t(724651),
    T = t(732280),
    g = t(795269),
    E = t(221549);
let S = function (e) {
    let { discountAmount: s } = e,
        t = (0, T.V)(),
        r = null != t && t.isReferralTrial,
        i = p.intl.string(p.t.IBYG5U);
    return (
        void 0 !== s
            ? (i = p.intl.formatToPlainString(p.t.iiLbvu, { percent: s }))
            : r && (i = p.intl.string(p.t.gtNqJQ)),
        (0, n.jsx)("div", { className: E.f, children: (0, n.jsx)(g.R, { text: i }) })
    );
};
var I = t(202541),
    v = t(88001),
    _ = t(910705),
    y = t(592551),
    M = t(232266),
    b = t(243002),
    P = t(303930),
    R = t(241988);
function U(e) {
    let { isOneStepCheckout: s, headerText: t, step: r, filteredBreadcrumbs: i } = e;
    if (s)
        return (0, n.jsx)("div", {
            className: _.r9,
            children: (0, n.jsx)(c.D, { variant: "heading-md/bold", children: t }),
        });
    let a = i.length > 1;
    return (0, n.jsxs)("div", {
        className: _.go,
        children: [
            (0, n.jsx)(c.D, { variant: "text-lg/semibold", children: t }),
            a && (0, n.jsx)(j, { activeId: r, breadcrumbs: i }),
        ],
    });
}
function w(e) {
    let { isTier2: s } = e,
        t = s ? b : "/assets/947416a0e8a7172a.svg";
    return (0, n.jsxs)(n.Fragment, {
        children: [
            (0, n.jsx)("img", { src: s ? M : "/assets/792ab98da2b21b02.svg", alt: "", className: _.mR }),
            (0, n.jsx)("img", { src: t, alt: "", className: _.dz }),
            (0, n.jsx)("img", { src: t, alt: "", className: _.lM }),
        ],
    });
}
let D = function (e) {
    let {
            hideCloseButton: s = !1,
            hideCloseOnFullScreen: t,
            onClose: r,
            upgradeToPremiumType: x,
            isEligibleForTrial: L = !1,
            showTrialBadge: f = !1,
            showDiscountBadge: h = !1,
            isPremiumGroupPurchase: j = !1,
            forceBrandRefreshHeader: T = !1,
        } = e,
        g = x === I.PremiumTypes.TIER_2,
        E = (0, A.O)(),
        M = E?.discount?.amount,
        { startedPaymentFlowWithPaymentSources: b, isInOneStepSubscriptionCheckout: D } = (0, d.t4)((e) => ({
            startedPaymentFlowWithPaymentSources: e.startedPaymentFlowWithPaymentSources,
            isInOneStepSubscriptionCheckout: e.getIsInOneStepSubscriptionCheckout({ isTrial: L }),
        })),
        F = (0, a.bG)([N.A], () => N.A.isDisplayingWowMomentConfirmation),
        { step: O, breadcrumbsData: k } = (0, m.Ay)();
    if (!T && (null == k || 0 === k.length)) return null;
    let H = (k ?? []).flatMap((e) => {
        let s = e.useBreadcrumbLabel(L),
            t = e.sectionHeaderText;
        return null != s ? { id: e.id, label: s, sectionHeaderText: t } : [];
    });
    if (!T && 0 === H.length) return null;
    let B = (H = H.filter((e) => {
            if (j && e.id === C.pn.PLAN_SELECT) return !1;
            let s = e.id !== C.pn.ADD_PAYMENT_STEPS,
                t = e.id === C.pn.ADD_PAYMENT_STEPS && !b;
            return !L || s || t;
        })).find((e) => e.id === O),
        V = B?.sectionHeaderText?.() ?? B?.label,
        W = (null == O || O !== C.pn.PLAN_SELECT) && null != V && null != O,
        G = D && W && O === C.pn.REVIEW,
        z = g ? "nitro-pink" : "nitro-green",
        K = j ? (0, v.DP)() : g ? p.intl.string(p.t.lG6a5x) : p.intl.string(p.t["t9uG/o"]),
        Y = _.kL,
        Z = i()(_.N1, y.headerGradient);
    return F
        ? (0, n.jsx)("div", { className: Y, children: (0, n.jsx)(u.h, { color: z, className: Z }) })
        : (0, n.jsxs)("div", {
              className: Y,
              children: [
                  (0, n.jsxs)(u.h, {
                      color: z,
                      className: i()(Z, { [_.s1]: !W }),
                      children: [
                          (0, n.jsx)(w, { isTier2: g }),
                          !s &&
                              (0, n.jsx)(l.s_, {
                                  "data-migration-pending": !0,
                                  hideOnFullscreen: t,
                                  onClick: r,
                                  className: _.Ep,
                              }),
                          (0, n.jsx)("img", { src: g ? R : P, alt: "", className: G ? _.i_ : _.kX }),
                          (0, n.jsxs)("div", {
                              className: _.FS,
                              children: [
                                  j &&
                                      (0, n.jsx)("div", {
                                          className: _.$N,
                                          children: (0, n.jsx)(o.E, { type: "beta", variant: "expressive" }),
                                      }),
                                  (0, n.jsx)(c.D, {
                                      variant: "nitro-sm",
                                      color: "text-strong",
                                      className: _.cf,
                                      children: K,
                                  }),
                              ],
                          }),
                      ],
                  }),
                  (f || h) && (0, n.jsx)(S, { discountAmount: M }),
                  W && (0, n.jsx)(U, { isOneStepCheckout: D, headerText: V, step: O, filteredBreadcrumbs: H }),
              ],
          });
};
