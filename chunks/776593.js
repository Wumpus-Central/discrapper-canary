r.d(t, { A: () => i });
var n = r(996483),
    s = r(658809),
    a = r(972409);
class i extends a.w {
    innerPatternString(e) {
        return "(зараз|минулого\\s*вечора|минулої\\s*ночі|наступної\\s*ночі|сьогодні\\s*вночі|цієї\\s*ночі|цього ранку|вранці|ранку|зранку|опівдні|ввечері|вечора|опівночі|вночі)";
    }
    innerExtract(e, t) {
        let r = e.refDate,
            a = t[0].toLowerCase(),
            i = e.createParsingComponents();
        if ("зараз" === a) return n.tB(e.reference);
        if ("ввечері" === a || "вечора" === a) return n.Jp(e.reference);
        if (a.endsWith("вранці") || a.endsWith("ранку") || a.endsWith("зранку")) return n.F1(e.reference);
        if (a.endsWith("опівдні")) return n.zW(e.reference);
        if (a.match(/минулої\s*ночі/)) return n.zr(e.reference);
        if (a.match(/минулого\s*вечора/)) return n.Z6(e.reference);
        if (a.match(/наступної\s*ночі/)) {
            let e = 22 > r.getHours() ? 1 : 2,
                t = new Date(r.getTime());
            t.setDate(t.getDate() + e), (0, s.Pl)(i, t), i.imply("hour", 1);
        }
        return a.match(/цієї\s*ночі/) || a.endsWith("опівночі") || a.endsWith("вночі") ? n.Bm(e.reference) : i;
    }
}
