n.d(t, {
    H: () => c,
    V: () => u,
});
var i = n(54381);
n(473749);
var r = n(481060),
    l = n(626135),
    a = n(687683),
    o = n(981631);
function s(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            i = Object.keys(n);
        "function" == typeof Object.getOwnPropertySymbols &&
            (i = i.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                }),
            )),
            i.forEach(function (t) {
                var i;
                (i = n[t]),
                    t in e
                        ? Object.defineProperty(e, t, {
                              value: i,
                              enumerable: !0,
                              configurable: !0,
                              writable: !0,
                          })
                        : (e[t] = i);
            });
    }
    return e;
}
function c(e) {
    let { channelId: t, onConfirm: c, onCancel: u } = e;
    l.default.track(o.rMx.OPEN_MODAL, {
        type: a.t9,
        channel_id: t,
    }),
        (0, r.ZDy)(async () => {
            let { default: e } = await n.e("4117").then(n.bind(n, 217723));
            return (t) =>
                (0, i.jsx)(
                    e,
                    s(
                        {
                            onConfirm: c,
                            onDismiss: u,
                        },
                        t,
                    ),
                );
        });
}
function u(e) {
    let { onConfirm: t, onCancel: l } = e;
    (0, r.ZDy)(async () => {
        let { default: e } = await n.e("7649").then(n.bind(n, 797464));
        return (n) =>
            (0, i.jsx)(
                e,
                s(
                    {
                        onConfirm: t,
                        onDismiss: l,
                    },
                    n,
                ),
            );
    });
}
