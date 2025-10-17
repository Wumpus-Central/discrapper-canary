n.d(t, { default: () => C }), n(388685);
var s = n(951288),
    a = n(647438),
    i = n(990547),
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
    g = n(518474);
function C(e) {
    let { transitionState: t, onClose: n } = e,
        { currentUser: C, multiAccountUsers: E } = (0, l.cj)([d.default, u.Z], () => ({
            currentUser: d.default.getCurrentUser(),
            multiAccountUsers: u.Z.getUsers(),
        })),
        [N, T] = a.useState(!1),
        [b, A] = a.useState(_.lds),
        [p, v] = a.useState(null);
    return (
        a.useEffect(() => {
            if (N)
                v(
                    (0, s.jsx)(c.Wn, {
                        messageType: c.QYI.ERROR,
                        className: g.infoMessage,
                        children: f.intl.format(f.t.HAuRSE, { maxNumAccounts: h.$H }),
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
                            children: f.intl.format(f.t["09qidX"], { username: e.username }),
                        }),
                    ),
                    T(!1);
            }
        }, [b, N]),
        a.useEffect(() => {
            E.length < h.$H && T(!1);
        }, [E]),
        (0, o.Z)({
            type: i.ImpressionTypes.MODAL,
            name: i.ImpressionNames.MULTI_ACCOUNT_SWITCH_LANDING,
        }),
        (0, s.jsxs)(r.Modal, {
            onClose: n,
            transitionState: t,
            size: "md",
            "aria-label": f.intl.string(f.t.WbFpq6),
            title: f.intl.string(f.t.WbFpq6),
            subtitle: f.intl.string(f.t["+1Uk3d"]),
            actions: [
                {
                    text: f.intl.string(f.t["9g2mqa"]),
                    variant: "secondary",
                    onClick: () => {
                        if (E.length >= h.$H) return void T(!0);
                        n(), (0, x.y)();
                    },
                },
            ],
            children: [
                p,
                (0, s.jsx)(m.Z, {
                    actionText: f.intl.string(f.t.Wf421N),
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
