t.d(n, { Z: () => a });
var e = t(261168);
let a = {
    date: (0, e.Z)({
        formats: {
            full: "EEEE, do MMMM y 'р.'",
            long: "do MMMM y 'р.'",
            medium: "d MMM y 'р.'",
            short: 'dd.MM.y'
        },
        defaultWidth: 'full'
    }),
    time: (0, e.Z)({
        formats: {
            full: 'H:mm:ss zzzz',
            long: 'H:mm:ss z',
            medium: 'H:mm:ss',
            short: 'H:mm'
        },
        defaultWidth: 'full'
    }),
    dateTime: (0, e.Z)({
        formats: {
            full: "{{date}} 'о' {{time}}",
            long: "{{date}} 'о' {{time}}",
            medium: '{{date}}, {{time}}',
            short: '{{date}}, {{time}}'
        },
        defaultWidth: 'full'
    })
};
