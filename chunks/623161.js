s.d(t, { default: () => A });
var a = s(477900),
    i = s(582128),
    n = s(562708),
    r = s(17928),
    l = s(189213),
    c = s(683071),
    u = s(139286),
    d = s(287809),
    o = s(274303),
    m = s(970573),
    f = s(347853);
s(573879);
var p = s(652215),
    g = s(660183),
    h = s(885531);
function A(e) {
    let { transitionState: t, onClose: s } = e,
        { currentUser: A, multiAccountUsers: x } = (0, r.cf)([d.default, o.A], () => ({
            currentUser: d.default.getCurrentUser(),
            multiAccountUsers: o.A.getUsers(),
        })),
        [C, U] = i.useState(!1),
        [b, k] = i.useState(p.dJq),
        [I, N] = i.useState(null);
    return (
        i.useEffect(() => {
            if (C)
                (N(
                    (0, a.jsx)("div", {
                        className: h.u,
                        children: (0, a.jsx)(c.w, {
                            type: "critical",
                            message: g.intl.format(g.t.HAuRSM, { maxNumAccounts: 5 }),
                            role: "alert",
                        }),
                    }),
                ),
                    k(p.dJq));
            else if (null != b) {
                let e = d.default.getUser(b);
                (null != e &&
                    N(
                        (0, a.jsx)("div", {
                            className: h.u,
                            children: (0, a.jsx)(c.w, {
                                type: "success",
                                message: g.intl.format(g.t["09qide"], { username: e.username }),
                                role: "status",
                            }),
                        }),
                    ),
                    U(!1));
            }
        }, [b, C]),
        i.useEffect(() => {
            x.length < 5 && U(!1);
        }, [x]),
        (0, u.A)({ type: n.ImpressionTypes.MODAL, name: n.ImpressionNames.MULTI_ACCOUNT_SWITCH_LANDING }),
        (0, a.jsxs)(l.a, {
            onClose: s,
            transitionState: t,
            size: "md",
            "aria-label": g.intl.string(g.t.WbFpq4),
            title: g.intl.string(g.t.WbFpq4),
            subtitle: g.intl.string(g.t["+1Uk3c"]),
            actions: [
                {
                    text: g.intl.string(g.t["9g2mqT"]),
                    variant: "secondary",
                    onClick: () => {
                        x.length >= 5 ? U(!0) : (s(), (0, f.D)());
                    },
                },
            ],
            children: [
                I,
                (0, a.jsx)(m.A, {
                    actionText: g.intl.string(g.t.Wf421J),
                    onAction: (e, t) => {
                        switch (e) {
                            case m.X.LOGIN_REQUIRED:
                                (s(), (0, f.D)());
                                break;
                            case m.X.SWITCHED:
                                s();
                                break;
                            case m.X.REMOVED:
                                (t === A?.id && s(), k(t));
                        }
                    },
                }),
            ],
        })
    );
}
