n.d(t, { Z: () => l });
var r = n(200651);
n(192379);
var i = n(587431),
    s = n(539290),
    a = n(388032);
function l(e) {
    let t,
        { resubmittingEnableRequest: n, resubmissionError: l, createEnableRequest: o, requestRejectedNoticeText: c, reapplyNoticeText: d, isApplicationPending: u } = e;
    if (null != l) return (0, r.jsx)(i.Z, { children: l.getAnyErrorMessage() });
    let m = null;
    return (
        u ? (m = a.NW.string(a.t.OrkTBg)) : null != c ? (m = c) : null != d && ((m = d), (t = a.NW.string(a.t['YKw/NT']))),
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
