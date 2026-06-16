n(989349).defineLocale("mk", {
    months: "\u0458\u0430\u043D\u0443\u0430\u0440\u0438_\u0444\u0435\u0432\u0440\u0443\u0430\u0440\u0438_\u043C\u0430\u0440\u0442_\u0430\u043F\u0440\u0438\u043B_\u043C\u0430\u0458_\u0458\u0443\u043D\u0438_\u0458\u0443\u043B\u0438_\u0430\u0432\u0433\u0443\u0441\u0442_\u0441\u0435\u043F\u0442\u0435\u043C\u0432\u0440\u0438_\u043E\u043A\u0442\u043E\u043C\u0432\u0440\u0438_\u043D\u043E\u0435\u043C\u0432\u0440\u0438_\u0434\u0435\u043A\u0435\u043C\u0432\u0440\u0438".split(
        "_",
    ),
    monthsShort:
        "\u0458\u0430\u043D_\u0444\u0435\u0432_\u043C\u0430\u0440_\u0430\u043F\u0440_\u043C\u0430\u0458_\u0458\u0443\u043D_\u0458\u0443\u043B_\u0430\u0432\u0433_\u0441\u0435\u043F_\u043E\u043A\u0442_\u043D\u043E\u0435_\u0434\u0435\u043A".split(
            "_",
        ),
    weekdays:
        "\u043D\u0435\u0434\u0435\u043B\u0430_\u043F\u043E\u043D\u0435\u0434\u0435\u043B\u043D\u0438\u043A_\u0432\u0442\u043E\u0440\u043D\u0438\u043A_\u0441\u0440\u0435\u0434\u0430_\u0447\u0435\u0442\u0432\u0440\u0442\u043E\u043A_\u043F\u0435\u0442\u043E\u043A_\u0441\u0430\u0431\u043E\u0442\u0430".split(
            "_",
        ),
    weekdaysShort:
        "\u043D\u0435\u0434_\u043F\u043E\u043D_\u0432\u0442\u043E_\u0441\u0440\u0435_\u0447\u0435\u0442_\u043F\u0435\u0442_\u0441\u0430\u0431".split(
            "_",
        ),
    weekdaysMin: "\u043De_\u043Fo_\u0432\u0442_\u0441\u0440_\u0447\u0435_\u043F\u0435_\u0441a".split("_"),
    longDateFormat: {
        LT: "H:mm",
        LTS: "H:mm:ss",
        L: "D.MM.YYYY",
        LL: "D MMMM YYYY",
        LLL: "D MMMM YYYY H:mm",
        LLLL: "dddd, D MMMM YYYY H:mm",
    },
    calendar: {
        sameDay: "[\u0414\u0435\u043D\u0435\u0441 \u0432\u043E] LT",
        nextDay: "[\u0423\u0442\u0440\u0435 \u0432\u043E] LT",
        nextWeek: "[\u0412\u043E] dddd [\u0432\u043E] LT",
        lastDay: "[\u0412\u0447\u0435\u0440\u0430 \u0432\u043E] LT",
        lastWeek: function () {
            switch (this.day()) {
                case 0:
                case 3:
                case 6:
                    return "[\u0418\u0437\u043C\u0438\u043D\u0430\u0442\u0430\u0442\u0430] dddd [\u0432\u043E] LT";
                case 1:
                case 2:
                case 4:
                case 5:
                    return "[\u0418\u0437\u043C\u0438\u043D\u0430\u0442\u0438\u043E\u0442] dddd [\u0432\u043E] LT";
            }
        },
        sameElse: "L",
    },
    relativeTime: {
        future: "\u043F\u043E\u0441\u043B\u0435 %s",
        past: "\u043F\u0440\u0435\u0434 %s",
        s: "\u043D\u0435\u043A\u043E\u043B\u043A\u0443 \u0441\u0435\u043A\u0443\u043D\u0434\u0438",
        ss: "%d \u0441\u0435\u043A\u0443\u043D\u0434\u0438",
        m: "\u043C\u0438\u043D\u0443\u0442\u0430",
        mm: "%d \u043C\u0438\u043D\u0443\u0442\u0438",
        h: "\u0447\u0430\u0441",
        hh: "%d \u0447\u0430\u0441\u0430",
        d: "\u0434\u0435\u043D",
        dd: "%d \u0434\u0435\u043D\u0430",
        M: "\u043C\u0435\u0441\u0435\u0446",
        MM: "%d \u043C\u0435\u0441\u0435\u0446\u0438",
        y: "\u0433\u043E\u0434\u0438\u043D\u0430",
        yy: "%d \u0433\u043E\u0434\u0438\u043D\u0438",
    },
    dayOfMonthOrdinalParse: /\d{1,2}-(\u0435\u0432|\u0435\u043d|\u0442\u0438|\u0432\u0438|\u0440\u0438|\u043c\u0438)/,
    ordinal: function (e) {
        var t = e % 10,
            n = e % 100;
        if (0 === e) return e + "-\u0435\u0432";
        if (0 === n) return e + "-\u0435\u043D";
        if (n > 10 && n < 20) return e + "-\u0442\u0438";
        if (1 === t) return e + "-\u0432\u0438";
        if (2 === t) return e + "-\u0440\u0438";
        else if (7 === t || 8 === t) return e + "-\u043C\u0438";
        else return e + "-\u0442\u0438";
    },
    week: { dow: 1, doy: 7 },
});
