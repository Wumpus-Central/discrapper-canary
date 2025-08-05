(n.d(t, { q: () => a }), n(388685));
var r = n(709054),
    i = n(765104);
function a(e, t) {
    var n;
    let a = null != (n = i.Z.summaries(e)) ? n : [],
        o = 0;
    for (let e of a) r.default.compare(e.endId, t) > 0 && (o += 1);
    return o;
}
