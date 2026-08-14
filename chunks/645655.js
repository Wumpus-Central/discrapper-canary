l.d(t, { A: () => s });
var n = l(477900),
    a = l(192308),
    i = l(539572);
function s(e, t) {
    let { clips: s, onBeforeDelete: r, onAfterDelete: c } = t;
    if (e?.shiftKey) {
        r?.(), s.forEach((e) => (0, i.oH)(e)), c?.();
        return;
    }
    (0, a.openModalLazy)(
        async () => {
            let { default: e } = await l.e("913367").then(l.bind(l, 223818));
            return (t) =>
                (0, n.jsx)(e, {
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
