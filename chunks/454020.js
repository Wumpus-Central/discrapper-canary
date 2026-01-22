n.d(t, { A: () => o });
var r = n(147426),
    i = n(374372),
    a = n(972409),
    s = n(632434);
class o extends a.w {
    innerPatternString(e) {
        return `(ці|останні|минулі|майбутні|наступні|після|через|\\+|-)\\s*(${r.Pl})`;
    }
    innerExtract(e, t) {
        let n = t[1].toLowerCase(),
            a = (0, r.E9)(t[3]);
        switch (n) {
            case "останні":
            case "минулі":
            case "-":
                a = (0, s.x4)(a);
        }
        return i.BP.createRelativeFromReference(e.reference, a);
    }
}
