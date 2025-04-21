n.d(t, { Z: () => m });
var i = n(442837),
    r = n(595519),
    l = n(374065),
    o = n(761122),
    a = n(542094),
    s = n(973616),
    c = n(496675),
    u = n(358085),
    d = n(231338),
    p = n(388032);
function m(e) {
    let t,
        { context: n, application: m, activityAction: f } = e,
        h = 'channel' === n.type ? n.channel : void 0,
        b = (0, i.e7)([c.Z], () => c.Z.can(d.Pl.USE_EMBEDDED_ACTIVITIES, h)),
        _ = (0, l.KF)(null == h ? void 0 : h.id),
        y = !1;
    switch (f) {
        case a.JS.LEAVE:
            y = !1;
            break;
        case a.JS.START:
            null == h ? (y = !1) : (null == h ? void 0 : h.isGuildVoice()) ? _ !== l.jy.CAN_LAUNCH && (y = !0) : (0, r.WS)(h) || (y = !0);
            break;
        case a.JS.JOIN:
            (null == h ? void 0 : h.isGuildVoice()) ? (y = !b) : (0, r.WS)(h) || (y = !0);
    }
    if (f !== a.JS.LEAVE) {
        let e = m instanceof s.ZP ? m.embeddedActivityConfig : m.embedded_activity_config,
            n = (0, o.Z)((0, u.getOS)());
        null == e || e.supported_platforms.includes(n) ? (null == h ? void 0 : h.isThread()) && ((y = !0), (t = p.intl.string(p.t.ddSR3t))) : ((y = !1), (t = p.intl.string(p.t.z2YTgI)));
    }
    return (
        y && null == t && (t = p.intl.string(p.t.f41E1t)),
        {
            disabled: y,
            reason: t
        }
    );
}
