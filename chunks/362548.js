!(function (e) {
    "use strict";
    function a(e, a, s) {
        var t = e + " ";
        switch (s) {
            case "ss":
                return (
                    1 === e ? (t += "sekunda") : 2 === e || 3 === e || 4 === e ? (t += "sekunde") : (t += "sekundi"), t
                );
            case "m":
                return a ? "jedna minuta" : "jedne minute";
            case "mm":
                return 1 === e ? (t += "minuta") : 2 === e || 3 === e || 4 === e ? (t += "minute") : (t += "minuta"), t;
            case "h":
                return a ? "jedan sat" : "jednog sata";
            case "hh":
                return 1 === e ? (t += "sat") : 2 === e || 3 === e || 4 === e ? (t += "sata") : (t += "sati"), t;
            case "dd":
                return 1 === e ? (t += "dan") : (t += "dana"), t;
            case "MM":
                return (
                    1 === e ? (t += "mjesec") : 2 === e || 3 === e || 4 === e ? (t += "mjeseca") : (t += "mjeseci"), t
                );
            case "yy":
                return 1 === e ? (t += "godina") : 2 === e || 3 === e || 4 === e ? (t += "godine") : (t += "godina"), t;
        }
    }
    e.defineLocale("hr", {
        months: {
            format: "sije\u010Dnja_velja\u010De_o\u017Eujka_travnja_svibnja_lipnja_srpnja_kolovoza_rujna_listopada_studenoga_prosinca".split(
                "_",
            ),
            standalone:
                "sije\u010Danj_velja\u010Da_o\u017Eujak_travanj_svibanj_lipanj_srpanj_kolovoz_rujan_listopad_studeni_prosinac".split(
                    "_",
                ),
        },
        monthsShort: "sij._velj._o\u017Eu._tra._svi._lip._srp._kol._ruj._lis._stu._pro.".split("_"),
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
            ss: a,
            m: a,
            mm: a,
            h: a,
            hh: a,
            d: "dan",
            dd: a,
            M: "mjesec",
            MM: a,
            y: "godinu",
            yy: a,
        },
        dayOfMonthOrdinalParse: /\d{1,2}\./,
        ordinal: "%d.",
        week: { dow: 1, doy: 7 },
    });
})(s(989349));
