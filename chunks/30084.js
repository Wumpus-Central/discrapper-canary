"use strict";
n.d(t, { D: () => s });
var a = n(627968),
    r = n(192308),
    i = n(954571),
    l = n(652215);
let s = (e) => {
    let { analyticsLocations: t, displayProfile: s, location: o } = e;
    null == o && (o = t[t.length - 1]),
        i.default.track(l.HAw.OPEN_MODAL, {
            type: "Tiered Tenure Badge Details",
            location_stack: t,
            location: o,
            source: o,
        }),
        (0, r.openModalLazy)(async () => {
            let { default: e } = await n.e("77641").then(n.bind(n, 384048));
            return (t) => (0, a.jsx)(e, { ...t, displayProfile: s });
        });
};
