n.d(t, {
    A: () => b,
});
var r = n(735438),
    i = n.n(r),
    a = n(181079),
    s = n(832275),
    o = n(366811),
    l = n(734057),
    c = n(576705),
    u = n(309010),
    d = n(711014),
    f = n(619921),
    p = n(265422),
    _ = n(652215);
let h = -3,
    m = -2,
    g = -1;

function E(e) {
    let t = o.A.getState().guildId;
    if (null == t) return m;
    if (t === _.YYv) return g;
    let n = e.indexOf(t);
    return -1 === n ? m : n;
}
let b = i().throttle(function () {
    let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 1,
        t = d.Ay.getFlattenedGuildIds(),
        n = E(t);
    if (
        ((n += e) !== g || (0, s.J)(a.A, l.A, c.A) || (n += e), n === h && (n = t.length - 1), n >= t.length || n === m)
    )
        return void (0, p.a)(f.A.getHomeLink());
    let r = n === g ? _.YYv : t[n],
        i = u.A.getChannelId(r);
    (0, p.i)(r, i === r ? null : i, !1);
}, _.ugG);
