"use strict";
n.d(t, { A: () => a }), n(321073);
var i = n(627968);
n(64700);
var r = n(192308),
    s = n(375708);
let a = {
    show(e) {
        let {
            title: t,
            body: a,
            confirmText: o,
            confirmVariant: l = "primary",
            cancelText: u,
            onConfirm: c,
            onCancel: d,
            onCloseCallback: _,
            contextKey: h,
        } = e;
        (0, r.openModalLazy)(
            async () => {
                let { Modal: e } = await Promise.resolve().then(n.bind(n, 189213));
                return (n) => {
                    let r = [];
                    return (
                        null != u &&
                            "" !== u &&
                            r.push({
                                text: u,
                                onClick: async () => {
                                    d?.(), await n.onClose();
                                },
                                variant: "secondary",
                            }),
                        r.push({
                            text: null != o ? o : s.intl.string(s.t.BddRzS),
                            onClick: async () => {
                                c?.(), await n.onClose();
                            },
                            variant: l,
                        }),
                        (0, i.jsx)(e, { ...n, size: "sm", title: t, subtitle: a, actions: r })
                    );
                };
            },
            { onCloseCallback: _, contextKey: h },
        );
    },
    close() {},
    confirm(e) {
        return new Promise((t) => {
            this.show({
                onConfirm() {
                    t(!0);
                },
                cancelText: s.intl.string(s.t["ETE/oC"]),
                onCancel() {
                    t(!1);
                },
                ...e,
            });
        });
    },
};
