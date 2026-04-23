r.r(t),
    r.d(t, {
        parseDate: () => en,
        casual: () => X,
        ReferenceWithTimezone: () => C.b5,
        ParsingResult: () => C.s4,
        createCasualConfiguration: () => ee,
        Weekday: () => A.Bw,
        strict: () => Q,
        Chrono: () => G.u,
        Meridiem: () => A.FF,
        ParsingComponents: () => C.BP,
        createConfiguration: () => et,
        parse: () => er,
    });
var n = r(476858),
    s = r(364242);
let a = "([^\\p{L}\\p{N}_]|^)",
    i = "(?=[^\\p{L}\\p{N}_]|$)",
    o = {
        неділя: 0,
        неділі: 0,
        неділю: 0,
        нд: 0,
        "нд.": 0,
        понеділок: 1,
        понеділка: 1,
        пн: 1,
        "пн.": 1,
        вівторок: 2,
        вівторка: 2,
        вт: 2,
        "вт.": 2,
        середа: 3,
        середи: 3,
        середу: 3,
        ср: 3,
        "ср.": 3,
        четвер: 4,
        четверга: 4,
        четвергу: 4,
        чт: 4,
        "чт.": 4,
        "п'ятниця": 5,
        "п'ятниці": 5,
        "п'ятницю": 5,
        пт: 5,
        "пт.": 5,
        субота: 6,
        суботи: 6,
        суботу: 6,
        сб: 6,
        "сб.": 6,
    },
    l = {
        січень: 1,
        січня: 1,
        січні: 1,
        лютий: 2,
        лютого: 2,
        лютому: 2,
        березень: 3,
        березня: 3,
        березні: 3,
        квітень: 4,
        квітня: 4,
        квітні: 4,
        травень: 5,
        травня: 5,
        травні: 5,
        червень: 6,
        червня: 6,
        червні: 6,
        липень: 7,
        липня: 7,
        липні: 7,
        серпень: 8,
        серпня: 8,
        серпні: 8,
        вересень: 9,
        вересня: 9,
        вересні: 9,
        жовтень: 10,
        жовтня: 10,
        жовтні: 10,
        листопад: 11,
        листопада: 11,
        листопаду: 11,
        грудень: 12,
        грудня: 12,
        грудні: 12,
    },
    u = {
        ...l,
        січ: 1,
        "січ.": 1,
        лют: 2,
        "лют.": 2,
        бер: 3,
        "бер.": 3,
        квіт: 4,
        "квіт.": 4,
        трав: 5,
        "трав.": 5,
        черв: 6,
        "черв.": 6,
        лип: 7,
        "лип.": 7,
        серп: 8,
        "серп.": 8,
        сер: 8,
        "cер.": 8,
        вер: 9,
        "вер.": 9,
        верес: 9,
        "верес.": 9,
        жовт: 10,
        "жовт.": 10,
        листоп: 11,
        "листоп.": 11,
        груд: 12,
        "груд.": 12,
    },
    m = {
        один: 1,
        одна: 1,
        одної: 1,
        одну: 1,
        дві: 2,
        два: 2,
        двох: 2,
        три: 3,
        трьох: 3,
        чотири: 4,
        чотирьох: 4,
        "п'ять": 5,
        "п'яти": 5,
        шість: 6,
        шести: 6,
        сім: 7,
        семи: 7,
        вісім: 8,
        восьми: 8,
        "дев'ять": 9,
        "дев'яти": 9,
        десять: 10,
        десяти: 10,
        одинадцять: 11,
        одинадцяти: 11,
        дванадцять: 12,
        дванадцяти: 12,
    },
    d = {
        перше: 1,
        першого: 1,
        друге: 2,
        другого: 2,
        третє: 3,
        третього: 3,
        четверте: 4,
        четвертого: 4,
        "п'яте": 5,
        "п'ятого": 5,
        шосте: 6,
        шостого: 6,
        сьоме: 7,
        сьомого: 7,
        восьме: 8,
        восьмого: 8,
        "дев'яте": 9,
        "дев'ятого": 9,
        десяте: 10,
        десятого: 10,
        одинадцяте: 11,
        одинадцятого: 11,
        дванадцяте: 12,
        дванадцятого: 12,
        тринадцяте: 13,
        тринадцятого: 13,
        чотирнадцяте: 14,
        чотинрнадцятого: 14,
        "п'ятнадцяте": 15,
        "п'ятнадцятого": 15,
        шістнадцяте: 16,
        шістнадцятого: 16,
        сімнадцяте: 17,
        сімнадцятого: 17,
        вісімнадцяте: 18,
        вісімнадцятого: 18,
        "дев'ятнадцяте": 19,
        "дев'ятнадцятого": 19,
        двадцяте: 20,
        двадцятого: 20,
        "двадцять перше": 21,
        "двадцять першого": 21,
        "двадцять друге": 22,
        "двадцять другого": 22,
        "двадцять третє": 23,
        "двадцять третього": 23,
        "двадцять четверте": 24,
        "двадцять четвертого": 24,
        "двадцять п'яте": 25,
        "двадцять п'ятого": 25,
        "двадцять шосте": 26,
        "двадцять шостого": 26,
        "двадцять сьоме": 27,
        "двадцять сьомого": 27,
        "двадцять восьме": 28,
        "двадцять восьмого": 28,
        "двадцять дев'яте": 29,
        "двадцять дев'ятого": 29,
        тридцяте: 30,
        тридцятого: 30,
        "тридцять перше": 31,
        "тридцять першого": 31,
    },
    c = {
        сек: "second",
        секунда: "second",
        секунд: "second",
        секунди: "second",
        секунду: "second",
        секундочок: "second",
        секундочки: "second",
        секундочку: "second",
        хв: "minute",
        хвилина: "minute",
        хвилин: "minute",
        хвилини: "minute",
        хвилину: "minute",
        хвилинок: "minute",
        хвилинки: "minute",
        хвилинку: "minute",
        хвилиночок: "minute",
        хвилиночки: "minute",
        хвилиночку: "minute",
        год: "hour",
        година: "hour",
        годин: "hour",
        години: "hour",
        годину: "hour",
        годинка: "hour",
        годинок: "hour",
        годинки: "hour",
        годинку: "hour",
        день: "day",
        дня: "day",
        днів: "day",
        дні: "day",
        доба: "day",
        добу: "day",
        тиждень: "week",
        тижню: "week",
        тижня: "week",
        тижні: "week",
        тижнів: "week",
        місяць: "month",
        місяців: "month",
        місяці: "month",
        місяця: "month",
        квартал: "quarter",
        кварталу: "quarter",
        квартала: "quarter",
        кварталів: "quarter",
        кварталі: "quarter",
        рік: "year",
        року: "year",
        році: "year",
        років: "year",
        роки: "year",
    },
    g = `(?:${(0, n.uJ)(m)}|[0-9]+|[0-9]+\\.[0-9]+|пів|декілька|пар(?:у)|\\s{0,3})`,
    h = `(?:${(0, n.uJ)(d)}|[0-9]{1,2}(?:го|ого|е)?)`;
