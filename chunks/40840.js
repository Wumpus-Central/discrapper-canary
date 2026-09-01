Object.defineProperty(t, "__esModule", { value: !0 }),
    (t.TIME_UNITS_NO_ABBR_PATTERN =
        t.TIME_UNITS_PATTERN =
        t.YEAR_PATTERN =
        t.ORDINAL_NUMBER_PATTERN =
        t.NUMBER_PATTERN =
        t.TIME_UNIT_DICTIONARY =
        t.TIME_UNIT_DICTIONARY_NO_ABBR =
        t.ORDINAL_WORD_DICTIONARY =
        t.INTEGER_WORD_DICTIONARY =
        t.MONTH_DICTIONARY =
        t.FULL_MONTH_NAME_DICTIONARY =
        t.WEEKDAY_DICTIONARY =
            void 0),
    (t.parseNumberPattern = i),
    (t.parseOrdinalNumberPattern = function (e) {
        let r = e.toLowerCase();
        return void 0 !== t.ORDINAL_WORD_DICTIONARY[r]
            ? t.ORDINAL_WORD_DICTIONARY[r]
            : parseInt((r = r.replace(/(?:st|nd|rd|th)$/i, "")));
    }),
    (t.parseYear = function (e) {
        if (/BE/i.test(e)) return parseInt((e = e.replace(/BE/i, ""))) - 543;
        if (/BCE?/i.test(e)) return -parseInt((e = e.replace(/BCE?/i, "")));
        if (/(AD|CE)/i.test(e)) return parseInt((e = e.replace(/(AD|CE)/i, "")));
        let t = parseInt(e);
        return (0, a.findMostLikelyADYear)(t);
    }),
    (t.parseDuration = function (e) {
        let r = {},
            n = e,
            a = o.exec(n);
        for (; a; )
            (function (e, r) {
                if (r[0].match(/^[a-zA-Z]+$/)) return;
                let n = i(r[1]);
                e[t.TIME_UNIT_DICTIONARY[r[2].toLowerCase()]] = n;
            })(r, a),
                (n = n.substring(a[0].length).trim()),
                (a = o.exec(n));
        return 0 == Object.keys(r).length ? null : r;
    });
let n = r(798401),
    a = r(574253);
