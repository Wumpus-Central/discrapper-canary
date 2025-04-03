n.d(t, { Z: () => r });
var a = {
    lessThanXSeconds: {
        one: 'mindre enn ett sekund',
        other: 'mindre enn {{count}} sekunder'
    },
    xSeconds: {
        one: 'ett sekund',
        other: '{{count}} sekunder'
    },
    halfAMinute: 'et halvt minutt',
    lessThanXMinutes: {
        one: 'mindre enn ett minutt',
        other: 'mindre enn {{count}} minutter'
    },
    xMinutes: {
        one: 'ett minutt',
        other: '{{count}} minutter'
    },
    aboutXHours: {
        one: 'omtrent en time',
        other: 'omtrent {{count}} timer'
    },
    xHours: {
        one: 'en time',
        other: '{{count}} timer'
    },
    xDays: {
        one: 'en dag',
        other: '{{count}} dager'
    },
    aboutXWeeks: {
        one: 'omtrent en uke',
        other: 'omtrent {{count}} uker'
    },
    xWeeks: {
        one: 'en uke',
        other: '{{count}} uker'
    },
    aboutXMonths: {
        one: 'omtrent en måned',
        other: 'omtrent {{count}} måneder'
    },
    xMonths: {
        one: 'en måned',
        other: '{{count}} måneder'
    },
    aboutXYears: {
        one: 'omtrent ett år',
        other: 'omtrent {{count}} år'
    },
    xYears: {
        one: 'ett år',
        other: '{{count}} år'
    },
    overXYears: {
        one: 'over ett år',
        other: 'over {{count}} år'
    },
    almostXYears: {
        one: 'nesten ett år',
        other: 'nesten {{count}} år'
    }
};
let r = function (e, t, n) {
    var r,
        i = a[e];
    if (((r = 'string' == typeof i ? i : 1 === t ? i.one : i.other.replace('{{count}}', String(t))), null != n && n.addSuffix))
        if (n.comparison && n.comparison > 0) return 'om ' + r;
        else return r + ' siden';
    return r;
};
