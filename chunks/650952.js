a.d(t, { Z: () => r });
var n = a(261168);
let r = {
    date: (0, n.Z)({
        formats: {
            full: 'EEEE, dd MMMM yyyy',
            long: 'dd MMMM yyyy',
            medium: 'dd MMM yyyy',
            short: 'dd/MM/yyyy'
        },
        defaultWidth: 'full'
    }),
    time: (0, n.Z)({
        formats: {
            full: 'HH:mm:ss zzzz',
            long: 'HH:mm:ss z',
            medium: 'HH:mm:ss',
            short: 'H:mm'
        },
        defaultWidth: 'full'
    }),
    dateTime: (0, n.Z)({
        formats: { any: '{{date}} {{time}}' },
        defaultWidth: 'any'
    })
};
