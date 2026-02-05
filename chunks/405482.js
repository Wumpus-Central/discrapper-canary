t.d(n, { A: () => a });
var r = ["neděli", "ponděl\xed", "\xfater\xfd", "středu", "čtvrtek", "p\xe1tek", "sobotu"],
    o = {
        lastWeek: "'posledn\xed' eeee 've' p",
        yesterday: "'včera v' p",
        today: "'dnes v' p",
        tomorrow: "'z\xedtra v' p",
        nextWeek: function (e) {
            return "'v " + r[e.getUTCDay()] + " o' p";
        },
        other: "P",
    };
let a = function (e, n) {
    var t = o[e];
    return "function" == typeof t ? t(n) : t;
};
