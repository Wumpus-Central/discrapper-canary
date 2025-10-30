n.d(t, { Z: () => o });
var r = n(727916),
    i = n(715870);
let a = /(?:this)?\s{0,3}(morning|afternoon|evening|night|midnight|midday|noon)(?=\W|$)/i;
class o extends r.Z {
    innerPattern() {
        return a;
    }
    innerExtract(e, t) {
        let n = null;
        switch (t[1].toLowerCase()) {
            case "afternoon":
                n = i.jB(e.reference);
                break;
            case "evening":
            case "night":
                n = i.DZ(e.reference);
                break;
            case "midnight":
                n = i.jN(e.reference);
                break;
            case "morning":
                n = i.ut(e.reference);
                break;
            case "noon":
            case "midday":
                n = i.D_(e.reference);
        }
        return n && n.addTag("parser/ENCasualTimeParser"), n;
    }
}
