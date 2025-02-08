n.d(t, { B: () => p });
var i = n(200651),
    s = n(192379),
    r = n(512722),
    l = n.n(r),
    a = n(399606),
    o = n(481060),
    c = n(594174),
    d = n(880257),
    u = n(631885),
    m = n(933970),
    g = n(340453),
    h = n(292352),
    x = n(388032),
    _ = n(659506);
function p(e) {
    let { user: t } = e,
        r = (0, d.Z)(),
        p = (0, u.VM)(),
        E = (0, a.e7)([c.default], () => c.default.getCurrentUser()),
        C = s.useCallback(() => {
            l()(void 0 !== E, 'User must be logged in to accept a link request'),
                (0, o.ZDy)(async () => {
                    let { default: e } = await n.e('59716').then(n.bind(n, 275370));
                    return (n) =>
                        (0, i.jsx)(e, {
                            ...n,
                            currentUser: E,
                            otherUser: t
                        });
                });
        }, [E, t]),
        f = s.useCallback(() => {
            l()(void 0 !== E, 'User must be logged in to decline a link request'),
                (0, o.ZDy)(async () => {
                    let { default: e } = await n.e('958').then(n.bind(n, 4526));
                    return (n) =>
                        (0, i.jsx)(e, {
                            ...n,
                            currentUser: E,
                            otherUser: t
                        });
                });
        }, [E, t]),
        T = s.useCallback(() => {
            l()(void 0 !== E, 'User must be logged in to decline a link request'),
                (0, o.ZDy)(async () => {
                    let { default: e } = await n.e('69015').then(n.bind(n, 247265));
                    return (n) =>
                        (0, i.jsx)(e, {
                            ...n,
                            currentUser: E,
                            otherUser: t
                        });
                });
        }, [E, t]);
    return (0, i.jsxs)('div', {
        className: _.container,
        children: [
            (0, i.jsx)('div', {
                className: _.details,
                children: (0, i.jsx)(g.Z, {
                    otherUser: t,
                    status: h.ne.PENDING
                })
            }),
            (0, i.jsx)('div', {
                className: _.actions,
                children: r
                    ? (0, i.jsx)(m.Z, {
                          icon: o.Dio,
                          className: _.__invalid_actionDeny,
                          tooltip: x.intl.string(x.t.e5iHmZ),
                          onClick: T
                      })
                    : (0, i.jsxs)(i.Fragment, {
                          children: [
                              p
                                  ? null
                                  : (0, i.jsx)(m.Z, {
                                        icon: o.dz2,
                                        className: _.__invalid_actionAccept,
                                        tooltip: x.intl.string(x.t.krWQZG),
                                        onClick: C
                                    }),
                              (0, i.jsx)(m.Z, {
                                  icon: o.Dio,
                                  className: _.__invalid_actionDeny,
                                  tooltip: x.intl.string(x.t.bBDeND),
                                  onClick: f
                              })
                          ]
                      })
            })
        ]
    });
}
