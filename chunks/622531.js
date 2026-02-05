t.d(a, { A: () => n });
var i = t(385987);
let n = {
    date: (0, i.A)({
        formats: {
            full: "EEEE, d 'de' MMMM 'de' y",
            long: "d 'de' MMMM 'de' y",
            medium: "d MMM y",
            short: "dd/MM/yyyy",
        },
        defaultWidth: "full",
    }),
    time: (0, i.A)({
        formats: { full: "HH:mm:ss zzzz", long: "HH:mm:ss z", medium: "HH:mm:ss", short: "HH:mm" },
        defaultWidth: "full",
    }),
    dateTime: (0, i.A)({
        formats: {
            full: "{{date}} '\xe0s' {{time}}",
            long: "{{date}} '\xe0s' {{time}}",
            medium: "{{date}}, {{time}}",
            short: "{{date}}, {{time}}",
        },
        defaultWidth: "full",
    }),
};
