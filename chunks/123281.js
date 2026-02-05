"use strict";
n.d(t, { q: () => a });
var r = n(627968);
n(64700);
var i = n(397927);
function a(e) {
    let { application: t, onConfirm: a, onCancel: s } = e;
    return (
        (0, i.mMO)(async () => {
            let { default: e } = await n.e("38435").then(n.bind(n, 130574));
            return (n) => (0, r.jsx)(e, { application: t, onConfirm: a, onCancel: s, ...n });
        }),
        Promise.resolve()
    );
}
