Object.defineProperty(t, "__esModule", { value: !0 }),
    (t.TIME_UNITS_PATTERN =
        t.YEAR_PATTERN =
        t.NUMBER_PATTERN =
        t.TIME_UNIT_DICTIONARY =
        t.INTEGER_WORD_DICTIONARY =
        t.MONTH_DICTIONARY =
        t.WEEKDAY_DICTIONARY =
            void 0),
    (t.parseNumberPattern = i),
    (t.parseYear = function (e) {
        if (/v/i.test(e)) return -parseInt(e.replace(/[^0-9]+/gi, ""));
        if (/n/i.test(e) || /z/i.test(e)) return parseInt(e.replace(/[^0-9]+/gi, ""));
        let t = parseInt(e);
        return (0, a.findMostLikelyADYear)(t);
    }),
    (t.parseDuration = function (e) {
        let r = {},
            n = e,
            a = o.exec(n);
        for (; a; )
            (function (e, r) {
                let n = i(r[1]);
                e[t.TIME_UNIT_DICTIONARY[r[2].toLowerCase()]] = n;
            })(r, a),
                (n = n.substring(a[0].length)),
                (a = o.exec(n));
        return r;
    });
let n = r(798401),
    a = r(574253);
function i(e) {
    let r = e.toLowerCase();
    if (void 0 !== t.INTEGER_WORD_DICTIONARY[r]) return t.INTEGER_WORD_DICTIONARY[r];
    if ("ein" === r || "einer" === r || "einem" === r || "einen" === r || "eine" === r) return 1;
    if (r.match(/wenigen/)) return 2;
    if (r.match(/halb/) || r.match(/halben/)) return 0.5;
    if (r.match(/einigen/)) return 3;
    else if (r.match(/mehreren/)) return 7;
    return parseFloat(r);
}
(t.WEEKDAY_DICTIONARY = {
    sonntag: 0,
    so: 0,
    montag: 1,
    mo: 1,
    dienstag: 2,
    di: 2,
    mittwoch: 3,
    mi: 3,
    donnerstag: 4,
    do: 4,
    freitag: 5,
    fr: 5,
    samstag: 6,
    sa: 6,
}),
    (t.MONTH_DICTIONARY = {
        januar: 1,
        "j\xe4nner": 1,
        janner: 1,
        jan: 1,
        "jan.": 1,
        februar: 2,
        feber: 2,
        feb: 2,
        "feb.": 2,
        "m\xe4rz": 3,
        maerz: 3,
        "m\xe4r": 3,
        "m\xe4r.": 3,
        mrz: 3,
        "mrz.": 3,
        april: 4,
        apr: 4,
        "apr.": 4,
        mai: 5,
        juni: 6,
        jun: 6,
        "jun.": 6,
        juli: 7,
        jul: 7,
        "jul.": 7,
        august: 8,
        aug: 8,
        "aug.": 8,
        september: 9,
        sep: 9,
        "sep.": 9,
        sept: 9,
        "sept.": 9,
        oktober: 10,
        okt: 10,
        "okt.": 10,
        november: 11,
        nov: 11,
        "nov.": 11,
        dezember: 12,
        dez: 12,
        "dez.": 12,
    }),
    (t.INTEGER_WORD_DICTIONARY = {
        eins: 1,
        eine: 1,
        einem: 1,
        einen: 1,
        einer: 1,
        zwei: 2,
        drei: 3,
        vier: 4,
        "f\xfcnf": 5,
        fuenf: 5,
        sechs: 6,
        sieben: 7,
        acht: 8,
        neun: 9,
        zehn: 10,
        elf: 11,
        "zw\xf6lf": 12,
        zwoelf: 12,
    }),
    (t.TIME_UNIT_DICTIONARY = {
        sek: "second",
        sekunde: "second",
        sekunden: "second",
        min: "minute",
        minute: "minute",
        minuten: "minute",
        h: "hour",
        std: "hour",
        stunde: "hour",
        stunden: "hour",
        tag: "day",
        tage: "day",
        tagen: "day",
        woche: "week",
        wochen: "week",
        monat: "month",
        monate: "month",
        monaten: "month",
        monats: "month",
        quartal: "quarter",
        quartals: "quarter",
        quartale: "quarter",
        quartalen: "quarter",
        a: "year",
        j: "year",
        jr: "year",
        jahr: "year",
        jahre: "year",
        jahren: "year",
        jahres: "year",
    }),
    (t.NUMBER_PATTERN = `(?:${(0, n.matchAnyPattern)(t.INTEGER_WORD_DICTIONARY)}|[0-9]+|[0-9]+\\.[0-9]+|halb?|halbe?|einigen?|wenigen?|mehreren?)`),
    (t.YEAR_PATTERN =
        "(?:[0-9]{1,4}(?:\\s*[vn]\\.?\\s*(?:C(?:hr)?|(?:u\\.?|d\\.?(?:\\s*g\\.?)?)?\\s*Z)\\.?|\\s*(?:u\\.?|d\\.?(?:\\s*g\\.)?)\\s*Z\\.?)?)");
let s = `(${t.NUMBER_PATTERN})\\s{0,5}(${(0, n.matchAnyPattern)(t.TIME_UNIT_DICTIONARY)})\\s{0,5}`,
    o = RegExp(s, "i");
t.TIME_UNITS_PATTERN = (0, n.repeatedTimeunitPattern)("", s);
