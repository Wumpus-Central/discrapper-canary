l.d(t, { A: () => s });
var a = l(477900),
    n = l(192308),
    i = l(614584);
function s(e, t) {
    let { clips: s, onBeforeDelete: r, onAfterDelete: o } = t;
    if (e?.shiftKey) {
        (r?.(), s.forEach((e) => (0, i.oH)(e)), o?.());
        return;
    }
    (0, n.openModalLazy)(
        async () => {
            let { default: e } = await l.e("913367").then(l.bind(l, 223818));
            return (t) =>
                (0, a.jsx)(e, {
                    clips: s,
                    ...t,
                    onBeforeDelete: r,
                    onAfterDelete: async () => {
                        (await t.onClose(), o?.());
                    },
                });
        },
        { stackingBehavior: "stack" },
    );
}
