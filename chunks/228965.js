n.d(t, { A: () => p });
var r = n(311907),
    i = n(811024),
    a = n(782091),
    s = n(847381),
    o = n(849269),
    l = n(611010),
    c = n(576705),
    u = n(723702),
    d = n(818348),
    f = n(985018);
function p(e) {
    let t,
        { context: n, application: p, activityAction: _ } = e,
        h = "channel" === n.type ? n.channel : void 0,
        m = (0, r.bG)([c.A], () => c.A.can(d.xB.USE_EMBEDDED_ACTIVITIES, h)),
        g = (0, a.et)(null == h ? void 0 : h.id),
        E = !1;
    switch (_) {
        case o.o6.LEAVE:
            E = !1;
            break;
        case o.o6.START:
            null == h
                ? (E = !1)
                : (null == h ? void 0 : h.isGuildVoice())
                  ? g !== a.xy.CAN_LAUNCH && (E = !0)
                  : (0, i.pE)(h) || (E = !0);
            break;
        case o.o6.JOIN:
            (null == h ? void 0 : h.isGuildVoice()) ? (E = !m) : (0, i.pE)(h) || (E = !0);
    }
    if (_ !== o.o6.LEAVE) {
        let e = p instanceof l.Ay ? p.embeddedActivityConfig : p.embedded_activity_config,
            n = (0, s.A)((0, u.getOS)());
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
