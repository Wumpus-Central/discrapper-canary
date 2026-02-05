"use strict";
n.d(t, { A: () => s }), n(321073);
var r = n(627968);
n(64700);
var i = n(397927),
    a = n(985018);
let s = {
    show(e) {
        let {
            title: t,
            body: s,
            confirmText: o,
            confirmVariant: l = "primary",
            cancelText: u,
            onConfirm: c,
            onCancel: d,
            onCloseCallback: _,
            contextKey: f,
        } = e;
        (0, i.mMO)(
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
                                    d?.(), await n.onClose();
                                },
                                variant: "secondary",
                            }),
                        i.push({
                            text: null != o ? o : a.intl.string(a.t.BddRzS),
                            onClick: async () => {
                                c?.(), await n.onClose();
                            },
                            variant: l,
                        }),
                        (0, r.jsx)(e, { ...n, size: "sm", title: t, subtitle: s, actions: i })
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
                cancelText: a.intl.string(a.t["ETE/oC"]),
                onCancel() {
                    t(!1);
                },
                ...e,
            });
        });
    },
};
