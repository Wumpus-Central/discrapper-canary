function t(i, n) {
    if (void 0 !== i.one && 1 === n) return i.one;
    var e = n % 10,
        t = n % 100;
    return 1 === e && 11 !== t ? i.singularNominative.replace('{{count}}', String(n)) : e >= 2 && e <= 4 && (t < 10 || t > 20) ? i.singularGenitive.replace('{{count}}', String(n)) : i.pluralGenitive.replace('{{count}}', String(n));
}
function a(i) {
    return function (n, e) {
        if (null == e || !e.addSuffix) return t(i.regular, n);
        if (e.comparison && e.comparison > 0)
            if (i.future) return t(i.future, n);
            else return 'через ' + t(i.regular, n);
        return i.past ? t(i.past, n) : t(i.regular, n) + ' назад';
    };
}
e.d(n, { Z: () => u });
var r = {
    lessThanXSeconds: a({
        regular: {
            one: 'меньше секунды',
            singularNominative: 'меньше {{count}} секунды',
            singularGenitive: 'меньше {{count}} секунд',
            pluralGenitive: 'меньше {{count}} секунд'
        },
        future: {
            one: 'меньше, чем через секунду',
            singularNominative: 'меньше, чем через {{count}} секунду',
            singularGenitive: 'меньше, чем через {{count}} секунды',
            pluralGenitive: 'меньше, чем через {{count}} секунд'
        }
    }),
    xSeconds: a({
        regular: {
            singularNominative: '{{count}} секунда',
            singularGenitive: '{{count}} секунды',
            pluralGenitive: '{{count}} секунд'
        },
        past: {
            singularNominative: '{{count}} секунду назад',
            singularGenitive: '{{count}} секунды назад',
            pluralGenitive: '{{count}} секунд назад'
        },
        future: {
            singularNominative: 'через {{count}} секунду',
            singularGenitive: 'через {{count}} секунды',
            pluralGenitive: 'через {{count}} секунд'
        }
    }),
    halfAMinute: function (i, n) {
        if (null != n && n.addSuffix)
            if (n.comparison && n.comparison > 0) return 'через полминуты';
            else return 'полминуты назад';
        return 'полминуты';
    },
    lessThanXMinutes: a({
        regular: {
            one: 'меньше минуты',
            singularNominative: 'меньше {{count}} минуты',
            singularGenitive: 'меньше {{count}} минут',
            pluralGenitive: 'меньше {{count}} минут'
        },
        future: {
            one: 'меньше, чем через минуту',
            singularNominative: 'меньше, чем через {{count}} минуту',
            singularGenitive: 'меньше, чем через {{count}} минуты',
            pluralGenitive: 'меньше, чем через {{count}} минут'
        }
    }),
    xMinutes: a({
        regular: {
            singularNominative: '{{count}} минута',
            singularGenitive: '{{count}} минуты',
            pluralGenitive: '{{count}} минут'
        },
        past: {
            singularNominative: '{{count}} минуту назад',
            singularGenitive: '{{count}} минуты назад',
            pluralGenitive: '{{count}} минут назад'
        },
        future: {
            singularNominative: 'через {{count}} минуту',
            singularGenitive: 'через {{count}} минуты',
            pluralGenitive: 'через {{count}} минут'
        }
    }),
    aboutXHours: a({
        regular: {
            singularNominative: 'около {{count}} часа',
            singularGenitive: 'около {{count}} часов',
            pluralGenitive: 'около {{count}} часов'
        },
        future: {
            singularNominative: 'приблизительно через {{count}} час',
            singularGenitive: 'приблизительно через {{count}} часа',
            pluralGenitive: 'приблизительно через {{count}} часов'
        }
    }),
    xHours: a({
        regular: {
            singularNominative: '{{count}} час',
            singularGenitive: '{{count}} часа',
            pluralGenitive: '{{count}} часов'
        }
    }),
    xDays: a({
        regular: {
            singularNominative: '{{count}} день',
            singularGenitive: '{{count}} дня',
            pluralGenitive: '{{count}} дней'
        }
    }),
    aboutXWeeks: a({
        regular: {
            singularNominative: 'около {{count}} недели',
            singularGenitive: 'около {{count}} недель',
            pluralGenitive: 'около {{count}} недель'
        },
        future: {
            singularNominative: 'приблизительно через {{count}} неделю',
            singularGenitive: 'приблизительно через {{count}} недели',
            pluralGenitive: 'приблизительно через {{count}} недель'
        }
    }),
    xWeeks: a({
        regular: {
            singularNominative: '{{count}} неделя',
            singularGenitive: '{{count}} недели',
            pluralGenitive: '{{count}} недель'
        }
    }),
    aboutXMonths: a({
        regular: {
            singularNominative: 'около {{count}} месяца',
            singularGenitive: 'около {{count}} месяцев',
            pluralGenitive: 'около {{count}} месяцев'
        },
        future: {
            singularNominative: 'приблизительно через {{count}} месяц',
            singularGenitive: 'приблизительно через {{count}} месяца',
            pluralGenitive: 'приблизительно через {{count}} месяцев'
        }
    }),
    xMonths: a({
        regular: {
            singularNominative: '{{count}} месяц',
            singularGenitive: '{{count}} месяца',
            pluralGenitive: '{{count}} месяцев'
        }
    }),
    aboutXYears: a({
        regular: {
            singularNominative: 'около {{count}} года',
            singularGenitive: 'около {{count}} лет',
            pluralGenitive: 'около {{count}} лет'
        },
        future: {
            singularNominative: 'приблизительно через {{count}} год',
            singularGenitive: 'приблизительно через {{count}} года',
            pluralGenitive: 'приблизительно через {{count}} лет'
        }
    }),
    xYears: a({
        regular: {
            singularNominative: '{{count}} год',
            singularGenitive: '{{count}} года',
            pluralGenitive: '{{count}} лет'
        }
    }),
    overXYears: a({
        regular: {
            singularNominative: 'больше {{count}} года',
            singularGenitive: 'больше {{count}} лет',
            pluralGenitive: 'больше {{count}} лет'
        },
        future: {
            singularNominative: 'больше, чем через {{count}} год',
            singularGenitive: 'больше, чем через {{count}} года',
            pluralGenitive: 'больше, чем через {{count}} лет'
        }
    }),
    almostXYears: a({
        regular: {
            singularNominative: 'почти {{count}} год',
            singularGenitive: 'почти {{count}} года',
            pluralGenitive: 'почти {{count}} лет'
        },
        future: {
            singularNominative: 'почти через {{count}} год',
            singularGenitive: 'почти через {{count}} года',
            pluralGenitive: 'почти через {{count}} лет'
        }
    })
};
let u = function (i, n, e) {
    return r[i](n, e);
};
