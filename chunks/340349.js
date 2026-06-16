!(function (e) {
    "use strict";
    function t(e, t, n, i) {
        var r = e + " ";
        switch (n) {
            case "s":
                return t || i ? "nekaj sekund" : "nekaj sekundami";
            case "ss":
                return (
                    1 === e
                        ? (r += t ? "sekundo" : "sekundi")
                        : 2 === e
                          ? (r += t || i ? "sekundi" : "sekundah")
                          : e < 5
                            ? (r += t || i ? "sekunde" : "sekundah")
                            : (r += "sekund"),
                    r
                );
            case "m":
                return t ? "ena minuta" : "eno minuto";
            case "mm":
                return (
                    1 === e
                        ? (r += t ? "minuta" : "minuto")
                        : 2 === e
                          ? (r += t || i ? "minuti" : "minutama")
                          : e < 5
                            ? (r += t || i ? "minute" : "minutami")
                            : (r += t || i ? "minut" : "minutami"),
                    r
                );
            case "h":
                return t ? "ena ura" : "eno uro";
            case "hh":
                return (
                    1 === e
                        ? (r += t ? "ura" : "uro")
                        : 2 === e
                          ? (r += t || i ? "uri" : "urama")
                          : e < 5
                            ? (r += t || i ? "ure" : "urami")
                            : (r += t || i ? "ur" : "urami"),
                    r
                );
            case "d":
                return t || i ? "en dan" : "enim dnem";
            case "dd":
                return (
                    1 === e
                        ? (r += t || i ? "dan" : "dnem")
                        : 2 === e
                          ? (r += t || i ? "dni" : "dnevoma")
                          : (r += t || i ? "dni" : "dnevi"),
                    r
                );
            case "M":
                return t || i ? "en mesec" : "enim mesecem";
            case "MM":
                return (
                    1 === e
                        ? (r += t || i ? "mesec" : "mesecem")
                        : 2 === e
                          ? (r += t || i ? "meseca" : "mesecema")
                          : e < 5
                            ? (r += t || i ? "mesece" : "meseci")
                            : (r += t || i ? "mesecev" : "meseci"),
                    r
                );
            case "y":
                return t || i ? "eno leto" : "enim letom";
            case "yy":
                return (
                    1 === e
                        ? (r += t || i ? "leto" : "letom")
                        : 2 === e
                          ? (r += t || i ? "leti" : "letoma")
                          : e < 5
                            ? (r += t || i ? "leta" : "leti")
                            : (r += t || i ? "let" : "leti"),
                    r
                );
        }
    }
    e.defineLocale("sl", {
        months: "januar_februar_marec_april_maj_junij_julij_avgust_september_oktober_november_december".split("_"),
        monthsShort: "jan._feb._mar._apr._maj._jun._jul._avg._sep._okt._nov._dec.".split("_"),
        monthsParseExact: !0,
        weekdays: "nedelja_ponedeljek_torek_sreda_\u010Detrtek_petek_sobota".split("_"),
        weekdaysShort: "ned._pon._tor._sre._\u010Det._pet._sob.".split("_"),
        weekdaysMin: "ne_po_to_sr_\u010De_pe_so".split("_"),
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
            sameDay: "[danes ob] LT",
            nextDay: "[jutri ob] LT",
            nextWeek: function () {
                switch (this.day()) {
                    case 0:
                        return "[v] [nedeljo] [ob] LT";
                    case 3:
                        return "[v] [sredo] [ob] LT";
                    case 6:
                        return "[v] [soboto] [ob] LT";
                    case 1:
                    case 2:
                    case 4:
                    case 5:
                        return "[v] dddd [ob] LT";
                }
            },
            lastDay: "[v\u010Deraj ob] LT",
            lastWeek: function () {
                switch (this.day()) {
                    case 0:
                        return "[prej\u0161njo] [nedeljo] [ob] LT";
                    case 3:
                        return "[prej\u0161njo] [sredo] [ob] LT";
                    case 6:
                        return "[prej\u0161njo] [soboto] [ob] LT";
                    case 1:
                    case 2:
                    case 4:
                    case 5:
                        return "[prej\u0161nji] dddd [ob] LT";
                }
            },
            sameElse: "L",
        },
        relativeTime: {
            future: "\u010Dez %s",
            past: "pred %s",
            s: t,
            ss: t,
            m: t,
            mm: t,
            h: t,
            hh: t,
            d: t,
            dd: t,
            M: t,
            MM: t,
            y: t,
            yy: t,
        },
        dayOfMonthOrdinalParse: /\d{1,2}\./,
        ordinal: "%d.",
        week: { dow: 1, doy: 7 },
    });
})(n(989349));
