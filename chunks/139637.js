n.d(t, { A: () => o });
var i = n(627968);
n(64700);
var l = n(683071),
    s = n(512950),
    r = n(821609),
    a = n(985018);
function o(e) {
    let t,
        {
            resubmittingEnableRequest: n,
            resubmissionError: o,
            createEnableRequest: d,
            requestRejectedNoticeText: c,
            reapplyNoticeText: u,
            isApplicationPending: m,
        } = e;
    if (null != o) return (0, i.jsx)(l.w, { type: "critical", children: o.getAnyErrorMessage() });
    let g = null;
    return (
        m
            ? (g = a.intl.string(a.t.OrkTBn))
            : null != c
              ? (g = c)
              : null != u && ((g = u), (t = a.intl.string(a.t["YKw/NQ"]))),
        null != g
            ? (0, i.jsx)(s.p, {
                  messageType: s.Y.WARNING,
                  action: (0, i.jsx)(r.$, { variant: "overlay-secondary", text: t, onClick: d, loading: n }),
                  children: g,
              })
            : null
    );
}
