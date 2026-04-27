"use strict";
r.d(t, { D: () => l });
var n = r(627968),
    i = r(192308),
    a = r(954571),
    s = r(652215);
let l = (e) => {
    let { analyticsLocations: t, displayProfile: l, location: o } = e;
    null == o && (o = t[t.length - 1]),
        a.default.track(s.HAw.OPEN_MODAL, {
            type: "Tiered Tenure Badge Details",
            location_stack: t,
            location: o,
            source: o,
        }),
        (0, i.openModalLazy)(async () => {
            let { default: e } = await r.e("77641").then(r.bind(r, 384048));
            return (t) => (0, n.jsx)(e, { ...t, displayProfile: l });
        });
};
