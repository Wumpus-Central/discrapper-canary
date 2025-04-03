t.d(i, { Z: () => n });
var a = t(799761);
let n = {
    ordinalNumber: function (e, i) {
        return String(Number(e));
    },
    era: (0, a.Z)({
        values: {
            narrow: ['aC', 'dC'],
            abbreviated: ['a.C.', 'd.C.'],
            wide: ['avanti Cristo', 'dopo Cristo']
        },
        defaultWidth: 'wide'
    }),
    quarter: (0, a.Z)({
        values: {
            narrow: ['1', '2', '3', '4'],
            abbreviated: ['T1', 'T2', 'T3', 'T4'],
            wide: ['1º trimestre', '2º trimestre', '3º trimestre', '4º trimestre']
        },
        defaultWidth: 'wide',
        argumentCallback: function (e) {
            return e - 1;
        }
    }),
    month: (0, a.Z)({
        values: {
            narrow: ['G', 'F', 'M', 'A', 'M', 'G', 'L', 'A', 'S', 'O', 'N', 'D'],
            abbreviated: ['gen', 'feb', 'mar', 'apr', 'mag', 'giu', 'lug', 'ago', 'set', 'ott', 'nov', 'dic'],
            wide: ['gennaio', 'febbraio', 'marzo', 'aprile', 'maggio', 'giugno', 'luglio', 'agosto', 'settembre', 'ottobre', 'novembre', 'dicembre']
        },
        defaultWidth: 'wide'
    }),
    day: (0, a.Z)({
        values: {
            narrow: ['D', 'L', 'M', 'M', 'G', 'V', 'S'],
            short: ['dom', 'lun', 'mar', 'mer', 'gio', 'ven', 'sab'],
            abbreviated: ['dom', 'lun', 'mar', 'mer', 'gio', 'ven', 'sab'],
            wide: ['domenica', 'lunedì', 'martedì', 'mercoledì', 'giovedì', 'venerdì', 'sabato']
        },
        defaultWidth: 'wide'
    }),
    dayPeriod: (0, a.Z)({
        values: {
            narrow: {
                am: 'm.',
                pm: 'p.',
                midnight: 'mezzanotte',
                noon: 'mezzogiorno',
                morning: 'mattina',
                afternoon: 'pomeriggio',
                evening: 'sera',
                night: 'notte'
            },
            abbreviated: {
                am: 'AM',
                pm: 'PM',
                midnight: 'mezzanotte',
                noon: 'mezzogiorno',
                morning: 'mattina',
                afternoon: 'pomeriggio',
                evening: 'sera',
                night: 'notte'
            },
            wide: {
                am: 'AM',
                pm: 'PM',
                midnight: 'mezzanotte',
                noon: 'mezzogiorno',
                morning: 'mattina',
                afternoon: 'pomeriggio',
                evening: 'sera',
                night: 'notte'
            }
        },
        defaultWidth: 'wide',
        formattingValues: {
            narrow: {
                am: 'm.',
                pm: 'p.',
                midnight: 'mezzanotte',
                noon: 'mezzogiorno',
                morning: 'di mattina',
                afternoon: 'del pomeriggio',
                evening: 'di sera',
                night: 'di notte'
            },
            abbreviated: {
                am: 'AM',
                pm: 'PM',
                midnight: 'mezzanotte',
                noon: 'mezzogiorno',
                morning: 'di mattina',
                afternoon: 'del pomeriggio',
                evening: 'di sera',
                night: 'di notte'
            },
            wide: {
                am: 'AM',
                pm: 'PM',
                midnight: 'mezzanotte',
                noon: 'mezzogiorno',
                morning: 'di mattina',
                afternoon: 'del pomeriggio',
                evening: 'di sera',
                night: 'di notte'
            }
        },
        defaultFormattingWidth: 'wide'
    })
};
