r.d(e, { d: () => o });
var i = r(627968),
    n = r(192308),
    l = r(294454);
let o = (t) => {
    let { sku: e, guildId: o, source: u, analyticsLocations: a, analyticsContext: s } = t;
    (0, n.openModalLazy)(
        async () => {
            let { default: t } = await Promise.all([
                r.e("16237"),
                r.e("20538"),
                r.e("18893"),
                r.e("12815"),
                r.e("78775"),
                r.e("41160"),
                r.e("26111"),
                r.e("81647"),
                r.e("76602"),
                r.e("40402"),
                r.e("80012"),
                r.e("1518"),
                r.e("23354"),
                r.e("79630"),
                r.e("44780"),
                r.e("65617"),
                r.e("36946"),
                r.e("92639"),
                r.e("44385"),
                r.e("40963"),
                r.e("90480"),
                r.e("66031"),
                r.e("94317"),
                r.e("23601"),
                r.e("10404"),
            ]).then(r.bind(r, 763375));
            return (r) =>
                (0, i.jsx)(t, { ...r, sku: e, guildId: o, source: u, analyticsLocations: a, analyticsContext: s });
        },
        { stackingBehavior: "stack", modalKey: l.aU },
    );
};
