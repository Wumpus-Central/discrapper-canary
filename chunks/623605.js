"use strict";
n.d(t, { B: () => l });
var r = n(627968);
n(64700);
var i = n(397927),
    s = n(954571),
    a = n(646363),
    o = n(652215);
function l(e) {
    let { onConfirm: t, onFinally: l } = e;
    s.default.track(o.HAw.OPEN_MODAL, { type: a.C }),
        (0, i.mMO)(async () => {
            let { default: e } = await n.e("52049").then(n.bind(n, 691464));
            return (n) => {
                let { onClose: i, ...s } = n;
                return (0, r.jsx)(e, {
                    onConfirm: t,
                    onClose: async () => {
                        await i(), l?.();
                    },
                    ...s,
                });
            };
        });
}
