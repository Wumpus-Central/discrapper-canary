l.d(t, { d: () => s });
var n = l(627968),
    a = l(192308),
    i = l(294454);
let s = (e) => {
    let { sku: t, guildId: s, source: r, analyticsLocations: o, analyticsContext: d } = e;
    (0, a.openModalLazy)(
        async () => {
            let { default: e } = await Promise.all([l.e("96758"), l.e("79133"), l.e("17530")]).then(l.bind(l, 763375));
            return (l) =>
                (0, n.jsx)(e, { ...l, sku: t, guildId: s, source: r, analyticsLocations: o, analyticsContext: d });
        },
        { stackingBehavior: "stack", modalKey: i.aU },
    );
};
