n.d(t, { A: () => _ });
var i = n(627968),
    l = n(64700),
    a = n(691540),
    s = n(857250),
    r = n(97483),
    o = n(825484),
    c = n(821609),
    d = n(471271),
    u = n(138298),
    h = n(761640),
    m = n(287809),
    A = n(33364),
    g = n(985018);
function _(e) {
    let { channel: t, user: n } = e,
        _ = l.useCallback(() => {
            (0, a.P0)((0, s.o)(g.intl.string(g.t.a2j0hv), r.Ck.FAILURE));
        }, []),
        p = l.useCallback(() => {
            u.A.closeChannelSidebar(h.fe);
        }, []),
        f = l.useCallback(() => {
            u.A.closeChannelSidebar(h.fe);
        }, []),
        {
            acceptMessageRequest: E,
            rejectMessageRequest: C,
            isAcceptLoading: x,
            isRejectLoading: S,
            isOptimisticAccepted: I,
            isOptimisticRejected: v,
        } = (0, d.t)({ user: m.default.getUser(n.id), onError: _, onAcceptSuccess: f, onRejectSuccess: p }),
        N = x || S || I || v;
    return (0, i.jsxs)(o.e, {
        size: "sm",
        children: [
            (0, i.jsx)(c.$, {
                variant: "primary",
                disabled: N,
                onClick: () => E(t.id),
                loading: x,
                text: g.intl.string(g.t.Kz8Pwr),
            }),
            (0, i.jsx)(c.$, {
                variant: "secondary",
                disabled: N,
                onClick: () => C(t.id),
                loading: S,
                text: g.intl.string(g.t.B2nygW),
            }),
            (0, i.jsx)(A.A, { channel: t, user: n }),
        ],
    });
}