function f(e) {
    let t = e.toLowerCase();
    return void 0 !== d[t] ? d[t] : parseInt(t);
}
let p = "(?:\\s+(?:року|рік|р|р.))?",
    y = `(?:[1-9][0-9]{0,3}${p}\\s*(?:н.е.|до н.е.|н. е.|до н. е.)|[1-2][0-9]{3}${p}|[5-9][0-9]${p})`;
function x(e) {
    if ((/(рік|року|р|р.)/i.test(e) && (e = e.replace(/(рік|року|р|р.)/i, "")), /(до н.е.|до н. е.)/i.test(e)))
        return -parseInt((e = e.replace(/(до н.е.|до н. е.)/i, "")));
    if (/(н. е.|н.е.)/i.test(e)) return parseInt((e = e.replace(/(н. е.|н.е.)/i, "")));
    let t = parseInt(e);
    return (0, s.D)(t);
}
let w = `(${g})\\s{0,3}(${(0, n.uJ)(c)})`,
    D = RegExp(w, "i"),
    P = (0, n.mb)("(?:(?:близько|приблизно)\\s{0,3})?", w);
function F(e) {
    let t = {},
        r = e,
        n = D.exec(r);
    for (; n; )
        (function (e, t) {
            let r = (function (e) {
                let t = e.toLowerCase();
                return void 0 !== m[t]
                    ? m[t]
                    : t.match(/декілька/)
                      ? 2
                      : t.match(/пів/)
                        ? 0.5
                        : t.match(/пар/)
                          ? 2
                          : "" === t
                            ? 1
                            : parseFloat(t);
            })(t[1]);
            e[c[t[2].toLowerCase()]] = r;
        })(t, n),
            (r = r.substring(n[0].length).trim()),
            (n = D.exec(r));
    return t;
}
var C = r(374372),
    T = r(355418);
