n.d(t, { q: () => o }), n(388685);
var r = n(709054),
    i = n(765104);
function o(e, t) {
    var n;
    let o = null != (n = i.Z.summaries(e)) ? n : [],
        a = 0;
    for (let e of o) r.default.compare(e.endId, t) > 0 && (a += 1);
    return a;
}
