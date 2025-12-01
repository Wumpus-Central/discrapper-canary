n.d(t, {
    AZ: () => m,
    M8: () => b,
    Rd: () => y,
    VM: () => g,
    ZM: () => p,
    gU: () => E,
    j_: () => O,
    ov: () => f,
    rW: () => h,
    zu: () => _,
}),
    n(642613);
var r = n(473749),
    i = n(399606),
    a = n(594174),
    o = n(914788),
    s = n(546791),
    l = n(652262),
    c = n(880257),
    u = n(292352);
function d(e) {
    let t = (0, i.e7)([o.Z], () => o.Z.getLinkedUsers());
    return r.useMemo(
        () =>
            Object.values(t)
                .filter((t) => null != t && t.link_status === e)
                .sort((e, t) => new Date(e.updated_at).getTime() - new Date(t.updated_at).getTime())
                .map((e) => e.user_id)
                .filter((e) => null != e),
        [t, e],
    );
}
let f = (e) => {
    let t = d(e);
    return (0, i.Wu)([a.default], () => t.map((e) => a.default.getUser(e))).filter((e) => null != e);
};
function p() {
    return d(u.ne.ACTIVE);
}
function _() {
    return f(u.ne.ACTIVE);
}
let m = () => p().length > 0;
function h() {
    let e = (0, i.e7)([o.Z], () => o.Z.getLinkCode()),
        t = (0, i.e7)([a.default], () => a.default.getCurrentUser());
    return null == e || null == t ? null : (0, u._w)(t.id, e);
}
function g() {
    let e = (0, c.Z)(),
        t = p(),
        n = e ? u.AG : u.i0;
    return t.length >= n;
}
function E() {
    let e = (0, i.e7)([a.default], () => a.default.getCurrentUser()),
        t = (0, i.e7)([o.Z], () => o.Z.getLinkedUsers());
    return null == e
        ? 0
        : Object.values(t).filter((t) => null != t && t.link_status === u.ne.PENDING && e.id !== t.requestor_id).length;
}
function b() {
    return p().length;
}
function y(e) {
    let t = (0, l.M)(),
        n = (0, i.e7)([o.Z], () => (null == t ? null : o.Z.getRangeStartTimestamp()));
    return null == n ? null : (0, s.LI)(new Date(n).getTime(), () => e, 7);
}
function O(e, t) {
    let n = (0, i.e7)([o.Z], () => o.Z.getLinkTimestamp(e));
    return null != n ? (0, s.lx)(Date.parse(n), t === u.ne.PENDING ? u.TX : u.Wz) : null;
}
