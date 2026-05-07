!(function (e) {
    "use strict";
    var t = {
            1: "\u17E1",
            2: "\u17E2",
            3: "\u17E3",
            4: "\u17E4",
            5: "\u17E5",
            6: "\u17E6",
            7: "\u17E7",
            8: "\u17E8",
            9: "\u17E9",
            0: "\u17E0",
        },
        n = {
            "\u17E1": "1",
            "\u17E2": "2",
            "\u17E3": "3",
            "\u17E4": "4",
            "\u17E5": "5",
            "\u17E6": "6",
            "\u17E7": "7",
            "\u17E8": "8",
            "\u17E9": "9",
            "\u17E0": "0",
        };
    e.defineLocale("km", {
        months: "\u1798\u1780\u179A\u17B6_\u1780\u17BB\u1798\u17D2\u1797\u17C8_\u1798\u17B8\u1793\u17B6_\u1798\u17C1\u179F\u17B6_\u17A7\u179F\u1797\u17B6_\u1798\u17B7\u1790\u17BB\u1793\u17B6_\u1780\u1780\u17D2\u1780\u178A\u17B6_\u179F\u17B8\u17A0\u17B6_\u1780\u1789\u17D2\u1789\u17B6_\u178F\u17BB\u179B\u17B6_\u179C\u17B7\u1785\u17D2\u1786\u17B7\u1780\u17B6_\u1792\u17D2\u1793\u17BC".split(
            "_",
        ),
        monthsShort:
            "\u1798\u1780\u179A\u17B6_\u1780\u17BB\u1798\u17D2\u1797\u17C8_\u1798\u17B8\u1793\u17B6_\u1798\u17C1\u179F\u17B6_\u17A7\u179F\u1797\u17B6_\u1798\u17B7\u1790\u17BB\u1793\u17B6_\u1780\u1780\u17D2\u1780\u178A\u17B6_\u179F\u17B8\u17A0\u17B6_\u1780\u1789\u17D2\u1789\u17B6_\u178F\u17BB\u179B\u17B6_\u179C\u17B7\u1785\u17D2\u1786\u17B7\u1780\u17B6_\u1792\u17D2\u1793\u17BC".split(
                "_",
            ),
        weekdays:
            "\u17A2\u17B6\u1791\u17B7\u178F\u17D2\u1799_\u1785\u17D0\u1793\u17D2\u1791_\u17A2\u1784\u17D2\u1782\u17B6\u179A_\u1796\u17BB\u1792_\u1796\u17D2\u179A\u17A0\u179F\u17D2\u1794\u178F\u17B7\u17CD_\u179F\u17BB\u1780\u17D2\u179A_\u179F\u17C5\u179A\u17CD".split(
                "_",
            ),
        weekdaysShort: "\u17A2\u17B6_\u1785_\u17A2_\u1796_\u1796\u17D2\u179A_\u179F\u17BB_\u179F".split("_"),
        weekdaysMin: "\u17A2\u17B6_\u1785_\u17A2_\u1796_\u1796\u17D2\u179A_\u179F\u17BB_\u179F".split("_"),
        weekdaysParseExact: !0,
        longDateFormat: {
            LT: "HH:mm",
            LTS: "HH:mm:ss",
            L: "DD/MM/YYYY",
            LL: "D MMMM YYYY",
            LLL: "D MMMM YYYY HH:mm",
            LLLL: "dddd, D MMMM YYYY HH:mm",
        },
        meridiemParse: /\u1796\u17d2\u179a\u17b9\u1780|\u179b\u17d2\u1784\u17b6\u1785/,
        isPM: function (e) {
            return "\u179B\u17D2\u1784\u17B6\u1785" === e;
        },
        meridiem: function (e, t, n) {
            return e < 12 ? "\u1796\u17D2\u179A\u17B9\u1780" : "\u179B\u17D2\u1784\u17B6\u1785";
        },
        calendar: {
            sameDay: "[\u1790\u17D2\u1784\u17C3\u1793\u17C1\u17C7 \u1798\u17C9\u17C4\u1784] LT",
            nextDay: "[\u179F\u17D2\u17A2\u17C2\u1780 \u1798\u17C9\u17C4\u1784] LT",
            nextWeek: "dddd [\u1798\u17C9\u17C4\u1784] LT",
            lastDay: "[\u1798\u17D2\u179F\u17B7\u179B\u1798\u17B7\u1789 \u1798\u17C9\u17C4\u1784] LT",
            lastWeek:
                "dddd [\u179F\u1794\u17D2\u178F\u17B6\u17A0\u17CD\u1798\u17BB\u1793] [\u1798\u17C9\u17C4\u1784] LT",
            sameElse: "L",
        },
        relativeTime: {
            future: "%s\u1791\u17C0\u178F",
            past: "%s\u1798\u17BB\u1793",
            s: "\u1794\u17C9\u17BB\u1793\u17D2\u1798\u17B6\u1793\u179C\u17B7\u1793\u17B6\u1791\u17B8",
            ss: "%d \u179C\u17B7\u1793\u17B6\u1791\u17B8",
            m: "\u1798\u17BD\u1799\u1793\u17B6\u1791\u17B8",
            mm: "%d \u1793\u17B6\u1791\u17B8",
            h: "\u1798\u17BD\u1799\u1798\u17C9\u17C4\u1784",
            hh: "%d \u1798\u17C9\u17C4\u1784",
            d: "\u1798\u17BD\u1799\u1790\u17D2\u1784\u17C3",
            dd: "%d \u1790\u17D2\u1784\u17C3",
            M: "\u1798\u17BD\u1799\u1781\u17C2",
            MM: "%d \u1781\u17C2",
            y: "\u1798\u17BD\u1799\u1786\u17D2\u1793\u17B6\u17C6",
            yy: "%d \u1786\u17D2\u1793\u17B6\u17C6",
        },
        dayOfMonthOrdinalParse: /\u1791\u17b8\d{1,2}/,
        ordinal: "\u1791\u17B8%d",
        preparse: function (e) {
            return e.replace(/[\u17e1\u17e2\u17e3\u17e4\u17e5\u17e6\u17e7\u17e8\u17e9\u17e0]/g, function (e) {
                return n[e];
            });
        },
        postformat: function (e) {
            return e.replace(/\d/g, function (e) {
                return t[e];
            });
        },
        week: { dow: 1, doy: 4 },
    });
})(n(989349));
