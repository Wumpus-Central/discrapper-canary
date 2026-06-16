!(function (e) {
    "use strict";
    var t = {
            1: "\u0CE7",
            2: "\u0CE8",
            3: "\u0CE9",
            4: "\u0CEA",
            5: "\u0CEB",
            6: "\u0CEC",
            7: "\u0CED",
            8: "\u0CEE",
            9: "\u0CEF",
            0: "\u0CE6",
        },
        n = {
            "\u0CE7": "1",
            "\u0CE8": "2",
            "\u0CE9": "3",
            "\u0CEA": "4",
            "\u0CEB": "5",
            "\u0CEC": "6",
            "\u0CED": "7",
            "\u0CEE": "8",
            "\u0CEF": "9",
            "\u0CE6": "0",
        };
    e.defineLocale("kn", {
        months: "\u0C9C\u0CA8\u0CB5\u0CB0\u0CBF_\u0CAB\u0CC6\u0CAC\u0CCD\u0CB0\u0CB5\u0CB0\u0CBF_\u0CAE\u0CBE\u0CB0\u0CCD\u0C9A\u0CCD_\u0C8F\u0CAA\u0CCD\u0CB0\u0CBF\u0CB2\u0CCD_\u0CAE\u0CC6\u0CD5_\u0C9C\u0CC2\u0CA8\u0CCD_\u0C9C\u0CC1\u0CB2\u0CC6\u0CD6_\u0C86\u0C97\u0CB8\u0CCD\u0C9F\u0CCD_\u0CB8\u0CC6\u0CAA\u0CCD\u0C9F\u0CC6\u0C82\u0CAC\u0CB0\u0CCD_\u0C85\u0C95\u0CCD\u0C9F\u0CC6\u0CC2\u0CD5\u0CAC\u0CB0\u0CCD_\u0CA8\u0CB5\u0CC6\u0C82\u0CAC\u0CB0\u0CCD_\u0CA1\u0CBF\u0CB8\u0CC6\u0C82\u0CAC\u0CB0\u0CCD".split(
            "_",
        ),
        monthsShort:
            "\u0C9C\u0CA8_\u0CAB\u0CC6\u0CAC\u0CCD\u0CB0_\u0CAE\u0CBE\u0CB0\u0CCD\u0C9A\u0CCD_\u0C8F\u0CAA\u0CCD\u0CB0\u0CBF\u0CB2\u0CCD_\u0CAE\u0CC6\u0CD5_\u0C9C\u0CC2\u0CA8\u0CCD_\u0C9C\u0CC1\u0CB2\u0CC6\u0CD6_\u0C86\u0C97\u0CB8\u0CCD\u0C9F\u0CCD_\u0CB8\u0CC6\u0CAA\u0CCD\u0C9F\u0CC6\u0C82_\u0C85\u0C95\u0CCD\u0C9F\u0CC6\u0CC2\u0CD5_\u0CA8\u0CB5\u0CC6\u0C82_\u0CA1\u0CBF\u0CB8\u0CC6\u0C82".split(
                "_",
            ),
        monthsParseExact: !0,
        weekdays:
            "\u0CAD\u0CBE\u0CA8\u0CC1\u0CB5\u0CBE\u0CB0_\u0CB8\u0CC6\u0CC2\u0CD5\u0CAE\u0CB5\u0CBE\u0CB0_\u0CAE\u0C82\u0C97\u0CB3\u0CB5\u0CBE\u0CB0_\u0CAC\u0CC1\u0CA7\u0CB5\u0CBE\u0CB0_\u0C97\u0CC1\u0CB0\u0CC1\u0CB5\u0CBE\u0CB0_\u0CB6\u0CC1\u0C95\u0CCD\u0CB0\u0CB5\u0CBE\u0CB0_\u0CB6\u0CA8\u0CBF\u0CB5\u0CBE\u0CB0".split(
                "_",
            ),
        weekdaysShort:
            "\u0CAD\u0CBE\u0CA8\u0CC1_\u0CB8\u0CC6\u0CC2\u0CD5\u0CAE_\u0CAE\u0C82\u0C97\u0CB3_\u0CAC\u0CC1\u0CA7_\u0C97\u0CC1\u0CB0\u0CC1_\u0CB6\u0CC1\u0C95\u0CCD\u0CB0_\u0CB6\u0CA8\u0CBF".split(
                "_",
            ),
        weekdaysMin:
            "\u0CAD\u0CBE_\u0CB8\u0CC6\u0CC2\u0CD5_\u0CAE\u0C82_\u0CAC\u0CC1_\u0C97\u0CC1_\u0CB6\u0CC1_\u0CB6".split(
                "_",
            ),
        longDateFormat: {
            LT: "A h:mm",
            LTS: "A h:mm:ss",
            L: "DD/MM/YYYY",
            LL: "D MMMM YYYY",
            LLL: "D MMMM YYYY, A h:mm",
            LLLL: "dddd, D MMMM YYYY, A h:mm",
        },
        calendar: {
            sameDay: "[\u0C87\u0C82\u0CA6\u0CC1] LT",
            nextDay: "[\u0CA8\u0CBE\u0CB3\u0CC6] LT",
            nextWeek: "dddd, LT",
            lastDay: "[\u0CA8\u0CBF\u0CA8\u0CCD\u0CA8\u0CC6] LT",
            lastWeek: "[\u0C95\u0CC6\u0CC2\u0CA8\u0CC6\u0CAF] dddd, LT",
            sameElse: "L",
        },
        relativeTime: {
            future: "%s \u0CA8\u0C82\u0CA4\u0CB0",
            past: "%s \u0CB9\u0CBF\u0C82\u0CA6\u0CC6",
            s: "\u0C95\u0CC6\u0CB2\u0CB5\u0CC1 \u0C95\u0CCD\u0CB7\u0CA3\u0C97\u0CB3\u0CC1",
            ss: "%d \u0CB8\u0CC6\u0C95\u0CC6\u0C82\u0CA1\u0CC1\u0C97\u0CB3\u0CC1",
            m: "\u0C92\u0C82\u0CA6\u0CC1 \u0CA8\u0CBF\u0CAE\u0CBF\u0CB7",
            mm: "%d \u0CA8\u0CBF\u0CAE\u0CBF\u0CB7",
            h: "\u0C92\u0C82\u0CA6\u0CC1 \u0C97\u0C82\u0C9F\u0CC6",
            hh: "%d \u0C97\u0C82\u0C9F\u0CC6",
            d: "\u0C92\u0C82\u0CA6\u0CC1 \u0CA6\u0CBF\u0CA8",
            dd: "%d \u0CA6\u0CBF\u0CA8",
            M: "\u0C92\u0C82\u0CA6\u0CC1 \u0CA4\u0CBF\u0C82\u0C97\u0CB3\u0CC1",
            MM: "%d \u0CA4\u0CBF\u0C82\u0C97\u0CB3\u0CC1",
            y: "\u0C92\u0C82\u0CA6\u0CC1 \u0CB5\u0CB0\u0CCD\u0CB7",
            yy: "%d \u0CB5\u0CB0\u0CCD\u0CB7",
        },
        preparse: function (e) {
            return e.replace(/[\u0ce7\u0ce8\u0ce9\u0cea\u0ceb\u0cec\u0ced\u0cee\u0cef\u0ce6]/g, function (e) {
                return n[e];
            });
        },
        postformat: function (e) {
            return e.replace(/\d/g, function (e) {
                return t[e];
            });
        },
        meridiemParse:
            /\u0cb0\u0cbe\u0ca4\u0ccd\u0cb0\u0cbf|\u0cac\u0cc6\u0cb3\u0cbf\u0c97\u0ccd\u0c97\u0cc6|\u0cae\u0ca7\u0ccd\u0caf\u0cbe\u0cb9\u0ccd\u0ca8|\u0cb8\u0c82\u0c9c\u0cc6/,
        meridiemHour: function (e, t) {
            return (12 === e && (e = 0), "\u0CB0\u0CBE\u0CA4\u0CCD\u0CB0\u0CBF" === t)
                ? e < 4
                    ? e
                    : e + 12
                : "\u0CAC\u0CC6\u0CB3\u0CBF\u0C97\u0CCD\u0C97\u0CC6" === t
                  ? e
                  : "\u0CAE\u0CA7\u0CCD\u0CAF\u0CBE\u0CB9\u0CCD\u0CA8" === t
                    ? e >= 10
                        ? e
                        : e + 12
                    : "\u0CB8\u0C82\u0C9C\u0CC6" === t
                      ? e + 12
                      : void 0;
        },
        meridiem: function (e, t, n) {
            return e < 4
                ? "\u0CB0\u0CBE\u0CA4\u0CCD\u0CB0\u0CBF"
                : e < 10
                  ? "\u0CAC\u0CC6\u0CB3\u0CBF\u0C97\u0CCD\u0C97\u0CC6"
                  : e < 17
                    ? "\u0CAE\u0CA7\u0CCD\u0CAF\u0CBE\u0CB9\u0CCD\u0CA8"
                    : e < 20
                      ? "\u0CB8\u0C82\u0C9C\u0CC6"
                      : "\u0CB0\u0CBE\u0CA4\u0CCD\u0CB0\u0CBF";
        },
        dayOfMonthOrdinalParse: /\d{1,2}(\u0ca8\u0cc6\u0cd5)/,
        ordinal: function (e) {
            return e + "\u0CA8\u0CC6\u0CD5";
        },
        week: { dow: 0, doy: 6 },
    });
})(n(989349));
