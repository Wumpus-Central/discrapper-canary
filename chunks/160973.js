n.d(t, { Z: () => m });
var i = n(442837),
    r = n(595519),
    l = n(374065),
    a = n(761122),
    o = n(542094),
    s = n(973616),
    c = n(496675),
    d = n(358085),
    u = n(231338),
    p = n(388032);
function m(e) {
    let t,
        { context: n, application: m, activityAction: f } = e,
        h = 'channel' === n.type ? n.channel : void 0,
        b = (0, i.e7)([c.Z], () => c.Z.can(u.Pl.USE_EMBEDDED_ACTIVITIES, h)),
        x = (0, l.KF)(null == h ? void 0 : h.id),
        C = !1;
    switch (f) {
        case o.JS.LEAVE:
            C = !1;
            break;
        case o.JS.START:
            null == h ? (C = !1) : (null == h ? void 0 : h.isGuildVoice()) ? x !== l.jy.CAN_LAUNCH && (C = !0) : (0, r.WS)(h) || (C = !0);
            break;
        case o.JS.JOIN:
            (null == h ? void 0 : h.isGuildVoice()) ? (C = !b) : (0, r.WS)(h) || (C = !0);
    }
    if (f !== o.JS.LEAVE) {
        let e = m instanceof s.ZP ? m.embeddedActivityConfig : m.embedded_activity_config,
            n = (0, a.Z)((0, d.getOS)());
        null == e || e.supported_platforms.includes(n) ? (null == h ? void 0 : h.isThread()) && ((C = !0), (t = p.NW.string(p.t.ddSR3t))) : ((C = !1), (t = p.NW.string(p.t.z2YTgI)));
    }
    return (
        C && null == t && (t = p.NW.string(p.t.f41E1t)),
        {
            disabled: C,
            reason: t
        }
    );
}
