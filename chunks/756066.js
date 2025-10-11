n.d(t, { Z: () => a });
var r = n(951288);
n(647438);
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
            ? (u = l.intl.string(l.t.OrkTBg))
            : null != o
              ? (u = o)
              : null != c && ((u = c), (t = l.intl.string(l.t["YKw/NT"]))),
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
