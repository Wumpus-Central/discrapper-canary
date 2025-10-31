n.d(t, { Z: () => m });
var i = n(442837),
    l = n(595519),
    r = n(374065),
    a = n(761122),
    o = n(542094),
    s = n(973616),
    c = n(496675),
    u = n(358085),
    d = n(231338),
    p = n(388032);
function m(e) {
    let t,
        { context: n, application: m, activityAction: f } = e,
        h = "channel" === n.type ? n.channel : void 0,
        v = (0, i.e7)([c.Z], () => c.Z.can(d.Pl.USE_EMBEDDED_ACTIVITIES, h)),
        y = (0, r.KF)(null == h ? void 0 : h.id),
        g = !1;
    switch (f) {
        case o.JS.LEAVE:
            g = !1;
            break;
        case o.JS.START:
            null == h
                ? (g = !1)
                : (null == h ? void 0 : h.isGuildVoice())
                  ? y !== r.jy.CAN_LAUNCH && (g = !0)
                  : (0, l.WS)(h) || (g = !0);
            break;
        case o.JS.JOIN:
            (null == h ? void 0 : h.isGuildVoice()) ? (g = !v) : (0, l.WS)(h) || (g = !0);
    }
    if (f !== o.JS.LEAVE) {
        let e = m instanceof s.ZP ? m.embeddedActivityConfig : m.embedded_activity_config,
            n = (0, a.Z)((0, u.getOS)());
        null == e || e.supported_platforms.includes(n)
            ? (null == h ? void 0 : h.isThread()) && ((g = !0), (t = p.intl.string(p.t.ddSR3v)))
            : ((g = !1), (t = p.intl.string(p.t.z2YTgJ)));
    }
    return (
        g && null == t && (t = p.intl.string(p.t.f41E1g)),
        {
            disabled: g,
            reason: t,
        }
    );
}
