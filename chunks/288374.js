a.d(e, { Z: () => m });
var d = a(261168);
let m = {
    date: (0, d.Z)({
        formats: {
            full: 'EEEE, d MMMM yyyy',
            long: 'd MMMM yyyy',
            medium: 'd MMM yyyy',
            short: 'dd/MM/yyyy'
        },
        defaultWidth: 'full'
    }),
    time: (0, d.Z)({
        formats: {
            full: 'HH:mm:ss zzzz',
            long: 'HH:mm:ss z',
            medium: 'HH:mm:ss',
            short: 'HH:mm'
        },
        defaultWidth: 'full'
    }),
    dateTime: (0, d.Z)({
        formats: {
            full: "{{date}} 'at' {{time}}",
            long: "{{date}} 'at' {{time}}",
            medium: '{{date}}, {{time}}',
            short: '{{date}}, {{time}}'
        },
        defaultWidth: 'full'
    })
};
