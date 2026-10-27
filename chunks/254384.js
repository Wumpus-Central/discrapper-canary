n.d(t, { A: () => d });
var i = n(477900),
    r = n(477782),
    u = n(342053),
    l = n(23722),
    a = n(192308),
    s = n(294454),
    o = n(105292);
function d(e) {
    let { user: t, location: d } = e,
        c = (0, u.g)(d),
        f = (0, l.A)(() => {
            !(function (e) {
                let { user: t, source: r } = e;
                (0, a.openModalLazy)(
                    async () => {
                        let { default: e } = await Promise.all([
                            n.e("267732"),
                            n.e("725134"),
                            n.e("921611"),
                            n.e("592000"),
                            n.e("949256"),
                            n.e("851677"),
                            n.e("392833"),
                            n.e("481647"),
                            n.e("776602"),
                            n.e("140402"),
                            n.e("593020"),
                            n.e("844780"),
                            n.e("770291"),
                            n.e("718667"),
                            n.e("577084"),
                            n.e("428967"),
                            n.e("979630"),
                            n.e("97210"),
                            n.e("236946"),
                            n.e("935948"),
                            n.e("692639"),
                            n.e("890480"),
                            n.e("440963"),
                            n.e("766031"),
                            n.e("599889"),
                            n.e("394317"),
                            n.e("304329"),
                            n.e("207960"),
                            n.e("260832"),
                        ]).then(n.bind(n, 880867));
                        return (n) => (0, i.jsx)(e, { ...n, user: t, source: r });
                    },
                    { stackingBehavior: "stack", modalKey: s.aU },
                );
            })({ user: t, source: "user-profile-embed" });
        });
    return c ? (0, i.jsx)(r.Dr, { id: "share-profile", label: o.intl.string(o.t["sFN1/M"]), action: f }) : null;
}
