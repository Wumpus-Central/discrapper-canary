!(function (a) {
    "use strict";
    var s = {
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
        6: "'nc\u0131",
        9: "'uncu",
        10: "'uncu",
        30: "'uncu",
        60: "'\u0131nc\u0131",
        90: "'\u0131nc\u0131",
    };
    a.defineLocale("tr", {
        months: "Ocak_\u015Eubat_Mart_Nisan_May\u0131s_Haziran_Temmuz_A\u011Fustos_Eyl\xfcl_Ekim_Kas\u0131m_Aral\u0131k".split(
            "_",
        ),
        monthsShort: "Oca_\u015Eub_Mar_Nis_May_Haz_Tem_A\u011Fu_Eyl_Eki_Kas_Ara".split("_"),
        weekdays: "Pazar_Pazartesi_Sal\u0131_\xc7ar\u015Famba_Per\u015Fembe_Cuma_Cumartesi".split("_"),
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
            nextDay: "[yar\u0131n saat] LT",
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
            y: "bir y\u0131l",
            yy: "%d y\u0131l",
        },
        ordinal: function (a, e) {
            switch (e) {
                case "d":
                case "D":
                case "Do":
                case "DD":
                    return a;
                default:
                    if (0 === a) return a + "'\u0131nc\u0131";
                    var i = a % 10;
                    return a + (s[i] || s[(a % 100) - i] || s[a >= 100 ? 100 : null]);
            }
        },
        week: { dow: 1, doy: 7 },
    });
})(e(989349));
