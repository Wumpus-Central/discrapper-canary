n.d(t, { A: () => o });
var r = n(989479),
    i = n(374372),
    a = n(241738),
    s = n(632434);
class o extends a.w {
    innerPatternString(e) {
        return `(эти|последние|прошлые|следующие|после|спустя|через|\\+|-)\\s*(${r.Pl})`;
    }
    innerExtract(e, t) {
        let n = t[1].toLowerCase(),
            a = (0, r.E9)(t[2]);
        switch (n) {
            case "последние":
            case "прошлые":
            case "-":
                a = (0, s.x4)(a);
        }
        return i.BP.createRelativeFromReference(e.reference, a);
    }
}
