s.d(t, { default: () => f });
var a = s(627968),
    i = s(64700),
    n = s(110259),
    l = s(189213),
    r = s(17928),
    c = s(512950),
    d = s(139286),
    o = s(287809),
    u = s(274303),
    m = s(970573),
    _ = s(347853);
s(573879);
var x = s(652215),
    A = s(985018),
    h = s(812001);
function f(e) {
    let { transitionState: t, onClose: s } = e,
        { currentUser: f, multiAccountUsers: g } = (0, r.cf)([o.default, u.A], () => ({
            currentUser: o.default.getCurrentUser(),
            multiAccountUsers: u.A.getUsers(),
        })),
        [p, N] = i.useState(!1),
        [C, E] = i.useState(x.dJq),
        [U, b] = i.useState(null);
    return (
        i.useEffect(() => {
            if (p)
                b(
                    (0, a.jsx)(c.p, {
                        messageType: c.Y.ERROR,
                        className: h.u,
                        children: A.intl.format(A.t.HAuRSM, { maxNumAccounts: 5 }),
                    }),
                ),
                    E(x.dJq);
            else if (null != C) {
                let e = o.default.getUser(C);
                null != e &&
                    b(
                        (0, a.jsx)(c.p, {
                            messageType: c.Y.POSITIVE,
                            className: h.u,
                            children: A.intl.format(A.t["09qide"], { username: e.username }),
                        }),
                    ),
                    N(!1);
            }
        }, [C, p]),
        i.useEffect(() => {
            g.length < 5 && N(!1);
        }, [g]),
        (0, d.A)({ type: n.ImpressionTypes.MODAL, name: n.ImpressionNames.MULTI_ACCOUNT_SWITCH_LANDING }),
        (0, a.jsxs)(l.Modal, {
            onClose: s,
            transitionState: t,
            size: "md",
            "aria-label": A.intl.string(A.t.WbFpq4),
            title: A.intl.string(A.t.WbFpq4),
            subtitle: A.intl.string(A.t["+1Uk3c"]),
            actions: [
                {
                    text: A.intl.string(A.t["9g2mqT"]),
                    variant: "secondary",
                    onClick: () => {
                        g.length >= 5 ? N(!0) : (s(), (0, _.D)());
                    },
                },
            ],
            children: [
                U,
                (0, a.jsx)(m.A, {
                    actionText: A.intl.string(A.t.Wf421J),
                    onAction: (e, t) => {
                        switch (e) {
                            case m.X.LOGIN_REQUIRED:
                                s(), (0, _.D)();
                                break;
                            case m.X.SWITCHED:
                                s();
                                break;
                            case m.X.REMOVED:
                                t === f?.id && s(), E(t);
                        }
                    },
                }),
            ],
        })
    );
}
