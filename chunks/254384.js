n.d(t, { A: () => d });
var i = n(477900),
    r = n(477782),
    a = n(342053),
    s = n(23722),
    l = n(192308),
    o = n(294454),
    u = n(375708);
function d(e) {
    let { user: t, location: d } = e,
        c = (0, a.g)(d),
        f = (0, s.A)(() => {
            !(function (e) {
                let { user: t, source: r } = e;
                (0, l.openModalLazy)(
                    async () => {
                        let { default: e } = await Promise.all([
                            n.e("267732"),
                            n.e("461815"),
                            n.e("618416"),
                            n.e("524434"),
                            n.e("533158"),
                            n.e("721642"),
                            n.e("130891"),
                            n.e("392833"),
                            n.e("481647"),
                            n.e("776602"),
                            n.e("140402"),
                            n.e("660580"),
                            n.e("401518"),
                            n.e("323354"),
                            n.e("577084"),
                            n.e("844780"),
                            n.e("979630"),
                            n.e("236946"),
                            n.e("692639"),
                            n.e("565617"),
                            n.e("890480"),
                            n.e("440963"),
                            n.e("766031"),
                            n.e("394317"),
                            n.e("744385"),
                            n.e("523601"),
                            n.e("260832"),
                        ]).then(n.bind(n, 880867));
                        return (n) => (0, i.jsx)(e, { ...n, user: t, source: r });
                    },
                    { stackingBehavior: "stack", modalKey: o.aU },
                );
            })({ user: t, source: "user-profile-embed" });
        });
    return c ? (0, i.jsx)(r.Dr, { id: "share-profile", label: u.intl.string(u.t["sFN1/M"]), action: f }) : null;
}
