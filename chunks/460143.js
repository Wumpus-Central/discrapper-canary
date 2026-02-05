a.d(t, { A: () => s });
var i = ["vas\xe1rnap", "h\xe9tfőn", "kedden", "szerd\xe1n", "cs\xfct\xf6rt\xf6k\xf6n", "p\xe9nteken", "szombaton"];
function r(e) {
    return function (t) {
        var a = i[t.getUTCDay()];
        return "".concat(e ? "" : "'m\xfalt' ", "'").concat(a, "' p'-kor'");
    };
}
var n = {
    lastWeek: r(!1),
    yesterday: "'tegnap' p'-kor'",
    today: "'ma' p'-kor'",
    tomorrow: "'holnap' p'-kor'",
    nextWeek: r(!0),
    other: "P",
};
let s = function (e, t) {
    var a = n[e];
    return "function" == typeof a ? a(t) : a;
};
