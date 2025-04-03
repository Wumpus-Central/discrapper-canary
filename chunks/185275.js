n.d(t, { Z: () => i });
var a = n(475637);
let i = {
    ordinalNumber: (0, n(925300).Z)({
        matchPattern: /^(\d+)(\.)?/i,
        parsePattern: /\d+/i,
        valueCallback: function (e) {
            return parseInt(e);
        }
    }),
    era: (0, a.Z)({
        matchPatterns: {
            narrow: /^(v\.? ?Chr\.?|n\.? ?Chr\.?)/i,
            abbreviated: /^(v\.? ?Chr\.?|n\.? ?Chr\.?)/i,
            wide: /^(vor Christus|vor unserer Zeitrechnung|nach Christus|unserer Zeitrechnung)/i
        },
        defaultMatchWidth: 'wide',
        parsePatterns: {
            any: [/^v/i, /^n/i]
        },
        defaultParseWidth: 'any'
    }),
    quarter: (0, a.Z)({
        matchPatterns: {
            narrow: /^[1234]/i,
            abbreviated: /^q[1234]/i,
            wide: /^[1234](\.)? Quartal/i
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
            abbreviated: /^(j[aä]n|feb|mär[z]?|apr|mai|jun[i]?|jul[i]?|aug|sep|okt|nov|dez)\.?/i,
            wide: /^(januar|februar|märz|april|mai|juni|juli|august|september|oktober|november|dezember)/i
        },
        defaultMatchWidth: 'wide',
        parsePatterns: {
            narrow: [/^j/i, /^f/i, /^m/i, /^a/i, /^m/i, /^j/i, /^j/i, /^a/i, /^s/i, /^o/i, /^n/i, /^d/i],
            any: [/^j[aä]/i, /^f/i, /^mär/i, /^ap/i, /^mai/i, /^jun/i, /^jul/i, /^au/i, /^s/i, /^o/i, /^n/i, /^d/i]
        },
        defaultParseWidth: 'any'
    }),
    day: (0, a.Z)({
        matchPatterns: {
            narrow: /^[smdmf]/i,
            short: /^(so|mo|di|mi|do|fr|sa)/i,
            abbreviated: /^(son?|mon?|die?|mit?|don?|fre?|sam?)\.?/i,
            wide: /^(sonntag|montag|dienstag|mittwoch|donnerstag|freitag|samstag)/i
        },
        defaultMatchWidth: 'wide',
        parsePatterns: {
            any: [/^so/i, /^mo/i, /^di/i, /^mi/i, /^do/i, /^f/i, /^sa/i]
        },
        defaultParseWidth: 'any'
    }),
    dayPeriod: (0, a.Z)({
        matchPatterns: {
            narrow: /^(vm\.?|nm\.?|Mitternacht|Mittag|morgens|nachm\.?|abends|nachts)/i,
            abbreviated: /^(vorm\.?|nachm\.?|Mitternacht|Mittag|morgens|nachm\.?|abends|nachts)/i,
            wide: /^(vormittags|nachmittags|Mitternacht|Mittag|morgens|nachmittags|abends|nachts)/i
        },
        defaultMatchWidth: 'wide',
        parsePatterns: {
            any: {
                am: /^v/i,
                pm: /^n/i,
                midnight: /^Mitte/i,
                noon: /^Mitta/i,
                morning: /morgens/i,
                afternoon: /nachmittags/i,
                evening: /abends/i,
                night: /nachts/i
            }
        },
        defaultParseWidth: 'any'
    })
};
