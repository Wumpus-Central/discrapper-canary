r.d(t, { A: () => l });
var n = r(530560),
    s = r(374372),
    a = r(360345),
    i = r(632434);
function o(e) {
    return null != e.text.match(/\s+(before|from)$/i);
}
class l extends n.X {
    patternBetween() {
        return /^\s*$/i;
    }
    shouldMergeResults(e, t, r) {
        return (
            !!e.match(this.patternBetween()) &&
            (!!o(t) || null != t.text.match(/\s+(after|since)$/i)) &&
            !!r.start.get("day") &&
            !!r.start.get("month") &&
            !!r.start.get("year")
        );
    }
    mergeResults(e, t, r) {
        let n = (0, a.E9)(t.text);
        o(t) && (n = (0, i.x4)(n));
        let l = s.BP.createRelativeFromReference(s.b5.fromDate(r.start.date()), n);
        return new s.s4(r.reference, t.index, `${t.text}${e}${r.text}`, l);
    }
}
