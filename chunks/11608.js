n.d(t, { Z: () => r });
var i = {
    lastWeek: "'last' eeee 'at' p",
    yesterday: "'yesterday at' p",
    today: "'today at' p",
    tomorrow: "'tomorrow at' p",
    nextWeek: "eeee 'at' p",
    other: 'P'
};
let r = function (e, t, n, r) {
    return i[e];
};
