e.d(n, { Z: () => o });
var t = e(757490),
    a = ['воскресенье', 'понедельник', 'вторник', 'среду', 'четверг', 'пятницу', 'субботу'];
function r(i) {
    var n = a[i];
    return 2 === i ? "'во " + n + " в' p" : "'в " + n + " в' p";
}
var u = {
    lastWeek: function (i, n, e) {
        var u = i.getUTCDay();
        if ((0, t.Z)(i, n, e)) return r(u);
        var o = a[u];
        switch (u) {
            case 0:
                return "'в прошлое " + o + " в' p";
            case 1:
            case 2:
            case 4:
                return "'в прошлый " + o + " в' p";
            case 3:
            case 5:
            case 6:
                return "'в прошлую " + o + " в' p";
        }
    },
    yesterday: "'вчера в' p",
    today: "'сегодня в' p",
    tomorrow: "'завтра в' p",
    nextWeek: function (i, n, e) {
        var u = i.getUTCDay();
        if ((0, t.Z)(i, n, e)) return r(u);
        var o = a[u];
        switch (u) {
            case 0:
                return "'в следующее " + o + " в' p";
            case 1:
            case 2:
            case 4:
                return "'в следующий " + o + " в' p";
            case 3:
            case 5:
            case 6:
                return "'в следующую " + o + " в' p";
        }
    },
    other: 'P'
};
let o = function (i, n, e, t) {
    var a = u[i];
    return 'function' == typeof a ? a(n, e, t) : a;
};
