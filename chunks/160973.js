t.d(n, {
    Z: function () {
        return p;
    }
});
var i = t(442837),
    l = t(595519),
    o = t(374065),
    a = t(761122),
    r = t(542094),
    s = t(973616),
    c = t(496675),
    d = t(358085),
    u = t(231338),
    m = t(388032);
function p(e) {
    let n,
        { context: t, application: p, activityAction: h } = e,
        f = 'channel' === t.type ? t.channel : void 0,
        C = (0, i.e7)([c.Z], () => c.Z.can(u.Pl.USE_EMBEDDED_ACTIVITIES, f)),
        v = (0, o.KF)(null == f ? void 0 : f.id),
        x = !1;
    switch (h) {
        case r.JS.LEAVE:
            x = !1;
            break;
        case r.JS.START:
            null == f ? (x = !1) : (null == f ? void 0 : f.isGuildVoice()) ? v !== o.jy.CAN_LAUNCH && (x = !0) : !(0, l.WS)(f) && (x = !0);
            break;
        case r.JS.JOIN:
            (null == f ? void 0 : f.isGuildVoice()) ? (x = !C) : !(0, l.WS)(f) && (x = !0);
    }
    if (h !== r.JS.LEAVE) {
        let e = p instanceof s.ZP ? p.embeddedActivityConfig : p.embedded_activity_config,
            t = (0, a.Z)((0, d.getOS)());
        null == e || e.supported_platforms.includes(t) ? (null == f ? void 0 : f.isThread()) && ((x = !0), (n = m.intl.string(m.t.ddSR3t))) : ((x = !1), (n = m.intl.string(m.t.z2YTgI)));
    }
    return (
        x && null == n && (n = m.intl.string(m.t.f41E1t)),
        {
            disabled: x,
            reason: n
        }
    );
}
