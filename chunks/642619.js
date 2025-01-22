r.d(n, {
    H: function () {
        return o;
    }
});
var i = r(200651);
r(192379);
var a = r(481060);
let o = (e) => {
    let { analyticsLocations: n, initialSelectedEffectId: o, guild: s } = e;
    (0, a.openModalLazy)(async () => {
        let { default: e } = await r.e('55183').then(r.bind(r, 191564));
        return (r) =>
            (0, i.jsx)(e, {
                ...r,
                guild: s,
                initialSelectedEffectId: o,
                analyticsLocations: n
            });
    }, {});
};
