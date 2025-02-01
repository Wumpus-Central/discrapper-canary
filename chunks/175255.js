n.d(t, { Z: () => c }), n(47120);
var i = n(147913),
    r = n(336197),
    a = n(341298),
    s = n(558921),
    o = n(981631);
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
class u extends i.Z {
    async handleChannelCreate(e) {
        let { channel: t } = e;
        (0, a.tr)(t) && (await (0, a.mM)(s.y), (0, r.Z)(o.Z5c.CHANNEL(null, t.id)));
    }
    constructor(...e) {
        super(...e), l(this, 'actions', { CHANNEL_CREATE: this.handleChannelCreate });
    }
}
let c = new u();
