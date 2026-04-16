!(function (e) {
    e(n(989349));
})(function (e) {
    "use strict";
    var t = {
        1: "'inci",
        5: "'inci",
        8: "'inci",
        70: "'inci",
        80: "'inci",
        2: "'nci",
        7: "'nci",
        20: "'nci",
        50: "'nci",
        3: "'\xfcnc\xfc",
        4: "'\xfcnc\xfc",
        100: "'\xfcnc\xfc",
        6: "'ncı",
        9: "'uncu",
        10: "'uncu",
        30: "'uncu",
        60: "'ıncı",
        90: "'ıncı",
    };
    return e.defineLocale("tr", {
        months: "Ocak_Şubat_Mart_Nisan_Mayıs_Haziran_Temmuz_Ağustos_Eyl\xfcl_Ekim_Kasım_Aralık".split("_"),
        monthsShort: "Oca_Şub_Mar_Nis_May_Haz_Tem_Ağu_Eyl_Eki_Kas_Ara".split("_"),
        weekdays: "Pazar_Pazartesi_Salı_\xc7arşamba_Perşembe_Cuma_Cumartesi".split("_"),
        weekdaysShort: "Paz_Pts_Sal_\xc7ar_Per_Cum_Cts".split("_"),
        weekdaysMin: "Pz_Pt_Sa_\xc7a_Pe_Cu_Ct".split("_"),
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
            nextDay: "[yarın saat] LT",
            nextWeek: "[gelecek] dddd [saat] LT",
            lastDay: "[d\xfcn] LT",
            lastWeek: "[ge\xe7en] dddd [saat] LT",
            sameElse: "L",
        },
        relativeTime: {
            future: "%s sonra",
            past: "%s \xf6nce",
            s: "birka\xe7 saniye",
            ss: "%d saniye",
            m: "bir dakika",
            mm: "%d dakika",
            h: "bir saat",
            hh: "%d saat",
            d: "bir g\xfcn",
            dd: "%d g\xfcn",
            M: "bir ay",
            MM: "%d ay",
            y: "bir yıl",
            yy: "%d yıl",
        },
        ordinal: function (e, n) {
            switch (n) {
                case "d":
                case "D":
                case "Do":
                case "DD":
                    return e;
                default:
                    if (0 === e) return e + "'ıncı";
                    var r = e % 10,
                        i = (e % 100) - r,
                        s = e >= 100 ? 100 : null;
                    return e + (t[r] || t[i] || t[s]);
            }
        },
        week: { dow: 1, doy: 7 },
    });
});
