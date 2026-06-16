n(989349).defineLocale("zh-tw", {
    months: "\u4E00\u6708_\u4E8C\u6708_\u4E09\u6708_\u56DB\u6708_\u4E94\u6708_\u516D\u6708_\u4E03\u6708_\u516B\u6708_\u4E5D\u6708_\u5341\u6708_\u5341\u4E00\u6708_\u5341\u4E8C\u6708".split(
        "_",
    ),
    monthsShort:
        "1\u6708_2\u6708_3\u6708_4\u6708_5\u6708_6\u6708_7\u6708_8\u6708_9\u6708_10\u6708_11\u6708_12\u6708".split("_"),
    weekdays:
        "\u661F\u671F\u65E5_\u661F\u671F\u4E00_\u661F\u671F\u4E8C_\u661F\u671F\u4E09_\u661F\u671F\u56DB_\u661F\u671F\u4E94_\u661F\u671F\u516D".split(
            "_",
        ),
    weekdaysShort: "\u9031\u65E5_\u9031\u4E00_\u9031\u4E8C_\u9031\u4E09_\u9031\u56DB_\u9031\u4E94_\u9031\u516D".split(
        "_",
    ),
    weekdaysMin: "\u65E5_\u4E00_\u4E8C_\u4E09_\u56DB_\u4E94_\u516D".split("_"),
    longDateFormat: {
        LT: "HH:mm",
        LTS: "HH:mm:ss",
        L: "YYYY/MM/DD",
        LL: "YYYY\u5E74M\u6708D\u65E5",
        LLL: "YYYY\u5E74M\u6708D\u65E5 HH:mm",
        LLLL: "YYYY\u5E74M\u6708D\u65E5dddd HH:mm",
        l: "YYYY/M/D",
        ll: "YYYY\u5E74M\u6708D\u65E5",
        lll: "YYYY\u5E74M\u6708D\u65E5 HH:mm",
        llll: "YYYY\u5E74M\u6708D\u65E5dddd HH:mm",
    },
    meridiemParse: /\u51cc\u6668|\u65e9\u4e0a|\u4e0a\u5348|\u4e2d\u5348|\u4e0b\u5348|\u665a\u4e0a/,
    meridiemHour: function (e, t) {
        return (12 === e && (e = 0), "\u51CC\u6668" === t || "\u65E9\u4E0A" === t || "\u4E0A\u5348" === t)
            ? e
            : "\u4E2D\u5348" === t
              ? e >= 11
                  ? e
                  : e + 12
              : "\u4E0B\u5348" === t || "\u665A\u4E0A" === t
                ? e + 12
                : void 0;
    },
    meridiem: function (e, t, n) {
        var i = 100 * e + t;
        if (i < 600) return "\u51CC\u6668";
        if (i < 900) return "\u65E9\u4E0A";
        if (i < 1130) return "\u4E0A\u5348";
        if (i < 1230) return "\u4E2D\u5348";
        if (i < 1800) return "\u4E0B\u5348";
        else return "\u665A\u4E0A";
    },
    calendar: {
        sameDay: "[\u4ECA\u5929] LT",
        nextDay: "[\u660E\u5929] LT",
        nextWeek: "[\u4E0B]dddd LT",
        lastDay: "[\u6628\u5929] LT",
        lastWeek: "[\u4E0A]dddd LT",
        sameElse: "L",
    },
    dayOfMonthOrdinalParse: /\d{1,2}(\u65e5|\u6708|\u9031)/,
    ordinal: function (e, t) {
        switch (t) {
            case "d":
            case "D":
            case "DDD":
                return e + "\u65E5";
            case "M":
                return e + "\u6708";
            case "w":
            case "W":
                return e + "\u9031";
            default:
                return e;
        }
    },
    relativeTime: {
        future: "%s\u5167",
        past: "%s\u524D",
        s: "\u5E7E\u79D2",
        ss: "%d \u79D2",
        m: "1 \u5206\u9418",
        mm: "%d \u5206\u9418",
        h: "1 \u5C0F\u6642",
        hh: "%d \u5C0F\u6642",
        d: "1 \u5929",
        dd: "%d \u5929",
        M: "1 \u500B\u6708",
        MM: "%d \u500B\u6708",
        y: "1 \u5E74",
        yy: "%d \u5E74",
    },
});
