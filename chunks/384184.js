n.d(t, { A: () => p });
var i = n(627968),
    a = n(64700),
    l = n(731738),
    r = n(397927),
    s = n(831062),
    o = n(378570),
    d = n(138298),
    c = n(761640),
    u = n(336590),
    A = n(471271),
    h = n(629199),
    _ = n(772659),
    m = n(985018),
    g = n(849052);
function p(e) {
    let { active: t, user: n, channel: p } = e,
        E = (0, u.r)(),
        I = a.useCallback(() => {
            (0, r.showToast)((0, r.createToast)(m.intl.string(m.t.pIQ3h4), r.ToastType.FAILURE)),
                s.A.increment({ name: l.K.SPAM_MESSAGE_REQUEST_ERROR_VIEW });
        }, []),
        f = a.useCallback(() => {
            d.A.closeChannelSidebar(c.fe);
        }, []),
        C = a.useCallback(() => {
            d.A.closeChannelSidebar(c.fe), E && (0, o.iN)(p.id);
        }, [p.id, E]),
        {
            acceptMessageRequest: T,
            isAcceptLoading: N,
            isUserProfileLoading: S,
            isOptimisticAccepted: x,
        } = (0, A.t)({ user: n, onAcceptSuccess: C, onRejectSuccess: f, onError: I }),
        v = N || S,
        y = v || x;
    return (0, i.jsxs)("div", {
        className: g.kL,
        children: [
            (0, i.jsx)(h.A, { otherUser: n, channel: p, active: t }),
            (0, i.jsxs)("div", {
                className: g.o1,
                children: [
                    (0, i.jsx)(r.Button, {
                        variant: "secondary",
                        size: "sm",
                        text: m.intl.string(m.t.vicfl6),
                        onClick: (e) => {
                            T(p.id), e.stopPropagation();
                        },
                        disabled: y,
                        loading: v,
                    }),
                    (0, i.jsx)(_.A, { channel: p }),
                ],
            }),
        ],
    });
}
