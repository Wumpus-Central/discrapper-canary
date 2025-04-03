a.d(t, { Z: () => s });
var i = ['vasárnap', 'hétfőn', 'kedden', 'szerdán', 'csütörtökön', 'pénteken', 'szombaton'];
function n(e) {
    return function (t) {
        var a = i[t.getUTCDay()];
        return ''.concat(e ? '' : "'múlt' ", "'").concat(a, "' p'-kor'");
    };
}
var r = {
    lastWeek: n(!1),
    yesterday: "'tegnap' p'-kor'",
    today: "'ma' p'-kor'",
    tomorrow: "'holnap' p'-kor'",
    nextWeek: n(!0),
    other: 'P'
};
let s = function (e, t) {
    var a = r[e];
    return 'function' == typeof a ? a(t) : a;
};
