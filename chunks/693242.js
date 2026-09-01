Object.defineProperty(t, "__esModule", { value: !0 });
let n = r(88559),
    a = r(115835),
    i = r(40840),
    s = r(628403);
function o(e) {
    return null != e.text.match(/^-/i);
}
class u extends n.MergingRefiner {
    shouldMergeResults(e, t, r) {
        return !!e.match(/^\s*$/i) && (null != r.text.match(/^[+-]/i) || o(r));
    }
    mergeResults(e, t, r, n) {
        let u = (0, i.parseDuration)(r.text);
        o(r) && (u = (0, s.reverseDuration)(u));
        let l = a.ParsingComponents.createRelativeFromReference(a.ReferenceWithTimezone.fromDate(t.start.date()), u);
        return new a.ParsingResult(t.reference, t.index, `${t.text}${e}${r.text}`, l);
    }
}
t.default = u;
