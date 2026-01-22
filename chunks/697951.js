n.d(t, {
    A: () => u,
}),
    n(896048);
var r = n(439372),
    i = n(22007),
    a = n(14509),
    s = n(276041),
    o = n(652215);

function l(e, t, n) {
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
class c extends r.A {
    async handleChannelCreate(e) {
        let { channel: t } = e;
        (0, a.TT)(t) && (await (0, a.ml)(s.$), (0, i.A)(o.BVt.CHANNEL(null, t.id)));
    }
    constructor(...e) {
        super(...e),
            l(this, "actions", {
                CHANNEL_CREATE: this.handleChannelCreate,
            });
    }
}
let u = new c();
