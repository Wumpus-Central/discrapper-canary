n.d(t, {
    Z: function () {
        return a;
    }
});
var i = n(200651);
n(192379);
var r = n(587431),
    l = n(539290),
    s = n(388032);
function a(e) {
    let t,
        { resubmittingEnableRequest: n, resubmissionError: a, createEnableRequest: o, requestRejectedNoticeText: c, reapplyNoticeText: d, isApplicationPending: u } = e;
    if (null != a) return (0, i.jsx)(r.Z, { children: a.getAnyErrorMessage() });
    let m = null;
    return (
        u ? (m = s.intl.string(s.t.OrkTBg)) : null != c ? (m = c) : null != d && ((m = d), (t = s.intl.string(s.t['YKw/NT']))),
        null != m
            ? (0, i.jsx)(l.Z, {
                  notice: m,
                  ctaLabel: t,
                  ctaLoading: n,
                  onClick: o
              })
            : null
    );
}
