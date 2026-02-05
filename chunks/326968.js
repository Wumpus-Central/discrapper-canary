t.d(a, { A: () => o });
var n = t(981737);
let o = {
    ordinalNumber: function (e, a) {
        return Number(e) + "\xba";
    },
    era: (0, n.A)({
        values: { narrow: ["AC", "DC"], abbreviated: ["AC", "DC"], wide: ["antes de cristo", "despu\xe9s de cristo"] },
        defaultWidth: "wide",
    }),
    quarter: (0, n.A)({
        values: {
            narrow: ["1", "2", "3", "4"],
            abbreviated: ["T1", "T2", "T3", "T4"],
            wide: ["1\xba trimestre", "2\xba trimestre", "3\xba trimestre", "4\xba trimestre"],
        },
        defaultWidth: "wide",
        argumentCallback: function (e) {
            return Number(e) - 1;
        },
    }),
    month: (0, n.A)({
        values: {
            narrow: ["e", "f", "m", "a", "m", "j", "j", "a", "s", "o", "n", "d"],
            abbreviated: ["ene", "feb", "mar", "abr", "may", "jun", "jul", "ago", "sep", "oct", "nov", "dic"],
            wide: [
                "enero",
                "febrero",
                "marzo",
                "abril",
                "mayo",
                "junio",
                "julio",
                "agosto",
                "septiembre",
                "octubre",
                "noviembre",
                "diciembre",
            ],
        },
        defaultWidth: "wide",
    }),
    day: (0, n.A)({
        values: {
            narrow: ["d", "l", "m", "m", "j", "v", "s"],
            short: ["do", "lu", "ma", "mi", "ju", "vi", "s\xe1"],
            abbreviated: ["dom", "lun", "mar", "mi\xe9", "jue", "vie", "s\xe1b"],
            wide: ["domingo", "lunes", "martes", "mi\xe9rcoles", "jueves", "viernes", "s\xe1bado"],
        },
        defaultWidth: "wide",
    }),
    dayPeriod: (0, n.A)({
        values: {
            narrow: {
                am: "a",
                pm: "p",
                midnight: "mn",
                noon: "md",
                morning: "ma\xf1ana",
                afternoon: "tarde",
                evening: "tarde",
                night: "noche",
            },
            abbreviated: {
                am: "AM",
                pm: "PM",
                midnight: "medianoche",
                noon: "mediodia",
                morning: "ma\xf1ana",
                afternoon: "tarde",
                evening: "tarde",
                night: "noche",
            },
            wide: {
                am: "a.m.",
                pm: "p.m.",
                midnight: "medianoche",
                noon: "mediodia",
                morning: "ma\xf1ana",
                afternoon: "tarde",
                evening: "tarde",
                night: "noche",
            },
        },
        defaultWidth: "wide",
        formattingValues: {
            narrow: {
                am: "a",
                pm: "p",
                midnight: "mn",
                noon: "md",
                morning: "de la ma\xf1ana",
                afternoon: "de la tarde",
                evening: "de la tarde",
                night: "de la noche",
            },
            abbreviated: {
                am: "AM",
                pm: "PM",
                midnight: "medianoche",
                noon: "mediodia",
                morning: "de la ma\xf1ana",
                afternoon: "de la tarde",
                evening: "de la tarde",
                night: "de la noche",
            },
            wide: {
                am: "a.m.",
                pm: "p.m.",
                midnight: "medianoche",
                noon: "mediodia",
                morning: "de la ma\xf1ana",
                afternoon: "de la tarde",
                evening: "de la tarde",
                night: "de la noche",
            },
        },
        defaultFormattingWidth: "wide",
    }),
};
