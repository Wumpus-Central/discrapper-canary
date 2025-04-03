t.d(n, { Z: () => a });
var o = ['neděli', 'pondělí', 'úterý', 'středu', 'čtvrtek', 'pátek', 'sobotu'],
    r = {
        lastWeek: "'poslední' eeee 've' p",
        yesterday: "'včera v' p",
        today: "'dnes v' p",
        tomorrow: "'zítra v' p",
        nextWeek: function (e) {
            return "'v " + o[e.getUTCDay()] + " o' p";
        },
        other: 'P'
    };
let a = function (e, n) {
    var t = r[e];
    return 'function' == typeof t ? t(n) : t;
};
