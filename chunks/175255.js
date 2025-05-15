n.d(t, { Z: () => u }), n(388685);
var r = n(147913),
    i = n(336197),
    a = n(341298),
    o = n(558921),
    s = n(981631);
function l(e, t, n) {
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
class c extends r.Z {
    async handleChannelCreate(e) {
        let { channel: t } = e;
        (0, a.tr)(t) && (await (0, a.mM)(o.y), (0, i.Z)(s.Z5c.CHANNEL(null, t.id)));
    }
    constructor(...e) {
        super(...e), l(this, 'actions', { CHANNEL_CREATE: this.handleChannelCreate });
    }
}
let u = new c();
