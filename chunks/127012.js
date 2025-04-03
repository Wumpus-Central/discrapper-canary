t.d(e, { Z: () => n });
var i = {
    lastWeek: "'viime' eeee 'klo' p",
    yesterday: "'eilen klo' p",
    today: "'tänään klo' p",
    tomorrow: "'huomenna klo' p",
    nextWeek: "'ensi' eeee 'klo' p",
    other: 'P'
};
let n = function (a, e, t, n) {
    return i[a];
};
