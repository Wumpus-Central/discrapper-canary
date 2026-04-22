r.d(t, { A: () => o });
var n = r(147426),
    s = r(374372),
    a = r(972409),
    i = r(632434);
class o extends a.w {
    innerPatternString(e) {
        return `(ці|останні|минулі|майбутні|наступні|після|через|\\+|-)\\s*(${n.Pl})`;
    }
    innerExtract(e, t) {
        let r = t[1].toLowerCase(),
            a = (0, n.E9)(t[3]);
        switch (r) {
            case "останні":
            case "минулі":
            case "-":
                a = (0, i.x4)(a);
        }
        return s.BP.createRelativeFromReference(e.reference, a);
    }
}
