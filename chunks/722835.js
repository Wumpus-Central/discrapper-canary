n.d(t, { Z: () => v });
var i = n(209739),
    l = n.n(i),
    r = n(872810),
    a = n(579806),
    s = n(594190),
    o = n(199902),
    c = n(592125),
    d = n(430824),
    u = n(131951),
    h = n(496675),
    m = n(944486),
    p = n(449224),
    g = n(358085),
    _ = n(102172),
    f = n(74299),
    E = n(299570),
    I = n(989941),
    C = n(70722);
function v() {
    let e = !(arguments.length > 0) || void 0 === arguments[0] || arguments[0];
    if (!(0, f.Z)(u.Z) || null != o.Z.getCurrentUserActiveStream()) return !1;
    let t = m.Z.getVoiceChannelId(),
        n = c.Z.getChannel(t);
    if (null == n) return !1;
    let i = n.getGuildId();
    if (!(0, _.JL)(n, d.Z, h.Z, !1)) return !1;
    if (u.Z.getUseSystemScreensharePicker()) (0, g.isMac)() && l().satisfies(null === a.Z || void 0 === a.Z ? void 0 : a.Z.os.release, C.jR) ? (0, E.T)() : (0, E.T)('window');
    else {
        let t = (0, I.Z)(s.ZP, p.Z);
        if (null == t || (t.isLauncher && !e)) return !1;
        (0, r.WH)(i, n.id, { pid: t.pid });
    }
    return !0;
}
