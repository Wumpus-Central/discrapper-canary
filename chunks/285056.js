!(function (e) {
    e(n(989349));
})(function (e) {
    "use strict";
    var t = "leden_\xfanor_březen_duben_květen_červen_červenec_srpen_z\xe1ř\xed_ř\xedjen_listopad_prosinec".split("_"),
        n = "led_\xfano_bře_dub_kvě_čvn_čvc_srp_z\xe1ř_ř\xedj_lis_pro".split("_");
    function r(e) {
        return e > 1 && e < 5 && 1 != ~~(e / 10);
    }
    function i(e, t, n, i) {
        var s = e + " ";
        switch (n) {
            case "s":
                return t || i ? "p\xe1r sekund" : "p\xe1r sekundami";
            case "ss":
                if (t || i) return s + (r(e) ? "sekundy" : "sekund");
                return s + "sekundami";
            case "m":
                return t ? "minuta" : i ? "minutu" : "minutou";
            case "mm":
                if (t || i) return s + (r(e) ? "minuty" : "minut");
                return s + "minutami";
            case "h":
                return t ? "hodina" : i ? "hodinu" : "hodinou";
            case "hh":
                if (t || i) return s + (r(e) ? "hodiny" : "hodin");
                return s + "hodinami";
            case "d":
                return t || i ? "den" : "dnem";
            case "dd":
                if (t || i) return s + (r(e) ? "dny" : "dn\xed");
                return s + "dny";
            case "M":
                return t || i ? "měs\xedc" : "měs\xedcem";
            case "MM":
                if (t || i) return s + (r(e) ? "měs\xedce" : "měs\xedců");
                return s + "měs\xedci";
            case "y":
                return t || i ? "rok" : "rokem";
            case "yy":
                if (t || i) return s + (r(e) ? "roky" : "let");
                return s + "lety";
        }
    }
    return e.defineLocale("cs", {
        months: t,
        monthsShort: n,
        monthsParse: (function (e, t) {
            var n,
                r = [];
            for (n = 0; n < 12; n++) r[n] = RegExp("^" + e[n] + "$|^" + t[n] + "$", "i");
            return r;
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
        weekdays: "neděle_ponděl\xed_\xfater\xfd_středa_čtvrtek_p\xe1tek_sobota".split("_"),
        weekdaysShort: "ne_po_\xfat_st_čt_p\xe1_so".split("_"),
        weekdaysMin: "ne_po_\xfat_st_čt_p\xe1_so".split("_"),
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
                        return "[v neděli v] LT";
                    case 1:
                    case 2:
                        return "[v] dddd [v] LT";
                    case 3:
                        return "[ve středu v] LT";
                    case 4:
                        return "[ve čtvrtek v] LT";
                    case 5:
                        return "[v p\xe1tek v] LT";
                    case 6:
                        return "[v sobotu v] LT";
                }
            },
            lastDay: "[včera v] LT",
            lastWeek: function () {
                switch (this.day()) {
                    case 0:
                        return "[minulou neděli v] LT";
                    case 1:
                    case 2:
                        return "[minul\xe9] dddd [v] LT";
                    case 3:
                        return "[minulou středu v] LT";
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
            past: "před %s",
            s: i,
            ss: i,
            m: i,
            mm: i,
            h: i,
            hh: i,
            d: i,
            dd: i,
            M: i,
            MM: i,
            y: i,
            yy: i,
        },
        dayOfMonthOrdinalParse: /\d{1,2}\./,
        ordinal: "%d.",
        week: { dow: 1, doy: 4 },
    });
});
