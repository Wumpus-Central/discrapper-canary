n.d(a, { Z: () => r });
var t = n(261168);
let r = {
    date: (0, t.Z)({
        formats: {
            full: 'EEEE d MMMM y',
            long: 'd MMMM y',
            medium: 'd MMM y',
            short: 'dd-MM-y'
        },
        defaultWidth: 'full'
    }),
    time: (0, t.Z)({
        formats: {
            full: 'HH:mm:ss zzzz',
            long: 'HH:mm:ss z',
            medium: 'HH:mm:ss',
            short: 'HH:mm'
        },
        defaultWidth: 'full'
    }),
    dateTime: (0, t.Z)({
        formats: {
            full: "{{date}} 'om' {{time}}",
            long: "{{date}} 'om' {{time}}",
            medium: '{{date}}, {{time}}',
            short: '{{date}}, {{time}}'
        },
        defaultWidth: 'full'
    })
};
