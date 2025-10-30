n.d(t, { Z: () => c });
var r = n(19467),
    i = n(86465),
    a = n(53851),
    o = n(89199);
function s(e) {
    return null != e.text.match(/\s+(prima|dal)$/i);
}
function l(e) {
    return null != e.text.match(/\s+(dopo|dal|fino)$/i);
}
class c extends r.V {
    patternBetween() {
        return /^\s*$/i;
    }
    shouldMergeResults(e, t, n) {
        return (
            !!e.match(this.patternBetween()) &&
            (!!s(t) || !!l(t)) &&
            !!n.start.get("day") &&
            !!n.start.get("month") &&
            !!n.start.get("year")
        );
    }
    mergeResults(e, t, n) {
        let r = (0, a.RA)(t.text);
        s(t) && (r = (0, o.de)(r));
        let l = i.L.createRelativeFromReference(i.X2.fromDate(n.start.date()), r);
        return new i.G5(n.reference, t.index, `${t.text}${e}${n.text}`, l);
    }
}
