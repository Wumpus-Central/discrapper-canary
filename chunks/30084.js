"use strict";
a.d(t, { D: () => s });
var r = a(627968),
    l = a(192308),
    n = a(954571),
    i = a(652215);
let s = (e) => {
    let { analyticsLocations: t, displayProfile: s, location: o } = e;
    null == o && (o = t[t.length - 1]),
        n.default.track(i.HAw.OPEN_MODAL, {
            type: "Tiered Tenure Badge Details",
            location_stack: t,
            location: o,
            source: o,
        }),
        (0, l.openModalLazy)(async () => {
            let { default: e } = await a.e("77641").then(a.bind(a, 384048));
            return (t) => (0, r.jsx)(e, { ...t, displayProfile: s });
        });
};
