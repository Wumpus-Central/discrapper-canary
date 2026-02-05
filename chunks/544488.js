n.d(t, { A: () => i });
var a = n(385987);
let i = {
    date: (0, a.A)({
        formats: { full: "y'年'M'月'd'日' EEEE", long: "y'年'M'月'd'日'", medium: "yyyy-MM-dd", short: "yy-MM-dd" },
        defaultWidth: "full",
    }),
    time: (0, a.A)({
        formats: { full: "zzzz a h:mm:ss", long: "z a h:mm:ss", medium: "a h:mm:ss", short: "a h:mm" },
        defaultWidth: "full",
    }),
    dateTime: (0, a.A)({
        formats: {
            full: "{{date}} {{time}}",
            long: "{{date}} {{time}}",
            medium: "{{date}} {{time}}",
            short: "{{date}} {{time}}",
        },
        defaultWidth: "full",
    }),
};
