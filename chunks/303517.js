!(function (e) {
    "use strict";
    function t(e, t, n) {
        var i = e + " ";
        switch (n) {
            case "ss":
                return (
                    1 === e ? (i += "sekunda") : 2 === e || 3 === e || 4 === e ? (i += "sekunde") : (i += "sekundi"), i
                );
            case "m":
                return t ? "jedna minuta" : "jedne minute";
            case "mm":
                return 1 === e ? (i += "minuta") : 2 === e || 3 === e || 4 === e ? (i += "minute") : (i += "minuta"), i;
            case "h":
                return t ? "jedan sat" : "jednog sata";
            case "hh":
                return 1 === e ? (i += "sat") : 2 === e || 3 === e || 4 === e ? (i += "sata") : (i += "sati"), i;
            case "dd":
                return 1 === e ? (i += "dan") : (i += "dana"), i;
            case "MM":
                return (
                    1 === e ? (i += "mjesec") : 2 === e || 3 === e || 4 === e ? (i += "mjeseca") : (i += "mjeseci"), i
                );
            case "yy":
                return 1 === e ? (i += "godina") : 2 === e || 3 === e || 4 === e ? (i += "godine") : (i += "godina"), i;
        }
    }
    e.defineLocale("bs", {
        months: "januar_februar_mart_april_maj_juni_juli_august_septembar_oktobar_novembar_decembar".split("_"),
        monthsShort: "jan._feb._mar._apr._maj._jun._jul._aug._sep._okt._nov._dec.".split("_"),
        monthsParseExact: !0,
        weekdays: "nedjelja_ponedjeljak_utorak_srijeda_\u010Detvrtak_petak_subota".split("_"),
        weekdaysShort: "ned._pon._uto._sri._\u010Det._pet._sub.".split("_"),
        weekdaysMin: "ne_po_ut_sr_\u010De_pe_su".split("_"),
        weekdaysParseExact: !0,
        longDateFormat: {
            LT: "H:mm",
            LTS: "H:mm:ss",
            L: "DD.MM.YYYY",
            LL: "D. MMMM YYYY",
            LLL: "D. MMMM YYYY H:mm",
            LLLL: "dddd, D. MMMM YYYY H:mm",
        },
        calendar: {
            sameDay: "[danas u] LT",
            nextDay: "[sutra u] LT",
            nextWeek: function () {
                switch (this.day()) {
                    case 0:
                        return "[u] [nedjelju] [u] LT";
                    case 3:
                        return "[u] [srijedu] [u] LT";
                    case 6:
                        return "[u] [subotu] [u] LT";
                    case 1:
                    case 2:
                    case 4:
                    case 5:
                        return "[u] dddd [u] LT";
                }
            },
            lastDay: "[ju\u010Der u] LT",
            lastWeek: function () {
                switch (this.day()) {
                    case 0:
                    case 3:
                        return "[pro\u0161lu] dddd [u] LT";
                    case 6:
                        return "[pro\u0161le] [subote] [u] LT";
                    case 1:
                    case 2:
                    case 4:
                    case 5:
                        return "[pro\u0161li] dddd [u] LT";
                }
            },
            sameElse: "L",
        },
        relativeTime: {
            future: "za %s",
            past: "prije %s",
            s: "par sekundi",
            ss: t,
            m: t,
            mm: t,
            h: t,
            hh: t,
            d: "dan",
            dd: t,
            M: "mjesec",
            MM: t,
            y: "godinu",
            yy: t,
        },
        dayOfMonthOrdinalParse: /\d{1,2}\./,
        ordinal: "%d.",
        week: { dow: 1, doy: 7 },
    });
})(n(989349));
