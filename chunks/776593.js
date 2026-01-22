n.d(t, {
    A: () => s,
});
var r = n(996483),
    i = n(658809),
    a = n(972409);
class s extends a.w {
    innerPatternString(e) {
        return "(зараз|минулого\\s*вечора|минулої\\s*ночі|наступної\\s*ночі|сьогодні\\s*вночі|цієї\\s*ночі|цього ранку|вранці|ранку|зранку|опівдні|ввечері|вечора|опівночі|вночі)";
    }
    innerExtract(e, t) {
        let n = e.refDate,
            a = t[0].toLowerCase(),
            s = e.createParsingComponents();
        if ("зараз" === a) return r.tB(e.reference);
        if ("ввечері" === a || "вечора" === a) return r.Jp(e.reference);
        if (a.endsWith("вранці") || a.endsWith("ранку") || a.endsWith("зранку")) return r.F1(e.reference);
        if (a.endsWith("опівдні")) return r.zW(e.reference);
        if (a.match(/минулої\s*ночі/)) return r.zr(e.reference);
        if (a.match(/минулого\s*вечора/)) return r.Z6(e.reference);
        if (a.match(/наступної\s*ночі/)) {
            let e = 22 > n.getHours() ? 1 : 2,
                t = new Date(n.getTime());
            t.setDate(t.getDate() + e), (0, i.Pl)(s, t), s.imply("hour", 1);
        }
        return a.match(/цієї\s*ночі/) || a.endsWith("опівночі") || a.endsWith("вночі") ? r.Bm(e.reference) : s;
    }
}
