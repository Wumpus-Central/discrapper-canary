n.d(t, {
    C3: () => b,
    O3: () => y,
    ZP: () => E,
});
var r = n(54381),
    i = n(473749),
    a = n(120356),
    o = n.n(a),
    s = n(512722),
    l = n.n(s),
    c = n(24156),
    u = n(481060),
    d = n(563132),
    f = n(409813),
    p = n(474936),
    _ = n(490684);
function m(e, t) {
    if (null == e) return {};
    var n,
        r,
        i = h(e, t);
    if (Object.getOwnPropertySymbols) {
        var a = Object.getOwnPropertySymbols(e);
        for (r = 0; r < a.length; r++)
            (n = a[r]), !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n]);
    }
    return i;
}
function h(e, t) {
    if (null == e) return {};
    var n,
        r,
        i = {},
        a = Object.keys(e);
    for (r = 0; r < a.length; r++) (n = a[r]), t.indexOf(n) >= 0 || (i[n] = e[n]);
    return i;
}
function g(e) {
    let { header: t, isLargeModal: n } = e;
    return {
        header: t,
        isLargeModal: n,
        stepProps: m(e, ["header", "isLargeModal"]),
    };
}
function E(e) {
    var t, n, a, s, c, m;
    let h,
        { header: E, isLargeModal: b, stepProps: y } = g(e),
        {
            step: O,
            stepConfigs: v,
            setBodyNode: S,
            setFooterNode: I,
            setModalOverlayNode: T,
            setReadySlideId: C,
            premiumBrandRefreshBackgroundClassName: A,
            selectedSkuId: N,
            isDisplayingWowMomentConfirmation: P,
            isGift: R,
        } = (0, d.JL)(),
        D = null != N && N in p.y7,
        w = v.find((e) => e.key === O);
    i.useEffect(() => {
        T(null);
    }, [O, T]),
        l()(null != w, "Unknown step for current payment flow.");
    let x = null != (c = null == w || null == (t = w.options) ? void 0 : t.hideSlider) && c,
        L = null == w || null == (n = w.options) ? void 0 : n.bodyClassName,
        j = null == w || null == (a = w.options) ? void 0 : a.sliderBodyClassName;
    switch ((void 0 !== b && b && (j = _.sliderBodyLarge), O)) {
        case f.h8.ADD_PAYMENT_STEPS:
            h = 408;
            break;
        case f.h8.REVIEW:
            h = 392;
            break;
        case f.h8.PLAN_SELECT:
            D && !R && (h = "100%");
    }
    return (0, r.jsxs)(r.Fragment, {
        children: [
            null == (m = null == w || null == (s = w.options) ? void 0 : s.renderHeader) || m ? E : null,
            w.renderStep(y),
            null == O || x
                ? null
                : (0, r.jsxs)(r.Fragment, {
                      children: [
                          (0, r.jsx)(u.hzk, {
                              "data-migration-pending": !0,
                              className: o()(L, _.body, A, {
                                  [_.reviewStep]: O === f.h8.REVIEW,
                                  [_.addPaymentStepForPremium]: O === f.h8.ADD_PAYMENT_STEPS && D,
                              }),
                              children: (0, r.jsx)(u.MyZ, {
                                  activeSlide: O,
                                  centered: !1,
                                  onSlideReady: (e) => C(e),
                                  width: h,
                                  overflow: P ? "visible" : void 0,
                                  shouldUseMediaQueriesForSizing: !0,
                                  children: v
                                      .filter((e) => null != e.key)
                                      .map((e) =>
                                          (0, r.jsx)(
                                              u.Mi4,
                                              {
                                                  id: e.key,
                                                  children: (0, r.jsx)("form", {
                                                      className: o()(_.sliderBody, j),
                                                      ref: (e) => {
                                                          S(e);
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
    });
}
function b(e) {
    let { children: t } = e,
        { bodyNode: n } = (0, d.JL)();
    return null == n ? null : c.createPortal(t, n);
}
function y(e) {
    let { children: t } = e,
        { footerNode: n } = (0, d.JL)();
    return null == n ? null : c.createPortal(t, n);
}
