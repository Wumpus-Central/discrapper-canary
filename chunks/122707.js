n.d(t, { q: () => l }), n(47120);
var r = n(709054),
    i = n(765104);
function l(e, t) {
    var n;
    let l = null != (n = i.Z.summaries(e)) ? n : [],
        o = 0;
    for (let e of l) r.default.compare(e.endId, t) > 0 && (o += 1);
    return o;
}
