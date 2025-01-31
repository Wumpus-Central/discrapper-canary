n.d(e, { Z: () => i });
var t = {
    lastWeek: function (o) {
        switch (o.getUTCDay()) {
            case 0:
                return "'prošlu nedjelju u' p";
            case 3:
                return "'prošlu srijedu u' p";
            case 6:
                return "'prošlu subotu u' p";
            default:
                return "'prošli' EEEE 'u' p";
        }
    },
    yesterday: "'jučer u' p",
    today: "'danas u' p",
    tomorrow: "'sutra u' p",
    nextWeek: function (o) {
        switch (o.getUTCDay()) {
            case 0:
                return "'iduću nedjelju u' p";
            case 3:
                return "'iduću srijedu u' p";
            case 6:
                return "'iduću subotu u' p";
            default:
                return "'prošli' EEEE 'u' p";
        }
    },
    other: 'P'
};
let i = function (o, e, n, i) {
    var a = t[o];
    return 'function' == typeof a ? a(e) : a;
};
