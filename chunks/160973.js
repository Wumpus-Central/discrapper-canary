n.d(t, { Z: () => m });
var i = n(442837),
    r = n(595519),
    l = n(374065),
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
        b = (0, i.e7)([c.Z], () => c.Z.can(d.Pl.USE_EMBEDDED_ACTIVITIES, h)),
        C = (0, l.KF)(null == h ? void 0 : h.id),
        x = !1;
    switch (f) {
        case o.JS.LEAVE:
            x = !1;
            break;
        case o.JS.START:
            null == h ? (x = !1) : (null == h ? void 0 : h.isGuildVoice()) ? C !== l.jy.CAN_LAUNCH && (x = !0) : (0, r.WS)(h) || (x = !0);
            break;
        case o.JS.JOIN:
            (null == h ? void 0 : h.isGuildVoice()) ? (x = !b) : (0, r.WS)(h) || (x = !0);
    }
    if (f !== o.JS.LEAVE) {
        let e = m instanceof s.ZP ? m.embeddedActivityConfig : m.embedded_activity_config,
            n = (0, a.Z)((0, u.getOS)());
        null == e || e.supported_platforms.includes(n) ? (null == h ? void 0 : h.isThread()) && ((x = !0), (t = p.NW.string(p.t.ddSR3t))) : ((x = !1), (t = p.NW.string(p.t.z2YTgI)));
    }
    return (
        x && null == t && (t = p.NW.string(p.t.f41E1t)),
        {
            disabled: x,
            reason: t
        }
    );
}
