n.d(t, { Z: () => m });
var r = n(54381),
    i = n(473749),
    a = n(481060),
    o = n(320582),
    s = n(298213),
    l = n(51144),
    c = n(749302),
    u = n(388032);
function d(e, t, n) {
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
function f(e) {
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
                d(e, t, n[t]);
            });
    }
    return e;
}
function p(e, t) {
    var n = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
        var r = Object.getOwnPropertySymbols(e);
        t &&
            (r = r.filter(function (t) {
                return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            n.push.apply(n, r);
    }
    return n;
}
function _(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : p(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
function m(e) {
    let { user: t } = e,
        d = (0, o.ML)(t.id),
        p = l.ZP.useName(t),
        m = i.useCallback(
            (e) => {
                let { id: i, name: o } = e;
                (0, a.ZDy)(async () => {
                    let { ConfirmModal: e } = await Promise.resolve().then(n.bind(n, 481060));
                    return (n) =>
                        (0, r.jsx)(
                            e,
                            _(
                                f(
                                    {
                                        header: u.intl.formatToPlainString(u.t["GOFk9+"], { name: p }),
                                        confirmText: u.intl.string(u.t["cY+Oob"]),
                                        cancelText: u.intl.string(u.t["ETE/oC"]),
                                        onConfirm: () =>
                                            s.Z.removeFriend({
                                                userId: t.id,
                                                applicationId: i,
                                                location: "Context Menu",
                                            }),
                                    },
                                    n,
                                ),
                                {
                                    children: (0, r.jsx)(a.Text, {
                                        variant: "text-md/normal",
                                        children: u.intl.format(u.t.dsU5bl, {
                                            name: p,
                                            gameName: o,
                                        }),
                                    }),
                                },
                            ),
                        );
                });
            },
            [p, t],
        );
    return (0, c.Z)({
        user: t,
        gameRelationships: d,
        menuItemId: "remove-game-friend",
        label: u.intl.string(u.t.RLcE6x),
        onClick: m,
        color: "danger",
    });
}
