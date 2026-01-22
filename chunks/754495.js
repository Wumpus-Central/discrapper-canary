n.d(t, {
    W: () => f,
    s: () => p,
});
var r = n(627968);
n(64700);
var i = n(311907),
    a = n(397927),
    s = n(20805),
    o = n(287809),
    l = n(301736),
    c = n(985018);
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
    return (0, s.zD)(e)
        ? c.intl.string(c.t["4f8iut"])
        : (0, s.Lf)(e)
          ? c.intl.string(c.t.yX2hNy)
          : (0, s.fe)(e)
            ? c.intl.string(c.t.oSs8eg)
            : c.intl.string(c.t.bK9GT1);
}
function p(e) {
    let { user: t, entry: c, display: u, onAction: p } = e,
        _ = (0, l.A)(),
        h = (0, i.bG)([o.default], () => o.default.getCurrentUser());
    if (t.id !== (null == h ? void 0 : h.id) || "recent" !== u || !(0, s.$R)(c)) return null;
    let m = () => {
        (0, a.mMO)(async () => {
            let { default: e } = await Promise.all([n.e("10117"), n.e("36946")]).then(n.bind(n, 839785));
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
    return (0, r.jsx)(a.Drp, {
        id: "delete-entry-history",
        label: f(c),
        action: () => {
            null == p || p({ action: "PRESS_DELETE_HISTORY_MENU_ITEM" }), m();
        },
        color: "danger",
    });
}
