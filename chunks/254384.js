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
                            n.e("71053"),
                            n.e("65584"),
                            n.e("1248"),
                            n.e("94149"),
                            n.e("14131"),
                            n.e("73883"),
                            n.e("73216"),
                            n.e("91446"),
                            n.e("81647"),
                            n.e("76602"),
                            n.e("40402"),
                            n.e("67861"),
                            n.e("1518"),
                            n.e("77084"),
                            n.e("23354"),
                            n.e("44780"),
                            n.e("79630"),
                            n.e("36946"),
                            n.e("65617"),
                            n.e("92639"),
                            n.e("90480"),
                            n.e("40963"),
                            n.e("66031"),
                            n.e("94317"),
                            n.e("44385"),
                            n.e("23601"),
                            n.e("60832"),
                        ]).then(n.bind(n, 880867));
                        return (n) => (0, i.jsx)(e, { ...n, user: t, source: r });
                    },
                    { stackingBehavior: "stack", modalKey: o.aU },
                );
            })({ user: t, source: "user-profile-embed" });
        });
    return c ? (0, i.jsx)(r.Dr, { id: "share-profile", label: u.intl.string(u.t["sFN1/M"]), action: f }) : null;
}
