n.d(t, {
    Y: () => u,
    m: () => c
}),
    n(47120);
var i = n(149765),
    r = n(442837),
    a = n(430824),
    s = n(594174),
    o = n(700785),
    l = n(478743);
let u = function (e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : [a.Z, s.default];
    if (null == e) return !1;
    let [n, r] = t,
        u = n.getGuild(e);
    if (null == u) return !1;
    let c = r.getCurrentUser();
    return i.Db(
        o.uB({
            user: c,
            context: u,
            checkElevated: !1
        }),
        l.N
    );
};
function c(e) {
    return (0, r.e7)([a.Z, s.default], () => u(e, [a.Z, s.default]), [e]);
}
