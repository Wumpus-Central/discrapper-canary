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
    function i(e, t, n, i) {
        var r = "";
        if (t)
            switch (n) {
                case "s":
                    r = "\u0915\u093E\u0939\u0940 \u0938\u0947\u0915\u0902\u0926";
                    break;
                case "ss":
                    r = "%d \u0938\u0947\u0915\u0902\u0926";
                    break;
                case "m":
                    r = "\u090F\u0915 \u092E\u093F\u0928\u093F\u091F";
                    break;
                case "mm":
                    r = "%d \u092E\u093F\u0928\u093F\u091F\u0947";
                    break;
                case "h":
                    r = "\u090F\u0915 \u0924\u093E\u0938";
                    break;
                case "hh":
                    r = "%d \u0924\u093E\u0938";
                    break;
                case "d":
                    r = "\u090F\u0915 \u0926\u093F\u0935\u0938";
                    break;
                case "dd":
                    r = "%d \u0926\u093F\u0935\u0938";
                    break;
                case "M":
                    r = "\u090F\u0915 \u092E\u0939\u093F\u0928\u093E";
                    break;
                case "MM":
                    r = "%d \u092E\u0939\u093F\u0928\u0947";
                    break;
                case "y":
                    r = "\u090F\u0915 \u0935\u0930\u094D\u0937";
                    break;
                case "yy":
                    r = "%d \u0935\u0930\u094D\u0937\u0947";
            }
        else
            switch (n) {
                case "s":
                    r = "\u0915\u093E\u0939\u0940 \u0938\u0947\u0915\u0902\u0926\u093E\u0902";
                    break;
                case "ss":
                    r = "%d \u0938\u0947\u0915\u0902\u0926\u093E\u0902";
                    break;
                case "m":
                    r = "\u090F\u0915\u093E \u092E\u093F\u0928\u093F\u091F\u093E";
                    break;
                case "mm":
                    r = "%d \u092E\u093F\u0928\u093F\u091F\u093E\u0902";
                    break;
                case "h":
                    r = "\u090F\u0915\u093E \u0924\u093E\u0938\u093E";
                    break;
                case "hh":
                    r = "%d \u0924\u093E\u0938\u093E\u0902";
                    break;
                case "d":
                    r = "\u090F\u0915\u093E \u0926\u093F\u0935\u0938\u093E";
                    break;
                case "dd":
                    r = "%d \u0926\u093F\u0935\u0938\u093E\u0902";
                    break;
                case "M":
                    r = "\u090F\u0915\u093E \u092E\u0939\u093F\u0928\u094D\u092F\u093E";
                    break;
                case "MM":
                    r = "%d \u092E\u0939\u093F\u0928\u094D\u092F\u093E\u0902";
                    break;
                case "y":
                    r = "\u090F\u0915\u093E \u0935\u0930\u094D\u0937\u093E";
                    break;
                case "yy":
                    r = "%d \u0935\u0930\u094D\u0937\u093E\u0902";
            }
        return r.replace(/%d/i, e);
    }
    e.defineLocale("mr", {
        months: "\u091C\u093E\u0928\u0947\u0935\u093E\u0930\u0940_\u092B\u0947\u092C\u094D\u0930\u0941\u0935\u093E\u0930\u0940_\u092E\u093E\u0930\u094D\u091A_\u090F\u092A\u094D\u0930\u093F\u0932_\u092E\u0947_\u091C\u0942\u0928_\u091C\u0941\u0932\u0948_\u0911\u0917\u0938\u094D\u091F_\u0938\u092A\u094D\u091F\u0947\u0902\u092C\u0930_\u0911\u0915\u094D\u091F\u094B\u092C\u0930_\u0928\u094B\u0935\u094D\u0939\u0947\u0902\u092C\u0930_\u0921\u093F\u0938\u0947\u0902\u092C\u0930".split(
            "_",
        ),
        monthsShort:
            "\u091C\u093E\u0928\u0947._\u092B\u0947\u092C\u094D\u0930\u0941._\u092E\u093E\u0930\u094D\u091A._\u090F\u092A\u094D\u0930\u093F._\u092E\u0947._\u091C\u0942\u0928._\u091C\u0941\u0932\u0948._\u0911\u0917._\u0938\u092A\u094D\u091F\u0947\u0902._\u0911\u0915\u094D\u091F\u094B._\u0928\u094B\u0935\u094D\u0939\u0947\u0902._\u0921\u093F\u0938\u0947\u0902.".split(
                "_",
            ),
        monthsParseExact: !0,
        weekdays:
            "\u0930\u0935\u093F\u0935\u093E\u0930_\u0938\u094B\u092E\u0935\u093E\u0930_\u092E\u0902\u0917\u0933\u0935\u093E\u0930_\u092C\u0941\u0927\u0935\u093E\u0930_\u0917\u0941\u0930\u0942\u0935\u093E\u0930_\u0936\u0941\u0915\u094D\u0930\u0935\u093E\u0930_\u0936\u0928\u093F\u0935\u093E\u0930".split(
                "_",
            ),
        weekdaysShort:
            "\u0930\u0935\u093F_\u0938\u094B\u092E_\u092E\u0902\u0917\u0933_\u092C\u0941\u0927_\u0917\u0941\u0930\u0942_\u0936\u0941\u0915\u094D\u0930_\u0936\u0928\u093F".split(
                "_",
            ),
        weekdaysMin: "\u0930_\u0938\u094B_\u092E\u0902_\u092C\u0941_\u0917\u0941_\u0936\u0941_\u0936".split("_"),
        longDateFormat: {
            LT: "A h:mm \u0935\u093E\u091C\u0924\u093E",
            LTS: "A h:mm:ss \u0935\u093E\u091C\u0924\u093E",
            L: "DD/MM/YYYY",
            LL: "D MMMM YYYY",
            LLL: "D MMMM YYYY, A h:mm \u0935\u093E\u091C\u0924\u093E",
            LLLL: "dddd, D MMMM YYYY, A h:mm \u0935\u093E\u091C\u0924\u093E",
        },
        calendar: {
            sameDay: "[\u0906\u091C] LT",
            nextDay: "[\u0909\u0926\u094D\u092F\u093E] LT",
            nextWeek: "dddd, LT",
            lastDay: "[\u0915\u093E\u0932] LT",
            lastWeek: "[\u092E\u093E\u0917\u0940\u0932] dddd, LT",
            sameElse: "L",
        },
        relativeTime: {
            future: "%s\u092E\u0927\u094D\u092F\u0947",
            past: "%s\u092A\u0942\u0930\u094D\u0935\u0940",
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
            /\u0930\u093e\u0924\u094d\u0930\u0940|\u0938\u0915\u093e\u0933\u0940|\u0926\u0941\u092a\u093e\u0930\u0940|\u0938\u093e\u092f\u0902\u0915\u093e\u0933\u0940/,
        meridiemHour: function (e, t) {
            return (12 === e && (e = 0), "\u0930\u093E\u0924\u094D\u0930\u0940" === t)
                ? e < 4
                    ? e
                    : e + 12
                : "\u0938\u0915\u093E\u0933\u0940" === t
                  ? e
                  : "\u0926\u0941\u092A\u093E\u0930\u0940" === t
                    ? e >= 10
                        ? e
                        : e + 12
                    : "\u0938\u093E\u092F\u0902\u0915\u093E\u0933\u0940" === t
                      ? e + 12
                      : void 0;
        },
        meridiem: function (e, t, n) {
            return e < 4
                ? "\u0930\u093E\u0924\u094D\u0930\u0940"
                : e < 10
                  ? "\u0938\u0915\u093E\u0933\u0940"
                  : e < 17
                    ? "\u0926\u0941\u092A\u093E\u0930\u0940"
                    : e < 20
                      ? "\u0938\u093E\u092F\u0902\u0915\u093E\u0933\u0940"
                      : "\u0930\u093E\u0924\u094D\u0930\u0940";
        },
        week: { dow: 0, doy: 6 },
    });
})(n(989349));
