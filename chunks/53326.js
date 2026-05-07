i.r(n), i.d(n, { default: () => d });
var e = {
        lessThanXSeconds: { one: "d\u01B0\u1EDBi 1 gi\xe2y", other: "d\u01B0\u1EDBi {{count}} gi\xe2y" },
        xSeconds: { one: "1 gi\xe2y", other: "{{count}} gi\xe2y" },
        halfAMinute: "n\u1EEDa ph\xfat",
        lessThanXMinutes: { one: "d\u01B0\u1EDBi 1 ph\xfat", other: "d\u01B0\u1EDBi {{count}} ph\xfat" },
        xMinutes: { one: "1 ph\xfat", other: "{{count}} ph\xfat" },
        aboutXHours: { one: "kho\u1EA3ng 1 gi\u1EDD", other: "kho\u1EA3ng {{count}} gi\u1EDD" },
        xHours: { one: "1 gi\u1EDD", other: "{{count}} gi\u1EDD" },
        xDays: { one: "1 ng\xe0y", other: "{{count}} ng\xe0y" },
        aboutXWeeks: { one: "kho\u1EA3ng 1 tu\u1EA7n", other: "kho\u1EA3ng {{count}} tu\u1EA7n" },
        xWeeks: { one: "1 tu\u1EA7n", other: "{{count}} tu\u1EA7n" },
        aboutXMonths: { one: "kho\u1EA3ng 1 th\xe1ng", other: "kho\u1EA3ng {{count}} th\xe1ng" },
        xMonths: { one: "1 th\xe1ng", other: "{{count}} th\xe1ng" },
        aboutXYears: { one: "kho\u1EA3ng 1 n\u0103m", other: "kho\u1EA3ng {{count}} n\u0103m" },
        xYears: { one: "1 n\u0103m", other: "{{count}} n\u0103m" },
        overXYears: { one: "h\u01A1n 1 n\u0103m", other: "h\u01A1n {{count}} n\u0103m" },
        almostXYears: { one: "g\u1EA7n 1 n\u0103m", other: "g\u1EA7n {{count}} n\u0103m" },
    },
    a = i(385987),
    h = {
        date: (0, a.A)({
            formats: {
                full: "EEEE, 'ng\xe0y' d MMMM 'n\u0103m' y",
                long: "'ng\xe0y' d MMMM 'n\u0103m' y",
                medium: "d MMM 'n\u0103m' y",
                short: "dd/MM/y",
            },
            defaultWidth: "full",
        }),
        time: (0, a.A)({
            formats: { full: "HH:mm:ss zzzz", long: "HH:mm:ss z", medium: "HH:mm:ss", short: "HH:mm" },
            defaultWidth: "full",
        }),
        dateTime: (0, a.A)({
            formats: {
                full: "{{date}} {{time}}",
                long: "{{date}} {{time}}",
                medium: "{{date}} {{time}}",
                short: "{{date}} {{time}}",
            },
            defaultWidth: "full",
        }),
    },
    r = {
        lastWeek: "eeee 'tu\u1EA7n tr\u01B0\u1EDBc v\xe0o l\xfac' p",
        yesterday: "'h\xf4m qua v\xe0o l\xfac' p",
        today: "'h\xf4m nay v\xe0o l\xfac' p",
        tomorrow: "'ng\xe0y mai v\xe0o l\xfac' p",
        nextWeek: "eeee 't\u1EDBi v\xe0o l\xfac' p",
        other: "P",
    },
    o = i(981737),
    g = {
        ordinalNumber: function (t, n) {
            var i = Number(t),
                e = null == n ? void 0 : n.unit;
            if ("quarter" === e)
                switch (i) {
                    case 1:
                        return "I";
                    case 2:
                        return "II";
                    case 3:
                        return "III";
                    case 4:
                        return "IV";
                }
            else if ("day" === e)
                switch (i) {
                    case 1:
                        return "th\u1EE9 2";
                    case 2:
                        return "th\u1EE9 3";
                    case 3:
                        return "th\u1EE9 4";
                    case 4:
                        return "th\u1EE9 5";
                    case 5:
                        return "th\u1EE9 6";
                    case 6:
                        return "th\u1EE9 7";
                    case 7:
                        return "ch\u1EE7 nh\u1EADt";
                }
            else if ("week" === e)
                if (1 === i) return "th\u1EE9 nh\u1EA5t";
                else return "th\u1EE9 " + i;
            else if ("dayOfYear" === e)
                if (1 === i) return "\u0111\u1EA7u ti\xean";
                else return "th\u1EE9 " + i;
            return String(i);
        },
        era: (0, o.A)({
            values: {
                narrow: ["TCN", "SCN"],
                abbreviated: ["tr\u01B0\u1EDBc CN", "sau CN"],
                wide: ["tr\u01B0\u1EDBc C\xf4ng Nguy\xean", "sau C\xf4ng Nguy\xean"],
            },
            defaultWidth: "wide",
        }),
        quarter: (0, o.A)({
            values: {
                narrow: ["1", "2", "3", "4"],
                abbreviated: ["Q1", "Q2", "Q3", "Q4"],
                wide: ["Qu\xfd 1", "Qu\xfd 2", "Qu\xfd 3", "Qu\xfd 4"],
            },
            defaultWidth: "wide",
            formattingValues: {
                narrow: ["1", "2", "3", "4"],
                abbreviated: ["Q1", "Q2", "Q3", "Q4"],
                wide: ["qu\xfd I", "qu\xfd II", "qu\xfd III", "qu\xfd IV"],
            },
            defaultFormattingWidth: "wide",
            argumentCallback: function (t) {
                return t - 1;
            },
        }),
        month: (0, o.A)({
            values: {
                narrow: ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12"],
                abbreviated: [
                    "Thg 1",
                    "Thg 2",
                    "Thg 3",
                    "Thg 4",
                    "Thg 5",
                    "Thg 6",
                    "Thg 7",
                    "Thg 8",
                    "Thg 9",
                    "Thg 10",
                    "Thg 11",
                    "Thg 12",
                ],
                wide: [
                    "Th\xe1ng M\u1ED9t",
                    "Th\xe1ng Hai",
                    "Th\xe1ng Ba",
                    "Th\xe1ng T\u01B0",
                    "Th\xe1ng N\u0103m",
                    "Th\xe1ng S\xe1u",
                    "Th\xe1ng B\u1EA3y",
                    "Th\xe1ng T\xe1m",
                    "Th\xe1ng Ch\xedn",
                    "Th\xe1ng M\u01B0\u1EDDi",
                    "Th\xe1ng M\u01B0\u1EDDi M\u1ED9t",
                    "Th\xe1ng M\u01B0\u1EDDi Hai",
                ],
            },
            defaultWidth: "wide",
            formattingValues: {
                narrow: ["01", "02", "03", "04", "05", "06", "07", "08", "09", "10", "11", "12"],
                abbreviated: [
                    "thg 1",
                    "thg 2",
                    "thg 3",
                    "thg 4",
                    "thg 5",
                    "thg 6",
                    "thg 7",
                    "thg 8",
                    "thg 9",
                    "thg 10",
                    "thg 11",
                    "thg 12",
                ],
                wide: [
                    "th\xe1ng 01",
                    "th\xe1ng 02",
                    "th\xe1ng 03",
                    "th\xe1ng 04",
                    "th\xe1ng 05",
                    "th\xe1ng 06",
                    "th\xe1ng 07",
                    "th\xe1ng 08",
                    "th\xe1ng 09",
                    "th\xe1ng 10",
                    "th\xe1ng 11",
                    "th\xe1ng 12",
                ],
            },
            defaultFormattingWidth: "wide",
        }),
        day: (0, o.A)({
            values: {
                narrow: ["CN", "T2", "T3", "T4", "T5", "T6", "T7"],
                short: ["CN", "Th 2", "Th 3", "Th 4", "Th 5", "Th 6", "Th 7"],
                abbreviated: ["CN", "Th\u1EE9 2", "Th\u1EE9 3", "Th\u1EE9 4", "Th\u1EE9 5", "Th\u1EE9 6", "Th\u1EE9 7"],
                wide: [
                    "Ch\u1EE7 Nh\u1EADt",
                    "Th\u1EE9 Hai",
                    "Th\u1EE9 Ba",
                    "Th\u1EE9 T\u01B0",
                    "Th\u1EE9 N\u0103m",
                    "Th\u1EE9 S\xe1u",
                    "Th\u1EE9 B\u1EA3y",
                ],
            },
            defaultWidth: "wide",
        }),
        dayPeriod: (0, o.A)({
            values: {
                narrow: {
                    am: "am",
                    pm: "pm",
                    midnight: "n\u1EEDa \u0111\xeam",
                    noon: "tr",
                    morning: "sg",
                    afternoon: "ch",
                    evening: "t\u1ED1i",
                    night: "\u0111\xeam",
                },
                abbreviated: {
                    am: "AM",
                    pm: "PM",
                    midnight: "n\u1EEDa \u0111\xeam",
                    noon: "tr\u01B0a",
                    morning: "s\xe1ng",
                    afternoon: "chi\u1EC1u",
                    evening: "t\u1ED1i",
                    night: "\u0111\xeam",
                },
                wide: {
                    am: "SA",
                    pm: "CH",
                    midnight: "n\u1EEDa \u0111\xeam",
                    noon: "tr\u01B0a",
                    morning: "s\xe1ng",
                    afternoon: "chi\u1EC1u",
                    evening: "t\u1ED1i",
                    night: "\u0111\xeam",
                },
            },
            defaultWidth: "wide",
            formattingValues: {
                narrow: {
                    am: "am",
                    pm: "pm",
                    midnight: "n\u1EEDa \u0111\xeam",
                    noon: "tr",
                    morning: "sg",
                    afternoon: "ch",
                    evening: "t\u1ED1i",
                    night: "\u0111\xeam",
                },
                abbreviated: {
                    am: "AM",
                    pm: "PM",
                    midnight: "n\u1EEDa \u0111\xeam",
                    noon: "tr\u01B0a",
                    morning: "s\xe1ng",
                    afternoon: "chi\u1EC1u",
                    evening: "t\u1ED1i",
                    night: "\u0111\xeam",
                },
                wide: {
                    am: "SA",
                    pm: "CH",
                    midnight: "n\u1EEDa \u0111\xeam",
                    noon: "gi\u1EEFa tr\u01B0a",
                    morning: "v\xe0o bu\u1ED5i s\xe1ng",
                    afternoon: "v\xe0o bu\u1ED5i chi\u1EC1u",
                    evening: "v\xe0o bu\u1ED5i t\u1ED1i",
                    night: "v\xe0o ban \u0111\xeam",
                },
            },
            defaultFormattingWidth: "wide",
        }),
    },
    u = i(303527);
