n.d(t, {
    A: () => s,
});
var r = n(501459),
    i = n(1673);
let a = RegExp("((?<prefix>前の|次の|今週))?(?<weekday>" + Object.keys(r.tS).join("|") + ")(?:曜日|曜)", "i");
class s {
    pattern() {
        return a;
    }
    extract(e, t) {
        let n = t.groups.weekday,
            a = r.tS[n];
        if (void 0 === a) return null;
        let s = t.groups.prefix || "",
            o = null;
        return (
            s.match(/前の/) ? (o = "last") : s.match(/次の/) ? (o = "next") : s.match(/今週/) && (o = "this"),
            (0, i.Y5)(e.reference, a, o)
        );
    }
}
