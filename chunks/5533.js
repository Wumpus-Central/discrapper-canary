n.d(t, { A: () => o });
var a = n(204801);
function i(e, t, n) {
    var i = "eeee p";
    return (0, a.A)(e, t, n) ? i : e.getTime() > t.getTime() ? "'下个'" + i : "'上个'" + i;
}
var r = { lastWeek: i, yesterday: "'昨天' p", today: "'今天' p", tomorrow: "'明天' p", nextWeek: i, other: "PP p" };
let o = function (e, t, n, a) {
    var i = r[e];
    return "function" == typeof i ? i(t, n, a) : i;
};
