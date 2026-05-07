!(function (e) {
    "use strict";
    function t(e) {
        return e > 1 && e < 5;
    }
    function n(e, n, i, r) {
        var s = e + " ";
        switch (i) {
            case "s":
                return n || r ? "p\xe1r sek\xfand" : "p\xe1r sekundami";
            case "ss":
                if (n || r) return s + (t(e) ? "sekundy" : "sek\xfand");
                return s + "sekundami";
            case "m":
                return n ? "min\xfata" : r ? "min\xfatu" : "min\xfatou";
            case "mm":
                if (n || r) return s + (t(e) ? "min\xfaty" : "min\xfat");
                return s + "min\xfatami";
            case "h":
                return n ? "hodina" : r ? "hodinu" : "hodinou";
            case "hh":
                if (n || r) return s + (t(e) ? "hodiny" : "hod\xedn");
                return s + "hodinami";
            case "d":
                return n || r ? "de\u0148" : "d\u0148om";
            case "dd":
                if (n || r) return s + (t(e) ? "dni" : "dn\xed");
                return s + "d\u0148ami";
            case "M":
                return n || r ? "mesiac" : "mesiacom";
            case "MM":
                if (n || r) return s + (t(e) ? "mesiace" : "mesiacov");
                return s + "mesiacmi";
            case "y":
                return n || r ? "rok" : "rokom";
            case "yy":
                if (n || r) return s + (t(e) ? "roky" : "rokov");
                return s + "rokmi";
        }
    }
    e.defineLocale("sk", {
        months: "janu\xe1r_febru\xe1r_marec_apr\xedl_m\xe1j_j\xfan_j\xfal_august_september_okt\xf3ber_november_december".split(
            "_",
        ),
        monthsShort: "jan_feb_mar_apr_m\xe1j_j\xfan_j\xfal_aug_sep_okt_nov_dec".split("_"),
        weekdays: "nede\u013Ea_pondelok_utorok_streda_\u0161tvrtok_piatok_sobota".split("_"),
        weekdaysShort: "ne_po_ut_st_\u0161t_pi_so".split("_"),
        weekdaysMin: "ne_po_ut_st_\u0161t_pi_so".split("_"),
        longDateFormat: {
            LT: "H:mm",
            LTS: "H:mm:ss",
            L: "DD.MM.YYYY",
            LL: "D. MMMM YYYY",
            LLL: "D. MMMM YYYY H:mm",
            LLLL: "dddd D. MMMM YYYY H:mm",
        },
        calendar: {
            sameDay: "[dnes o] LT",
            nextDay: "[zajtra o] LT",
            nextWeek: function () {
                switch (this.day()) {
                    case 0:
                        return "[v nede\u013Eu o] LT";
                    case 1:
                    case 2:
                        return "[v] dddd [o] LT";
                    case 3:
                        return "[v stredu o] LT";
                    case 4:
                        return "[vo \u0161tvrtok o] LT";
                    case 5:
                        return "[v piatok o] LT";
                    case 6:
                        return "[v sobotu o] LT";
                }
            },
            lastDay: "[v\u010Dera o] LT",
            lastWeek: function () {
                switch (this.day()) {
                    case 0:
                        return "[minul\xfa nede\u013Eu o] LT";
                    case 1:
                    case 2:
                    case 4:
                    case 5:
                        return "[minul\xfd] dddd [o] LT";
                    case 3:
                        return "[minul\xfa stredu o] LT";
                    case 6:
                        return "[minul\xfa sobotu o] LT";
                }
            },
            sameElse: "L",
        },
        relativeTime: {
            future: "za %s",
            past: "pred %s",
            s: n,
            ss: n,
            m: n,
            mm: n,
            h: n,
            hh: n,
            d: n,
            dd: n,
            M: n,
            MM: n,
            y: n,
            yy: n,
        },
        dayOfMonthOrdinalParse: /\d{1,2}\./,
        ordinal: "%d.",
        week: { dow: 1, doy: 4 },
    });
})(n(989349));
