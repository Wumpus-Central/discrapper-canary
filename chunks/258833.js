n.d(t, { Z: () => A }), n(47120);
var i = n(147913),
    r = n(460181),
    a = n(474873),
    s = n(523746),
    o = n(592125),
    l = n(292959),
    u = n(944486),
    c = n(246946),
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
function v(e, t, n) {
    p(e, t), t.set(e, n);
}
function y(e, t, n) {
    var i = g(e, t, 'set');
    return m(e, i, n), n;
}
function I(e, t, n) {
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
let T = (0, r.uk)('call_calling', a.Z.getSoundpack());
var b = new WeakMap();
class S extends i.Z {
    _initialize() {
        this.stores = new Map().set(s.Z, this.handleRingUpdate).set(l.Z, this.handleRingUpdate).set(c.Z, this.handleRingUpdate).set(d.Z, this.handleRingUpdate).set(_.Z, this.handleChannelRTCStoreChange).set(a.Z, this.handleSoundpackUpdate);
    }
    constructor(...e) {
        super(...e),
            v(this, b, {
                writable: !0,
                value: new Set()
            }),
            I(this, 'actions', {
                GUILD_LOCAL_RING_START: (e) => this.handleGuildRingStart(e),
                GUILD_RING_STOP: (e) => this.handleGuildRingStop(e)
            }),
            I(this, '_handleRing', (e, t) => {
                let n = d.Z.getCurrentClientVoiceChannelId(t),
                    i = o.Z.getChannel(n),
                    r = null != n && (null == i ? void 0 : i.guild_id) == null && f.ZP.countVoiceStatesForChannel(n) >= 2;
                null == n || r || !e || l.Z.isSoundDisabled('call_calling') || c.Z.disableSounds ? T.stop() : T.loop();
            }),
            I(this, 'handleSoundpackUpdate', () => {
                T.stop(), (T = (0, r.uk)('call_calling', a.Z.getSoundpack()));
            }),
            I(this, 'handleRingUpdate', () => {
                var e, t;
                let n = u.Z.getVoiceChannelId(),
                    i = null !== (t = null === (e = o.Z.getChannel(n)) || void 0 === e ? void 0 : e.guild_id) && void 0 !== t ? t : null,
                    r = s.Z.getCalls().some((e) => e.ringing.length > 0 && d.Z.getCurrentClientVoiceChannelId(null) === e.channelId);
                this._handleRing(r || E(this, b).size > 0, i);
            }),
            I(this, 'handleGuildRingStart', (e) => {
                let { ringing: t, guildId: n } = e;
                t.forEach((e) => {
                    E(this, b).add(e);
                }),
                    this._handleRing(E(this, b).size > 0, n);
            }),
            I(this, 'handleGuildRingStop', (e) => {
                let { ringing: t, guildId: n } = e;
                t.forEach((e) => {
                    E(this, b).delete(e);
                }),
                    this._handleRing(E(this, b).size > 0, n);
            }),
            I(this, 'handleChannelRTCStoreChange', () => {
                let e = u.Z.getVoiceChannelId(),
                    t = E(this, b).size > 0;
                if (!t) return;
                if (null == e && t) {
                    y(this, b, new Set()), this._handleRing(E(this, b).size > 0, null);
                    return;
                }
                if (null == e) return;
                let n = _.Z.getGuildRingingUsers(e),
                    i = E(this, b).difference(n);
                i.size > 0 &&
                    (i.forEach((e) => {
                        E(this, b).delete(e);
                    }),
                    this._handleRing(E(this, b).size > 0, null));
            });
    }
}
let A = new S();
