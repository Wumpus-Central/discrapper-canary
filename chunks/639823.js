n.d(t, { A: () => E });
var i = n(451988),
    r = n(73153),
    a = n(956793),
    l = n(272355),
    s = n(616356),
    o = n(734057),
    d = n(71393),
    c = n(885576),
    u = n(383501),
    A = n(927813),
    h = n(723702),
    _ = n(652215);
let m = new i.Ep(),
    p = new i.Ep();
class g extends l.A {
    _initialize() {
        r.h.subscribe("IDLE", this.handleIdleUpdate);
    }
    _terminate() {
        m.stop(), p.stop(), r.h.unsubscribe("IDLE", this.handleIdleUpdate);
    }
    handleIdleUpdate() {
        let e = c.A.getIdleSince();
        if (!h.isPlatformEmbedded) return;
        for (let e of (m.stop(), p.stop(), s.A.getAllActiveStreams())) if (e.state !== _.XYD.ENDED) return;
        if (null == e) return;
        let t = u.A.getChannelId();
        if (null == t) return;
        p.start(18e6, () => {
            a.default.selectVoiceChannel(null);
        });
        let n = d.A.getGuild(u.A.getGuildId());
        if (null == n || null == n.afkChannelId || n.afkChannelId === t || null == n.afkTimeout) return;
        let i = o.A.getChannel(t);
        null == i ||
            i.isGuildStageVoice() ||
            m.start(e + n.afkTimeout * A.A.Millis.SECOND - Date.now(), () => {
                null != (n = d.A.getGuild(u.A.getGuildId())) &&
                    null != n.afkChannelId &&
                    a.default.selectVoiceChannel(n.afkChannelId, !1, !1, { bypassIdleUpdate: !0 });
            });
    }
}
let E = new g();
