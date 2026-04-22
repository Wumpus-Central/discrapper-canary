r.d(t, { A: () => l });
var n = r(530560),
    s = r(374372),
    a = r(360345),
    i = r(632434);
function o(e) {
    return null != e.text.match(/^-/i);
}
class l extends n.X {
    shouldMergeResults(e, t, r) {
        return !!e.match(/^\s*$/i) && (null != r.text.match(/^[+-]/i) || o(r));
    }
    mergeResults(e, t, r, n) {
        let l = (0, a.E9)(r.text);
        o(r) && (l = (0, i.x4)(l));
        let u = s.BP.createRelativeFromReference(s.b5.fromDate(t.start.date()), l);
        return new s.s4(t.reference, t.index, `${t.text}${e}${r.text}`, u);
    }
}
