l.d(t, { A: () => r });
var a = l(477900),
    n = l(192308),
    i = l(614584);
function r(e, t) {
    let { clips: r, onBeforeDelete: s, onAfterDelete: o } = t;
    if (e?.shiftKey) {
        (s?.(), r.forEach((e) => (0, i.oH)(e)), o?.());
        return;
    }
    (0, n.openModalLazy)(
        async () => {
            let { default: e } = await l.e("913367").then(l.bind(l, 223818));
            return (t) =>
                (0, a.jsx)(e, {
                    clips: r,
                    ...t,
                    onBeforeDelete: s,
                    onAfterDelete: async () => {
                        (await t.onClose(), o?.());
                    },
                });
        },
        { stackingBehavior: "stack" },
    );
}
