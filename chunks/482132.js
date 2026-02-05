"use strict";
n.d(t, { Ay: () => A, UX: () => T, dZ: () => I });
var r = n(627968),
    i = n(64700),
    a = n(503698),
    s = n.n(a),
    o = n(284009),
    l = n.n(o),
    u = n(340287),
    c = n(158954),
    d = n(397927),
    _ = n(608805),
    f = n(156312),
    p = n(166532),
    h = n(788868),
    m = n(804686);
function g(e) {
    let { header: t, isLargeModal: n, ...r } = e;
    return { header: t, isLargeModal: n, stepProps: r };
}
let E = (e) => {
    let { shouldUseUnifiedCheckoutModal: t, legacyModalClassName: n, children: i } = e,
        a = t ? c.cwr : d.$mQ;
    return (0, r.jsx)(a, { "data-migration-pending": !0, className: n, children: i });
};
function A(e) {
    let t,
        { header: n, isLargeModal: a, stepProps: o } = g(e),
        {
            step: u,
            stepConfigs: c,
            setBodyNode: A,
            setFooterNode: I,
            setModalOverlayNode: T,
            setReadySlideId: y,
            premiumBrandRefreshBackgroundClassName: S,
            selectedSkuId: v,
            isDisplayingWowMomentConfirmation: C,
            isGift: b,
        } = (0, f.P5)(),
        N = null != v && v in h.WN,
        R = c.find((e) => e.key === u);
    i.useEffect(() => {
        T(null);
    }, [u, T]),
        l()(null != R, "Unknown step for current payment flow.");
    let O = R?.options?.hideSlider ?? !1,
        D = R?.options?.bodyClassName,
        L = R?.options?.sliderBodyClassName;
    void 0 !== a && a && (L = m.nS);
    let { enabled: w } = (0, _.T0)({ location: "PaymentModalStep" }),
        x = w && u === p.pn.REVIEW;
    switch (u) {
        case p.pn.ADD_PAYMENT_STEPS:
            t = 408;
            break;
        case p.pn.REVIEW:
            t = 392;
            break;
        case p.pn.PLAN_SELECT:
            N && !b && (t = "100%");
    }
    return (
        x && (t = "100%"),
        (0, r.jsxs)(r.Fragment, {
            children: [
                (R?.options?.renderHeader ?? !0) ? n : null,
                R.renderStep(o),
                null == u || O
                    ? null
                    : (0, r.jsxs)(r.Fragment, {
                          children: [
                              (0, r.jsx)(E, {
                                  shouldUseUnifiedCheckoutModal: x,
                                  legacyModalClassName: s()(D, m.rf, S, {
                                      [m.VR]: u === p.pn.REVIEW,
                                      [m.qO]: u === p.pn.ADD_PAYMENT_STEPS && N,
                                  }),
                                  children: (0, r.jsx)(d.tN_, {
                                      activeSlide: u,
                                      centered: !1,
                                      onSlideReady: (e) => y(e),
                                      width: t,
                                      overflow: C ? "visible" : void 0,
                                      shouldUseMediaQueriesForSizing: !0,
                                      children: c
                                          .filter((e) => null != e.key)
                                          .map((e) =>
                                              (0, r.jsx)(
                                                  d.q7S,
                                                  {
                                                      id: e.key,
                                                      children: (0, r.jsx)("form", {
                                                          className: s()(m.OO, L),
                                                          ref: (e) => {
                                                              A(e);
                                                          },
                                                          onSubmit: (e) => e.preventDefault(),
                                                      }),
                                                  },
                                                  e.key,
                                              ),
                                          ),
                                  }),
                              }),
                              (0, r.jsx)("div", { ref: (e) => I(e) }),
                              (0, r.jsx)("div", {
                                  ref: (e) => {
                                      T(e);
                                  },
                              }),
                          ],
                      }),
            ],
        })
    );
}
function I(e) {
    let { children: t } = e,
        { bodyNode: n } = (0, f.P5)();
    return null == n ? null : u.createPortal(t, n);
}
function T(e) {
    let { children: t } = e,
        { footerNode: n } = (0, f.P5)();
    return null == n ? null : u.createPortal(t, n);
}
