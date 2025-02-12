n.d(t, { B: () => h });
var i = n(200651),
    r = n(192379),
    a = n(512722),
    s = n.n(a),
    l = n(399606),
    o = n(481060),
    c = n(594174),
    d = n(880257),
    u = n(631885),
    m = n(933970),
    g = n(340453),
    _ = n(292352),
    p = n(388032),
    f = n(888872);
function h(e) {
    let { user: t } = e,
        a = (0, d.Z)(),
        h = (0, u.VM)(),
        x = (0, l.e7)([c.default], () => c.default.getCurrentUser()),
        E = r.useCallback(() => {
            s()(void 0 !== x, 'User must be logged in to accept a link request'),
                (0, o.ZDy)(async () => {
                    let { default: e } = await n.e('59716').then(n.bind(n, 275370));
                    return (n) =>
                        (0, i.jsx)(e, {
                            ...n,
                            currentUser: x,
                            otherUser: t
                        });
                });
        }, [x, t]),
        C = r.useCallback(() => {
            s()(void 0 !== x, 'User must be logged in to decline a link request'),
                (0, o.ZDy)(async () => {
                    let { default: e } = await n.e('958').then(n.bind(n, 4526));
                    return (n) =>
                        (0, i.jsx)(e, {
                            ...n,
                            currentUser: x,
                            otherUser: t
                        });
                });
        }, [x, t]),
        b = r.useCallback(() => {
            s()(void 0 !== x, 'User must be logged in to decline a link request'),
                (0, o.ZDy)(async () => {
                    let { default: e } = await n.e('69015').then(n.bind(n, 247265));
                    return (n) =>
                        (0, i.jsx)(e, {
                            ...n,
                            currentUser: x,
                            otherUser: t
                        });
                });
        }, [x, t]);
    return (0, i.jsxs)('div', {
        className: f.container,
        children: [
            (0, i.jsx)('div', {
                className: f.details,
                children: (0, i.jsx)(g.Z, {
                    otherUser: t,
                    status: _.ne.PENDING
                })
            }),
            (0, i.jsx)('div', {
                className: f.actions,
                children: a
                    ? (0, i.jsx)(m.Z, {
                          icon: o.Dio,
                          className: f.__invalid_actionDeny,
                          tooltip: p.intl.string(p.t.e5iHmZ),
                          onClick: b
                      })
                    : (0, i.jsxs)(i.Fragment, {
                          children: [
                              h
                                  ? null
                                  : (0, i.jsx)(m.Z, {
                                        icon: o.dz2,
                                        className: f.__invalid_actionAccept,
                                        tooltip: p.intl.string(p.t.krWQZG),
                                        onClick: E
                                    }),
                              (0, i.jsx)(m.Z, {
                                  icon: o.Dio,
                                  className: f.__invalid_actionDeny,
                                  tooltip: p.intl.string(p.t.bBDeND),
                                  onClick: C
                              })
                          ]
                      })
            })
        ]
    });
}
