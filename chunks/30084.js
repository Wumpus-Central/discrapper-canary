n.d(t, { D: () => i });
var a = n(477900),
    r = n(192308),
    l = n(174459),
    s = n(652215);
function i(e) {
    let { analyticsLocations: t, displayProfile: i, location: d } = e;
    null == d && (d = t[t.length - 1]),
        l.default.track(s.HAw.OPEN_MODAL, {
            type: "Tiered Tenure Badge Details",
            location_stack: t,
            location: d,
            source: d,
        }),
        (0, r.openModalLazy)(async () => {
            let { default: e } = await Promise.all([
                n.e("628902"),
                n.e("101801"),
                n.e("77333"),
                n.e("142489"),
                n.e("313052"),
                n.e("165836"),
                n.e("277641"),
            ]).then(n.bind(n, 384048));
            return (t) => (0, a.jsx)(e, { ...t, displayProfile: i });
        });
}
