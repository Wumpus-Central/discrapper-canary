n.d(t, {
    B: () => _,
    y: () => p
});
var r = n(200651);
n(192379);
var i = n(278074),
    o = n(442837),
    a = n(481060),
    s = n(26033),
    l = n(594174),
    c = n(324745),
    u = n(388032);
function d(e, t, n) {
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
function f(e) {
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
                d(e, t, n[t]);
            });
    }
    return e;
}
function p(e) {
    return (0, i.EQ)(e)
        .when(s.dX, () => u.NW.string(u.t['4f8iur']))
        .when(s.y0, () => u.NW.string(u.t.yX2hNz))
        .when(s.kq, () => u.NW.string(u.t.oSs8en))
        .when(s.m9, () => u.NW.string(u.t.bK9GT0))
        .exhaustive();
}
function _(e) {
    let { user: t, entry: i, display: u, onAction: d, onClose: _ } = e,
        h = (0, c.Z)({ onClose: _ }),
        m = (0, o.e7)([l.default], () => l.default.getCurrentUser());
    if (t.id !== (null == m ? void 0 : m.id) || 'recent' !== u || !(0, s.Rh)(i)) return null;
    let g = () => {
        (0, a.ZDy)(async () => {
            let { default: e } = await n.e('26545').then(n.bind(n, 81596));
            return (n) =>
                (0, r.jsx)(
                    e,
                    f(
                        {
                            entry: i,
                            user: t,
                            onAction: d,
                            onOpenGameSettings: h
                        },
                        n
                    )
                );
        });
    };
    return (0, r.jsx)(a.sNh, {
        id: 'delete-entry-history',
        label: p(i),
        action: () => {
            null == d || d({ action: 'PRESS_DELETE_HISTORY_MENU_ITEM' }), g();
        },
        color: 'danger'
    });
}
