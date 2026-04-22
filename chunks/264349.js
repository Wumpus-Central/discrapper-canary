"use strict";
n.d(t, { Zy: () => a, cT: () => o, ih: () => s });
var i = n(627968);
n(64700);
var r = n(192308);
function l(e) {
    return new Promise((t) => {
        (0, r.openModalLazy)(() =>
            e(
                () => {
                    t(!0);
                },
                (e) => (t(!1), e()),
            ),
        );
    });
}
let s = (e) =>
        l(async (t, r) => {
            let { default: l } = await n.e("6322").then(n.bind(n, 49065));
            return (n) =>
                (0, i.jsx)(l, {
                    ...n,
                    ruleName: e,
                    onConfirm: t,
                    onClose: () => r(n.onClose),
                    onCancel: () => r(n.onClose),
                });
        }),
    a = (e, t) =>
        l(async (r, l) => {
            let { default: s } = await n.e("78785").then(n.bind(n, 92696));
            return (n) =>
                (0, i.jsx)(s, {
                    ...n,
                    ruleName: e,
                    keyword: t,
                    onConfirm: r,
                    onClose: () => l(n.onClose),
                    onCancel: () => l(n.onClose),
                });
        }),
    o = (e) => (t) =>
        l(async (r, l) => {
            let { default: s } = await n.e("99979").then(n.bind(n, 146502)),
                a = () => {
                    t(), r();
                };
            return (t) =>
                (0, i.jsx)(s, {
                    ruleName: e,
                    ...t,
                    onConfirm: a,
                    onClose: () => l(t.onClose),
                    onCancel: () => l(t.onClose),
                });
        });
