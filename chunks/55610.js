n.d(t, {
    U: () => m,
    Z: () => E
});
var i = n(200651);
n(192379);
var r = n(120356),
    a = n.n(r),
    s = n(512722),
    o = n.n(s),
    l = n(481060),
    u = n(63063),
    c = n(631818),
    d = n(987033),
    f = n(53900),
    _ = n(981631),
    p = n(388032),
    h = n(260384);
function m() {
    let e = (0, f.Z)(),
        { enabled: t } = c.Z.useExperiment({ location: '5ebfcf_1' }, { autoTrackExposure: !1 }),
        { enabled: n } = d.Z.useExperiment({ location: '5ebfcf_2' }, { autoTrackExposure: !1 });
    return null != e && ('PL' === e ? t : 'TR' === e && n);
}
function g(e, t) {
    return 'PL' === e ? (t ? p.t.hCpziY : p.t.mTFLPD) : 'TR' === e ? (t ? p.t['9rb4W1'] : p.t.SQ4Lyc) : t ? p.t.M4FYRE : p.t.MIY5dn;
}
let E = (e) => {
    let { fromBoostCancelModal: t, className: n } = e,
        r = (0, f.Z)();
    return m()
        ? (o()(null != r, 'Subscription billing country should not be null'),
          (0, i.jsxs)('div', {
              className: a()(h.noticeRoot, n),
              children: [
                  (0, i.jsx)('div', {
                      className: h.iconContainer,
                      children: (0, i.jsx)(l.P4T, {
                          size: 'custom',
                          width: 20,
                          height: 20,
                          color: 'currentColor',
                          className: h.infoIcon
                      })
                  }),
                  (0, i.jsx)('div', {
                      className: h.text,
                      children: p.intl.format(g(r, t), { helpCenterLink: u.Z.getArticleURL(_.BhN.LOCALIZED_PRICING) })
                  })
              ]
          }))
        : null;
};
