t.d(a, { p: () => s });
var i = t(627968);
t(64700);
var l = t(192308);
let s = (e) => {
    let { analyticsLocations: a, guildId: s, initialSelectedNameplate: d, stackingBehavior: n } = e;
    (0, l.openModalLazy)(
        async () => {
            let { default: e } = await Promise.all([
                t.e("15856"),
                t.e("33799"),
                t.e("17427"),
                t.e("76428"),
                t.e("27773"),
                t.e("77473"),
                t.e("25279"),
                t.e("21856"),
                t.e("20683"),
                t.e("27462"),
                t.e("28545"),
                t.e("40668"),
            ]).then(t.bind(t, 818743));
            return (t) => (0, i.jsx)(e, { ...t, guildId: s, analyticsLocations: a, initialSelectedNameplate: d });
        },
        { stackingBehavior: n },
    );
};
