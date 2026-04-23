n.d(t, { B: () => s });
var r = n(627968);
n(64700);
var i = n(192308),
    a = n(954571),
    o = n(646363),
    l = n(652215);
function s(e) {
    let { onConfirm: t, onFinally: s } = e;
    a.default.track(l.HAw.OPEN_MODAL, { type: o.C }),
        (0, i.openModalLazy)(async () => {
            let { default: e } = await n.e("52049").then(n.bind(n, 691464));
            return (n) => {
                let { onClose: i, ...a } = n;
                return (0, r.jsx)(e, {
                    onConfirm: t,
                    onClose: async () => {
                        await i(), s?.();
                    },
                    ...a,
                });
            };
        });
}
