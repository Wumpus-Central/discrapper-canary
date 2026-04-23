function t(i, n) {
    if (void 0 !== i.one && 1 === n) return i.one;
    var e = n % 10,
        t = n % 100;
    return 1 === e && 11 !== t
        ? i.singularNominative.replace("{{count}}", String(n))
        : e >= 2 && e <= 4 && (t < 10 || t > 20)
          ? i.singularGenitive.replace("{{count}}", String(n))
          : i.pluralGenitive.replace("{{count}}", String(n));
}
function a(i) {
    return function (n, e) {
        if (!e || !e.addSuffix) return t(i.regular, n);
        if (e.comparison && e.comparison > 0)
            if (i.future) return t(i.future, n);
            else return "за " + t(i.regular, n);
        return i.past ? t(i.past, n) : t(i.regular, n) + " тому";
    };
}
e.r(n), e.d(n, { default: () => p });
var r = {
        lessThanXSeconds: a({
            regular: {
                one: "менше секунди",
                singularNominative: "менше {{count}} секунди",
                singularGenitive: "менше {{count}} секунд",
                pluralGenitive: "менше {{count}} секунд",
            },
            future: {
                one: "менше, ніж за секунду",
                singularNominative: "менше, ніж за {{count}} секунду",
                singularGenitive: "менше, ніж за {{count}} секунди",
                pluralGenitive: "менше, ніж за {{count}} секунд",
            },
        }),
        xSeconds: a({
            regular: {
                singularNominative: "{{count}} секунда",
                singularGenitive: "{{count}} секунди",
                pluralGenitive: "{{count}} секунд",
            },
            past: {
                singularNominative: "{{count}} секунду тому",
                singularGenitive: "{{count}} секунди тому",
                pluralGenitive: "{{count}} секунд тому",
            },
            future: {
                singularNominative: "за {{count}} секунду",
                singularGenitive: "за {{count}} секунди",
                pluralGenitive: "за {{count}} секунд",
            },
        }),
        halfAMinute: function (i, n) {
            if (n && n.addSuffix)
                if (n.comparison && n.comparison > 0) return "за півхвилини";
                else return "півхвилини тому";
            return "півхвилини";
        },
        lessThanXMinutes: a({
            regular: {
                one: "менше хвилини",
                singularNominative: "менше {{count}} хвилини",
                singularGenitive: "менше {{count}} хвилин",
                pluralGenitive: "менше {{count}} хвилин",
            },
            future: {
                one: "менше, ніж за хвилину",
                singularNominative: "менше, ніж за {{count}} хвилину",
                singularGenitive: "менше, ніж за {{count}} хвилини",
                pluralGenitive: "менше, ніж за {{count}} хвилин",
            },
        }),
        xMinutes: a({
            regular: {
                singularNominative: "{{count}} хвилина",
                singularGenitive: "{{count}} хвилини",
                pluralGenitive: "{{count}} хвилин",
            },
            past: {
                singularNominative: "{{count}} хвилину тому",
                singularGenitive: "{{count}} хвилини тому",
                pluralGenitive: "{{count}} хвилин тому",
            },
            future: {
                singularNominative: "за {{count}} хвилину",
                singularGenitive: "за {{count}} хвилини",
                pluralGenitive: "за {{count}} хвилин",
            },
        }),
        aboutXHours: a({
            regular: {
                singularNominative: "близько {{count}} години",
                singularGenitive: "близько {{count}} годин",
                pluralGenitive: "близько {{count}} годин",
            },
            future: {
                singularNominative: "приблизно за {{count}} годину",
                singularGenitive: "приблизно за {{count}} години",
                pluralGenitive: "приблизно за {{count}} годин",
            },
        }),
        xHours: a({
            regular: {
                singularNominative: "{{count}} годину",
                singularGenitive: "{{count}} години",
                pluralGenitive: "{{count}} годин",
            },
        }),
        xDays: a({
            regular: {
                singularNominative: "{{count}} день",
                singularGenitive: "{{count}} днi",
                pluralGenitive: "{{count}} днів",
            },
        }),
        aboutXWeeks: a({
            regular: {
                singularNominative: "близько {{count}} тижня",
                singularGenitive: "близько {{count}} тижнів",
                pluralGenitive: "близько {{count}} тижнів",
            },
            future: {
                singularNominative: "приблизно за {{count}} тиждень",
                singularGenitive: "приблизно за {{count}} тижні",
                pluralGenitive: "приблизно за {{count}} тижнів",
            },
        }),
        xWeeks: a({
            regular: {
                singularNominative: "{{count}} тиждень",
                singularGenitive: "{{count}} тижні",
                pluralGenitive: "{{count}} тижнів",
            },
        }),
        aboutXMonths: a({
            regular: {
                singularNominative: "близько {{count}} місяця",
                singularGenitive: "близько {{count}} місяців",
                pluralGenitive: "близько {{count}} місяців",
            },
            future: {
                singularNominative: "приблизно за {{count}} місяць",
                singularGenitive: "приблизно за {{count}} місяці",
                pluralGenitive: "приблизно за {{count}} місяців",
            },
        }),
        xMonths: a({
            regular: {
                singularNominative: "{{count}} місяць",
                singularGenitive: "{{count}} місяці",
                pluralGenitive: "{{count}} місяців",
            },
        }),
        aboutXYears: a({
            regular: {
                singularNominative: "близько {{count}} року",
                singularGenitive: "близько {{count}} років",
                pluralGenitive: "близько {{count}} років",
            },
            future: {
                singularNominative: "приблизно за {{count}} рік",
                singularGenitive: "приблизно за {{count}} роки",
                pluralGenitive: "приблизно за {{count}} років",
            },
        }),
        xYears: a({
            regular: {
                singularNominative: "{{count}} рік",
                singularGenitive: "{{count}} роки",
                pluralGenitive: "{{count}} років",
            },
        }),
        overXYears: a({
            regular: {
                singularNominative: "більше {{count}} року",
                singularGenitive: "більше {{count}} років",
                pluralGenitive: "більше {{count}} років",
            },
            future: {
                singularNominative: "більше, ніж за {{count}} рік",
                singularGenitive: "більше, ніж за {{count}} роки",
                pluralGenitive: "більше, ніж за {{count}} років",
            },
        }),
        almostXYears: a({
            regular: {
                singularNominative: "майже {{count}} рік",
                singularGenitive: "майже {{count}} роки",
                pluralGenitive: "майже {{count}} років",
            },
            future: {
                singularNominative: "майже за {{count}} рік",
                singularGenitive: "майже за {{count}} роки",
                pluralGenitive: "майже за {{count}} років",
            },
        }),
    },
    u = e(385987),
    o = {
        date: (0, u.A)({
            formats: { full: "EEEE, do MMMM y 'р.'", long: "do MMMM y 'р.'", medium: "d MMM y 'р.'", short: "dd.MM.y" },
            defaultWidth: "full",
        }),
        time: (0, u.A)({
            formats: { full: "H:mm:ss zzzz", long: "H:mm:ss z", medium: "H:mm:ss", short: "H:mm" },
            defaultWidth: "full",
        }),
        dateTime: (0, u.A)({
            formats: {
                full: "{{date}} 'о' {{time}}",
                long: "{{date}} 'о' {{time}}",
                medium: "{{date}}, {{time}}",
                short: "{{date}}, {{time}}",
            },
            defaultWidth: "full",
        }),
    },
    l = e(29583),
    s = e(204801),
    c = ["неділю", "понеділок", "вівторок", "середу", "четвер", "п’ятницю", "суботу"];
