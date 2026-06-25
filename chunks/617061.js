t.d(a, { W: () => l });
var i = t(627968);
t(64700);
var n = t(192308);
function l(e) {
    let { initialSelectedEffect: a, analyticsLocations: l, guild: s, stackingBehavior: c } = e;
    (0, n.openModalLazy)(
        async () => {
            let { default: e } = await Promise.all([
                t.e("45901"),
                t.e("20683"),
                t.e("27462"),
                t.e("28545"),
                t.e("60264"),
            ]).then(t.bind(t, 937563));
            return (t) => (0, i.jsx)(e, { ...t, guild: s, initialSelectedEffect: a, analyticsLocations: l });
        },
        { stackingBehavior: c },
    );
}
