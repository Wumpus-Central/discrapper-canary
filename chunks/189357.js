n.d(t, {
    Y: () => c,
    m: () => u
}),
    n(47120);
var r = n(149765),
    i = n(442837),
    o = n(430824),
    a = n(594174),
    s = n(700785),
    l = n(478743);
let c = function (e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : [o.Z, a.default];
    if (null == e) return !1;
    let [n, i] = t,
        c = n.getGuild(e);
    if (null == c) return !1;
    let u = i.getCurrentUser();
    return r.Db(
        s.uB({
            user: u,
            context: c,
            checkElevated: !1
        }),
        l.N
    );
};
function u(e) {
    return (0, i.e7)([o.Z, a.default], () => c(e, [o.Z, a.default]), [e]);
}
