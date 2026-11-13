var n = i(855986),
    l = i(945810),
    s = i(340344),
    r = i(287809);
let a = { enabled: !1 },
    d = { 0: a, 1: { enabled: !0 } },
    o = (0, l.mj)({ name: "2026-10-profile-read-state", kind: "user", defaultConfig: a, variations: d });
function u() {
    let t = r.default.getCurrentUser()?.id;
    if (null == t) return null;
    let e = s.A.getAssignment("user", t, o.definition.name);
    return e?.variantId == null || e.useAsEligibility ? null : (d[e.variantId] ?? null);
}
i.d(
    e,
    {},
    {
        aS: u,
        bq: function () {
            return (0, n.bG)([r.default, s.A], u);
        },
        kM: function (t) {
            let { location: e } = t;
            return (o.useConfig({ location: e }), null);
        },
    },
);
