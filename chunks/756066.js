n.d(t, { Z: () => a });
var r = n(200651);
n(192379);
var i = n(587431),
    s = n(539290),
    l = n(388032);
function a(e) {
    let t,
        { resubmittingEnableRequest: n, resubmissionError: a, createEnableRequest: o, requestRejectedNoticeText: c, reapplyNoticeText: d, isApplicationPending: u } = e;
    if (null != a) return (0, r.jsx)(i.Z, { children: a.getAnyErrorMessage() });
    let m = null;
    return (
        u ? (m = l.NW.string(l.t.OrkTBg)) : null != c ? (m = c) : null != d && ((m = d), (t = l.NW.string(l.t['YKw/NT']))),
        null != m
            ? (0, r.jsx)(s.Z, {
                  notice: m,
                  ctaLabel: t,
                  ctaLoading: n,
                  onClick: o
              })
            : null
    );
}