function d(i) {
    return "'у " + c[i] + " о' p";
}
var v = {
        lastWeek: function (i, n, e) {
            var t = (0, l.default)(i),
                a = t.getUTCDay();
            if ((0, s.A)(t, n, e)) return d(a);
            var r = c[a];
            switch (a) {
                case 0:
                case 3:
                case 5:
                case 6:
                    return "'у минулу " + r + " о' p";
                case 1:
                case 2:
                case 4:
                    return "'у минулий " + r + " о' p";
            }
        },
        yesterday: "'вчора о' p",
        today: "'сьогодні о' p",
        tomorrow: "'завтра о' p",
        nextWeek: function (i, n, e) {
            var t = (0, l.default)(i),
                a = t.getUTCDay();
            if ((0, s.A)(t, n, e)) return d(a);
            var r = c[a];
            switch (a) {
                case 0:
                case 3:
                case 5:
                case 6:
                    return "'у наступну " + r + " о' p";
                case 1:
                case 2:
                case 4:
                    return "'у наступний " + r + " о' p";
            }
        },
        other: "P",
    },
    g = e(981737),
    m = {
        ordinalNumber: function (i, n) {
            var e,
                t = String(null == n ? void 0 : n.unit),
                a = Number(i);
            return (
                (e =
                    "date" === t
                        ? 3 === a || 23 === a
                            ? "-є"
                            : "-е"
                        : "minute" === t || "second" === t || "hour" === t
                          ? "-а"
                          : "-й"),
                a + e
            );
        },
        era: (0, g.A)({
            values: {
                narrow: ["до н.е.", "н.е."],
                abbreviated: ["до н. е.", "н. е."],
                wide: ["до нашої ери", "нашої ери"],
            },
            defaultWidth: "wide",
        }),
        quarter: (0, g.A)({
            values: {
                narrow: ["1", "2", "3", "4"],
                abbreviated: ["1-й кв.", "2-й кв.", "3-й кв.", "4-й кв."],
                wide: ["1-й квартал", "2-й квартал", "3-й квартал", "4-й квартал"],
            },
            defaultWidth: "wide",
            argumentCallback: function (i) {
                return i - 1;
            },
        }),
        month: (0, g.A)({
            values: {
                narrow: ["С", "Л", "Б", "К", "Т", "Ч", "Л", "С", "В", "Ж", "Л", "Г"],
                abbreviated: [
                    "січ.",
                    "лют.",
                    "берез.",
                    "квіт.",
                    "трав.",
                    "черв.",
                    "лип.",
                    "серп.",
                    "верес.",
                    "жовт.",
                    "листоп.",
                    "груд.",
                ],
                wide: [
                    "січень",
                    "лютий",
                    "березень",
                    "квітень",
                    "травень",
                    "червень",
                    "липень",
                    "серпень",
                    "вересень",
                    "жовтень",
                    "листопад",
                    "грудень",
                ],
            },
            defaultWidth: "wide",
            formattingValues: {
                narrow: ["С", "Л", "Б", "К", "Т", "Ч", "Л", "С", "В", "Ж", "Л", "Г"],
                abbreviated: [
                    "січ.",
                    "лют.",
                    "берез.",
                    "квіт.",
                    "трав.",
                    "черв.",
                    "лип.",
                    "серп.",
                    "верес.",
                    "жовт.",
                    "листоп.",
                    "груд.",
                ],
                wide: [
                    "січня",
                    "лютого",
                    "березня",
                    "квітня",
                    "травня",
                    "червня",
                    "липня",
                    "серпня",
                    "вересня",
                    "жовтня",
                    "листопада",
                    "грудня",
                ],
            },
            defaultFormattingWidth: "wide",
        }),
        day: (0, g.A)({
            values: {
                narrow: ["Н", "П", "В", "С", "Ч", "П", "С"],
                short: ["нд", "пн", "вт", "ср", "чт", "пт", "сб"],
                abbreviated: ["нед", "пон", "вів", "сер", "чтв", "птн", "суб"],
                wide: ["неділя", "понеділок", "вівторок", "середа", "четвер", "п’ятниця", "субота"],
            },
            defaultWidth: "wide",
        }),
        dayPeriod: (0, g.A)({
            values: {
                narrow: {
                    am: "ДП",
                    pm: "ПП",
                    midnight: "півн.",
                    noon: "пол.",
                    morning: "ранок",
                    afternoon: "день",
                    evening: "веч.",
                    night: "ніч",
                },
                abbreviated: {
                    am: "ДП",
                    pm: "ПП",
                    midnight: "півн.",
                    noon: "пол.",
                    morning: "ранок",
                    afternoon: "день",
                    evening: "веч.",
                    night: "ніч",
                },
                wide: {
                    am: "ДП",
                    pm: "ПП",
                    midnight: "північ",
                    noon: "полудень",
                    morning: "ранок",
                    afternoon: "день",
                    evening: "вечір",
                    night: "ніч",
                },
            },
            defaultWidth: "any",
            formattingValues: {
                narrow: {
                    am: "ДП",
                    pm: "ПП",
                    midnight: "півн.",
                    noon: "пол.",
                    morning: "ранку",
                    afternoon: "дня",
                    evening: "веч.",
                    night: "ночі",
                },
                abbreviated: {
                    am: "ДП",
                    pm: "ПП",
                    midnight: "півн.",
                    noon: "пол.",
                    morning: "ранку",
                    afternoon: "дня",
                    evening: "веч.",
                    night: "ночі",
                },
                wide: {
                    am: "ДП",
                    pm: "ПП",
                    midnight: "північ",
                    noon: "полудень",
                    morning: "ранку",
                    afternoon: "дня",
                    evening: "веч.",
                    night: "ночі",
                },
            },
            defaultFormattingWidth: "wide",
        }),
    },
    f = e(303527);
