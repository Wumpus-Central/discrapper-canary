"use strict";
n.d(t, { GI: () => d, Kb: () => u, OL: () => l, W0: () => o, hp: () => _, yA: () => c });
var r = n(220478),
    i = n(102609),
    a = n(769054);
let s = RegExp("^dev://experiment/([-\\w._0-9]+)(?:/([0-9]+))?$", "i");
function o(e) {
    return s.test(e);
}
function l(e) {
    let t = e.match(s);
    return null == t || t.length < 2 ? null : t[1];
}
function u(e) {
    let t = e.match(s);
    return null == t || t.length < 3 ? null : parseInt(t[2], 10);
}
function c(e, t) {
    return null != t ? `dev://experiment/${e}/${t}` : `dev://experiment/${e}`;
}
function d(e, t) {
    return null == t || null == e
        ? null
        : e.system === i.l5.LEGACY
          ? r.A.getExperimentBucketName(t.bucket)
          : e.system === i.l5.APEX
            ? `Variant ${t.variantId}`
            : null;
}
function _(e) {
    return (0, a.h)(e).map((e) => ({ id: e.id, label: e.label, value: e.id }));
}
