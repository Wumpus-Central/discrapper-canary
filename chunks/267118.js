r.d(t, { A: () => i });
var n = r(501459),
    s = r(1673);
let a = RegExp("((?<prefix>前の|次の|今週))?(?<weekday>" + Object.keys(n.tS).join("|") + ")(?:曜日|曜)", "i");
class i {
    pattern() {
        return a;
    }
    extract(e, t) {
        let r = t.groups.weekday,
            a = n.tS[r];
        if (void 0 === a) return null;
        let i = t.groups.prefix || "",
            o = null;
        return (
            i.match(/前の/) ? (o = "last") : i.match(/次の/) ? (o = "next") : i.match(/今週/) && (o = "this"),
            (0, s.Y5)(e.reference, a, o)
        );
    }
}
