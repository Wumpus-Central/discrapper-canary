n.d(t, {
    Z: function () {
        return s;
    }
});
var i = n(200651);
n(192379);
var r = n(587431),
    l = n(539290),
    a = n(388032);
function s(e) {
    let t,
        { resubmittingEnableRequest: n, resubmissionError: s, createEnableRequest: o, requestRejectedNoticeText: c, reapplyNoticeText: d, isApplicationPending: u } = e;
    if (null != s) return (0, i.jsx)(r.Z, { children: s.getAnyErrorMessage() });
    let m = null;
    return (
        u ? (m = a.intl.string(a.t.OrkTBg)) : null != c ? (m = c) : null != d && ((m = d), (t = a.intl.string(a.t['YKw/NT']))),
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
