!(function (e) {
    "use strict";
    var t = {
            1: "\u0967",
            2: "\u0968",
            3: "\u0969",
            4: "\u096A",
            5: "\u096B",
            6: "\u096C",
            7: "\u096D",
            8: "\u096E",
            9: "\u096F",
            0: "\u0966",
        },
        n = {
            "\u0967": "1",
            "\u0968": "2",
            "\u0969": "3",
            "\u096A": "4",
            "\u096B": "5",
            "\u096C": "6",
            "\u096D": "7",
            "\u096E": "8",
            "\u096F": "9",
            "\u0966": "0",
        };
    e.defineLocale("ne", {
        months: "\u091C\u0928\u0935\u0930\u0940_\u092B\u0947\u092C\u094D\u0930\u0941\u0935\u0930\u0940_\u092E\u093E\u0930\u094D\u091A_\u0905\u092A\u094D\u0930\u093F\u0932_\u092E\u0908_\u091C\u0941\u0928_\u091C\u0941\u0932\u093E\u0908_\u0905\u0917\u0937\u094D\u091F_\u0938\u0947\u092A\u094D\u091F\u0947\u092E\u094D\u092C\u0930_\u0905\u0915\u094D\u091F\u094B\u092C\u0930_\u0928\u094B\u092D\u0947\u092E\u094D\u092C\u0930_\u0921\u093F\u0938\u0947\u092E\u094D\u092C\u0930".split(
            "_",
        ),
        monthsShort:
            "\u091C\u0928._\u092B\u0947\u092C\u094D\u0930\u0941._\u092E\u093E\u0930\u094D\u091A_\u0905\u092A\u094D\u0930\u093F._\u092E\u0908_\u091C\u0941\u0928_\u091C\u0941\u0932\u093E\u0908._\u0905\u0917._\u0938\u0947\u092A\u094D\u091F._\u0905\u0915\u094D\u091F\u094B._\u0928\u094B\u092D\u0947._\u0921\u093F\u0938\u0947.".split(
                "_",
            ),
        monthsParseExact: !0,
        weekdays:
            "\u0906\u0907\u0924\u092C\u093E\u0930_\u0938\u094B\u092E\u092C\u093E\u0930_\u092E\u0919\u094D\u0917\u0932\u092C\u093E\u0930_\u092C\u0941\u0927\u092C\u093E\u0930_\u092C\u093F\u0939\u093F\u092C\u093E\u0930_\u0936\u0941\u0915\u094D\u0930\u092C\u093E\u0930_\u0936\u0928\u093F\u092C\u093E\u0930".split(
                "_",
            ),
        weekdaysShort:
            "\u0906\u0907\u0924._\u0938\u094B\u092E._\u092E\u0919\u094D\u0917\u0932._\u092C\u0941\u0927._\u092C\u093F\u0939\u093F._\u0936\u0941\u0915\u094D\u0930._\u0936\u0928\u093F.".split(
                "_",
            ),
        weekdaysMin: "\u0906._\u0938\u094B._\u092E\u0902._\u092C\u0941._\u092C\u093F._\u0936\u0941._\u0936.".split("_"),
        weekdaysParseExact: !0,
        longDateFormat: {
            LT: "A\u0915\u094B h:mm \u092C\u091C\u0947",
            LTS: "A\u0915\u094B h:mm:ss \u092C\u091C\u0947",
            L: "DD/MM/YYYY",
            LL: "D MMMM YYYY",
            LLL: "D MMMM YYYY, A\u0915\u094B h:mm \u092C\u091C\u0947",
            LLLL: "dddd, D MMMM YYYY, A\u0915\u094B h:mm \u092C\u091C\u0947",
        },
        preparse: function (e) {
            return e.replace(/[\u0967\u0968\u0969\u096a\u096b\u096c\u096d\u096e\u096f\u0966]/g, function (e) {
                return n[e];
            });
        },
        postformat: function (e) {
            return e.replace(/\d/g, function (e) {
                return t[e];
            });
        },
        meridiemParse:
            /\u0930\u093e\u0924\u093f|\u092c\u093f\u0939\u093e\u0928|\u0926\u093f\u0909\u0901\u0938\u094b|\u0938\u093e\u0901\u091d/,
        meridiemHour: function (e, t) {
            return (12 === e && (e = 0), "\u0930\u093E\u0924\u093F" === t)
                ? e < 4
                    ? e
                    : e + 12
                : "\u092C\u093F\u0939\u093E\u0928" === t
                  ? e
                  : "\u0926\u093F\u0909\u0901\u0938\u094B" === t
                    ? e >= 10
                        ? e
                        : e + 12
                    : "\u0938\u093E\u0901\u091D" === t
                      ? e + 12
                      : void 0;
        },
        meridiem: function (e, t, n) {
            return e < 3
                ? "\u0930\u093E\u0924\u093F"
                : e < 12
                  ? "\u092C\u093F\u0939\u093E\u0928"
                  : e < 16
                    ? "\u0926\u093F\u0909\u0901\u0938\u094B"
                    : e < 20
                      ? "\u0938\u093E\u0901\u091D"
                      : "\u0930\u093E\u0924\u093F";
        },
        calendar: {
            sameDay: "[\u0906\u091C] LT",
            nextDay: "[\u092D\u094B\u0932\u093F] LT",
            nextWeek: "[\u0906\u0909\u0901\u0926\u094B] dddd[,] LT",
            lastDay: "[\u0939\u093F\u091C\u094B] LT",
            lastWeek: "[\u0917\u090F\u0915\u094B] dddd[,] LT",
            sameElse: "L",
        },
        relativeTime: {
            future: "%s\u092E\u093E",
            past: "%s \u0905\u0917\u093E\u0921\u093F",
            s: "\u0915\u0947\u0939\u0940 \u0915\u094D\u0937\u0923",
            ss: "%d \u0938\u0947\u0915\u0947\u0923\u094D\u0921",
            m: "\u090F\u0915 \u092E\u093F\u0928\u0947\u091F",
            mm: "%d \u092E\u093F\u0928\u0947\u091F",
            h: "\u090F\u0915 \u0918\u0923\u094D\u091F\u093E",
            hh: "%d \u0918\u0923\u094D\u091F\u093E",
            d: "\u090F\u0915 \u0926\u093F\u0928",
            dd: "%d \u0926\u093F\u0928",
            M: "\u090F\u0915 \u092E\u0939\u093F\u0928\u093E",
            MM: "%d \u092E\u0939\u093F\u0928\u093E",
            y: "\u090F\u0915 \u092C\u0930\u094D\u0937",
            yy: "%d \u092C\u0930\u094D\u0937",
        },
        week: { dow: 0, doy: 6 },
    });
})(n(989349));
