n.d(t, {
    A: () => g,
});
var r = n(735438),
    i = n.n(r),
    l = n(181079),
    s = n(832275),
    a = n(366811),
    o = n(734057),
    c = n(576705),
    d = n(309010),
    u = n(711014),
    _ = n(619921),
    p = n(265422),
    m = n(652215);
let g = i().throttle(function () {
    let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 1,
        t = u.Ay.getFlattenedGuildIds(),
        n = (function (e) {
            let t = a.A.getState().guildId;
            if (null == t) return -2;
            if (t === m.YYv) return -1;
            let n = e.indexOf(t);
            return -1 === n ? -2 : n;
        })(t);
    if (
        (-1 !== (n += e) || (0, s.J)(l.A, o.A, c.A) || (n += e),
        -3 === n && (n = t.length - 1),
        n >= t.length || -2 === n)
    )
        return void (0, p.a)(_.A.getHomeLink());
    let r = -1 === n ? m.YYv : t[n],
        i = d.A.getChannelId(r);
    (0, p.i)(r, i === r ? null : i, !1);
}, m.ugG);
