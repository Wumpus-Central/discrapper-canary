n.d(t, { A: () => d });
var i = n(477900),
    r = n(477782),
    u = n(342053),
    l = n(23722),
    a = n(192308),
    s = n(294454),
    o = n(792996);
function d(e) {
    let { user: t, location: d } = e,
        c = (0, u.g)(d),
        f = (0, l.A)(() => {
            !(function (e) {
                let { user: t, source: r } = e;
                (0, a.mM)(
                    async () => {
                        let { default: e } = await Promise.all([
                            n.e(335930),
                            n.e(921611),
                            n.e(592e3),
                            n.e(524434),
                            n.e(334733),
                            n.e(706073),
                            n.e(227512),
                            n.e(933947),
                            n.e(866475),
                            n.e(392833),
                            n.e(339282),
                            n.e(481647),
                            n.e(749248),
                            n.e(900361),
                            n.e(844780),
                            n.e(401518),
                            n.e(45072),
                            n.e(577084),
                            n.e(428967),
                            n.e(957506),
                            n.e(260218),
                            n.e(97210),
                            n.e(362422),
                            n.e(789573),
                            n.e(732272),
                            n.e(935948),
                            n.e(236946),
                            n.e(692639),
                            n.e(593020),
                            n.e(890480),
                            n.e(440963),
                            n.e(657003),
                            n.e(766031),
                            n.e(394317),
                            n.e(12762),
                            n.e(304329),
                            n.e(472041),
                        ]).then(n.bind(n, 627664));
                        return (n) => (0, i.jsx)(e, { ...n, user: t, source: r });
                    },
                    { stackingBehavior: "stack", modalKey: s.aU },
                );
            })({ user: t, source: "user-profile-embed" });
        });
    return c ? (0, i.jsx)(r.Dr, { id: "share-profile", label: o.intl.string(o.t["sFN1/M"]), action: f }) : null;
}
