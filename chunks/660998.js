e.d(n, { Z: () => a });
var t = e(475637);
let a = {
    ordinalNumber: (0, e(925300).Z)({
        matchPattern: /^(\d+)(-?(е|й|є|а|я))?/i,
        parsePattern: /\d+/i,
        valueCallback: function (i) {
            return parseInt(i, 10);
        }
    }),
    era: (0, t.Z)({
        matchPatterns: {
            narrow: /^((до )?н\.?\s?е\.?)/i,
            abbreviated: /^((до )?н\.?\s?е\.?)/i,
            wide: /^(до нашої ери|нашої ери|наша ера)/i
        },
        defaultMatchWidth: 'wide',
        parsePatterns: {
            any: [/^д/i, /^н/i]
        },
        defaultParseWidth: 'any'
    }),
    quarter: (0, t.Z)({
        matchPatterns: {
            narrow: /^[1234]/i,
            abbreviated: /^[1234](-?[иі]?й?)? кв.?/i,
            wide: /^[1234](-?[иі]?й?)? квартал/i
        },
        defaultMatchWidth: 'wide',
        parsePatterns: {
            any: [/1/i, /2/i, /3/i, /4/i]
        },
        defaultParseWidth: 'any',
        valueCallback: function (i) {
            return i + 1;
        }
    }),
    month: (0, t.Z)({
        matchPatterns: {
            narrow: /^[слбктчвжг]/i,
            abbreviated: /^(січ|лют|бер(ез)?|квіт|трав|черв|лип|серп|вер(ес)?|жовт|лис(топ)?|груд)\.?/i,
            wide: /^(січень|січня|лютий|лютого|березень|березня|квітень|квітня|травень|травня|червня|червень|липень|липня|серпень|серпня|вересень|вересня|жовтень|жовтня|листопад[а]?|грудень|грудня)/i
        },
        defaultMatchWidth: 'wide',
        parsePatterns: {
            narrow: [/^с/i, /^л/i, /^б/i, /^к/i, /^т/i, /^ч/i, /^л/i, /^с/i, /^в/i, /^ж/i, /^л/i, /^г/i],
            any: [/^сі/i, /^лю/i, /^б/i, /^к/i, /^т/i, /^ч/i, /^лип/i, /^се/i, /^в/i, /^ж/i, /^лис/i, /^г/i]
        },
        defaultParseWidth: 'any'
    }),
    day: (0, t.Z)({
        matchPatterns: {
            narrow: /^[нпвсч]/i,
            short: /^(нд|пн|вт|ср|чт|пт|сб)\.?/i,
            abbreviated: /^(нед|пон|вів|сер|че?тв|птн?|суб)\.?/i,
            wide: /^(неділ[яі]|понеділ[ок][ка]|вівтор[ок][ка]|серед[аи]|четвер(га)?|п\W*?ятниц[яі]|субот[аи])/i
        },
        defaultMatchWidth: 'wide',
        parsePatterns: {
            narrow: [/^н/i, /^п/i, /^в/i, /^с/i, /^ч/i, /^п/i, /^с/i],
            any: [/^н/i, /^п[он]/i, /^в/i, /^с[ер]/i, /^ч/i, /^п\W*?[ят]/i, /^с[уб]/i]
        },
        defaultParseWidth: 'any'
    }),
    dayPeriod: (0, t.Z)({
        matchPatterns: {
            narrow: /^([дп]п|півн\.?|пол\.?|ранок|ранку|день|дня|веч\.?|ніч|ночі)/i,
            abbreviated: /^([дп]п|півн\.?|пол\.?|ранок|ранку|день|дня|веч\.?|ніч|ночі)/i,
            wide: /^([дп]п|північ|полудень|ранок|ранку|день|дня|вечір|вечора|ніч|ночі)/i
        },
        defaultMatchWidth: 'wide',
        parsePatterns: {
            any: {
                am: /^дп/i,
                pm: /^пп/i,
                midnight: /^півн/i,
                noon: /^пол/i,
                morning: /^р/i,
                afternoon: /^д[ен]/i,
                evening: /^в/i,
                night: /^н/i
            }
        },
        defaultParseWidth: 'any'
    })
};
