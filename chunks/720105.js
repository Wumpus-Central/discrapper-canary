!(function (e) {
    "use strict";
    var t = {
            1: "\u0A67",
            2: "\u0A68",
            3: "\u0A69",
            4: "\u0A6A",
            5: "\u0A6B",
            6: "\u0A6C",
            7: "\u0A6D",
            8: "\u0A6E",
            9: "\u0A6F",
            0: "\u0A66",
        },
        n = {
            "\u0A67": "1",
            "\u0A68": "2",
            "\u0A69": "3",
            "\u0A6A": "4",
            "\u0A6B": "5",
            "\u0A6C": "6",
            "\u0A6D": "7",
            "\u0A6E": "8",
            "\u0A6F": "9",
            "\u0A66": "0",
        };
    e.defineLocale("pa-in", {
        months: "\u0A1C\u0A28\u0A35\u0A30\u0A40_\u0A2B\u0A3C\u0A30\u0A35\u0A30\u0A40_\u0A2E\u0A3E\u0A30\u0A1A_\u0A05\u0A2A\u0A4D\u0A30\u0A48\u0A32_\u0A2E\u0A08_\u0A1C\u0A42\u0A28_\u0A1C\u0A41\u0A32\u0A3E\u0A08_\u0A05\u0A17\u0A38\u0A24_\u0A38\u0A24\u0A70\u0A2C\u0A30_\u0A05\u0A15\u0A24\u0A42\u0A2C\u0A30_\u0A28\u0A35\u0A70\u0A2C\u0A30_\u0A26\u0A38\u0A70\u0A2C\u0A30".split(
            "_",
        ),
        monthsShort:
            "\u0A1C\u0A28\u0A35\u0A30\u0A40_\u0A2B\u0A3C\u0A30\u0A35\u0A30\u0A40_\u0A2E\u0A3E\u0A30\u0A1A_\u0A05\u0A2A\u0A4D\u0A30\u0A48\u0A32_\u0A2E\u0A08_\u0A1C\u0A42\u0A28_\u0A1C\u0A41\u0A32\u0A3E\u0A08_\u0A05\u0A17\u0A38\u0A24_\u0A38\u0A24\u0A70\u0A2C\u0A30_\u0A05\u0A15\u0A24\u0A42\u0A2C\u0A30_\u0A28\u0A35\u0A70\u0A2C\u0A30_\u0A26\u0A38\u0A70\u0A2C\u0A30".split(
                "_",
            ),
        weekdays:
            "\u0A10\u0A24\u0A35\u0A3E\u0A30_\u0A38\u0A4B\u0A2E\u0A35\u0A3E\u0A30_\u0A2E\u0A70\u0A17\u0A32\u0A35\u0A3E\u0A30_\u0A2C\u0A41\u0A27\u0A35\u0A3E\u0A30_\u0A35\u0A40\u0A30\u0A35\u0A3E\u0A30_\u0A38\u0A3C\u0A41\u0A71\u0A15\u0A30\u0A35\u0A3E\u0A30_\u0A38\u0A3C\u0A28\u0A40\u0A1A\u0A30\u0A35\u0A3E\u0A30".split(
                "_",
            ),
        weekdaysShort:
            "\u0A10\u0A24_\u0A38\u0A4B\u0A2E_\u0A2E\u0A70\u0A17\u0A32_\u0A2C\u0A41\u0A27_\u0A35\u0A40\u0A30_\u0A38\u0A3C\u0A41\u0A15\u0A30_\u0A38\u0A3C\u0A28\u0A40".split(
                "_",
            ),
        weekdaysMin:
            "\u0A10\u0A24_\u0A38\u0A4B\u0A2E_\u0A2E\u0A70\u0A17\u0A32_\u0A2C\u0A41\u0A27_\u0A35\u0A40\u0A30_\u0A38\u0A3C\u0A41\u0A15\u0A30_\u0A38\u0A3C\u0A28\u0A40".split(
                "_",
            ),
        longDateFormat: {
            LT: "A h:mm \u0A35\u0A1C\u0A47",
            LTS: "A h:mm:ss \u0A35\u0A1C\u0A47",
            L: "DD/MM/YYYY",
            LL: "D MMMM YYYY",
            LLL: "D MMMM YYYY, A h:mm \u0A35\u0A1C\u0A47",
            LLLL: "dddd, D MMMM YYYY, A h:mm \u0A35\u0A1C\u0A47",
        },
        calendar: {
            sameDay: "[\u0A05\u0A1C] LT",
            nextDay: "[\u0A15\u0A32] LT",
            nextWeek: "[\u0A05\u0A17\u0A32\u0A3E] dddd, LT",
            lastDay: "[\u0A15\u0A32] LT",
            lastWeek: "[\u0A2A\u0A3F\u0A1B\u0A32\u0A47] dddd, LT",
            sameElse: "L",
        },
        relativeTime: {
            future: "%s \u0A35\u0A3F\u0A71\u0A1A",
            past: "%s \u0A2A\u0A3F\u0A1B\u0A32\u0A47",
            s: "\u0A15\u0A41\u0A1D \u0A38\u0A15\u0A3F\u0A70\u0A1F",
            ss: "%d \u0A38\u0A15\u0A3F\u0A70\u0A1F",
            m: "\u0A07\u0A15 \u0A2E\u0A3F\u0A70\u0A1F",
            mm: "%d \u0A2E\u0A3F\u0A70\u0A1F",
            h: "\u0A07\u0A71\u0A15 \u0A18\u0A70\u0A1F\u0A3E",
            hh: "%d \u0A18\u0A70\u0A1F\u0A47",
            d: "\u0A07\u0A71\u0A15 \u0A26\u0A3F\u0A28",
            dd: "%d \u0A26\u0A3F\u0A28",
            M: "\u0A07\u0A71\u0A15 \u0A2E\u0A39\u0A40\u0A28\u0A3E",
            MM: "%d \u0A2E\u0A39\u0A40\u0A28\u0A47",
            y: "\u0A07\u0A71\u0A15 \u0A38\u0A3E\u0A32",
            yy: "%d \u0A38\u0A3E\u0A32",
        },
        preparse: function (e) {
            return e.replace(/[\u0a67\u0a68\u0a69\u0a6a\u0a6b\u0a6c\u0a6d\u0a6e\u0a6f\u0a66]/g, function (e) {
                return n[e];
            });
        },
        postformat: function (e) {
            return e.replace(/\d/g, function (e) {
                return t[e];
            });
        },
        meridiemParse:
            /\u0a30\u0a3e\u0a24|\u0a38\u0a35\u0a47\u0a30|\u0a26\u0a41\u0a2a\u0a39\u0a3f\u0a30|\u0a38\u0a3c\u0a3e\u0a2e/,
        meridiemHour: function (e, t) {
            return (12 === e && (e = 0), "\u0A30\u0A3E\u0A24" === t)
                ? e < 4
                    ? e
                    : e + 12
                : "\u0A38\u0A35\u0A47\u0A30" === t
                  ? e
                  : "\u0A26\u0A41\u0A2A\u0A39\u0A3F\u0A30" === t
                    ? e >= 10
                        ? e
                        : e + 12
                    : "\u0A38\u0A3C\u0A3E\u0A2E" === t
                      ? e + 12
                      : void 0;
        },
        meridiem: function (e, t, n) {
            return e < 4
                ? "\u0A30\u0A3E\u0A24"
                : e < 10
                  ? "\u0A38\u0A35\u0A47\u0A30"
                  : e < 17
                    ? "\u0A26\u0A41\u0A2A\u0A39\u0A3F\u0A30"
                    : e < 20
                      ? "\u0A38\u0A3C\u0A3E\u0A2E"
                      : "\u0A30\u0A3E\u0A24";
        },
        week: { dow: 0, doy: 6 },
    });
})(n(989349));
