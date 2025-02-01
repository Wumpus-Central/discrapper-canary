n.d(t, { Z: () => r });
var a = n(799761),
    i = {
        narrow: ['J', 'F', 'M', 'A', 'M', 'J', 'J', 'A', 'S', 'O', 'N', 'D'],
        abbreviated: ['Jan', 'Feb', 'Mär', 'Apr', 'Mai', 'Jun', 'Jul', 'Aug', 'Sep', 'Okt', 'Nov', 'Dez'],
        wide: ['Januar', 'Februar', 'März', 'April', 'Mai', 'Juni', 'Juli', 'August', 'September', 'Oktober', 'November', 'Dezember']
    },
    o = {
        narrow: i.narrow,
        abbreviated: ['Jan.', 'Feb.', 'März', 'Apr.', 'Mai', 'Juni', 'Juli', 'Aug.', 'Sep.', 'Okt.', 'Nov.', 'Dez.'],
        wide: i.wide
    };
let r = {
    ordinalNumber: function (e) {
        return Number(e) + '.';
    },
    era: (0, a.Z)({
        values: {
            narrow: ['v.Chr.', 'n.Chr.'],
            abbreviated: ['v.Chr.', 'n.Chr.'],
            wide: ['vor Christus', 'nach Christus']
        },
        defaultWidth: 'wide'
    }),
    quarter: (0, a.Z)({
        values: {
            narrow: ['1', '2', '3', '4'],
            abbreviated: ['Q1', 'Q2', 'Q3', 'Q4'],
            wide: ['1. Quartal', '2. Quartal', '3. Quartal', '4. Quartal']
        },
        defaultWidth: 'wide',
        argumentCallback: function (e) {
            return e - 1;
        }
    }),
    month: (0, a.Z)({
        values: i,
        formattingValues: o,
        defaultWidth: 'wide'
    }),
    day: (0, a.Z)({
        values: {
            narrow: ['S', 'M', 'D', 'M', 'D', 'F', 'S'],
            short: ['So', 'Mo', 'Di', 'Mi', 'Do', 'Fr', 'Sa'],
            abbreviated: ['So.', 'Mo.', 'Di.', 'Mi.', 'Do.', 'Fr.', 'Sa.'],
            wide: ['Sonntag', 'Montag', 'Dienstag', 'Mittwoch', 'Donnerstag', 'Freitag', 'Samstag']
        },
        defaultWidth: 'wide'
    }),
    dayPeriod: (0, a.Z)({
        values: {
            narrow: {
                am: 'vm.',
                pm: 'nm.',
                midnight: 'Mitternacht',
                noon: 'Mittag',
                morning: 'Morgen',
                afternoon: 'Nachm.',
                evening: 'Abend',
                night: 'Nacht'
            },
            abbreviated: {
                am: 'vorm.',
                pm: 'nachm.',
                midnight: 'Mitternacht',
                noon: 'Mittag',
                morning: 'Morgen',
                afternoon: 'Nachmittag',
                evening: 'Abend',
                night: 'Nacht'
            },
            wide: {
                am: 'vormittags',
                pm: 'nachmittags',
                midnight: 'Mitternacht',
                noon: 'Mittag',
                morning: 'Morgen',
                afternoon: 'Nachmittag',
                evening: 'Abend',
                night: 'Nacht'
            }
        },
        defaultWidth: 'wide',
        formattingValues: {
            narrow: {
                am: 'vm.',
                pm: 'nm.',
                midnight: 'Mitternacht',
                noon: 'Mittag',
                morning: 'morgens',
                afternoon: 'nachm.',
                evening: 'abends',
                night: 'nachts'
            },
            abbreviated: {
                am: 'vorm.',
                pm: 'nachm.',
                midnight: 'Mitternacht',
                noon: 'Mittag',
                morning: 'morgens',
                afternoon: 'nachmittags',
                evening: 'abends',
                night: 'nachts'
            },
            wide: {
                am: 'vormittags',
                pm: 'nachmittags',
                midnight: 'Mitternacht',
                noon: 'Mittag',
                morning: 'morgens',
                afternoon: 'nachmittags',
                evening: 'abends',
                night: 'nachts'
            }
        },
        defaultFormattingWidth: 'wide'
    })
};
