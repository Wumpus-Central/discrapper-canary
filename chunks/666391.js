n.d(e, { Z: () => o });
var i = n(757490);
function a(t, e, n) {
    var a = 'eeee p';
    return (0, i.Z)(t, e, n) ? a : t.getTime() > e.getTime() ? "'下个'" + a : "'上个'" + a;
}
var r = {
    lastWeek: a,
    yesterday: "'昨天' p",
    today: "'今天' p",
    tomorrow: "'明天' p",
    nextWeek: a,
    other: 'PP p'
};
let o = function (t, e, n, i) {
    var a = r[t];
    return 'function' == typeof a ? a(e, n, i) : a;
};
