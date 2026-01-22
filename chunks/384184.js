n.d(t, {
    A: () => m,
});
var r = n(627968),
    i = n(64700),
    l = n(731738),
    a = n(397927),
    s = n(831062),
    o = n(378570),
    c = n(138298),
    u = n(761640),
    d = n(336590),
    p = n(471271),
    f = n(629199),
    h = n(772659),
    A = n(985018),
    g = n(360830);

function m(e) {
    let { active: t, user: n, channel: m } = e,
        b = (0, d.r)(),
        _ = i.useCallback(() => {
            (0, a.showToast)((0, a.createToast)(A.intl.string(A.t.pIQ3h4), a.ToastType.FAILURE)),
                s.A.increment({
                    name: l.K.SPAM_MESSAGE_REQUEST_ERROR_VIEW,
                });
        }, []),
        E = i.useCallback(() => {
            c.A.closeChannelSidebar(u.fe);
        }, []),
        O = i.useCallback(() => {
            c.A.closeChannelSidebar(u.fe), b && (0, o.iN)(m.id);
        }, [m.id, b]),
        {
            acceptMessageRequest: y,
            isAcceptLoading: I,
            isUserProfileLoading: v,
            isOptimisticAccepted: S,
        } = (0, p.t)({
            user: n,
            onAcceptSuccess: O,
            onRejectSuccess: E,
            onError: _,
        }),
        C = I || v,
        N = C || S;
    return (0, r.jsxs)("div", {
        className: g.kL,
        children: [
            (0, r.jsx)(f.A, {
                otherUser: n,
                channel: m,
                active: t,
            }),
            (0, r.jsxs)("div", {
                className: g.o1,
                children: [
                    (0, r.jsx)(a.Button, {
                        variant: "secondary",
                        size: "sm",
                        text: A.intl.string(A.t.vicfl6),
                        onClick: (e) => {
                            y(m.id), e.stopPropagation();
                        },
                        disabled: N,
                        loading: C,
                    }),
                    (0, r.jsx)(h.A, {
                        channel: m,
                    }),
                ],
            }),
        ],
    });
}
