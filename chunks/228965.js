"use strict";
n.d(t, { A: () => f });
var r = n(311907),
    i = n(811024),
    a = n(782091),
    s = n(847381),
    o = n(849269),
    l = n(611010),
    u = n(576705),
    c = n(723702),
    d = n(818348),
    _ = n(985018);
function f(e) {
    let t,
        { context: n, application: f, activityAction: p } = e,
        h = "channel" === n.type ? n.channel : void 0,
        m = (0, r.bG)([u.A], () => u.A.can(d.xB.USE_EMBEDDED_ACTIVITIES, h)),
        g = (0, a.et)(h?.id),
        E = !1;
    switch (p) {
        case o.o6.LEAVE:
            E = !1;
            break;
        case o.o6.START:
            null == h ? (E = !1) : h?.isGuildVoice() ? g !== a.xy.CAN_LAUNCH && (E = !0) : (0, i.pE)(h) || (E = !0);
            break;
        case o.o6.JOIN:
            h?.isGuildVoice() ? (E = !m) : (0, i.pE)(h) || (E = !0);
    }
    if (p !== o.o6.LEAVE) {
        let e = f instanceof l.Ay ? f.embeddedActivityConfig : f.embedded_activity_config,
            n = (0, s.A)((0, c.getOS)());
        null == e || e.supported_platforms.includes(n)
            ? h?.isThread() && ((E = !0), (t = _.intl.string(_.t.ddSR3v)))
            : ((E = !1), (t = _.intl.string(_.t.z2YTgJ)));
    }
    return E && null == t && (t = _.intl.string(_.t.f41E1g)), { disabled: E, reason: t };
}
