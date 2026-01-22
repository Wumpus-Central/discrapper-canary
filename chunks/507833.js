n.d(t, { A: () => c });
var r = n(530560),
    i = n(374372),
    a = n(360345),
    s = n(632434);
function o(e) {
    return null != e.text.match(/^[+-]/i);
}
function l(e) {
    return null != e.text.match(/^-/i);
}
class c extends r.X {
    shouldMergeResults(e, t, n) {
        return !!e.match(/^\s*$/i) && (o(n) || l(n));
    }
    mergeResults(e, t, n, r) {
        let o = (0, a.E9)(n.text);
        l(n) && (o = (0, s.x4)(o));
        let c = i.BP.createRelativeFromReference(i.b5.fromDate(t.start.date()), o);
        return new i.s4(t.reference, t.index, `${t.text}${e}${n.text}`, c);
    }
}
