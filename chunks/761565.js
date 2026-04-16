!(function (e) {
    e(n(989349));
})(function (e) {
    "use strict";
    var t = {
        1: "-inci",
        5: "-inci",
        8: "-inci",
        70: "-inci",
        80: "-inci",
        2: "-nci",
        7: "-nci",
        20: "-nci",
        50: "-nci",
        3: "-\xfcnc\xfc",
        4: "-\xfcnc\xfc",
        100: "-\xfcnc\xfc",
        6: "-ncı",
        9: "-uncu",
        10: "-uncu",
        30: "-uncu",
        60: "-ıncı",
        90: "-ıncı",
    };
    return e.defineLocale("az", {
        months: "yanvar_fevral_mart_aprel_may_iyun_iyul_avqust_sentyabr_oktyabr_noyabr_dekabr".split("_"),
        monthsShort: "yan_fev_mar_apr_may_iyn_iyl_avq_sen_okt_noy_dek".split("_"),
        weekdays: "Bazar_Bazar ertəsi_\xc7ərşənbə axşamı_\xc7ərşənbə_C\xfcmə axşamı_C\xfcmə_Şənbə".split("_"),
        weekdaysShort: "Baz_BzE_\xc7Ax_\xc7ər_CAx_C\xfcm_Şən".split("_"),
        weekdaysMin: "Bz_BE_\xc7A_\xc7ə_CA_C\xfc_Şə".split("_"),
        weekdaysParseExact: !0,
        longDateFormat: {
            LT: "HH:mm",
            LTS: "HH:mm:ss",
            L: "DD.MM.YYYY",
            LL: "D MMMM YYYY",
            LLL: "D MMMM YYYY HH:mm",
            LLLL: "dddd, D MMMM YYYY HH:mm",
        },
        calendar: {
            sameDay: "[bug\xfcn saat] LT",
            nextDay: "[sabah saat] LT",
            nextWeek: "[gələn həftə] dddd [saat] LT",
            lastDay: "[d\xfcnən] LT",
            lastWeek: "[ke\xe7ən həftə] dddd [saat] LT",
            sameElse: "L",
        },
        relativeTime: {
            future: "%s sonra",
            past: "%s əvvəl",
            s: "birne\xe7ə saniyə",
            ss: "%d saniyə",
            m: "bir dəqiqə",
            mm: "%d dəqiqə",
            h: "bir saat",
            hh: "%d saat",
            d: "bir g\xfcn",
            dd: "%d g\xfcn",
            M: "bir ay",
            MM: "%d ay",
            y: "bir il",
            yy: "%d il",
        },
        meridiemParse: /gecə|səhər|gündüz|axşam/,
        isPM: function (e) {
            return /^(gündüz|axşam)$/.test(e);
        },
        meridiem: function (e, t, n) {
            return e < 4 ? "gecə" : e < 12 ? "səhər" : e < 17 ? "g\xfcnd\xfcz" : "axşam";
        },
        dayOfMonthOrdinalParse: /\d{1,2}-(ıncı|inci|nci|üncü|ncı|uncu)/,
        ordinal: function (e) {
            if (0 === e) return e + "-ıncı";
            var n = e % 10,
                r = (e % 100) - n,
                i = e >= 100 ? 100 : null;
            return e + (t[n] || t[r] || t[i]);
        },
        week: { dow: 1, doy: 7 },
    });
});
