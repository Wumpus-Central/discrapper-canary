n.d(t, { Z: () => p });
var i = n(442837),
    l = n(595519),
    r = n(374065),
    o = n(761122),
    a = n(542094),
    s = n(973616),
    c = n(496675),
    u = n(358085),
    d = n(231338),
    m = n(388032);
function p(e) {
    let t,
        { context: n, application: p, activityAction: h } = e,
        f = 'channel' === n.type ? n.channel : void 0,
        v = (0, i.e7)([c.Z], () => c.Z.can(d.Pl.USE_EMBEDDED_ACTIVITIES, f)),
        N = (0, r.KF)(null == f ? void 0 : f.id),
        x = !1;
    switch (h) {
        case a.JS.LEAVE:
            x = !1;
            break;
        case a.JS.START:
            null == f ? (x = !1) : (null == f ? void 0 : f.isGuildVoice()) ? N !== r.jy.CAN_LAUNCH && (x = !0) : (0, l.WS)(f) || (x = !0);
            break;
        case a.JS.JOIN:
            (null == f ? void 0 : f.isGuildVoice()) ? (x = !v) : (0, l.WS)(f) || (x = !0);
    }
    if (h !== a.JS.LEAVE) {
        let e = p instanceof s.ZP ? p.embeddedActivityConfig : p.embedded_activity_config,
            n = (0, o.Z)((0, u.getOS)());
        null == e || e.supported_platforms.includes(n) ? (null == f ? void 0 : f.isThread()) && ((x = !0), (t = m.NW.string(m.t.ddSR3t))) : ((x = !1), (t = m.NW.string(m.t.z2YTgI)));
    }
    return (
        x && null == t && (t = m.NW.string(m.t.f41E1t)),
        {
            disabled: x,
            reason: t
        }
    );
}
