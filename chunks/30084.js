n.d(t, { D: () => o });
var a = n(627968),
    i = n(192308),
    l = n(954571),
    r = n(652215);
let o = (e) => {
    let { analyticsLocations: t, displayProfile: o, location: s } = e;
    null == s && (s = t[t.length - 1]),
        l.default.track(r.HAw.OPEN_MODAL, {
            type: "Tiered Tenure Badge Details",
            location_stack: t,
            location: s,
            source: s,
        }),
        (0, i.openModalLazy)(async () => {
            let { default: e } = await n.e("77641").then(n.bind(n, 384048));
            return (t) => (0, a.jsx)(e, { ...t, displayProfile: o });
        });
};
