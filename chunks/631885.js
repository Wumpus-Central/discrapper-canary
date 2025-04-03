n.d(t, {
    M8: () => p,
    Rd: () => h,
    VM: () => m,
    gU: () => g,
    j_: () => f,
    mq: () => d,
    rW: () => u
}),
    n(230036);
var r = n(399606),
    i = n(594174),
    s = n(914788),
    a = n(546791),
    l = n(652262),
    o = n(880257),
    c = n(292352);
function d(e) {
    let t = Object.values((0, r.e7)([s.Z], () => s.Z.getLinkedUsers()))
        .filter((t) => null != t && t.link_status === e)
        .sort((e, t) => new Date(e.updated_at).getTime() - new Date(t.updated_at).getTime())
        .map((e) => {
            var t;
            return null != (t = e.user_id) ? t : void 0;
        })
        .filter((e) => null != e);
    return (0, r.Wu)([i.default], () => t.map((e) => i.default.getUser(e))).filter((e) => null != e);
}
function u() {
    let e = (0, r.e7)([s.Z], () => s.Z.getLinkCode()),
        t = (0, r.e7)([i.default], () => i.default.getCurrentUser());
    return null == e || null == t ? null : (0, c._w)(t.id, e);
}
function m() {
    let e = (0, o.Z)(),
        t = d(c.ne.ACTIVE),
        n = e ? c.AG : c.i0;
    return t.length >= n;
}
function g() {
    let e = (0, r.e7)([i.default], () => i.default.getCurrentUser()),
        t = (0, r.e7)([s.Z], () => s.Z.getLinkedUsers());
    return null == e ? 0 : Object.values(t).filter((t) => null != t && t.link_status === c.ne.PENDING && e.id !== t.requestor_id).length;
}
function p() {
    let e = (0, r.e7)([i.default], () => i.default.getCurrentUser()),
        t = (0, r.e7)([s.Z], () => s.Z.getLinkedUsers());
    return null == e ? 0 : Object.values(t).filter((e) => null != e && e.link_status === c.ne.ACTIVE).length;
}
function h(e) {
    let t = (0, l.M)(),
        n = (0, r.e7)([s.Z], () => (null == t ? null : s.Z.getRangeStartTimestamp()));
    return null == n ? null : (0, a.LI)(new Date(n).getTime(), () => e, 7);
}
function f(e, t) {
    let n = (0, r.e7)([s.Z], () => s.Z.getLinkTimestamp(e));
    return null != n ? (0, a.lx)(Date.parse(n), t === c.ne.PENDING ? c.TX : c.Wz) : null;
}
