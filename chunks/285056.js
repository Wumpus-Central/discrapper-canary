!(function (e) {
    "use strict";
    var n =
            "leden_\xfanor_b\u0159ezen_duben_kv\u011Bten_\u010Derven_\u010Dervenec_srpen_z\xe1\u0159\xed_\u0159\xedjen_listopad_prosinec".split(
                "_",
            ),
        r = "led_\xfano_b\u0159e_dub_kv\u011B_\u010Dvn_\u010Dvc_srp_z\xe1\u0159_\u0159\xedj_lis_pro".split("_");
    function t(e) {
        return e > 1 && e < 5 && 1 != ~~(e / 10);
    }
    function s(e, n, r, s) {
        var u = e + " ";
        switch (r) {
            case "s":
                return n || s ? "p\xe1r sekund" : "p\xe1r sekundami";
            case "ss":
                if (n || s) return u + (t(e) ? "sekundy" : "sekund");
                return u + "sekundami";
            case "m":
                return n ? "minuta" : s ? "minutu" : "minutou";
            case "mm":
                if (n || s) return u + (t(e) ? "minuty" : "minut");
                return u + "minutami";
            case "h":
                return n ? "hodina" : s ? "hodinu" : "hodinou";
            case "hh":
                if (n || s) return u + (t(e) ? "hodiny" : "hodin");
                return u + "hodinami";
            case "d":
                return n || s ? "den" : "dnem";
            case "dd":
                if (n || s) return u + (t(e) ? "dny" : "dn\xed");
                return u + "dny";
            case "M":
                return n || s ? "m\u011Bs\xedc" : "m\u011Bs\xedcem";
            case "MM":
                if (n || s) return u + (t(e) ? "m\u011Bs\xedce" : "m\u011Bs\xedc\u016F");
                return u + "m\u011Bs\xedci";
            case "y":
                return n || s ? "rok" : "rokem";
            case "yy":
                if (n || s) return u + (t(e) ? "roky" : "let");
                return u + "lety";
        }
    }
    e.defineLocale("cs", {
        months: n,
        monthsShort: r,
        monthsParse: (function (e, n) {
            var r,
                t = [];
            for (r = 0; r < 12; r++) t[r] = RegExp("^" + e[r] + "$|^" + n[r] + "$", "i");
            return t;
        })(n, r),
        shortMonthsParse: (function (e) {
            var n,
                r = [];
            for (n = 0; n < 12; n++) r[n] = RegExp("^" + e[n] + "$", "i");
            return r;
        })(r),
        longMonthsParse: (function (e) {
            var n,
                r = [];
            for (n = 0; n < 12; n++) r[n] = RegExp("^" + e[n] + "$", "i");
            return r;
        })(n),
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
            s: s,
            ss: s,
            m: s,
            mm: s,
            h: s,
            hh: s,
            d: s,
            dd: s,
            M: s,
            MM: s,
            y: s,
            yy: s,
        },
        dayOfMonthOrdinalParse: /\d{1,2}\./,
        ordinal: "%d.",
        week: { dow: 1, doy: 4 },
    });
})(r(989349));
