a.d(i, { Z: () => n });
var t = {
    lastWeek: "eeee 'dernier à' p",
    yesterday: "'hier à' p",
    today: "'aujourd\u2019hui à' p",
    tomorrow: "'demain à' p'",
    nextWeek: "eeee 'prochain à' p",
    other: 'P'
};
let n = function (e, i, a, n) {
    return t[e];
};
