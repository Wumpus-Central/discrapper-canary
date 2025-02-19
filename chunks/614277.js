n.d(t, {
    C3: () => E,
    O3: () => v,
    ZP: () => g
});
var r = n(200651),
    i = n(192379),
    o = n(120356),
    a = n.n(o),
    s = n(512722),
    l = n.n(s),
    c = n(995295),
    u = n(481060),
    d = n(563132),
    f = n(409813),
    p = n(996773);
function _(e, t) {
    if (null == e) return {};
    var n,
        r,
        i = h(e, t);
    if (Object.getOwnPropertySymbols) {
        var o = Object.getOwnPropertySymbols(e);
        for (r = 0; r < o.length; r++) (n = o[r]), !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n]);
    }
    return i;
}
function h(e, t) {
    if (null == e) return {};
    var n,
        r,
        i = {},
        o = Object.keys(e);
    for (r = 0; r < o.length; r++) (n = o[r]), t.indexOf(n) >= 0 || (i[n] = e[n]);
    return i;
}
function m(e) {
    let { header: t, isLargeModal: n } = e;
    return {
        header: t,
        isLargeModal: n,
        stepProps: _(e, ['header', 'isLargeModal'])
    };
}
function g(e) {
    var t, n, o, s, c, _;
    let { header: h, isLargeModal: g, stepProps: E } = m(e),
        { step: v, stepConfigs: b, setBodyNode: y, setFooterNode: O, setModalOverlayNode: S, setReadySlideId: I } = (0, d.JL)(),
        T = b.find((e) => e.key === v);
    i.useEffect(() => {
        S(null);
    }, [v, S]),
        l()(null != T, 'Unknown step for current payment flow.');
    let N = null !== (c = null == T ? void 0 : null === (t = T.options) || void 0 === t ? void 0 : t.hideSlider) && void 0 !== c && c,
        A = null == T ? void 0 : null === (n = T.options) || void 0 === n ? void 0 : n.bodyClassName,
        C = null == T ? void 0 : null === (o = T.options) || void 0 === o ? void 0 : o.sliderBodyClassName;
    return (
        void 0 !== g && g && (C = p.sliderBodyLarge),
        (0, r.jsxs)(r.Fragment, {
            children: [
                null === (_ = null == T ? void 0 : null === (s = T.options) || void 0 === s ? void 0 : s.renderHeader) || void 0 === _ || _ ? h : null,
                T.renderStep(E),
                null == v || N
                    ? null
                    : (0, r.jsxs)(r.Fragment, {
                          children: [
                              (0, r.jsx)(u.hzk, {
                                  className: a()(A, p.body, { [p.reviewStep]: v === f.h8.REVIEW }),
                                  children: (0, r.jsx)(u.MyZ, {
                                      activeSlide: v,
                                      centered: !1,
                                      onSlideReady: (e) => I(e),
                                      width: v === f.h8.ADD_PAYMENT_STEPS ? 408 : void 0,
                                      children: b
                                          .filter((e) => null != e.key)
                                          .map((e) =>
                                              (0, r.jsx)(
                                                  u.Mi4,
                                                  {
                                                      id: e.key,
                                                      children: (0, r.jsx)('form', {
                                                          className: a()(p.sliderBody, C),
                                                          ref: (e) => y(e),
                                                          onSubmit: (e) => e.preventDefault()
                                                      })
                                                  },
                                                  e.key
                                              )
                                          )
                                  })
                              }),
                              (0, r.jsx)('div', { ref: (e) => O(e) }),
                              (0, r.jsx)('div', { ref: (e) => S(e) })
                          ]
                      })
            ]
        })
    );
}
function E(e) {
    let { children: t } = e,
        { bodyNode: n } = (0, d.JL)();
    return null == n ? null : c.createPortal(t, n);
}
function v(e) {
    let { children: t } = e,
        { footerNode: n } = (0, d.JL)();
    return null == n ? null : c.createPortal(t, n);
}
