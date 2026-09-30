n.d(t, { A: () => o });
var i = n(477900),
    r = n(477782),
    u = n(342053),
    l = n(23722),
    s = n(192308),
    a = n(294454),
    d = n(375708);
function o(e) {
    let { user: t, location: o } = e,
        c = (0, u.g)(o),
        g = (0, l.A)(() => {
            !(function (e) {
                let { user: t, source: r } = e;
                (0, s.openModalLazy)(
                    async () => {
                        let { default: e } = await Promise.all([
                            n.e("267732"),
                            n.e("225307"),
                            n.e("332165"),
                            n.e("618416"),
                            n.e("524434"),
                            n.e("90343"),
                            n.e("769281"),
                            n.e("392833"),
                            n.e("481647"),
                            n.e("776602"),
                            n.e("140402"),
                            n.e("401518"),
                            n.e("854461"),
                            n.e("577084"),
                            n.e("428967"),
                            n.e("844780"),
                            n.e("979630"),
                            n.e("236946"),
                            n.e("935948"),
                            n.e("692639"),
                            n.e("890480"),
                            n.e("440963"),
                            n.e("565617"),
                            n.e("766031"),
                            n.e("394317"),
                            n.e("744385"),
                            n.e("304329"),
                            n.e("84755"),
                            n.e("260832"),
                        ]).then(n.bind(n, 880867));
                        return (n) => (0, i.jsx)(e, { ...n, user: t, source: r });
                    },
                    { stackingBehavior: "stack", modalKey: a.aU },
                );
            })({ user: t, source: "user-profile-embed" });
        });
    return c ? (0, i.jsx)(r.Dr, { id: "share-profile", label: d.intl.string(d.t["sFN1/M"]), action: g }) : null;
}
