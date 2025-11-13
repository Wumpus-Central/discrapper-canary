n.d(t, { Z: () => _ });
var r = n(442837),
    i = n(595519),
    a = n(374065),
    o = n(761122),
    s = n(542094),
    l = n(973616),
    c = n(496675),
    u = n(358085),
    d = n(231338),
    f = n(388032);
function _(e) {
    let t,
        { context: n, application: _, activityAction: p } = e,
        h = "channel" === n.type ? n.channel : void 0,
        m = (0, r.e7)([c.Z], () => c.Z.can(d.Pl.USE_EMBEDDED_ACTIVITIES, h)),
        g = (0, a.KF)(null == h ? void 0 : h.id),
        E = !1;
    switch (p) {
        case s.JS.LEAVE:
            E = !1;
            break;
        case s.JS.START:
            null == h
                ? (E = !1)
                : (null == h ? void 0 : h.isGuildVoice())
                  ? g !== a.jy.CAN_LAUNCH && (E = !0)
                  : (0, i.WS)(h) || (E = !0);
            break;
        case s.JS.JOIN:
            (null == h ? void 0 : h.isGuildVoice()) ? (E = !m) : (0, i.WS)(h) || (E = !0);
    }
    if (p !== s.JS.LEAVE) {
        let e = _ instanceof l.ZP ? _.embeddedActivityConfig : _.embedded_activity_config,
            n = (0, o.Z)((0, u.getOS)());
        null == e || e.supported_platforms.includes(n)
            ? (null == h ? void 0 : h.isThread()) && ((E = !0), (t = f.intl.string(f.t.ddSR3v)))
            : ((E = !1), (t = f.intl.string(f.t.z2YTgJ)));
    }
    return (
        E && null == t && (t = f.intl.string(f.t.f41E1g)),
        {
            disabled: E,
            reason: t,
        }
    );
}
