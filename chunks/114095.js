e.d(a, { Z: () => t });
var n = {
    lessThanXSeconds: {
        one: 'mai puțin de o secundă',
        other: 'mai puțin de {{count}} secunde'
    },
    xSeconds: {
        one: '1 secundă',
        other: '{{count}} secunde'
    },
    halfAMinute: 'jumătate de minut',
    lessThanXMinutes: {
        one: 'mai puțin de un minut',
        other: 'mai puțin de {{count}} minute'
    },
    xMinutes: {
        one: '1 minut',
        other: '{{count}} minute'
    },
    aboutXHours: {
        one: 'circa 1 oră',
        other: 'circa {{count}} ore'
    },
    xHours: {
        one: '1 oră',
        other: '{{count}} ore'
    },
    xDays: {
        one: '1 zi',
        other: '{{count}} zile'
    },
    aboutXWeeks: {
        one: 'circa o săptămână',
        other: 'circa {{count}} săptămâni'
    },
    xWeeks: {
        one: '1 săptămână',
        other: '{{count}} săptămâni'
    },
    aboutXMonths: {
        one: 'circa 1 lună',
        other: 'circa {{count}} luni'
    },
    xMonths: {
        one: '1 lună',
        other: '{{count}} luni'
    },
    aboutXYears: {
        one: 'circa 1 an',
        other: 'circa {{count}} ani'
    },
    xYears: {
        one: '1 an',
        other: '{{count}} ani'
    },
    overXYears: {
        one: 'peste 1 an',
        other: 'peste {{count}} ani'
    },
    almostXYears: {
        one: 'aproape 1 an',
        other: 'aproape {{count}} ani'
    }
};
let t = function (i, a, e) {
    var t,
        r = n[i];
    if (((t = 'string' == typeof r ? r : 1 === a ? r.one : r.other.replace('{{count}}', String(a))), null != e && e.addSuffix))
        if (e.comparison && e.comparison > 0) return 'în ' + t;
        else return t + ' în urmă';
    return t;
};
