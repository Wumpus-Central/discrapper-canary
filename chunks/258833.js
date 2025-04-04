n.d(t, { Z: () => T }), n(47120);
var r = n(147913),
    i = n(460181),
    o = n(474873),
    a = n(523746),
    s = n(592125),
    l = n(292959),
    c = n(944486),
    u = n(246946),
    d = n(979651),
    f = n(938475),
    _ = n(358221);
function p(e, t) {
    if (t.has(e)) throw TypeError('Cannot initialize the same private elements twice on an object');
}
function h(e, t) {
    return t.get ? t.get.call(e) : t.value;
}
function m(e, t, n) {
    if (t.set) t.set.call(e, n);
    else {
        if (!t.writable) throw TypeError('attempted to set read only private field');
        t.value = n;
    }
}
function g(e, t, n) {
    if (!t.has(e)) throw TypeError('attempted to ' + n + ' private field on non-instance');
    return t.get(e);
}
function E(e, t) {
    var n = g(e, t, 'get');
    return h(e, n);
}
function b(e, t, n) {
    p(e, t), t.set(e, n);
}
function y(e, t, n) {
    var r = g(e, t, 'set');
    return m(e, r, n), n;
}
function v(e, t, n) {
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
let O = (0, i.uk)('call_calling', o.Z.getSoundpack());
var I = new WeakMap();
class S extends r.Z {
    _initialize() {
        this.stores = new Map().set(a.Z, this.handleRingUpdate).set(l.Z, this.handleRingUpdate).set(u.Z, this.handleRingUpdate).set(d.Z, this.handleRingUpdate).set(_.Z, this.handleChannelRTCStoreChange).set(o.Z, this.handleSoundpackUpdate);
    }
    constructor(...e) {
        super(...e),
            b(this, I, {
                writable: !0,
                value: new Set()
            }),
            v(this, 'actions', {
                GUILD_LOCAL_RING_START: (e) => this.handleGuildRingStart(e),
                GUILD_RING_STOP: (e) => this.handleGuildRingStop(e)
            }),
            v(this, '_handleRing', (e, t) => {
                let n = d.Z.getCurrentClientVoiceChannelId(t),
                    r = null != n && f.ZP.countVoiceStatesForChannel(n) >= 2;
                null == n || r || !e || l.Z.isSoundDisabled('call_calling') || u.Z.disableSounds ? O.stop() : O.loop();
            }),
            v(this, 'handleSoundpackUpdate', () => {
                O.stop(), (O = (0, i.uk)('call_calling', o.Z.getSoundpack()));
            }),
            v(this, 'handleRingUpdate', () => {
                var e, t;
                let n = c.Z.getVoiceChannelId(),
                    r = null != (t = null == (e = s.Z.getChannel(n)) ? void 0 : e.guild_id) ? t : null,
                    i = a.Z.getCalls().some((e) => e.ringing.length > 0 && d.Z.getCurrentClientVoiceChannelId(null) === e.channelId);
                this._handleRing(i || E(this, I).size > 0, r);
            }),
            v(this, 'handleGuildRingStart', (e) => {
                let { ringing: t, guildId: n } = e;
                t.forEach((e) => {
                    E(this, I).add(e);
                }),
                    this._handleRing(E(this, I).size > 0, n);
            }),
            v(this, 'handleGuildRingStop', (e) => {
                let { ringing: t, guildId: n } = e;
                t.forEach((e) => {
                    E(this, I).delete(e);
                }),
                    this._handleRing(E(this, I).size > 0, n);
            }),
            v(this, 'handleChannelRTCStoreChange', () => {
                let e = c.Z.getVoiceChannelId(),
                    t = E(this, I).size > 0;
                if (!t) return;
                if (null == e && t) {
                    y(this, I, new Set()), this._handleRing(E(this, I).size > 0, null);
                    return;
                }
                if (null == e) return;
                let n = _.Z.getGuildRingingUsers(e),
                    r = new Set([...E(this, I)].filter((e) => !n.has(e)));
                r.size > 0 &&
                    (r.forEach((e) => {
                        E(this, I).delete(e);
                    }),
                    this._handleRing(E(this, I).size > 0, null));
            });
    }
}
let T = new S();
