r.d(n, {
    k: function () {
        return l;
    }
});
var i = r(200651),
    a = r(481060),
    o = r(626135),
    s = r(981631);
let l = (e, n) => {
    null == n && (n = e[e.length - 1]),
        o.default.track(s.rMx.OPEN_MODAL, {
            type: 'Tiered Tenure Badge Details',
            location_stack: e,
            location: n,
            source: n
        }),
        (0, a.openModalLazy)(async () => {
            let { default: e } = await r.e('89839').then(r.bind(r, 121436));
            return (n) => (0, i.jsx)(e, { ...n });
        });
};
