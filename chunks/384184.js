n.d(t, { A: () => g });
var i = n(627968),
    r = n(64700),
    a = n(731738),
    l = n(397927),
    s = n(831062),
    o = n(378570),
    d = n(138298),
    c = n(761640),
    u = n(336590),
    A = n(471271),
    h = n(629199),
    _ = n(772659),
    m = n(985018),
    p = n(360830);
function g(e) {
    let { active: t, user: n, channel: g } = e,
        E = (0, u.r)(),
        f = r.useCallback(() => {
            (0, l.showToast)((0, l.createToast)(m.intl.string(m.t.pIQ3h4), l.ToastType.FAILURE)),
                s.A.increment({ name: a.K.SPAM_MESSAGE_REQUEST_ERROR_VIEW });
        }, []),
        I = r.useCallback(() => {
            d.A.closeChannelSidebar(c.fe);
        }, []),
        C = r.useCallback(() => {
            d.A.closeChannelSidebar(c.fe), E && (0, o.iN)(g.id);
        }, [g.id, E]),
        {
            acceptMessageRequest: N,
            isAcceptLoading: T,
            isUserProfileLoading: S,
            isOptimisticAccepted: x,
        } = (0, A.t)({ user: n, onAcceptSuccess: C, onRejectSuccess: I, onError: f }),
        v = T || S,
        b = v || x;
    return (0, i.jsxs)("div", {
        className: p.kL,
        children: [
            (0, i.jsx)(h.A, { otherUser: n, channel: g, active: t }),
            (0, i.jsxs)("div", {
                className: p.o1,
                children: [
                    (0, i.jsx)(l.Button, {
                        variant: "secondary",
                        size: "sm",
                        text: m.intl.string(m.t.vicfl6),
                        onClick: (e) => {
                            N(g.id), e.stopPropagation();
                        },
                        disabled: b,
                        loading: v,
                    }),
                    (0, i.jsx)(_.A, { channel: g }),
                ],
            }),
        ],
    });
}
