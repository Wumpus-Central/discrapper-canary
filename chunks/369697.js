n.d(t, { Z: () => c });
var r = n(19467),
    i = n(86465),
    a = n(684758),
    o = n(89199);
function s(e) {
    return null != e.text.match(/^[+-]/i);
}
function l(e) {
    return null != e.text.match(/^-/i);
}
class c extends r.V {
    shouldMergeResults(e, t, n) {
        return !!e.match(/^\s*$/i) && (s(n) || l(n));
    }
    mergeResults(e, t, n, r) {
        let s = (0, a.RA)(n.text);
        l(n) && (s = (0, o.de)(s));
        let c = i.L.createRelativeFromReference(i.X2.fromDate(t.start.date()), s);
        return new i.G5(t.reference, t.index, `${t.text}${e}${n.text}`, c);
    }
}
