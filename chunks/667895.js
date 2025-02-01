n.d(t, { Z: () => o });
var i = n(261168),
    r = {
        full: 'EEEE, MMMM do, y',
        long: 'MMMM do, y',
        medium: 'MMM d, y',
        short: 'MM/dd/yyyy'
    },
    a = {
        full: 'h:mm:ss a zzzz',
        long: 'h:mm:ss a z',
        medium: 'h:mm:ss a',
        short: 'h:mm a'
    },
    s = {
        full: "{{date}} 'at' {{time}}",
        long: "{{date}} 'at' {{time}}",
        medium: '{{date}}, {{time}}',
        short: '{{date}}, {{time}}'
    };
let o = {
    date: (0, i.Z)({
        formats: r,
        defaultWidth: 'full'
    }),
    time: (0, i.Z)({
        formats: a,
        defaultWidth: 'full'
    }),
    dateTime: (0, i.Z)({
        formats: s,
        defaultWidth: 'full'
    })
};
