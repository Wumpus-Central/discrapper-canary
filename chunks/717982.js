t.d(e, { Z: () => n });
var i = t(261168);
let n = {
    date: (0, i.Z)({
        formats: {
            full: 'eeee d. MMMM y',
            long: 'd. MMMM y',
            medium: 'd. MMM y',
            short: 'd.M.y'
        },
        defaultWidth: 'full'
    }),
    time: (0, i.Z)({
        formats: {
            full: 'HH.mm.ss zzzz',
            long: 'HH.mm.ss z',
            medium: 'HH.mm.ss',
            short: 'HH.mm'
        },
        defaultWidth: 'full'
    }),
    dateTime: (0, i.Z)({
        formats: {
            full: "{{date}} 'klo' {{time}}",
            long: "{{date}} 'klo' {{time}}",
            medium: '{{date}} {{time}}',
            short: '{{date}} {{time}}'
        },
        defaultWidth: 'full'
    })
};
