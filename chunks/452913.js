n.d(t, { Z: () => h });
var r = n(392711),
    i = n.n(r),
    s = n(853856),
    a = n(706590),
    l = n(905423),
    o = n(592125),
    c = n(496675),
    d = n(944486),
    u = n(771845),
    m = n(774343),
    g = n(475468),
    p = n(981631);
let h = i().throttle(function () {
    let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 1,
        t = u.ZP.getFlattenedGuildIds(),
        n = (function (e) {
            let t = l.Z.getState().guildId;
            if (null == t) return -2;
            if (t === p.I_8) return -1;
            let n = e.indexOf(t);
            return -1 === n ? -2 : n;
        })(t);
    if ((-1 !== (n += e) || (0, a.z)(s.Z, o.Z, c.Z) || (n += e), -3 === n && (n = t.length - 1), n >= t.length || -2 === n)) return void (0, g.z)(m.Z.getHomeLink());
    let r = -1 === n ? p.I_8 : t[n],
        i = d.Z.getChannelId(r);
    (0, g.K)(r, i === r ? null : i, !1);
}, p.aZC);
