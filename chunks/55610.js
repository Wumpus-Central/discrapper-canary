t.d(n, {
    U: function () {
        return f;
    }
});
var i = t(200651);
t(192379);
var l = t(120356),
    r = t.n(l),
    s = t(512722),
    a = t.n(s),
    c = t(481060),
    o = t(63063),
    u = t(631818),
    d = t(987033),
    m = t(53900),
    p = t(981631),
    x = t(388032),
    h = t(894879);
function f() {
    let e = (0, m.Z)(),
        { enabled: n } = u.Z.useExperiment({ location: '5ebfcf_1' }, { autoTrackExposure: !1 }),
        { enabled: t } = d.Z.useExperiment({ location: '5ebfcf_2' }, { autoTrackExposure: !1 });
    return null != e && ('PL' === e ? n : 'TR' === e && t);
}
n.Z = (e) => {
    var n, t;
    let { fromBoostCancelModal: l, className: s } = e,
        u = (0, m.Z)();
    if (!f()) return null;
    return (
        a()(null != u, 'Subscription billing country should not be null'),
        (0, i.jsxs)('div', {
            className: r()(h.noticeRoot, s),
            children: [
                (0, i.jsx)('div', {
                    className: h.iconContainer,
                    children: (0, i.jsx)(c.CircleWarningIcon, {
                        size: 'custom',
                        width: 20,
                        height: 20,
                        color: 'currentColor',
                        className: h.infoIcon
                    })
                }),
                (0, i.jsx)('div', {
                    className: h.text,
                    children: x.intl.format(((n = u), (t = l), 'PL' === n ? (t ? x.t.hCpziY : x.t.mTFLPD) : 'TR' === n ? (t ? x.t['9rb4W1'] : x.t.SQ4Lyc) : t ? x.t.M4FYRE : x.t.MIY5dn), { helpCenterLink: o.Z.getArticleURL(p.BhN.LOCALIZED_PRICING) })
                })
            ]
        })
    );
};
