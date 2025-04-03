t.d(n, { Z: () => r });
var o = t(261168);
let r = {
    date: (0, o.Z)({
        formats: {
            full: 'EEEE, d. MMMM yyyy',
            long: 'd. MMMM yyyy',
            medium: 'd. M. yyyy',
            short: 'dd.MM.yyyy'
        },
        defaultWidth: 'full'
    }),
    time: (0, o.Z)({
        formats: {
            full: 'H:mm:ss zzzz',
            long: 'H:mm:ss z',
            medium: 'H:mm:ss',
            short: 'H:mm'
        },
        defaultWidth: 'full'
    }),
    dateTime: (0, o.Z)({
        formats: {
            full: "{{date}} 'v' {{time}}",
            long: "{{date}} 'v' {{time}}",
            medium: '{{date}}, {{time}}',
            short: '{{date}}, {{time}}'
        },
        defaultWidth: 'full'
    })
};
