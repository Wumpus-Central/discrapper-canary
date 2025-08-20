n.d(t, {
    M8: () => p,
    Rd: () => h,
    VM: () => f,
    gU: () => _,
    j_: () => m,
    mq: () => u,
    rW: () => d,
}),
    n(642613);
var r = n(399606),
    i = n(594174),
    a = n(914788),
    o = n(546791),
    s = n(652262),
    l = n(880257),
    c = n(292352);
function u(e) {
    let t = Object.values((0, r.e7)([a.Z], () => a.Z.getLinkedUsers()))
        .filter((t) => null != t && t.link_status === e)
        .sort((e, t) => new Date(e.updated_at).getTime() - new Date(t.updated_at).getTime())
        .map((e) => {
            var t;
            return null != (t = e.user_id) ? t : void 0;
        })
        .filter((e) => null != e);
    return (0, r.Wu)([i.default], () => t.map((e) => i.default.getUser(e))).filter((e) => null != e);
}
function d() {
    let e = (0, r.e7)([a.Z], () => a.Z.getLinkCode()),
        t = (0, r.e7)([i.default], () => i.default.getCurrentUser());
    return null == e || null == t ? null : (0, c._w)(t.id, e);
}
function f() {
    let e = (0, l.Z)(),
        t = u(c.ne.ACTIVE),
        n = e ? c.AG : c.i0;
    return t.length >= n;
}
function _() {
    let e = (0, r.e7)([i.default], () => i.default.getCurrentUser()),
        t = (0, r.e7)([a.Z], () => a.Z.getLinkedUsers());
    return null == e
        ? 0
        : Object.values(t).filter((t) => null != t && t.link_status === c.ne.PENDING && e.id !== t.requestor_id).length;
}
function p() {
    let e = (0, r.e7)([i.default], () => i.default.getCurrentUser()),
        t = (0, r.e7)([a.Z], () => a.Z.getLinkedUsers());
    return null == e ? 0 : Object.values(t).filter((e) => null != e && e.link_status === c.ne.ACTIVE).length;
}
function h(e) {
    let t = (0, s.M)(),
        n = (0, r.e7)([a.Z], () => (null == t ? null : a.Z.getRangeStartTimestamp()));
    return null == n ? null : (0, o.LI)(new Date(n).getTime(), () => e, 7);
}
function m(e, t) {
    let n = (0, r.e7)([a.Z], () => a.Z.getLinkTimestamp(e));
    return null != n ? (0, o.lx)(Date.parse(n), t === c.ne.PENDING ? c.TX : c.Wz) : null;
}
