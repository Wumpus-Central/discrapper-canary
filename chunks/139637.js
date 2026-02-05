"use strict";
n.d(t, { A: () => r });
var i = n(627968);
n(64700);
var s = n(158954),
    l = n(985018);
function r(e) {
    let t,
        {
            resubmittingEnableRequest: n,
            resubmissionError: r,
            createEnableRequest: a,
            requestRejectedNoticeText: o,
            reapplyNoticeText: d,
            isApplicationPending: c,
        } = e;
    if (null != r) return (0, i.jsx)(s.wx6, { type: "critical", children: r.getAnyErrorMessage() });
    let u = null;
    return (
        c
            ? (u = l.intl.string(l.t.OrkTBn))
            : null != o
              ? (u = o)
              : null != d && ((u = d), (t = l.intl.string(l.t["YKw/NQ"]))),
        null != u
            ? (0, i.jsx)(s.po8, {
                  messageType: s.YCn.WARNING,
                  action: (0, i.jsx)(s.$nd, { variant: "overlay-secondary", text: t, onClick: a, loading: n }),
                  children: u,
              })
            : null
    );
}
