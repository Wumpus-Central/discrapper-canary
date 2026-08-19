"use strict";
n.d(t, { A: () => d });
var i = n(439372),
    r = n(741231),
    a = n(14509),
    s = n(276041),
    l = n(652215);
class o extends i.A {
    async handleChannelCreate(e) {
        let { channel: t } = e;
        (0, a.TT)(t) && (await (0, a.ml)(s.$), (0, r.A)(l.BVt.CHANNEL(null, t.id)));
    }
    actions = { CHANNEL_CREATE: this.handleChannelCreate };
}
let d = new o();
