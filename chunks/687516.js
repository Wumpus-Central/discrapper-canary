n.d(t, {
    Cf: () => f,
    L2: () => c,
    Um: () => u
});
var i = n(442837),
    r = n(902704),
    a = n(158776),
    s = n(981631);
function o(e) {
    return e.type === s.IIU.PLAYING;
}
function l(e, t) {
    return t.findActivity(e, o);
}
function u(e, t) {
    return null != e ? l(e.ownerId, t) : null;
}
function c(e, t) {
    if (null == e) return null;
    let n = u(e, t);
    return null == n
        ? null
        : {
              id: n.application_id,
              name: n.name
          };
}
function d(e, t) {
    return e === t || (null != e && null != t && (0, r.Z)(e, t));
}
function f(e) {
    return (0, i.e7)([a.Z], () => c(e, a.Z), [e], d);
}
