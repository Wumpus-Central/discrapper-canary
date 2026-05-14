t.d(a, { p: () => s });
var i = t(627968);
t(64700);
var l = t(192308);
let s = (e) => {
    let { analyticsLocations: a, guildId: s, initialSelectedNameplate: d, stackingBehavior: n } = e;
    (0, l.openModalLazy)(
        async () => {
            let { default: e } = await Promise.all([
                t.e("18556"),
                t.e("54266"),
                t.e("95840"),
                t.e("17427"),
                t.e("19764"),
                t.e("21825"),
                t.e("98125"),
                t.e("18441"),
                t.e("76640"),
                t.e("14879"),
                t.e("10004"),
                t.e("23353"),
                t.e("20320"),
                t.e("51243"),
                t.e("78707"),
                t.e("49697"),
                t.e("27773"),
                t.e("25279"),
                t.e("77473"),
                t.e("20683"),
                t.e("35996"),
                t.e("21856"),
                t.e("27462"),
                t.e("28545"),
                t.e("40668"),
            ]).then(t.bind(t, 818743));
            return (t) => (0, i.jsx)(e, { ...t, guildId: s, analyticsLocations: a, initialSelectedNameplate: d });
        },
        { stackingBehavior: n },
    );
};
