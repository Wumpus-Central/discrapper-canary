n.d(t, { A: () => C });
var i = n(299855),
    r = n.n(i),
    a = n(401843),
    l = n(77729),
    s = n(15285),
    o = n(616356),
    d = n(734057),
    c = n(71393),
    u = n(430452),
    A = n(576705),
    h = n(309010),
    _ = n(157257),
    m = n(723702),
    p = n(279250),
    g = n(880144),
    E = n(997630),
    f = n(905552),
    I = n(502075);
function C() {
    let e = !(arguments.length > 0) || void 0 === arguments[0] || arguments[0],
        t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : [];
    if (!(0, g.A)(u.A) || null != o.A.getCurrentUserActiveStream()) return !1;
    let n = h.A.getVoiceChannelId(),
        i = d.A.getChannel(n);
    if (null == i) return !1;
    let C = i.getGuildId();
    if (!(0, p.vz)(i, c.A, A.A, !1)) return !1;
    if (u.A.getUseSystemScreensharePicker())
        (0, m.isMac)() && r().satisfies(l.A?.os.release, I.WZ) ? (0, E.a)() : (0, E.a)("window");
    else {
        let n = (0, f.A)(s.Ay, _.A);
        if (null == n || (n.isLauncher && !e)) return !1;
        (0, a.XI)(C, i.id, { pid: n.pid, analyticsLocations: t });
    }
    return !0;
}
