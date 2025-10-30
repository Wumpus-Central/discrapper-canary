n.d(t, { Z: () => l });
var r = n(765682),
    i = n(86465),
    a = n(727916),
    o = n(800911),
    s = n(89199);
class l extends a.Z {
    constructor() {
        super();
    }
    innerPattern() {
        return RegExp(
            `(?:les?|la|l'|du|des?)\\s*(${r.zC})?(?:\\s*(prochaine?s?|derni[e\xe8]re?s?|pass[\xe9e]e?s?|pr[\xe9e]c[\xe9e]dents?|suivante?s?))?\\s*(${(0, o.q3)(r.pS)})(?:\\s*(prochaine?s?|derni[e\xe8]re?s?|pass[\xe9e]e?s?|pr[\xe9e]c[\xe9e]dents?|suivante?s?))?`,
            "i",
        );
    }
    innerExtract(e, t) {
        let n = t[1] ? (0, r.IX)(t[1]) : 1,
            a = r.pS[t[3].toLowerCase()],
            o = {};
        o[a] = n;
        let l = t[2] || t[4] || "";
        if ((l = l.toLowerCase()))
            return (
                (/derni[eè]re?s?/.test(l) || /pass[ée]e?s?/.test(l) || /pr[ée]c[ée]dents?/.test(l)) &&
                    (o = (0, s.de)(o)),
                i.L.createRelativeFromReference(e.reference, o)
            );
    }
}
