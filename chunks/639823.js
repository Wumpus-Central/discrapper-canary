n.d(t, { A: () => b }), n(896048);
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
    f = n(723702),
    h = n(652215);
let A = new r.Ep(),
    g = new r.Ep();
class m extends a.A {
    _initialize() {
        i.h.subscribe("IDLE", this.handleIdleUpdate);
    }
    _terminate() {
        A.stop(), g.stop(), i.h.unsubscribe("IDLE", this.handleIdleUpdate);
    }
    handleIdleUpdate() {
        let e = u.A.getIdleSince();
        if (!f.isPlatformEmbedded) return;
        for (let e of (A.stop(), g.stop(), s.A.getAllActiveStreams())) if (e.state !== h.XYD.ENDED) return;
        if (null == e) return;
        let t = d.A.getChannelId();
        if (null == t) return;
        g.start(18000000, () => {
            l.default.selectVoiceChannel(null);
        });
        let n = c.A.getGuild(d.A.getGuildId());
        if (null == n || null == n.afkChannelId || n.afkChannelId === t || null == n.afkTimeout) return;
        let r = o.A.getChannel(t);
        null == r ||
            r.isGuildStageVoice() ||
            A.start(e + n.afkTimeout * p.A.Millis.SECOND - Date.now(), () => {
                null != (n = c.A.getGuild(d.A.getGuildId())) &&
                    null != n.afkChannelId &&
                    l.default.selectVoiceChannel(n.afkChannelId);
            });
    }
}
let b = new m();