let p = {
    code: "uk",
    formatDistance: function (i, n, e) {
        return (e = e || {}), r[i](n, e);
    },
    formatLong: o,
    formatRelative: function (i, n, e, t) {
        var a = v[i];
        return "function" == typeof a ? a(n, e, t) : a;
    },
    localize: m,
    match: {
        ordinalNumber: (0, e(722023).A)({
            matchPattern: /^(\d+)(-?(е|й|є|а|я))?/i,
            parsePattern: /\d+/i,
            valueCallback: function (i) {
                return parseInt(i, 10);
            },
        }),
        era: (0, f.A)({
            matchPatterns: {
                narrow: /^((до )?н\.?\s?е\.?)/i,
                abbreviated: /^((до )?н\.?\s?е\.?)/i,
                wide: /^(до нашої ери|нашої ери|наша ера)/i,
            },
            defaultMatchWidth: "wide",
            parsePatterns: { any: [/^д/i, /^н/i] },
            defaultParseWidth: "any",
        }),
        quarter: (0, f.A)({
            matchPatterns: {
                narrow: /^[1234]/i,
                abbreviated: /^[1234](-?[иі]?й?)? кв.?/i,
                wide: /^[1234](-?[иі]?й?)? квартал/i,
            },
            defaultMatchWidth: "wide",
            parsePatterns: { any: [/1/i, /2/i, /3/i, /4/i] },
            defaultParseWidth: "any",
            valueCallback: function (i) {
                return i + 1;
            },
        }),
        month: (0, f.A)({
            matchPatterns: {
                narrow: /^[слбктчвжг]/i,
                abbreviated: /^(січ|лют|бер(ез)?|квіт|трав|черв|лип|серп|вер(ес)?|жовт|лис(топ)?|груд)\.?/i,
                wide: /^(січень|січня|лютий|лютого|березень|березня|квітень|квітня|травень|травня|червня|червень|липень|липня|серпень|серпня|вересень|вересня|жовтень|жовтня|листопад[а]?|грудень|грудня)/i,
            },
            defaultMatchWidth: "wide",
            parsePatterns: {
                narrow: [/^с/i, /^л/i, /^б/i, /^к/i, /^т/i, /^ч/i, /^л/i, /^с/i, /^в/i, /^ж/i, /^л/i, /^г/i],
                any: [/^сі/i, /^лю/i, /^б/i, /^к/i, /^т/i, /^ч/i, /^лип/i, /^се/i, /^в/i, /^ж/i, /^лис/i, /^г/i],
            },
            defaultParseWidth: "any",
        }),
        day: (0, f.A)({
            matchPatterns: {
                narrow: /^[нпвсч]/i,
                short: /^(нд|пн|вт|ср|чт|пт|сб)\.?/i,
                abbreviated: /^(нед|пон|вів|сер|че?тв|птн?|суб)\.?/i,
                wide: /^(неділ[яі]|понеділ[ок][ка]|вівтор[ок][ка]|серед[аи]|четвер(га)?|п\W*?ятниц[яі]|субот[аи])/i,
            },
            defaultMatchWidth: "wide",
            parsePatterns: {
                narrow: [/^н/i, /^п/i, /^в/i, /^с/i, /^ч/i, /^п/i, /^с/i],
                any: [/^н/i, /^п[он]/i, /^в/i, /^с[ер]/i, /^ч/i, /^п\W*?[ят]/i, /^с[уб]/i],
            },
            defaultParseWidth: "any",
        }),
        dayPeriod: (0, f.A)({
            matchPatterns: {
                narrow: /^([дп]п|півн\.?|пол\.?|ранок|ранку|день|дня|веч\.?|ніч|ночі)/i,
                abbreviated: /^([дп]п|півн\.?|пол\.?|ранок|ранку|день|дня|веч\.?|ніч|ночі)/i,
                wide: /^([дп]п|північ|полудень|ранок|ранку|день|дня|вечір|вечора|ніч|ночі)/i,
            },
            defaultMatchWidth: "wide",
            parsePatterns: {
                any: {
                    am: /^дп/i,
                    pm: /^пп/i,
                    midnight: /^півн/i,
                    noon: /^пол/i,
                    morning: /^р/i,
                    afternoon: /^д[ен]/i,
                    evening: /^в/i,
                    night: /^н/i,
                },
            },
            defaultParseWidth: "any",
        }),
    },
    options: { weekStartsOn: 1, firstWeekContainsDate: 1 },
};
