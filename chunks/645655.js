l.d(t, { A: () => s });
var a = l(627968),
    n = l(192308),
    i = l(607814);
function s(e, t) {
    let { clips: s, onBeforeDelete: r, onAfterDelete: c } = t;
    if (e?.shiftKey) {
        r?.(), s.forEach((e) => (0, i.oH)(e.filepath, e.id)), c?.();
        return;
    }
    (0, n.openModalLazy)(
        async () => {
            let { default: e } = await l.e("13367").then(l.bind(l, 223818));
            return (t) =>
                (0, a.jsx)(e, {
                    clips: s,
                    ...t,
                    onBeforeDelete: r,
                    onAfterDelete: async () => {
                        await t.onClose(), c?.();
                    },
                });
        },
        { stackingBehavior: "stack" },
    );
}
