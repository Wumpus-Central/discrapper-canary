n.d(t, { default: () => C }), n(388685);
var s = n(54381),
    i = n(473749),
    a = n(990547),
    l = n(793030),
    r = n(442837),
    c = n(481060),
    o = n(213609),
    d = n(594174),
    u = n(726745),
    m = n(760213),
    x = n(383832),
    f = n(71509),
    h = n(981631),
    b = n(388032),
    g = n(436313);
function C(e) {
    let { transitionState: t, onClose: n } = e,
        { currentUser: C, multiAccountUsers: T } = (0, r.cj)([d.default, u.Z], () => ({
            currentUser: d.default.getCurrentUser(),
            multiAccountUsers: u.Z.getUsers(),
        })),
        [E, N] = i.useState(!1),
        [_, A] = i.useState(h.lds),
        [v, p] = i.useState(null);
    return (
        i.useEffect(() => {
            if (E)
                p(
                    (0, s.jsx)(c.Wn, {
                        messageType: c.QYI.ERROR,
                        className: g.infoMessage,
                        children: b.intl.format(b.t.HAuRSM, { maxNumAccounts: f.$H }),
                    }),
                ),
                    A(h.lds);
            else if (null != _) {
                let e = d.default.getUser(_);
                null != e &&
                    p(
                        (0, s.jsx)(c.Wn, {
                            messageType: c.QYI.POSITIVE,
                            className: g.infoMessage,
                            children: b.intl.format(b.t["09qide"], { username: e.username }),
                        }),
                    ),
                    N(!1);
            }
        }, [_, E]),
        i.useEffect(() => {
            T.length < f.$H && N(!1);
        }, [T]),
        (0, o.Z)({
            type: a.ImpressionTypes.MODAL,
            name: a.ImpressionNames.MULTI_ACCOUNT_SWITCH_LANDING,
        }),
        (0, s.jsxs)(l.Modal, {
            onClose: n,
            transitionState: t,
            size: "md",
            "aria-label": b.intl.string(b.t.WbFpq4),
            title: b.intl.string(b.t.WbFpq4),
            subtitle: b.intl.string(b.t["+1Uk3c"]),
            actions: [
                {
                    text: b.intl.string(b.t["9g2mqT"]),
                    variant: "secondary",
                    onClick: () => {
                        if (T.length >= f.$H) return void N(!0);
                        n(), (0, x.y)();
                    },
                },
            ],
            children: [
                v,
                (0, s.jsx)(m.Z, {
                    actionText: b.intl.string(b.t.Wf421J),
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
