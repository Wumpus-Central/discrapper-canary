n.d(t, { p: () => s });
var i = n(627968);
n(64700);
var l = n(192308);
let s = (e) => {
    let { analyticsLocations: t, guildId: s, initialSelectedNameplate: a, stackingBehavior: r } = e;
    (0, l.openModalLazy)(
        async () => {
            let { default: e } = await Promise.all([n.e("80527"), n.e("23353"), n.e("26706")]).then(n.bind(n, 818743));
            return (n) => (0, i.jsx)(e, { ...n, guildId: s, analyticsLocations: t, initialSelectedNameplate: a });
        },
        { stackingBehavior: r },
    );
};
