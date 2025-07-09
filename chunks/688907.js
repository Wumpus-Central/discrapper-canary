a.d(t, {
    BH: () => s,
    MH: () => o,
    j4: () => u,
    nC: () => d
});
var n = a(442837),
    r = a(524437),
    l = a(761781),
    i = a(695346);
function s() {
    return c(
        i.YT.useSetting(),
        (0, n.e7)([l.Z], () => l.Z.currentUserApplicationIds.size > 0)
    );
}
function o() {
    return c(i.YT.getSetting(), l.Z.currentUserApplicationIds.size > 0);
}
function c(e, t) {
    return e === r.Tv.ACTIVITY_NOTIFICATIONS_UNSET ? (t ? r.Tv.ONLY_GAMES_PLAYED : r.Tv.ACTIVITY_NOTIFICATIONS_ENABLED) : e !== r.Tv.ONLY_GAMES_PLAYED || t ? e : r.Tv.ACTIVITY_NOTIFICATIONS_ENABLED;
}
function d() {
    return i.Qq.useSetting();
}
function u() {
    return i.Qq.getSetting();
}
