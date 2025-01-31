n.d(t, {
    C3: () => m,
    O3: () => g,
    ZP: () => h
});
var i = n(200651),
    r = n(192379),
    a = n(120356),
    s = n.n(a),
    o = n(512722),
    l = n.n(o),
    u = n(995295),
    c = n(481060),
    d = n(563132),
    f = n(409813),
    _ = n(135970);
function p(e) {
    let { header: t, isLargeModal: n, ...i } = e;
    return {
        header: t,
        isLargeModal: n,
        stepProps: i
    };
}
function h(e) {
    var t, n, a, o, u, h;
    let { header: m, isLargeModal: g, stepProps: E } = p(e),
        { step: v, stepConfigs: y, setBodyNode: I, setFooterNode: b, setModalOverlayNode: T, setReadySlideId: S } = (0, d.JL)(),
        A = y.find((e) => e.key === v);
    r.useEffect(() => {
        T(null);
    }, [v, T]),
        l()(null != A, 'Unknown step for current payment flow.');
    let N = null !== (u = null == A ? void 0 : null === (t = A.options) || void 0 === t ? void 0 : t.hideSlider) && void 0 !== u && u,
        C = null == A ? void 0 : null === (n = A.options) || void 0 === n ? void 0 : n.bodyClassName,
        R = null == A ? void 0 : null === (a = A.options) || void 0 === a ? void 0 : a.sliderBodyClassName;
    return (
        void 0 !== g && g && (R = _.sliderBodyLarge),
        (0, i.jsxs)(i.Fragment, {
            children: [
                null === (h = null == A ? void 0 : null === (o = A.options) || void 0 === o ? void 0 : o.renderHeader) || void 0 === h || h ? m : null,
                A.renderStep(E),
                null == v || N
                    ? null
                    : (0, i.jsxs)(i.Fragment, {
                          children: [
                              (0, i.jsx)(c.hzk, {
                                  className: s()(C, _.body, { [_.reviewStep]: v === f.h8.REVIEW }),
                                  children: (0, i.jsx)(c.MyZ, {
                                      activeSlide: v,
                                      centered: !1,
                                      onSlideReady: (e) => S(e),
                                      width: v === f.h8.ADD_PAYMENT_STEPS ? 408 : void 0,
                                      children: y
                                          .filter((e) => null != e.key)
                                          .map((e) =>
                                              (0, i.jsx)(
                                                  c.Mi4,
                                                  {
                                                      id: e.key,
                                                      children: (0, i.jsx)('form', {
                                                          className: s()(_.sliderBody, R),
                                                          ref: (e) => I(e),
                                                          onSubmit: (e) => e.preventDefault()
                                                      })
                                                  },
                                                  e.key
                                              )
                                          )
                                  })
                              }),
                              (0, i.jsx)('div', { ref: (e) => b(e) }),
                              (0, i.jsx)('div', { ref: (e) => T(e) })
                          ]
                      })
            ]
        })
    );
}
function m(e) {
    let { children: t } = e,
        { bodyNode: n } = (0, d.JL)();
    return null == n ? null : u.createPortal(t, n);
}
function g(e) {
    let { children: t } = e,
        { footerNode: n } = (0, d.JL)();
    return null == n ? null : u.createPortal(t, n);
}
