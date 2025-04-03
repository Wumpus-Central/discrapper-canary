n.d(t, { Z: () => r });
var a = n(475637);
let r = {
    ordinalNumber: (0, n(925300).Z)({
        matchPattern: /^(\d+)(\.)?/i,
        parsePattern: /\d+/i,
        valueCallback: function (e) {
            return parseInt(e, 10);
        }
    }),
    era: (0, a.Z)({
        matchPatterns: {
            narrow: /^(fKr|fvt|eKr|vt)/i,
            abbreviated: /^(f\.Kr\.?|f\.v\.t\.?|e\.Kr\.?|v\.t\.)/i,
            wide: /^(f.Kr.|før vesterlandsk tidsregning|e.Kr.|vesterlandsk tidsregning)/i
        },
        defaultMatchWidth: 'wide',
        parsePatterns: {
            any: [/^f/i, /^(v|e)/i]
        },
        defaultParseWidth: 'any'
    }),
    quarter: (0, a.Z)({
        matchPatterns: {
            narrow: /^[1234]/i,
            abbreviated: /^[1234]. kvt\./i,
            wide: /^[1234]\.? kvartal/i
        },
        defaultMatchWidth: 'wide',
        parsePatterns: {
            any: [/1/i, /2/i, /3/i, /4/i]
        },
        defaultParseWidth: 'any',
        valueCallback: function (e) {
            return e + 1;
        }
    }),
    month: (0, a.Z)({
        matchPatterns: {
            narrow: /^[jfmasond]/i,
            abbreviated: /^(jan.|feb.|mar.|apr.|maj|jun.|jul.|aug.|sep.|okt.|nov.|dec.)/i,
            wide: /^(januar|februar|marts|april|maj|juni|juli|august|september|oktober|november|december)/i
        },
        defaultMatchWidth: 'wide',
        parsePatterns: {
            narrow: [/^j/i, /^f/i, /^m/i, /^a/i, /^m/i, /^j/i, /^j/i, /^a/i, /^s/i, /^o/i, /^n/i, /^d/i],
            any: [/^ja/i, /^f/i, /^mar/i, /^ap/i, /^maj/i, /^jun/i, /^jul/i, /^au/i, /^s/i, /^o/i, /^n/i, /^d/i]
        },
        defaultParseWidth: 'any'
    }),
    day: (0, a.Z)({
        matchPatterns: {
            narrow: /^[smtofl]/i,
            short: /^(søn.|man.|tir.|ons.|tor.|fre.|lør.)/i,
            abbreviated: /^(søn|man|tir|ons|tor|fre|lør)/i,
            wide: /^(søndag|mandag|tirsdag|onsdag|torsdag|fredag|lørdag)/i
        },
        defaultMatchWidth: 'wide',
        parsePatterns: {
            narrow: [/^s/i, /^m/i, /^t/i, /^o/i, /^t/i, /^f/i, /^l/i],
            any: [/^s/i, /^m/i, /^ti/i, /^o/i, /^to/i, /^f/i, /^l/i]
        },
        defaultParseWidth: 'any'
    }),
    dayPeriod: (0, a.Z)({
        matchPatterns: {
            narrow: /^(a|p|midnat|middag|(om) (morgenen|eftermiddagen|aftenen|natten))/i,
            any: /^([ap]\.?\s?m\.?|midnat|middag|(om) (morgenen|eftermiddagen|aftenen|natten))/i
        },
        defaultMatchWidth: 'any',
        parsePatterns: {
            any: {
                am: /^a/i,
                pm: /^p/i,
                midnight: /midnat/i,
                noon: /middag/i,
                morning: /morgen/i,
                afternoon: /eftermiddag/i,
                evening: /aften/i,
                night: /nat/i
            }
        },
        defaultParseWidth: 'any'
    })
};
