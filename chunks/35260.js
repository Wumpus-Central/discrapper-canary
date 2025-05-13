n.d(t, { Z: () => c });
var r = n(147913),
    i = n(31996),
    a = n(728675),
    o = n(981631);
function s(e) {
    var t;
    if ((null == (t = e.message_reference) ? void 0 : t.type) !== o.Uvt.FORWARD) return;
    let n = e.message_reference.guild_id;
    null != n && (0, i.Q)(n);
}
class l extends r.Z {
    constructor() {
        super(), (0, a.Z)(this, s);
    }
}
let c = new l();
