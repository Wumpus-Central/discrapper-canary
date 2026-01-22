n.d(t, { A: () => s });
var r = n(627968);
n(64700);
var i = n(158954),
    l = n(985018);
function s(e) {
    let t,
        {
            resubmittingEnableRequest: n,
            resubmissionError: s,
            createEnableRequest: a,
            requestRejectedNoticeText: c,
            reapplyNoticeText: o,
            isApplicationPending: d,
        } = e;
    if (null != s)
        return (0, r.jsx)(i.wx6, {
            type: "critical",
            children: s.getAnyErrorMessage(),
        });
    let u = null;
    return (
        d
            ? (u = l.intl.string(l.t.OrkTBn))
            : null != c
              ? (u = c)
              : null != o && ((u = o), (t = l.intl.string(l.t["YKw/NQ"]))),
        null != u
            ? (0, r.jsx)(i.po8, {
                  messageType: i.YCn.WARNING,
                  action: (0, r.jsx)(i.$nd, {
                      variant: "overlay-secondary",
                      text: t,
                      onClick: a,
                      loading: n,
                  }),
                  children: u,
              })
            : null
    );
}
