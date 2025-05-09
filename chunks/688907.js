n.d(i, {
    BH: () => r,
    MH: () => s
});
var e = n(442837),
    o = n(524437),
    a = n(761781),
    l = n(695346);
function r() {
    return c(
        l.YT.useSetting(),
        (0, e.e7)([a.Z], () => a.Z.currentUserApplicationIds.size > 0)
    );
}
function s() {
    return c(l.YT.getSetting(), a.Z.currentUserApplicationIds.size > 0);
}
function c(t, i) {
    return t === o.Tv.ACTIVITY_NOTIFICATIONS_UNSET ? (i ? o.Tv.ONLY_GAMES_PLAYED : o.Tv.ACTIVITY_NOTIFICATIONS_ENABLED) : t !== o.Tv.ONLY_GAMES_PLAYED || i ? t : o.Tv.ACTIVITY_NOTIFICATIONS_ENABLED;
}
