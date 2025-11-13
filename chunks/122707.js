n.d(t, { q: () => l }), n(388685);
var i = n(709054),
    r = n(765104);
function l(e, t) {
    var n;
    let l = null != (n = r.Z.summaries(e)) ? n : [],
        a = 0;
    for (let e of l) i.default.compare(e.endId, t) > 0 && (a += 1);
    return a;
}
