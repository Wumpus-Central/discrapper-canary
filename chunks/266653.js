n.d(t, { default: () => C }), n(388685);
var s = n(54381),
    i = n(473749),
    a = n(990547),
    r = n(793030),
    l = n(442837),
    c = n(481060),
    o = n(213609),
    d = n(594174),
    u = n(726745),
    m = n(760213),
    x = n(383832),
    h = n(71509),
    _ = n(981631),
    f = n(388032),
    g = n(384743);
function C(e) {
    let { transitionState: t, onClose: n } = e,
        { currentUser: C, multiAccountUsers: T } = (0, l.cj)([d.default, u.Z], () => ({
            currentUser: d.default.getCurrentUser(),
            multiAccountUsers: u.Z.getUsers(),
        })),
        [E, N] = i.useState(!1),
        [b, A] = i.useState(_.lds),
        [p, v] = i.useState(null);
    return (
        i.useEffect(() => {
            if (E)
                v(
                    (0, s.jsx)(c.Wn, {
                        messageType: c.QYI.ERROR,
                        className: g.infoMessage,
                        children: f.intl.format(f.t.HAuRSM, { maxNumAccounts: h.$H }),
                    }),
                ),
                    A(_.lds);
            else if (null != b) {
                let e = d.default.getUser(b);
                null != e &&
                    v(
                        (0, s.jsx)(c.Wn, {
                            messageType: c.QYI.POSITIVE,
                            className: g.infoMessage,
                            children: f.intl.format(f.t["09qide"], { username: e.username }),
                        }),
                    ),
                    N(!1);
            }
        }, [b, E]),
        i.useEffect(() => {
            T.length < h.$H && N(!1);
        }, [T]),
        (0, o.Z)({
            type: a.ImpressionTypes.MODAL,
            name: a.ImpressionNames.MULTI_ACCOUNT_SWITCH_LANDING,
        }),
        (0, s.jsxs)(r.Modal, {
            onClose: n,
            transitionState: t,
            size: "md",
            "aria-label": f.intl.string(f.t.WbFpq4),
            title: f.intl.string(f.t.WbFpq4),
            subtitle: f.intl.string(f.t["+1Uk3c"]),
            actions: [
                {
                    text: f.intl.string(f.t["9g2mqT"]),
                    variant: "secondary",
                    onClick: () => {
                        if (T.length >= h.$H) return void N(!0);
                        n(), (0, x.y)();
                    },
                },
            ],
            children: [
                p,
                (0, s.jsx)(m.Z, {
                    actionText: f.intl.string(f.t.Wf421J),
                    onAction: (e, t) => {
                        switch (e) {
                            case m.W.LOGIN_REQUIRED:
                                n(), (0, x.y)();
                                break;
                            case m.W.SWITCHED:
                                n();
                                break;
                            case m.W.REMOVED:
                                t === (null == C ? void 0 : C.id) && n(), A(t);
                        }
                    },
                }),
            ],
        })
    );
}
