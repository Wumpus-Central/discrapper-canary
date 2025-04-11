n.d(t, {
    B: () => _,
    y: () => f
});
var r = n(200651);
n(192379);
var i = n(442837),
    o = n(481060),
    a = n(26033),
    s = n(594174),
    l = n(324745),
    c = n(388032);
function u(e, t, n) {
    return (
        t in e
            ? Object.defineProperty(e, t, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0
              })
            : (e[t] = n),
        e
    );
}
function d(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            r = Object.keys(n);
        'function' == typeof Object.getOwnPropertySymbols &&
            (r = r.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                })
            )),
            r.forEach(function (t) {
                u(e, t, n[t]);
            });
    }
    return e;
}
function f(e) {
    return (0, a.dX)(e) ? c.NW.string(c.t['4f8iur']) : (0, a.y0)(e) ? c.NW.string(c.t.yX2hNz) : (0, a.kq)(e) ? c.NW.string(c.t.oSs8en) : c.NW.string(c.t.bK9GT0);
}
function _(e) {
    let { user: t, entry: c, display: u, onAction: _, onClose: p } = e,
        h = (0, l.Z)({ onClose: p }),
        m = (0, i.e7)([s.default], () => s.default.getCurrentUser());
    if (t.id !== (null == m ? void 0 : m.id) || 'recent' !== u || !(0, a.Rh)(c)) return null;
    let g = () => {
        (0, o.ZDy)(async () => {
            let { default: e } = await Promise.all([n.e('62880'), n.e('26545')]).then(n.bind(n, 81596));
            return (n) =>
                (0, r.jsx)(
                    e,
                    d(
                        {
                            entry: c,
                            user: t,
                            onAction: _,
                            onOpenGameSettings: h
                        },
                        n
                    )
                );
        });
    };
    return (0, r.jsx)(o.sNh, {
        id: 'delete-entry-history',
        label: f(c),
        action: () => {
            null == _ || _({ action: 'PRESS_DELETE_HISTORY_MENU_ITEM' }), g();
        },
        color: 'danger'
    });
}
