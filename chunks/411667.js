n.d(t, { Z: () => d });
var i = n(200651);
n(192379);
var r = n(346163),
    l = n(587431),
    s = n(539290),
    a = n(981631),
    o = n(388032),
    c = n(362421);
function d(e) {
    let t,
        { guild: n } = e,
        { resubmittingEnableRequest: d, resubmissionError: u, createEnableRequest: m, resubmittedRequest: h, requestRejectedNoticeText: g, reapplyNoticeText: x } = (0, r.Z)(n),
        p = n.hasFeature(a.oNc.CREATOR_MONETIZABLE_RESTRICTED),
        _ = n.hasFeature(a.oNc.CREATOR_MONETIZABLE_PENDING_NEW_OWNER_ONBOARDING);
    if (null != u)
        return (0, i.jsx)(l.Z, {
            className: c.noticeContainer,
            children: u.getAnyErrorMessage()
        });
    let C = null;
    return (
        null != g ? (C = g) : h ? (C = o.intl.string(o.t.MyJpJS)) : null != x ? ((C = x), (t = o.intl.string(o.t['YKw/NT']))) : _ ? (C = o.intl.string(o.t.e2g9sb)) : p && (C = o.intl.string(o.t.rxI9sr)),
        null != C
            ? (0, i.jsx)(s.Z, {
                  className: c.noticeContainer,
                  notice: C,
                  ctaLabel: t,
                  ctaLoading: d,
                  onClick: m
              })
            : null
    );
}
