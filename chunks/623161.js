a.d(t, { default: () => _ }), a(896048);
var n = a(627968),
    s = a(64700),
    i = a(110259),
    l = a(158954),
    r = a(311907),
    c = a(397927),
    d = a(139286),
    o = a(287809),
    u = a(274303),
    m = a(970573),
    f = a(347853);
a(573879);
var x = a(652215),
    A = a(985018),
    b = a(202501);
function _(e) {
    let { transitionState: t, onClose: a } = e,
        { currentUser: _, multiAccountUsers: g } = (0, r.cf)([o.default, u.A], () => ({
            currentUser: o.default.getCurrentUser(),
            multiAccountUsers: u.A.getUsers(),
        })),
        [h, C] = s.useState(!1),
        [N, p] = s.useState(x.dJq),
        [T, U] = s.useState(null);
    return (
        s.useEffect(() => {
            if (h)
                U(
                    (0, n.jsx)(c.po8, {
                        messageType: c.YCn.ERROR,
                        className: b.u,
                        children: A.intl.format(A.t.HAuRSM, { maxNumAccounts: 5 }),
                    }),
                ),
                    p(x.dJq);
            else if (null != N) {
                let e = o.default.getUser(N);
                null != e &&
                    U(
                        (0, n.jsx)(c.po8, {
                            messageType: c.YCn.POSITIVE,
                            className: b.u,
                            children: A.intl.format(A.t["09qide"], { username: e.username }),
                        }),
                    ),
                    C(!1);
            }
        }, [N, h]),
        s.useEffect(() => {
            g.length < 5 && C(!1);
        }, [g]),
        (0, d.A)({
            type: i.ImpressionTypes.MODAL,
            name: i.ImpressionNames.MULTI_ACCOUNT_SWITCH_LANDING,
        }),
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
                        g.length >= 5 ? C(!0) : (a(), (0, f.D)());
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
                                a(), (0, f.D)();
                                break;
                            case m.X.SWITCHED:
                                a();
                                break;
                            case m.X.REMOVED:
                                t === (null == _ ? void 0 : _.id) && a(), p(t);
                        }
                    },
                }),
            ],
        })
    );
}
