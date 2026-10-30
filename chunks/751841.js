n.d(t, { _g: () => l, hU: () => o, q6: () => u, tb: () => d });
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
let c = [a.BVt.CONJURE, a.BVt.CHANNEL(i.pv.guildId(), s.VV.CONJURE, ":projectId")];
function u(e) {
    return null != (0, r.B)(e, { path: c });
}
