n.d(t, { Z: () => d });
var r = n(200651);
n(192379);
var i = n(346163),
    s = n(587431),
    a = n(539290),
    l = n(981631),
    o = n(388032),
    c = n(289282);
function d(e) {
    let t,
        { guild: n } = e,
        { resubmittingEnableRequest: d, resubmissionError: u, createEnableRequest: m, resubmittedRequest: g, requestRejectedNoticeText: p, reapplyNoticeText: h } = (0, i.Z)(n),
        f = n.hasFeature(l.oNc.CREATOR_MONETIZABLE_RESTRICTED),
        b = n.hasFeature(l.oNc.CREATOR_MONETIZABLE_PENDING_NEW_OWNER_ONBOARDING);
    if (null != u)
        return (0, r.jsx)(s.Z, {
            className: c.noticeContainer,
            children: u.getAnyErrorMessage()
        });
    let x = null;
    return (
        null != p ? (x = p) : g ? (x = o.NW.string(o.t.MyJpJS)) : null != h ? ((x = h), (t = o.NW.string(o.t['YKw/NT']))) : b ? (x = o.NW.string(o.t.e2g9sb)) : f && (x = o.NW.string(o.t.rxI9sr)),
        null != x
            ? (0, r.jsx)(a.Z, {
                  className: c.noticeContainer,
                  notice: x,
                  ctaLabel: t,
                  ctaLoading: d,
                  onClick: m
              })
            : null
    );
}
