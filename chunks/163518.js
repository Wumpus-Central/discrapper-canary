n.d(t, { A: () => s });
var i = n(697831);
function s(e) {
    let { currentActivities: t, isSpotifyActivity: n } = e,
        s = t[0],
        l = (0, i.A)(s?.activity, s?.activityUser);
    return n ? l : null;
}
