n.d(t, {
    M8: function () {
        return h;
    },
    Rd: function () {
        return p;
    },
    VM: function () {
        return m;
    },
    gU: function () {
        return g;
    },
    j_: function () {
        return x;
    },
    mq: function () {
        return d;
    },
    rW: function () {
        return u;
    }
});
var i = n(399606),
    s = n(594174),
    r = n(914788),
    a = n(546791),
    l = n(652262),
    o = n(880257),
    c = n(292352);
function d(e) {
    let t = Object.values((0, i.e7)([r.Z], () => r.Z.getLinkedUsers()))
        .filter((t) => null != t && t.link_status === e)
        .sort((e, t) => new Date(e.updated_at).getTime() - new Date(t.updated_at).getTime())
        .map((e) => {
            var t;
            return null !== (t = e.user_id) && void 0 !== t ? t : void 0;
        })
        .filter((e) => null != e);
    return (0, i.Wu)([s.default], () => t.map((e) => s.default.getUser(e))).filter((e) => null != e);
}
function u() {
    let e = (0, i.e7)([r.Z], () => r.Z.getLinkCode()),
        t = (0, i.e7)([s.default], () => s.default.getCurrentUser());
    return null == e || null == t ? null : (0, c._w)(t.id, e);
}
function m() {
    let e = (0, o.Z)(),
        t = d(c.ne.ACTIVE),
        n = e ? c.AG : c.i0;
    return t.length >= n;
}
function g() {
    let e = (0, i.e7)([s.default], () => s.default.getCurrentUser()),
        t = (0, i.e7)([r.Z], () => r.Z.getLinkedUsers());
    return null == e ? 0 : Object.values(t).filter((t) => null != t && t.link_status === c.ne.PENDING && e.id !== t.requestor_id).length;
}
function h() {
    let e = (0, i.e7)([s.default], () => s.default.getCurrentUser()),
        t = (0, i.e7)([r.Z], () => r.Z.getLinkedUsers());
    return null == e ? 0 : Object.values(t).filter((e) => null != e && e.link_status === c.ne.ACTIVE).length;
}
function p(e) {
    let t = (0, l.M)(),
        n = (0, i.e7)([r.Z], () => (null == t ? null : r.Z.getRangeStartTimestamp()));
    return null == n ? null : (0, a.LI)(new Date(n).getTime(), () => e, 7);
}
function x(e, t) {
    let n = (0, i.e7)([r.Z], () => r.Z.getLinkTimestamp(e));
    return null != n ? (0, a.lx)(Date.parse(n), t === c.ne.PENDING ? c.TX : c.Wz) : null;
}
