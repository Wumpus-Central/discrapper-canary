t.d(a, { A: () => n });
var i = t(981737);
let n = {
    ordinalNumber: function (e, a) {
        var t = Number(e);
        return (null == a ? void 0 : a.unit) === "week" ? t + "\xaa" : t + "\xba";
    },
    era: (0, i.A)({
        values: { narrow: ["AC", "DC"], abbreviated: ["AC", "DC"], wide: ["antes de cristo", "depois de cristo"] },
        defaultWidth: "wide",
    }),
    quarter: (0, i.A)({
        values: {
            narrow: ["1", "2", "3", "4"],
            abbreviated: ["T1", "T2", "T3", "T4"],
            wide: ["1\xba trimestre", "2\xba trimestre", "3\xba trimestre", "4\xba trimestre"],
        },
        defaultWidth: "wide",
        argumentCallback: function (e) {
            return e - 1;
        },
    }),
    month: (0, i.A)({
        values: {
            narrow: ["j", "f", "m", "a", "m", "j", "j", "a", "s", "o", "n", "d"],
            abbreviated: ["jan", "fev", "mar", "abr", "mai", "jun", "jul", "ago", "set", "out", "nov", "dez"],
            wide: [
                "janeiro",
                "fevereiro",
                "mar\xe7o",
                "abril",
                "maio",
                "junho",
                "julho",
                "agosto",
                "setembro",
                "outubro",
                "novembro",
                "dezembro",
            ],
        },
        defaultWidth: "wide",
    }),
    day: (0, i.A)({
        values: {
            narrow: ["D", "S", "T", "Q", "Q", "S", "S"],
            short: ["dom", "seg", "ter", "qua", "qui", "sex", "sab"],
            abbreviated: ["domingo", "segunda", "ter\xe7a", "quarta", "quinta", "sexta", "s\xe1bado"],
            wide: [
                "domingo",
                "segunda-feira",
                "ter\xe7a-feira",
                "quarta-feira",
                "quinta-feira",
                "sexta-feira",
                "s\xe1bado",
            ],
        },
        defaultWidth: "wide",
    }),
    dayPeriod: (0, i.A)({
        values: {
            narrow: {
                am: "a",
                pm: "p",
                midnight: "mn",
                noon: "md",
                morning: "manh\xe3",
                afternoon: "tarde",
                evening: "tarde",
                night: "noite",
            },
            abbreviated: {
                am: "AM",
                pm: "PM",
                midnight: "meia-noite",
                noon: "meio-dia",
                morning: "manh\xe3",
                afternoon: "tarde",
                evening: "tarde",
                night: "noite",
            },
            wide: {
                am: "a.m.",
                pm: "p.m.",
                midnight: "meia-noite",
                noon: "meio-dia",
                morning: "manh\xe3",
                afternoon: "tarde",
                evening: "tarde",
                night: "noite",
            },
        },
        defaultWidth: "wide",
        formattingValues: {
            narrow: {
                am: "a",
                pm: "p",
                midnight: "mn",
                noon: "md",
                morning: "da manh\xe3",
                afternoon: "da tarde",
                evening: "da tarde",
                night: "da noite",
            },
            abbreviated: {
                am: "AM",
                pm: "PM",
                midnight: "meia-noite",
                noon: "meio-dia",
                morning: "da manh\xe3",
                afternoon: "da tarde",
                evening: "da tarde",
                night: "da noite",
            },
            wide: {
                am: "a.m.",
                pm: "p.m.",
                midnight: "meia-noite",
                noon: "meio-dia",
                morning: "da manh\xe3",
                afternoon: "da tarde",
                evening: "da tarde",
                night: "da noite",
            },
        },
        defaultFormattingWidth: "wide",
    }),
};
