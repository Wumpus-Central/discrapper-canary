i.d(n, { A: () => a });
var e = i(385987);
let a = {
    date: (0, e.A)({
        formats: {
            full: "EEEE, 'ng\xe0y' d MMMM 'năm' y",
            long: "'ng\xe0y' d MMMM 'năm' y",
            medium: "d MMM 'năm' y",
            short: "dd/MM/y",
        },
        defaultWidth: "full",
    }),
    time: (0, e.A)({
        formats: { full: "HH:mm:ss zzzz", long: "HH:mm:ss z", medium: "HH:mm:ss", short: "HH:mm" },
        defaultWidth: "full",
    }),
    dateTime: (0, e.A)({
        formats: {
            full: "{{date}} {{time}}",
            long: "{{date}} {{time}}",
            medium: "{{date}} {{time}}",
            short: "{{date}} {{time}}",
        },
        defaultWidth: "full",
    }),
};
