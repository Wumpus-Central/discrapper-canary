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
    t = n(192379),
    o = n(120356),
    s = n.n(o),
    a = n(512722),
    c = n.n(a),
    i = n(995295),
    d = n(481060),
    u = n(540059),
    p = n(563132),
    m = n(409813),
    f = n(135970);
function h(e) {
    var r, n, o, a, i, h;
    let {
            header: _,
            isLargeModal: x,
            isDynamicModal: N,
            stepProps: S
        } = (function (e) {
            let { header: r, isLargeModal: n, isDynamicModal: l, ...t } = e;
            return {
                header: r,
                isLargeModal: n,
                isDynamicModal: l,
                stepProps: t
            };
        })(e),
        { step: y, stepConfigs: b, setBodyNode: v, setFooterNode: E, setModalOverlayNode: g, setReadySlideId: j } = (0, p.usePaymentContext)(),
        C = b.find((e) => e.key === y);
    t.useEffect(() => {
        g(null);
    }, [y, g]),
        c()(null != C, 'Unknown step for current payment flow.');
    let P = null !== (i = null == C ? void 0 : null === (r = C.options) || void 0 === r ? void 0 : r.hideSlider) && void 0 !== i && i,
        A = null == C ? void 0 : null === (n = C.options) || void 0 === n ? void 0 : n.bodyClassName,
        I = null == C ? void 0 : null === (o = C.options) || void 0 === o ? void 0 : o.sliderBodyClassName;
    void 0 !== x && x ? (I = f.sliderBodyLarge) : N && (I = f.sliderBodyDynamic);
    let k = (0, u.Q3)('PaymentModalStep');
    return (0, l.jsxs)(l.Fragment, {
        children: [
            null === (h = null == C ? void 0 : null === (a = C.options) || void 0 === a ? void 0 : a.renderHeader) || void 0 === h || h ? _ : null,
            C.renderStep(S),
            null == y || P
                ? null
                : (0, l.jsxs)(l.Fragment, {
                      children: [
                          (0, l.jsx)(d.ModalContent, {
                              className: s()(A, f.body, {
                                  [f.reviewStep]: y === m.h8.REVIEW,
                                  [f.addPaymentSteps]: y === m.h8.ADD_PAYMENT_STEPS
                              }),
                              children: (0, l.jsx)(d.Slides, {
                                  activeSlide: y,
                                  centered: !1,
                                  onSlideReady: (e) => j(e),
                                  width: k && y === m.h8.ADD_PAYMENT_STEPS ? '100%' : void 0,
                                  children: b
                                      .filter((e) => null != e.key)
                                      .map((e) =>
                                          (0, l.jsx)(
                                              d.Slide,
                                              {
                                                  id: e.key,
                                                  children: (0, l.jsx)('form', {
                                                      className: s()(f.sliderBody, I),
                                                      ref: (e) => v(e),
                                                      onSubmit: (e) => e.preventDefault()
                                                  })
                                              },
                                              e.key
                                          )
                                      )
                              })
                          }),
                          (0, l.jsx)('div', { ref: (e) => E(e) }),
                          (0, l.jsx)('div', { ref: (e) => g(e) })
                      ]
                  })
        ]
    });
}
function _(e) {
    let { children: r } = e,
        { bodyNode: n } = (0, p.usePaymentContext)();
    return null == n ? null : i.createPortal(r, n);
}
function x(e) {
    let { children: r } = e,
        { footerNode: n } = (0, p.usePaymentContext)();
    return null == n ? null : i.createPortal(r, n);
}
