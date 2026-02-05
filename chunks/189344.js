"use strict";
n.d(t, { A: () => u });
var r = n(439372),
    i = n(832286),
    a = n(128391),
    s = n(652215);
function o(e) {
    if (e.message_reference?.type !== s.SH7.FORWARD) return;
    let t = e.message_reference.guild_id;
    null != t && (0, i.y)(t);
}
class l extends r.A {
    constructor() {
        super(), (0, a.A)(this, o);
    }
}
let u = new l();
