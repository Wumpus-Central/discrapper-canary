n.d(t, {
    Of: () => c,
    ZP: () => l
}),
    n(47120),
    n(192379);
var i = n(442837),
    r = n(594174),
    a = n(251625),
    s = n(255564),
    o = n(621853);
function l(e, t) {
    return (0, i.e7)([r.default, o.Z], () => c(e, t, [r.default, o.Z]));
}
n(484459);
let u = (0, a.oH)((e, t) => new s.Z(e, t));
function c(e, t) {
    let [n, i] = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : [r.default, o.Z],
        a = n.getUser(e),
        s = i.getUserProfile(e),
        l = i.getGuildMemberProfile(e, t);
    return null == a || null == s ? null : u(s, l);
}
