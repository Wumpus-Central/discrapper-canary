var i = r(47120);
var a = r(147913),
    o = r(336197),
    s = r(341298),
    l = r(558921),
    u = r(981631);
function c(e, n, r) {
    return (
        n in e
            ? Object.defineProperty(e, n, {
                  value: r,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0
              })
            : (e[n] = r),
        e
    );
}
class d extends a.Z {
    async handleChannelCreate(e) {
        let { channel: n } = e;
        (0, s.tr)(n) && (await (0, s.mM)(l.y), (0, o.Z)(u.Z5c.CHANNEL(null, n.id)));
    }
    constructor(...e) {
        super(...e), c(this, 'actions', { CHANNEL_CREATE: this.handleChannelCreate });
    }
}
n.Z = new d();
