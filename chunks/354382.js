n.d(t, { Z: () => r });
var i = n(475637),
    a = n(925300),
    o = n(99887);
let r = {
    ordinalNumber: (0, a.Z)({
        matchPattern: /^[०१२३४५६७८९]+/i,
        parsePattern: /^[०१२३४५६७८९]+/i,
        valueCallback: o.n
    }),
    era: (0, i.Z)({
        matchPatterns: {
            narrow: /^(ईसा-पूर्व|ईस्वी)/i,
            abbreviated: /^(ईसा\.?\s?पूर्व\.?|ईसा\.?)/i,
            wide: /^(ईसा-पूर्व|ईसवी पूर्व|ईसवी सन|ईसवी)/i
        },
        defaultMatchWidth: 'wide',
        parsePatterns: {
            any: [/^b/i, /^(a|c)/i]
        },
        defaultParseWidth: 'any'
    }),
    quarter: (0, i.Z)({
        matchPatterns: {
            narrow: /^[1234]/i,
            abbreviated: /^ति[1234]/i,
            wide: /^[1234](पहली|दूसरी|तीसरी|चौथी)? तिमाही/i
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
    month: (0, i.Z)({
        matchPatterns: {
            narrow: /^[जफ़माअप्मईजूनजुअगसिअक्तनदि]/i,
            abbreviated: /^(जन|फ़र|मार्च|अप्|मई|जून|जुल|अग|सित|अक्तू|नव|दिस)/i,
            wide: /^(जनवरी|फ़रवरी|मार्च|अप्रैल|मई|जून|जुलाई|अगस्त|सितंबर|अक्तूबर|नवंबर|दिसंबर)/i
        },
        defaultMatchWidth: 'wide',
        parsePatterns: {
            narrow: [/^ज/i, /^फ़/i, /^मा/i, /^अप्/i, /^मई/i, /^जू/i, /^जु/i, /^अग/i, /^सि/i, /^अक्तू/i, /^न/i, /^दि/i],
            any: [/^जन/i, /^फ़/i, /^मा/i, /^अप्/i, /^मई/i, /^जू/i, /^जु/i, /^अग/i, /^सि/i, /^अक्तू/i, /^नव/i, /^दिस/i]
        },
        defaultParseWidth: 'any'
    }),
    day: (0, i.Z)({
        matchPatterns: {
            narrow: /^[रविसोममंगलबुधगुरुशुक्रशनि]/i,
            short: /^(रवि|सोम|मंगल|बुध|गुरु|शुक्र|शनि)/i,
            abbreviated: /^(रवि|सोम|मंगल|बुध|गुरु|शुक्र|शनि)/i,
            wide: /^(रविवार|सोमवार|मंगलवार|बुधवार|गुरुवार|शुक्रवार|शनिवार)/i
        },
        defaultMatchWidth: 'wide',
        parsePatterns: {
            narrow: [/^रवि/i, /^सोम/i, /^मंगल/i, /^बुध/i, /^गुरु/i, /^शुक्र/i, /^शनि/i],
            any: [/^रवि/i, /^सोम/i, /^मंगल/i, /^बुध/i, /^गुरु/i, /^शुक्र/i, /^शनि/i]
        },
        defaultParseWidth: 'any'
    }),
    dayPeriod: (0, i.Z)({
        matchPatterns: {
            narrow: /^(पू|अ|म|द.\?|सु|दो|शा|रा)/i,
            any: /^(पूर्वाह्न|अपराह्न|म|द.\?|सु|दो|शा|रा)/i
        },
        defaultMatchWidth: 'any',
        parsePatterns: {
            any: {
                am: /^पूर्वाह्न/i,
                pm: /^अपराह्न/i,
                midnight: /^मध्य/i,
                noon: /^दो/i,
                morning: /सु/i,
                afternoon: /दो/i,
                evening: /शा/i,
                night: /रा/i
            }
        },
        defaultParseWidth: 'any'
    })
};
