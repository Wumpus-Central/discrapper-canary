n.d(t, { aS: () => u, bq: () => c, kM: () => g });
var i = n(17928),
    l = n(945810),
    s = n(710195),
    r = n(287809);
let a = { enabled: !1 },
    o = { 0: a, 1: { enabled: !0 } },
    d = (0, l.mj)({ name: "2026-08-profile-read-state-v1", kind: "user", defaultConfig: a, variations: o });
function u() {
    let e = r.default.getCurrentUser()?.id;
    if (null == e) return null;
    let t = s.A.getAssignment("user", e, d.definition.name);
    return t?.variantId == null || t.useAsEligibility ? null : (o[t.variantId] ?? null);
}
function c() {
    return (0, i.bG)([r.default, s.A], u);
}
function g(e) {
    let { location: t } = e;
    return d.useConfig({ location: t }), null;
}
