c.d(a, { D: () => b });
var d = c(627968),
    s = c(192308),
    t = c(954571),
    n = c(652215);
let b = (e) => {
    let { analyticsLocations: a, displayProfile: b, location: f } = e;
    null == f && (f = a[a.length - 1]),
        t.default.track(n.HAw.OPEN_MODAL, {
            type: "Tiered Tenure Badge Details",
            location_stack: a,
            location: f,
            source: f,
        }),
        (0, s.openModalLazy)(async () => {
            let { default: e } = await Promise.all([
                c.e("19364"),
                c.e("49092"),
                c.e("31638"),
                c.e("65065"),
                c.e("63874"),
                c.e("77641"),
            ]).then(c.bind(c, 384048));
            return (a) => (0, d.jsx)(e, { ...a, displayProfile: b });
        });
};
