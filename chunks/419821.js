n.d(t, { u: () => p });
var i = n(200651),
    r = n(192379),
    a = n(512722),
    s = n.n(a),
    l = n(399606),
    o = n(481060),
    c = n(594174),
    d = n(933970),
    u = n(340453),
    m = n(292352),
    g = n(388032),
    _ = n(586372);
function p(e) {
    let { user: t } = e,
        a = (0, l.e7)([c.default], () => c.default.getCurrentUser()),
        p = r.useCallback(() => {
            s()(void 0 !== a, 'User must be logged in to accept a link request'),
                (0, o.ZDy)(async () => {
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
        className: _.container,
        children: [
            (0, i.jsx)('div', {
                className: _.details,
                children: (0, i.jsx)(u.Z, {
                    otherUser: t,
                    status: m.ne.ACTIVE
                })
            }),
            (0, i.jsx)('div', {
                className: _.actions,
                children: (0, i.jsx)(d.Z, {
                    icon: o.Dio,
                    tooltip: g.intl.string(g.t.l20ZZm),
                    onClick: p
                })
            })
        ]
    });
}
