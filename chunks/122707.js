n.d(t, { q: () => a }), n(47120);
var i = n(709054),
    l = n(765104);
function a(e, t) {
    var n;
    let a = null !== (n = l.Z.summaries(e)) && void 0 !== n ? n : [],
        r = 0;
    for (let e of a) i.default.compare(e.endId, t) > 0 && (r += 1);
    return r;
}
