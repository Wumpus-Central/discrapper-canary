r.d(t, { A: () => o });
var n = r(989479),
    s = r(374372),
    a = r(241738),
    i = r(632434);
class o extends a.w {
    innerPatternString(e) {
        return `(эти|последние|прошлые|следующие|после|спустя|через|\\+|-)\\s*(${n.Pl})`;
    }
    innerExtract(e, t) {
        let r = t[1].toLowerCase(),
            a = (0, n.E9)(t[2]);
        switch (r) {
            case "последние":
            case "прошлые":
            case "-":
                a = (0, i.x4)(a);
        }
        return s.BP.createRelativeFromReference(e.reference, a);
    }
}
