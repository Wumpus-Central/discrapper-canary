i.d(t, { Z: () => a });
var n = {
    lastWeek: "eeee'ที่แล้วเวลา' p",
    yesterday: "'เมื่อวานนี้เวลา' p",
    today: "'วันนี้เวลา' p",
    tomorrow: "'พรุ่งนี้เวลา' p",
    nextWeek: "eeee 'เวลา' p",
    other: 'P'
};
let a = function (e, t, i, a) {
    return n[e];
};
