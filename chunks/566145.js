t.d(e, { Z: () => i });
var n = {
    lastWeek: "'geçen hafta' eeee 'saat' p",
    yesterday: "'dün saat' p",
    today: "'bugün saat' p",
    tomorrow: "'yarın saat' p",
    nextWeek: "eeee 'saat' p",
    other: 'P'
};
let i = function (a, e, t, i) {
    return n[a];
};
