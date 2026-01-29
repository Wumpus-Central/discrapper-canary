n.d(t, {
    A: () => _,
}),
    n(896048);
var r = n(451988),
    i = n(73153),
    l = n(956793),
    a = n(272355),
    s = n(616356),
    o = n(734057),
    c = n(71393),
    u = n(885576),
    d = n(383501),
    p = n(927813),
    h = n(723702),
    g = n(652215);
let f = new r.Ep(),
    m = new r.Ep();
class A extends a.A {
    _initialize() {
        i.h.subscribe("IDLE", this.handleIdleUpdate);
    }
    _terminate() {
        f.stop(), m.stop(), i.h.unsubscribe("IDLE", this.handleIdleUpdate);
    }
    handleIdleUpdate() {
        let e = u.A.getIdleSince();
        if (!h.isPlatformEmbedded) return;
        for (let e of (f.stop(), m.stop(), s.A.getAllActiveStreams())) if (e.state !== g.XYD.ENDED) return;
        if (null == e) return;
        let t = d.A.getChannelId();
        if (null == t) return;
        m.start(18e6, () => {
            l.default.selectVoiceChannel(null);
        });
        let n = c.A.getGuild(d.A.getGuildId());
        if (null == n || null == n.afkChannelId || n.afkChannelId === t || null == n.afkTimeout) return;
        let r = o.A.getChannel(t);
        null == r ||
            r.isGuildStageVoice() ||
            f.start(e + n.afkTimeout * p.A.Millis.SECOND - Date.now(), () => {
                null != (n = c.A.getGuild(d.A.getGuildId())) &&
                    null != n.afkChannelId &&
                    l.default.selectVoiceChannel(n.afkChannelId, !1, !1, {
                        bypassIdleUpdate: !0,
                    });
            });
    }
}
let _ = new A();
