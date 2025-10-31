n.d(t, { Z: () => b }), n(388685);
var r = n(846519),
    i = n(570140),
    l = n(287734),
    a = n(317770),
    s = n(199902),
    o = n(592125),
    c = n(430824),
    u = n(517100),
    d = n(19780),
    p = n(70956),
    f = n(358085),
    m = n(981631);
let h = new r.V7(),
    g = new r.V7();
class _ extends a.Z {
    _initialize() {
        i.Z.subscribe("IDLE", this.handleIdleUpdate);
    }
    _terminate() {
        h.stop(), g.stop(), i.Z.unsubscribe("IDLE", this.handleIdleUpdate);
    }
    handleIdleUpdate() {
        let e = u.Z.getIdleSince();
        if (!f.isPlatformEmbedded) return;
        for (let e of (h.stop(), g.stop(), s.Z.getAllActiveStreams())) if (e.state !== m.jm8.ENDED) return;
        if (null == e) return;
        let t = d.Z.getChannelId();
        if (null == t) return;
        g.start(18000000, () => {
            l.default.selectVoiceChannel(null);
        });
        let n = c.Z.getGuild(d.Z.getGuildId());
        if (null == n || null == n.afkChannelId || n.afkChannelId === t || null == n.afkTimeout) return;
        let r = o.Z.getChannel(t);
        null != r &&
            (r.isGuildStageVoice() ||
                h.start(e + n.afkTimeout * p.Z.Millis.SECOND - Date.now(), () => {
                    null != (n = c.Z.getGuild(d.Z.getGuildId())) &&
                        null != n.afkChannelId &&
                        l.default.selectVoiceChannel(n.afkChannelId);
                }));
    }
}
let b = new _();
