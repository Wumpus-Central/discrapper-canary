t.d(a, { p: () => s });
var i = t(627968);
t(64700);
var n = t(192308);
function s(e) {
    let { analyticsLocations: a, guildId: s, initialSelectedNameplate: d, stackingBehavior: l } = e;
    (0, n.openModalLazy)(
        async () => {
            let { default: e } = await Promise.all([
                t.e("59252"),
                t.e("74907"),
                t.e("72651"),
                t.e("29363"),
                t.e("17427"),
                t.e("15476"),
                t.e("76428"),
                t.e("27773"),
                t.e("77473"),
                t.e("35996"),
                t.e("25279"),
                t.e("21856"),
                t.e("20683"),
                t.e("27462"),
                t.e("28545"),
                t.e("40668"),
            ]).then(t.bind(t, 818743));
            return (t) => (0, i.jsx)(e, { ...t, guildId: s, analyticsLocations: a, initialSelectedNameplate: d });
        },
        { stackingBehavior: l },
    );
}
