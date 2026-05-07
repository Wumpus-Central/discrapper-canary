!(function (e) {
    "use strict";
    var t = [
            "\u062C\u0646\u0648\u0631\u06CC",
            "\u0641\u0631\u0648\u0631\u06CC",
            "\u0645\u0627\u0631\u0686",
            "\u0627\u067E\u0631\u06CC\u0644",
            "\u0645\u0626\u06CC",
            "\u062C\u0648\u0646",
            "\u062C\u0648\u0644\u0627\u0626\u06CC",
            "\u0627\u06AF\u0633\u062A",
            "\u0633\u062A\u0645\u0628\u0631",
            "\u0627\u06A9\u062A\u0648\u0628\u0631",
            "\u0646\u0648\u0645\u0628\u0631",
            "\u062F\u0633\u0645\u0628\u0631",
        ],
        n = [
            "\u0627\u062A\u0648\u0627\u0631",
            "\u067E\u06CC\u0631",
            "\u0645\u0646\u06AF\u0644",
            "\u0628\u062F\u06BE",
            "\u062C\u0645\u0639\u0631\u0627\u062A",
            "\u062C\u0645\u0639\u06C1",
            "\u06C1\u0641\u062A\u06C1",
        ];
    e.defineLocale("ur", {
        months: t,
        monthsShort: t,
        weekdays: n,
        weekdaysShort: n,
        weekdaysMin: n,
        longDateFormat: {
            LT: "HH:mm",
            LTS: "HH:mm:ss",
            L: "DD/MM/YYYY",
            LL: "D MMMM YYYY",
            LLL: "D MMMM YYYY HH:mm",
            LLLL: "dddd\u060C D MMMM YYYY HH:mm",
        },
        meridiemParse: /\u0635\u0628\u062d|\u0634\u0627\u0645/,
        isPM: function (e) {
            return "\u0634\u0627\u0645" === e;
        },
        meridiem: function (e, t, n) {
            return e < 12 ? "\u0635\u0628\u062D" : "\u0634\u0627\u0645";
        },
        calendar: {
            sameDay: "[\u0622\u062C \u0628\u0648\u0642\u062A] LT",
            nextDay: "[\u06A9\u0644 \u0628\u0648\u0642\u062A] LT",
            nextWeek: "dddd [\u0628\u0648\u0642\u062A] LT",
            lastDay: "[\u06AF\u0630\u0634\u062A\u06C1 \u0631\u0648\u0632 \u0628\u0648\u0642\u062A] LT",
            lastWeek: "[\u06AF\u0630\u0634\u062A\u06C1] dddd [\u0628\u0648\u0642\u062A] LT",
            sameElse: "L",
        },
        relativeTime: {
            future: "%s \u0628\u0639\u062F",
            past: "%s \u0642\u0628\u0644",
            s: "\u0686\u0646\u062F \u0633\u06CC\u06A9\u0646\u0688",
            ss: "%d \u0633\u06CC\u06A9\u0646\u0688",
            m: "\u0627\u06CC\u06A9 \u0645\u0646\u0679",
            mm: "%d \u0645\u0646\u0679",
            h: "\u0627\u06CC\u06A9 \u06AF\u06BE\u0646\u0679\u06C1",
            hh: "%d \u06AF\u06BE\u0646\u0679\u06D2",
            d: "\u0627\u06CC\u06A9 \u062F\u0646",
            dd: "%d \u062F\u0646",
            M: "\u0627\u06CC\u06A9 \u0645\u0627\u06C1",
            MM: "%d \u0645\u0627\u06C1",
            y: "\u0627\u06CC\u06A9 \u0633\u0627\u0644",
            yy: "%d \u0633\u0627\u0644",
        },
        preparse: function (e) {
            return e.replace(/\u060c/g, ",");
        },
        postformat: function (e) {
            return e.replace(/,/g, "\u060C");
        },
        week: { dow: 1, doy: 4 },
    });
})(n(989349));
