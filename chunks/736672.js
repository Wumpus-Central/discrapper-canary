n.d(t, { Z: () => i });
var a = n(475637);
let i = {
    ordinalNumber: (0, n(925300).Z)({
        matchPattern: /^(\d+)(일|번째)?/i,
        parsePattern: /\d+/i,
        valueCallback: function (e) {
            return parseInt(e, 10);
        }
    }),
    era: (0, a.Z)({
        matchPatterns: {
            narrow: /^(b\.?\s?c\.?|b\.?\s?c\.?\s?e\.?|a\.?\s?d\.?|c\.?\s?e\.?)/i,
            abbreviated: /^(b\.?\s?c\.?|b\.?\s?c\.?\s?e\.?|a\.?\s?d\.?|c\.?\s?e\.?)/i,
            wide: /^(기원전|서기)/i
        },
        defaultMatchWidth: 'wide',
        parsePatterns: {
            any: [/^(bc|기원전)/i, /^(ad|서기)/i]
        },
        defaultParseWidth: 'any'
    }),
    quarter: (0, a.Z)({
        matchPatterns: {
            narrow: /^[1234]/i,
            abbreviated: /^q[1234]/i,
            wide: /^[1234]사?분기/i
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
            narrow: /^(1[012]|[123456789])/,
            abbreviated: /^(1[012]|[123456789])월/i,
            wide: /^(1[012]|[123456789])월/i
        },
        defaultMatchWidth: 'wide',
        parsePatterns: {
            any: [/^1월?$/, /^2/, /^3/, /^4/, /^5/, /^6/, /^7/, /^8/, /^9/, /^10/, /^11/, /^12/]
        },
        defaultParseWidth: 'any'
    }),
    day: (0, a.Z)({
        matchPatterns: {
            narrow: /^[일월화수목금토]/,
            short: /^[일월화수목금토]/,
            abbreviated: /^[일월화수목금토]/,
            wide: /^[일월화수목금토]요일/
        },
        defaultMatchWidth: 'wide',
        parsePatterns: {
            any: [/^일/, /^월/, /^화/, /^수/, /^목/, /^금/, /^토/]
        },
        defaultParseWidth: 'any'
    }),
    dayPeriod: (0, a.Z)({
        matchPatterns: { any: /^(am|pm|오전|오후|자정|정오|아침|저녁|밤)/i },
        defaultMatchWidth: 'any',
        parsePatterns: {
            any: {
                am: /^(am|오전)/i,
                pm: /^(pm|오후)/i,
                midnight: /^자정/i,
                noon: /^정오/i,
                morning: /^아침/i,
                afternoon: /^오후/i,
                evening: /^저녁/i,
                night: /^밤/i
            }
        },
        defaultParseWidth: 'any'
    })
};
