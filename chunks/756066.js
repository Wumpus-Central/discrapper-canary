n.d(t, { Z: () => s });
var r = n(951288);
n(647438);
var i = n(587431),
    l = n(539290),
    a = n(388032);
function s(e) {
    let t,
        {
            resubmittingEnableRequest: n,
            resubmissionError: s,
            createEnableRequest: o,
            requestRejectedNoticeText: c,
            reapplyNoticeText: d,
            isApplicationPending: u,
        } = e;
    if (null != s) return (0, r.jsx)(i.Z, { children: s.getAnyErrorMessage() });
    let m = null;
    return (
        u
            ? (m = a.intl.string(a.t.OrkTBg))
            : null != c
              ? (m = c)
              : null != d && ((m = d), (t = a.intl.string(a.t["YKw/NT"]))),
        null != m
            ? (0, r.jsx)(l.Z, {
                  notice: m,
                  ctaLabel: t,
                  ctaLoading: n,
                  onClick: o,
              })
            : null
    );
}
