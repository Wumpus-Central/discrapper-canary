n.d(t, { Z: () => s });
var r = n(261168),
    i = {
        full: 'EEEE, MMMM do, y',
        long: 'MMMM do, y',
        medium: 'MMM d, y',
        short: 'MM/dd/yyyy'
    },
    o = {
        full: 'h:mm:ss a zzzz',
        long: 'h:mm:ss a z',
        medium: 'h:mm:ss a',
        short: 'h:mm a'
    },
    a = {
        full: "{{date}} 'at' {{time}}",
        long: "{{date}} 'at' {{time}}",
        medium: '{{date}}, {{time}}',
        short: '{{date}}, {{time}}'
    };
let s = {
    date: (0, r.Z)({
        formats: i,
        defaultWidth: 'full'
    }),
    time: (0, r.Z)({
        formats: o,
        defaultWidth: 'full'
    }),
    dateTime: (0, r.Z)({
        formats: a,
        defaultWidth: 'full'
    })
};
