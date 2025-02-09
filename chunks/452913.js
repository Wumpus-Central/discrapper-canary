t.d(n, { Z: () => C });
var i = t(392711),
    r = t.n(i),
    s = t(853856),
    l = t(706590),
    o = t(905423),
    a = t(592125),
    d = t(496675),
    c = t(944486),
    u = t(771845),
    E = t(774343),
    p = t(475468),
    b = t(981631);
let C = r().throttle(function () {
    let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 1,
        n = u.ZP.getFlattenedGuildIds(),
        t = (function (e) {
            let n = o.Z.getState().guildId;
            if (null == n) return -2;
            if (n === b.I_8) return -1;
            let t = e.indexOf(n);
            return -1 === t ? -2 : t;
        })(n);
    if ((-1 !== (t += e) || (0, l.z)(s.Z, a.Z, d.Z) || (t += e), -3 === t && (t = n.length - 1), t >= n.length || -2 === t)) {
        (0, p.z)(E.Z.getHomeLink());
        return;
    }
    let i = -1 === t ? b.I_8 : n[t],
        r = c.Z.getChannelId(i);
    (0, p.K)(i, r === i ? null : r, !1);
}, b.aZC);
