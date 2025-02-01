n.d(t, { Z: () => a });
var i = n(261168);
let a = {
    date: (0, i.Z)({
        formats: {
            full: 'EEEE, do MMMM, y',
            long: 'do MMMM, y',
            medium: 'd MMM, y',
            short: 'dd/MM/yyyy'
        },
        defaultWidth: 'full'
    }),
    time: (0, i.Z)({
        formats: {
            full: 'h:mm:ss a zzzz',
            long: 'h:mm:ss a z',
            medium: 'h:mm:ss a',
            short: 'h:mm a'
        },
        defaultWidth: 'full'
    }),
    dateTime: (0, i.Z)({
        formats: {
            full: "{{date}} 'को' {{time}}",
            long: "{{date}} 'को' {{time}}",
            medium: '{{date}}, {{time}}',
            short: '{{date}}, {{time}}'
        },
        defaultWidth: 'full'
    })
};
