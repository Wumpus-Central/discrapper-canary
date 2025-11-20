n.d(t, { Z: () => o }), n(997841);
var r = n(95015),
    i = n(978003),
    a = n(981631);
function o(e) {
    var t;
    return !(
        e.type !== a.uaV.DEFAULT ||
        null != e.poll ||
        (0, r.yE)(null != (t = e.flags) ? t : 0, a.iLy.EPHEMERAL) ||
        ("messageReference" in e ? (0, i.Z)(e) : (0, i.s)(e))
    );
}
