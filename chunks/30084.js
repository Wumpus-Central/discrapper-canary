a.d(t, { D: () => s });
var n = a(627968),
    l = a(192308),
    r = a(954571),
    i = a(652215);
let s = (e) => {
    let { analyticsLocations: t, displayProfile: s, location: o } = e;
    null == o && (o = t[t.length - 1]),
        r.default.track(i.HAw.OPEN_MODAL, {
            type: "Tiered Tenure Badge Details",
            location_stack: t,
            location: o,
            source: o,
        }),
        (0, l.openModalLazy)(async () => {
            let { default: e } = await a.e("77641").then(a.bind(a, 384048));
            return (t) => (0, n.jsx)(e, { ...t, displayProfile: s });
        });
};
