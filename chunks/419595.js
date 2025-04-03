a.d(t, { Z: () => r });
var n = {
    lessThanXSeconds: {
        one: 'по-малко от секунда',
        other: 'по-малко от {{count}} секунди'
    },
    xSeconds: {
        one: '1 секунда',
        other: '{{count}} секунди'
    },
    halfAMinute: 'половин минута',
    lessThanXMinutes: {
        one: 'по-малко от минута',
        other: 'по-малко от {{count}} минути'
    },
    xMinutes: {
        one: '1 минута',
        other: '{{count}} минути'
    },
    aboutXHours: {
        one: 'около час',
        other: 'около {{count}} часа'
    },
    xHours: {
        one: '1 час',
        other: '{{count}} часа'
    },
    xDays: {
        one: '1 ден',
        other: '{{count}} дни'
    },
    aboutXWeeks: {
        one: 'около седмица',
        other: 'около {{count}} седмици'
    },
    xWeeks: {
        one: '1 седмица',
        other: '{{count}} седмици'
    },
    aboutXMonths: {
        one: 'около месец',
        other: 'около {{count}} месеца'
    },
    xMonths: {
        one: '1 месец',
        other: '{{count}} месеца'
    },
    aboutXYears: {
        one: 'около година',
        other: 'около {{count}} години'
    },
    xYears: {
        one: '1 година',
        other: '{{count}} години'
    },
    overXYears: {
        one: 'над година',
        other: 'над {{count}} години'
    },
    almostXYears: {
        one: 'почти година',
        other: 'почти {{count}} години'
    }
};
let r = function (e, t, a) {
    var r,
        i = n[e];
    if (((r = 'string' == typeof i ? i : 1 === t ? i.one : i.other.replace('{{count}}', String(t))), null != a && a.addSuffix))
        if (a.comparison && a.comparison > 0) return 'след ' + r;
        else return 'преди ' + r;
    return r;
};
