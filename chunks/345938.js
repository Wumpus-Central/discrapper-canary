"use strict";
n.d(t, { d: () => r });
var a = n(627968),
    l = n(397927),
    s = n(294454);
let r = (e) => {
    let { sku: t, guildId: r, source: i, analyticsLocations: o, analyticsContext: c } = e;
    (0, l.mMO)(
        async () => {
            let { default: e } = await Promise.all([n.e("96758"), n.e("43622"), n.e("31920")]).then(n.bind(n, 763375));
            return (n) =>
                (0, a.jsx)(e, { ...n, sku: t, guildId: r, source: i, analyticsLocations: o, analyticsContext: c });
        },
        { stackingBehavior: "stack", modalKey: s.aU },
    );
};
