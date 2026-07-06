n.d(t, { D: () => s });
var a = n(627968),
    r = n(192308),
    l = n(174459),
    i = n(652215);
function s(e) {
    let { analyticsLocations: t, displayProfile: s, location: d } = e;
    null == d && (d = t[t.length - 1]),
        l.default.track(i.HAw.OPEN_MODAL, {
            type: "Tiered Tenure Badge Details",
            location_stack: t,
            location: d,
            source: d,
        }),
        (0, r.openModalLazy)(async () => {
            let { default: e } = await Promise.all([
                n.e("63252"),
                n.e("49092"),
                n.e("77333"),
                n.e("42489"),
                n.e("13052"),
                n.e("65836"),
                n.e("77641"),
            ]).then(n.bind(n, 384048));
            return (t) => (0, a.jsx)(e, { ...t, displayProfile: s });
        });
}
