n.d(t, { Z: () => l });
var r = n(53851),
    i = n(86465),
    a = n(727916),
    o = n(89199);
let s = RegExp(`(questo|ultimo|passato|prossimo|dopo|questa|ultima|passata|prossima|\\+|-)\\s*(${r.km})(?=\\W|$)`, "i");
class l extends a.Z {
    innerPattern() {
        return s;
    }
    innerExtract(e, t) {
        let n = t[1].toLowerCase(),
            a = (0, r.RA)(t[2]);
        switch (n) {
            case "last":
            case "past":
            case "-":
                a = (0, o.de)(a);
        }
        return i.L.createRelativeFromReference(e.reference, a);
    }
}
