e.d(n, { A: () => a });
var t = e(385987);
let a = {
    date: (0, t.A)({
        formats: { full: "EEEE, d MMMM y 'г.'", long: "d MMMM y 'г.'", medium: "d MMM y 'г.'", short: "dd.MM.y" },
        defaultWidth: "full",
    }),
    time: (0, t.A)({
        formats: { full: "H:mm:ss zzzz", long: "H:mm:ss z", medium: "H:mm:ss", short: "H:mm" },
        defaultWidth: "full",
    }),
    dateTime: (0, t.A)({ formats: { any: "{{date}}, {{time}}" }, defaultWidth: "any" }),
};
