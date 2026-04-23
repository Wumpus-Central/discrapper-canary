r.d(t, { A: () => i });
var n = r(996483),
    s = r(658809),
    a = r(241738);
class i extends a.w {
    innerPatternString(e) {
        return "(сейчас|прошлым\\s*вечером|прошлой\\s*ночью|следующей\\s*ночью|сегодня\\s*ночью|этой\\s*ночью|ночью|этим утром|утром|утра|в\\s*полдень|вечером|вечера|в\\s*полночь)";
    }
    innerExtract(e, t) {
        let r = e.refDate,
            a = t[0].toLowerCase(),
            i = e.createParsingComponents();
        if ("сейчас" === a) return n.tB(e.reference);
        if ("вечером" === a || "вечера" === a) return n.Jp(e.reference);
        if (a.endsWith("утром") || a.endsWith("утра")) return n.F1(e.reference);
        if (a.match(/в\s*полдень/)) return n.zW(e.reference);
        if (a.match(/прошлой\s*ночью/)) return n.zr(e.reference);
        if (a.match(/прошлым\s*вечером/)) return n.Z6(e.reference);
        if (a.match(/следующей\s*ночью/)) {
            let e = 22 > r.getHours() ? 1 : 2,
                t = new Date(r.getTime());
            t.setDate(t.getDate() + e), (0, s.Pl)(i, t), i.imply("hour", 0);
        }
        return a.match(/в\s*полночь/) || a.endsWith("ночью") ? n.Bm(e.reference) : i;
    }
}
