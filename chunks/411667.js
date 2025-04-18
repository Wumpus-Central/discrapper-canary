n.d(t, { Z: () => d });
var r = n(200651);
n(192379);
var i = n(346163),
    s = n(587431),
    l = n(539290),
    a = n(981631),
    o = n(388032),
    c = n(288791);
function d(e) {
    let t,
        { guild: n } = e,
        { resubmittingEnableRequest: d, resubmissionError: u, createEnableRequest: m, resubmittedRequest: g, requestRejectedNoticeText: p, reapplyNoticeText: h } = (0, i.Z)(n),
        f = n.hasFeature(a.oNc.CREATOR_MONETIZABLE_RESTRICTED),
        x = n.hasFeature(a.oNc.CREATOR_MONETIZABLE_PENDING_NEW_OWNER_ONBOARDING);
    if (null != u)
        return (0, r.jsx)(s.Z, {
            className: c.noticeContainer,
            children: u.getAnyErrorMessage()
        });
    let b = null;
    return (
        null != p ? (b = p) : g ? (b = o.NW.string(o.t.MyJpJS)) : null != h ? ((b = h), (t = o.NW.string(o.t['YKw/NT']))) : x ? (b = o.NW.string(o.t.e2g9sb)) : f && (b = o.NW.string(o.t.rxI9sr)),
        null != b
            ? (0, r.jsx)(l.Z, {
                  className: c.noticeContainer,
                  notice: b,
                  ctaLabel: t,
                  ctaLoading: d,
                  onClick: m
              })
            : null
    );
}
