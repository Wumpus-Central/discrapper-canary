t.d(n, { Zy: () => s, cT: () => u, ih: () => a });
var r = t(627968);
t(64700);
var i = t(192308);
function l(e) {
    return new Promise((n) => {
        (0, i.openModalLazy)(() =>
            e(
                () => {
                    n(!0);
                },
                (e) => (n(!1), e()),
            ),
        );
    });
}
let a = (e) =>
        l(async (n, i) => {
            let { default: l } = await t.e("6322").then(t.bind(t, 49065));
            return (t) =>
                (0, r.jsx)(l, {
                    ...t,
                    ruleName: e,
                    onConfirm: n,
                    onClose: () => i(t.onClose),
                    onCancel: () => i(t.onClose),
                });
        }),
    s = (e, n) =>
        l(async (i, l) => {
            let { default: a } = await t.e("78785").then(t.bind(t, 92696));
            return (t) =>
                (0, r.jsx)(a, {
                    ...t,
                    ruleName: e,
                    keyword: n,
                    onConfirm: i,
                    onClose: () => l(t.onClose),
                    onCancel: () => l(t.onClose),
                });
        }),
    u = (e) => (n) =>
        l(async (i, l) => {
            let { default: a } = await t.e("99979").then(t.bind(t, 146502)),
                s = () => {
                    n(), i();
                };
            return (n) =>
                (0, r.jsx)(a, {
                    ruleName: e,
                    ...n,
                    onConfirm: s,
                    onClose: () => l(n.onClose),
                    onCancel: () => l(n.onClose),
                });
        });
