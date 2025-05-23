n.d(t, { Z: () => r });
var i = n(99887),
    a = {
        lessThanXSeconds: {
            one: '१ सेकंड से कम',
            other: '{{count}} सेकंड से कम'
        },
        xSeconds: {
            one: '१ सेकंड',
            other: '{{count}} सेकंड'
        },
        halfAMinute: 'आधा मिनट',
        lessThanXMinutes: {
            one: '१ मिनट से कम',
            other: '{{count}} मिनट से कम'
        },
        xMinutes: {
            one: '१ मिनट',
            other: '{{count}} मिनट'
        },
        aboutXHours: {
            one: 'लगभग १ घंटा',
            other: 'लगभग {{count}} घंटे'
        },
        xHours: {
            one: '१ घंटा',
            other: '{{count}} घंटे'
        },
        xDays: {
            one: '१ दिन',
            other: '{{count}} दिन'
        },
        aboutXWeeks: {
            one: 'लगभग १ सप्ताह',
            other: 'लगभग {{count}} सप्ताह'
        },
        xWeeks: {
            one: '१ सप्ताह',
            other: '{{count}} सप्ताह'
        },
        aboutXMonths: {
            one: 'लगभग १ महीना',
            other: 'लगभग {{count}} महीने'
        },
        xMonths: {
            one: '१ महीना',
            other: '{{count}} महीने'
        },
        aboutXYears: {
            one: 'लगभग १ वर्ष',
            other: 'लगभग {{count}} वर्ष'
        },
        xYears: {
            one: '१ वर्ष',
            other: '{{count}} वर्ष'
        },
        overXYears: {
            one: '१ वर्ष से अधिक',
            other: '{{count}} वर्ष से अधिक'
        },
        almostXYears: {
            one: 'लगभग १ वर्ष',
            other: 'लगभग {{count}} वर्ष'
        }
    };
let r = function (e, t, n) {
    var r,
        o = a[e];
    if (((r = 'string' == typeof o ? o : 1 === t ? o.one : o.other.replace('{{count}}', (0, i.N4)(t))), null != n && n.addSuffix))
        if (n.comparison && n.comparison > 0) return r + 'मे ';
        else return r + ' पहले';
    return r;
};
