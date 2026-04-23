n.d(t, { W: () => l });
var i = n(627968);
n(64700);
var s = n(192308);
let l = (e) => {
    let { initialSelectedEffect: t, analyticsLocations: l, guild: a, stackingBehavior: r } = e;
    (0, s.openModalLazy)(
        async () => {
            let { default: e } = await n.e("93636").then(n.bind(n, 510319));
            return (n) => (0, i.jsx)(e, { ...n, guild: a, initialSelectedEffect: t, analyticsLocations: l });
        },
        { stackingBehavior: r },
    );
};
