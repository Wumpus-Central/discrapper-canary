n.d(t, {
    BH: () => a,
    MH: () => s
});
var r = n(442837),
    i = n(524437),
    l = n(761781),
    o = n(695346);
function a() {
    return c(
        o.YT.useSetting(),
        (0, r.e7)([l.Z], () => l.Z.currentUserApplicationIds.size > 0)
    );
}
function s() {
    return c(o.YT.getSetting(), l.Z.currentUserApplicationIds.size > 0);
}
function c(e, t) {
    return e === i.Tv.ACTIVITY_NOTIFICATIONS_UNSET ? (t ? i.Tv.ONLY_GAMES_PLAYED : i.Tv.ACTIVITY_NOTIFICATIONS_ENABLED) : e !== i.Tv.ONLY_GAMES_PLAYED || t ? e : i.Tv.ACTIVITY_NOTIFICATIONS_ENABLED;
}
