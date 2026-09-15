s.d(t, { A: () => D });
var n = s(477900);
s(582128);
var r = s(503698),
    a = s.n(r),
    i = s(17928),
    l = s(935462),
    c = s(297264),
    u = s(315629),
    o = s(508770),
    d = s(883645),
    m = s(721836),
    p = s(166532),
    x = s(834730),
    f = s(147925),
    C = s(375708),
    h = s(629979);
function L(e) {
    let { breadcrumb: t, isActiveBreadcrumb: s, isFinalBreadcrumb: r, separatorClassName: i } = e;
    return (0, n.jsxs)(
        "div",
        {
            "aria-current": s ? "step" : void 0,
            className: a()(h.hj, { [h.jQ]: r }),
            children: [
                (0, n.jsx)(x.E, {
                    variant: "text-sm/medium",
                    color: s ? "text-strong" : "text-muted",
                    children: t.label,
                }),
                r
                    ? null
                    : (0, n.jsx)(f.A, { "aria-hidden": !0, className: a()(h.LJ, i), direction: f.A.Directions.RIGHT }),
            ],
        },
        t.id,
    );
}
let v = function (e) {
    let { breadcrumbs: t, activeId: s, className: r, separatorClassName: i } = e;
    return (0, n.jsx)("nav", {
        "aria-label": C.intl.string(C.t.TfxqUO),
        className: a()(h.jD, r),
        children: t.map((e, r) =>
            (0, n.jsx)(
                L,
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
var g = s(573359),
    E = s(724651),
    A = s(732280),
    N = s(795269),
    T = s(221549);
let I = function (e) {
    let { discountAmount: t } = e,
        s = (0, A.V)(),
        r = null != s && s.isReferralTrial,
        a = C.intl.string(C.t.IBYG5U);
    return (
        void 0 !== t
            ? (a = C.intl.formatToPlainString(C.t.iiLbvu, { percent: t }))
            : r && (a = C.intl.string(C.t.gtNqJQ)),
        (0, n.jsx)("div", { className: T.f, children: (0, n.jsx)(N.R, { text: a }) })
    );
};
var j = s(202541),
    S = s(88001),
    _ = s(910705),
    P = s(592551),
    b = s(232266),
    y = s(243002),
    R = s(303930),
    M = s(241988);
function U(e) {
    let { isOneStepCheckout: t, headerText: s, step: r, filteredBreadcrumbs: a } = e;
    if (t)
        return (0, n.jsx)("div", {
            className: _.r9,
            children: (0, n.jsx)(c.D, { variant: "heading-md/bold", children: s }),
        });
    let i = a.length > 1;
    return (0, n.jsxs)("div", {
        className: _.go,
        children: [
            (0, n.jsx)(c.D, { variant: "text-lg/semibold", children: s }),
            i && (0, n.jsx)(v, { activeId: r, breadcrumbs: a }),
        ],
    });
}
function O(e) {
    let { isTier2: t } = e,
        s = t ? y : "/assets/947416a0e8a7172a.svg";
    return (0, n.jsxs)(n.Fragment, {
        children: [
            (0, n.jsx)("img", { src: t ? b : "/assets/792ab98da2b21b02.svg", alt: "", className: _.mR }),
            (0, n.jsx)("img", { src: s, alt: "", className: _.dz }),
            (0, n.jsx)("img", { src: s, alt: "", className: _.lM }),
        ],
    });
}
let D = function (e) {
    let {
            hideCloseButton: t = !1,
            hideCloseOnFullScreen: s,
            onClose: r,
            upgradeToPremiumType: x,
            isEligibleForTrial: f = !1,
            showTrialBadge: h = !1,
            showDiscountBadge: L = !1,
            isPremiumGroupPurchase: v = !1,
            forceBrandRefreshHeader: A = !1,
        } = e,
        N = x === j.PremiumTypes.TIER_2,
        T = (0, E.O)(),
        b = T?.discount?.amount,
        { startedPaymentFlowWithPaymentSources: y, isInOneStepSubscriptionCheckout: D } = (0, m.t4)((e) => ({
            startedPaymentFlowWithPaymentSources: e.startedPaymentFlowWithPaymentSources,
            isInOneStepSubscriptionCheckout: e.getIsInOneStepSubscriptionCheckout({ isTrial: f }),
        })),
        w = (0, i.bG)([g.A], () => g.A.isDisplayingWowMomentConfirmation),
        { step: G, breadcrumbsData: k } = (0, d.Ay)();
    if (!A && (null == k || 0 === k.length)) return null;
    let B = (k ?? []).flatMap((e) => {
        let t = e.useBreadcrumbLabel(f),
            s = e.sectionHeaderText;
        return null != t ? { id: e.id, label: t, sectionHeaderText: s } : [];
    });
    if (!A && 0 === B.length) return null;
    let F = (B = B.filter((e) => {
            if (v && e.id === p.pn.PLAN_SELECT) return !1;
            let t = e.id !== p.pn.ADD_PAYMENT_STEPS,
                s = e.id === p.pn.ADD_PAYMENT_STEPS && !y;
            return !f || t || s;
        })).find((e) => e.id === G),
        H = F?.sectionHeaderText?.() ?? F?.label,
        W = (null == G || G !== p.pn.PLAN_SELECT) && null != H && null != G,
        V = D && W && G === p.pn.REVIEW,
        z = N ? "nitro-pink" : "nitro-green",
        Y = v ? (0, S.DP)() : N ? C.intl.string(C.t.lG6a5x) : C.intl.string(C.t["t9uG/o"]),
        K = _.kL,
        X = a()(_.N1, P.headerGradient);
    return w
        ? (0, n.jsx)("div", { className: K, children: (0, n.jsx)(u.h, { color: z, className: X }) })
        : (0, n.jsxs)("div", {
              className: K,
              children: [
                  (0, n.jsxs)(u.h, {
                      color: z,
                      className: a()(X, { [_.s1]: !W }),
                      children: [
                          (0, n.jsx)(O, { isTier2: N }),
                          !t &&
                              (0, n.jsx)(l.s_, {
                                  "data-migration-pending": !0,
                                  hideOnFullscreen: s,
                                  onClick: r,
                                  className: _.Ep,
                              }),
                          (0, n.jsx)("img", { src: N ? M : R, alt: "", className: V ? _.i_ : _.kX }),
                          (0, n.jsxs)("div", {
                              className: _.FS,
                              children: [
                                  v &&
                                      (0, n.jsx)("div", {
                                          className: _.$N,
                                          children: (0, n.jsx)(o.E, { type: "beta", variant: "expressive" }),
                                      }),
                                  (0, n.jsx)(c.D, {
                                      variant: "nitro-sm",
                                      color: "text-strong",
                                      className: _.cf,
                                      children: Y,
                                  }),
                              ],
                          }),
                      ],
                  }),
                  (h || L) && (0, n.jsx)(I, { discountAmount: b }),
                  W && (0, n.jsx)(U, { isOneStepCheckout: D, headerText: H, step: G, filteredBreadcrumbs: B }),
              ],
          });
};
