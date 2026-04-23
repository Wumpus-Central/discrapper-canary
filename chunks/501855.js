a.d(t, { A: () => i });
var r = a(981737);
function n(e, t, a, r, n) {
    return e + "-" + ("quarter" === t ? n : "year" === t || "week" === t || "minute" === t || "second" === t ? r : a);
}
let i = {
    ordinalNumber: function (e, t) {
        var a = Number(e),
            r = null == t ? void 0 : t.unit;
        if (0 === a) return n(0, r, "ев", "ева", "ево");
        if (a % 1e3 == 0) return n(a, r, "ен", "на", "но");
        if (a % 100 == 0) return n(a, r, "тен", "тна", "тно");
        var i = a % 100;
        if (i > 20 || i < 10)
            switch (i % 10) {
                case 1:
                    return n(a, r, "ви", "ва", "во");
                case 2:
                    return n(a, r, "ри", "ра", "ро");
                case 7:
                case 8:
                    return n(a, r, "ми", "ма", "мо");
            }
        return n(a, r, "ти", "та", "то");
    },
    era: (0, r.A)({
        values: {
            narrow: ["пр.н.е.", "н.е."],
            abbreviated: ["преди н. е.", "н. е."],
            wide: ["преди новата ера", "новата ера"],
        },
        defaultWidth: "wide",
    }),
    quarter: (0, r.A)({
        values: {
            narrow: ["1", "2", "3", "4"],
            abbreviated: ["1-во тримес.", "2-ро тримес.", "3-то тримес.", "4-то тримес."],
            wide: ["1-во тримесечие", "2-ро тримесечие", "3-то тримесечие", "4-то тримесечие"],
        },
        defaultWidth: "wide",
        argumentCallback: function (e) {
            return e - 1;
        },
    }),
    month: (0, r.A)({
        values: {
            abbreviated: ["яну", "фев", "мар", "апр", "май", "юни", "юли", "авг", "сеп", "окт", "ное", "дек"],
            wide: [
                "януари",
                "февруари",
                "март",
                "април",
                "май",
                "юни",
                "юли",
                "август",
                "септември",
                "октомври",
                "ноември",
                "декември",
            ],
        },
        defaultWidth: "wide",
    }),
    day: (0, r.A)({
        values: {
            narrow: ["Н", "П", "В", "С", "Ч", "П", "С"],
            short: ["нд", "пн", "вт", "ср", "чт", "пт", "сб"],
            abbreviated: ["нед", "пон", "вто", "сря", "чет", "пет", "съб"],
            wide: ["неделя", "понеделник", "вторник", "сряда", "четвъртък", "петък", "събота"],
        },
        defaultWidth: "wide",
    }),
    dayPeriod: (0, r.A)({
        values: {
            wide: {
                am: "преди обяд",
                pm: "след обяд",
                midnight: "в полунощ",
                noon: "на обяд",
                morning: "сутринта",
                afternoon: "следобед",
                evening: "вечерта",
                night: "през нощта",
            },
        },
        defaultWidth: "wide",
    }),
};
