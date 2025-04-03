a.d(t, { Z: () => i });
var n = a(799761);
function r(e, t, a, n, r) {
    return e + '-' + ('quarter' === t ? r : 'year' === t || 'week' === t || 'minute' === t || 'second' === t ? n : a);
}
let i = {
    ordinalNumber: function (e, t) {
        var a = Number(e),
            n = null == t ? void 0 : t.unit;
        if (0 === a) return r(0, n, 'ев', 'ева', 'ево');
        if (a % 1000 == 0) return r(a, n, 'ен', 'на', 'но');
        if (a % 100 == 0) return r(a, n, 'тен', 'тна', 'тно');
        var i = a % 100;
        if (i > 20 || i < 10)
            switch (i % 10) {
                case 1:
                    return r(a, n, 'ви', 'ва', 'во');
                case 2:
                    return r(a, n, 'ри', 'ра', 'ро');
                case 7:
                case 8:
                    return r(a, n, 'ми', 'ма', 'мо');
            }
        return r(a, n, 'ти', 'та', 'то');
    },
    era: (0, n.Z)({
        values: {
            narrow: ['пр.н.е.', 'н.е.'],
            abbreviated: ['преди н. е.', 'н. е.'],
            wide: ['преди новата ера', 'новата ера']
        },
        defaultWidth: 'wide'
    }),
    quarter: (0, n.Z)({
        values: {
            narrow: ['1', '2', '3', '4'],
            abbreviated: ['1-во тримес.', '2-ро тримес.', '3-то тримес.', '4-то тримес.'],
            wide: ['1-во тримесечие', '2-ро тримесечие', '3-то тримесечие', '4-то тримесечие']
        },
        defaultWidth: 'wide',
        argumentCallback: function (e) {
            return e - 1;
        }
    }),
    month: (0, n.Z)({
        values: {
            abbreviated: ['яну', 'фев', 'мар', 'апр', 'май', 'юни', 'юли', 'авг', 'сеп', 'окт', 'ное', 'дек'],
            wide: ['януари', 'февруари', 'март', 'април', 'май', 'юни', 'юли', 'август', 'септември', 'октомври', 'ноември', 'декември']
        },
        defaultWidth: 'wide'
    }),
    day: (0, n.Z)({
        values: {
            narrow: ['Н', 'П', 'В', 'С', 'Ч', 'П', 'С'],
            short: ['нд', 'пн', 'вт', 'ср', 'чт', 'пт', 'сб'],
            abbreviated: ['нед', 'пон', 'вто', 'сря', 'чет', 'пет', 'съб'],
            wide: ['неделя', 'понеделник', 'вторник', 'сряда', 'четвъртък', 'петък', 'събота']
        },
        defaultWidth: 'wide'
    }),
    dayPeriod: (0, n.Z)({
        values: {
            wide: {
                am: 'преди обяд',
                pm: 'след обяд',
                midnight: 'в полунощ',
                noon: 'на обяд',
                morning: 'сутринта',
                afternoon: 'следобед',
                evening: 'вечерта',
                night: 'през нощта'
            }
        },
        defaultWidth: 'wide'
    })
};
