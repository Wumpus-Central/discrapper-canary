n.d(t, { A: () => r });
var a = n(385987);
let r = {
    date: (0, a.A)({
        formats: { full: "EEEE d MMMM y", long: "d MMMM y", medium: "d MMM y", short: "y-MM-dd" },
        defaultWidth: "full",
    }),
    time: (0, a.A)({
        formats: { full: "'kl'. HH:mm:ss zzzz", long: "HH:mm:ss z", medium: "HH:mm:ss", short: "HH:mm" },
        defaultWidth: "full",
    }),
    dateTime: (0, a.A)({
        formats: {
            full: "{{date}} 'kl.' {{time}}",
            long: "{{date}} 'kl.' {{time}}",
            medium: "{{date}} {{time}}",
            short: "{{date}} {{time}}",
        },
        defaultWidth: "full",
    }),
};
