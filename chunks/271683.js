"use strict";
n.d(t, { A: () => a });
var i = n(627968),
    r = n(192308),
    s = n(136523);
function a(e) {
    let { channel: t, sourceAnalyticsLocations: a } = e;
    (0, r.openModalLazy)(
        async () => {
            let { default: e } = await Promise.resolve().then(n.bind(n, 136523));
            return (n) => (0, i.jsx)(e, { channel: t, sourceAnalyticsLocations: a, ...n });
        },
        { modalKey: s.m },
    );
}
