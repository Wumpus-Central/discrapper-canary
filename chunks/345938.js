"use strict";
n.d(t, { d: () => r });
var a = n(627968),
    i = n(192308),
    l = n(294454);
let r = (e) => {
    let { sku: t, guildId: r, source: s, analyticsLocations: c, analyticsContext: o } = e;
    (0, i.openModalLazy)(
        async () => {
            let { default: e } = await Promise.all([n.e("96758"), n.e("922"), n.e("10404")]).then(n.bind(n, 763375));
            return (n) =>
                (0, a.jsx)(e, { ...n, sku: t, guildId: r, source: s, analyticsLocations: c, analyticsContext: o });
        },
        { stackingBehavior: "stack", modalKey: l.aU },
    );
};
