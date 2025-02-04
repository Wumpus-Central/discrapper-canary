n.d(t, {
    ML: () => l,
    p0: () => c,
    vh: () => u
}),
    n(47120);
var i = n(442837),
    r = n(136015),
    a = n(91896),
    s = n(981631);
function o(e, t) {
    let [n] = (0, i.e7)([a.Z], () => [a.Z.getGameRelationshipsForUserByType(e, t), a.Z.getGameRelationshipsVersion()], [t, e], r.Q);
    return n;
}
function l(e) {
    return o(e, s.OGo.FRIEND);
}
function u(e) {
    return o(e, s.OGo.PENDING_INCOMING);
}
function c(e) {
    let [t] = (0, i.e7)([a.Z], () => [a.Z.getGameRelationshipsForUser(e), a.Z.getGameRelationshipsVersion()], [e], r.Q);
    return t;
}
