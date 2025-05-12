e.d(i, {
    BH: () => r,
    MH: () => s
});
var n = e(442837),
    o = e(524437),
    a = e(761781),
    l = e(695346);
function r() {
    return c(
        l.YT.useSetting(),
        (0, n.e7)([a.Z], () => a.Z.currentUserApplicationIds.size > 0)
    );
}
function s() {
    return c(l.YT.getSetting(), a.Z.currentUserApplicationIds.size > 0);
}
function c(t, i) {
    return t === o.Tv.ACTIVITY_NOTIFICATIONS_UNSET ? (i ? o.Tv.ONLY_GAMES_PLAYED : o.Tv.ACTIVITY_NOTIFICATIONS_ENABLED) : t !== o.Tv.ONLY_GAMES_PLAYED || i ? t : o.Tv.ACTIVITY_NOTIFICATIONS_ENABLED;
}
