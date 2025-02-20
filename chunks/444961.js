n.d(t, { Z: () => _ }), n(47120);
var r = n(846519),
    i = n(570140),
    l = n(287734),
    o = n(317770),
    a = n(199902),
    s = n(592125),
    c = n(430824),
    u = n(517100),
    d = n(19780),
    p = n(70956),
    h = n(358085),
    g = n(981631);
let f = new r.V7(),
    m = new r.V7();
class b extends o.Z {
    _initialize() {
        i.Z.subscribe('IDLE', this.handleIdleUpdate);
    }
    _terminate() {
        f.stop(), m.stop(), i.Z.unsubscribe('IDLE', this.handleIdleUpdate);
    }
    handleIdleUpdate() {
        let e = u.Z.getIdleSince();
        if (!h.isPlatformEmbedded) return;
        for (let e of (f.stop(), m.stop(), a.Z.getAllActiveStreams())) if (e.state !== g.jm8.ENDED) return;
        if (null == e) return;
        let t = d.Z.getChannelId();
        if (null == t) return;
        m.start(18000000, () => {
            l.default.selectVoiceChannel(null);
        });
        let n = c.Z.getGuild(d.Z.getGuildId());
        if (null == n || null == n.afkChannelId || n.afkChannelId === t || null == n.afkTimeout) return;
        let r = s.Z.getChannel(t);
        null != r &&
            (r.isGuildStageVoice() ||
                f.start(e + n.afkTimeout * p.Z.Millis.SECOND - Date.now(), () => {
                    null != (n = c.Z.getGuild(d.Z.getGuildId())) && null != n.afkChannelId && l.default.selectVoiceChannel(n.afkChannelId);
                }));
    }
}
let _ = new b();
