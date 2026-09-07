l.d(e, { aS: () => A, bq: () => f, kM: () => o });
var i = l(17928),
    n = l(945810),
    r = l(710195),
    s = l(287809);
let u = { enabled: !1 },
    d = { 0: u, 1: { enabled: !0 } },
    a = (0, n.mj)({ name: "2026-08-profile-read-state-v1", kind: "user", defaultConfig: u, variations: d });
function A() {
    let t = s.default.getCurrentUser()?.id;
    if (null == t) return null;
    let e = r.A.getAssignment("user", t, a.definition.name);
    return e?.variantId == null || e.useAsEligibility ? null : (d[e.variantId] ?? null);
}
function f() {
    return (0, i.bG)([s.default, r.A], A);
}
function o(t) {
    let { location: e } = t;
    return a.useConfig({ location: e }), null;
}
