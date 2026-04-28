n.d(t, { p: () => l });
var i = n(627968);
n(64700);
var s = n(192308);
let l = (e) => {
    let { analyticsLocations: t, guildId: l, initialSelectedNameplate: a, stackingBehavior: r } = e;
    (0, s.openModalLazy)(
        async () => {
            let { default: e } = await Promise.all([n.e("80527"), n.e("23353"), n.e("26706")]).then(n.bind(n, 818743));
            return (n) => (0, i.jsx)(e, { ...n, guildId: l, analyticsLocations: t, initialSelectedNameplate: a });
        },
        { stackingBehavior: r },
    );
};
