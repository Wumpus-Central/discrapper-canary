e.d(n, { A: () => a });
var t = e(385987);
let a = {
    date: (0, t.A)({
        formats: { full: "EEEE, do MMMM y 'р.'", long: "do MMMM y 'р.'", medium: "d MMM y 'р.'", short: "dd.MM.y" },
        defaultWidth: "full",
    }),
    time: (0, t.A)({
        formats: { full: "H:mm:ss zzzz", long: "H:mm:ss z", medium: "H:mm:ss", short: "H:mm" },
        defaultWidth: "full",
    }),
    dateTime: (0, t.A)({
        formats: {
            full: "{{date}} 'о' {{time}}",
            long: "{{date}} 'о' {{time}}",
            medium: "{{date}}, {{time}}",
            short: "{{date}}, {{time}}",
        },
        defaultWidth: "full",
    }),
};
