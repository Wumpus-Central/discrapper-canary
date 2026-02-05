e.d(a, { A: () => t });
var n = e(385987);
let t = {
    date: (0, n.A)({
        formats: { full: "EEEE, d MMMM yyyy", long: "d MMMM yyyy", medium: "d MMM yyyy", short: "dd.MM.yyyy" },
        defaultWidth: "full",
    }),
    time: (0, n.A)({
        formats: { full: "HH:mm:ss zzzz", long: "HH:mm:ss z", medium: "HH:mm:ss", short: "HH:mm" },
        defaultWidth: "full",
    }),
    dateTime: (0, n.A)({
        formats: {
            full: "{{date}} 'la' {{time}}",
            long: "{{date}} 'la' {{time}}",
            medium: "{{date}}, {{time}}",
            short: "{{date}}, {{time}}",
        },
        defaultWidth: "full",
    }),
};
