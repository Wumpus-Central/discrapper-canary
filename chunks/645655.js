var n = l(477900),
    a = l(192308),
    i = l(489496);
l.d(
    t,
    {},
    {
        A: function (e, t) {
            let { clips: r, onBeforeDelete: s, onAfterDelete: o } = t;
            if (e?.shiftKey) {
                (s?.(), r.forEach((e) => (0, i.oH)(e)), o?.());
                return;
            }
            (0, a.mM)(
                async () => {
                    let { default: e } = await l.e(913367).then(l.bind(l, 223818));
                    return (t) =>
                        (0, n.jsx)(e, {
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
        },
    },
);
