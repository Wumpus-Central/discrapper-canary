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
    let { header: m, isLargeModal: E, stepProps: b } = g(e),
        {
            step: y,
            stepConfigs: O,
            setBodyNode: v,
            setFooterNode: I,
            setModalOverlayNode: T,
            setReadySlideId: S,
            premiumBrandRefreshBackgroundClassName: A,
            selectedSkuId: N,
            isDisplayingWowMomentConfirmation: C,
        } = (0, d.JL)(),
        R = null != N && N in _.y7,
        P = O.find((e) => e.key === y);
    i.useEffect(() => {
        T(null);
    }, [y, T]),
        l()(null != P, "Unknown step for current payment flow.");
    let w = null != (c = null == P || null == (t = P.options) ? void 0 : t.hideSlider) && c,
        D = null == P || null == (n = P.options) ? void 0 : n.bodyClassName,
        L = null == P || null == (o = P.options) ? void 0 : o.sliderBodyClassName;
    return (
        void 0 !== E && E && (L = p.sliderBodyLarge),
        (0, r.jsxs)(r.Fragment, {
            children: [
                null == (h = null == P || null == (s = P.options) ? void 0 : s.renderHeader) || h ? m : null,
                P.renderStep(b),
                null == y || w
                    ? null
                    : (0, r.jsxs)(r.Fragment, {
                          children: [
                              (0, r.jsx)(u.hzk, {
                                  "data-migration-pending": !0,
                                  className: a()(D, p.body, A, {
                                      [p.reviewStep]: y === f.h8.REVIEW,
                                      [p.addPaymentStepForPremium]: y === f.h8.ADD_PAYMENT_STEPS && R,
                                  }),
                                  children: (0, r.jsx)(u.MyZ, {
                                      activeSlide: y,
                                      centered: !1,
                                      onSlideReady: (e) => S(e),
                                      width: y === f.h8.ADD_PAYMENT_STEPS ? 408 : y === f.h8.REVIEW ? 392 : void 0,
                                      overflow: C ? "visible" : void 0,
                                      children: O.filter((e) => null != e.key).map((e) =>
                                          (0, r.jsx)(
                                              u.Mi4,
                                              {
                                                  id: e.key,
                                                  children: (0, r.jsx)("form", {
                                                      className: a()(p.sliderBody, L),
                                                      ref: (e) => {
                                                          v(e);
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
