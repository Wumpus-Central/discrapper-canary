n.d(a, { Z: () => o });
var t = {
    lessThanXSeconds: {
        one: 'menos de un segundo',
        other: 'menos de {{count}} segundos'
    },
    xSeconds: {
        one: '1 segundo',
        other: '{{count}} segundos'
    },
    halfAMinute: 'medio minuto',
    lessThanXMinutes: {
        one: 'menos de un minuto',
        other: 'menos de {{count}} minutos'
    },
    xMinutes: {
        one: '1 minuto',
        other: '{{count}} minutos'
    },
    aboutXHours: {
        one: 'alrededor de 1 hora',
        other: 'alrededor de {{count}} horas'
    },
    xHours: {
        one: '1 hora',
        other: '{{count}} horas'
    },
    xDays: {
        one: '1 día',
        other: '{{count}} días'
    },
    aboutXWeeks: {
        one: 'alrededor de 1 semana',
        other: 'alrededor de {{count}} semanas'
    },
    xWeeks: {
        one: '1 semana',
        other: '{{count}} semanas'
    },
    aboutXMonths: {
        one: 'alrededor de 1 mes',
        other: 'alrededor de {{count}} meses'
    },
    xMonths: {
        one: '1 mes',
        other: '{{count}} meses'
    },
    aboutXYears: {
        one: 'alrededor de 1 año',
        other: 'alrededor de {{count}} años'
    },
    xYears: {
        one: '1 año',
        other: '{{count}} años'
    },
    overXYears: {
        one: 'más de 1 año',
        other: 'más de {{count}} años'
    },
    almostXYears: {
        one: 'casi 1 año',
        other: 'casi {{count}} años'
    }
};
let o = function (e, a, n) {
    var o,
        i = t[e];
    if (((o = 'string' == typeof i ? i : 1 === a ? i.one : i.other.replace('{{count}}', a.toString())), null != n && n.addSuffix))
        if (n.comparison && n.comparison > 0) return 'en ' + o;
        else return 'hace ' + o;
    return o;
};
