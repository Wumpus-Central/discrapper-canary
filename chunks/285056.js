!(function (e) {
    "use strict";
    var t =
            "leden_\xfanor_b\u0159ezen_duben_kv\u011Bten_\u010Derven_\u010Dervenec_srpen_z\xe1\u0159\xed_\u0159\xedjen_listopad_prosinec".split(
                "_",
            ),
        n = "led_\xfano_b\u0159e_dub_kv\u011B_\u010Dvn_\u010Dvc_srp_z\xe1\u0159_\u0159\xedj_lis_pro".split("_");
    function i(e) {
        return e > 1 && e < 5 && 1 != ~~(e / 10);
    }
    function r(e, t, n, r) {
        var s = e + " ";
        switch (n) {
            case "s":
                return t || r ? "p\xe1r sekund" : "p\xe1r sekundami";
            case "ss":
                if (t || r) return s + (i(e) ? "sekundy" : "sekund");
                return s + "sekundami";
            case "m":
                return t ? "minuta" : r ? "minutu" : "minutou";
            case "mm":
                if (t || r) return s + (i(e) ? "minuty" : "minut");
                return s + "minutami";
            case "h":
                return t ? "hodina" : r ? "hodinu" : "hodinou";
            case "hh":
                if (t || r) return s + (i(e) ? "hodiny" : "hodin");
                return s + "hodinami";
            case "d":
                return t || r ? "den" : "dnem";
            case "dd":
                if (t || r) return s + (i(e) ? "dny" : "dn\xed");
                return s + "dny";
            case "M":
                return t || r ? "m\u011Bs\xedc" : "m\u011Bs\xedcem";
            case "MM":
                if (t || r) return s + (i(e) ? "m\u011Bs\xedce" : "m\u011Bs\xedc\u016F");
                return s + "m\u011Bs\xedci";
            case "y":
                return t || r ? "rok" : "rokem";
            case "yy":
                if (t || r) return s + (i(e) ? "roky" : "let");
                return s + "lety";
        }
    }
    e.defineLocale("cs", {
        months: t,
        monthsShort: n,
        monthsParse: (function (e, t) {
            var n,
                i = [];
            for (n = 0; n < 12; n++) i[n] = RegExp("^" + e[n] + "$|^" + t[n] + "$", "i");
            return i;
        })(t, n),
        shortMonthsParse: (function (e) {
            var t,
                n = [];
            for (t = 0; t < 12; t++) n[t] = RegExp("^" + e[t] + "$", "i");
            return n;
        })(n),
        longMonthsParse: (function (e) {
            var t,
                n = [];
            for (t = 0; t < 12; t++) n[t] = RegExp("^" + e[t] + "$", "i");
            return n;
        })(t),
        weekdays: "ned\u011Ble_pond\u011Bl\xed_\xfater\xfd_st\u0159eda_\u010Dtvrtek_p\xe1tek_sobota".split("_"),
        weekdaysShort: "ne_po_\xfat_st_\u010Dt_p\xe1_so".split("_"),
        weekdaysMin: "ne_po_\xfat_st_\u010Dt_p\xe1_so".split("_"),
        longDateFormat: {
            LT: "H:mm",
            LTS: "H:mm:ss",
            L: "DD.MM.YYYY",
            LL: "D. MMMM YYYY",
            LLL: "D. MMMM YYYY H:mm",
            LLLL: "dddd D. MMMM YYYY H:mm",
            l: "D. M. YYYY",
        },
        calendar: {
            sameDay: "[dnes v] LT",
            nextDay: "[z\xedtra v] LT",
            nextWeek: function () {
                switch (this.day()) {
                    case 0:
                        return "[v ned\u011Bli v] LT";
                    case 1:
                    case 2:
                        return "[v] dddd [v] LT";
                    case 3:
                        return "[ve st\u0159edu v] LT";
                    case 4:
                        return "[ve \u010Dtvrtek v] LT";
                    case 5:
                        return "[v p\xe1tek v] LT";
                    case 6:
                        return "[v sobotu v] LT";
                }
            },
            lastDay: "[v\u010Dera v] LT",
            lastWeek: function () {
                switch (this.day()) {
                    case 0:
                        return "[minulou ned\u011Bli v] LT";
                    case 1:
                    case 2:
                        return "[minul\xe9] dddd [v] LT";
                    case 3:
                        return "[minulou st\u0159edu v] LT";
                    case 4:
                    case 5:
                        return "[minul\xfd] dddd [v] LT";
                    case 6:
                        return "[minulou sobotu v] LT";
                }
            },
            sameElse: "L",
        },
        relativeTime: {
            future: "za %s",
            past: "p\u0159ed %s",
            s: r,
            ss: r,
            m: r,
            mm: r,
            h: r,
            hh: r,
            d: r,
            dd: r,
            M: r,
            MM: r,
            y: r,
            yy: r,
        },
        dayOfMonthOrdinalParse: /\d{1,2}\./,
        ordinal: "%d.",
        week: { dow: 1, doy: 4 },
    });
})(n(989349));
