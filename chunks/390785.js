i.d(a, { A: () => d });
var t = i(204801),
    n = ["domenica", "luned\xec", "marted\xec", "mercoled\xec", "gioved\xec", "venerd\xec", "sabato"];
function o(e) {
    return "'" + n[e] + " alle' p";
}
var r = {
    lastWeek: function (e, a, i) {
        var r = e.getUTCDay();
        return (0, t.A)(e, a, i) ? o(r) : 0 === r ? "'domenica scorsa alle' p" : "'" + n[r] + " scorso alle' p";
    },
    yesterday: "'ieri alle' p",
    today: "'oggi alle' p",
    tomorrow: "'domani alle' p",
    nextWeek: function (e, a, i) {
        var r = e.getUTCDay();
        return (0, t.A)(e, a, i) ? o(r) : 0 === r ? "'domenica prossima alle' p" : "'" + n[r] + " prossimo alle' p";
    },
    other: "P",
};
let d = function (e, a, i, t) {
    var n = r[e];
    return "function" == typeof n ? n(a, i, t) : n;
};
