a.d(e, { Z: () => r });
var t = a(261168);
let r = {
    date: (0, t.Z)({
        formats: {
            full: "y 'm'. MMMM d 'd'., EEEE",
            long: "y 'm'. MMMM d 'd'.",
            medium: 'y-MM-dd',
            short: 'y-MM-dd'
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
            full: '{{date}} {{time}}',
            long: '{{date}} {{time}}',
            medium: '{{date}} {{time}}',
            short: '{{date}} {{time}}'
        },
        defaultWidth: 'full'
    })
};
