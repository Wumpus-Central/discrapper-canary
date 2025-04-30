n.d(t, {
    Cf: () => f,
    L2: () => u,
    Um: () => c
});
var r = n(442837),
    i = n(902704),
    a = n(158776),
    o = n(981631);
function s(e) {
    return e.type === o.IIU.PLAYING;
}
function l(e, t) {
    return t.findActivity(e, s);
}
function c(e, t) {
    return null != e ? l(e.ownerId, t) : null;
}
function u(e, t) {
    if (null == e) return null;
    let n = c(e, t);
    return null == n
        ? null
        : {
              id: n.application_id,
              name: n.name
          };
}
function d(e, t) {
    return e === t || (null != e && null != t && (0, i.Z)(e, t));
}
function f(e) {
    return (0, r.e7)([a.Z], () => u(e, a.Z), [e], d);
}
