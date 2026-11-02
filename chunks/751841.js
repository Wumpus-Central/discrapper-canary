n.d(t, { EB: () => _, Oj: () => u, Xj: () => E, _g: () => l, hU: () => o, tb: () => d });
var i = n(463347),
    r = n(334465),
    a = n(652215),
    s = n(746080);
let l = [a.BVt.CONJURE, a.BVt.CONJURE_PROJECT(":projectId")];
function o(e) {
    return null == e ? a.BVt.CONJURE : a.BVt.CONJURE_PROJECT(e);
}
function d(e) {
    return null != (0, r.B)(e, { path: l, exact: !0 });
}
let c = a.BVt.CHANNEL(i.pv.guildId(), s.VV.CONJURE_PROJECT, ":projectId");
function u(e, t) {
    return a.BVt.CHANNEL(e, s.VV.CONJURE_PROJECT, t);
}
function _(e) {
    return a.BVt.CHANNEL(e, s.VV.CONJURE);
}
function E(e) {
    return (
        (0, r.B)(e, { path: a.BVt.CONJURE_PROJECT(":projectId"), exact: !0 })?.params.projectId ??
        null ??
        (0, r.B)(e, { path: c, exact: !0 })?.params.projectId ??
        null
    );
}
