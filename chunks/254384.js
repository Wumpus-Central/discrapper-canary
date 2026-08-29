t.d(n, { A: () => d });
var a = t(477900),
    i = t(477782),
    r = t(342053),
    s = t(23722),
    l = t(192308),
    o = t(294454),
    u = t(375708);
function d(e) {
    let { user: n, location: d } = e,
        c = (0, r.g)(d),
        p = (0, s.A)(() => {
            !(function (e) {
                let { user: n, source: i } = e;
                (0, l.openModalLazy)(
                    async () => {
                        let { default: e } = await Promise.all([
                            t.e("267732"),
                            t.e("225307"),
                            t.e("332165"),
                            t.e("618416"),
                            t.e("524434"),
                            t.e("533158"),
                            t.e("721642"),
                            t.e("130891"),
                            t.e("392833"),
                            t.e("481647"),
                            t.e("776602"),
                            t.e("140402"),
                            t.e("385653"),
                            t.e("401518"),
                            t.e("323354"),
                            t.e("577084"),
                            t.e("428967"),
                            t.e("844780"),
                            t.e("979630"),
                            t.e("236946"),
                            t.e("692639"),
                            t.e("565617"),
                            t.e("890480"),
                            t.e("440963"),
                            t.e("766031"),
                            t.e("394317"),
                            t.e("744385"),
                            t.e("523601"),
                            t.e("260832"),
                        ]).then(t.bind(t, 880867));
                        return (t) => (0, a.jsx)(e, { ...t, user: n, source: i });
                    },
                    { stackingBehavior: "stack", modalKey: o.aU },
                );
            })({ user: n, source: "user-profile-embed" });
        });
    return c ? (0, a.jsx)(i.Dr, { id: "share-profile", label: u.intl.string(u.t["sFN1/M"]), action: p }) : null;
}
