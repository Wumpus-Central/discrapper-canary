a.d(i, { A: () => n });
var t = a(981737);
let n = {
    ordinalNumber: function (e, i) {
        var a,
            t = Number(e),
            n = null == i ? void 0 : i.unit;
        return 0 === t
            ? "0"
            : ((a =
                  1 === t
                      ? n && ["year", "week", "hour", "minute", "second"].includes(n)
                          ? "\xe8re"
                          : "er"
                      : "\xe8me"),
              t + a);
    },
    era: (0, t.A)({
        values: {
            narrow: ["av. J.-C", "ap. J.-C"],
            abbreviated: ["av. J.-C", "ap. J.-C"],
            wide: ["avant J\xe9sus-Christ", "apr\xe8s J\xe9sus-Christ"],
        },
        defaultWidth: "wide",
    }),
    quarter: (0, t.A)({
        values: {
            narrow: ["T1", "T2", "T3", "T4"],
            abbreviated: ["1er trim.", "2\xe8me trim.", "3\xe8me trim.", "4\xe8me trim."],
            wide: ["1er trimestre", "2\xe8me trimestre", "3\xe8me trimestre", "4\xe8me trimestre"],
        },
        defaultWidth: "wide",
        argumentCallback: function (e) {
            return e - 1;
        },
    }),
    month: (0, t.A)({
        values: {
            narrow: ["J", "F", "M", "A", "M", "J", "J", "A", "S", "O", "N", "D"],
            abbreviated: [
                "janv.",
                "f\xe9vr.",
                "mars",
                "avr.",
                "mai",
                "juin",
                "juil.",
                "ao\xfbt",
                "sept.",
                "oct.",
                "nov.",
                "d\xe9c.",
            ],
            wide: [
                "janvier",
                "f\xe9vrier",
                "mars",
                "avril",
                "mai",
                "juin",
                "juillet",
                "ao\xfbt",
                "septembre",
                "octobre",
                "novembre",
                "d\xe9cembre",
            ],
        },
        defaultWidth: "wide",
    }),
    day: (0, t.A)({
        values: {
            narrow: ["D", "L", "M", "M", "J", "V", "S"],
            short: ["di", "lu", "ma", "me", "je", "ve", "sa"],
            abbreviated: ["dim.", "lun.", "mar.", "mer.", "jeu.", "ven.", "sam."],
            wide: ["dimanche", "lundi", "mardi", "mercredi", "jeudi", "vendredi", "samedi"],
        },
        defaultWidth: "wide",
    }),
    dayPeriod: (0, t.A)({
        values: {
            narrow: {
                am: "AM",
                pm: "PM",
                midnight: "minuit",
                noon: "midi",
                morning: "mat.",
                afternoon: "ap.m.",
                evening: "soir",
                night: "mat.",
            },
            abbreviated: {
                am: "AM",
                pm: "PM",
                midnight: "minuit",
                noon: "midi",
                morning: "matin",
                afternoon: "apr\xe8s-midi",
                evening: "soir",
                night: "matin",
            },
            wide: {
                am: "AM",
                pm: "PM",
                midnight: "minuit",
                noon: "midi",
                morning: "du matin",
                afternoon: "de l’apr\xe8s-midi",
                evening: "du soir",
                night: "du matin",
            },
        },
        defaultWidth: "wide",
    }),
};
