n(989349).defineLocale("vi", {
    months: "th\xe1ng 1_th\xe1ng 2_th\xe1ng 3_th\xe1ng 4_th\xe1ng 5_th\xe1ng 6_th\xe1ng 7_th\xe1ng 8_th\xe1ng 9_th\xe1ng 10_th\xe1ng 11_th\xe1ng 12".split(
        "_",
    ),
    monthsShort: "Th01_Th02_Th03_Th04_Th05_Th06_Th07_Th08_Th09_Th10_Th11_Th12".split("_"),
    monthsParseExact: !0,
    weekdays: "chủ nhật_thứ hai_thứ ba_thứ tư_thứ năm_thứ s\xe1u_thứ bảy".split("_"),
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
        LL: "D MMMM [năm] YYYY",
        LLL: "D MMMM [năm] YYYY HH:mm",
        LLLL: "dddd, D MMMM [năm] YYYY HH:mm",
        l: "DD/M/YYYY",
        ll: "D MMM YYYY",
        lll: "D MMM YYYY HH:mm",
        llll: "ddd, D MMM YYYY HH:mm",
    },
    calendar: {
        sameDay: "[H\xf4m nay l\xfac] LT",
        nextDay: "[Ng\xe0y mai l\xfac] LT",
        nextWeek: "dddd [tuần tới l\xfac] LT",
        lastDay: "[H\xf4m qua l\xfac] LT",
        lastWeek: "dddd [tuần rồi l\xfac] LT",
        sameElse: "L",
    },
    relativeTime: {
        future: "%s tới",
        past: "%s trước",
        s: "v\xe0i gi\xe2y",
        ss: "%d gi\xe2y",
        m: "một ph\xfat",
        mm: "%d ph\xfat",
        h: "một giờ",
        hh: "%d giờ",
        d: "một ng\xe0y",
        dd: "%d ng\xe0y",
        M: "một th\xe1ng",
        MM: "%d th\xe1ng",
        y: "một năm",
        yy: "%d năm",
    },
    dayOfMonthOrdinalParse: /\d{1,2}/,
    ordinal: function (e) {
        return e;
    },
    week: { dow: 1, doy: 4 },
});
