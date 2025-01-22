r.d(n, {
    J: function () {
        return f;
    },
    n: function () {
        return d;
    }
});
var i = r(47120);
var a = r(442837),
    o = r(271383),
    s = r(430824),
    l = r(607744),
    u = r(594174),
    c = r(983736);
function d(e) {
    let [n, r, i, a] = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : [s.Z, l.Z, u.default, o.ZP];
    if (null == e) return !1;
    let d = n.getGuild(e),
        { notClaimed: f } = r.getCheck(e),
        p = i.getCurrentUser(),
        h = !1;
    if (null != p) {
        var _, m;
        h = null !== (m = null === (_ = a.getMember(e, p.id)) || void 0 === _ ? void 0 : _.isPending) && void 0 !== m && m;
    }
    return (h || f) && !!(0, c.Dc)(d);
}
function f(e) {
    return (0, a.e7)([s.Z, l.Z, u.default, o.ZP], () => null != e && d(e, [s.Z, l.Z, u.default, o.ZP]), [e]);
}
