"use strict";
n.d(t, { A: () => u });
var i = n(439372),
    r = n(741231),
    s = n(14509),
    a = n(276041),
    o = n(652215);
class l extends i.A {
    async handleChannelCreate(e) {
        let { channel: t } = e;
        (0, s.TT)(t) && (await (0, s.ml)(a.$), (0, r.A)(o.BVt.CHANNEL(null, t.id)));
    }
    actions = { CHANNEL_CREATE: this.handleChannelCreate };
}
let u = new l();
