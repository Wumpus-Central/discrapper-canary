n.d(t, {
    U: () => m,
    Z: () => E
});
var r = n(200651);
n(192379);
var i = n(120356),
    o = n.n(i),
    a = n(512722),
    s = n.n(a),
    l = n(481060),
    c = n(63063),
    u = n(631818),
    d = n(987033),
    f = n(53900),
    p = n(981631),
    _ = n(388032),
    h = n(334336);
function m() {
    let e = (0, f.Z)(),
        { enabled: t } = u.Z.useExperiment({ location: '5ebfcf_1' }, { autoTrackExposure: !1 }),
        { enabled: n } = d.Z.useExperiment({ location: '5ebfcf_2' }, { autoTrackExposure: !1 });
    return null != e && ('PL' === e ? t : 'TR' === e && n);
}
function g(e, t) {
    return 'PL' === e ? (t ? _.t.hCpziY : _.t.mTFLPD) : 'TR' === e ? (t ? _.t['9rb4W1'] : _.t.SQ4Lyc) : t ? _.t.M4FYRE : _.t.MIY5dn;
}
let E = (e) => {
    let { fromBoostCancelModal: t, className: n } = e,
        i = (0, f.Z)();
    return m()
        ? (s()(null != i, 'Subscription billing country should not be null'),
          (0, r.jsxs)('div', {
              className: o()(h.noticeRoot, n),
              children: [
                  (0, r.jsx)('div', {
                      className: h.iconContainer,
                      children: (0, r.jsx)(l.P4T, {
                          size: 'custom',
                          width: 20,
                          height: 20,
                          color: 'currentColor',
                          className: h.infoIcon
                      })
                  }),
                  (0, r.jsx)('div', {
                      className: h.text,
                      children: _.NW.format(g(i, t), { helpCenterLink: c.Z.getArticleURL(p.BhN.LOCALIZED_PRICING) })
                  })
              ]
          }))
        : null;
};
