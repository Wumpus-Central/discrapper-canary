"use strict";
n.d(t, { Zy: () => a, cT: () => c, ih: () => l });
var i = n(627968);
n(64700);
var r = n(397927);
function s(e) {
    return new Promise((t) => {
        (0, r.mMO)(() =>
            e(
                () => {
                    t(!0);
                },
                (e) => (t(!1), e()),
            ),
        );
    });
}
let l = (e) =>
        s(async (t, r) => {
            let { default: s } = await n.e("6322").then(n.bind(n, 49065));
            return (n) =>
                (0, i.jsx)(s, {
                    ...n,
                    ruleName: e,
                    onConfirm: t,
                    onClose: () => r(n.onClose),
                    onCancel: () => r(n.onClose),
                });
        }),
    a = (e, t) =>
        s(async (r, s) => {
            let { default: l } = await n.e("78785").then(n.bind(n, 92696));
            return (n) =>
                (0, i.jsx)(l, {
                    ...n,
                    ruleName: e,
                    keyword: t,
                    onConfirm: r,
                    onClose: () => s(n.onClose),
                    onCancel: () => s(n.onClose),
                });
        }),
    c = (e) => (t) =>
        s(async (r, s) => {
            let { default: l } = await n.e("99979").then(n.bind(n, 146502)),
                a = () => {
                    t(), r();
                };
            return (t) =>
                (0, i.jsx)(l, {
                    ruleName: e,
                    ...t,
                    onConfirm: a,
                    onClose: () => s(t.onClose),
                    onCancel: () => s(t.onClose),
                });
        });
