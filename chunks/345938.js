r.d(e, { d: () => o });
var i = r(477900),
    n = r(192308),
    l = r(294454);
let o = (t) => {
    let { sku: e, guildId: o, source: u, analyticsLocations: a, analyticsContext: s } = t;
    (0, n.openModalLazy)(
        async () => {
            let { default: t } = await Promise.all([
                r.e("471053"),
                r.e("965584"),
                r.e("1248"),
                r.e("594149"),
                r.e("786798"),
                r.e("773883"),
                r.e("73216"),
                r.e("659271"),
                r.e("481647"),
                r.e("776602"),
                r.e("140402"),
                r.e("385653"),
                r.e("401518"),
                r.e("323354"),
                r.e("844780"),
                r.e("979630"),
                r.e("236946"),
                r.e("692639"),
                r.e("565617"),
                r.e("890480"),
                r.e("440963"),
                r.e("766031"),
                r.e("394317"),
                r.e("744385"),
                r.e("523601"),
                r.e("510404"),
            ]).then(r.bind(r, 763375));
            return (r) =>
                (0, i.jsx)(t, { ...r, sku: e, guildId: o, source: u, analyticsLocations: a, analyticsContext: s });
        },
        { stackingBehavior: "stack", modalKey: l.aU },
    );
};
