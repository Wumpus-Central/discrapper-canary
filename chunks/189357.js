r.d(n, {
    Y: function () {
        return d;
    },
    m: function () {
        return f;
    }
});
var i = r(47120);
var a = r(149765),
    o = r(442837),
    s = r(430824),
    l = r(594174),
    u = r(700785),
    c = r(478743);
let d = function (e) {
    let n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : [s.Z, l.default];
    if (null == e) return !1;
    let [r, i] = n,
        o = r.getGuild(e);
    if (null == o) return !1;
    let d = i.getCurrentUser();
    return a.Db(
        u.uB({
            user: d,
            context: o,
            checkElevated: !1
        }),
        c.N
    );
};
function f(e) {
    return (0, o.e7)([s.Z, l.default], () => d(e, [s.Z, l.default]), [e]);
}
