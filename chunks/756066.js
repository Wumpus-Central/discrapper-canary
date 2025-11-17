n.d(t, { Z: () => a });
var r = n(54381);
n(473749);
var i = n(793030),
    l = n(388032);
function a(e) {
    let t,
        {
            resubmittingEnableRequest: n,
            resubmissionError: a,
            createEnableRequest: s,
            requestRejectedNoticeText: o,
            reapplyNoticeText: c,
            isApplicationPending: d,
        } = e;
    if (null != a)
        return (0, r.jsx)(i.M14, {
            type: "critical",
            children: a.getAnyErrorMessage(),
        });
    let u = null;
    return (
        d
            ? (u = l.intl.string(l.t.OrkTBn))
            : null != o
              ? (u = o)
              : null != c && ((u = c), (t = l.intl.string(l.t["YKw/NQ"]))),
        null != u
            ? (0, r.jsx)(i.Wn, {
                  messageType: i.QYI.WARNING,
                  action: (0, r.jsx)(i.zxk, {
                      variant: "overlay-secondary",
                      text: t,
                      onClick: s,
                      loading: n,
                  }),
                  children: u,
              })
            : null
    );
}
