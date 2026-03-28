"use strict";
n.d(t, { A: () => m });
var r = n(439372),
    i = n(400492),
    s = n(312671),
    a = n(470710),
    o = n(734057),
    l = n(803224),
    u = n(309010),
    c = n(351906),
    d = n(977997),
    _ = n(607567),
    f = n(313961);
let p = (0, i.aN)("call_calling", s.A.getSoundpack());
class h extends r.A {
    #e = new Set();
    _initialize() {
        this.stores = new Map()
            .set(a.A, this.handleRingUpdate)
            .set(l.A, this.handleRingUpdate)
            .set(c.A, this.handleRingUpdate)
            .set(d.A, this.handleRingUpdate)
            .set(f.A, this.handleChannelRTCStoreChange)
            .set(s.A, this.handleSoundpackUpdate);
    }
    actions = {
        GUILD_LOCAL_RING_START: (e) => this.handleGuildRingStart(e),
        GUILD_RING_STOP: (e) => this.handleGuildRingStop(e),
    };
    _handleRing = (e, t) => {
        let n = d.A.getCurrentClientVoiceChannelId(t),
            r = null != n && _.Ay.countVoiceStatesForChannel(n) >= 2;
        null == n || r || !e || l.A.isSoundDisabled("call_calling") || c.A.disableSounds ? p.stop() : p.loop();
    };
    handleSoundpackUpdate = () => {
        p.stop(), (p = (0, i.aN)("call_calling", s.A.getSoundpack()));
    };
    handleRingUpdate = () => {
        let e = u.A.getVoiceChannelId(),
            t = o.A.getChannel(e)?.guild_id ?? null,
            n = a.A.getCalls().some(
                (e) => e.ringing.length > 0 && d.A.getCurrentClientVoiceChannelId(null) === e.channelId,
            );
        this._handleRing(n || this.#e.size > 0, t);
    };
    handleGuildRingStart = (e) => {
        let { ringing: t, guildId: n } = e;
        t.forEach((e) => {
            this.#e.add(e);
        }),
            this._handleRing(this.#e.size > 0, n);
    };
    handleGuildRingStop = (e) => {
        let { ringing: t, guildId: n } = e;
        t.forEach((e) => {
            this.#e.delete(e);
        }),
            this._handleRing(this.#e.size > 0, n);
    };
    handleChannelRTCStoreChange = () => {
        let e = u.A.getVoiceChannelId();
        if (!(this.#e.size > 0)) return;
        if (null == e) {
            (this.#e = new Set()), this._handleRing(this.#e.size > 0, null);
            return;
        }
        if (null == e) return;
        let t = f.A.getGuildRingingUsers(e),
            n = new Set([...this.#e].filter((e) => !t.has(e)));
        n.size > 0 &&
            (n.forEach((e) => {
                this.#e.delete(e);
            }),
            this._handleRing(this.#e.size > 0, null));
    };
}
let m = new h();
