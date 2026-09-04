n.d(t, { Su: () => a, ii: () => s, ob: () => l });
var i = n(638504),
    r = n(65412);
let a = { readerFactory: (e) => new i.V(e, new TextDecoder("utf-8")) };
function s(e, t) {
    return null == t ? null : e.fromBinary((0, r.A)(t), a);
}
function l(e, t) {
    return (0, r.C)(e.toBinary(t));
}
