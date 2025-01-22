r.d(n, {
    Of: function () {
        return f;
    },
    ZP: function () {
        return c;
    }
});
var i = r(47120);
r(192379);
var a = r(442837),
    o = r(594174),
    s = r(251625),
    l = r(255564),
    u = r(621853);
function c(e, n) {
    return (0, a.e7)([o.default, u.Z], () => f(e, n, [o.default, u.Z]));
}
r(484459);
let d = (0, s.oH)((e, n) => new l.Z(e, n));
function f(e, n) {
    let [r, i] = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : [o.default, u.Z],
        a = r.getUser(e),
        s = i.getUserProfile(e),
        l = i.getGuildMemberProfile(e, n);
    return null == a || null == s ? null : d(s, l);
}
