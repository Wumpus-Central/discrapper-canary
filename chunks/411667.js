n.d(t, { Z: () => d });
var r = n(255367);
n(73800);
var i = n(346163),
    l = n(587431),
    s = n(539290),
    a = n(981631),
    o = n(388032),
    c = n(289282);
function d(e) {
    let t,
        { guild: n } = e,
        { resubmittingEnableRequest: d, resubmissionError: u, createEnableRequest: m, resubmittedRequest: g, requestRejectedNoticeText: p, reapplyNoticeText: f } = (0, i.Z)(n),
        h = n.features.has(a.oNc.CREATOR_MONETIZABLE_RESTRICTED),
        x = n.features.has(a.oNc.CREATOR_MONETIZABLE_PENDING_NEW_OWNER_ONBOARDING);
    if (null != u)
        return (0, r.jsx)(l.Z, {
            className: c.noticeContainer,
            children: u.getAnyErrorMessage()
        });
    let b = null;
    return (
        null != p ? (b = p) : g ? (b = o.intl.string(o.t.MyJpJS)) : null != f ? ((b = f), (t = o.intl.string(o.t['YKw/NT']))) : x ? (b = o.intl.string(o.t.e2g9sb)) : h && (b = o.intl.string(o.t.rxI9sr)),
        null != b
            ? (0, r.jsx)(s.Z, {
                  className: c.noticeContainer,
                  notice: b,
                  ctaLabel: t,
                  ctaLoading: d,
                  onClick: m
              })
            : null
    );
}
