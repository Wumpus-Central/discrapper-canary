e.d(a, { Z: () => t });
var n = e(261168);
let t = {
    date: (0, n.Z)({
        formats: {
            full: 'EEEE, d MMMM yyyy',
            long: 'd MMMM yyyy',
            medium: 'd MMM yyyy',
            short: 'dd.MM.yyyy'
        },
        defaultWidth: 'full'
    }),
    time: (0, n.Z)({
        formats: {
            full: 'HH:mm:ss zzzz',
            long: 'HH:mm:ss z',
            medium: 'HH:mm:ss',
            short: 'HH:mm'
        },
        defaultWidth: 'full'
    }),
    dateTime: (0, n.Z)({
        formats: {
            full: "{{date}} 'la' {{time}}",
            long: "{{date}} 'la' {{time}}",
            medium: '{{date}}, {{time}}',
            short: '{{date}}, {{time}}'
        },
        defaultWidth: 'full'
    })
};
