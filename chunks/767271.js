n.d(t, { A: () => h });
var i = n(627968),
    l = n(64700),
    s = n(397927),
    a = n(471271),
    r = n(138298),
    o = n(761640),
    c = n(287809),
    d = n(33364),
    u = n(985018);
function h(e) {
    let { channel: t, user: n } = e,
        h = l.useCallback(() => {
            (0, s.showToast)((0, s.createToast)(u.intl.string(u.t.a2j0hv), s.ToastType.FAILURE));
        }, []),
        m = l.useCallback(() => {
            r.A.closeChannelSidebar(o.fe);
        }, []),
        A = l.useCallback(() => {
            r.A.closeChannelSidebar(o.fe);
        }, []),
        {
            acceptMessageRequest: g,
            rejectMessageRequest: p,
            isAcceptLoading: f,
            isRejectLoading: _,
            isOptimisticAccepted: E,
            isOptimisticRejected: x,
        } = (0, a.t)({ user: c.default.getUser(n.id), onError: h, onAcceptSuccess: A, onRejectSuccess: m }),
        C = f || _ || E || x;
    return (0, i.jsxs)(s.ButtonGroup, {
        size: "sm",
        children: [
            (0, i.jsx)(s.Button, {
                variant: "primary",
                disabled: C,
                onClick: () => g(t.id),
                loading: f,
                text: u.intl.string(u.t.Kz8Pwr),
            }),
            (0, i.jsx)(s.Button, {
                variant: "secondary",
                disabled: C,
                onClick: () => p(t.id),
                loading: _,
                text: u.intl.string(u.t.B2nygW),
            }),
            (0, i.jsx)(d.A, { channel: t, user: n }),
        ],
    });
}