let d = {
    code: "vi",
    formatDistance: function (t, n, i) {
        var a,
            h = e[t];
        if (
            ((a = "string" == typeof h ? h : 1 === n ? h.one : h.other.replace("{{count}}", String(n))),
            null != i && i.addSuffix)
        )
            if (i.comparison && i.comparison > 0) return a + " n\u1EEFa";
            else return a + " tr\u01B0\u1EDBc";
        return a;
    },
    formatLong: h,
    formatRelative: function (t, n, i, e) {
        return r[t];
    },
    localize: g,
    match: {
        ordinalNumber: (0, i(722023).A)({
            matchPattern: /^(\d+)/i,
            parsePattern: /\d+/i,
            valueCallback: function (t) {
                return parseInt(t, 10);
            },
        }),
        era: (0, u.A)({
            matchPatterns: {
                narrow: /^(tcn|scn)/i,
                abbreviated: /^(tr\u01b0\u1edbc CN|sau CN)/i,
                wide: /^(tr\u01b0\u1edbc C\xf4ng Nguy\xean|sau C\xf4ng Nguy\xean)/i,
            },
            defaultMatchWidth: "wide",
            parsePatterns: { any: [/^t/i, /^s/i] },
            defaultParseWidth: "any",
        }),
        quarter: (0, u.A)({
            matchPatterns: {
                narrow: /^([1234]|i{1,3}v?)/i,
                abbreviated: /^q([1234]|i{1,3}v?)/i,
                wide: /^qu\xfd ([1234]|i{1,3}v?)/i,
            },
            defaultMatchWidth: "wide",
            parsePatterns: { any: [/(1|i)$/i, /(2|ii)$/i, /(3|iii)$/i, /(4|iv)$/i] },
            defaultParseWidth: "any",
            valueCallback: function (t) {
                return t + 1;
            },
        }),
        month: (0, u.A)({
            matchPatterns: {
                narrow: /^(0?[2-9]|10|11|12|0?1)/i,
                abbreviated: /^thg[ _]?(0?[1-9](?!\d)|10|11|12)/i,
                wide: /^th\xe1ng ?(M\u1ed9t|Hai|Ba|T\u01b0|N\u0103m|S\xe1u|B\u1ea3y|T\xe1m|Ch\xedn|M\u01b0\u1eddi|M\u01b0\u1eddi ?M\u1ed9t|M\u01b0\u1eddi ?Hai|0?[1-9](?!\d)|10|11|12)/i,
            },
            defaultMatchWidth: "wide",
            parsePatterns: {
                narrow: [/0?1$/i, /0?2/i, /3/, /4/, /5/, /6/, /7/, /8/, /9/, /10/, /11/, /12/],
                abbreviated: [
                    /^thg[ _]?0?1(?!\d)/i,
                    /^thg[ _]?0?2/i,
                    /^thg[ _]?0?3/i,
                    /^thg[ _]?0?4/i,
                    /^thg[ _]?0?5/i,
                    /^thg[ _]?0?6/i,
                    /^thg[ _]?0?7/i,
                    /^thg[ _]?0?8/i,
                    /^thg[ _]?0?9/i,
                    /^thg[ _]?10/i,
                    /^thg[ _]?11/i,
                    /^thg[ _]?12/i,
                ],
                wide: [
                    /^th\xe1ng ?(M\u1ed9t|0?1(?!\d))/i,
                    /^th\xe1ng ?(Hai|0?2)/i,
                    /^th\xe1ng ?(Ba|0?3)/i,
                    /^th\xe1ng ?(T\u01b0|0?4)/i,
                    /^th\xe1ng ?(N\u0103m|0?5)/i,
                    /^th\xe1ng ?(S\xe1u|0?6)/i,
                    /^th\xe1ng ?(B\u1ea3y|0?7)/i,
                    /^th\xe1ng ?(T\xe1m|0?8)/i,
                    /^th\xe1ng ?(Ch\xedn|0?9)/i,
                    /^th\xe1ng ?(M\u01b0\u1eddi|10)/i,
                    /^th\xe1ng ?(M\u01b0\u1eddi ?M\u1ed9t|11)/i,
                    /^th\xe1ng ?(M\u01b0\u1eddi ?Hai|12)/i,
                ],
            },
            defaultParseWidth: "wide",
        }),
        day: (0, u.A)({
            matchPatterns: {
                narrow: /^(CN|T2|T3|T4|T5|T6|T7)/i,
                short: /^(CN|Th ?2|Th ?3|Th ?4|Th ?5|Th ?6|Th ?7)/i,
                abbreviated: /^(CN|Th ?2|Th ?3|Th ?4|Th ?5|Th ?6|Th ?7)/i,
                wide: /^(Ch\u1ee7 ?Nh\u1eadt|Ch\xfaa ?Nh\u1eadt|th\u1ee9 ?Hai|th\u1ee9 ?Ba|th\u1ee9 ?T\u01b0|th\u1ee9 ?N\u0103m|th\u1ee9 ?S\xe1u|th\u1ee9 ?B\u1ea3y)/i,
            },
            defaultMatchWidth: "wide",
            parsePatterns: {
                narrow: [/CN/i, /2/i, /3/i, /4/i, /5/i, /6/i, /7/i],
                short: [/CN/i, /2/i, /3/i, /4/i, /5/i, /6/i, /7/i],
                abbreviated: [/CN/i, /2/i, /3/i, /4/i, /5/i, /6/i, /7/i],
                wide: [
                    /(Ch\u1ee7|Ch\xfaa) ?Nh\u1eadt/i,
                    /Hai/i,
                    /Ba/i,
                    /T\u01b0/i,
                    /N\u0103m/i,
                    /S\xe1u/i,
                    /B\u1ea3y/i,
                ],
            },
            defaultParseWidth: "wide",
        }),
        dayPeriod: (0, u.A)({
            matchPatterns: {
                narrow: /^(a|p|n\u1eeda \u0111\xeam|tr\u01b0a|(gi\u1edd) (s\xe1ng|chi\u1ec1u|t\u1ed1i|\u0111\xeam))/i,
                abbreviated:
                    /^(am|pm|n\u1eeda \u0111\xeam|tr\u01b0a|(gi\u1edd) (s\xe1ng|chi\u1ec1u|t\u1ed1i|\u0111\xeam))/i,
                wide: /^(ch[^i]*|sa|n\u1eeda \u0111\xeam|tr\u01b0a|(gi\u1edd) (s\xe1ng|chi\u1ec1u|t\u1ed1i|\u0111\xeam))/i,
            },
            defaultMatchWidth: "wide",
            parsePatterns: {
                any: {
                    am: /^(a|sa)/i,
                    pm: /^(p|ch[^i]*)/i,
                    midnight: /n\u1eeda \u0111\xeam/i,
                    noon: /tr\u01b0a/i,
                    morning: /s\xe1ng/i,
                    afternoon: /chi\u1ec1u/i,
                    evening: /t\u1ed1i/i,
                    night: /^\u0111\xeam/i,
                },
            },
            defaultParseWidth: "any",
        }),
    },
    options: { weekStartsOn: 1, firstWeekContainsDate: 1 },
};
