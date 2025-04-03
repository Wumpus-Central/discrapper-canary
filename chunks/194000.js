t.d(n, { Z: () => r });
var o = t(799761);
let r = {
    ordinalNumber: function (e, n) {
        return Number(e) + '.';
    },
    era: (0, o.Z)({
        values: {
            narrow: ['př. n. l.', 'n. l.'],
            abbreviated: ['př. n. l.', 'n. l.'],
            wide: ['před naším letopočtem', 'našeho letopočtu']
        },
        defaultWidth: 'wide'
    }),
    quarter: (0, o.Z)({
        values: {
            narrow: ['1', '2', '3', '4'],
            abbreviated: ['1. čtvrtletí', '2. čtvrtletí', '3. čtvrtletí', '4. čtvrtletí'],
            wide: ['1. čtvrtletí', '2. čtvrtletí', '3. čtvrtletí', '4. čtvrtletí']
        },
        defaultWidth: 'wide',
        argumentCallback: function (e) {
            return e - 1;
        }
    }),
    month: (0, o.Z)({
        values: {
            narrow: ['L', 'Ú', 'B', 'D', 'K', 'Č', 'Č', 'S', 'Z', 'Ř', 'L', 'P'],
            abbreviated: ['led', 'úno', 'bře', 'dub', 'kvě', 'čvn', 'čvc', 'srp', 'zář', 'říj', 'lis', 'pro'],
            wide: ['leden', 'únor', 'březen', 'duben', 'květen', 'červen', 'červenec', 'srpen', 'září', 'říjen', 'listopad', 'prosinec']
        },
        defaultWidth: 'wide',
        formattingValues: {
            narrow: ['L', 'Ú', 'B', 'D', 'K', 'Č', 'Č', 'S', 'Z', 'Ř', 'L', 'P'],
            abbreviated: ['led', 'úno', 'bře', 'dub', 'kvě', 'čvn', 'čvc', 'srp', 'zář', 'říj', 'lis', 'pro'],
            wide: ['ledna', 'února', 'března', 'dubna', 'května', 'června', 'července', 'srpna', 'září', 'října', 'listopadu', 'prosince']
        },
        defaultFormattingWidth: 'wide'
    }),
    day: (0, o.Z)({
        values: {
            narrow: ['ne', 'po', 'út', 'st', 'čt', 'pá', 'so'],
            short: ['ne', 'po', 'út', 'st', 'čt', 'pá', 'so'],
            abbreviated: ['ned', 'pon', 'úte', 'stř', 'čtv', 'pát', 'sob'],
            wide: ['neděle', 'pondělí', 'úterý', 'středa', 'čtvrtek', 'pátek', 'sobota']
        },
        defaultWidth: 'wide'
    }),
    dayPeriod: (0, o.Z)({
        values: {
            narrow: {
                am: 'dop.',
                pm: 'odp.',
                midnight: 'půlnoc',
                noon: 'poledne',
                morning: 'ráno',
                afternoon: 'odpoledne',
                evening: 'večer',
                night: 'noc'
            },
            abbreviated: {
                am: 'dop.',
                pm: 'odp.',
                midnight: 'půlnoc',
                noon: 'poledne',
                morning: 'ráno',
                afternoon: 'odpoledne',
                evening: 'večer',
                night: 'noc'
            },
            wide: {
                am: 'dopoledne',
                pm: 'odpoledne',
                midnight: 'půlnoc',
                noon: 'poledne',
                morning: 'ráno',
                afternoon: 'odpoledne',
                evening: 'večer',
                night: 'noc'
            }
        },
        defaultWidth: 'wide',
        formattingValues: {
            narrow: {
                am: 'dop.',
                pm: 'odp.',
                midnight: 'půlnoc',
                noon: 'poledne',
                morning: 'ráno',
                afternoon: 'odpoledne',
                evening: 'večer',
                night: 'noc'
            },
            abbreviated: {
                am: 'dop.',
                pm: 'odp.',
                midnight: 'půlnoc',
                noon: 'poledne',
                morning: 'ráno',
                afternoon: 'odpoledne',
                evening: 'večer',
                night: 'noc'
            },
            wide: {
                am: 'dopoledne',
                pm: 'odpoledne',
                midnight: 'půlnoc',
                noon: 'poledne',
                morning: 'ráno',
                afternoon: 'odpoledne',
                evening: 'večer',
                night: 'noc'
            }
        },
        defaultFormattingWidth: 'wide'
    })
};
