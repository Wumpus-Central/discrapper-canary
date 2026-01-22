n.d(t, { A: () => I }), n(896048);
var r = n(439372),
    i = n(400492),
    a = n(312671),
    s = n(470710),
    o = n(734057),
    l = n(803224),
    c = n(309010),
    u = n(351906),
    d = n(977997),
    f = n(607567),
    p = n(313961);
function _(e, t) {
    if (t.has(e)) throw TypeError("Cannot initialize the same private elements twice on an object");
}
function h(e, t) {
    return t.get ? t.get.call(e) : t.value;
}
function m(e, t, n) {
    if (t.set) t.set.call(e, n);
    else {
        if (!t.writable) throw TypeError("attempted to set read only private field");
        t.value = n;
    }
}
function g(e, t, n) {
    if (!t.has(e)) throw TypeError("attempted to " + n + " private field on non-instance");
    return t.get(e);
}
function E(e, t) {
    var n = g(e, t, "get");
    return h(e, n);
}
function b(e, t, n) {
    _(e, t), t.set(e, n);
}
function y(e, t, n) {
    var r = g(e, t, "set");
    return m(e, r, n), n;
}
function O(e, t, n) {
    return (
        t in e
            ? Object.defineProperty(e, t, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0,
              })
            : (e[t] = n),
        e
    );
}
let A = (0, i.aN)("call_calling", a.A.getSoundpack());
var v = new WeakMap();
class S extends r.A {
    _initialize() {
        this.stores = new Map()
            .set(s.A, this.handleRingUpdate)
            .set(l.A, this.handleRingUpdate)
            .set(u.A, this.handleRingUpdate)
            .set(d.A, this.handleRingUpdate)
            .set(p.A, this.handleChannelRTCStoreChange)
            .set(a.A, this.handleSoundpackUpdate);
    }
    constructor(...e) {
        super(...e),
            b(this, v, {
                writable: !0,
                value: new Set(),
            }),
            O(this, "actions", {
                GUILD_LOCAL_RING_START: (e) => this.handleGuildRingStart(e),
                GUILD_RING_STOP: (e) => this.handleGuildRingStop(e),
            }),
            O(this, "_handleRing", (e, t) => {
                let n = d.A.getCurrentClientVoiceChannelId(t),
                    r = null != n && f.Ay.countVoiceStatesForChannel(n) >= 2;
                null == n || r || !e || l.A.isSoundDisabled("call_calling") || u.A.disableSounds ? A.stop() : A.loop();
            }),
            O(this, "handleSoundpackUpdate", () => {
                A.stop(), (A = (0, i.aN)("call_calling", a.A.getSoundpack()));
            }),
            O(this, "handleRingUpdate", () => {
                var e, t;
                let n = c.A.getVoiceChannelId(),
                    r = null != (e = null == (t = o.A.getChannel(n)) ? void 0 : t.guild_id) ? e : null,
                    i = s.A.getCalls().some(
                        (e) => e.ringing.length > 0 && d.A.getCurrentClientVoiceChannelId(null) === e.channelId,
                    );
                this._handleRing(i || E(this, v).size > 0, r);
            }),
            O(this, "handleGuildRingStart", (e) => {
                let { ringing: t, guildId: n } = e;
                t.forEach((e) => {
                    E(this, v).add(e);
                }),
                    this._handleRing(E(this, v).size > 0, n);
            }),
            O(this, "handleGuildRingStop", (e) => {
                let { ringing: t, guildId: n } = e;
                t.forEach((e) => {
                    E(this, v).delete(e);
                }),
                    this._handleRing(E(this, v).size > 0, n);
            }),
            O(this, "handleChannelRTCStoreChange", () => {
                let e = c.A.getVoiceChannelId(),
                    t = E(this, v).size > 0;
                if (!t) return;
                if (null == e && t) {
                    y(this, v, new Set()), this._handleRing(E(this, v).size > 0, null);
                    return;
                }
                if (null == e) return;
                let n = p.A.getGuildRingingUsers(e),
                    r = new Set([...E(this, v)].filter((e) => !n.has(e)));
                r.size > 0 &&
                    (r.forEach((e) => {
                        E(this, v).delete(e);
                    }),
                    this._handleRing(E(this, v).size > 0, null));
            });
    }
}
let I = new S();
