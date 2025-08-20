n.d(t, {
    BH: () => s,
    MH: () => l,
    j4: () => d,
    nC: () => u,
});
var r = n(442837),
    i = n(524437),
    a = n(761781),
    o = n(695346);
function s() {
    return c(
        o.YT.useSetting(),
        (0, r.e7)([a.Z], () => a.Z.currentUserApplicationIds.size > 0),
    );
}
function l() {
    return c(o.YT.getSetting(), a.Z.currentUserApplicationIds.size > 0);
}
function c(e, t) {
    return e === i.Tv.ACTIVITY_NOTIFICATIONS_UNSET
        ? t
            ? i.Tv.ONLY_GAMES_PLAYED
            : i.Tv.ACTIVITY_NOTIFICATIONS_ENABLED
        : e !== i.Tv.ONLY_GAMES_PLAYED || t
          ? e
          : i.Tv.ACTIVITY_NOTIFICATIONS_ENABLED;
}
function u() {
    return o.Qq.useSetting();
}
function d() {
    return o.Qq.getSetting();
}
