n.d(t, {
    XN: () => u,
    af: () => o,
    gK: () => a
});
var r = n(200651);
n(192379);
var l = n(481060);
function i(e) {
    return new Promise((t) => {
        (0, l.ZDy)(() =>
            e(
                () => {
                    t(!0);
                },
                (e) => (t(!1), e())
            )
        );
    });
}
let a = (e) =>
        i(async (t, l) => {
            let { default: i } = await n.e('44462').then(n.bind(n, 478472));
            return (n) =>
                (0, r.jsx)(i, {
                    ...n,
                    ruleName: e,
                    onConfirm: t,
                    onClose: () => l(n.onClose),
                    onCancel: () => l(n.onClose)
                });
        }),
    u = (e, t) =>
        i(async (l, i) => {
            let { default: a } = await n.e('92575').then(n.bind(n, 601787));
            return (n) =>
                (0, r.jsx)(a, {
                    ...n,
                    ruleName: e,
                    keyword: t,
                    onConfirm: l,
                    onClose: () => i(n.onClose),
                    onCancel: () => i(n.onClose)
                });
        }),
    o = (e) => (t) =>
        i(async (l, i) => {
            let { default: a } = await n.e('83613').then(n.bind(n, 449675)),
                u = () => {
                    t(), l();
                };
            return (t) =>
                (0, r.jsx)(a, {
                    ruleName: e,
                    ...t,
                    onConfirm: u,
                    onClose: () => i(t.onClose),
                    onCancel: () => i(t.onClose)
                });
        });
