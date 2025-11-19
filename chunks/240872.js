n.d(t, { Z: () => u }), n(539854);
var r = n(54381);
n(473749);
var i = n(481060),
    a = n(388032);
function o(e, t, n) {
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
function s(e) {
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
                o(e, t, n[t]);
            });
    }
    return e;
}
function l(e, t) {
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
function c(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : l(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
let u = {
    show(e) {
        let {
            title: t,
            body: o,
            confirmText: l,
            confirmVariant: u = "primary",
            cancelText: d,
            onConfirm: f,
            onCancel: _,
            onCloseCallback: p,
            contextKey: h,
        } = e;
        (0, i.ZDy)(
            async () => {
                let { Modal: e } = await Promise.resolve().then(n.bind(n, 775086));
                return (n) => {
                    let i = [];
                    return (
                        null != d &&
                            "" !== d &&
                            i.push({
                                text: d,
                                onClick: async () => {
                                    null == _ || _(), await n.onClose();
                                },
                                variant: "secondary",
                            }),
                        i.push({
                            text: null != l ? l : a.intl.string(a.t.BddRzS),
                            onClick: async () => {
                                null == f || f(), await n.onClose();
                            },
                            variant: u,
                        }),
                        (0, r.jsx)(
                            e,
                            c(s({}, n), {
                                size: "sm",
                                title: t,
                                subtitle: o,
                                actions: i,
                            }),
                        )
                    );
                };
            },
            {
                onCloseCallback: p,
                contextKey: h,
            },
        );
    },
    close() {},
    confirm(e) {
        return new Promise((t) => {
            this.show(
                s(
                    {
                        onConfirm() {
                            t(!0);
                        },
                        cancelText: a.intl.string(a.t["ETE/oC"]),
                        onCancel() {
                            t(!1);
                        },
                    },
                    e,
                ),
            );
        });
    },
};
