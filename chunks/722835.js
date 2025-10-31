n.d(t, { Z: () => I });
var r = n(209739),
    i = n.n(r),
    l = n(872810),
    a = n(579806),
    s = n(594190),
    o = n(199902),
    c = n(592125),
    u = n(430824),
    d = n(131951),
    p = n(496675),
    f = n(944486),
    m = n(449224),
    h = n(358085),
    g = n(102172),
    _ = n(74299),
    b = n(299570),
    E = n(989941),
    O = n(70722);
function I() {
    let e = !(arguments.length > 0) || void 0 === arguments[0] || arguments[0],
        t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : [];
    if (!(0, _.Z)(d.Z) || null != o.Z.getCurrentUserActiveStream()) return !1;
    let n = f.Z.getVoiceChannelId(),
        r = c.Z.getChannel(n);
    if (null == r) return !1;
    let I = r.getGuildId();
    if (!(0, g.JL)(r, u.Z, p.Z, !1)) return !1;
    if (d.Z.getUseSystemScreensharePicker())
        (0, h.isMac)() && i().satisfies(null === a.Z || void 0 === a.Z ? void 0 : a.Z.os.release, O.jR)
            ? (0, b.T)()
            : (0, b.T)("window");
    else {
        let n = (0, E.Z)(s.ZP, m.Z);
        if (null == n || (n.isLauncher && !e)) return !1;
        (0, l.WH)(I, r.id, {
            pid: n.pid,
            analyticsLocations: t,
        });
    }
    return !0;
}