let v = `(?:(?:приблизно|орієнтовно)\\s*(?:~\\s*)?)?(${P})${i}`;
class M extends T.c {
    patternLeftBoundary() {
        return a;
    }
    innerPattern(e) {
        return e.option.forwardDate
            ? RegExp(v, "i")
            : RegExp(`(?:протягом|на протязі|протягом|упродовж|впродовж)\\s*${v}`, "iu");
    }
    innerExtract(e, t) {
        let r = F(t[1]);
        return C.BP.createRelativeFromReference(e.reference, r);
    }
}
class $ extends T.c {
    patternLeftBoundary() {
        return a;
    }
    innerPattern(e) {
        return RegExp(this.innerPatternString(e), "iu");
    }
    innerPatternHasChange(e, t) {
        return !1;
    }
}
class R extends $ {
    innerPattern(e) {
        return RegExp(`${this.innerPatternString(e)}${i}`, "iu");
    }
}
class E extends R {
    innerPatternString(e) {
        return `(?:з|із)?\\s*(${h})(?:\\s{0,3}(?:по|-|–|до)?\\s{0,3}(${h}))?(?:-|\\/|\\s{0,3}(?:of)?\\s{0,3})(${(0, n.uJ)(u)})(?:(?:-|\\/|,?\\s{0,3})(${y}(?![^\\s]\\d)))?`;
    }
    innerExtract(e, t) {
        let r = e.createParsingResult(t.index, t[0]),
            n = u[t[3].toLowerCase()],
            a = f(t[1]);
        if (a > 31) return (t.index = t.index + t[1].length), null;
        if ((r.start.assign("month", n), r.start.assign("day", a), t[4])) {
            let e = x(t[4]);
            r.start.assign("year", e);
        } else {
            let t = (0, s.Y)(e.reference.instant, a, n);
            r.start.imply("year", t);
        }
        if (t[2]) {
            let e = f(t[2]);
            (r.end = r.start.clone()), r.end.assign("day", e);
        }
        return r;
    }
}
class b extends $ {
    innerPatternString(e) {
        return `((?:в|у)\\s*)?(${(0, n.uJ)(u)})\\s*(?:[,-]?\\s*(${y})?)?(?=[^\\s\\w]|\\s+[^0-9]|\\s+$|$)`;
    }
    innerExtract(e, t) {
        let r = t[2].toLowerCase();
        if (t[0].length <= 3 && !l[r]) return null;
        let n = e.createParsingResult(t.index, t.index + t[0].length);
        n.start.imply("day", 1);
        let a = u[r];
        if ((n.start.assign("month", a), t[3])) {
            let e = x(t[3]);
            n.start.assign("year", e);
        } else {
            let t = (0, s.Y)(e.reference.instant, 1, a);
            n.start.imply("year", t);
        }
        return n;
    }
}
var A = r(322811),
    k = r(985971);
