"use strict";
n.d(t, { A: () => U });
var l = n(627968);
n(64700);
var i = n(503698),
    s = n.n(i),
    r = n(17928),
    a = n(534514),
    o = n(315629),
    u = n(935462),
    c = n(508770),
    d = n(584160),
    m = n(211159),
    h = n(166532),
    p = n(615310),
    f = n(800471),
    g = n(834730),
    E = n(147925),
    A = n(375708),
    C = n(276900);
function x(e) {
    let { breadcrumb: t, isActiveBreadcrumb: n, isFinalBreadcrumb: i, separatorClassName: r } = e;
    return (0, l.jsxs)(
        "div",
        {
            "aria-current": n ? "step" : void 0,
            className: s()(C.hj, { [C.jQ]: i }),
            children: [
                (0, l.jsx)(g.E, {
                    variant: "text-sm/medium",
                    color: n ? "text-strong" : "text-muted",
                    children: t.label,
                }),
                i
                    ? null
                    : (0, l.jsx)(E.A, { "aria-hidden": !0, className: s()(C.LJ, r), direction: E.A.Directions.RIGHT }),
            ],
        },
        t.id,
    );
}
let I = function (e) {
    let { breadcrumbs: t, activeId: n, className: i, separatorClassName: r } = e;
    return (0, l.jsx)("nav", {
        "aria-label": A.intl.string(A.t.TfxqUO),
        className: s()(C.jD, i),
        children: t.map((e, i) =>
            (0, l.jsx)(
                x,
                {
                    breadcrumb: e,
                    isActiveBreadcrumb: e.id === n,
                    isFinalBreadcrumb: i === t.length - 1,
                    separatorClassName: r,
                },
                e.id,
            ),
        ),
    });
};
var _ = n(573359),
    S = n(422936),
    y = n(234419),
    v = n(795269),
    T = n(788868),
    N = n(800134);
let b = function (e) {
    let { discountAmount: t } = e,
        n = (0, y.V)(),
        i = null != n && n.trial_id === T.Dw,
        s = A.intl.string(A.t.IBYG5U);
    return (
        void 0 !== t
            ? (s = A.intl.formatToPlainString(A.t.iiLbvu, { percent: t }))
            : i && (s = A.intl.string(A.t.gtNqJQ)),
        (0, l.jsx)("div", { className: N.f, children: (0, l.jsx)(v.R, { text: s }) })
    );
};
var j = n(88001),
    R = n(212364),
    P = n(268800),
    L = n(232266),
    M = n(243002),
    O = n(303930),
    w = n(241988);
function k(e) {
    let { isOneStepCheckout: t, headerText: n, step: i, filteredBreadcrumbs: s } = e;
    if (t)
        return (0, l.jsx)("div", {
            className: R.r9,
            children: (0, l.jsx)(a.D, { variant: "heading-md/bold", children: n }),
        });
    let r = s.length > 1;
    return (0, l.jsxs)("div", {
        className: R.go,
        children: [
            (0, l.jsx)(a.D, { variant: "text-lg/semibold", children: n }),
            r && (0, l.jsx)(I, { activeId: i, breadcrumbs: s }),
        ],
    });
}
function D(e) {
    let { isTier2: t } = e,
        n = t ? M : "/assets/947416a0e8a7172a.svg";
    return (0, l.jsxs)(l.Fragment, {
        children: [
            (0, l.jsx)("img", { src: t ? L : "/assets/792ab98da2b21b02.svg", alt: "", className: R.mR }),
            (0, l.jsx)("img", { src: n, alt: "", className: R.dz }),
            (0, l.jsx)("img", { src: n, alt: "", className: R.lM }),
        ],
    });
}
let U = function (e) {
    let {
            hideCloseButton: t = !1,
            hideCloseOnFullScreen: n,
            onClose: i,
            upgradeToPremiumType: g,
            isEligibleForTrial: E = !1,
            showTrialBadge: C = !1,
            showDiscountBadge: x = !1,
            isPremiumGroupPurchase: I = !1,
            forceBrandRefreshHeader: y = !1,
        } = e,
        v = g === T.PremiumTypes.TIER_2,
        N = (0, f.lp)(E),
        L = (0, S.O)(),
        M = L?.discount?.amount,
        U = (0, m.t4)((e) => e.startedPaymentFlowWithPaymentSources),
        G = (0, r.bG)([_.A], () => _.A.isDisplayingWowMomentConfirmation),
        { step: F, breadcrumbsData: V } = (0, p.Ay)();
    if (!y && (null == V || 0 === V.length)) return null;
    let B = (V ?? []).flatMap((e) => {
        let t = e.useBreadcrumbLabel(E),
            n = e.sectionHeaderText;
        return null != t ? { id: e.id, label: t, sectionHeaderText: n } : [];
    });
    if (!y && 0 === B.length) return null;
    let H = (B = B.filter((e) => {
            if (I && e.id === h.pn.PLAN_SELECT) return !1;
            let t = e.id !== h.pn.ADD_PAYMENT_STEPS,
                n = e.id === h.pn.ADD_PAYMENT_STEPS && !U;
            return !E || t || n;
        })).find((e) => e.id === F),
        W = H?.sectionHeaderText?.() ?? H?.label,
        K = !(null != F && d.MU.includes(F)) && null != W && null != F,
        Y = N && K && F === h.pn.REVIEW,
        z = v ? "nitro-pink" : "nitro-green",
        Z = I ? (0, j.DP)() : v ? A.intl.string(A.t.lG6a5x) : A.intl.string(A.t["t9uG/o"]),
        q = R.kL,
        $ = s()(R.N1, P.headerGradient);
    return G
        ? (0, l.jsx)("div", { className: q, children: (0, l.jsx)(o.h, { color: z, className: $ }) })
        : (0, l.jsxs)("div", {
              className: q,
              children: [
                  (0, l.jsxs)(o.h, {
                      color: z,
                      className: s()($, { [R.s1]: !K }),
                      children: [
                          (0, l.jsx)(D, { isTier2: v }),
                          !t &&
                              (0, l.jsx)(u.s_, {
                                  "data-migration-pending": !0,
                                  hideOnFullscreen: n,
                                  onClick: i,
                                  className: R.Ep,
                              }),
                          (0, l.jsx)("img", { src: v ? w : O, alt: "", className: Y ? R.i_ : R.kX }),
                          (0, l.jsxs)("div", {
                              className: R.FS,
                              children: [
                                  I &&
                                      (0, l.jsx)("div", {
                                          className: R.$N,
                                          children: (0, l.jsx)(c.E, { type: "beta", variant: "expressive" }),
                                      }),
                                  (0, l.jsx)(a.D, {
                                      variant: "display-md",
                                      color: "text-strong",
                                      className: R.cf,
                                      children: Z,
                                  }),
                              ],
                          }),
                      ],
                  }),
                  (C || x) && (0, l.jsx)(b, { discountAmount: M }),
                  K && (0, l.jsx)(k, { isOneStepCheckout: N, headerText: W, step: F, filteredBreadcrumbs: B }),
              ],
          });
};
