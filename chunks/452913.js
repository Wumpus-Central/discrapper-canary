n.d(t, { Z: () => h });
var i = n(392711),
    r = n.n(i),
    s = n(853856),
    l = n(706590),
    a = n(905423),
    o = n(592125),
    c = n(496675),
    d = n(944486),
    u = n(771845),
    m = n(774343),
    p = n(475468),
    g = n(981631);
let h = r().throttle(function () {
    let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 1,
        t = u.ZP.getFlattenedGuildIds(),
        n = (function (e) {
            let t = a.Z.getState().guildId;
            if (null == t) return -2;
            if (t === g.I_8) return -1;
            let n = e.indexOf(t);
            return -1 === n ? -2 : n;
        })(t);
    if ((-1 !== (n += e) || (0, l.z)(s.Z, o.Z, c.Z) || (n += e), -3 === n && (n = t.length - 1), n >= t.length || -2 === n)) return void (0, p.z)(m.Z.getHomeLink());
    let i = -1 === n ? g.I_8 : t[n],
        r = d.Z.getChannelId(i);
    (0, p.K)(i, r === i ? null : r, !1);
}, g.aZC);
