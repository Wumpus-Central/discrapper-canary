n.d(t, { Z: () => i });
var a = {
    lessThanXSeconds: {
        one: '少於 1 秒',
        other: '少於 {{count}} 秒'
    },
    xSeconds: {
        one: '1 秒',
        other: '{{count}} 秒'
    },
    halfAMinute: '半分鐘',
    lessThanXMinutes: {
        one: '少於 1 分鐘',
        other: '少於 {{count}} 分鐘'
    },
    xMinutes: {
        one: '1 分鐘',
        other: '{{count}} 分鐘'
    },
    xHours: {
        one: '1 小時',
        other: '{{count}} 小時'
    },
    aboutXHours: {
        one: '大約 1 小時',
        other: '大約 {{count}} 小時'
    },
    xDays: {
        one: '1 天',
        other: '{{count}} 天'
    },
    aboutXWeeks: {
        one: '大約 1 個星期',
        other: '大約 {{count}} 個星期'
    },
    xWeeks: {
        one: '1 個星期',
        other: '{{count}} 個星期'
    },
    aboutXMonths: {
        one: '大約 1 個月',
        other: '大約 {{count}} 個月'
    },
    xMonths: {
        one: '1 個月',
        other: '{{count}} 個月'
    },
    aboutXYears: {
        one: '大約 1 年',
        other: '大約 {{count}} 年'
    },
    xYears: {
        one: '1 年',
        other: '{{count}} 年'
    },
    overXYears: {
        one: '超過 1 年',
        other: '超過 {{count}} 年'
    },
    almostXYears: {
        one: '將近 1 年',
        other: '將近 {{count}} 年'
    }
};
let i = function (e, t, n) {
    var i,
        r = a[e];
    if (((i = 'string' == typeof r ? r : 1 === t ? r.one : r.other.replace('{{count}}', String(t))), null != n && n.addSuffix))
        if (n.comparison && n.comparison > 0) return i + '內';
        else return i + '前';
    return i;
};
