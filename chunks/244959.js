n.d(e, { Z: () => o });
var a = n(925300),
    r = n(475637);
let o = {
    ordinalNumber: (0, a.Z)({
        matchPattern: /^第?\d+(年|四半期|月|週|日|時|分|秒)?/i,
        parsePattern: /\d+/i,
        valueCallback: function (t) {
            return parseInt(t, 10);
        }
    }),
    era: (0, r.Z)({
        matchPatterns: {
            narrow: /^(B\.?C\.?|A\.?D\.?)/i,
            abbreviated: /^(紀元[前後]|西暦)/i,
            wide: /^(紀元[前後]|西暦)/i
        },
        defaultMatchWidth: 'wide',
        parsePatterns: {
            narrow: [/^B/i, /^A/i],
            any: [/^(紀元前)/i, /^(西暦|紀元後)/i]
        },
        defaultParseWidth: 'any'
    }),
    quarter: (0, r.Z)({
        matchPatterns: {
            narrow: /^[1234]/i,
            abbreviated: /^Q[1234]/i,
            wide: /^第[1234一二三四１２３４]四半期/i
        },
        defaultMatchWidth: 'wide',
        parsePatterns: {
            any: [/(1|一|１)/i, /(2|二|２)/i, /(3|三|３)/i, /(4|四|４)/i]
        },
        defaultParseWidth: 'any',
        valueCallback: function (t) {
            return t + 1;
        }
    }),
    month: (0, r.Z)({
        matchPatterns: {
            narrow: /^([123456789]|1[012])/,
            abbreviated: /^([123456789]|1[012])月/i,
            wide: /^([123456789]|1[012])月/i
        },
        defaultMatchWidth: 'wide',
        parsePatterns: {
            any: [/^1\D/, /^2/, /^3/, /^4/, /^5/, /^6/, /^7/, /^8/, /^9/, /^10/, /^11/, /^12/]
        },
        defaultParseWidth: 'any'
    }),
    day: (0, r.Z)({
        matchPatterns: {
            narrow: /^[日月火水木金土]/,
            short: /^[日月火水木金土]/,
            abbreviated: /^[日月火水木金土]/,
            wide: /^[日月火水木金土]曜日/
        },
        defaultMatchWidth: 'wide',
        parsePatterns: {
            any: [/^日/, /^月/, /^火/, /^水/, /^木/, /^金/, /^土/]
        },
        defaultParseWidth: 'any'
    }),
    dayPeriod: (0, r.Z)({
        matchPatterns: { any: /^(AM|PM|午前|午後|正午|深夜|真夜中|夜|朝)/i },
        defaultMatchWidth: 'any',
        parsePatterns: {
            any: {
                am: /^(A|午前)/i,
                pm: /^(P|午後)/i,
                midnight: /^深夜|真夜中/i,
                noon: /^正午/i,
                morning: /^朝/i,
                afternoon: /^午後/i,
                evening: /^夜/i,
                night: /^深夜/i
            }
        },
        defaultParseWidth: 'any'
    })
};
