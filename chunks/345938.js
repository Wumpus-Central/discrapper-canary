r.d(t, { d: () => n });
var i = r(477900),
    l = r(192308),
    a = r(294454);
let n = (e) => {
    let { sku: t, guildId: n, source: s, analyticsLocations: u, analyticsContext: d } = e;
    (0, l.openModalLazy)(
        async () => {
            let { default: e } = await Promise.all([
                r.e("267732"),
                r.e("225307"),
                r.e("332165"),
                r.e("618416"),
                r.e("524434"),
                r.e("90343"),
                r.e("842760"),
                r.e("36366"),
                r.e("481647"),
                r.e("776602"),
                r.e("140402"),
                r.e("401518"),
                r.e("122722"),
                r.e("844780"),
                r.e("979630"),
                r.e("236946"),
                r.e("935948"),
                r.e("464704"),
                r.e("692639"),
                r.e("890480"),
                r.e("440963"),
                r.e("565617"),
                r.e("766031"),
                r.e("394317"),
                r.e("744385"),
                r.e("234881"),
                r.e("304329"),
                r.e("510404"),
            ]).then(r.bind(r, 763375));
            return (r) =>
                (0, i.jsx)(e, { ...r, sku: t, guildId: n, source: s, analyticsLocations: u, analyticsContext: d });
        },
        { stackingBehavior: "stack", modalKey: a.aU },
    );
};
