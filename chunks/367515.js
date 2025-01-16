n.d(t, {
    B: function () {
        return f;
    }
});
var i = n(200651),
    r = n(192379),
    s = n(512722),
    a = n.n(s),
    l = n(399606),
    o = n(481060),
    c = n(594174),
    d = n(880257),
    u = n(631885),
    m = n(933970),
    g = n(340453),
    h = n(292352),
    p = n(388032),
    x = n(659506);
function f(e) {
    let { user: t } = e,
        s = (0, d.Z)(),
        f = (0, u.VM)(),
        _ = (0, l.e7)([c.default], () => c.default.getCurrentUser()),
        E = r.useCallback(() => {
            a()(void 0 !== _, 'User must be logged in to accept a link request'),
                (0, o.openModalLazy)(async () => {
                    let { default: e } = await n.e('59716').then(n.bind(n, 275370));
                    return (n) =>
                        (0, i.jsx)(e, {
                            ...n,
                            currentUser: _,
                            otherUser: t
                        });
                });
        }, [_, t]),
        C = r.useCallback(() => {
            a()(void 0 !== _, 'User must be logged in to decline a link request'),
                (0, o.openModalLazy)(async () => {
                    let { default: e } = await n.e('958').then(n.bind(n, 4526));
                    return (n) =>
                        (0, i.jsx)(e, {
                            ...n,
                            currentUser: _,
                            otherUser: t
                        });
                });
        }, [_, t]),
        T = r.useCallback(() => {
            a()(void 0 !== _, 'User must be logged in to decline a link request'),
                (0, o.openModalLazy)(async () => {
                    let { default: e } = await n.e('69015').then(n.bind(n, 247265));
                    return (n) =>
                        (0, i.jsx)(e, {
                            ...n,
                            currentUser: _,
                            otherUser: t
                        });
                });
        }, [_, t]);
    return (0, i.jsxs)('div', {
        className: x.container,
        children: [
            (0, i.jsx)('div', {
                className: x.details,
                children: (0, i.jsx)(g.Z, {
                    otherUser: t,
                    status: h.ne.PENDING
                })
            }),
            (0, i.jsx)('div', {
                className: x.actions,
                children: s
                    ? (0, i.jsx)(m.Z, {
                          icon: o.XSmallIcon,
                          className: x.__invalid_actionDeny,
                          tooltip: p.intl.string(p.t.e5iHmZ),
                          onClick: T
                      })
                    : (0, i.jsxs)(i.Fragment, {
                          children: [
                              f
                                  ? null
                                  : (0, i.jsx)(m.Z, {
                                        icon: o.CheckmarkLargeIcon,
                                        className: x.__invalid_actionAccept,
                                        tooltip: p.intl.string(p.t.krWQZG),
                                        onClick: E
                                    }),
                              (0, i.jsx)(m.Z, {
                                  icon: o.XSmallIcon,
                                  className: x.__invalid_actionDeny,
                                  tooltip: p.intl.string(p.t.bBDeND),
                                  onClick: C
                              })
                          ]
                      })
            })
        ]
    });
}
