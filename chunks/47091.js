n.d(t, { Z: () => h });
var r = n(200651),
    i = n(192379),
    o = n(481060),
    a = n(320582),
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
function _(e, t) {
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
function p(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : _(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
function h(e) {
    let { user: t } = e,
        d = (0, a.ML)(t.id),
        _ = l.ZP.useName(t),
        h = i.useCallback(
            (e) => {
                let { id: i, name: a } = e;
                (0, o.ZDy)(async () => {
                    let { ConfirmModal: e } = await Promise.resolve().then(n.bind(n, 481060));
                    return (n) =>
                        (0, r.jsx)(
                            e,
                            p(
                                f(
                                    {
                                        header: u.NW.formatToPlainString(u.t['GOFk9/'], { name: _ }),
                                        confirmText: u.NW.string(u.t['cY+Ooa']),
                                        cancelText: u.NW.string(u.t['ETE/oK']),
                                        onConfirm: () =>
                                            s.Z.removeFriend({
                                                userId: t.id,
                                                applicationId: i,
                                                location: 'Context Menu'
                                            })
                                    },
                                    n
                                ),
                                {
                                    children: (0, r.jsx)(o.Text, {
                                        variant: 'text-md/normal',
                                        children: u.NW.format(u.t.dsU5bm, {
                                            name: _,
                                            gameName: a
                                        })
                                    })
                                }
                            )
                        );
                });
            },
            [_, t]
        );
    return (0, c.Z)({
        user: t,
        gameRelationships: d,
        menuItemId: 'remove-game-friend',
        label: u.NW.string(u.t['RLcE6+']),
        onClick: h,
        color: 'danger'
    });
}
