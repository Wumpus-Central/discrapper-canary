n.d(t, { Z: () => o });
var r = n(654323),
    i = n(334633);
let a = RegExp("((?<prefix>前の|次の|今週))?(?<weekday>" + Object.keys(r.GR).join("|") + ")(?:曜日|曜)", "i");
class o {
    pattern() {
        return a;
    }
    extract(e, t) {
        let n = t.groups.weekday,
            a = r.GR[n];
        if (void 0 === a) return null;
        let o = t.groups.prefix || "",
            s = null;
        return (
            o.match(/前の/) ? (s = "last") : o.match(/次の/) ? (s = "next") : o.match(/今週/) && (s = "this"),
            (0, i.Rv)(e.reference, a, s)
        );
    }
}
