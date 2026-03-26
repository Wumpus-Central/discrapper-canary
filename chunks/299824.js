"use strict";
n.d(t, { A: () => d });
var i = n(627968),
    s = n(158954),
    l = n(739929),
    r = n(652215),
    a = n(985018),
    o = n(92577);
function d(e) {
    let t,
        { guild: n } = e,
        {
            resubmittingEnableRequest: d,
            resubmissionError: c,
            createEnableRequest: u,
            resubmittedRequest: m,
            requestRejectedNoticeText: g,
            reapplyNoticeText: x,
        } = (0, l.A)(n),
        h = n.features.has(r.GuildFeatures.CREATOR_MONETIZABLE_RESTRICTED),
        _ = n.features.has(r.GuildFeatures.CREATOR_MONETIZABLE_PENDING_NEW_OWNER_ONBOARDING);
    if (null != c)
        return (0, i.jsx)("div", {
            className: o.U,
            children: (0, i.jsx)(s.wx6, { type: "critical", children: c.getAnyErrorMessage() }),
        });
    let p = null;
    return (
        null != g
            ? (p = g)
            : m
              ? (p = a.intl.string(a.t.MyJpJT))
              : null != x
                ? ((p = x), (t = a.intl.string(a.t["YKw/NQ"])))
                : _
                  ? (p = a.intl.string(a.t.e2g9sW))
                  : h && (p = a.intl.string(a.t.rxI9sl)),
        null != p
            ? (0, i.jsx)("div", {
                  className: o.U,
                  children: (0, i.jsx)(s.po8, {
                      messageType: s.YCn.WARNING,
                      action: (0, i.jsx)(s.$nd, { variant: "overlay-secondary", text: t, onClick: u, loading: d }),
                      children: p,
                  }),
              })
            : null
    );
}
