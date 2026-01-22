n.d(t, {
    GI: () => d,
    Kb: () => c,
    OL: () => l,
    W0: () => o,
    hp: () => f,
    yA: () => u,
}),
    n(591487),
    n(727858),
    n(747238);
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

function c(e) {
    let t = e.match(s);
    return null == t || t.length < 3 ? null : parseInt(t[2], 10);
}

function u(e, t) {
    return null != t ? "dev://experiment/".concat(e, "/").concat(t) : "dev://experiment/".concat(e);
}

function d(e, t) {
    return null == t || null == e
        ? null
        : e.system === i.l5.LEGACY
          ? r.A.getExperimentBucketName(t.bucket)
          : e.system === i.l5.APEX
            ? "Variant ".concat(t.variantId)
            : null;
}

function f(e) {
    return (0, a.h)(e).map((e) => ({
        id: e.id,
        label: e.label,
        value: e.id,
    }));
}