function i(e) {
    let r = e.toLowerCase();
    if (void 0 !== t.INTEGER_WORD_DICTIONARY[r]) return t.INTEGER_WORD_DICTIONARY[r];
    if ("a" === r || "an" === r || "the" == r) return 1;
    if (r.match(/few/)) return 3;
    if (r.match(/half/)) return 0.5;
    if (r.match(/couple/)) return 2;
    else if (r.match(/several/)) return 7;
    return parseFloat(r);
}
(t.WEEKDAY_DICTIONARY = {
    sunday: 0,
    sun: 0,
    "sun.": 0,
    monday: 1,
    mon: 1,
    "mon.": 1,
    tuesday: 2,
    tue: 2,
    "tue.": 2,
    wednesday: 3,
    wed: 3,
    "wed.": 3,
    thursday: 4,
    thurs: 4,
    "thurs.": 4,
    thur: 4,
    "thur.": 4,
    thu: 4,
    "thu.": 4,
    friday: 5,
    fri: 5,
    "fri.": 5,
    saturday: 6,
    sat: 6,
    "sat.": 6,
}),
    (t.FULL_MONTH_NAME_DICTIONARY = {
        january: 1,
        february: 2,
        march: 3,
        april: 4,
        may: 5,
        june: 6,
        july: 7,
        august: 8,
        september: 9,
        october: 10,
        november: 11,
        december: 12,
    }),
    (t.MONTH_DICTIONARY = Object.assign(Object.assign({}, t.FULL_MONTH_NAME_DICTIONARY), {
        jan: 1,
        "jan.": 1,
        feb: 2,
        "feb.": 2,
        mar: 3,
        "mar.": 3,
        apr: 4,
        "apr.": 4,
        jun: 6,
        "jun.": 6,
        jul: 7,
        "jul.": 7,
        aug: 8,
        "aug.": 8,
        sep: 9,
        "sep.": 9,
        sept: 9,
        "sept.": 9,
        oct: 10,
        "oct.": 10,
        nov: 11,
        "nov.": 11,
        dec: 12,
        "dec.": 12,
    })),
    (t.INTEGER_WORD_DICTIONARY = {
        one: 1,
        two: 2,
        three: 3,
        four: 4,
        five: 5,
        six: 6,
        seven: 7,
        eight: 8,
        nine: 9,
        ten: 10,
        eleven: 11,
        twelve: 12,
    }),
    (t.ORDINAL_WORD_DICTIONARY = {
        first: 1,
        second: 2,
        third: 3,
        fourth: 4,
        fifth: 5,
        sixth: 6,
        seventh: 7,
        eighth: 8,
        ninth: 9,
        tenth: 10,
        eleventh: 11,
        twelfth: 12,
        thirteenth: 13,
        fourteenth: 14,
        fifteenth: 15,
        sixteenth: 16,
        seventeenth: 17,
        eighteenth: 18,
        nineteenth: 19,
        twentieth: 20,
        "twenty first": 21,
        "twenty-first": 21,
        "twenty second": 22,
        "twenty-second": 22,
        "twenty third": 23,
        "twenty-third": 23,
        "twenty fourth": 24,
        "twenty-fourth": 24,
        "twenty fifth": 25,
        "twenty-fifth": 25,
        "twenty sixth": 26,
        "twenty-sixth": 26,
        "twenty seventh": 27,
        "twenty-seventh": 27,
        "twenty eighth": 28,
        "twenty-eighth": 28,
        "twenty ninth": 29,
        "twenty-ninth": 29,
        thirtieth: 30,
        "thirty first": 31,
        "thirty-first": 31,
    }),
    (t.TIME_UNIT_DICTIONARY_NO_ABBR = {
        second: "second",
        seconds: "second",
        minute: "minute",
        minutes: "minute",
        hour: "hour",
        hours: "hour",
        day: "day",
        days: "day",
        week: "week",
        weeks: "week",
        month: "month",
        months: "month",
        quarter: "quarter",
        quarters: "quarter",
        year: "year",
        years: "year",
    }),
    (t.TIME_UNIT_DICTIONARY = Object.assign(
        {
            s: "second",
            sec: "second",
            second: "second",
            seconds: "second",
            m: "minute",
            min: "minute",
            mins: "minute",
            minute: "minute",
            minutes: "minute",
            h: "hour",
            hr: "hour",
            hrs: "hour",
            hour: "hour",
            hours: "hour",
            d: "day",
            day: "day",
            days: "day",
            w: "week",
            week: "week",
            weeks: "week",
            mo: "month",
            mon: "month",
            mos: "month",
            month: "month",
            months: "month",
            qtr: "quarter",
            quarter: "quarter",
            quarters: "quarter",
            y: "year",
            yr: "year",
            year: "year",
            years: "year",
        },
        t.TIME_UNIT_DICTIONARY_NO_ABBR,
    )),
    (t.NUMBER_PATTERN = `(?:${(0, n.matchAnyPattern)(t.INTEGER_WORD_DICTIONARY)}|[0-9]+|[0-9]+\\.[0-9]+|half(?:\\s{0,2}an?)?|an?\\b(?:\\s{0,2}few)?|few|several|the|a?\\s{0,2}couple\\s{0,2}(?:of)?)`),
    (t.ORDINAL_NUMBER_PATTERN = `(?:${(0, n.matchAnyPattern)(t.ORDINAL_WORD_DICTIONARY)}|[0-9]{1,2}(?:st|nd|rd|th)?)`),
    (t.YEAR_PATTERN = "(?:[1-9][0-9]{0,3}\\s{0,2}(?:BE|AD|BC|BCE|CE)|[1-2][0-9]{3}|[5-9][0-9]|2[0-5])");
let s = `(${t.NUMBER_PATTERN})\\s{0,3}(${(0, n.matchAnyPattern)(t.TIME_UNIT_DICTIONARY)})`,
    o = RegExp(s, "i"),
    u = `(${t.NUMBER_PATTERN})\\s{0,3}(${(0, n.matchAnyPattern)(t.TIME_UNIT_DICTIONARY_NO_ABBR)})`,
    l = "\\s{0,5},?(?:\\s*and)?\\s{0,5}";
(t.TIME_UNITS_PATTERN = (0, n.repeatedTimeunitPattern)("(?:(?:about|around)\\s{0,3})?", s, l)),
    (t.TIME_UNITS_NO_ABBR_PATTERN = (0, n.repeatedTimeunitPattern)("(?:(?:about|around)\\s{0,3})?", u, l));
