i.d(n, { Z: () => a });
var e = {
    lastWeek: "eeee 'tuần trước vào lúc' p",
    yesterday: "'hôm qua vào lúc' p",
    today: "'hôm nay vào lúc' p",
    tomorrow: "'ngày mai vào lúc' p",
    nextWeek: "eeee 'tới vào lúc' p",
    other: 'P'
};
let a = function (t, n, i, a) {
    return e[t];
};
