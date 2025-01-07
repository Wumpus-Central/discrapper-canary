n.d(t, {
    u: function () {
        return p;
    }
});
var i = n(200651),
    r = n(192379),
    a = n(512722),
    s = n.n(a),
    l = n(399606),
    o = n(481060),
    c = n(594174),
    d = n(933970),
    u = n(340453),
    g = n(292352),
    m = n(388032),
    f = n(659506);
function p(e) {
    let { user: t } = e,
        a = (0, l.e7)([c.default], () => c.default.getCurrentUser()),
        p = r.useCallback(() => {
            s()(void 0 !== a, 'User must be logged in to accept a link request'),
                (0, o.openModalLazy)(async () => {
                    let { default: e } = await n.e('50872').then(n.bind(n, 442673));
                    return (n) =>
                        (0, i.jsx)(e, {
                            ...n,
                            currentUser: a,
                            otherUser: t
                        });
                });
        }, [a, t]);
    return (0, i.jsxs)('div', {
        className: f.container,
        children: [
            (0, i.jsx)('div', {
                className: f.details,
                children: (0, i.jsx)(u.Z, {
                    otherUser: t,
                    status: g.ne.ACTIVE
                })
            }),
            (0, i.jsx)('div', {
                className: f.actions,
                children: (0, i.jsx)(d.Z, {
                    icon: o.XSmallIcon,
                    className: f.__invalid_actionDeny,
                    tooltip: m.intl.string(m.t.l20ZZm),
                    onClick: p
                })
            })
        ]
    });
}
