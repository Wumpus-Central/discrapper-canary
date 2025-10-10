n.d(t, { Z: () => a });
var r = n(951288);
n(647438);
var i = n(587431),
    l = n(539290),
    s = n(388032);
function a(e) {
    let t,
        {
            resubmittingEnableRequest: n,
            resubmissionError: a,
            createEnableRequest: o,
            requestRejectedNoticeText: c,
            reapplyNoticeText: d,
            isApplicationPending: u,
        } = e;
    if (null != a) return (0, r.jsx)(i.Z, { children: a.getAnyErrorMessage() });
    let g = null;
    return (
        u
            ? (g = s.intl.string(s.t.OrkTBg))
            : null != c
              ? (g = c)
              : null != d && ((g = d), (t = s.intl.string(s.t["YKw/NT"]))),
        null != g
            ? (0, r.jsx)(l.Z, {
                  notice: g,
                  ctaLabel: t,
                  ctaLoading: n,
                  onClick: o,
              })
            : null
    );
}
