"use strict";
n.d(t, { D: () => o });
var r = n(627968),
    i = n(397927),
    a = n(954571),
    s = n(652215);
let o = (e) => {
    let { analyticsLocations: t, displayProfile: o, location: l } = e;
    null == l && (l = t[t.length - 1]),
        a.default.track(s.HAw.OPEN_MODAL, {
            type: "Tiered Tenure Badge Details",
            location_stack: t,
            location: l,
            source: l,
        }),
        (0, i.mMO)(async () => {
            let { default: e } = await n.e("77641").then(n.bind(n, 384048));
            return (t) => (0, r.jsx)(e, { ...t, displayProfile: o });
        });
};
