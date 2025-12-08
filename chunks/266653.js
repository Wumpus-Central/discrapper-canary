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
    f = n(71509),
    h = n(981631),
    _ = n(388032),
    g = n(518474);
function C(e) {
    let { transitionState: t, onClose: n } = e,
        { currentUser: C, multiAccountUsers: T } = (0, l.cj)([d.default, u.Z], () => ({
            currentUser: d.default.getCurrentUser(),
            multiAccountUsers: u.Z.getUsers(),
        })),
        [b, E] = i.useState(!1),
        [N, A] = i.useState(h.lds),
        [p, v] = i.useState(null);
    return (
        i.useEffect(() => {
            if (b)
                v(
                    (0, s.jsx)(c.Wn, {
                        messageType: c.QYI.ERROR,
                        className: g.infoMessage,
                        children: _.intl.format(_.t.HAuRSM, { maxNumAccounts: f.$H }),
                    }),
                ),
                    A(h.lds);
            else if (null != N) {
                let e = d.default.getUser(N);
                null != e &&
                    v(
                        (0, s.jsx)(c.Wn, {
                            messageType: c.QYI.POSITIVE,
                            className: g.infoMessage,
                            children: _.intl.format(_.t["09qide"], { username: e.username }),
                        }),
                    ),
                    E(!1);
            }
        }, [N, b]),
        i.useEffect(() => {
            T.length < f.$H && E(!1);
        }, [T]),
        (0, o.Z)({
            type: a.ImpressionTypes.MODAL,
            name: a.ImpressionNames.MULTI_ACCOUNT_SWITCH_LANDING,
        }),
        (0, s.jsxs)(r.Modal, {
            onClose: n,
            transitionState: t,
            size: "md",
            "aria-label": _.intl.string(_.t.WbFpq4),
            title: _.intl.string(_.t.WbFpq4),
            subtitle: _.intl.string(_.t["+1Uk3c"]),
            actions: [
                {
                    text: _.intl.string(_.t["9g2mqT"]),
                    variant: "secondary",
                    onClick: () => {
                        if (T.length >= f.$H) return void E(!0);
                        n(), (0, x.y)();
                    },
                },
            ],
            children: [
                p,
                (0, s.jsx)(m.Z, {
                    actionText: _.intl.string(_.t.Wf421J),
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
