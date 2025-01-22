var i = n(392711),
    r = n.n(i),
    s = n(853856),
    a = n(706590),
    l = n(905423),
    o = n(592125),
    c = n(496675),
    d = n(944486),
    u = n(771845),
    m = n(774343),
    g = n(475468),
    h = n(981631);
t.Z = r().throttle(function () {
    let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 1,
        t = u.ZP.getFlattenedGuildIds(),
        n = (function (e) {
            let t = l.Z.getState().guildId;
            if (null == t) return -2;
            if (t === h.I_8) return -1;
            let n = e.indexOf(t);
            return -1 === n ? -2 : n;
        })(t);
    if ((-1 === (n += e) && !(0, a.z)(s.Z, o.Z, c.Z) && (n += e), -3 === n && (n = t.length - 1), n >= t.length || -2 === n)) {
        (0, g.z)(m.Z.getHomeLink());
        return;
    }
    let i = -1 === n ? h.I_8 : t[n],
        r = d.Z.getChannelId(i);
    (0, g.K)(i, r === i ? null : r, !1);
}, h.aZC);
