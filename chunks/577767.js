"use strict";
n.d(t, { k: () => l, x: () => u });
var r = n(627968),
    i = n(397927),
    s = n(203982),
    a = n(652215);
let o = "gorilla-confirm-close";
function l(e) {
    (0, i.kBI)(o) ||
        (0, i.mMO)(
            async () => {
                let { default: t } = await n.e("58485").then(n.bind(n, 610164));
                return (n) => (0, r.jsx)(t, { ...n, onConfirm: e });
            },
            { modalKey: o },
        );
}
function u(e) {
    return {
        POP_LAYER: {
            binds: ["esc"],
            comboKeysBindGlobal: !0,
            action: () => (s._.hasSubscribers(a.jej.MODAL_CLOSE) ? s._.dispatch(a.jej.MODAL_CLOSE) : l(e), !1),
        },
    };
}
