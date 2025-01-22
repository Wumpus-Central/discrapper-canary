r.d(n, {
    BA: function () {
        return d;
    },
    DX: function () {
        return p;
    },
    _j: function () {
        return u;
    },
    aK: function () {
        return c;
    },
    dq: function () {
        return l;
    }
});
var i = r(392711),
    a = r.n(i),
    o = r(699516),
    s = r(823379);
function l(e, n) {
    return e.filter((e) => (0, s.lm)(e)).filter((e) => !(null != n ? n.includes(e.id) : o.Z.isBlockedOrIgnored(e.id)));
}
function u(e, n) {
    return e.filter((e) => !(null != n ? n.includes(e) : o.Z.isBlockedOrIgnored(e)));
}
function c(e) {
    return e.filter((e) => !o.Z.isBlockedOrIgnored(e.ownerId));
}
function d(e, n) {
    return e.some((e) => (null != n ? n.includes(e) : o.Z.isBlockedOrIgnored(e)));
}
function f(e) {
    return o.Z.isBlockedOrIgnored(e.userId);
}
function p(e) {
    return a()(e)
        .filter((e) => !f(e))
        .keyBy('userId')
        .value();
}
