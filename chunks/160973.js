n.d(t, { Z: () => m });
var i = n(442837),
    r = n(595519),
    l = n(374065),
    o = n(761122),
    a = n(542094),
    c = n(973616),
    s = n(496675),
    u = n(358085),
    d = n(231338),
    p = n(388032);
function m(e) {
    let t,
        { context: n, application: m, activityAction: f } = e,
        h = 'channel' === n.type ? n.channel : void 0,
        b = (0, i.e7)([s.Z], () => s.Z.can(d.Pl.USE_EMBEDDED_ACTIVITIES, h)),
        _ = (0, l.KF)(null == h ? void 0 : h.id),
        C = !1;
    switch (f) {
        case a.JS.LEAVE:
            C = !1;
            break;
        case a.JS.START:
            null == h ? (C = !1) : (null == h ? void 0 : h.isGuildVoice()) ? _ !== l.jy.CAN_LAUNCH && (C = !0) : (0, r.WS)(h) || (C = !0);
            break;
        case a.JS.JOIN:
            (null == h ? void 0 : h.isGuildVoice()) ? (C = !b) : (0, r.WS)(h) || (C = !0);
    }
    if (f !== a.JS.LEAVE) {
        let e = m instanceof c.ZP ? m.embeddedActivityConfig : m.embedded_activity_config,
            n = (0, o.Z)((0, u.getOS)());
        null == e || e.supported_platforms.includes(n) ? (null == h ? void 0 : h.isThread()) && ((C = !0), (t = p.intl.string(p.t.ddSR3t))) : ((C = !1), (t = p.intl.string(p.t.z2YTgI)));
    }
    return (
        C && null == t && (t = p.intl.string(p.t.f41E1t)),
        {
            disabled: C,
            reason: t
        }
    );
}
