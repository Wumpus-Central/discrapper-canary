t.d(n, { A: () => o });
var r = t(981737);
let o = {
    ordinalNumber: function (e, n) {
        return Number(e) + ".";
    },
    era: (0, r.A)({
        values: {
            narrow: ["př. n. l.", "n. l."],
            abbreviated: ["př. n. l.", "n. l."],
            wide: ["před naš\xedm letopočtem", "našeho letopočtu"],
        },
        defaultWidth: "wide",
    }),
    quarter: (0, r.A)({
        values: {
            narrow: ["1", "2", "3", "4"],
            abbreviated: ["1. čtvrtlet\xed", "2. čtvrtlet\xed", "3. čtvrtlet\xed", "4. čtvrtlet\xed"],
            wide: ["1. čtvrtlet\xed", "2. čtvrtlet\xed", "3. čtvrtlet\xed", "4. čtvrtlet\xed"],
        },
        defaultWidth: "wide",
        argumentCallback: function (e) {
            return e - 1;
        },
    }),
    month: (0, r.A)({
        values: {
            narrow: ["L", "\xda", "B", "D", "K", "Č", "Č", "S", "Z", "Ř", "L", "P"],
            abbreviated: ["led", "\xfano", "bře", "dub", "kvě", "čvn", "čvc", "srp", "z\xe1ř", "ř\xedj", "lis", "pro"],
            wide: [
                "leden",
                "\xfanor",
                "březen",
                "duben",
                "květen",
                "červen",
                "červenec",
                "srpen",
                "z\xe1ř\xed",
                "ř\xedjen",
                "listopad",
                "prosinec",
            ],
        },
        defaultWidth: "wide",
        formattingValues: {
            narrow: ["L", "\xda", "B", "D", "K", "Č", "Č", "S", "Z", "Ř", "L", "P"],
            abbreviated: ["led", "\xfano", "bře", "dub", "kvě", "čvn", "čvc", "srp", "z\xe1ř", "ř\xedj", "lis", "pro"],
            wide: [
                "ledna",
                "\xfanora",
                "března",
                "dubna",
                "května",
                "června",
                "července",
                "srpna",
                "z\xe1ř\xed",
                "ř\xedjna",
                "listopadu",
                "prosince",
            ],
        },
        defaultFormattingWidth: "wide",
    }),
    day: (0, r.A)({
        values: {
            narrow: ["ne", "po", "\xfat", "st", "čt", "p\xe1", "so"],
            short: ["ne", "po", "\xfat", "st", "čt", "p\xe1", "so"],
            abbreviated: ["ned", "pon", "\xfate", "stř", "čtv", "p\xe1t", "sob"],
            wide: ["neděle", "ponděl\xed", "\xfater\xfd", "středa", "čtvrtek", "p\xe1tek", "sobota"],
        },
        defaultWidth: "wide",
    }),
    dayPeriod: (0, r.A)({
        values: {
            narrow: {
                am: "dop.",
                pm: "odp.",
                midnight: "půlnoc",
                noon: "poledne",
                morning: "r\xe1no",
                afternoon: "odpoledne",
                evening: "večer",
                night: "noc",
            },
            abbreviated: {
                am: "dop.",
                pm: "odp.",
                midnight: "půlnoc",
                noon: "poledne",
                morning: "r\xe1no",
                afternoon: "odpoledne",
                evening: "večer",
                night: "noc",
            },
            wide: {
                am: "dopoledne",
                pm: "odpoledne",
                midnight: "půlnoc",
                noon: "poledne",
                morning: "r\xe1no",
                afternoon: "odpoledne",
                evening: "večer",
                night: "noc",
            },
        },
        defaultWidth: "wide",
        formattingValues: {
            narrow: {
                am: "dop.",
                pm: "odp.",
                midnight: "půlnoc",
                noon: "poledne",
                morning: "r\xe1no",
                afternoon: "odpoledne",
                evening: "večer",
                night: "noc",
            },
            abbreviated: {
                am: "dop.",
                pm: "odp.",
                midnight: "půlnoc",
                noon: "poledne",
                morning: "r\xe1no",
                afternoon: "odpoledne",
                evening: "večer",
                night: "noc",
            },
            wide: {
                am: "dopoledne",
                pm: "odpoledne",
                midnight: "půlnoc",
                noon: "poledne",
                morning: "r\xe1no",
                afternoon: "odpoledne",
                evening: "večer",
                night: "noc",
            },
        },
        defaultFormattingWidth: "wide",
    }),
};
