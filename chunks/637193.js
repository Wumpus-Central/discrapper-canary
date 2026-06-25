t.d(a, { p: () => s });
var i = t(627968);
t(64700);
var n = t(192308);
function s(e) {
    let { analyticsLocations: a, guildId: s, initialSelectedNameplate: d, stackingBehavior: l } = e;
    (0, n.openModalLazy)(
        async () => {
            let { default: e } = await Promise.all([
                t.e("45901"),
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
