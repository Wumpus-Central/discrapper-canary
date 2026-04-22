!(function (e) {
    "use strict";
    function t(e, t, n) {
        var r, i, s;
        return "m" === n
            ? t
                ? "хвилина"
                : "хвилину"
            : "h" === n
              ? t
                  ? "година"
                  : "годину"
              : e +
                " " +
                ((r = {
                    ss: t ? "секунда_секунди_секунд" : "секунду_секунди_секунд",
                    mm: t ? "хвилина_хвилини_хвилин" : "хвилину_хвилини_хвилин",
                    hh: t ? "година_години_годин" : "годину_години_годин",
                    dd: "день_дні_днів",
                    MM: "місяць_місяці_місяців",
                    yy: "рік_роки_років",
                }[n]),
                (i = +e),
                (s = r.split("_")),
                i % 10 == 1 && i % 100 != 11
                    ? s[0]
                    : i % 10 >= 2 && i % 10 <= 4 && (i % 100 < 10 || i % 100 >= 20)
                      ? s[1]
                      : s[2]);
    }
    function n(e) {
        return function () {
            return e + "о" + (11 === this.hours() ? "б" : "") + "] LT";
        };
    }
    e.defineLocale("uk", {
        months: {
            format: "січня_лютого_березня_квітня_травня_червня_липня_серпня_вересня_жовтня_листопада_грудня".split("_"),
            standalone:
                "січень_лютий_березень_квітень_травень_червень_липень_серпень_вересень_жовтень_листопад_грудень".split(
                    "_",
                ),
        },
        monthsShort: "січ_лют_бер_квіт_трав_черв_лип_серп_вер_жовт_лист_груд".split("_"),
        weekdays: function (e, t) {
            var n = {
                nominative: "неділя_понеділок_вівторок_середа_четвер_п’ятниця_субота".split("_"),
                accusative: "неділю_понеділок_вівторок_середу_четвер_п’ятницю_суботу".split("_"),
                genitive: "неділі_понеділка_вівторка_середи_четверга_п’ятниці_суботи".split("_"),
            };
            return e
                ? n[
                      /(\[[ВвУу]\]) ?dddd/.test(t)
                          ? "accusative"
                          : /\[?(?:минулої|наступної)? ?\] ?dddd/.test(t)
                            ? "genitive"
                            : "nominative"
                  ][e.day()]
                : n.nominative;
        },
        weekdaysShort: "нд_пн_вт_ср_чт_пт_сб".split("_"),
        weekdaysMin: "нд_пн_вт_ср_чт_пт_сб".split("_"),
        longDateFormat: {
            LT: "HH:mm",
            LTS: "HH:mm:ss",
            L: "DD.MM.YYYY",
            LL: "D MMMM YYYY р.",
            LLL: "D MMMM YYYY р., HH:mm",
            LLLL: "dddd, D MMMM YYYY р., HH:mm",
        },
        calendar: {
            sameDay: n("[Сьогодні "),
            nextDay: n("[Завтра "),
            lastDay: n("[Вчора "),
            nextWeek: n("[У] dddd ["),
            lastWeek: function () {
                switch (this.day()) {
                    case 0:
                    case 3:
                    case 5:
                    case 6:
                        return n("[Минулої] dddd [").call(this);
                    case 1:
                    case 2:
                    case 4:
                        return n("[Минулого] dddd [").call(this);
                }
            },
            sameElse: "L",
        },
        relativeTime: {
            future: "за %s",
            past: "%s тому",
            s: "декілька секунд",
            ss: t,
            m: t,
            mm: t,
            h: "годину",
            hh: t,
            d: "день",
            dd: t,
            M: "місяць",
            MM: t,
            y: "рік",
            yy: t,
        },
        meridiemParse: /ночі|ранку|дня|вечора/,
        isPM: function (e) {
            return /^(дня|вечора)$/.test(e);
        },
        meridiem: function (e, t, n) {
            return e < 4 ? "ночі" : e < 12 ? "ранку" : e < 17 ? "дня" : "вечора";
        },
        dayOfMonthOrdinalParse: /\d{1,2}-(й|го)/,
        ordinal: function (e, t) {
            switch (t) {
                case "M":
                case "d":
                case "DDD":
                case "w":
                case "W":
                    return e + "-й";
                case "D":
                    return e + "-го";
                default:
                    return e;
            }
        },
        week: { dow: 1, doy: 7 },
    });
})(n(989349));
