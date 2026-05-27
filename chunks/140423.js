l.d(t, { R: () => d });
var s = l(627968);
l(64700);
var r = l(192308);
let d = (e) => {
    let { clips: t, onBeforeDelete: d, onAfterDelete: n } = e;
    (0, r.openModalLazy)(
        async () => {
            let { default: e } = await l.e("13367").then(l.bind(l, 223818));
            return (l) =>
                (0, s.jsx)(e, {
                    clips: t,
                    ...l,
                    onBeforeDelete: d,
                    onAfterDelete: async () => {
                        await l.onClose(), n?.();
                    },
                });
        },
        { stackingBehavior: "stack" },
    );
};
