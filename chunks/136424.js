t.d(n, { Z: () => o });
var e = t(757490),
    a = ['воскресенье', 'понедельник', 'вторник', 'среду', 'четверг', 'пятницу', 'субботу'];
function r(i) {
    var n = a[i];
    return 2 === i ? "'во " + n + " в' p" : "'в " + n + " в' p";
}
var u = {
    lastWeek: function (i, n, t) {
        var u = i.getUTCDay();
        return (0, e.Z)(i, n, t)
            ? r(u)
            : (function (i) {
                  var n = a[i];
                  switch (i) {
                      case 0:
                          return "'в прошлое " + n + " в' p";
                      case 1:
                      case 2:
                      case 4:
                          return "'в прошлый " + n + " в' p";
                      case 3:
                      case 5:
                      case 6:
                          return "'в прошлую " + n + " в' p";
                  }
              })(u);
    },
    yesterday: "'вчера в' p",
    today: "'сегодня в' p",
    tomorrow: "'завтра в' p",
    nextWeek: function (i, n, t) {
        var u = i.getUTCDay();
        return (0, e.Z)(i, n, t)
            ? r(u)
            : (function (i) {
                  var n = a[i];
                  switch (i) {
                      case 0:
                          return "'в следующее " + n + " в' p";
                      case 1:
                      case 2:
                      case 4:
                          return "'в следующий " + n + " в' p";
                      case 3:
                      case 5:
                      case 6:
                          return "'в следующую " + n + " в' p";
                  }
              })(u);
    },
    other: 'P'
};
let o = function (i, n, t, e) {
    var a = u[i];
    return 'function' == typeof a ? a(n, t, e) : a;
};
