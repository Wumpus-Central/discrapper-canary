n.d(t, { A: () => r });
var i = n(697831);
function r(e) {
    let { currentActivities: t, isSpotifyActivity: n } = e,
        r = t[0],
        a = (0, i.A)(r?.activity, r?.activityUser);
    return n ? a : null;
}
