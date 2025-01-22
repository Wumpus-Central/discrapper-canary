var i = r(799761),
    a = {
        narrow: ['B', 'A'],
        abbreviated: ['BC', 'AD'],
        wide: ['Before Christ', 'Anno Domini']
    },
    o = {
        narrow: ['1', '2', '3', '4'],
        abbreviated: ['Q1', 'Q2', 'Q3', 'Q4'],
        wide: ['1st quarter', '2nd quarter', '3rd quarter', '4th quarter']
    },
    s = {
        narrow: ['J', 'F', 'M', 'A', 'M', 'J', 'J', 'A', 'S', 'O', 'N', 'D'],
        abbreviated: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
        wide: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December']
    },
    l = {
        narrow: ['S', 'M', 'T', 'W', 'T', 'F', 'S'],
        short: ['Su', 'Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa'],
        abbreviated: ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'],
        wide: ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday']
    },
    u = {
        narrow: {
            am: 'a',
            pm: 'p',
            midnight: 'mi',
            noon: 'n',
            morning: 'morning',
            afternoon: 'afternoon',
            evening: 'evening',
            night: 'night'
        },
        abbreviated: {
            am: 'AM',
            pm: 'PM',
            midnight: 'midnight',
            noon: 'noon',
            morning: 'morning',
            afternoon: 'afternoon',
            evening: 'evening',
            night: 'night'
        },
        wide: {
            am: 'a.m.',
            pm: 'p.m.',
            midnight: 'midnight',
            noon: 'noon',
            morning: 'morning',
            afternoon: 'afternoon',
            evening: 'evening',
            night: 'night'
        }
    },
    c = {
        narrow: {
            am: 'a',
            pm: 'p',
            midnight: 'mi',
            noon: 'n',
            morning: 'in the morning',
            afternoon: 'in the afternoon',
            evening: 'in the evening',
            night: 'at night'
        },
        abbreviated: {
            am: 'AM',
            pm: 'PM',
            midnight: 'midnight',
            noon: 'noon',
            morning: 'in the morning',
            afternoon: 'in the afternoon',
            evening: 'in the evening',
            night: 'at night'
        },
        wide: {
            am: 'a.m.',
            pm: 'p.m.',
            midnight: 'midnight',
            noon: 'noon',
            morning: 'in the morning',
            afternoon: 'in the afternoon',
            evening: 'in the evening',
            night: 'at night'
        }
    },
    d = {
        ordinalNumber: function (e, n) {
            var r = Number(e),
                i = r % 100;
            if (i > 20 || i < 10)
                switch (i % 10) {
                    case 1:
                        return r + 'st';
                    case 2:
                        return r + 'nd';
                    case 3:
                        return r + 'rd';
                }
            return r + 'th';
        },
        era: (0, i.Z)({
            values: a,
            defaultWidth: 'wide'
        }),
        quarter: (0, i.Z)({
            values: o,
            defaultWidth: 'wide',
            argumentCallback: function (e) {
                return e - 1;
            }
        }),
        month: (0, i.Z)({
            values: s,
            defaultWidth: 'wide'
        }),
        day: (0, i.Z)({
            values: l,
            defaultWidth: 'wide'
        }),
        dayPeriod: (0, i.Z)({
            values: u,
            defaultWidth: 'wide',
            formattingValues: c,
            defaultFormattingWidth: 'wide'
        })
    };
n.Z = d;
