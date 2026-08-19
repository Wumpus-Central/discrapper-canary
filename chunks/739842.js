!(function (e) {
    "use strict";
    var t =
            "stycze\u0144_luty_marzec_kwiecie\u0144_maj_czerwiec_lipiec_sierpie\u0144_wrzesie\u0144_pa\u017Adziernik_listopad_grudzie\u0144".split(
                "_",
            ),
        i =
            "stycznia_lutego_marca_kwietnia_maja_czerwca_lipca_sierpnia_wrze\u015Bnia_pa\u017Adziernika_listopada_grudnia".split(
                "_",
            );
    function a(e) {
        return e % 10 < 5 && e % 10 > 1 && ~~(e / 10) % 10 != 1;
    }
    function s(e, t, i) {
        var s = e + " ";
        switch (i) {
            case "ss":
                return s + (a(e) ? "sekundy" : "sekund");
            case "m":
                return t ? "minuta" : "minut\u0119";
            case "mm":
                return s + (a(e) ? "minuty" : "minut");
            case "h":
                return t ? "godzina" : "godzin\u0119";
            case "hh":
                return s + (a(e) ? "godziny" : "godzin");
            case "MM":
                return s + (a(e) ? "miesi\u0105ce" : "miesi\u0119cy");
            case "yy":
                return s + (a(e) ? "lata" : "lat");
        }
    }
    e.defineLocale("pl", {
        months: function (e, a) {
            return e
                ? "" === a
                    ? "(" + i[e.month()] + "|" + t[e.month()] + ")"
                    : /D MMMM/.test(a)
                      ? i[e.month()]
                      : t[e.month()]
                : t;
        },
        monthsShort: "sty_lut_mar_kwi_maj_cze_lip_sie_wrz_pa\u017A_lis_gru".split("_"),
        weekdays: "niedziela_poniedzia\u0142ek_wtorek_\u015Broda_czwartek_pi\u0105tek_sobota".split("_"),
        weekdaysShort: "ndz_pon_wt_\u015Br_czw_pt_sob".split("_"),
        weekdaysMin: "Nd_Pn_Wt_\u015Ar_Cz_Pt_So".split("_"),
        longDateFormat: {
            LT: "HH:mm",
            LTS: "HH:mm:ss",
            L: "DD.MM.YYYY",
            LL: "D MMMM YYYY",
            LLL: "D MMMM YYYY HH:mm",
            LLLL: "dddd, D MMMM YYYY HH:mm",
        },
        calendar: {
            sameDay: "[Dzi\u015B o] LT",
            nextDay: "[Jutro o] LT",
            nextWeek: function () {
                switch (this.day()) {
                    case 0:
                        return "[W niedziel\u0119 o] LT";
                    case 2:
                        return "[We wtorek o] LT";
                    case 3:
                        return "[W \u015Brod\u0119 o] LT";
                    case 6:
                        return "[W sobot\u0119 o] LT";
                    default:
                        return "[W] dddd [o] LT";
                }
            },
            lastDay: "[Wczoraj o] LT",
            lastWeek: function () {
                switch (this.day()) {
                    case 0:
                        return "[W zesz\u0142\u0105 niedziel\u0119 o] LT";
                    case 3:
                        return "[W zesz\u0142\u0105 \u015Brod\u0119 o] LT";
                    case 6:
                        return "[W zesz\u0142\u0105 sobot\u0119 o] LT";
                    default:
                        return "[W zesz\u0142y] dddd [o] LT";
                }
            },
            sameElse: "L",
        },
        relativeTime: {
            future: "za %s",
            past: "%s temu",
            s: "kilka sekund",
            ss: s,
            m: s,
            mm: s,
            h: s,
            hh: s,
            d: "1 dzie\u0144",
            dd: "%d dni",
            M: "miesi\u0105c",
            MM: s,
            y: "rok",
            yy: s,
        },
        dayOfMonthOrdinalParse: /\d{1,2}\./,
        ordinal: "%d.",
        week: { dow: 1, doy: 4 },
    });
})(i(989349));
