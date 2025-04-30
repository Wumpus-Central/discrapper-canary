n.d(t, {
    H: () => c,
    V: () => u
});
var r = n(200651);
n(192379);
var i = n(481060),
    l = n(626135),
    o = n(687683),
    a = n(981631);
function s(e) {
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
                var r;
                (r = n[t]),
                    t in e
                        ? Object.defineProperty(e, t, {
                              value: r,
                              enumerable: !0,
                              configurable: !0,
                              writable: !0
                          })
                        : (e[t] = r);
            });
    }
    return e;
}
function c(e) {
    let { channelId: t, onConfirm: c, onCancel: u } = e;
    l.default.track(a.rMx.OPEN_MODAL, {
        type: o.t9,
        channel_id: t
    }),
        (0, i.ZDy)(async () => {
            let { default: e } = await n.e('4117').then(n.bind(n, 217723));
            return (t) =>
                (0, r.jsx)(
                    e,
                    s(
                        {
                            onConfirm: c,
                            onDismiss: u
                        },
                        t
                    )
                );
        });
}
function u(e) {
    let { onConfirm: t, onCancel: l } = e;
    (0, i.ZDy)(async () => {
        let { default: e } = await n.e('7649').then(n.bind(n, 797464));
        return (n) =>
            (0, r.jsx)(
                e,
                s(
                    {
                        onConfirm: t,
                        onDismiss: l
                    },
                    n
                )
            );
    });
}
