n.d(t, { Z: () => p });
var i = n(442837),
    l = n(595519),
    a = n(374065),
    o = n(761122),
    s = n(542094),
    r = n(973616),
    c = n(496675),
    d = n(358085),
    u = n(231338),
    m = n(388032);
function p(e) {
    let t,
        { context: n, application: p, activityAction: h } = e,
        x = 'channel' === n.type ? n.channel : void 0,
        v = (0, i.e7)([c.Z], () => c.Z.can(u.Pl.USE_EMBEDDED_ACTIVITIES, x)),
        f = (0, a.KF)(null == x ? void 0 : x.id),
        N = !1;
    switch (h) {
        case s.JS.LEAVE:
            N = !1;
            break;
        case s.JS.START:
            null == x ? (N = !1) : (null == x ? void 0 : x.isGuildVoice()) ? f !== a.jy.CAN_LAUNCH && (N = !0) : (0, l.WS)(x) || (N = !0);
            break;
        case s.JS.JOIN:
            (null == x ? void 0 : x.isGuildVoice()) ? (N = !v) : (0, l.WS)(x) || (N = !0);
    }
    if (h !== s.JS.LEAVE) {
        let e = p instanceof r.ZP ? p.embeddedActivityConfig : p.embedded_activity_config,
            n = (0, o.Z)((0, d.getOS)());
        null == e || e.supported_platforms.includes(n) ? (null == x ? void 0 : x.isThread()) && ((N = !0), (t = m.intl.string(m.t.ddSR3t))) : ((N = !1), (t = m.intl.string(m.t.z2YTgI)));
    }
    return (
        N && null == t && (t = m.intl.string(m.t.f41E1t)),
        {
            disabled: N,
            reason: t
        }
    );
}
