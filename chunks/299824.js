n.d(t, { A: () => u });
var i = n(627968),
    l = n(683071),
    s = n(512950),
    r = n(821609),
    a = n(739929),
    o = n(652215),
    d = n(985018),
    c = n(301233);
function u(e) {
    let t,
        { guild: n } = e,
        {
            resubmittingEnableRequest: u,
            resubmissionError: m,
            createEnableRequest: g,
            resubmittedRequest: h,
            requestRejectedNoticeText: x,
            reapplyNoticeText: _,
        } = (0, a.A)(n),
        p = n.features.has(o.GuildFeatures.CREATOR_MONETIZABLE_RESTRICTED),
        A = n.features.has(o.GuildFeatures.CREATOR_MONETIZABLE_PENDING_NEW_OWNER_ONBOARDING);
    if (null != m)
        return (0, i.jsx)("div", {
            className: c.U,
            children: (0, i.jsx)(l.w, { type: "critical", children: m.getAnyErrorMessage() }),
        });
    let E = null;
    return (
        null != x
            ? (E = x)
            : h
              ? (E = d.intl.string(d.t.MyJpJT))
              : null != _
                ? ((E = _), (t = d.intl.string(d.t["YKw/NQ"])))
                : A
                  ? (E = d.intl.string(d.t.e2g9sW))
                  : p && (E = d.intl.string(d.t.rxI9sl)),
        null != E
            ? (0, i.jsx)("div", {
                  className: c.U,
                  children: (0, i.jsx)(s.p, {
                      messageType: s.Y.WARNING,
                      action: (0, i.jsx)(r.$, { variant: "overlay-secondary", text: t, onClick: g, loading: u }),
                      children: E,
                  }),
              })
            : null
    );
}
