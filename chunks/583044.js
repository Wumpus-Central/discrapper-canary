n.d(t, { Z: () => o });
var r = n(715870),
    i = n(424046),
    a = n(522677);
class o extends a.F {
    innerPatternString(e) {
        return `(сейчас|прошлым\\s*вечером|прошлой\\s*ночью|следующей\\s*ночью|сегодня\\s*ночью|этой\\s*ночью|ночью|этим утром|утром|утра|в\\s*полдень|вечером|вечера|в\\s*полночь)`;
    }
    innerExtract(e, t) {
        let n = e.refDate,
            a = t[0].toLowerCase(),
            o = e.createParsingComponents();
        if ("сейчас" === a) return r.zO(e.reference);
        if ("вечером" === a || "вечера" === a) return r.DZ(e.reference);
        if (a.endsWith("утром") || a.endsWith("утра")) return r.ut(e.reference);
        if (a.match(/в\s*полдень/)) return r.D_(e.reference);
        if (a.match(/прошлой\s*ночью/)) return r.f$(e.reference);
        if (a.match(/прошлым\s*вечером/)) return r.o4(e.reference);
        if (a.match(/следующей\s*ночью/)) {
            let e = 22 > n.getHours() ? 1 : 2,
                t = new Date(n.getTime());
            t.setDate(t.getDate() + e), (0, i.cz)(o, t), o.imply("hour", 0);
        }
        return a.match(/в\s*полночь/) || a.endsWith("ночью") ? r.jN(e.reference) : o;
    }
}
