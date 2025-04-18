n.d(t, {
    Of: () => u,
    ZP: () => l
}),
    n(388685),
    n(192379);
var r = n(442837),
    i = n(594174),
    a = n(251625),
    o = n(255564),
    s = n(621853);
function l(e, t) {
    return (0, r.e7)([i.default, s.Z], () => (null == e ? null : u(e, t, [i.default, s.Z])));
}
n(484459);
let c = (0, a.oH)((e, t) => new o.Z(e, t));
function u(e, t) {
    let [n, r] = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : [i.default, s.Z];
    if (null === e) return null;
    let a = n.getUser(e),
        o = r.getUserProfile(e),
        l = r.getGuildMemberProfile(e, t);
    return null == a || null == o ? null : c(o, l);
}
