n.d(t, { A: () => r });
var a = n(981737);
let r = {
    ordinalNumber: function (e, t) {
        var n = Number(e),
            a = n % 100;
        if (a > 20 || a < 10)
            switch (a % 10) {
                case 1:
                case 2:
                    return n + ":a";
            }
        return n + ":e";
    },
    era: (0, a.A)({
        values: {
            narrow: ["f.Kr.", "e.Kr."],
            abbreviated: ["f.Kr.", "e.Kr."],
            wide: ["f\xf6re Kristus", "efter Kristus"],
        },
        defaultWidth: "wide",
    }),
    quarter: (0, a.A)({
        values: {
            narrow: ["1", "2", "3", "4"],
            abbreviated: ["Q1", "Q2", "Q3", "Q4"],
            wide: ["1:a kvartalet", "2:a kvartalet", "3:e kvartalet", "4:e kvartalet"],
        },
        defaultWidth: "wide",
        argumentCallback: function (e) {
            return e - 1;
        },
    }),
    month: (0, a.A)({
        values: {
            narrow: ["J", "F", "M", "A", "M", "J", "J", "A", "S", "O", "N", "D"],
            abbreviated: [
                "jan.",
                "feb.",
                "mars",
                "apr.",
                "maj",
                "juni",
                "juli",
                "aug.",
                "sep.",
                "okt.",
                "nov.",
                "dec.",
            ],
            wide: [
                "januari",
                "februari",
                "mars",
                "april",
                "maj",
                "juni",
                "juli",
                "augusti",
                "september",
                "oktober",
                "november",
                "december",
            ],
        },
        defaultWidth: "wide",
    }),
    day: (0, a.A)({
        values: {
            narrow: ["S", "M", "T", "O", "T", "F", "L"],
            short: ["s\xf6", "m\xe5", "ti", "on", "to", "fr", "l\xf6"],
            abbreviated: ["s\xf6n", "m\xe5n", "tis", "ons", "tors", "fre", "l\xf6r"],
            wide: ["s\xf6ndag", "m\xe5ndag", "tisdag", "onsdag", "torsdag", "fredag", "l\xf6rdag"],
        },
        defaultWidth: "wide",
    }),
    dayPeriod: (0, a.A)({
        values: {
            narrow: {
                am: "fm",
                pm: "em",
                midnight: "midnatt",
                noon: "middag",
                morning: "morg.",
                afternoon: "efterm.",
                evening: "kv\xe4ll",
                night: "natt",
            },
            abbreviated: {
                am: "f.m.",
                pm: "e.m.",
                midnight: "midnatt",
                noon: "middag",
                morning: "morgon",
                afternoon: "efterm.",
                evening: "kv\xe4ll",
                night: "natt",
            },
            wide: {
                am: "f\xf6rmiddag",
                pm: "eftermiddag",
                midnight: "midnatt",
                noon: "middag",
                morning: "morgon",
                afternoon: "eftermiddag",
                evening: "kv\xe4ll",
                night: "natt",
            },
        },
        defaultWidth: "wide",
        formattingValues: {
            narrow: {
                am: "fm",
                pm: "em",
                midnight: "midnatt",
                noon: "middag",
                morning: "p\xe5 morg.",
                afternoon: "p\xe5 efterm.",
                evening: "p\xe5 kv\xe4llen",
                night: "p\xe5 natten",
            },
            abbreviated: {
                am: "fm",
                pm: "em",
                midnight: "midnatt",
                noon: "middag",
                morning: "p\xe5 morg.",
                afternoon: "p\xe5 efterm.",
                evening: "p\xe5 kv\xe4llen",
                night: "p\xe5 natten",
            },
            wide: {
                am: "fm",
                pm: "em",
                midnight: "midnatt",
                noon: "middag",
                morning: "p\xe5 morgonen",
                afternoon: "p\xe5 eftermiddagen",
                evening: "p\xe5 kv\xe4llen",
                night: "p\xe5 natten",
            },
        },
        defaultFormattingWidth: "wide",
    }),
};
