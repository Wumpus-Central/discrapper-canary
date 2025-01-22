r.d(n, {
    Cf: function () {
        return p;
    },
    L2: function () {
        return d;
    },
    Um: function () {
        return c;
    }
});
var i = r(442837),
    a = r(902704),
    o = r(158776),
    s = r(981631);
function l(e) {
    return e.type === s.IIU.PLAYING;
}
function u(e, n) {
    return n.findActivity(e, l);
}
function c(e, n) {
    return null != e ? u(e.ownerId, n) : null;
}
function d(e, n) {
    if (null == e) return null;
    let r = c(e, n);
    return null == r
        ? null
        : {
              id: r.application_id,
              name: r.name
          };
}
function f(e, n) {
    return e === n || (null != e && null != n && (0, a.Z)(e, n));
}
function p(e) {
    return (0, i.e7)([o.Z], () => d(e, o.Z), [e], f);
}
