n.d(t, { Z: () => p });
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
function p(e) {
    let t,
        { context: n, application: p, activityAction: _ } = e,
        m = "channel" === n.type ? n.channel : void 0,
        h = (0, r.e7)([c.Z], () => c.Z.can(d.Pl.USE_EMBEDDED_ACTIVITIES, m)),
        g = (0, a.KF)(null == m ? void 0 : m.id),
        E = !1;
    switch (_) {
        case s.JS.LEAVE:
            E = !1;
            break;
        case s.JS.START:
            null == m
                ? (E = !1)
                : (null == m ? void 0 : m.isGuildVoice())
                  ? g !== a.jy.CAN_LAUNCH && (E = !0)
                  : (0, i.WS)(m) || (E = !0);
            break;
        case s.JS.JOIN:
            (null == m ? void 0 : m.isGuildVoice()) ? (E = !h) : (0, i.WS)(m) || (E = !0);
    }
    if (_ !== s.JS.LEAVE) {
        let e = p instanceof l.ZP ? p.embeddedActivityConfig : p.embedded_activity_config,
            n = (0, o.Z)((0, u.getOS)());
        null == e || e.supported_platforms.includes(n)
            ? (null == m ? void 0 : m.isThread()) && ((E = !0), (t = f.intl.string(f.t.ddSR3v)))
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
