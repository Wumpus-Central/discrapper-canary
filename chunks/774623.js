i.d(t, { Z: () => a });
var n = i(261168);
let a = {
    date: (0, n.Z)({
        formats: {
            full: 'วันEEEEที่ do MMMM y',
            long: 'do MMMM y',
            medium: 'd MMM y',
            short: 'dd/MM/yyyy'
        },
        defaultWidth: 'full'
    }),
    time: (0, n.Z)({
        formats: {
            full: 'H:mm:ss น. zzzz',
            long: 'H:mm:ss น. z',
            medium: 'H:mm:ss น.',
            short: 'H:mm น.'
        },
        defaultWidth: 'medium'
    }),
    dateTime: (0, n.Z)({
        formats: {
            full: "{{date}} 'เวลา' {{time}}",
            long: "{{date}} 'เวลา' {{time}}",
            medium: '{{date}}, {{time}}',
            short: '{{date}}, {{time}}'
        },
        defaultWidth: 'full'
    })
};
