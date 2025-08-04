n.d(t, {
    C3: () => b,
    O3: () => y,
    ZP: () => E
});
var r = n(255367),
    i = n(73800),
    a = n(120356),
    o = n.n(a),
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
        var a = Object.getOwnPropertySymbols(e);
        for (r = 0; r < a.length; r++) ((n = a[r]), !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n]));
    }
    return i;
}
function m(e, t) {
    if (null == e) return {};
    var n,
        r,
        i = {},
        a = Object.keys(e);
    for (r = 0; r < a.length; r++) ((n = a[r]), t.indexOf(n) >= 0 || (i[n] = e[n]));
    return i;
}
function g(e) {
    let { header: t, isLargeModal: n } = e;
    return {
        header: t,
        isLargeModal: n,
        stepProps: h(e, ['header', 'isLargeModal'])
    };
}
function E(e) {
    var t, n, a, s, c, h;
    let { header: m, isLargeModal: E, stepProps: b } = g(e),
        { step: y, stepConfigs: O, setBodyNode: v, setFooterNode: I, setModalOverlayNode: T, setReadySlideId: S, premiumBrandRefreshBackgroundClassName: A, selectedSkuId: N } = (0, d.JL)(),
        C = null != N && N in _.y7,
        R = O.find((e) => e.key === y);
    (i.useEffect(() => {
        T(null);
    }, [y, T]),
        l()(null != R, 'Unknown step for current payment flow.'));
    let P = null != (c = null == R || null == (t = R.options) ? void 0 : t.hideSlider) && c,
        w = null == R || null == (n = R.options) ? void 0 : n.bodyClassName,
        D = null == R || null == (a = R.options) ? void 0 : a.sliderBodyClassName;
    return (
        void 0 !== E && E && (D = p.sliderBodyLarge),
        (0, r.jsxs)(r.Fragment, {
            children: [
                null == (h = null == R || null == (s = R.options) ? void 0 : s.renderHeader) || h ? m : null,
                R.renderStep(b),
                null == y || P
                    ? null
                    : (0, r.jsxs)(r.Fragment, {
                          children: [
                              (0, r.jsx)(u.hzk, {
                                  className: o()(w, p.body, A, {
                                      [p.reviewStep]: y === f.h8.REVIEW,
                                      [p.addPaymentStepForPremium]: y === f.h8.ADD_PAYMENT_STEPS && C
                                  }),
                                  children: (0, r.jsx)(u.MyZ, {
                                      activeSlide: y,
                                      centered: !1,
                                      onSlideReady: (e) => S(e),
                                      width: y === f.h8.ADD_PAYMENT_STEPS ? 408 : y === f.h8.REVIEW ? 392 : void 0,
                                      children: O.filter((e) => null != e.key).map((e) =>
                                          (0, r.jsx)(
                                              u.Mi4,
                                              {
                                                  id: e.key,
                                                  children: (0, r.jsx)('form', {
                                                      className: o()(p.sliderBody, D),
                                                      ref: (e) => {
                                                          v(e);
                                                      },
                                                      onSubmit: (e) => e.preventDefault()
                                                  })
                                              },
                                              e.key
                                          )
                                      )
                                  })
                              }),
                              (0, r.jsx)('div', { ref: (e) => I(e) }),
                              (0, r.jsx)('div', {
                                  ref: (e) => {
                                      T(e);
                                  }
                              })
                          ]
                      })
            ]
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
