a.d(t, { A: () => r });
var n = a(981737);
let r = {
    ordinalNumber: function (e, t) {
        return Number(e) + ".";
    },
    era: (0, n.A)({
        values: {
            narrow: ["f.Kr.", "e.Kr."],
            abbreviated: ["f.Kr.", "e.Kr."],
            wide: ["f\xf8r Kristus", "etter Kristus"],
        },
        defaultWidth: "wide",
    }),
    quarter: (0, n.A)({
        values: {
            narrow: ["1", "2", "3", "4"],
            abbreviated: ["Q1", "Q2", "Q3", "Q4"],
            wide: ["1. kvartal", "2. kvartal", "3. kvartal", "4. kvartal"],
        },
        defaultWidth: "wide",
        argumentCallback: function (e) {
            return e - 1;
        },
    }),
    month: (0, n.A)({
        values: {
            narrow: ["J", "F", "M", "A", "M", "J", "J", "A", "S", "O", "N", "D"],
            abbreviated: [
                "jan.",
                "feb.",
                "mars",
                "apr.",
                "mai",
                "juni",
                "juli",
                "aug.",
                "sep.",
                "okt.",
                "nov.",
                "des.",
            ],
            wide: [
                "januar",
                "februar",
                "mars",
                "april",
                "mai",
                "juni",
                "juli",
                "august",
                "september",
                "oktober",
                "november",
                "desember",
            ],
        },
        defaultWidth: "wide",
    }),
    day: (0, n.A)({
        values: {
            narrow: ["S", "M", "T", "O", "T", "F", "L"],
            short: ["s\xf8", "ma", "ti", "on", "to", "fr", "l\xf8"],
            abbreviated: ["s\xf8n", "man", "tir", "ons", "tor", "fre", "l\xf8r"],
            wide: ["s\xf8ndag", "mandag", "tirsdag", "onsdag", "torsdag", "fredag", "l\xf8rdag"],
        },
        defaultWidth: "wide",
    }),
    dayPeriod: (0, n.A)({
        values: {
            narrow: {
                am: "a",
                pm: "p",
                midnight: "midnatt",
                noon: "middag",
                morning: "p\xe5 morg.",
                afternoon: "p\xe5 etterm.",
                evening: "p\xe5 kvelden",
                night: "p\xe5 natten",
            },
            abbreviated: {
                am: "a.m.",
                pm: "p.m.",
                midnight: "midnatt",
                noon: "middag",
                morning: "p\xe5 morg.",
                afternoon: "p\xe5 etterm.",
                evening: "p\xe5 kvelden",
                night: "p\xe5 natten",
            },
            wide: {
                am: "a.m.",
                pm: "p.m.",
                midnight: "midnatt",
                noon: "middag",
                morning: "p\xe5 morgenen",
                afternoon: "p\xe5 ettermiddagen",
                evening: "p\xe5 kvelden",
                night: "p\xe5 natten",
            },
        },
        defaultWidth: "wide",
    }),
};
