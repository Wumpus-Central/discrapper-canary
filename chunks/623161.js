a.d(t, { default: () => g });
var n = a(627968),
    s = a(64700),
    i = a(110259),
    l = a(158954),
    r = a(311907),
    c = a(397927),
    o = a(139286),
    d = a(287809),
    u = a(274303),
    m = a(970573),
    _ = a(347853);
a(573879);
var x = a(652215),
    A = a(985018),
    f = a(202501);
function g(e) {
    let { transitionState: t, onClose: a } = e,
        { currentUser: g, multiAccountUsers: h } = (0, r.cf)([d.default, u.A], () => ({
            currentUser: d.default.getCurrentUser(),
            multiAccountUsers: u.A.getUsers(),
        })),
        [C, b] = s.useState(!1),
        [p, N] = s.useState(x.dJq),
        [T, U] = s.useState(null);
    return (
        s.useEffect(() => {
            if (C)
                U(
                    (0, n.jsx)(c.po8, {
                        messageType: c.YCn.ERROR,
                        className: f.u,
                        children: A.intl.format(A.t.HAuRSM, { maxNumAccounts: 5 }),
                    }),
                ),
                    N(x.dJq);
            else if (null != p) {
                let e = d.default.getUser(p);
                null != e &&
                    U(
                        (0, n.jsx)(c.po8, {
                            messageType: c.YCn.POSITIVE,
                            className: f.u,
                            children: A.intl.format(A.t["09qide"], { username: e.username }),
                        }),
                    ),
                    b(!1);
            }
        }, [p, C]),
        s.useEffect(() => {
            h.length < 5 && b(!1);
        }, [h]),
        (0, o.A)({ type: i.ImpressionTypes.MODAL, name: i.ImpressionNames.MULTI_ACCOUNT_SWITCH_LANDING }),
        (0, n.jsxs)(l.Modal, {
            onClose: a,
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
                        h.length >= 5 ? b(!0) : (a(), (0, _.D)());
                    },
                },
            ],
            children: [
                T,
                (0, n.jsx)(m.A, {
                    actionText: A.intl.string(A.t.Wf421J),
                    onAction: (e, t) => {
                        switch (e) {
                            case m.X.LOGIN_REQUIRED:
                                a(), (0, _.D)();
                                break;
                            case m.X.SWITCHED:
                                a();
                                break;
                            case m.X.REMOVED:
                                t === g?.id && a(), N(t);
                        }
                    },
                }),
            ],
        })
    );
}
