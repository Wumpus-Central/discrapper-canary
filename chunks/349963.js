n.d(t, { A: () => O });
var r = n(299855),
    i = n.n(r),
    l = n(401843),
    a = n(77729),
    s = n(15285),
    o = n(616356),
    c = n(734057),
    u = n(71393),
    d = n(430452),
    p = n(576705),
    f = n(309010),
    h = n(157257),
    A = n(723702),
    g = n(279250),
    m = n(880144),
    b = n(997630),
    _ = n(905552),
    E = n(502075);
function O() {
    let e = !(arguments.length > 0) || void 0 === arguments[0] || arguments[0],
        t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : [];
    if (!(0, m.A)(d.A) || null != o.A.getCurrentUserActiveStream()) return !1;
    let n = f.A.getVoiceChannelId(),
        r = c.A.getChannel(n);
    if (null == r) return !1;
    let O = r.getGuildId();
    if (!(0, g.vz)(r, u.A, p.A, !1)) return !1;
    if (d.A.getUseSystemScreensharePicker())
        (0, A.isMac)() && i().satisfies(null === a.A || void 0 === a.A ? void 0 : a.A.os.release, E.WZ)
            ? (0, b.a)()
            : (0, b.a)("window");
    else {
        let n = (0, _.A)(s.Ay, h.A);
        if (null == n || (n.isLauncher && !e)) return !1;
        (0, l.XI)(O, r.id, {
            pid: n.pid,
            analyticsLocations: t,
        });
    }
    return !0;
}
