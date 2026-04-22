n.d(t, { A: () => _ });
var s = n(627968),
    l = n(64700),
    a = n(731738),
    i = n(691540),
    r = n(857250),
    c = n(97483),
    d = n(821609),
    o = n(831062),
    u = n(378570),
    A = n(138298),
    h = n(761640),
    m = n(336590),
    g = n(471271),
    x = n(629199),
    S = n(772659),
    E = n(985018),
    f = n(303835);
function _(e) {
    let { active: t, user: n, channel: _ } = e,
        b = (0, m.r)(),
        j = l.useCallback(() => {
            (0, i.P0)((0, r.o)(E.intl.string(E.t.pIQ3h4), c.Ck.FAILURE)),
                o.A.increment({ name: a.K.SPAM_MESSAGE_REQUEST_ERROR_VIEW });
        }, []),
        p = l.useCallback(() => {
            A.A.closeChannelSidebar(h.fe);
        }, []),
        v = l.useCallback(() => {
            A.A.closeChannelSidebar(h.fe), b && (0, u.iN)(_.id);
        }, [_.id, b]),
        {
            acceptMessageRequest: C,
            isAcceptLoading: I,
            isUserProfileLoading: N,
            isOptimisticAccepted: R,
        } = (0, g.t)({ user: n, onAcceptSuccess: v, onRejectSuccess: p, onError: j }),
        M = I || N,
        k = M || R;
    return (0, s.jsxs)("div", {
        className: f.kL,
        children: [
            (0, s.jsx)(x.A, { otherUser: n, channel: _, active: t }),
            (0, s.jsxs)("div", {
                className: f.o1,
                children: [
                    (0, s.jsx)(d.$, {
                        variant: "secondary",
                        size: "sm",
                        text: E.intl.string(E.t.vicfl6),
                        onClick: (e) => {
                            C(_.id), e.stopPropagation();
                        },
                        disabled: k,
                        loading: M,
                    }),
                    (0, s.jsx)(S.A, { channel: _ }),
                ],
            }),
        ],
    });
}
