!(function (e) {
    "use strict";
    function t(e, t, n) {
        var i, r, s;
        return (
            e +
            " " +
            ((i = { mm: "munutenn", MM: "miz", dd: "devezh" }[n]),
            2 === e
                ? void 0 === (s = { m: "v", b: "v", d: "z" })[(r = i).charAt(0)]
                    ? r
                    : s[r.charAt(0)] + r.substring(1)
                : i)
        );
    }
    e.defineLocale("br", {
        months: "Genver_C'hwevrer_Meurzh_Ebrel_Mae_Mezheven_Gouere_Eost_Gwengolo_Here_Du_Kerzu".split("_"),
        monthsShort: "Gen_C'hwe_Meu_Ebr_Mae_Eve_Gou_Eos_Gwe_Her_Du_Ker".split("_"),
        weekdays: "Sul_Lun_Meurzh_Merc'her_Yaou_Gwener_Sadorn".split("_"),
        weekdaysShort: "Sul_Lun_Meu_Mer_Yao_Gwe_Sad".split("_"),
        weekdaysMin: "Su_Lu_Me_Mer_Ya_Gw_Sa".split("_"),
        weekdaysParseExact: !0,
        longDateFormat: {
            LT: "h[e]mm A",
            LTS: "h[e]mm:ss A",
            L: "DD/MM/YYYY",
            LL: "D [a viz] MMMM YYYY",
            LLL: "D [a viz] MMMM YYYY h[e]mm A",
            LLLL: "dddd, D [a viz] MMMM YYYY h[e]mm A",
        },
        calendar: {
            sameDay: "[Hiziv da] LT",
            nextDay: "[Warc'hoazh da] LT",
            nextWeek: "dddd [da] LT",
            lastDay: "[Dec'h da] LT",
            lastWeek: "dddd [paset da] LT",
            sameElse: "L",
        },
        relativeTime: {
            future: "a-benn %s",
            past: "%s 'zo",
            s: "un nebeud segondenno\xf9",
            ss: "%d eilenn",
            m: "ur vunutenn",
            mm: t,
            h: "un eur",
            hh: "%d eur",
            d: "un devezh",
            dd: t,
            M: "ur miz",
            MM: t,
            y: "ur bloaz",
            yy: function (e) {
                switch (
                    (function e(t) {
                        return t > 9 ? e(t % 10) : t;
                    })(e)
                ) {
                    case 1:
                    case 3:
                    case 4:
                    case 5:
                    case 9:
                        return e + " bloaz";
                    default:
                        return e + " vloaz";
                }
            },
        },
        dayOfMonthOrdinalParse: /\d{1,2}(a\xf1|vet)/,
        ordinal: function (e) {
            return e + (1 === e ? "a\xf1" : "vet");
        },
        week: { dow: 1, doy: 4 },
    });
})(n(989349));
