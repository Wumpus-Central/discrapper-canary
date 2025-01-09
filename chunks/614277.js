n.d(r, {
    C3: function () {
        return _;
    },
    O3: function () {
        return x;
    },
    ZP: function () {
        return h;
    }
});
var l = n(200651),
    o = n(192379),
    t = n(120356),
    s = n.n(t),
    a = n(512722),
    i = n.n(a),
    c = n(995295),
    d = n(481060),
    u = n(540059),
    p = n(563132),
    m = n(409813),
    f = n(135970);
function h(e) {
    var r, n, t, a, c, h;
    let {
            header: _,
            isLargeModal: x,
            isDynamicModal: N,
            stepProps: y
        } = (function (e) {
            let { header: r, isLargeModal: n, isDynamicModal: l, ...o } = e;
            return {
                header: r,
                isLargeModal: n,
                isDynamicModal: l,
                stepProps: o
            };
        })(e),
        { step: b, stepConfigs: v, setBodyNode: S, setFooterNode: C, setModalOverlayNode: g, setReadySlideId: E } = (0, p.usePaymentContext)(),
        j = v.find((e) => e.key === b);
    o.useEffect(() => {
        g(null);
    }, [b, g]),
        i()(null != j, 'Unknown step for current payment flow.');
    let P = null !== (c = null == j ? void 0 : null === (r = j.options) || void 0 === r ? void 0 : r.hideSlider) && void 0 !== c && c,
        A = null == j ? void 0 : null === (n = j.options) || void 0 === n ? void 0 : n.bodyClassName,
        I = null == j ? void 0 : null === (t = j.options) || void 0 === t ? void 0 : t.sliderBodyClassName;
    void 0 !== x && x ? (I = f.sliderBodyLarge) : N && (I = f.sliderBodyDynamic);
    let k = (0, u.Q3)('PaymentModalStep');
    return (0, l.jsxs)(l.Fragment, {
        children: [
            null === (h = null == j ? void 0 : null === (a = j.options) || void 0 === a ? void 0 : a.renderHeader) || void 0 === h || h ? _ : null,
            j.renderStep(y),
            null == b || P
                ? null
                : (0, l.jsxs)(l.Fragment, {
                      children: [
                          (0, l.jsx)(d.ModalContent, {
                              className: s()(A, f.body, f.modalContentOverride, b === m.h8.ADD_PAYMENT_STEPS ? f.addPaymentSteps : void 0),
                              children: (0, l.jsx)(d.Slides, {
                                  activeSlide: b,
                                  centered: !1,
                                  onSlideReady: (e) => E(e),
                                  width: k && b === m.h8.ADD_PAYMENT_STEPS ? '100%' : void 0,
                                  children: v
                                      .filter((e) => null != e.key)
                                      .map((e) =>
                                          (0, l.jsx)(
                                              d.Slide,
                                              {
                                                  id: e.key,
                                                  children: (0, l.jsx)('form', {
                                                      className: s()(f.sliderBody, I),
                                                      ref: (e) => S(e),
                                                      onSubmit: (e) => e.preventDefault()
                                                  })
                                              },
                                              e.key
                                          )
                                      )
                              })
                          }),
                          (0, l.jsx)('div', { ref: (e) => C(e) }),
                          (0, l.jsx)('div', { ref: (e) => g(e) })
                      ]
                  })
        ]
    });
}
function _(e) {
    let { children: r } = e,
        { bodyNode: n } = (0, p.usePaymentContext)();
    return null == n ? null : c.createPortal(r, n);
}
function x(e) {
    let { children: r } = e,
        { footerNode: n } = (0, p.usePaymentContext)();
    return null == n ? null : c.createPortal(r, n);
}
