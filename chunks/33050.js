i.d(t, { A: () => a });
var n = i(385987);
let a = {
    date: (0, n.A)({
        formats: { full: "วันEEEEที่ do MMMM y", long: "do MMMM y", medium: "d MMM y", short: "dd/MM/yyyy" },
        defaultWidth: "full",
    }),
    time: (0, n.A)({
        formats: { full: "H:mm:ss น. zzzz", long: "H:mm:ss น. z", medium: "H:mm:ss น.", short: "H:mm น." },
        defaultWidth: "medium",
    }),
    dateTime: (0, n.A)({
        formats: {
            full: "{{date}} 'เวลา' {{time}}",
            long: "{{date}} 'เวลา' {{time}}",
            medium: "{{date}}, {{time}}",
            short: "{{date}}, {{time}}",
        },
        defaultWidth: "full",
    }),
};
