t.d(n, {
    Z: function () {
        return h;
    }
});
var i = t(442837),
    l = t(595519),
    a = t(374065),
    o = t(761122),
    r = t(542094),
    s = t(973616),
    c = t(592125),
    d = t(496675),
    u = t(358085),
    m = t(231338),
    p = t(388032);
function h(e) {
    let n,
        { channelId: t, application: h, activityAction: f } = e,
        C = (0, i.e7)([c.Z], () => c.Z.getChannel(t)),
        v = (0, i.e7)([d.Z], () => d.Z.can(m.Pl.USE_EMBEDDED_ACTIVITIES, C)),
        _ = (0, a.KF)(null == C ? void 0 : C.id),
        x = !1;
    switch (f) {
        case r.JS.LEAVE:
            x = !1;
            break;
        case r.JS.START:
            (null == C ? void 0 : C.isGuildVoice()) ? _ !== a.jy.CAN_LAUNCH && (x = !0) : !(0, l.WS)(C) && (x = !0);
            break;
        case r.JS.JOIN:
            (null == C ? void 0 : C.isGuildVoice()) ? (x = !v) : !(0, l.WS)(C) && (x = !0);
    }
    if (f !== r.JS.LEAVE) {
        let e = h instanceof s.ZP ? h.embeddedActivityConfig : h.embedded_activity_config,
            t = (0, o.Z)((0, u.getOS)());
        null == e || e.supported_platforms.includes(t) ? (null == C ? void 0 : C.isThread()) && ((x = !0), (n = p.intl.string(p.t.ddSR3t))) : ((x = !1), (n = p.intl.string(p.t.z2YTgI)));
    }
    return (
        x && null == n && (n = p.intl.string(p.t.f41E1t)),
        {
            disabled: x,
            reason: n
        }
    );
}
