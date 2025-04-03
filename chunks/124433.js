t.d(a, { Z: () => n });
var i = {
    lastWeek: function (e) {
        var a = e.getUTCDay();
        return "'" + (0 === a || 6 === a ? 'último' : 'última') + "' eeee 'às' p";
    },
    yesterday: "'ontem às' p",
    today: "'hoje às' p",
    tomorrow: "'amanhã às' p",
    nextWeek: "eeee 'às' p",
    other: 'P'
};
let n = function (e, a, t, n) {
    var o = i[e];
    return 'function' == typeof o ? o(a) : o;
};
