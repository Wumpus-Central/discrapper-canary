n.d(t, {
    C3: () => b,
    O3: () => y,
    ZP: () => E,
});
var r = n(255367),
    i = n(73800),
    o = n(120356),
    a = n.n(o),
    s = n(512722),
    l = n.n(s),
    c = n(867309),
    u = n(481060),
    d = n(563132),
    f = n(409813),
    _ = n(474936),
    p = n(249779);
function h(e, t) {
    if (null == e) return {};
    var n,
        r,
        i = m(e, t);
    if (Object.getOwnPropertySymbols) {
        var o = Object.getOwnPropertySymbols(e);
        for (r = 0; r < o.length; r++)
            (n = o[r]), !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n]);
    }
    return i;
}
function m(e, t) {
    if (null == e) return {};
    var n,
        r,
        i = {},
        o = Object.keys(e);
    for (r = 0; r < o.length; r++) (n = o[r]), t.indexOf(n) >= 0 || (i[n] = e[n]);
    return i;
}
function g(e) {
    let { header: t, isLargeModal: n } = e;
    return {
        header: t,
        isLargeModal: n,
        stepProps: h(e, ["header", "isLargeModal"]),
    };
}
function E(e) {
    var t, n, o, s, c, h;
    let m,
        { header: E, isLargeModal: b, stepProps: y } = g(e),
        {
            step: O,
            stepConfigs: v,
            setBodyNode: I,
            setFooterNode: T,
            setModalOverlayNode: S,
            setReadySlideId: A,
            premiumBrandRefreshBackgroundClassName: N,
            selectedSkuId: C,
            isDisplayingWowMomentConfirmation: R,
            isGift: P,
        } = (0, d.JL)(),
        w = null != C && C in _.y7,
        D = v.find((e) => e.key === O);
    i.useEffect(() => {
        S(null);
    }, [O, S]),
        l()(null != D, "Unknown step for current payment flow.");
    let L = null != (c = null == D || null == (t = D.options) ? void 0 : t.hideSlider) && c,
        x = null == D || null == (n = D.options) ? void 0 : n.bodyClassName,
        M = null == D || null == (o = D.options) ? void 0 : o.sliderBodyClassName;
    switch ((void 0 !== b && b && (M = p.sliderBodyLarge), O)) {
        case f.h8.ADD_PAYMENT_STEPS:
            m = 408;
            break;
        case f.h8.REVIEW:
            m = 392;
            break;
        case f.h8.PLAN_SELECT:
            w && !P && (m = "100%");
    }
    return (0, r.jsxs)(r.Fragment, {
        children: [
            null == (h = null == D || null == (s = D.options) ? void 0 : s.renderHeader) || h ? E : null,
            D.renderStep(y),
            null == O || L
                ? null
                : (0, r.jsxs)(r.Fragment, {
                      children: [
                          (0, r.jsx)(u.hzk, {
                              "data-migration-pending": !0,
                              className: a()(x, p.body, N, {
                                  [p.reviewStep]: O === f.h8.REVIEW,
                                  [p.addPaymentStepForPremium]: O === f.h8.ADD_PAYMENT_STEPS && w,
                              }),
                              children: (0, r.jsx)(u.MyZ, {
                                  activeSlide: O,
                                  centered: !1,
                                  onSlideReady: (e) => A(e),
                                  width: m,
                                  overflow: R ? "visible" : void 0,
                                  children: v
                                      .filter((e) => null != e.key)
                                      .map((e) =>
                                          (0, r.jsx)(
                                              u.Mi4,
                                              {
                                                  id: e.key,
                                                  children: (0, r.jsx)("form", {
                                                      className: a()(p.sliderBody, M),
                                                      ref: (e) => {
                                                          I(e);
                                                      },
                                                      onSubmit: (e) => e.preventDefault(),
                                                  }),
                                              },
                                              e.key,
                                          ),
                                      ),
                              }),
                          }),
                          (0, r.jsx)("div", { ref: (e) => T(e) }),
                          (0, r.jsx)("div", {
                              ref: (e) => {
                                  S(e);
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
