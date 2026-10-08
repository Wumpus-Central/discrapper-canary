n.d(e, { aS: () => o, bq: () => c, kM: () => A });
var i = n(17928),
    l = n(945810),
    s = n(710195),
    r = n(287809);
let a = { enabled: !1 },
    d = { 0: a, 1: { enabled: !0 } },
    u = (0, l.mj)({ name: "2026-08-profile-read-state-v1", kind: "user", defaultConfig: a, variations: d });
function o() {
    let t = r.default.getCurrentUser()?.id;
    if (null == t) return null;
    let e = s.A.getAssignment("user", t, u.definition.name);
    return e?.variantId == null || e.useAsEligibility ? null : (d[e.variantId] ?? null);
}
function c() {
    return (0, i.bG)([r.default, s.A], o);
}
function A(t) {
    let { location: e } = t;
    return (u.useConfig({ location: e }), null);
}
