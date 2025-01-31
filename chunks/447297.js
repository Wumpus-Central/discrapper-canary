n.d(t, { Z: () => r });
var a = {
    lastWeek: "'sidste' eeee 'kl.' p",
    yesterday: "'i går kl.' p",
    today: "'i dag kl.' p",
    tomorrow: "'i morgen kl.' p",
    nextWeek: "'på' eeee 'kl.' p",
    other: 'P'
};
let r = function (e, t, n, r) {
    return a[e];
};
