i.d(e, { d: () => a });
var n = i(627968),
    s = i(192308),
    _ = i(294454);
let a = (t) => {
    let { sku: e, guildId: a, source: u, analyticsLocations: r, analyticsContext: o } = t;
    (0, s.openModalLazy)(
        async () => {
            let { default: t } = await Promise.all([
                i.e("24092"),
                i.e("55658"),
                i.e("46831"),
                i.e("21530"),
                i.e("79924"),
                i.e("52703"),
                i.e("76602"),
                i.e("28229"),
                i.e("67861"),
                i.e("1518"),
                i.e("23354"),
                i.e("44780"),
                i.e("18997"),
                i.e("65617"),
                i.e("36946"),
                i.e("92639"),
                i.e("44385"),
                i.e("40963"),
                i.e("90480"),
                i.e("66031"),
                i.e("94317"),
                i.e("23601"),
                i.e("10404"),
            ]).then(i.bind(i, 763375));
            return (i) =>
                (0, n.jsx)(t, { ...i, sku: e, guildId: a, source: u, analyticsLocations: r, analyticsContext: o });
        },
        { stackingBehavior: "stack", modalKey: _.aU },
    );
};
