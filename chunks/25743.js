t.d(s, { A: () => O });
var n = t(627968);
t(64700);
var i = t(503698),
    r = t.n(i),
    a = t(17928),
    l = t(534514),
    c = t(315629),
    u = t(935462),
    o = t(508770),
    d = t(584160),
    m = t(211159),
    C = t(166532),
    x = t(615310),
    p = t(800471),
    L = t(834730),
    h = t(147925),
    j = t(375708),
    g = t(89892);
function E(e) {
    let { breadcrumb: s, isActiveBreadcrumb: t, isFinalBreadcrumb: i, separatorClassName: a } = e;
    return (0, n.jsxs)(
        "div",
        {
            "aria-current": t ? "step" : void 0,
            className: r()(g.hj, { [g.jQ]: i }),
            children: [
                (0, n.jsx)(L.E, {
                    variant: "text-sm/medium",
                    color: t ? "text-strong" : "text-muted",
                    children: s.label,
                }),
                i
                    ? null
                    : (0, n.jsx)(h.A, { "aria-hidden": !0, className: r()(g.LJ, a), direction: h.A.Directions.RIGHT }),
            ],
        },
        s.id,
    );
}
let f = function (e) {
    let { breadcrumbs: s, activeId: t, className: i, separatorClassName: a } = e;
    return (0, n.jsx)("nav", {
        "aria-label": j.intl.string(j.t.TfxqUO),
        className: r()(g.jD, i),
        children: s.map((e, i) =>
            (0, n.jsx)(
                E,
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
var T = t(573359),
    N = t(422936),
    A = t(234419),
    I = t(795269),
    _ = t(788868),
    v = t(503110);
let S = (e) => {
    let { discountAmount: s } = e,
        t = (0, A.V)(),
        i = null != t && t.trial_id === _.Dw,
        r = j.intl.string(j.t.IBYG5U);
    return (
        void 0 !== s
            ? (r = j.intl.formatToPlainString(j.t.iiLbvu, { percent: s }))
            : i && (r = j.intl.string(j.t.gtNqJQ)),
        (0, n.jsx)("div", { className: v.f, children: (0, n.jsx)(I.R, { text: r }) })
    );
};
var M = t(88001),
    P = t(955212),
    R = t(967744),
    y = t(232266),
    b = t(243002),
    U = t(303930),
    D = t(241988);
function w(e) {
    let { isOneStepCheckout: s, headerText: t, step: i, filteredBreadcrumbs: r } = e;
    if (s)
        return (0, n.jsx)("div", {
            className: P.r9,
            children: (0, n.jsx)(l.D, { variant: "heading-md/bold", children: t }),
        });
    let a = r.length > 1;
    return (0, n.jsxs)("div", {
        className: P.go,
        children: [
            (0, n.jsx)(l.D, { variant: "text-lg/semibold", children: t }),
            a && (0, n.jsx)(f, { activeId: i, breadcrumbs: r }),
        ],
    });
}
function F(e) {
    let { isTier2: s } = e,
        t = s ? b : "/assets/947416a0e8a7172a.svg";
    return (0, n.jsxs)(n.Fragment, {
        children: [
            (0, n.jsx)("img", { src: s ? y : "/assets/792ab98da2b21b02.svg", alt: "", className: P.mR }),
            (0, n.jsx)("img", { src: t, alt: "", className: P.dz }),
            (0, n.jsx)("img", { src: t, alt: "", className: P.lM }),
        ],
    });
}
let O = function (e) {
    let {
            hideCloseButton: s = !1,
            hideCloseOnFullScreen: t,
            onClose: i,
            upgradeToPremiumType: L,
            isEligibleForTrial: h = !1,
            showTrialBadge: g = !1,
            showDiscountBadge: E = !1,
            isPremiumGroupPurchase: f = !1,
            forceBrandRefreshHeader: A = !1,
        } = e,
        I = L === _.PremiumTypes.TIER_2,
        v = (0, p.lp)(h),
        y = (0, N.O)(),
        b = y?.discount?.amount,
        O = (0, m.t4)((e) => e.startedPaymentFlowWithPaymentSources),
        k = (0, a.bG)([T.A], () => T.A.isDisplayingWowMomentConfirmation),
        { step: B, breadcrumbsData: V } = (0, x.Ay)();
    if (!A && (null == V || 0 === V.length)) return null;
    let H = (V ?? []).flatMap((e) => {
        let s = e.useBreadcrumbLabel(h),
            t = e.sectionHeaderText;
        return null != s ? { id: e.id, label: s, sectionHeaderText: t } : [];
    });
    if (!A && 0 === H.length) return null;
    let W = (H = H.filter((e) => {
            if (f && e.id === C.pn.PLAN_SELECT) return !1;
            let s = e.id !== C.pn.ADD_PAYMENT_STEPS,
                t = e.id === C.pn.ADD_PAYMENT_STEPS && !O;
            return !h || s || t;
        })).find((e) => e.id === B),
        z = W?.sectionHeaderText?.() ?? W?.label,
        G = !(null != B && d.M.includes(B)) && null != z && null != B,
        K = v && G && B === C.pn.REVIEW,
        Y = I ? "nitro-pink" : "nitro-green",
        q = f ? (0, M.DP)() : I ? j.intl.string(j.t.lG6a5x) : j.intl.string(j.t["t9uG/o"]),
        Z = P.kL,
        X = r()(P.N1, R.headerGradient);
    return k
        ? (0, n.jsx)("div", { className: Z, children: (0, n.jsx)(c.h, { color: Y, className: X }) })
        : (0, n.jsxs)("div", {
              className: Z,
              children: [
                  (0, n.jsxs)(c.h, {
                      color: Y,
                      className: r()(X, { [P.s1]: !G }),
                      children: [
                          (0, n.jsx)(F, { isTier2: I }),
                          !s &&
                              (0, n.jsx)(u.s_, {
                                  "data-migration-pending": !0,
                                  hideOnFullscreen: t,
                                  onClick: i,
                                  className: P.Ep,
                              }),
                          (0, n.jsx)("img", { src: I ? D : U, alt: "", className: K ? P.i_ : P.kX }),
                          (0, n.jsxs)("div", {
                              className: P.FS,
                              children: [
                                  f &&
                                      (0, n.jsx)("div", {
                                          className: P.$N,
                                          children: (0, n.jsx)(o.E, { type: "beta", variant: "expressive" }),
                                      }),
                                  (0, n.jsx)(l.D, {
                                      variant: "display-md",
                                      color: "text-strong",
                                      className: P.cf,
                                      children: q,
                                  }),
                              ],
                          }),
                      ],
                  }),
                  (g || E) && (0, n.jsx)(S, { discountAmount: b }),
                  G && (0, n.jsx)(w, { isOneStepCheckout: v, headerText: z, step: B, filteredBreadcrumbs: H }),
              ],
          });
};
