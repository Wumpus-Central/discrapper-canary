"use strict";
n.d(t, { GI: () => d, Kb: () => u, OL: () => l, W0: () => o, hp: () => _, yA: () => c });
var i = n(220478),
    r = n(102609),
    s = n(769054);
let a = RegExp("^dev://experiment/([-\\w._0-9]+)(?:/([0-9]+))?$", "i");
function o(e) {
    return a.test(e);
}
function l(e) {
    let t = e.match(a);
    return null == t || t.length < 2 ? null : t[1];
}
function u(e) {
    let t = e.match(a);
    return null == t || t.length < 3 ? null : parseInt(t[2], 10);
}
function c(e, t) {
    return null != t ? `dev://experiment/${e}/${t}` : `dev://experiment/${e}`;
}
function d(e, t) {
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
    return (0, s.h)(e).map((e) => ({ id: e.id, label: e.label, value: e.id }));
}
