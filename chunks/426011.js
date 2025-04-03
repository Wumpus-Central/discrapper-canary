a.d(i, { Z: () => n });
var t = {
    lessThanXSeconds: {
        one: 'moins d\u2019une seconde',
        other: 'moins de {{count}} secondes'
    },
    xSeconds: {
        one: '1 seconde',
        other: '{{count}} secondes'
    },
    halfAMinute: '30 secondes',
    lessThanXMinutes: {
        one: 'moins d\u2019une minute',
        other: 'moins de {{count}} minutes'
    },
    xMinutes: {
        one: '1 minute',
        other: '{{count}} minutes'
    },
    aboutXHours: {
        one: 'environ 1 heure',
        other: 'environ {{count}} heures'
    },
    xHours: {
        one: '1 heure',
        other: '{{count}} heures'
    },
    xDays: {
        one: '1 jour',
        other: '{{count}} jours'
    },
    aboutXWeeks: {
        one: 'environ 1 semaine',
        other: 'environ {{count}} semaines'
    },
    xWeeks: {
        one: '1 semaine',
        other: '{{count}} semaines'
    },
    aboutXMonths: {
        one: 'environ 1 mois',
        other: 'environ {{count}} mois'
    },
    xMonths: {
        one: '1 mois',
        other: '{{count}} mois'
    },
    aboutXYears: {
        one: 'environ 1 an',
        other: 'environ {{count}} ans'
    },
    xYears: {
        one: '1 an',
        other: '{{count}} ans'
    },
    overXYears: {
        one: 'plus d\u2019un an',
        other: 'plus de {{count}} ans'
    },
    almostXYears: {
        one: 'presqu\u2019un an',
        other: 'presque {{count}} ans'
    }
};
let n = function (e, i, a) {
    var n,
        r = t[e];
    if (((n = 'string' == typeof r ? r : 1 === i ? r.one : r.other.replace('{{count}}', String(i))), null != a && a.addSuffix))
        if (a.comparison && a.comparison > 0) return 'dans ' + n;
        else return 'il y a ' + n;
    return n;
};
