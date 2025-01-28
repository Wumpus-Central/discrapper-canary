n.d(t, {
    u: function () {
        return p;
    }
});
var i = n(200651),
    r = n(192379),
    s = n(512722),
    a = n.n(s),
    l = n(399606),
    o = n(481060),
    c = n(594174),
    d = n(933970),
    u = n(340453),
    m = n(292352),
    g = n(388032),
    h = n(659506);
function p(e) {
    let { user: t } = e,
        s = (0, l.e7)([c.default], () => c.default.getCurrentUser()),
        p = r.useCallback(() => {
            a()(void 0 !== s, 'User must be logged in to accept a link request'),
                (0, o.openModalLazy)(async () => {
                    let { default: e } = await n.e('50872').then(n.bind(n, 442673));
                    return (n) =>
                        (0, i.jsx)(e, {
                            ...n,
                            currentUser: s,
                            otherUser: t
                        });
                });
        }, [s, t]);
    return (0, i.jsxs)('div', {
        className: h.container,
        children: [
            (0, i.jsx)('div', {
                className: h.details,
                children: (0, i.jsx)(u.Z, {
                    otherUser: t,
                    status: m.ne.ACTIVE
                })
            }),
            (0, i.jsx)('div', {
                className: h.actions,
                children: (0, i.jsx)(d.Z, {
                    icon: o.XSmallIcon,
                    tooltip: g.intl.string(g.t.l20ZZm),
                    onClick: p
                })
            })
        ]
    });
}
