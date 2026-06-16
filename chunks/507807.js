n(989349).defineLocale("vi", {
    months: "th\xe1ng 1_th\xe1ng 2_th\xe1ng 3_th\xe1ng 4_th\xe1ng 5_th\xe1ng 6_th\xe1ng 7_th\xe1ng 8_th\xe1ng 9_th\xe1ng 10_th\xe1ng 11_th\xe1ng 12".split(
        "_",
    ),
    monthsShort: "Th01_Th02_Th03_Th04_Th05_Th06_Th07_Th08_Th09_Th10_Th11_Th12".split("_"),
    monthsParseExact: !0,
    weekdays:
        "ch\u1EE7 nh\u1EADt_th\u1EE9 hai_th\u1EE9 ba_th\u1EE9 t\u01B0_th\u1EE9 n\u0103m_th\u1EE9 s\xe1u_th\u1EE9 b\u1EA3y".split(
            "_",
        ),
    weekdaysShort: "CN_T2_T3_T4_T5_T6_T7".split("_"),
    weekdaysMin: "CN_T2_T3_T4_T5_T6_T7".split("_"),
    weekdaysParseExact: !0,
    meridiemParse: /sa|ch/i,
    isPM: function (e) {
        return /^ch$/i.test(e);
    },
    meridiem: function (e, t, n) {
        return e < 12 ? (n ? "sa" : "SA") : n ? "ch" : "CH";
    },
    longDateFormat: {
        LT: "HH:mm",
        LTS: "HH:mm:ss",
        L: "DD/MM/YYYY",
        LL: "D MMMM [n\u0103m] YYYY",
        LLL: "D MMMM [n\u0103m] YYYY HH:mm",
        LLLL: "dddd, D MMMM [n\u0103m] YYYY HH:mm",
        l: "DD/M/YYYY",
        ll: "D MMM YYYY",
        lll: "D MMM YYYY HH:mm",
        llll: "ddd, D MMM YYYY HH:mm",
    },
    calendar: {
        sameDay: "[H\xf4m nay l\xfac] LT",
        nextDay: "[Ng\xe0y mai l\xfac] LT",
        nextWeek: "dddd [tu\u1EA7n t\u1EDBi l\xfac] LT",
        lastDay: "[H\xf4m qua l\xfac] LT",
        lastWeek: "dddd [tu\u1EA7n r\u1ED3i l\xfac] LT",
        sameElse: "L",
    },
    relativeTime: {
        future: "%s t\u1EDBi",
        past: "%s tr\u01B0\u1EDBc",
        s: "v\xe0i gi\xe2y",
        ss: "%d gi\xe2y",
        m: "m\u1ED9t ph\xfat",
        mm: "%d ph\xfat",
        h: "m\u1ED9t gi\u1EDD",
        hh: "%d gi\u1EDD",
        d: "m\u1ED9t ng\xe0y",
        dd: "%d ng\xe0y",
        M: "m\u1ED9t th\xe1ng",
        MM: "%d th\xe1ng",
        y: "m\u1ED9t n\u0103m",
        yy: "%d n\u0103m",
    },
    dayOfMonthOrdinalParse: /\d{1,2}/,
    ordinal: function (e) {
        return e;
    },
    week: { dow: 1, doy: 4 },
});
