n.d(t, { Z: () => I }), n(47120);
var i = n(147913),
    r = n(474873),
    a = n(523746),
    s = n(592125),
    o = n(292959),
    l = n(246946),
    u = n(979651),
    c = n(938475),
    d = n(557177);
function f(e, t) {
    if (t.has(e)) throw TypeError('Cannot initialize the same private elements twice on an object');
}
function _(e, t) {
    return t.get ? t.get.call(e) : t.value;
}
function p(e, t, n) {
    if (!t.has(e)) throw TypeError('attempted to ' + n + ' private field on non-instance');
    return t.get(e);
}
function h(e, t) {
    var n = p(e, t, 'get');
    return _(e, n);
}
function m(e, t, n) {
    f(e, t), t.set(e, n);
}
function g(e, t, n) {
    return (
        t in e
            ? Object.defineProperty(e, t, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0
              })
            : (e[t] = n),
        e
    );
}
let E = (0, d.uk)('call_calling', r.Z.getSoundpack());
var v = new WeakMap();
class y extends i.Z {
    _initialize() {
        this.stores = new Map().set(a.Z, this.handleRingUpdate).set(o.Z, this.handleRingUpdate).set(l.Z, this.handleRingUpdate).set(u.Z, this.handleRingUpdate).set(r.Z, this.handleSoundpackUpdate);
    }
    constructor(...e) {
        super(...e),
            m(this, v, {
                writable: !0,
                value: new Set()
            }),
            g(this, 'actions', {
                GUILD_LOCAL_RING_START: (e) => this.handleGuildRingStart(e),
                GUILD_RING_STOP: (e) => this.handleGuildRingStop(e)
            }),
            g(this, '_handleRing', (e, t) => {
                let n = u.Z.getCurrentClientVoiceChannelId(t),
                    i = s.Z.getChannel(n),
                    r = null != n && (null == i ? void 0 : i.guild_id) == null && c.ZP.countVoiceStatesForChannel(n) >= 2;
                null == n || r || !e || o.Z.isSoundDisabled('call_calling') || l.Z.disableSounds ? E.stop() : E.loop();
            }),
            g(this, 'handleSoundpackUpdate', () => {
                E.stop(), (E = (0, d.uk)('call_calling', r.Z.getSoundpack()));
            }),
            g(this, 'handleRingUpdate', () => {
                let e = a.Z.getCalls().some((e) => e.ringing.length > 0 && u.Z.getCurrentClientVoiceChannelId(null) === e.channelId);
                this._handleRing(e, null);
            }),
            g(this, 'handleGuildRingStart', (e) => {
                let { ringing: t, guildId: n } = e;
                t.forEach((e) => {
                    h(this, v).add(e);
                }),
                    this._handleRing(h(this, v).size > 0, n);
            }),
            g(this, 'handleGuildRingStop', (e) => {
                let { ringing: t, guildId: n } = e;
                t.forEach((e) => {
                    h(this, v).delete(e);
                }),
                    this._handleRing(h(this, v).size > 0, n);
            });
    }
}
let I = new y();
