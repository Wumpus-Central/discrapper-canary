n.d(i, { Z: () => t });
var o = n(261168);
let t = {
    date: (0, o.Z)({
        formats: {
            full: 'EEEE, do MMMM y',
            long: 'do MMMM y',
            medium: 'do MMM y',
            short: 'dd.MM.y'
        },
        defaultWidth: 'full'
    }),
    time: (0, o.Z)({
        formats: {
            full: 'HH:mm:ss zzzz',
            long: 'HH:mm:ss z',
            medium: 'HH:mm:ss',
            short: 'HH:mm'
        },
        defaultWidth: 'full'
    }),
    dateTime: (0, o.Z)({
        formats: {
            full: '{{date}} {{time}}',
            long: '{{date}} {{time}}',
            medium: '{{date}}, {{time}}',
            short: '{{date}}, {{time}}'
        },
        defaultWidth: 'full'
    })
};
