n.d(t, { Z: () => c });
var r = n(54381),
    i = n(793030),
    l = n(346163),
    a = n(981631),
    s = n(388032),
    o = n(676182);
function c(e) {
    let t,
        { guild: n } = e,
        {
            resubmittingEnableRequest: c,
            resubmissionError: d,
            createEnableRequest: u,
            resubmittedRequest: g,
            requestRejectedNoticeText: m,
            reapplyNoticeText: p,
        } = (0, l.Z)(n),
        f = n.features.has(a.GuildFeatures.CREATOR_MONETIZABLE_RESTRICTED),
        h = n.features.has(a.GuildFeatures.CREATOR_MONETIZABLE_PENDING_NEW_OWNER_ONBOARDING);
    if (null != d)
        return (0, r.jsx)("div", {
            className: o.noticeContainer,
            children: (0, r.jsx)(i.M14, {
                type: "critical",
                children: d.getAnyErrorMessage(),
            }),
        });
    let b = null;
    return (
        null != m
            ? (b = m)
            : g
              ? (b = s.intl.string(s.t.MyJpJT))
              : null != p
                ? ((b = p), (t = s.intl.string(s.t["YKw/NQ"])))
                : h
                  ? (b = s.intl.string(s.t.e2g9sW))
                  : f && (b = s.intl.string(s.t.rxI9sl)),
        null != b
            ? (0, r.jsx)("div", {
                  className: o.noticeContainer,
                  children: (0, r.jsx)(i.Wn, {
                      messageType: i.QYI.WARNING,
                      action: (0, r.jsx)(i.zxk, {
                          variant: "overlay-secondary",
                          text: t,
                          onClick: u,
                          loading: c,
                      }),
                      children: b,
                  }),
              })
            : null
    );
}
