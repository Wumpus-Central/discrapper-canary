!(function (e) {
    "use strict";
    function t(e) {
        if (e % 100 == 11);
        else if (e % 10 == 1) return !1;
        return !0;
    }
    function n(e, n, r, i) {
        var s = e + " ";
        switch (r) {
            case "s":
                return n || i ? "nokkrar sek\xfandur" : "nokkrum sek\xfandum";
            case "ss":
                if (t(e)) return s + (n || i ? "sek\xfandur" : "sek\xfandum");
                return s + "sek\xfanda";
            case "m":
                return n ? "m\xedn\xfata" : "m\xedn\xfatu";
            case "mm":
                if (t(e)) return s + (n || i ? "m\xedn\xfatur" : "m\xedn\xfatum");
                if (n) return s + "m\xedn\xfata";
                return s + "m\xedn\xfatu";
            case "hh":
                if (t(e)) return s + (n || i ? "klukkustundir" : "klukkustundum");
                return s + "klukkustund";
            case "d":
                if (n) return "dagur";
                return i ? "dag" : "degi";
            case "dd":
                if (t(e)) {
                    if (n) return s + "dagar";
                    return s + (i ? "daga" : "d\xf6gum");
                }
                if (n) return s + "dagur";
                return s + (i ? "dag" : "degi");
            case "M":
                if (n) return "m\xe1nu\xf0ur";
                return i ? "m\xe1nu\xf0" : "m\xe1nu\xf0i";
            case "MM":
                if (t(e)) {
                    if (n) return s + "m\xe1nu\xf0ir";
                    return s + (i ? "m\xe1nu\xf0i" : "m\xe1nu\xf0um");
                }
                if (n) return s + "m\xe1nu\xf0ur";
                return s + (i ? "m\xe1nu\xf0" : "m\xe1nu\xf0i");
            case "y":
                return n || i ? "\xe1r" : "\xe1ri";
            case "yy":
                if (t(e)) return s + (n || i ? "\xe1r" : "\xe1rum");
                return s + (n || i ? "\xe1r" : "\xe1ri");
        }
    }
    e.defineLocale("is", {
        months: "jan\xfaar_febr\xfaar_mars_apr\xedl_ma\xed_j\xfan\xed_j\xfal\xed_\xe1g\xfast_september_okt\xf3ber_n\xf3vember_desember".split(
            "_",
        ),
        monthsShort: "jan_feb_mar_apr_ma\xed_j\xfan_j\xfal_\xe1g\xfa_sep_okt_n\xf3v_des".split("_"),
        weekdays:
            "sunnudagur_m\xe1nudagur_\xferi\xf0judagur_mi\xf0vikudagur_fimmtudagur_f\xf6studagur_laugardagur".split(
                "_",
            ),
        weekdaysShort: "sun_m\xe1n_\xferi_mi\xf0_fim_f\xf6s_lau".split("_"),
        weekdaysMin: "Su_M\xe1_\xder_Mi_Fi_F\xf6_La".split("_"),
        longDateFormat: {
            LT: "H:mm",
            LTS: "H:mm:ss",
            L: "DD.MM.YYYY",
            LL: "D. MMMM YYYY",
            LLL: "D. MMMM YYYY [kl.] H:mm",
            LLLL: "dddd, D. MMMM YYYY [kl.] H:mm",
        },
        calendar: {
            sameDay: "[\xed dag kl.] LT",
            nextDay: "[\xe1 morgun kl.] LT",
            nextWeek: "dddd [kl.] LT",
            lastDay: "[\xed g\xe6r kl.] LT",
            lastWeek: "[s\xed\xf0asta] dddd [kl.] LT",
            sameElse: "L",
        },
        relativeTime: {
            future: "eftir %s",
            past: "fyrir %s s\xed\xf0an",
            s: n,
            ss: n,
            m: n,
            mm: n,
            h: "klukkustund",
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
