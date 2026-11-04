var a = s(477900),
    i = s(582128),
    n = s(613412),
    r = s(855986),
    l = s(189213),
    c = s(683071),
    u = s(139286),
    o = s(287809),
    d = s(274303),
    m = s(970573),
    f = s(347853);
(s(573879), s(652215));
var p = s(792996),
    g = s(885531);
s.d(
    t,
    {},
    {
        default: function (e) {
            let { transitionState: t, onClose: s } = e,
                { currentUser: h, multiAccountUsers: A } = (0, r.cf)([o.default, d.A], () => ({
                    currentUser: o.default.getCurrentUser(),
                    multiAccountUsers: d.A.getUsers(),
                })),
                [x, C] = i.useState(!1),
                [U, b] = i.useState(""),
                [k, I] = i.useState(null);
            return (
                i.useEffect(() => {
                    if (x)
                        (I(
                            (0, a.jsx)("div", {
                                className: g.u,
                                children: (0, a.jsx)(c.w, {
                                    type: "critical",
                                    message: p.intl.format(p.t.HAuRSM, { maxNumAccounts: 5 }),
                                    role: "alert",
                                }),
                            }),
                        ),
                            b(""));
                    else if (null != U) {
                        let e = o.default.getUser(U);
                        (null != e &&
                            I(
                                (0, a.jsx)("div", {
                                    className: g.u,
                                    children: (0, a.jsx)(c.w, {
                                        type: "success",
                                        message: p.intl.format(p.t["09qide"], { username: e.username }),
                                        role: "status",
                                    }),
                                }),
                            ),
                            C(!1));
                    }
                }, [U, x]),
                i.useEffect(() => {
                    A.length < 5 && C(!1);
                }, [A]),
                (0, u.A)({ type: n.ImpressionTypes.MODAL, name: n.ImpressionNames.MULTI_ACCOUNT_SWITCH_LANDING }),
                (0, a.jsxs)(l.a, {
                    onClose: s,
                    transitionState: t,
                    size: "md",
                    "aria-label": p.intl.string(p.t.WbFpq4),
                    title: p.intl.string(p.t.WbFpq4),
                    subtitle: p.intl.string(p.t["+1Uk3c"]),
                    actions: [
                        {
                            text: p.intl.string(p.t["9g2mqT"]),
                            variant: "secondary",
                            onClick: () => {
                                A.length >= 5 ? C(!0) : (s(), (0, f.D)());
                            },
                        },
                    ],
                    children: [
                        k,
                        (0, a.jsx)(m.A, {
                            actionText: p.intl.string(p.t.Wf421J),
                            onAction: (e, t) => {
                                switch (e) {
                                    case m.X.LOGIN_REQUIRED:
                                        (s(), (0, f.D)());
                                        break;
                                    case m.X.SWITCHED:
                                        s();
                                        break;
                                    case m.X.REMOVED:
                                        (t === h?.id && s(), b(t));
                                }
                            },
                        }),
                    ],
                })
            );
        },
    },
);
