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
            "kesä",
            "heinä",
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
            "kesäkuu",
            "heinäkuu",
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
            "kesäkuuta",
            "heinäkuuta",
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
            wide: ["ennen ajanlaskun alkua", "jälkeen ajanlaskun alun"],
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
    month: (0, i.A)({
        values: u,
        defaultWidth: "wide",
        formattingValues: n,
        defaultFormattingWidth: "wide",
    }),
    day: (0, i.A)({
        values: r,
        defaultWidth: "wide",
        formattingValues: o,
        defaultFormattingWidth: "wide",
    }),
    dayPeriod: (0, i.A)({
        values: {
            narrow: {
                am: "ap",
                pm: "ip",
                midnight: "keskiyö",
                noon: "keskipäivä",
                morning: "ap",
                afternoon: "ip",
                evening: "illalla",
                night: "yöllä",
            },
            abbreviated: {
                am: "ap",
                pm: "ip",
                midnight: "keskiyö",
                noon: "keskipäivä",
                morning: "ap",
                afternoon: "ip",
                evening: "illalla",
                night: "yöllä",
            },
            wide: {
                am: "ap",
                pm: "ip",
                midnight: "keskiyöllä",
                noon: "keskipäivällä",
                morning: "aamupäivällä",
                afternoon: "iltapäivällä",
                evening: "illalla",
                night: "yöllä",
            },
        },
        defaultWidth: "wide",
    }),
};
