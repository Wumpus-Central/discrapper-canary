"use strict";
n.d(t, { A: () => a }), n(321073);
var r = n(627968);
n(64700);
var i = n(192308),
    s = n(985018);
let a = {
    show(e) {
        let {
            title: t,
            body: a,
            confirmText: o,
            confirmVariant: l = "primary",
            cancelText: u,
            onConfirm: d,
            onCancel: c,
            onCloseCallback: _,
            contextKey: f,
        } = e;
        (0, i.openModalLazy)(
            async () => {
                let { Modal: e } = await Promise.resolve().then(n.bind(n, 189213));
                return (n) => {
                    let i = [];
                    return (
                        null != u &&
                            "" !== u &&
                            i.push({
                                text: u,
                                onClick: async () => {
                                    c?.(), await n.onClose();
                                },
                                variant: "secondary",
                            }),
                        i.push({
                            text: null != o ? o : s.intl.string(s.t.BddRzS),
                            onClick: async () => {
                                d?.(), await n.onClose();
                            },
                            variant: l,
                        }),
                        (0, r.jsx)(e, { ...n, size: "sm", title: t, subtitle: a, actions: i })
                    );
                };
            },
            { onCloseCallback: _, contextKey: f },
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
