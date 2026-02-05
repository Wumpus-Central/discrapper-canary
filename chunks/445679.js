a.d(t, { A: () => u });
var r = a(29583),
    n = a(204801),
    i = ["неделя", "понеделник", "вторник", "сряда", "четвъртък", "петък", "събота"];
function o(e) {
    var t = i[e];
    return 2 === e ? "'във " + t + " в' p" : "'в " + t + " в' p";
}
var d = {
    lastWeek: function (e, t, a) {
        var d = (0, r.default)(e),
            u = d.getUTCDay();
        if ((0, n.A)(d, t, a)) return o(u);
        var s = i[u];
        switch (u) {
            case 0:
            case 3:
            case 6:
                return "'миналата " + s + " в' p";
            case 1:
            case 2:
            case 4:
            case 5:
                return "'миналия " + s + " в' p";
        }
    },
    yesterday: "'вчера в' p",
    today: "'днес в' p",
    tomorrow: "'утре в' p",
    nextWeek: function (e, t, a) {
        var d = (0, r.default)(e),
            u = d.getUTCDay();
        if ((0, n.A)(d, t, a)) return o(u);
        var s = i[u];
        switch (u) {
            case 0:
            case 3:
            case 6:
                return "'следващата " + s + " в' p";
            case 1:
            case 2:
            case 4:
            case 5:
                return "'следващия " + s + " в' p";
        }
    },
    other: "P",
};
let u = function (e, t, a, r) {
    var n = d[e];
    return "function" == typeof n ? n(t, a, r) : n;
};
