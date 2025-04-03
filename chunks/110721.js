t.d(e, { Z: () => l });
var i = t(799761),
    n = {
        narrow: ['T', 'H', 'M', 'H', 'T', 'K', 'H', 'E', 'S', 'L', 'M', 'J'],
        abbreviated: ['tammi', 'helmi', 'maalis', 'huhti', 'touko', 'kesä', 'heinä', 'elo', 'syys', 'loka', 'marras', 'joulu'],
        wide: ['tammikuu', 'helmikuu', 'maaliskuu', 'huhtikuu', 'toukokuu', 'kesäkuu', 'heinäkuu', 'elokuu', 'syyskuu', 'lokakuu', 'marraskuu', 'joulukuu']
    },
    u = {
        narrow: n.narrow,
        abbreviated: n.abbreviated,
        wide: ['tammikuuta', 'helmikuuta', 'maaliskuuta', 'huhtikuuta', 'toukokuuta', 'kesäkuuta', 'heinäkuuta', 'elokuuta', 'syyskuuta', 'lokakuuta', 'marraskuuta', 'joulukuuta']
    },
    o = {
        narrow: ['S', 'M', 'T', 'K', 'T', 'P', 'L'],
        short: ['su', 'ma', 'ti', 'ke', 'to', 'pe', 'la'],
        abbreviated: ['sunn.', 'maan.', 'tiis.', 'kesk.', 'torst.', 'perj.', 'la'],
        wide: ['sunnuntai', 'maanantai', 'tiistai', 'keskiviikko', 'torstai', 'perjantai', 'lauantai']
    },
    r = {
        narrow: o.narrow,
        short: o.short,
        abbreviated: o.abbreviated,
        wide: ['sunnuntaina', 'maanantaina', 'tiistaina', 'keskiviikkona', 'torstaina', 'perjantaina', 'lauantaina']
    };
let l = {
    ordinalNumber: function (a, e) {
        return Number(a) + '.';
    },
    era: (0, i.Z)({
        values: {
            narrow: ['eaa.', 'jaa.'],
            abbreviated: ['eaa.', 'jaa.'],
            wide: ['ennen ajanlaskun alkua', 'jälkeen ajanlaskun alun']
        },
        defaultWidth: 'wide'
    }),
    quarter: (0, i.Z)({
        values: {
            narrow: ['1', '2', '3', '4'],
            abbreviated: ['Q1', 'Q2', 'Q3', 'Q4'],
            wide: ['1. kvartaali', '2. kvartaali', '3. kvartaali', '4. kvartaali']
        },
        defaultWidth: 'wide',
        argumentCallback: function (a) {
            return a - 1;
        }
    }),
    month: (0, i.Z)({
        values: n,
        defaultWidth: 'wide',
        formattingValues: u,
        defaultFormattingWidth: 'wide'
    }),
    day: (0, i.Z)({
        values: o,
        defaultWidth: 'wide',
        formattingValues: r,
        defaultFormattingWidth: 'wide'
    }),
    dayPeriod: (0, i.Z)({
        values: {
            narrow: {
                am: 'ap',
                pm: 'ip',
                midnight: 'keskiyö',
                noon: 'keskipäivä',
                morning: 'ap',
                afternoon: 'ip',
                evening: 'illalla',
                night: 'yöllä'
            },
            abbreviated: {
                am: 'ap',
                pm: 'ip',
                midnight: 'keskiyö',
                noon: 'keskipäivä',
                morning: 'ap',
                afternoon: 'ip',
                evening: 'illalla',
                night: 'yöllä'
            },
            wide: {
                am: 'ap',
                pm: 'ip',
                midnight: 'keskiyöllä',
                noon: 'keskipäivällä',
                morning: 'aamupäivällä',
                afternoon: 'iltapäivällä',
                evening: 'illalla',
                night: 'yöllä'
            }
        },
        defaultWidth: 'wide'
    })
};
