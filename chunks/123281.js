"use strict";
n.d(t, { q: () => s });
var r = n(627968);
n(64700);
var i = n(192308);
function s(e) {
    let { application: t, onConfirm: s, onCancel: a } = e;
    return (
        (0, i.openModalLazy)(async () => {
            let { default: e } = await n.e("38435").then(n.bind(n, 130574));
            return (n) => (0, r.jsx)(e, { application: t, onConfirm: s, onCancel: a, ...n });
        }),
        Promise.resolve()
    );
}
