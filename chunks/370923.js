t.d(a, { Z: () => n });
var i = {
    lessThanXSeconds: {
        one: 'menos de um segundo',
        other: 'menos de {{count}} segundos'
    },
    xSeconds: {
        one: '1 segundo',
        other: '{{count}} segundos'
    },
    halfAMinute: 'meio minuto',
    lessThanXMinutes: {
        one: 'menos de um minuto',
        other: 'menos de {{count}} minutos'
    },
    xMinutes: {
        one: '1 minuto',
        other: '{{count}} minutos'
    },
    aboutXHours: {
        one: 'cerca de 1 hora',
        other: 'cerca de {{count}} horas'
    },
    xHours: {
        one: '1 hora',
        other: '{{count}} horas'
    },
    xDays: {
        one: '1 dia',
        other: '{{count}} dias'
    },
    aboutXWeeks: {
        one: 'cerca de 1 semana',
        other: 'cerca de {{count}} semanas'
    },
    xWeeks: {
        one: '1 semana',
        other: '{{count}} semanas'
    },
    aboutXMonths: {
        one: 'cerca de 1 mês',
        other: 'cerca de {{count}} meses'
    },
    xMonths: {
        one: '1 mês',
        other: '{{count}} meses'
    },
    aboutXYears: {
        one: 'cerca de 1 ano',
        other: 'cerca de {{count}} anos'
    },
    xYears: {
        one: '1 ano',
        other: '{{count}} anos'
    },
    overXYears: {
        one: 'mais de 1 ano',
        other: 'mais de {{count}} anos'
    },
    almostXYears: {
        one: 'quase 1 ano',
        other: 'quase {{count}} anos'
    }
};
let n = function (e, a, t) {
    var n,
        o = i[e];
    if (((n = 'string' == typeof o ? o : 1 === a ? o.one : o.other.replace('{{count}}', String(a))), null != t && t.addSuffix))
        if (t.comparison && t.comparison > 0) return 'em ' + n;
        else return 'há ' + n;
    return n;
};
