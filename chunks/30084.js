"use strict";
n.d(t, { D: () => o });
var i = n(627968),
    r = n(192308),
    s = n(174459),
    a = n(652215);
let o = (e) => {
    let { analyticsLocations: t, displayProfile: o, location: l } = e;
    null == l && (l = t[t.length - 1]),
        s.default.track(a.HAw.OPEN_MODAL, {
            type: "Tiered Tenure Badge Details",
            location_stack: t,
            location: l,
            source: l,
        }),
        (0, r.openModalLazy)(async () => {
            let { default: e } = await Promise.all([
                n.e("18957"),
                n.e("49092"),
                n.e("77333"),
                n.e("63874"),
                n.e("77641"),
            ]).then(n.bind(n, 384048));
            return (t) => (0, i.jsx)(e, { ...t, displayProfile: o });
        });
};
