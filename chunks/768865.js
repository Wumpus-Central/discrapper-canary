n.d(t, { k: () => o });
var i = n(200651),
    r = n(481060),
    a = n(626135),
    s = n(981631);
let o = (e) => {
    let { analyticsLocations: t, displayProfile: o, location: l } = e;
    null == l && (l = t[t.length - 1]),
        a.default.track(s.rMx.OPEN_MODAL, {
            type: 'Tiered Tenure Badge Details',
            location_stack: t,
            location: l,
            source: l
        }),
        (0, r.ZDy)(async () => {
            let { default: e } = await n.e('89839').then(n.bind(n, 121436));
            return (t) =>
                (0, i.jsx)(e, {
                    ...t,
                    displayProfile: o
                });
        });
};
