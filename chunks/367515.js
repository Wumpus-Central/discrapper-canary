n.d(t, {
    B: function () {
        return h;
    }
});
var i = n(200651),
    r = n(192379),
    a = n(512722),
    s = n.n(a),
    l = n(399606),
    o = n(481060),
    c = n(594174),
    d = n(880257),
    u = n(631885),
    g = n(933970),
    m = n(340453),
    f = n(292352),
    p = n(388032),
    _ = n(659506);
function h(e) {
    let { user: t } = e,
        a = (0, d.Z)(),
        h = (0, u.VM)(),
        x = (0, l.e7)([c.default], () => c.default.getCurrentUser()),
        E = r.useCallback(() => {
            s()(void 0 !== x, 'User must be logged in to accept a link request'),
                (0, o.openModalLazy)(async () => {
                    let { default: e } = await n.e('59716').then(n.bind(n, 275370));
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
                (0, o.openModalLazy)(async () => {
                    let { default: e } = await n.e('958').then(n.bind(n, 4526));
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
                (0, o.openModalLazy)(async () => {
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
        className: _.container,
        children: [
            (0, i.jsx)('div', {
                className: _.details,
                children: (0, i.jsx)(m.Z, {
                    otherUser: t,
                    status: f.ne.PENDING
                })
            }),
            (0, i.jsx)('div', {
                className: _.actions,
                children: a
                    ? (0, i.jsx)(g.Z, {
                          icon: o.XSmallIcon,
                          className: _.__invalid_actionDeny,
                          tooltip: p.intl.string(p.t.e5iHmZ),
                          onClick: C
                      })
                    : (0, i.jsxs)(i.Fragment, {
                          children: [
                              h
                                  ? null
                                  : (0, i.jsx)(g.Z, {
                                        icon: o.CheckmarkLargeIcon,
                                        className: _.__invalid_actionAccept,
                                        tooltip: p.intl.string(p.t.krWQZG),
                                        onClick: E
                                    }),
                              (0, i.jsx)(g.Z, {
                                  icon: o.XSmallIcon,
                                  className: _.__invalid_actionDeny,
                                  tooltip: p.intl.string(p.t.bBDeND),
                                  onClick: b
                              })
                          ]
                      })
            })
        ]
    });
}
