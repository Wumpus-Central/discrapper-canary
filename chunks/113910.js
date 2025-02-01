n.d(a, { Z: () => o });
var t = n(261168);
let o = {
    date: (0, t.Z)({
        formats: {
            full: "EEEE, d 'de' MMMM 'de' y",
            long: "d 'de' MMMM 'de' y",
            medium: 'd MMM y',
            short: 'dd/MM/y'
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
            full: "{{date}} 'a las' {{time}}",
            long: "{{date}} 'a las' {{time}}",
            medium: '{{date}}, {{time}}',
            short: '{{date}}, {{time}}'
        },
        defaultWidth: 'full'
    })
};