class j extends k.B {
    constructor(e) {
        super(e);
    }
    patternFlags() {
        return "iu";
    }
    primaryPatternLeftBoundary() {
        return "(^|\\s|T|(?:[^\\p{L}\\p{N}_]))";
    }
    followingPhase() {
        return "\\s*(?:\\-|\\–|\\~|\\〜|до|і|по|\\?)\\s*";
    }
    primaryPrefix() {
        return "(?:(?:в|у|о|об|з|із|від)\\s*)??";
    }
    primarySuffix() {
        return `(?:\\s*(?:ранку|вечора|по обіді|після обіду))?(?!\\/)${i}`;
    }
    extractPrimaryTimeComponents(e, t) {
        let r = super.extractPrimaryTimeComponents(e, t);
        if (r) {
            if (t[0].endsWith("вечора")) {
                let e = r.get("hour");
                e >= 6 && e < 12
                    ? (r.assign("hour", r.get("hour") + 12), r.assign("meridiem", A.FF.PM))
                    : e < 6 && r.assign("meridiem", A.FF.AM);
            }
            if (t[0].endsWith("по обіді") || t[0].endsWith("після обіду")) {
                r.assign("meridiem", A.FF.PM);
                let e = r.get("hour");
                e >= 0 && e <= 6 && r.assign("hour", r.get("hour") + 12);
            }
            t[0].endsWith("ранку") &&
                (r.assign("meridiem", A.FF.AM), 12 > r.get("hour") && r.assign("hour", r.get("hour")));
        }
        return r;
    }
}
var B = r(632434);
class W extends $ {
    innerPatternString(e) {
        return `(${P})\\s{0,5}тому(?=(?:\\W|$))`;
    }
    innerExtract(e, t) {
        let r = F(t[1]),
            n = (0, B.x4)(r);
        return C.BP.createRelativeFromReference(e.reference, n);
    }
}
var S = r(172609);
class I extends S.A {
    patternBetween() {
        return /^\s*(і до|і по|до|по|-)\s*$/i;
    }
}
var Y = r(230205);
class z extends Y.A {
    patternBetween() {
        return RegExp("^\\s*(T|в|у|о|,|-)?\\s*$");
    }
}
var L = r(132588),
    N = r(996483);
