n.d(t, {
    A: () => s,
});
var r = n(996483),
    i = n(658809),
    a = n(241738);
class s extends a.w {
    innerPatternString(e) {
        return "(сейчас|прошлым\\s*вечером|прошлой\\s*ночью|следующей\\s*ночью|сегодня\\s*ночью|этой\\s*ночью|ночью|этим утром|утром|утра|в\\s*полдень|вечером|вечера|в\\s*полночь)";
    }
    innerExtract(e, t) {
        let n = e.refDate,
            a = t[0].toLowerCase(),
            s = e.createParsingComponents();
        if ("сейчас" === a) return r.tB(e.reference);
        if ("вечером" === a || "вечера" === a) return r.Jp(e.reference);
        if (a.endsWith("утром") || a.endsWith("утра")) return r.F1(e.reference);
        if (a.match(/в\s*полдень/)) return r.zW(e.reference);
        if (a.match(/прошлой\s*ночью/)) return r.zr(e.reference);
        if (a.match(/прошлым\s*вечером/)) return r.Z6(e.reference);
        if (a.match(/следующей\s*ночью/)) {
            let e = 22 > n.getHours() ? 1 : 2,
                t = new Date(n.getTime());
            t.setDate(t.getDate() + e), (0, i.Pl)(s, t), s.imply("hour", 0);
        }
        return a.match(/в\s*полночь/) || a.endsWith("ночью") ? r.Bm(e.reference) : s;
    }
}
