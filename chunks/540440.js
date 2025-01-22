r.d(n, {
    B: function () {
        return p;
    },
    y: function () {
        return f;
    }
});
var i = r(200651);
r(192379);
var a = r(278074),
    o = r(442837),
    s = r(481060),
    l = r(26033),
    u = r(594174),
    c = r(324745),
    d = r(388032);
function f(e) {
    return (0, a.EQ)(e)
        .when(l.dX, () => d.intl.string(d.t['4f8iur']))
        .when(l.y0, () => d.intl.string(d.t.yX2hNz))
        .when(l.kq, () => d.intl.string(d.t.oSs8en))
        .when(l.m9, () => d.intl.string(d.t.bK9GT0))
        .exhaustive();
}
function p(e) {
    let { user: n, entry: a, display: d, onAction: p, onClose: h } = e,
        _ = (0, c.Z)({ onClose: h }),
        m = (0, o.e7)([u.default], () => u.default.getCurrentUser());
    if (n.id !== (null == m ? void 0 : m.id) || 'live' === d || !(0, l.Rh)(a)) return null;
    let g = () => {
        (0, s.openModalLazy)(async () => {
            let { default: e } = await r.e('26545').then(r.bind(r, 81596));
            return (r) =>
                (0, i.jsx)(e, {
                    entry: a,
                    user: n,
                    onAction: p,
                    onOpenGameSettings: _,
                    ...r
                });
        });
    };
    return (0, i.jsx)(s.MenuItem, {
        id: 'delete-entry-history',
        label: f(a),
        action: () => {
            null == p || p({ action: 'PRESS_DELETE_HISTORY_MENU_ITEM' }), g();
        },
        color: 'danger'
    });
}
