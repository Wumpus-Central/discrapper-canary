n.d(t, { Z: () => m });
var l = n(442837),
    i = n(595519),
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
        h = 'channel' === n.type ? n.channel : void 0,
        v = (0, l.e7)([c.Z], () => c.Z.can(d.Pl.USE_EMBEDDED_ACTIVITIES, h)),
        y = (0, r.KF)(null == h ? void 0 : h.id),
        x = !1;
    switch (f) {
        case o.JS.LEAVE:
            x = !1;
            break;
        case o.JS.START:
            null == h ? (x = !1) : (null == h ? void 0 : h.isGuildVoice()) ? y !== r.jy.CAN_LAUNCH && (x = !0) : (0, i.WS)(h) || (x = !0);
            break;
        case o.JS.JOIN:
            (null == h ? void 0 : h.isGuildVoice()) ? (x = !v) : (0, i.WS)(h) || (x = !0);
    }
    if (f !== o.JS.LEAVE) {
        let e = m instanceof s.ZP ? m.embeddedActivityConfig : m.embedded_activity_config,
            n = (0, a.Z)((0, u.getOS)());
        null == e || e.supported_platforms.includes(n) ? (null == h ? void 0 : h.isThread()) && ((x = !0), (t = p.intl.string(p.t.ddSR3t))) : ((x = !1), (t = p.intl.string(p.t.z2YTgI)));
    }
    return (
        x && null == t && (t = p.intl.string(p.t.f41E1t)),
        {
            disabled: x,
            reason: t
        }
    );
}
