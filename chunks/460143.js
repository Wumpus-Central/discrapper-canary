a.d(t, { A: () => s });
var i = ["vasárnap", "hétfőn", "kedden", "szerdán", "csütörtökön", "pénteken", "szombaton"];
function r(e) {
    return function (t) {
        var a = i[t.getUTCDay()];
        return "".concat(e ? "" : "'múlt' ", "'").concat(a, "' p'-kor'");
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
