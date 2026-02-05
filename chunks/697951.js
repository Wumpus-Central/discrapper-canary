"use strict";
n.d(t, { A: () => u });
var r = n(439372),
    i = n(22007),
    a = n(14509),
    s = n(276041),
    o = n(652215);
class l extends r.A {
    async handleChannelCreate(e) {
        let { channel: t } = e;
        (0, a.TT)(t) && (await (0, a.ml)(s.$), (0, i.A)(o.BVt.CHANNEL(null, t.id)));
    }
    actions = { CHANNEL_CREATE: this.handleChannelCreate };
}
let u = new l();
