n.d(t, { Z: () => d });
var r = n(951288);
n(647438);
var i = n(346163),
    l = n(587431),
    a = n(539290),
    s = n(981631),
    o = n(388032),
    c = n(515444);
function d(e) {
    let t,
        { guild: n } = e,
        {
            resubmittingEnableRequest: d,
            resubmissionError: u,
            createEnableRequest: g,
            resubmittedRequest: m,
            requestRejectedNoticeText: p,
            reapplyNoticeText: f,
        } = (0, i.Z)(n),
        h = n.features.has(s.oNc.CREATOR_MONETIZABLE_RESTRICTED),
        b = n.features.has(s.oNc.CREATOR_MONETIZABLE_PENDING_NEW_OWNER_ONBOARDING);
    if (null != u)
        return (0, r.jsx)(l.Z, {
            className: c.noticeContainer,
            children: u.getAnyErrorMessage(),
        });
    let x = null;
    return (
        null != p
            ? (x = p)
            : m
              ? (x = o.intl.string(o.t.MyJpJS))
              : null != f
                ? ((x = f), (t = o.intl.string(o.t["YKw/NT"])))
                : b
                  ? (x = o.intl.string(o.t.e2g9sb))
                  : h && (x = o.intl.string(o.t.rxI9sr)),
        null != x
            ? (0, r.jsx)(a.Z, {
                  className: c.noticeContainer,
                  notice: x,
                  ctaLabel: t,
                  ctaLoading: d,
                  onClick: g,
              })
            : null
    );
}
