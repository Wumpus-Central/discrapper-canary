n.d(t, { A: () => f });
var i = n(299855),
    r = n.n(i),
    a = n(401843),
    l = n(77729),
    s = n(15285),
    o = n(616356),
    d = n(734057),
    u = n(71393),
    c = n(430452),
    A = n(576705),
    h = n(309010),
    _ = n(157257),
    E = n(723702),
    p = n(279250),
    m = n(880144),
    g = n(997630),
    I = n(905552),
    C = n(502075);
function f() {
    let e = !(arguments.length > 0) || void 0 === arguments[0] || arguments[0],
        t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : [];
    if (!(0, m.A)(c.Ay) || null != o.A.getCurrentUserActiveStream()) return !1;
    let n = h.A.getVoiceChannelId(),
        i = d.A.getChannel(n);
    if (null == i) return !1;
    let f = i.getGuildId();
    if (!(0, p.vz)(i, u.A, A.A, !1)) return !1;
    if (c.Ay.getUseSystemScreensharePicker())
        (0, E.isMac)() && r().satisfies(l.A?.os.release, C.WZ) ? (0, g.a)() : (0, g.a)("window");
    else {
        let n = (0, I.A)(s.Ay, _.A);
        if (null == n || (n.isLauncher && !e)) return !1;
        (0, a.XI)(f, i.id, { pid: n.pid, analyticsLocations: t });
    }
    return !0;
}
