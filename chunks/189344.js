"use strict";
n.d(t, { A: () => u });
var i = n(439372),
    r = n(832286),
    s = n(128391),
    a = n(652215);
function o(e) {
    if (e.message_reference?.type !== a.SH7.FORWARD) return;
    let t = e.message_reference.guild_id;
    null != t && (0, r.y)(t);
}
class l extends i.A {
    constructor() {
        super(), (0, s.A)(this, o);
    }
}
let u = new l();
