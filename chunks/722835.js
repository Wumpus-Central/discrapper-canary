n.d(t, {
    Z: function () {
        return N;
    }
});
var i = n(553813),
    r = n.n(i),
    l = n(872810),
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
    f = n(102172),
    _ = n(74299),
    E = n(299570),
    I = n(989941),
    C = n(70722);
function N() {
    let e = !(arguments.length > 0) || void 0 === arguments[0] || arguments[0];
    if (!(0, _.Z)(u.Z) || null != o.Z.getCurrentUserActiveStream()) return !1;
    let t = m.Z.getVoiceChannelId(),
        n = c.Z.getChannel(t);
    if (null == n) return !1;
    let i = n.getGuildId();
    if (!(0, f.JL)(n, d.Z, h.Z, !1)) return !1;
    if (u.Z.getUseSystemScreensharePicker()) (0, g.isMac)() && r().satisfies(null === a.Z || void 0 === a.Z ? void 0 : a.Z.os.release, C.jR) ? (0, E.T)() : (0, E.T)('window');
    else {
        let t = (0, I.Z)(s.ZP, p.Z);
        if (null == t || (t.isLauncher && !e)) return !1;
        (0, l.WH)(i, n.id, { pid: t.pid });
    }
    return !0;
}
