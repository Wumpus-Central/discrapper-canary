Object.defineProperty(t, "__esModule", { value: !0 });
let n = r(88559),
    a = r(115835),
    i = r(474726),
    s = r(628403);
function o(e) {
    return null != e.text.match(/\s+(prima|dal)$/i);
}
class u extends n.MergingRefiner {
    patternBetween() {
        return /^\s*$/i;
    }
    shouldMergeResults(e, t, r) {
        return (
            !!e.match(this.patternBetween()) &&
            (!!o(t) || null != t.text.match(/\s+(dopo|dal|fino)$/i)) &&
            !!r.start.get("day") &&
            !!r.start.get("month") &&
            !!r.start.get("year")
        );
    }
    mergeResults(e, t, r) {
        let n = (0, i.parseDuration)(t.text);
        o(t) && (n = (0, s.reverseDuration)(n));
        let u = a.ParsingComponents.createRelativeFromReference(a.ReferenceWithTimezone.fromDate(r.start.date()), n);
        return new a.ParsingResult(r.reference, t.index, `${t.text}${e}${r.text}`, u);
    }
}
t.default = u;
