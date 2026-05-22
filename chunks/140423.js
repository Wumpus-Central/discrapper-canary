"use strict";
n.d(t, { R: () => s });
var i = n(627968);
n(64700);
var r = n(192308);
let s = (e) => {
    let { clips: t, onBeforeDelete: s, onAfterDelete: a } = e;
    (0, r.openModalLazy)(
        async () => {
            let { default: e } = await n.e("13367").then(n.bind(n, 223818));
            return (n) =>
                (0, i.jsx)(e, {
                    clips: t,
                    ...n,
                    onBeforeDelete: s,
                    onAfterDelete: async () => {
                        await n.onClose(), a?.();
                    },
                });
        },
        { stackingBehavior: "stack" },
    );
};
