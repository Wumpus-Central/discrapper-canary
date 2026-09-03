n.d(t, { GI: () => u, Kb: () => d, OL: () => o, W0: () => l, hp: () => _, yA: () => c });
var i = n(220478),
    r = n(102609),
    a = n(769054);
let s = RegExp("^dev://experiment/([-\\w._0-9]+)(?:/([0-9]+))?$", "i");
function l(e) {
    return s.test(e);
}
function o(e) {
    let t = e.match(s);
    return null == t || t.length < 2 ? null : t[1];
}
function d(e) {
    let t = e.match(s);
    return null == t || t.length < 3 ? null : parseInt(t[2], 10);
}
function c(e, t) {
    return null != t ? `dev://experiment/${e}/${t}` : `dev://experiment/${e}`;
}
function u(e, t) {
    if (null == t || null == e) return null;
    switch (e.system) {
        case r.l5.LEGACY:
            return i.A.getExperimentBucketName(t.bucket);
        case r.l5.APEX:
            return `Variant ${t.variantId}`;
        default:
            return e.system, null;
    }
}
function _(e) {
    return (0, a.h)(e).map((e) => ({ id: e.id, label: e.label, value: e.id }));
}
