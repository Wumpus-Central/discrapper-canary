"use strict";
n.d(t, { B: () => l });
var r = n(627968);
n(64700);
var i = n(397927),
    a = n(954571),
    s = n(646363),
    o = n(652215);
function l(e) {
    let { onConfirm: t } = e;
    a.default.track(o.HAw.OPEN_MODAL, { type: s.C }),
        (0, i.mMO)(async () => {
            let { default: e } = await n.e("52049").then(n.bind(n, 691464));
            return (n) => (0, r.jsx)(e, { onConfirm: t, ...n });
        });
}
