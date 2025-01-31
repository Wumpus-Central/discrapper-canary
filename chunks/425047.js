a.d(t, { Z: () => d });
var n = a(528734),
    r = a(757490),
    i = ['неделя', 'понеделник', 'вторник', 'сряда', 'четвъртък', 'петък', 'събота'];
function o(e) {
    var t = i[e];
    return 2 === e ? "'във " + t + " в' p" : "'в " + t + " в' p";
}
var u = {
    lastWeek: function (e, t, a) {
        var u = (0, n.default)(e),
            d = u.getUTCDay();
        return (0, r.Z)(u, t, a)
            ? o(d)
            : (function (e) {
                  var t = i[e];
                  switch (e) {
                      case 0:
                      case 3:
                      case 6:
                          return "'миналата " + t + " в' p";
                      case 1:
                      case 2:
                      case 4:
                      case 5:
                          return "'миналия " + t + " в' p";
                  }
              })(d);
    },
    yesterday: "'вчера в' p",
    today: "'днес в' p",
    tomorrow: "'утре в' p",
    nextWeek: function (e, t, a) {
        var u = (0, n.default)(e),
            d = u.getUTCDay();
        return (0, r.Z)(u, t, a)
            ? o(d)
            : (function (e) {
                  var t = i[e];
                  switch (e) {
                      case 0:
                      case 3:
                      case 6:
                          return "'следващата " + t + " в' p";
                      case 1:
                      case 2:
                      case 4:
                      case 5:
                          return "'следващия " + t + " в' p";
                  }
              })(d);
    },
    other: 'P'
};
let d = function (e, t, a, n) {
    var r = u[e];
    return 'function' == typeof r ? r(t, a, n) : r;
};
