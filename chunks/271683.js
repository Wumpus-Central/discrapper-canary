"use strict";
n.d(t, { A: () => s });
var i = n(627968),
    r = n(192308),
    a = n(136523);
function s(e) {
    let { channel: t, sourceAnalyticsLocations: s } = e;
    (0, r.openModalLazy)(
        async () => {
            let { default: e } = await Promise.resolve().then(n.bind(n, 136523));
            return (n) => (0, i.jsx)(e, { channel: t, sourceAnalyticsLocations: s, ...n });
        },
        { modalKey: a.m },
    );
}
