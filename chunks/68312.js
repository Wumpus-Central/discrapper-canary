n.d(t, { Z: () => r });
var a = n(261168);
let r = {
    date: (0, a.Z)({
        formats: {
            full: "EEEE 'den' d. MMMM y",
            long: 'd. MMMM y',
            medium: 'd. MMM y',
            short: 'dd/MM/y'
        },
        defaultWidth: 'full'
    }),
    time: (0, a.Z)({
        formats: {
            full: 'HH:mm:ss zzzz',
            long: 'HH:mm:ss z',
            medium: 'HH:mm:ss',
            short: 'HH:mm'
        },
        defaultWidth: 'full'
    }),
    dateTime: (0, a.Z)({
        formats: {
            full: "{{date}} 'kl'. {{time}}",
            long: "{{date}} 'kl'. {{time}}",
            medium: '{{date}} {{time}}',
            short: '{{date}} {{time}}'
        },
        defaultWidth: 'full'
    })
};
