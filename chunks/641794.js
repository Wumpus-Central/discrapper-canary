a.d(e, { Z: () => p });
var t = {
        xseconds_other: 'sekundė_sekundžių_sekundes',
        xminutes_one: 'minutė_minutės_minutę',
        xminutes_other: 'minutės_minučių_minutes',
        xhours_one: 'valanda_valandos_valandą',
        xhours_other: 'valandos_valandų_valandas',
        xdays_one: 'diena_dienos_dieną',
        xdays_other: 'dienos_dienų_dienas',
        xweeks_one: 'savaitė_savaitės_savaitę',
        xweeks_other: 'savaitės_savaičių_savaites',
        xmonths_one: 'mėnuo_mėnesio_mėnesį',
        xmonths_other: 'mėnesiai_mėnesių_mėnesius',
        xyears_one: 'metai_metų_metus',
        xyears_other: 'metai_metų_metus',
        about: 'apie',
        over: 'daugiau nei',
        almost: 'beveik',
        lessthan: 'mažiau nei'
    },
    r = function (i, e, a, t) {
        return e ? (t ? 'kelių sekundžių' : 'kelias sekundes') : 'kelios sekundės';
    },
    n = function (i, e, a, t) {
        return e ? (t ? d(a)[1] : d(a)[2]) : d(a)[0];
    },
    s = function (i, e, a, t) {
        var r = i + ' ';
        return 1 === i ? r + n(i, e, a, t) : e ? (t ? r + d(a)[1] : r + (o(i) ? d(a)[1] : d(a)[2])) : r + (o(i) ? d(a)[1] : d(a)[0]);
    };
function o(i) {
    return i % 10 == 0 || (i > 10 && i < 20);
}
function d(i) {
    return t[i].split('_');
}
var u = {
    lessThanXSeconds: {
        one: r,
        other: s
    },
    xSeconds: {
        one: r,
        other: s
    },
    halfAMinute: 'pusė minutės',
    lessThanXMinutes: {
        one: n,
        other: s
    },
    xMinutes: {
        one: n,
        other: s
    },
    aboutXHours: {
        one: n,
        other: s
    },
    xHours: {
        one: n,
        other: s
    },
    xDays: {
        one: n,
        other: s
    },
    aboutXWeeks: {
        one: n,
        other: s
    },
    xWeeks: {
        one: n,
        other: s
    },
    aboutXMonths: {
        one: n,
        other: s
    },
    xMonths: {
        one: n,
        other: s
    },
    aboutXYears: {
        one: n,
        other: s
    },
    xYears: {
        one: n,
        other: s
    },
    overXYears: {
        one: n,
        other: s
    },
    almostXYears: {
        one: n,
        other: s
    }
};
let p = function (i, e, a) {
    var r,
        n = i.match(/about|over|almost|lessthan/i),
        s = n ? i.replace(n[0], '') : i,
        o = (null == a ? void 0 : a.comparison) !== void 0 && a.comparison > 0,
        d = u[i];
    if (((r = 'string' == typeof d ? d : 1 === e ? d.one(e, (null == a ? void 0 : a.addSuffix) === !0, s.toLowerCase() + '_one', o) : d.other(e, (null == a ? void 0 : a.addSuffix) === !0, s.toLowerCase() + '_other', o)), n && (r = t[n[0].toLowerCase()] + ' ' + r), null != a && a.addSuffix))
        if (a.comparison && a.comparison > 0) return 'po ' + r;
        else return 'prieš ' + r;
    return r;
};
