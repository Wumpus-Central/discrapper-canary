n.d(t, { Z: () => b });
var r = n(392711),
    i = n.n(r),
    a = n(853856),
    o = n(706590),
    s = n(905423),
    l = n(592125),
    c = n(496675),
    u = n(944486),
    d = n(771845),
    f = n(774343),
    p = n(475468),
    _ = n(981631);
let m = -3,
    h = -2,
    g = -1;
function E(e) {
    let t = s.Z.getState().guildId;
    if (null == t) return h;
    if (t === _.I_8) return g;
    let n = e.indexOf(t);
    return -1 === n ? h : n;
}
let b = i().throttle(function () {
    let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 1,
        t = d.ZP.getFlattenedGuildIds(),
        n = E(t);
    if (
        ((n += e) !== g || (0, o.z)(a.Z, l.Z, c.Z) || (n += e), n === m && (n = t.length - 1), n >= t.length || n === h)
    )
        return void (0, p.z)(f.Z.getHomeLink());
    let r = n === g ? _.I_8 : t[n],
        i = u.Z.getChannelId(r);
    (0, p.K)(r, i === r ? null : i, !1);
}, _.aZC);
