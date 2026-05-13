t.d(a, { D: () => E });
var s = t(627968),
    c = t(192308),
    d = t(174459),
    n = t(652215);
let E = (e) => {
    let { analyticsLocations: a, displayProfile: E, location: _ } = e;
    null == _ && (_ = a[a.length - 1]),
        d.default.track(n.HAw.OPEN_MODAL, {
            type: "Tiered Tenure Badge Details",
            location_stack: a,
            location: _,
            source: _,
        }),
        (0, c.openModalLazy)(async () => {
            let { default: e } = await Promise.all([
                t.e("55998"),
                t.e("49092"),
                t.e("77333"),
                t.e("63874"),
                t.e("77641"),
            ]).then(t.bind(t, 384048));
            return (a) => (0, s.jsx)(e, { ...a, displayProfile: E });
        });
};
