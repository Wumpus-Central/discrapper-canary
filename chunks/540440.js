n.d(t, {
    B: () => p,
    y: () => f,
});
var r = n(54381);
n(473749);
var i = n(442837),
    a = n(481060),
    o = n(26033),
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
                  writable: !0,
              })
            : (e[t] = n),
        e
    );
}
function d(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            r = Object.keys(n);
        "function" == typeof Object.getOwnPropertySymbols &&
            (r = r.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                }),
            )),
            r.forEach(function (t) {
                u(e, t, n[t]);
            });
    }
    return e;
}
function f(e) {
    return (0, o.dX)(e)
        ? c.intl.string(c.t["4f8iut"])
        : (0, o.y0)(e)
          ? c.intl.string(c.t.yX2hNy)
          : (0, o.kq)(e)
            ? c.intl.string(c.t.oSs8eg)
            : c.intl.string(c.t.bK9GT1);
}
function p(e) {
    let { user: t, entry: c, display: u, onAction: p } = e,
        _ = (0, l.Z)(),
        m = (0, i.e7)([s.default], () => s.default.getCurrentUser());
    if (t.id !== (null == m ? void 0 : m.id) || "recent" !== u || !(0, o.Rh)(c)) return null;
    let h = () => {
        (0, a.ZDy)(async () => {
            let { default: e } = await Promise.all([n.e("62880"), n.e("26545")]).then(n.bind(n, 81596));
            return (n) =>
                (0, r.jsx)(
                    e,
                    d(
                        {
                            entry: c,
                            user: t,
                            onAction: p,
                            onOpenGameSettings: _,
                        },
                        n,
                    ),
                );
        });
    };
    return (0, r.jsx)(a.sNh, {
        id: "delete-entry-history",
        label: f(c),
        action: () => {
            null == p || p({ action: "PRESS_DELETE_HISTORY_MENU_ITEM" }), h();
        },
        color: "danger",
    });
}
