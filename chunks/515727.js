t.d(a, { w: () => l });
var i = t(627968);
t(64700);
var n = t(192308);
function l(e) {
    let { analyticsLocations: a, guild: l, initialSelectedProfileFrame: s, stackingBehavior: c } = e;
    (0, n.openModalLazy)(
        async () => {
            let { default: e } = await Promise.all([
                t.e("45901"),
                t.e("20683"),
                t.e("27462"),
                t.e("28545"),
                t.e("23172"),
            ]).then(t.bind(t, 651247));
            return (t) => (0, i.jsx)(e, { ...t, guild: l, analyticsLocations: a, initialSelectedProfileFrame: s });
        },
        { stackingBehavior: c },
    );
}
