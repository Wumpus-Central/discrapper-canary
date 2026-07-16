"use strict";
n.d(t, { A: () => I });
var i = n(439372),
    r = n(400492),
    a = n(312671),
    s = n(470710),
    l = n(734057),
    o = n(803224),
    d = n(309010),
    c = n(351906),
    u = n(977997),
    _ = n(607567),
    E = n(313961);
let A = (0, r.aN)("call_calling", a.A.getSoundpack());
class h extends i.A {
    #e = new Set();
    _initialize() {
        this.stores = new Map()
            .set(s.A, this.handleRingUpdate)
            .set(o.A, this.handleRingUpdate)
            .set(c.A, this.handleRingUpdate)
            .set(u.A, this.handleRingUpdate)
            .set(E.A, this.handleChannelRTCStoreChange)
            .set(a.A, this.handleSoundpackUpdate);
    }
    actions = {
        GUILD_LOCAL_RING_START: (e) => this.handleGuildRingStart(e),
        GUILD_RING_STOP: (e) => this.handleGuildRingStop(e),
    };
    _handleRing = (e, t) => {
        let n = u.A.getCurrentClientVoiceChannelId(t),
            i = null != n && _.Ay.countVoiceStatesForChannel(n) >= 2;
        null == n || i || !e || o.A.isSoundDisabled("call_calling") || c.A.disableSounds ? A.stop() : A.loop();
    };
    handleSoundpackUpdate = () => {
        A.stop(), (A = (0, r.aN)("call_calling", a.A.getSoundpack()));
    };
    handleRingUpdate = () => {
        let e = d.Ay.getVoiceChannelId(),
            t = l.A.getChannel(e)?.guild_id ?? null,
            n = s.A.getCalls().some(
                (e) => e.ringing.length > 0 && u.A.getCurrentClientVoiceChannelId(null) === e.channelId,
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
        let e = d.Ay.getVoiceChannelId();
        if (!(this.#e.size > 0)) return;
        if (null == e) {
            (this.#e = new Set()), this._handleRing(this.#e.size > 0, null);
            return;
        }
        if (null == e) return;
        let t = E.A.getGuildRingingUsers(e),
            n = new Set([...this.#e].filter((e) => !t.has(e)));
        n.size > 0 &&
            (n.forEach((e) => {
                this.#e.delete(e);
            }),
            this._handleRing(this.#e.size > 0, null));
    };
}
let I = new h();