class O extends R {
    innerPatternString(e) {
        return "(?:з|із|від)?\\s*(сьогодні|вчора|завтра|післязавтра|післяпіслязавтра|позапозавчора|позавчора)";
    }
    innerExtract(e, t) {
        let r = t[1].toLowerCase(),
            n = e.createParsingComponents();
        switch (r) {
            case "сьогодні":
                return N.Ec(e.reference);
            case "вчора":
                return N.jI(e.reference);
            case "завтра":
                return N.uf(e.reference);
            case "післязавтра":
                return N.AV(e.reference, 2);
            case "післяпіслязавтра":
                return N.AV(e.reference, 3);
            case "позавчора":
                return N.ti(e.reference, 2);
            case "позапозавчора":
                return N.ti(e.reference, 3);
        }
        return n;
    }
}
var J = r(658809);
class q extends R {
    innerPatternString(e) {
        return "(зараз|минулого\\s*вечора|минулої\\s*ночі|наступної\\s*ночі|сьогодні\\s*вночі|цієї\\s*ночі|цього ранку|вранці|ранку|зранку|опівдні|ввечері|вечора|опівночі|вночі)";
    }
    innerExtract(e, t) {
        let r = e.refDate,
            n = t[0].toLowerCase(),
            s = e.createParsingComponents();
        if ("зараз" === n) return N.tB(e.reference);
        if ("ввечері" === n || "вечора" === n) return N.Jp(e.reference);
        if (n.endsWith("вранці") || n.endsWith("ранку") || n.endsWith("зранку")) return N.F1(e.reference);
        if (n.endsWith("опівдні")) return N.zW(e.reference);
        if (n.match(/минулої\s*ночі/)) return N.zr(e.reference);
        if (n.match(/минулого\s*вечора/)) return N.Z6(e.reference);
        if (n.match(/наступної\s*ночі/)) {
            let e = 22 > r.getHours() ? 1 : 2,
                t = new Date(r.getTime());
            t.setDate(t.getDate() + e), (0, J.Pl)(s, t), s.imply("hour", 1);
        }
        return n.match(/цієї\s*ночі/) || n.endsWith("опівночі") || n.endsWith("вночі") ? N.Bm(e.reference) : s;
    }
}
var H = r(1673);
class V extends R {
    innerPatternString(e) {
        return `(?:(?:,|\\(|（)\\s*)?(?:в\\s*?)?(?:у\\s*?)?(?:(цей|минулого|минулий|попередній|попереднього|наступного|наступний|наступному)\\s*)?(${(0, n.uJ)(o)})(?:\\s*(?:,|\\)|）))?(?:\\s*(на|у|в)\\s*(цьому|минулому|наступному)\\s*тижні)?`;
    }
    innerExtract(e, t) {
        let r = o[t[2].toLocaleLowerCase()],
            n = t[1],
            s = t[3],
            a = n || s;
        a = (a = a || "").toLocaleLowerCase();
        let i = null;
        return (
            "минулого" == a || "минулий" == a || "попередній" == a || "попереднього" == a
                ? (i = "last")
                : "наступного" == a || "наступний" == a
                  ? (i = "next")
                  : ("цей" == a || "цього" == a || "цьому" == a) && (i = "this"),
            (0, H.Y5)(e.reference, r, i)
        );
    }
}
class U extends R {
    innerPatternString(e) {
        return `(в минулому|у минулому|на минулому|минулого|на наступному|в наступному|у наступному|наступного|на цьому|в цьому|у цьому|цього)\\s*(${(0, n.uJ)(c)})(?=\\s*)`;
    }
    innerExtract(e, t) {
        let r = t[1].toLowerCase(),
            n = c[t[2].toLowerCase()];
        if ("на наступному" == r || "в наступному" == r || "у наступному" == r || "наступного" == r) {
            let t = {};
            return (t[n] = 1), C.BP.createRelativeFromReference(e.reference, t);
        }
        if ("на минулому" == r || "в минулому" == r || "у минулому" == r || "минулого" == r) {
            let t = {};
            return (t[n] = -1), C.BP.createRelativeFromReference(e.reference, t);
        }
        let s = e.createParsingComponents(),
            a = new Date(e.reference.instant.getTime());
        return (
            n.match(/week/i)
                ? (a.setDate(a.getDate() - a.getDay()),
                  s.imply("day", a.getDate()),
                  s.imply("month", a.getMonth() + 1),
                  s.imply("year", a.getFullYear()))
                : n.match(/month/i)
                  ? (a.setDate(1),
                    s.imply("day", a.getDate()),
                    s.assign("year", a.getFullYear()),
                    s.assign("month", a.getMonth() + 1))
                  : n.match(/year/i) &&
                    (a.setDate(1),
                    a.setMonth(0),
                    s.imply("day", a.getDate()),
                    s.imply("month", a.getMonth() + 1),
                    s.assign("year", a.getFullYear())),
            s
        );
    }
}
var G = r(880683),
    Z = r(774188);
class K extends R {
    innerPatternString(e) {
        return `(ці|останні|минулі|майбутні|наступні|після|через|\\+|-)\\s*(${P})`;
    }
    innerExtract(e, t) {
        let r = t[1].toLowerCase(),
            n = F(t[3]);
        switch (r) {
            case "останні":
            case "минулі":
            case "-":
                n = (0, B.x4)(n);
        }
        return C.BP.createRelativeFromReference(e.reference, n);
    }
}
var _ = r(368324);
let X = new G.u(ee()),
    Q = new G.u(et(!0));
function ee() {
    let e = et(!1);
    return (
        e.parsers.unshift(new O()),
        e.parsers.unshift(new q()),
        e.parsers.unshift(new b()),
        e.parsers.unshift(new U()),
        e.parsers.unshift(new K()),
        e
    );
}
function et(e) {
    return (0, L.i)(
        {
            parsers: [new _.A(), new Z.A(!0), new M(), new E(), new V(), new j(e), new W()],
            refiners: [new z(), new I()],
        },
        e,
    );
}
function er(e, t, r) {
    return X.parse(e, t, r);
}
function en(e, t, r) {
    return X.parseDate(e, t, r);
}
