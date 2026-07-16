"use strict";
n.d(t, { A: () => s }), n(321073);
var i = n(627968);
n(64700);
var r = n(192308),
    a = n(375708);
let s = {
    show(e) {
        let {
            title: t,
            body: s,
            confirmText: l,
            confirmVariant: o = "primary",
            cancelText: d,
            onConfirm: c,
            onCancel: u,
            onCloseCallback: _,
            contextKey: E,
        } = e;
        (0, r.openModalLazy)(
            async () => {
                let { Modal: e } = await Promise.resolve().then(n.bind(n, 189213));
                return function (n) {
                    let r = [];
                    return (
                        null != d &&
                            "" !== d &&
                            r.push({
                                text: d,
                                onClick: async () => {
                                    u?.(), await n.onClose();
                                },
                                variant: "secondary",
                            }),
                        r.push({
                            text: null != l ? l : a.intl.string(a.t.BddRzS),
                            onClick: async () => {
                                c?.(), await n.onClose();
                            },
                            variant: o,
                        }),
                        (0, i.jsx)(e, { ...n, size: "sm", title: t, subtitle: s, actions: r })
                    );
                };
            },
            { onCloseCallback: _, contextKey: E },
        );
    },
    close() {},
    confirm(e) {
        return new Promise((t) => {
            this.show({
                onConfirm() {
                    t(!0);
                },
                cancelText: a.intl.string(a.t["ETE/oC"]),
                onCancel() {
                    t(!1);
                },
                ...e,
            });
        });
    },
};
