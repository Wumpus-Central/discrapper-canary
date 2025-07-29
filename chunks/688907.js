n.d(t, {
    BH: () => a,
    MH: () => o,
    j4: () => d,
    nC: () => u
});
var r = n(442837),
    i = n(524437),
    l = n(761781),
    s = n(695346);
function a() {
    return c(
        s.YT.useSetting(),
        (0, r.e7)([l.Z], () => l.Z.currentUserApplicationIds.size > 0)
    );
}
function o() {
    return c(s.YT.getSetting(), l.Z.currentUserApplicationIds.size > 0);
}
function c(e, t) {
    return e === i.Tv.ACTIVITY_NOTIFICATIONS_UNSET ? (t ? i.Tv.ONLY_GAMES_PLAYED : i.Tv.ACTIVITY_NOTIFICATIONS_ENABLED) : e !== i.Tv.ONLY_GAMES_PLAYED || t ? e : i.Tv.ACTIVITY_NOTIFICATIONS_ENABLED;
}
function u() {
    return s.Qq.useSetting();
}
function d() {
    return s.Qq.getSetting();
}
