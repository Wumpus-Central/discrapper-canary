n.d(t, { w: () => l });
var i = n(627968);
n(64700);
var s = n(192308);
let l = (e) => {
    let { analyticsLocations: t, guild: l, initialSelectedProfileFrame: a } = e;
    (0, s.openModalLazy)(async () => {
        let { default: e } = await Promise.all([n.e("73667"), n.e("32934")]).then(n.bind(n, 146001));
        return (n) => (0, i.jsx)(e, { ...n, guild: l, analyticsLocations: t, initialSelectedProfileFrame: a });
    }, {});
};
