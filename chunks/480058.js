!(function (e) {
    "use strict";
    function t(e, t, n) {
        var i, r, s;
        return "m" === n
            ? t
                ? "\u0445\u0432\u0438\u043B\u0438\u043D\u0430"
                : "\u0445\u0432\u0438\u043B\u0438\u043D\u0443"
            : "h" === n
              ? t
                  ? "\u0433\u043E\u0434\u0438\u043D\u0430"
                  : "\u0433\u043E\u0434\u0438\u043D\u0443"
              : e +
                " " +
                ((i = {
                    ss: t
                        ? "\u0441\u0435\u043A\u0443\u043D\u0434\u0430_\u0441\u0435\u043A\u0443\u043D\u0434\u0438_\u0441\u0435\u043A\u0443\u043D\u0434"
                        : "\u0441\u0435\u043A\u0443\u043D\u0434\u0443_\u0441\u0435\u043A\u0443\u043D\u0434\u0438_\u0441\u0435\u043A\u0443\u043D\u0434",
                    mm: t
                        ? "\u0445\u0432\u0438\u043B\u0438\u043D\u0430_\u0445\u0432\u0438\u043B\u0438\u043D\u0438_\u0445\u0432\u0438\u043B\u0438\u043D"
                        : "\u0445\u0432\u0438\u043B\u0438\u043D\u0443_\u0445\u0432\u0438\u043B\u0438\u043D\u0438_\u0445\u0432\u0438\u043B\u0438\u043D",
                    hh: t
                        ? "\u0433\u043E\u0434\u0438\u043D\u0430_\u0433\u043E\u0434\u0438\u043D\u0438_\u0433\u043E\u0434\u0438\u043D"
                        : "\u0433\u043E\u0434\u0438\u043D\u0443_\u0433\u043E\u0434\u0438\u043D\u0438_\u0433\u043E\u0434\u0438\u043D",
                    dd: "\u0434\u0435\u043D\u044C_\u0434\u043D\u0456_\u0434\u043D\u0456\u0432",
                    MM: "\u043C\u0456\u0441\u044F\u0446\u044C_\u043C\u0456\u0441\u044F\u0446\u0456_\u043C\u0456\u0441\u044F\u0446\u0456\u0432",
                    yy: "\u0440\u0456\u043A_\u0440\u043E\u043A\u0438_\u0440\u043E\u043A\u0456\u0432",
                }[n]),
                (r = +e),
                (s = i.split("_")),
                r % 10 == 1 && r % 100 != 11
                    ? s[0]
                    : r % 10 >= 2 && r % 10 <= 4 && (r % 100 < 10 || r % 100 >= 20)
                      ? s[1]
                      : s[2]);
    }
    function n(e) {
        return function () {
            return e + "\u043E" + (11 === this.hours() ? "\u0431" : "") + "] LT";
        };
    }
    e.defineLocale("uk", {
        months: {
            format: "\u0441\u0456\u0447\u043D\u044F_\u043B\u044E\u0442\u043E\u0433\u043E_\u0431\u0435\u0440\u0435\u0437\u043D\u044F_\u043A\u0432\u0456\u0442\u043D\u044F_\u0442\u0440\u0430\u0432\u043D\u044F_\u0447\u0435\u0440\u0432\u043D\u044F_\u043B\u0438\u043F\u043D\u044F_\u0441\u0435\u0440\u043F\u043D\u044F_\u0432\u0435\u0440\u0435\u0441\u043D\u044F_\u0436\u043E\u0432\u0442\u043D\u044F_\u043B\u0438\u0441\u0442\u043E\u043F\u0430\u0434\u0430_\u0433\u0440\u0443\u0434\u043D\u044F".split(
                "_",
            ),
            standalone:
                "\u0441\u0456\u0447\u0435\u043D\u044C_\u043B\u044E\u0442\u0438\u0439_\u0431\u0435\u0440\u0435\u0437\u0435\u043D\u044C_\u043A\u0432\u0456\u0442\u0435\u043D\u044C_\u0442\u0440\u0430\u0432\u0435\u043D\u044C_\u0447\u0435\u0440\u0432\u0435\u043D\u044C_\u043B\u0438\u043F\u0435\u043D\u044C_\u0441\u0435\u0440\u043F\u0435\u043D\u044C_\u0432\u0435\u0440\u0435\u0441\u0435\u043D\u044C_\u0436\u043E\u0432\u0442\u0435\u043D\u044C_\u043B\u0438\u0441\u0442\u043E\u043F\u0430\u0434_\u0433\u0440\u0443\u0434\u0435\u043D\u044C".split(
                    "_",
                ),
        },
        monthsShort:
            "\u0441\u0456\u0447_\u043B\u044E\u0442_\u0431\u0435\u0440_\u043A\u0432\u0456\u0442_\u0442\u0440\u0430\u0432_\u0447\u0435\u0440\u0432_\u043B\u0438\u043F_\u0441\u0435\u0440\u043F_\u0432\u0435\u0440_\u0436\u043E\u0432\u0442_\u043B\u0438\u0441\u0442_\u0433\u0440\u0443\u0434".split(
                "_",
            ),
        weekdays: function (e, t) {
            var n = {
                nominative:
                    "\u043D\u0435\u0434\u0456\u043B\u044F_\u043F\u043E\u043D\u0435\u0434\u0456\u043B\u043E\u043A_\u0432\u0456\u0432\u0442\u043E\u0440\u043E\u043A_\u0441\u0435\u0440\u0435\u0434\u0430_\u0447\u0435\u0442\u0432\u0435\u0440_\u043F\u2019\u044F\u0442\u043D\u0438\u0446\u044F_\u0441\u0443\u0431\u043E\u0442\u0430".split(
                        "_",
                    ),
                accusative:
                    "\u043D\u0435\u0434\u0456\u043B\u044E_\u043F\u043E\u043D\u0435\u0434\u0456\u043B\u043E\u043A_\u0432\u0456\u0432\u0442\u043E\u0440\u043E\u043A_\u0441\u0435\u0440\u0435\u0434\u0443_\u0447\u0435\u0442\u0432\u0435\u0440_\u043F\u2019\u044F\u0442\u043D\u0438\u0446\u044E_\u0441\u0443\u0431\u043E\u0442\u0443".split(
                        "_",
                    ),
                genitive:
                    "\u043D\u0435\u0434\u0456\u043B\u0456_\u043F\u043E\u043D\u0435\u0434\u0456\u043B\u043A\u0430_\u0432\u0456\u0432\u0442\u043E\u0440\u043A\u0430_\u0441\u0435\u0440\u0435\u0434\u0438_\u0447\u0435\u0442\u0432\u0435\u0440\u0433\u0430_\u043F\u2019\u044F\u0442\u043D\u0438\u0446\u0456_\u0441\u0443\u0431\u043E\u0442\u0438".split(
                        "_",
                    ),
            };
            return e
                ? n[
                      /(\[[\u0412\u0432\u0423\u0443]\]) ?dddd/.test(t)
                          ? "accusative"
                          : /\[?(?:\u043c\u0438\u043d\u0443\u043b\u043e\u0457|\u043d\u0430\u0441\u0442\u0443\u043f\u043d\u043e\u0457)? ?\] ?dddd/.test(
                                  t,
                              )
                            ? "genitive"
                            : "nominative"
                  ][e.day()]
                : n.nominative;
        },
        weekdaysShort:
            "\u043D\u0434_\u043F\u043D_\u0432\u0442_\u0441\u0440_\u0447\u0442_\u043F\u0442_\u0441\u0431".split("_"),
        weekdaysMin: "\u043D\u0434_\u043F\u043D_\u0432\u0442_\u0441\u0440_\u0447\u0442_\u043F\u0442_\u0441\u0431".split(
            "_",
        ),
        longDateFormat: {
            LT: "HH:mm",
            LTS: "HH:mm:ss",
            L: "DD.MM.YYYY",
            LL: "D MMMM YYYY \u0440.",
            LLL: "D MMMM YYYY \u0440., HH:mm",
            LLLL: "dddd, D MMMM YYYY \u0440., HH:mm",
        },
        calendar: {
            sameDay: n("[\u0421\u044C\u043E\u0433\u043E\u0434\u043D\u0456 "),
            nextDay: n("[\u0417\u0430\u0432\u0442\u0440\u0430 "),
            lastDay: n("[\u0412\u0447\u043E\u0440\u0430 "),
            nextWeek: n("[\u0423] dddd ["),
            lastWeek: function () {
                switch (this.day()) {
                    case 0:
                    case 3:
                    case 5:
                    case 6:
                        return n("[\u041C\u0438\u043D\u0443\u043B\u043E\u0457] dddd [").call(this);
                    case 1:
                    case 2:
                    case 4:
                        return n("[\u041C\u0438\u043D\u0443\u043B\u043E\u0433\u043E] dddd [").call(this);
                }
            },
            sameElse: "L",
        },
        relativeTime: {
            future: "\u0437\u0430 %s",
            past: "%s \u0442\u043E\u043C\u0443",
            s: "\u0434\u0435\u043A\u0456\u043B\u044C\u043A\u0430 \u0441\u0435\u043A\u0443\u043D\u0434",
            ss: t,
            m: t,
            mm: t,
            h: "\u0433\u043E\u0434\u0438\u043D\u0443",
            hh: t,
            d: "\u0434\u0435\u043D\u044C",
            dd: t,
            M: "\u043C\u0456\u0441\u044F\u0446\u044C",
            MM: t,
            y: "\u0440\u0456\u043A",
            yy: t,
        },
        meridiemParse:
            /\u043d\u043e\u0447\u0456|\u0440\u0430\u043d\u043a\u0443|\u0434\u043d\u044f|\u0432\u0435\u0447\u043e\u0440\u0430/,
        isPM: function (e) {
            return /^(\u0434\u043d\u044f|\u0432\u0435\u0447\u043e\u0440\u0430)$/.test(e);
        },
        meridiem: function (e, t, n) {
            return e < 4
                ? "\u043D\u043E\u0447\u0456"
                : e < 12
                  ? "\u0440\u0430\u043D\u043A\u0443"
                  : e < 17
                    ? "\u0434\u043D\u044F"
                    : "\u0432\u0435\u0447\u043E\u0440\u0430";
        },
        dayOfMonthOrdinalParse: /\d{1,2}-(\u0439|\u0433\u043e)/,
        ordinal: function (e, t) {
            switch (t) {
                case "M":
                case "d":
                case "DDD":
                case "w":
                case "W":
                    return e + "-\u0439";
                case "D":
                    return e + "-\u0433\u043E";
                default:
                    return e;
            }
        },
        week: { dow: 1, doy: 7 },
    });
})(n(989349));
