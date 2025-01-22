var i = r(261168),
    a = {
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
    s = {
        full: "{{date}} 'at' {{time}}",
        long: "{{date}} 'at' {{time}}",
        medium: '{{date}}, {{time}}',
        short: '{{date}}, {{time}}'
    },
    l = {
        date: (0, i.Z)({
            formats: a,
            defaultWidth: 'full'
        }),
        time: (0, i.Z)({
            formats: o,
            defaultWidth: 'full'
        }),
        dateTime: (0, i.Z)({
            formats: s,
            defaultWidth: 'full'
        })
    };
n.Z = l;
