r.d(e, { d: () => l });
var n = r(477900),
    i = r(192308),
    o = r(294454);
let l = (t) => {
    let { sku: e, guildId: l, source: a, analyticsLocations: u, analyticsContext: s } = t;
    (0, i.openModalLazy)(
        async () => {
            let { default: t } = await Promise.all([
                r.e("267732"),
                r.e("649500"),
                r.e("683426"),
                r.e("524434"),
                r.e("933947"),
                r.e("866475"),
                r.e("36366"),
                r.e("481647"),
                r.e("776602"),
                r.e("140402"),
                r.e("844780"),
                r.e("770291"),
                r.e("854461"),
                r.e("250478"),
                r.e("979630"),
                r.e("236946"),
                r.e("935948"),
                r.e("692639"),
                r.e("890480"),
                r.e("440963"),
                r.e("766031"),
                r.e("394317"),
                r.e("304329"),
                r.e("84755"),
                r.e("510404"),
            ]).then(r.bind(r, 763375));
            return (r) =>
                (0, n.jsx)(t, { ...r, sku: e, guildId: l, source: a, analyticsLocations: u, analyticsContext: s });
        },
        { stackingBehavior: "stack", modalKey: o.aU },
    );
};
