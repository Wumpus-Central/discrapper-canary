n.d(t, { D: () => s });
var i = n(627968),
    r = n(192308),
    l = n(174459),
    a = n(652215);
function s(e) {
    let { analyticsLocations: t, displayProfile: s, location: o } = e;
    null == o && (o = t[t.length - 1]),
        l.default.track(a.HAw.OPEN_MODAL, {
            type: "Tiered Tenure Badge Details",
            location_stack: t,
            location: o,
            source: o,
        }),
        (0, r.openModalLazy)(async () => {
            let { default: e } = await Promise.all([n.e("63252"), n.e("49092"), n.e("63874"), n.e("77641")]).then(
                n.bind(n, 384048),
            );
            return (t) => (0, i.jsx)(e, { ...t, displayProfile: s });
        });
}
