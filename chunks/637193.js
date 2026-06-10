t.d(a, { p: () => s });
var i = t(627968);
t(64700);
var l = t(192308);
let s = (e) => {
    let { analyticsLocations: a, guildId: s, initialSelectedNameplate: d, stackingBehavior: n } = e;
    (0, l.openModalLazy)(
        async () => {
            let { default: e } = await Promise.all([
                t.e("67362"),
                t.e("56533"),
                t.e("61554"),
                t.e("17427"),
                t.e("699"),
                t.e("10004"),
                t.e("87306"),
                t.e("23353"),
                t.e("99666"),
                t.e("98125"),
                t.e("21825"),
                t.e("8892"),
                t.e("20320"),
                t.e("32079"),
                t.e("51243"),
                t.e("88740"),
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
