n.d(t, { A: () => g });
var i = n(735438),
    s = n.n(i),
    r = n(181079),
    a = n(832275),
    l = n(366811),
    o = n(734057),
    c = n(576705),
    d = n(309010),
    u = n(711014),
    _ = n(619921),
    m = n(265422),
    A = n(652215);
let g = s().throttle(function () {
    let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 1,
        t = u.Ay.getFlattenedGuildIds(),
        n = (function (e) {
            let t = l.A.getState().guildId;
            if (null == t) return -2;
            if (t === A.YYv) return -1;
            let n = e.indexOf(t);
            return -1 === n ? -2 : n;
        })(t);
    if (
        (-1 !== (n += e) || (0, a.J)(r.A, o.A, c.A) || (n += e),
        -3 === n && (n = t.length - 1),
        n >= t.length || -2 === n)
    )
        return void (0, m.a)(_.A.getHomeLink());
    let i = -1 === n ? A.YYv : t[n],
        s = d.A.getChannelId(i);
    (0, m.i)(i, s === i ? null : s, !1);
}, A.ugG);
