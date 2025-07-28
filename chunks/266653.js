(s.d(t, { default: () => N }), s(388685));
var n = s(255367),
    i = s(73800),
    a = s(990547),
    r = s(442837),
    l = s(82659),
    c = s(481060),
    o = s(213609),
    d = s(594174),
    u = s(726745),
    m = s(760213),
    x = s(383832),
    h = s(71509),
    _ = s(981631),
    f = s(388032),
    g = s(248910);
function N(e) {
    let { transitionState: t, onClose: s } = e,
        { currentUser: N, multiAccountUsers: v } = (0, r.cj)([d.default, u.Z], () => ({
            currentUser: d.default.getCurrentUser(),
            multiAccountUsers: u.Z.getUsers()
        })),
        [T, A] = i.useState(!1),
        [C, E] = i.useState(_.lds),
        [p, b] = i.useState(null);
    return (
        i.useEffect(() => {
            if (T)
                (b(
                    (0, n.jsx)(c.Wn, {
                        messageType: c.QYI.ERROR,
                        className: g.infoMessage,
                        children: f.intl.format(f.t.HAuRSE, { maxNumAccounts: h.$H })
                    })
                ),
                    E(_.lds));
            else if (null != C) {
                let e = d.default.getUser(C);
                (null != e &&
                    b(
                        (0, n.jsx)(c.Wn, {
                            messageType: c.QYI.POSITIVE,
                            className: g.infoMessage,
                            children: f.intl.format(f.t['09qidX'], { username: e.username })
                        })
                    ),
                    A(!1));
            }
        }, [C, T]),
        i.useEffect(() => {
            v.length < h.$H && A(!1);
        }, [v]),
        (0, o.Z)({
            type: a.ImpressionTypes.MODAL,
            name: a.ImpressionNames.MULTI_ACCOUNT_SWITCH_LANDING
        }),
        (0, n.jsxs)(l.Modal, {
            onClose: s,
            transitionState: t,
            size: 'md',
            'aria-label': f.intl.string(f.t.WbFpq6),
            title: f.intl.string(f.t.WbFpq6),
            subtitle: f.intl.string(f.t['+1Uk3d']),
            actions: [
                {
                    text: f.intl.string(f.t['9g2mqa']),
                    variant: 'secondary',
                    onClick: () => {
                        if (v.length >= h.$H) return void A(!0);
                        (s(), (0, x.y)());
                    }
                }
            ],
            children: [
                p,
                (0, n.jsx)(m.Z, {
                    actionText: f.intl.string(f.t.Wf421N),
                    onAction: (e, t) => {
                        switch (e) {
                            case m.W.LOGIN_REQUIRED:
                                (s(), (0, x.y)());
                                break;
                            case m.W.SWITCHED:
                                s();
                                break;
                            case m.W.REMOVED:
                                (t === (null == N ? void 0 : N.id) && s(), E(t));
                        }
                    }
                })
            ]
        })
    );
}
