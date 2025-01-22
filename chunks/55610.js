r.d(n, {
    U: function () {
        return g;
    }
});
var i = r(200651);
r(192379);
var a = r(120356),
    o = r.n(a),
    s = r(512722),
    l = r.n(s),
    u = r(481060),
    c = r(63063),
    d = r(631818),
    f = r(987033),
    p = r(53900),
    h = r(981631),
    _ = r(388032),
    m = r(894879);
function g() {
    let e = (0, p.Z)(),
        { enabled: n } = d.Z.useExperiment({ location: '5ebfcf_1' }, { autoTrackExposure: !1 }),
        { enabled: r } = f.Z.useExperiment({ location: '5ebfcf_2' }, { autoTrackExposure: !1 });
    return null != e && ('PL' === e ? n : 'TR' === e && r);
}
function E(e, n) {
    return 'PL' === e ? (n ? _.t.hCpziY : _.t.mTFLPD) : 'TR' === e ? (n ? _.t['9rb4W1'] : _.t.SQ4Lyc) : n ? _.t.M4FYRE : _.t.MIY5dn;
}
let v = (e) => {
    let { fromBoostCancelModal: n, className: r } = e,
        a = (0, p.Z)();
    return g()
        ? (l()(null != a, 'Subscription billing country should not be null'),
          (0, i.jsxs)('div', {
              className: o()(m.noticeRoot, r),
              children: [
                  (0, i.jsx)('div', {
                      className: m.iconContainer,
                      children: (0, i.jsx)(u.CircleWarningIcon, {
                          size: 'custom',
                          width: 20,
                          height: 20,
                          color: 'currentColor',
                          className: m.infoIcon
                      })
                  }),
                  (0, i.jsx)('div', {
                      className: m.text,
                      children: _.intl.format(E(a, n), { helpCenterLink: c.Z.getArticleURL(h.BhN.LOCALIZED_PRICING) })
                  })
              ]
          }))
        : null;
};
n.Z = v;
