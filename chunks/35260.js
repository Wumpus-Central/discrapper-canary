var i = r(147913),
    a = r(31996),
    o = r(728675),
    s = r(981631);
function l(e) {
    var n;
    if ((null === (n = e.message_reference) || void 0 === n ? void 0 : n.type) !== s.Uvt.FORWARD) return;
    let r = e.message_reference.guild_id;
    if (null != r) (0, a.Q)(r);
}
class u extends i.Z {
    constructor() {
        super(), (0, o.Z)(this, l);
    }
}
n.Z = new u();
