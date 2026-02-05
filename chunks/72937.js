t.d(e, { A: () => l });
var i = t(981737),
    u = {
        narrow: ["T", "H", "M", "H", "T", "K", "H", "E", "S", "L", "M", "J"],
        abbreviated: [
            "tammi",
            "helmi",
            "maalis",
            "huhti",
            "touko",
            "kes\xe4",
            "hein\xe4",
            "elo",
            "syys",
            "loka",
            "marras",
            "joulu",
        ],
        wide: [
            "tammikuu",
            "helmikuu",
            "maaliskuu",
            "huhtikuu",
            "toukokuu",
            "kes\xe4kuu",
            "hein\xe4kuu",
            "elokuu",
            "syyskuu",
            "lokakuu",
            "marraskuu",
            "joulukuu",
        ],
    },
    n = {
        narrow: u.narrow,
        abbreviated: u.abbreviated,
        wide: [
            "tammikuuta",
            "helmikuuta",
            "maaliskuuta",
            "huhtikuuta",
            "toukokuuta",
            "kes\xe4kuuta",
            "hein\xe4kuuta",
            "elokuuta",
            "syyskuuta",
            "lokakuuta",
            "marraskuuta",
            "joulukuuta",
        ],
    },
    r = {
        narrow: ["S", "M", "T", "K", "T", "P", "L"],
        short: ["su", "ma", "ti", "ke", "to", "pe", "la"],
        abbreviated: ["sunn.", "maan.", "tiis.", "kesk.", "torst.", "perj.", "la"],
        wide: ["sunnuntai", "maanantai", "tiistai", "keskiviikko", "torstai", "perjantai", "lauantai"],
    },
    o = {
        narrow: r.narrow,
        short: r.short,
        abbreviated: r.abbreviated,
        wide: ["sunnuntaina", "maanantaina", "tiistaina", "keskiviikkona", "torstaina", "perjantaina", "lauantaina"],
    };
let l = {
    ordinalNumber: function (a, e) {
        return Number(a) + ".";
    },
    era: (0, i.A)({
        values: {
            narrow: ["eaa.", "jaa."],
            abbreviated: ["eaa.", "jaa."],
            wide: ["ennen ajanlaskun alkua", "j\xe4lkeen ajanlaskun alun"],
        },
        defaultWidth: "wide",
    }),
    quarter: (0, i.A)({
        values: {
            narrow: ["1", "2", "3", "4"],
            abbreviated: ["Q1", "Q2", "Q3", "Q4"],
            wide: ["1. kvartaali", "2. kvartaali", "3. kvartaali", "4. kvartaali"],
        },
        defaultWidth: "wide",
        argumentCallback: function (a) {
            return a - 1;
        },
    }),
    month: (0, i.A)({ values: u, defaultWidth: "wide", formattingValues: n, defaultFormattingWidth: "wide" }),
    day: (0, i.A)({ values: r, defaultWidth: "wide", formattingValues: o, defaultFormattingWidth: "wide" }),
    dayPeriod: (0, i.A)({
        values: {
            narrow: {
                am: "ap",
                pm: "ip",
                midnight: "keskiy\xf6",
                noon: "keskip\xe4iv\xe4",
                morning: "ap",
                afternoon: "ip",
                evening: "illalla",
                night: "y\xf6ll\xe4",
            },
            abbreviated: {
                am: "ap",
                pm: "ip",
                midnight: "keskiy\xf6",
                noon: "keskip\xe4iv\xe4",
                morning: "ap",
                afternoon: "ip",
                evening: "illalla",
                night: "y\xf6ll\xe4",
            },
            wide: {
                am: "ap",
                pm: "ip",
                midnight: "keskiy\xf6ll\xe4",
                noon: "keskip\xe4iv\xe4ll\xe4",
                morning: "aamup\xe4iv\xe4ll\xe4",
                afternoon: "iltap\xe4iv\xe4ll\xe4",
                evening: "illalla",
                night: "y\xf6ll\xe4",
            },
        },
        defaultWidth: "wide",
    }),
};
