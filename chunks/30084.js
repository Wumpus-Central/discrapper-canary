n.d(t, { D: () => i });
var a = n(477900),
    l = n(192308),
    r = n(174459),
    s = n(652215);
function i(e) {
    let { analyticsLocations: t, displayProfile: i, location: o } = e;
    null == o && (o = t[t.length - 1]),
        r.default.track(s.HAw.OPEN_MODAL, {
            type: "Tiered Tenure Badge Details",
            location_stack: t,
            location: o,
            source: o,
        }),
        (0, l.openModalLazy)(async () => {
            let { default: e } = await Promise.all([
                n.e("628902"),
                n.e("101801"),
                n.e("77333"),
                n.e("881379"),
                n.e("313052"),
                n.e("165836"),
                n.e("277641"),
            ]).then(n.bind(n, 384048));
            return (t) => (0, a.jsx)(e, { ...t, displayProfile: i });
        });
}
