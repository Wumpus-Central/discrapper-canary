n.d(t, { A: () => p });
var l = n(311907),
    i = n(811024),
    a = n(782091),
    s = n(847381),
    r = n(849269),
    o = n(611010),
    c = n(576705),
    d = n(723702),
    u = n(818348),
    m = n(985018);
function p(e) {
    let t,
        { context: n, application: p, activityAction: _ } = e,
        A = "channel" === n.type ? n.channel : void 0,
        h = (0, l.bG)([c.A], () => c.A.can(u.xB.USE_EMBEDDED_ACTIVITIES, A)),
        f = (0, a.et)(A?.id),
        x = !1;
    switch (_) {
        case r.o6.LEAVE:
            x = !1;
            break;
        case r.o6.START:
            null == A ? (x = !1) : A?.isGuildVoice() ? f !== a.xy.CAN_LAUNCH && (x = !0) : (0, i.pE)(A) || (x = !0);
            break;
        case r.o6.JOIN:
            A?.isGuildVoice() ? (x = !h) : (0, i.pE)(A) || (x = !0);
    }
    if (_ !== r.o6.LEAVE) {
        let e = p instanceof o.Ay ? p.embeddedActivityConfig : p.embedded_activity_config,
            n = (0, s.A)((0, d.getOS)());
        null == e || e.supported_platforms.includes(n)
            ? A?.isThread() && ((x = !0), (t = m.intl.string(m.t.ddSR3v)))
            : ((x = !1), (t = m.intl.string(m.t.z2YTgJ)));
    }
    return x && null == t && (t = m.intl.string(m.t.f41E1g)), { disabled: x, reason: t };
}
