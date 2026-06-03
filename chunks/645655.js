l.d(t, { A: () => r });
var a = l(627968),
    n = l(192308),
    i = l(116671);
function r(e, t) {
    let { clips: r, onBeforeDelete: s, onAfterDelete: o } = t;
    if (e?.shiftKey) {
        s?.(), r.forEach((e) => (0, i.oH)(e.filepath, e.id)), o?.();
        return;
    }
    (0, n.openModalLazy)(
        async () => {
            let { default: e } = await l.e("13367").then(l.bind(l, 223818));
            return (t) =>
                (0, a.jsx)(e, {
                    clips: r,
                    ...t,
                    onBeforeDelete: s,
                    onAfterDelete: async () => {
                        await t.onClose(), o?.();
                    },
                });
        },
        { stackingBehavior: "stack" },
    );
}
